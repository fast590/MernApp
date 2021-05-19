import React, {useState} from 'react'
import TicTacCell from './tictacell'

function TicTacPanel() {

    const [ClickStatus, setClickStatus] = useState(0)

    var Array = [0,1,0,1,0,1,0,1,0]
    // const Array = [2,2,2,2,2,2,2,2,2]
    const sendDataToParent = (index) => {
        if(ClickStatus === 0) setClickStatus(1)
        else setClickStatus(0)
    }
    const list = Array.map((item, index) => <TicTacCell num = {item} sendDataToParent={sendDataToParent} key = {index} />)
    
    return(
       <div className = "w-48 h-48 bg-gray-200 m-auto mt-10">
           {list}
       </div>
    )
}

export default TicTacPanel;