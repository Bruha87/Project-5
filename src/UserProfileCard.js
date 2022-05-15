import React, {useState, useEffect} from 'react'
import './UserProfileCard.css'


function UserProfileCard({user_activity, deleteFromWishlist}) {
  

console.log(user_activity.id);
    
  function handleDeleteWishlist() {
    // Simple DELETE request with fetch
    fetch(`/user_activities/${user_activity.id}`, { method: 'DELETE' })
      deleteFromWishlist(user_activity.id)
}
  
  return (
    <li className="wishlist_card">
      {/* <img src={user_activity.activity.image} alt={user_activity.activity.name}/> */}
      <h3 >{user_activity.activity.name}</h3>
      <h4 className="wishlist_catagory">{user_activity.activity.catagory}</h4>
      <div className="wishlist_details">
      <h5>Location: {user_activity.activity.location}</h5>
      <h5>Difficulty: {user_activity.activity.difficulty}</h5>
      <h5>Age Required: {user_activity.activity.age_requirment}</h5>
      <h5>Hours: {user_activity.activity.hours}</h5>
      <h5>Start Time: {user_activity.activity.start}</h5>
      <button className="removeButton" onClick={handleDeleteWishlist}> Remove From Wishlist </button>
      <div className="wishlist"></div>
      </div>
    </li>
  );
}



export default UserProfileCard;