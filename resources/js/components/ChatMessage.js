import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChatMessage extends Component {
    render() {
        return (
            <div className={this.props.username != this.props.message.name ? 'direct-chat-msg' : 'direct-chat-msg right'}>
                <div className="direct-chat-info clearfix">
                    <span className={this.props.username != this.props.message.name ? 'direct-chat-name pull-left' : 'direct-chat-name pull-right'}>{this.props.message.name}</span>
                    <span className={this.props.username != this.props.message.name ? 'direct-chat-timestamp pull-right' : 'direct-chat-timestamp pull-left'}>{this.props.message.timestamp}</span>
                </div>
                <i className="fa fa-3x fa-user direct-chat-img"></i>
                <div className="direct-chat-text">
                    {this.props.message.message}
                </div>
            </div>
        );
    }
}
