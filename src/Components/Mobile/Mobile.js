import React from 'react';

const Mobile = () => {
    return (
        <div>
            <h2> <span id='count'>100</span></h2>
            
            <button id='btn' onClick={BatteryDown}>Battery Down</button>
        </div>
       
    );
};
function BatteryDown(){
    let valueElement=document.getElementById('count');
    let value = valueElement.innerText;
    let current = parseInt(value)
    if(current === 0){
        
    }
    else{
        current= value-10;
        console.log(current);
        valueElement.innerText = current;
    }
    
}
export default Mobile;