import React from 'react';

const SideCart = ({cart}) => {
  console.log(cart)
  let total =0;
  for(const times of cart){
    
     total = total + times.readTime;
  }

 
  return (
    <div className='card'>
      <h4>Dash Board</h4>
      <h5>Total Reading time :{total} min</h5>
    </div>
  );
};

export default SideCart;