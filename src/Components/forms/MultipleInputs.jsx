import React from 'react';
import './multipleInputs.css';
import {Navigate} from 'react-router-dom';



const MultipleInputs = () => {

    const [goToContact , setGoTOContact] = React.useState(false);

    if(setGoTOContact){
        return <Navigate to="./Home.jsx" />
    }

     
  return (
    <>
       <form action="" >
        <div>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="name" />
            <input type="email" name="email" id="email" />
            <input type="password" name="password" id="password" />
        </div>


            <button type='submit' onClick={()=> {
                setGoTOContact(true);
            }}>Login</button>
       </form>
    </>
  )
}

export default MultipleInputs