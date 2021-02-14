/* How to use Toggle Button & Dynamic CSS (Inline) */
 
import React,{useState} from 'react';
import './Chetan.css';

function App()
{
  const [myCondition, changeMyCondtion] = useState(false);
  let myDesin = '';

  const style = {
    backgroundColor:'red',
    color:'white',
    margin:'50px',
  }

  const showMyDivFunc = () =>
  {
    changeMyCondtion(true);
  }

  const hideMyDivFunc = () =>
  {
    changeMyCondtion(false);

  }

  const ToggleMyDivFunc =() =>
  {
    let mycondtion2 = myCondition;
    changeMyCondtion(!mycondtion2);
  }

  if(myCondition)
  {
    myDesin = (
      <div className="main_div">
        <h2>This is a Div</h2>
      </div>
    );

    style.backgroundColor="green";

  }
  else
  {
    style.backgroundColor="red";
  }

return(
    <div>
      <h2>To Use Toggle Button and Dynamic CSS (Inline)</h2>
      <button  style={style} onClick={ToggleMyDivFunc}>Toggle Button</button> 
      {myDesin}
    </div>
  );
}

export default App;