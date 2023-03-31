import React from 'react';

const SingleCart = (props) => {
  console.log(props.blog)
  const {id, title, authorImage, coverImage, publishDate, readTime} =props.blog;
  return (
    <div>
      <img src={coverImage} alt="" />
      <h3>{title}</h3>
    </div>
  );
};

export default SingleCart;