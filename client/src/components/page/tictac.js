import React from 'react'
import TicTacPanel from '../common/tictac/tictac'

function TicTac() {
    return(
        <div className = "w-full h-full relative mt-20">
                <h1 className ="text-center text-red-700 text-5xl">Enjoy The Game</h1>
                <TicTacPanel />
        </div>
    )
}

export default TicTac;