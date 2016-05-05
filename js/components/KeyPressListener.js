import React from "react";
import ReactDOM from "react-dom";

const KeyPressListener = React.createClass({
    componentDidMount() {
        window.addEventListener('keypress', this.handleKeyPress)
    },
    componentWillUnmount() {
        window.removeEventListener('keypress', this.handleKeyPress)
    },
    handleKeyPress(event){
        event.target.blur(); // to remove focus from button (spacebar was clicking on button)
        if(this.props.gameStarted) {
            const charString = String.fromCharCode(event.keyCode)
            this.props.handleKeyPress(charString)
        }
    },
    render(){
        return <span />;
    }
})

KeyPressListener.propTypes = {
    handleKeyPress: React.PropTypes.func.isRequired,
    gameStarted: React.PropTypes.bool.isRequired
}

export default KeyPressListener;
