import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Home.css'
const Home = () => {
  const [blogs, setBlogs] =useState([]);
  useEffect(()=> {
    fetch('fakeData.json')
    .then(response => response.json())
    .then(data =>setBlogs(data))
  }, [])
  return (
    <div className="home-container">
    <div className="blogs-container">
      <h1>Blogs:{blogs.length}</h1>
      {
        blogs.map(blog =><SingleCart blog={blog}></SingleCart>)
      }
    </div>
    <div className="summery-container">
      <h1>Dash Board</h1>
    </div>
      
    </div>
  );
};

export default Home;