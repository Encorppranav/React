
import Button from './button.js'

import LeftArrow from 'url:../assets/images/left.png';
import RightArrow from 'url:../assets/images/right.png';
import AppleBasket from './AppleBasket'

import './AppleCounter.css'
import { useState } from "react"








// let RightAppleCount = 0
// let LeftAppleCount = TotalAppleCount - RightAppleCount


const AppleCounter = () => {
    
    const TotalAppleCount = 10

    const [RightAppleCount,setRightAppleCount] = useState(0)
    const [LeftAppleCount,setLeftAppleCount] = useState(TotalAppleCount-RightAppleCount)
    
    
    
    
    const leftHandler = () => {
        if (LeftAppleCount >= 0 && LeftAppleCount < 10) {
           
            setRightAppleCount(RightAppleCount-1)
            setLeftAppleCount(LeftAppleCount+1)

        }
    }

    const rightHandler = () => {
        if (RightAppleCount < 10) {
           
            setRightAppleCount(RightAppleCount+1)
            setLeftAppleCount(LeftAppleCount-1)

        }
    }



    return (
        <>

            <div className='appleCounter' >

                <AppleBasket appleCount={LeftAppleCount} BasketName="Basket 1" />
                <div className='Arrow'>

                    < Button imageUrl={LeftArrow} buttonName='Left Arrow' clickHandler={leftHandler} />



                    < Button imageUrl={RightArrow} buttonName='Right Arrow' clickHandler={rightHandler} />



                </div>

                <AppleBasket appleCount={RightAppleCount} basketName="Basket 2" />

            </div>

            <p style={{
                position: "relative",
                left: "40rem",

            }}>
                <button onClick={() => {
                }}>Re-Render</button>
            </p>

        </>
    )
}

export default AppleCounter