/* Dynamic Multiple Classes (With Array & .Join()) */

import React,{useState} from 'react';
import './MyToggle.css';

function MulDynamicClass()
{

    const [myCondtion,changeMyCondtion] = useState(false)

    let myScreen ='';

    let  myClasses = [];
  
    if(myCondtion) 
    {
        myScreen = (
            <div> 
                <h2>This is DIV</h2> 
            </div>
        );
        myClasses.push('green');
        myClasses.push('my_align');
    }
    else
    {
        myClasses.push('red');
        myClasses.push('my_align');

    }

    const myToogleFunc = () =>
    {
        changeMyCondtion(!myCondtion);
     }

    return(
        <div>
            <h2>Dynamic Multiple Classes (With Array and .Join()) </h2>
            <button className={myClasses.join(' ')} onClick={myToogleFunc}>Toggle Button</button>
            {myScreen}
        </div>
    );
}
export default MulDynamicClass;
