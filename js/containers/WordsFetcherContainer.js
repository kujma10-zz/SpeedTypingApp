/**
 * Created by Kote on 4/20/2016.
 */

import React from "react";
import ReactDOM from "react-dom";
import WordsFetcher from "../components/WordsFetcher";
import { connect } from 'react-redux'
import { wordsFetchRequested, fetchWords, stopWordsFetch } from '../actions'

const mapStateToProps = (state) => {
    return {
        inProgress: state.fetching.wordsFetchInProgress,
        wordsFetched: state.game.wordsFetched
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(wordsFetchRequested())
            dispatch(fetchWords())
        },
        onCancel: () => {
            dispatch(stopWordsFetch())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WordsFetcher);