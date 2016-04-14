/**
 * Created by Kote on 4/13/2016.
 */

export const moveToNextWord = (currentInput) => {
    return {
        type: "MOVE_TO_NEXT_WORD",
        payload: currentInput
    }
}

export const updateCurrentInput = (currentInput) => {
    return {
        type: "UPDATE_CURRENT_INPUT",
        payload: currentInput
    }
}