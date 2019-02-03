import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChatForm extends Component {
    render() {
        return (
            <form action="#" method="post">
                <div className="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-warning btn-flat">Send</button>
                    </span>
                </div>
            </form>
        );
    }
}
