import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../../assets/images/Logo.svg';
import Profile from '../../assets/images/Profile.jpeg';
import { S_bold_25, XS_bold_13 } from '../style/Styled';

const Video = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false); // 3초 후에 loading 상태를 false로 변경
        }, 2000);
        return () => clearTimeout(timer);  // 컴포넌트 unmount시 타이머 해제
    }, []);  // 빈 의존성 배열은 컴포넌트가 마운트될 때 한 번만 실행하도록 합니다.

    if (loading) {
        return <div>Loading...</div>; // 로딩 중일 때 표시할 내용
    }

    return (
        <Menu>
            <ProfileImg></ProfileImg>
            <TitleWrap to={'/mypage'}>
                <Title>Hani Tech World</Title>
                <Name>@hanitech</Name>
            </TitleWrap>            
        </Menu>
    );
};

export default Video;

const Wrap = styled.div`
    background: var(--white);
    padding: 1.88rem 6.25rem;    
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {

    }
`;
const LogoL = styled(Link)``;
const MenuWrap = styled.div`
    display: flex;
    gap: 3.62rem;
    align-items: center;
`;
const Menu = styled(S_bold_25)`
    display: flex;
    align-items: center;
`;
const MenuL = styled(Link)`
    text-decoration: none;
    color: var(--black);
`;
const ProfileImg = styled.div`
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 2.5rem;
    background: url(${Profile}) lightgray 50% / cover no-repeat;
    margin-right: 0.94rem;
`;
const Alarm = styled(XS_bold_13)`
    color: #F00;
    align-self: flex-start;
`;
const TitleWrap = styled(Link)`
text-decoration: none;
color: var(--black);
`;
const Title = styled.div`
    text-align: justify;
`;
const Name = styled.div`
    color: var(--gray_bold, #4A4A4A);
    text-align: justify;
    font-family: Pretendard;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.03375rem;
`;
