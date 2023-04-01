import React, { useEffect, useState } from 'react';
import Blogs from '../articles/Blogs';

import SideCart from '../SideCart/SideCart';
import SingleCart from '../SingleCart/SingleCart';
import './Home.css'
const Home = () => {
  
  
  const [blogs, setBlogs] =useState([]);
  const[cart, setCart] = useState([])
  
  
  useEffect(()=> {
    fetch('fakeData.json')
    .then(response => response.json())
    .then(data =>setBlogs(data))
  }, [])
   

  const readingTime=(blog)=>{
    const newCart = [...cart,blog]
    setCart(newCart)
    
    }
  //reading time calculation function
  // let previousTime = 0;
  // const readingTime=(blog)=>{
  //   // console.log(blog);
  //   const  = previousTime + time;
  //   setTime(currentTotal);
  //   }
  return (
    <div className="home-container">
    <div className="blogs-container">
     
      {
        blogs.map(blog =><SingleCart 
                 blog={blog}
                 key={blog.id}
                 readingTime={readingTime}
                ></SingleCart>)
      }
      <Blogs></Blogs>
    </div>
    <div className="summery-container">
    <p>product:{cart.length}</p>
    <SideCart cart={cart}></SideCart>
      
    </div>
      
    </div>
  );
};

export default Home;