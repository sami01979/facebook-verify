import React from 'react'
import Navbar from '../components/Navbar'
import Postsection from '../components/Postsection'
import Story from '../components/Story'
import Posts from '../components/Posts'

const Home = () => {
  return (
    <div className='bg-fb-card'>
      <Navbar/>
      <Postsection/>
      <Story/>
      <Posts/>
    </div>
  )
}

export default Home
