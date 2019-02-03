import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';

const messages = [
    {
        name: 'Alexander Pierce',
        timestamp: '23 Jan 2:00 pm',
        message: 'Is this template really for free? That\'s unbelievable!'
    },
    {
        name: 'Sarah Bullock',
        timestamp: '23 Jan 2:05 pm',
        message: 'You better believe it!'
    },
    {
        name: 'Alexander Pierce',
        timestamp: '23 Jan 5:37 pm',
        message: 'Working with AdminLTE on a great new app! Wanna join?'
    },
    {
        name: 'Sarah Bullock',
        timestamp: '23 Jan 6:10 pm',
        message: 'I would love to.'
    }
];

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: messages
        };
        this.handleChatFormSubmit = this.handleChatFormSubmit.bind(this);
    }

    handleChatFormSubmit(message) {
        var _user = JSON.parse(this.props.user);
        this.setState({
            messages: this.state.messages.concat({
                name: _user.name,
                timestamp: new Date().toString(),
                message: message
            })
        });
    }

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
                        <ChatMessages messages={this.state.messages} />
                    </div>
                </div>
                <div className="box-footer">
                    <ChatForm onChatFormSubmit={this.handleChatFormSubmit} />
                </div>
            </div>
        );
    }
}

if (document.getElementById('chat-box')) {
    const component = document.getElementById('chat-box');
    const props = Object.assign({}, component.dataset);
    ReactDOM.render(<ChatBox {...props} />, component);
}
