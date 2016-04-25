/**
 * Created by Kote on 4/19/2016.
 */
import React from "react";
import Timer from "../components/Timer";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        elapsed: state.game.elapsed
    }
};


export default connect(mapStateToProps)(Timer);