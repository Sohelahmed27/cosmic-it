import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './SingleCart.css';

const SingleCart = (props) => {
 
  const {name, title, authorImage, coverImage, publishDate, readTime} = props.blog;
  const readingTime = props.readingTime;
  //  let readingBlogTime = 0;
  
  // const readingTime=(blog)=>{
  // console.log(blog.readTime);
  
  // }
  return (
    <div className='single-cart'>
      <img className='cover-img' src={coverImage} alt="" />
      <div className='d-flex justify-content-between author-info'>
      <div className='d-flex '>
        <img className='author-img' src={authorImage} alt=""  />
        <div>
          <h4 className='mx-3'>{name}</h4>
          <p>{publishDate}</p>
        </div>
       
      </div>
      <div className='d-flex'>
      
        <p className='m-3'>{readTime} minutes</p>
       
        {/* <button className='btn btn-light'> <img className='icon' src="https://cdn-icons-png.flaticon.com/512/10257/10257828.png" alt="" /></button> */}
        <button className='btn btn-light'>
        <FontAwesomeIcon icon={faBookmark} /></button>
      </div>
      </div>
      <h3>{title}</h3>
      <button onClick={()=>readingTime(props.blog)} className="btn btn-link">Mark as read</button>
    </div>
  );
};

export default SingleCart;