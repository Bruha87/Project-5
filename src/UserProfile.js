import React, {useState, useEffect} from 'react'
import UserProfileContainer from './UserProfileContainer';

function UserProfile() {

  const [wishlistArray, setWishlistArray] = useState([])

  useEffect(() => {
    fetch('/user_activities')
    .then(res => res.json())
    .then(data => setWishlistArray(data))
  }, [])
function deleteFromWishlist(id) {
    const filteredWishlist = wishlistArray.filter(user_activity => user_activity.id !==id)
    setWishlistArray(filteredWishlist)
  }
  return (
    <>
    <div className="profile_page">
      <h1 className="page_header">My Activities</h1>
      <UserProfileContainer 
      wishlistArray={wishlistArray}
      deleteFromWishlist={deleteFromWishlist}
      />
    
      <div className="myActivites"></div>
    </div>
  </>
  )
}

export default UserProfile;