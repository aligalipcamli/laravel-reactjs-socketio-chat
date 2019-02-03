import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatMessage from './ChatMessage';

export default class ChatMessages extends Component {
    listMessages(messages) {
        var items = [];
        for (var i in messages) {
            items.push(<ChatMessage key={i} username={JSON.parse(this.props.user).name} message={messages[i]} />);
        }
        return items;
    }

    render() {
        return (
            <div>
                {this.listMessages(this.props.messages)}
            </div>
        );
    }
}
