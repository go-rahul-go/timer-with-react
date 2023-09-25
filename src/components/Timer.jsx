import React, { useEffect, useRef, useState } from 'react'
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';

const Timer = () => {
    const [hour,setHour]=useState(0)
    const [min,setMin]=useState(0)
    const [sec,setSec]=useState(0)
    const interval = useRef();

    const hourRef = useRef(0);
    const minRef = useRef(0);
    const secRef = useRef(0);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    
    function play() {
        
        let s=sec;
        let m=min;
        let h=hour;
        if(s===0 && m===0 && hour===0)
            alert("enter values")
        else{
            interval.current = setInterval(() => {
                if(s>0){
                    
                    --s;
                    if(s<10)
                        setSec("0"+s)
                    else
                        setSec(s)
                }
                   
                else if(s===0 && m>0)
                    {
                        s=59;
                        --m;
                        setSec(s)
                        setMin(m)
                        if(m<10)
                        {
                            setMin("0"+m)
                        }
                        else
                            setMin(m)
                    }
                else if(m===0 && h>0)
                {
                    m=59;
                    s=59;
                    --h;
                    setSec(s)
                    setMin(m)
                    if(h<10)
                        setHour("0"+h)
                    else
                        setHour(h)
    
                 }    
                else if(sec===0 && min===0 && hour===0){
                    console.log("timer stopped")
                }    
            }, 1000)
    
        }
        
    }

    const pause = ()=>{
        clearInterval(interval.current)
    }
    return (
        <div className="time-box">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="number" placeholder='00' min="0" name="hour" max="24" value={hour} required onChange={(e)=>setHour(e.target.value)} />
                <input type="number" placeholder='00' min="0" name="min" max="59" value={min} required onChange={(e)=>setMin(e.target.value)} />
                <input type="number" placeholder='00' min="0" max="59" name="sec" value={sec} required onChange={(e)=>setSec(e.target.value)}/>
            </form>
            <div id="button-div">
                <PlayButton onClick={play} />
                <PauseButton onClick={pause}/>
            </div>
        </div>
    )
}

export default Timer