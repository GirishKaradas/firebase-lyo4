import React, {useEffect, useState} from 'react'
import {database} from '../../firebaseGlass'
import { firebaseLooper, firebaseLooperTwo } from '../../utils/tools'
import TestHome from './TestHome'

 

const Tests = () => {
    const [time1, setTime1] = useState()
    const [batch, setBatch] = useState([])   
    useEffect(() => {
        database.ref('recipes/' ).get().then((snapshot) => {
            const data = firebaseLooperTwo(snapshot)
            setBatch(data)           
        })
    }, [])
  
    return (
        <div> 
            <h1 style={{color: "red"}}>hello</h1>
            {
                batch.map((values) => (
                   <div>
                       <h1 style={{color: "red"}}>{values.title}</h1> 
                       <button >Open</button>
                       {
                           values.arrayList.map((listData) => (
                               <div>
                               <h1>{listData.pressure}</h1>
                               <h3>{listData.step}</h3>
                               <h3>{listData.temp1}</h3>
                               <h3>{listData.time1}</h3>
                               <h3>{listData.time2}</h3>  
                             
                               </div>

                           ))
                       }
                       <TestHome time1={time1} data={values.arrayList}/>                   
                   </div>
                ))
            }
          
        </div>
    )
}

export default Tests
