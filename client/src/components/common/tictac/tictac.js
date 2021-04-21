import React from 'react'
import TicTacCell from './tictacell'

function TicTacPanel() {

    const Array = [0,1,0,1,0,1,0,1,0]
    // const Array = [2,2,2,2,2,2,2,2,2]
    const sendDataToParent = (index) => {

    }

    const list = Array.map((item, index) => <TicTacCell num = {item} sendDataToParent={sendDataToParent} key = {index} />)
    
    return(
       <div className = "w-48 h-48 bg-gray-200 m-auto mt-10">
           {list}
       </div>
    )
}

export default TicTacPanel;