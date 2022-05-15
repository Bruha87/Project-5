import React, { useState,  } from "react";
import "./ActivityCard.css";
// import UserProfile from "./UserProfile";

function ActivityCard({activity, userList}) {

  // const[isClicked, setIsClicked] = useState(false)
  // const [addToWishlist, setAddToWishlist] = useState("")

  // const userList = activity.map( user => key={user.id} {...user})

  
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
      {/* <img src={activity.image_url} alt={activity.name}/> */}
      <h3 className="card_name">{activity.name}</h3>
      <h4 className="card_catagory">{activity.catagory}</h4>
      <div className="card_details">
      <h5>Location: {activity.location}</h5>
      <h5>Difficulty: {activity.difficulty}</h5>
      <h5>Age Required: {activity.age_requirment}</h5>
      <h5>Hours: {activity.hours}</h5>
      <h5>Start Time: {activity.start}</h5>
      <button className="completedButton" onClick={postActivity}> Add Activity to Wishlist </button>
      {/* <div className="users">Camper List {activity.user.name}</div> */}
      {/* <li>{activity.user.name}</li> */}
      </div>
    </li>

  );
}

export default ActivityCard;