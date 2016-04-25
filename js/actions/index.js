import ajaxRequest from './AjaxRequest'

export const setCurrentInput = (currentInput) => {
    return {
        type: "SET_CURRENT_INPUT",
        payload: { currentInput: currentInput }
    }
}

export const startGame = () => {
    return (dispatch, getState) => {
        const { timerId } = getState().game;
        if (timerId === null) {
            const timerId = setInterval(() => {
                dispatch({type: "TICK"})
            }, 1000)
            dispatch({type: "START_GAME", payload: {timerId : timerId}})
        }
    }
}

export const stopGame = () => {
    return (dispatch, getState) => {
        const { timerId } = getState().game;
        if (timerId !== null) {
            clearInterval(timerId)
            dispatch({type: "STOP_GAME", payload: {timerId : timerId}})
        }
    }
}



export const fetchWords = () => {
    return (dispatch, getState) => {
        const addWords = (words) => {
            if (getState().fetching.wordsFetchInProgress) {
                dispatch({type: "ADD_WORDS", payload: {words: words}})
                dispatch(stopWordsFetch())
            }
        }

        const onFetchError = (error) => {
            dispatch(stopWordsFetch())
        }

        ajaxRequest("/Words.json", "GET", addWords, onFetchError)
    }
}

export const wordsFetchRequested = () => {
    return {
        type: "WORDS_FETCH_REQUESTED",
        payload: {}
    }
}

export const stopWordsFetch = () => {
    return {
        type: "WORDS_FETCH_STOPPED",
        payload: {}
    }
}
