import styled from "styled-components";
import { useState, useEffect } from "react";
import { Post_Comment } from "../../apis/API_Comment";

const CommentWrite = ({post}) => {
    
    const [inputText, setInputText] = useState("");
    const [messages, setMessages] = useState({
        postId: "",
        content: "",
        parentCommentId: "",
    });
  
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    }

    // useEffect(() => {
    //     console.log('댓글:', messages);
    // }, [messages]);  // messages가 변경될 때마다 이 효과를 실행
    
    // const handleSubmit = async () => {
    //     const newMessages = {
    //         ...messages,
    //         postId: post.postId,
    //         content: inputText,
    //         parentCommentId: "",
    //     };
    
    //     // Post_Comment 함수를 호출
    //     const response = await Post_Comment(newMessages);
    
    //     if (response.success) {
    //         console.log("Comment posted successfully!");
    //         // 메시지 전송이 성공하면 상태 업데이트
    //         setMessages(newMessages);
    //         setInputText("");
    //     } else {
    //         console.error("Failed to post comment:", response.message);
    //     }
    // }
    
    useEffect(() => {
        console.log('댓글:',messages);

        const postData = async () => {
            // Post_Comment 함수를 호출
            const response = await Post_Comment(messages);
    
            if (response.success) {
                console.log("Comment posted successfully!");
            } else {
                console.error("Failed to post comment:", response.message);
            }
    
            setInputText("");
        }
    
        // messages가 변경될 때마다 비동기 함수 호출
        if (messages.content !== "") {
            postData();
        }
    }, [messages]);  // messages가 변경될 때마다 이 효과를 실행

    const handleSubmit = async () => {
        setMessages({
            ...messages,
            postId: post.postId,
            content: inputText,
            parentCommentId: null,
        });
    
        // // Post_Comment 함수를 호출
        // const response = await Post_Comment(messages);
    
        // if (response.success) {
        //     console.log("Comment posted successfully!");
        // } else {
        //     console.error("Failed to post comment:", response.message);
        // }
    }
    
    return(
        <Wrap>
            <WriteWrap type="text" value={inputText} onChange={handleInputChange}/>
            <Sendbtn onClick={handleSubmit} >
                Send
            </Sendbtn>
        </Wrap>
    );
};

export default CommentWrite;

const Wrap = styled.div`
    padding: 1rem 2rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

`

const WriteWrap = styled.textarea`
    height: auto;
    min-height: 3rem;
    display: flex;
    padding: 2.5rem 1.875rem 2.5rem 3.125rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    background: black;
    color: white;
    
    border: none;
    outline: none;
    resize: none;
`

const Sendbtn = styled.button`
    display: flex;
    padding: 0.5rem 1rem;
    margin-top: 0.5rem;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 0.9375rem;

    color: var(--black, #000);
    background: var(--white, #FFF);

    text-align: justify;
    /* S-bold-19.2(RE) */
    font-family: Pretendard;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    border: 2px solid black;
    cursor: pointer;

    &:hover{
        background: var(--black, #000);
        color: var(--white, #FFF);

        transition: 0.3s;
    }
`
