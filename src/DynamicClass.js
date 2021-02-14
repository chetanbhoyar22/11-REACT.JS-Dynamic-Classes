/* Dynamic Classes ( Without Array ) */

import React,{useState} from 'react';
import './Toggle.css';

function DynamicClass()
{

    const [myCondtion,changeMyCondtion] = useState(false);

    let myScreen ='';

    let  myClasses = '';
  
    if(myCondtion) 
    {
        myScreen = (

            <div> 
                <h2>This is my DIV</h2> 
            </div>
        );
        myClasses = 'green';    
    }
    else
    {
        myClasses = 'red';
    }

    const myToogleFunc = () =>
    {
        changeMyCondtion(!myCondtion);
     }

    return(
        <div>
            <h2>Dynamic Classes ( Without Array ) -</h2>
            <button className={myClasses} onClick={myToogleFunc}>Toggle Button</button>
                {myScreen}
        </div>
    );
}
export default DynamicClass;