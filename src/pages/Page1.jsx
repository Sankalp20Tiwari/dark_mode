import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const Page1 = () => {
    const tiltRef = useRef(null)
    const [xVal, setxVal] = useState(0)
    const [yVal, setyVal] = useState(0)


    const mouseMoving = (e) => {
           setxVal(e.clientX /100)
           setyVal(e.clientY /100)
           tiltRef.current.style.transform = `rotate(${yVal }deg) rotate(${xVal}deg)`
    }
  return (
    <div onMouseMove={(e ) => {mouseMoving(e)}} className='h-screen w-full px-5 py-3 bg-white'>
      <div className=' shadow-2xl p-20 shadow-black w-full h-full rounded-lg bg-gradient-to-r from-black to-gray-500'>
      <img className='h-20 ml-15' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_158,h_158,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
      <TiltText ref = {tiltRef}/>
      <Page1Bottom />
      </div>
      
    </div>
  )
}

export default Page1
