

import {  useState,useEffect } from "react";
import withstyles from "./hoc/withstyle";

const Cockpit = (Props) => {
const [CockpitDescription,setCockpitobj] = useState('Cockpit initial---');
const[CockpitNumber,setCockpitNumber] = useState(10);

useEffect(() =>{
    alert('Cockpit.js----useEffect called every time on update Working like component did update')
},[CockpitDescription,CockpitNumber]
);
 useEffect(() =>{
     alert('Cockpit.js---useEffect working like Componentdidmount')

     return ()=> {
         alert('Cockpit Component unmounted--');
     }

 },[]
 );


    const onSubmitHandler = (params1) => {

        if(params1 === 'Description'){
        
        setCockpitobj('Cockpit is a  show and hide things');
        }else{
            setCockpitNumber(40);
        }
        
    }
    return(
        <div>
            <h1>LONAVATH ANILKUMAR.....</h1>
            <p>{CockpitDescription}</p>
            <p>{CockpitNumber}</p>
            <video>width="320"height="240"</video>
            <button onClick = {onSubmitHandler.bind(null,'Description')}>Change Description</button>
            <button onClick = {onSubmitHandler.bind(null,'Number')}>Change Number</button>
            
            
        </div>
    )
    
}
export default  withstyles(Cockpit);
