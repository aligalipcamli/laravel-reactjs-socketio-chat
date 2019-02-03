import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChatForm extends Component {
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleOnSubmit() {
        this.props.onChatFormSubmit(document.getElementById('message').value);
        document.getElementById('message').value = '';
    }

    handleKeyPress(event) {
        if(event.key == 'Enter') {
            event.preventDefault();
            this.handleOnSubmit();
        }
    }

    render() {
        return (
            <form action="#" method="post">
                <div className="input-group">
                    <input type="text"
                            id="message"
                            name="message"
                            placeholder="Type Message ..."
                            className="form-control"
                            onKeyPress={this.handleKeyPress}
                            autocomplete="off" />
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-warning btn-flat" onClick={this.handleOnSubmit}>Send</button>
                    </span>
                </div>
            </form>
        );
    }
}
