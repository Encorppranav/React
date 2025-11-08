import { createRoot } from 'react-dom/client'

import "./style.css"
import React, { Children } from 'react'


const root = createRoot(document.getElementById('root'))

function Card(props){

  const{brand,title,price,thumbnail} = props
   
    return <div id="card" >

    <img src= {thumbnail}></img>
  <div className = "card-content">

    <h2>{title}</h2>
    <p>{brand}</p>
    <p><b>{price}</b></p>

  </div>

</div>
}









fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{

        //  id: product.id,
        //   title: product.title,
        //   brand: product.brand,
        //  price: product.price,       
        // thumbnail: product.thumbnail,
  

    root.render(<div className='container2'>{data.products.map((product)=>{
      
      return  < Card title = {product.title} 
                    brand = {product.brand}
                    price  = {product.price}
                    thumbnail = {product.thumbnail}
                    key = {product.id}
                   
                    />
    
    })
    }</div>)


});




// root.render({

//   $$typeof: Symbol.for('react.element'),
//   type: Card,
//   ref:null,

//  props:{
//   title: "egg",
//   thumbnail:"https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
//   price : 10  ,
//   brand : 'good', 

//  }


// })


// root.render(React.createElement(Card,{  title: "egg",
//   thumbnail:"https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp",
//   price : 10  ,
//   brand : 'good', }))


// React Component Syntax

// root.render(< Card title ="egg" 
//    thumbnail = "https://cdn.dummyjson.com/product-images/groceries/eggs/thumbnail.webp"
//    price =  "7rs" 
//    brand = "good"
//    />)