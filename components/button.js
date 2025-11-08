const Button = ({imageUrl,buttonName,clickHandler})=>{



  return  (

    

    
    <button title= {buttonName} className="button" onClick={clickHandler}>
   
    <img src= {imageUrl} alt= {buttonName}/>   
           
    </button>
   
    
  )
}

export default Button