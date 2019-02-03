import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatMessage from './ChatMessage';

export default class ChatMessages extends Component {
    listMessages(messages) {
        var items = [];
        for (var i in messages) {
            items.push(<ChatMessage key={i} index={i} message={messages[i]} />);
        }
        return items;
    }

    render() {
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

        return (
            <div>
                {this.listMessages(messages)}
            </div>
        );
    }
}
