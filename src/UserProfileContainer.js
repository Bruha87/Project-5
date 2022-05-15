import React from 'react'
import UserProfileCard from './UserProfileCard';
import './UserProfileContainer.css'


function UserProfileContainer({wishlistArray, deleteFromWishlist}) {
  
  const wishlistCard = wishlistArray.map( user_activity => <UserProfileCard key={user_activity.id} user_activity={user_activity} deleteFromWishlist={deleteFromWishlist}/>)
  
  return (
    <div className="home">
      <ul id="userCard">
      {wishlistCard}
      </ul>
    </div>
  )
}

export default UserProfileContainer;
