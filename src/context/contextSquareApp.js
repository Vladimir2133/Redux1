import React, {useState} from 'react'

import {SquareContext} from "./contextCreate";
import { StyleSquare } from 'context/contextStyle'


function AddSquareProvider(props) {
    const [count, setCount] = useState(0)

    const handleChangeCount = () => setCount(count+1)

    return(
        <SquareContext.Provider value={{
            count: count,
            setCount: handleChangeCount
        }}>
            {props.children}
        </SquareContext.Provider>
    )

}
export {AddSquareProvider}