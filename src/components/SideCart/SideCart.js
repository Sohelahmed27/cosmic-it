

const SideCart = ({cart}) => {

  console.log(cart)
   
  let name;
  let total =0;
  for(const times of cart){
     name = times.title;
     total = total + times.readTime;

  }

  return (
    <div>
      <div className='card'>
      <h4>Dash Board</h4>
      <h5>Total Reading time :{total} min</h5>
    </div>
    <div className='card'>
    <h5>Bookmarked Blogs:{cart.length}</h5>
    <h6>{name}</h6>
    </div>
    </div>
  );
};

export default SideCart;