import React, { useState } from 'react'
import ActivityCatagory from './ActivityCatagory';
import "./ActivityContainer.css"

function ActivityContainer({activitiesArray, usersArray}) {

  // const catagoryCoponents = activitiesArray.map( activity => <ActivityCard key={activity.id} activity = {activity}/>)
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

  // const filteredActivites = activitiesArray.filter(activity => activity.name)

  // const catagoryCoponents = activitiesArray.map( activity => <ActivityCatagory key={activity.id} {...activity}/>)
 
  return (
    <main>
      <ul className="card_container">
      <ActivityCatagory 
      activitiesArray={activitiesArray}
      usersArray={usersArray}
      />
      </ul>
    </main>
  )
}

export default ActivityContainer;