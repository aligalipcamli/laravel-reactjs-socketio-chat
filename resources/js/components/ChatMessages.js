import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChatMessages extends Component {
    render() {
        return (
            <div>
                <div className="direct-chat-msg">
                    <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-left">Alexander Pierce</span>
                        <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                    </div>
                    <i className="fa fa-3x fa-user direct-chat-img"></i>
                    <div className="direct-chat-text">
                        Is this template really for free? That's unbelievable!
                    </div>
                </div>
                <div className="direct-chat-msg right">
                    <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-right">Sarah Bullock</span>
                        <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                    </div>
                    <i className="fa fa-3x fa-user direct-chat-img"></i>
                    <div className="direct-chat-text">
                        You better believe it!
                    </div>
                </div>
                <div className="direct-chat-msg">
                    <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-left">Alexander Pierce</span>
                        <span className="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
                    </div>
                    <i className="fa fa-3x fa-user direct-chat-img"></i>
                    <div className="direct-chat-text">
                        Working with AdminLTE on a great new app! Wanna join?
                    </div>
                </div>
                <div className="direct-chat-msg right">
                    <div className="direct-chat-info clearfix">
                        <span className="direct-chat-name pull-right">Sarah Bullock</span>
                        <span className="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
                    </div>
                    <i className="fa fa-3x fa-user direct-chat-img"></i>
                    <div className="direct-chat-text">
                        I would love to.
                    </div>
                </div>
            </div>
        );
    }
}
