import React, {Fragment, useContext } from 'react'

import { Button } from 'context/contextStyle'

// redux
import { connect } from "react-redux";
import { onIncrement } from "reducers/counter";
import { onDecrement } from "reducers/counter";


function SquareButtons({handleIncrement, handleDecrement}) {

    return(
        <>
            <Button onClick={handleIncrement}> Доавить квадрат </Button>
            <Button onClick={handleDecrement}> Удалить квадрат </Button>
        </>
    )
}

const mapDispatchToProps = {
    handleIncrement:onIncrement,
    handleDecrement:onDecrement
}

export default connect(null, mapDispatchToProps)(SquareButtons)