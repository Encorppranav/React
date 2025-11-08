
import Button from './button.js'

import LeftArrow from 'url:../assets/images/left.png';
import RightArrow from 'url:../assets/images/right.png';
import AppleBasket from './AppleBasket'

import './AppleCounter.css'





const AppleCounter = ()=>{
    console.log("LeftArrow =", LeftArrow);
    return ( <div className='appleCounter'>
        
        <AppleBasket appleCount = {10} BasketName = "Basket 1" />
        <div className='Arrow'>
            
        < Button imageUrl = {LeftArrow} />
        < Button imageUrl = {RightArrow} />

        </div>
        
         <AppleBasket appleCount={0} basketName="Basket 2" />

    </div>
    )
}

export default AppleCounter