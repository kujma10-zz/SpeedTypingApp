export const keyPressed = (key) => {
  return {
    type: 'SET_CURRENT_INPUT',
    payload: {key: key}
  }
}
