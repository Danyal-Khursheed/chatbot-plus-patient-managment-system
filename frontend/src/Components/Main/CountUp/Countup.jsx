import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Countup = () => {
    const [countOn, setCountOn] = useState(false);
  return (
    <>
    <ScrollTrigger onEnter={()=> setCountOn(true)} onExit={()=> setCountOn(false)}>
    <h1 className="py-20 pl-20 font-bold text-blue-500 title">Patient Survery</h1>
        <div className="grid grid-cols-1 mx-32 font-bold text-center md:grid-cols-2 lg:grid-cols-4 ">
        <div className="flex flex-col p-16 my-5 bg-blue-300 shadow-xl mx-7 rounded-2xl">
        <p className='text-4xl'>Patient per Week</p>
            <h1 className='mt-6 text-8xl'>{countOn && <CountUp start={0} end={111} duration={2} delay={2}/>}+</h1>
           
        </div>
        <div className="flex flex-col p-16 my-5 bg-blue-300 shadow-xl mx-7 rounded-2xl">
        <p className='text-4xl'>Patient per Month</p>
            <h1 className='mt-6 text-8xl'>{countOn && <CountUp start={0} end={450} duration={2} delay={2}/>}+</h1>
           
        </div>
        <div className="flex flex-col p-16 my-5 bg-blue-300 shadow-xl mx-7 rounded-2xl">
        <p className='text-4xl'>Cancer Patient</p>
            <h1 className='mt-6 text-8xl'>{countOn && <CountUp start={0} end={50} duration={2} delay={2}/>}+</h1>
           
        </div>
        <div className="flex flex-col p-16 my-5 bg-blue-300 shadow-xl mx-7 rounded-2xl">
        <p className='text-4xl'>patient per year</p>
            <h1 className='mt-6 text-8xl'>{countOn && <CountUp start={0} end={7432} duration={2} delay={2}/>}+</h1>
           
        </div>
        </div>
        
        
    </ScrollTrigger>
    
    </>
  )
}

export default Countup