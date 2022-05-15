import React, { useState } from "react";
import ActivityCard from "./ActivityCard"
import "./ActivityCatagory.css"
import { Link } from "react-router-dom";

function ActivityCatagory({activitiesArray, userList}) {

  // function userList(id) {
  //   const filteredUserList = activitiesArray.filter(user => user.id !==id)
  //   setUserArray(filteredUserList)
  // }
  
  const cardCoponents = activitiesArray.map( activity => <ActivityCard key={activity.id} activity={activity} userList={userList}/>)
  
  // const handleToggle = (activity) => {
  //   console.log(activity);
  // }

  // const handleToggle = (user) => {
  //   console.log(user);
  // }

  return (
    <main>
      <div className="catagories">
        <ul className="the-cards">
          {cardCoponents}
        </ul>
      </div>
    </main>
  );
}

// function Catagories(){
//   return(
//     <div className="catagories">
//       <h1 className="card_title"></h1>
//     </div>
//   )
// }

export default ActivityCatagory;