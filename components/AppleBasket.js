
 const AppleBasket = ({appleCount,BasketName}) => {
  return (
    <section>

     <div className="basket-1">
            
            <h1><span>{appleCount}</span>Apples</h1>
            <p>{BasketName}</p>
            
        </div>


    </section>
  )
}

export default AppleBasket
