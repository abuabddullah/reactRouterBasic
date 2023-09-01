import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            <h1>PostDetails of {postDetails.id}</h1>
            <hr />
            <h6>{postDetails.title}</h6>
            <p>{postDetails.body}</p>
            <button onClick={()=>navigate(-1)}>Go All Posts by Btn</button>
            <hr />
        </div>
    );
};

export default PostDetails;