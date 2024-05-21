import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/header/header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'

const Home = () => {

  const [category, setcategory] = useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu category ={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>

      
    </div>
  )
}

export default Home
