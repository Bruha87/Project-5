import React, {useState, useEffect} from 'react'
import './UserProfileCard.css'


function UserProfileCard({user_activity, deleteFromWishlist}) {
  
//  const [deleteCard, setDeleteCard] = useState([]);

//     this.state = { 
//     status: null
// };

console.log(user_activity.id);
    
  function handleDeleteWishlist() {
    // Simple DELETE request with fetch
    fetch(`/user_activities/${user_activity.id}`, { method: 'DELETE' })
      deleteFromWishlist(user_activity.id)
}
  
  // function handleDeleteWishlist() {
  //   //Update State
  //   const filteredWishlist = user_activity.filter(user_activity => user_activity.activity.id)
  //   setDeleteCard(filteredWishlist)
  //   //Update DB
  //   fetch(`/user_activites/${id}`, {
  //     method: "DELETE",
  //   })
  // }
  
  return (
    <li className="wishlist_card">
      <img src={user_activity.activity.image} alt={user_activity.activity.name}/>
      <h2 >{user_activity.activity.name}</h2>
      <h4 className="wishlist_catagory">{user_activity.activity.catagory}</h4>
      <div className="wishlist_details">
      <p>Location: {user_activity.activity.location}</p>
      <p>Difficulty: {user_activity.activity.difficulty}</p>
      <p>Age Required: {user_activity.activity.age_requirment}</p>
      <p>Hours: {user_activity.activity.hours}</p>
      <p>Start Time: {user_activity.activity.start}</p>
      <button className="removeButton" onClick={handleDeleteWishlist}> Remove From Wishlist </button>
      <div className="wishlist"></div>
      </div>
    </li>
  );
}



export default UserProfileCard;