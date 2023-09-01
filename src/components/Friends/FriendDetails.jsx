import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            <h5>This is details of {details.id}</h5>
            <hr />
            <h6>{details.name}</h6>
            <p>{details.email}</p>
            <button onClick={()=>navigate(`/friends`)}>Go All Friends by Btn</button>
            <hr />
        </div>
    );
};

export default FriendDetails;