export const setCurrentInput = (currentInput) => {
    return {
        type: "SET_CURRENT_INPUT",
        payload: { currentInput: currentInput }
    }
}

export const startGame = () => {
    return {
        type: "START_GAME"
    }
}

export const stopGame = () => {
    return {
        type: "STOP_GAME"
    }
}