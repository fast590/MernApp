import React, {useState} from 'react'

function TicTacCell({num, sendDataToParent}) {
    
    const [Cellinfo, setCellinfo] = useState()

    const handleClick = (e) =>{
        setCellinfo(1)
        sendDataToParent(Cellinfo)
    }
    
    const disp = (num === 1) ? 'o' :
                (num === 0) ? 'x' :''


    return(
       <div className = "w-16 h-16 bg-gray-200 border border-gray-500 float-left" onClick = {handleClick}>
           <h1 className = "text-center">{disp}</h1>
       </div>
    )
}

export default TicTacCell;