import React, { useState } from 'react';
import Navebar from './Components/Navebar';
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';

const App = () => {
  let data=[
   
    {
      name:"Fancy  Product",
      options:"View",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale:false,
      rating:false,
    },
    {
      name:"Special Item",
      option:"Add",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale:true,
      rating:true,
    },
    {
      name:"Sale Item",
      option:"Sub",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isOption:true,
      rating:false,
    },
    {
      name:"Popular Item",
      options:"Add",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale:false,
      rating:true,
    },
    {
      name:"Sale Item",
      option:"Sub",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isOption:true,
      rating:false,
    },
    {
      name:"Fancy  Product",
      options:"View",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale:false,
      rating:false,
    },
    {
      name:"Special Item",
      option:"Add",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale:true,
      rating:true,
    },
    {
      name:"Popular Item",
      options:"Add",
      image:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      isSale:false,
      rating:true,
    },
  ];
  let [cartCount,setCount]=useState(0);
  return (
    <>
      <Navebar  cartCount={cartCount} setCount={setCount} />
       <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
              data.map((ele,index)=>{
             return <Card data={ele} key={index} cartCount={cartCount} setCount={setCount} />
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;