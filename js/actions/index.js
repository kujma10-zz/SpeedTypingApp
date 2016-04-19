export const setCurrentInput = (currentInput) => {
    return {
        type: "SET_CURRENT_INPUT",
        payload: { currentInput: currentInput }
    }
}

export const startGame = () => {
    return (dispatch, getState) => {
        const { timerId } = getState();
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
        const { timerId } = getState();
        if (timerId !== null) {
            clearInterval(timerId)
            dispatch({type: "STOP_GAME", payload: {timerId : timerId}})
        }
    }
}
