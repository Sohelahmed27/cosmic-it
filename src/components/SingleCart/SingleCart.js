import React from 'react';
import './SingleCart.css';

const SingleCart = (props) => {
  console.log(props.blog)
  const {id,name, title, authorImage, coverImage, publishDate, readTime} =props.blog;
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
        <p className='m-3'>{readTime}</p>
        {/* <img className='icon' src="https://cdn-icons-png.flaticon.com/512/10257/10257828.png" alt="" /> */}
        <button className='btn btn-light'> <img className='icon' src="https://cdn-icons-png.flaticon.com/512/10257/10257828.png" alt="" /></button>
      </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default SingleCart;