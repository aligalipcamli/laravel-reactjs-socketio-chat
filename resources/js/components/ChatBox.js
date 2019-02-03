import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';

export default class ChatBox extends Component {
    render() {
        return (
            <div className="box box-primary direct-chat direct-chat-primary">
                <div className="box-header with-border">
                    <h3 className="box-title">Public Chat</h3>

                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse">
                          <i className="fa fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="direct-chat-messages">
                        <ChatMessages />
                    </div>
                </div>
                <div className="box-footer">
                    <ChatForm />
                </div>
            </div>
        );
    }
}

if (document.getElementById('chat-box')) {
    ReactDOM.render(<ChatBox />, document.getElementById('chat-box'));
}
