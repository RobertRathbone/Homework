import react, { useState } from 'react';
    
    
const TabDisplay = ({tabs}) => {
    const [arrayValue, setArrayValue] = useState(0);


    const tabClickHandler = (each,i) => {
        console.log(each,i);
        
    }

    console.log(tabs)
    return (
        <div>
            {tabs.map((each,i) => 
        
                    <div key = {i}>
                        <button  onClick = {e => tabClickHandler(each,i)}>Tab: {i}</button>
                    </div>
            
            )}
            {tabs[arrayValue].content}
        </div>

            )
    
}
export default TabDisplay;