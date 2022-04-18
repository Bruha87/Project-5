import React, { useState,  } from "react";
import "./ActivityCard.css";
// import UserProfile from "./UserProfile";

function ActivityCard({activity, user}) {

  // const[isClicked, setIsClicked] = useState(false)
  // const [addToWishlist, setAddToWishlist] = useState("")


  
  // function handleSubmit(e){
  //   e.preventDefault()
  //   console.log(e.target.value);
  
  // // const userActivity = {
  // //   user_id: user_id,
  // //   activity_id: activity_id
  // // }
  
  function postActivity() {
    fetch("/user_activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"},
      // body: JSON.stringify(activity),
      body: JSON.stringify({user_id: 1, activity_id: activity.id}),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      // .then((data) => activity(data));
      // window.location.reload();
  }

  return (
    <li className="card">
      <img src={activity.image} alt={activity.name}/>
      <h3 className="card_name">{activity.name}</h3>
      <h4 className="card_catagory">{activity.catagory}</h4>
      <div className="card_details">
      <p>Location: {activity.location}</p>
      <p>Difficulty: {activity.difficulty}</p>
      <p>Age Required: {activity.age_requirment}</p>
      <p>Hours: {activity.hours}</p>
      <p>Start Time: {activity.start}</p>
      <button className="completedButton" onClick={postActivity}> Add Activity to Wishlist </button>
      <div className="users">Camper List {user.name}</div>
      </div>
    </li>

  );
}

export default ActivityCard;