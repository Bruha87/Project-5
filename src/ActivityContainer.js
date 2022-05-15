import React, { useState } from 'react'
import ActivityCatagory from './ActivityCatagory';
import "./ActivityContainer.css"

function ActivityContainer({activitiesArray, userList}) {

  // const catagoryCoponents = activitiesArray.map( activity => key={activity.catagory} catagory = {catagory})
  // const [activitiesArray, setActivitiesArray] = useState([])
  // // const [searchTerm, setSearchTerm] = useState("")






  // useEffect(() => {
  //   fetch('/activities')
  //   .then(res => res.json())
  //   .then(data => setActivitiesArray(data))
  // }, [])

  // function handleSearchInput(e){
  //   setSearchTerm(e.target.value)
  // }

  // const filteredUsers = activitiesArray.map(user => user.name)

  // const catagoryCoponents = activitiesArray.map( activity => <ActivityCatagory key={activity.id} {...activity}/>)
 
  return (
    <div>
      <h1>Choose Your Activities...</h1>
      <ul className="card_container">
      <ActivityCatagory 
      activitiesArray={activitiesArray}
      // userList={userList}
      />
      </ul>
    </div>
  )
}

export default ActivityContainer;