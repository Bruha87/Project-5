import React from 'react'
import UserProfileCard from './UserProfileCard';


function UserProfileContainer({wishlistArray}) {
  
  const wishlistCard = wishlistArray.map( user_activity => <UserProfileCard key={user_activity.id} user_activity={user_activity} />)
  
  return (
    <div className="home">
      {wishlistCard}
    </div>
  )
}

export default UserProfileContainer;
