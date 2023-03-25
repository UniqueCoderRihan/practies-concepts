import React, { useState } from 'react';

const Mobile = () => {
    const [Battery, setItems] = useState(100) 
    function BatteryDown(){
        const newBattery = Battery-10;
        setItems(newBattery);
    }
    return (

        <div>
            <h2> <span id='count'>{Battery}</span></h2>
            
            <button id='btn' onClick={BatteryDown}>Battery Down</button>
        </div>
       
    );
};
export default Mobile;