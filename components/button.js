const Button = ({imageUrl})=>{

 console.log("imageUrl = ",imageUrl)

  return  (

    

    
    <button className="button">
   
    <img src= {imageUrl} alt="Button" className={imageUrl.split('/').pop().split('?')[0].split('.')[0]+'arrow'}/>   
           
    </button>
   
    
  )
}

export default Button