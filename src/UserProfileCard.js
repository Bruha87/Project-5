import React from 'react'


function UserProfileCard({user_activity}) {
  
  // function handleDeleteWishlist({user_activity}) {
  //   //Update State
  //   const filteredWishlist = user_activity.filter(user_activity => user_activity.id !== id)
  //   set(filteredComments)
  //   //Update DB
  //   fetch('/user_activites', {
  //     method: "DELETE",
  //   })
  // }
  
  return (
    <li className="card">
      <img src={user_activity.activity.image} alt={user_activity.activity.name}/>
      <h2 >{user_activity.activity.name}</h2>
      <h4 className="card_catagory">{user_activity.activity.catagory}</h4>
      <div className="card_details">
      <p>Location: {user_activity.activity.location}</p>
      <p>Difficulty: {user_activity.activity.difficulty}</p>
      <p>Age Required: {user_activity.activity.age_requirment}</p>
      <p>Hours: {user_activity.activity.hours}</p>
      <p>Start Time: {user_activity.activity.start}</p>
      {/* <button className="completedButton" onClick={handleDeleteWishlist}> Remove Activity From Wishlist </button> */}
      <div className="wishlist"></div>
      </div>
    </li>
  );
}



export default UserProfileCard;