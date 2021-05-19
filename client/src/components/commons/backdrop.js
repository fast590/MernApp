import React from 'react'
import '../../assets/commons/backdrop.css'

const Backdrop = ({onclick, show}) => {
    return show && <div className="backdrop" onClick = {onclick}></div>
}

export default Backdrop
