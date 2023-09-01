import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Friends = () => {
  const friendsData = useLoaderData();
  return (
    <div>
      <h5>These are my {friendsData.length} friends</h5>
      <ol>
        {friendsData.map((friend) => (
          <li key={friend.id}>
            <hr />
            <h6>{friend.name}</h6>
            <p>{friend.email}</p>
            <Link to={`/friendDetails/${friend.id}`}>Show the FriendDetails </Link>
            <hr />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Friends;
