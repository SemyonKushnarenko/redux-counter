import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

function Counter({counter, inc, dec, res}) {
    return (
        <div>
            <div class="content">
                <div class="counter-wrap">
                    <h1>{counter}</h1>
                </div>
                <div class="btn-block">
                <button onClick={inc} className="btn btn-inc">
                </button>
                <button onClick={dec} className="btn btn-dec">
                </button>
                <button onClick={res} className="btn btn-res">
                </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)