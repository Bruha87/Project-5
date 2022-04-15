import NavBar from "./NavBar";
import HomeContainer from './HomeContainer'
import ActivityContainer from "./ActivityContainer";
import UserProfile from "./UserProfile";
import { Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./App.css"


function App() {

  // const [wishlistArray, setWishlistArray] = useState([])
  const [activitiesArray, setActivitiesArray] = useState([])


  useEffect(() => {
    fetch('/activities')
    .then(res => res.json())
    .then(data => setActivitiesArray(data))
  }, [])

  // function addWishlistActivity(wishlistActivity) {
  //   setWishlistArray({...wishlistArray, ]: wishlistActivity
  //   });
  // }

  return (
    <>
    <NavBar/>
      <div className="App" >
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
          <Route path="/activities">
            <ActivityContainer 
              activitiesArray={activitiesArray} 
              />
          </Route>
          <Route path="/users">
            <UserProfile 
              activitiesArray={activitiesArray}
              />
          </Route>
        </Switch>
      </div>
    
    </>
  );
}

export default App;
