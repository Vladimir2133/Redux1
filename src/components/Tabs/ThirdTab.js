import React, { Fragment } from 'react'
//style
import { StyleSquare } from 'context/contextStyle'
//redux
import { connect } from "react-redux";


function ThirdTab(props) {

    const squares = [];
    for (let i = 0; i < props.count; i++) {
       squares.push(<StyleSquare />)
    }

    return (
      <>
        {squares}
      </>
      )
}

const mapStateToProps = state => {
    return {
        count: state.counter
    }
};

export default connect(mapStateToProps)(ThirdTab)
