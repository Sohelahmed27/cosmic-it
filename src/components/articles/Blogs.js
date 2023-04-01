import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div>
      <h3>How does react work?</h3>
      <p>React is a JavaScript library for building user interfaces. It is component based and makes virtual DOM. That's why React can update  and manipulate with minimum change of DOM. It has very powerful features like useEffect, useState, props and other properties.React's efficient rendering process and unidirectional data flow make it a powerful tool for building dynamic and responsive user interfaces.</p>
      <h3>What are the purposes of useEffect other than fetching data??</h3>
      <p>UseEffect hooks work for multiple purposes along with the fetching data like: updating DOM, clean up functions after its execution,clear the timer, and avoid infinite loops</p>
      <h3>What are difference between props and state</h3>
      <p>Props has immutable and read-only properties. It is used to send array, object, arguments, functions from one component to another.<br/>On the other hand, state has mutable and read and write properties. It contains functions and a value to update the data.</p>
      <h3>How does useState works?</h3>
      <p>UseState is important hook in react. It is used for updating data. useState accepts an initial state and returns two values:The current state, a function that updates the state.</p>
      
    </div>
  );
};

export default Blogs;