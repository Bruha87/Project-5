import React, { useState } from "react";
import ActivityCard from "./ActivityCard"
import "./ActivityCatagory.css"

function ActivityCatagory({activitiesArray}) {

  const [wishlist, setWishlist] = useState([]);

  const handleToggle = (activity) => {
    console.log(activity);
  }

  const cardCoponents = activitiesArray.map( activity => <ActivityCard key={activity.id} activity={activity} handleToggle={handleToggle} />)
  
  return (
    <main>
      <div className="catagories">
        <ul>
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