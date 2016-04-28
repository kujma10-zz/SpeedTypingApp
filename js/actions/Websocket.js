import { receivedRemotePlayerGame } from "./index"

const websocketConf = {
    port: 8081,
    host: 'localhost'
}

let websocketConnection;
export const websocketConnectionRequested = () => {
    return (dispatch, getState) => {
        websocketConnection = new WebSocket(
            `ws://${websocketConf.host}:${websocketConf.port}/`,
            'echo-protocol'
        );

        websocketConnection.onopen = () => {
            dispatch(websocketConnectionEstablished())
        }

        websocketConnection.onclose = () => {
            dispatch(websocketConnectionDropped())
        }

        websocketConnection.onmessage = (message) => {
            let parsedMessage;
            try {
                parsedMessage = JSON.parse(message.data)
                const action = receivedRemotePlayerGame(parsedMessage)
                dispatch(action)
            } catch (error) {

            }
        }
    };
}

export const sendWebsocketMessage = (message) => {
    try {
        websocketConnection.send(JSON.stringify(message))
    } catch (error) {
        console.error("Cannot stringify websocket message", error, message)
    }
}

const websocketConnectionEstablished = () => {
    return {
        type: "WEBSOCKET_CONNECTION_ESTABLISHED",
        payload: {}
    }
}

const websocketConnectionDropped = () => {
    return {
        type: "WEBSOCKET_CONNECTION_DROPPED",
        payload: {}
    }
}
