import React from 'react';

const SideCart = (props) => {
  const {time}=props;
  // const {readingTime}= props.readingTime;
  return (
    <div>
      <h3>Dash Board</h3>
      <h4>Total Spent time on Read :{time} min</h4>
    </div>
  );
};

export default SideCart;