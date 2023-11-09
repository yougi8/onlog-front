import axios from "axios";

const accessToken = localStorage.getItem('accessToken');

export const Get_SinglePost = async (postId) => {

    const response = await axios({
        method: "get",
        url: `/posts/${postId}`,
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return response.data;
};

export const Delete_SinglePost = async (postId) => {
    try {
        const response = await axios({
            method:"delete",
            url: `/posts`,
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            data: {
                postId: postId,
            }
        });
        console.log('delete post api success');
        return response.data;
    } catch (error) {
        console.log('delete post error:',error.response);
        console.error('delete post error: ', error);
        return { success: false, error: error.message };
    }
}