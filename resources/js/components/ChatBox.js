import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';
import Echo from 'laravel-echo';
import Socketio from 'socket.io-client';

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.handleChatFormSubmit = this.handleChatFormSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/messages').then(response => {
            this.setState({
                messages: response.data
            });
        });
        this.scrollToBottom();
        let echo = new Echo({
              broadcaster: 'socket.io',
              client: Socketio,
              host: window.location.hostname + ':6001'
        });
        echo.private('chat')
         .listen('MessageSent', (e) => {
           console.log("Listening...", e);
           console.log(this.state.messages);
           this.setState({
               messages: this.state.messages.concat({
                 message: e.message.message,
                 user: e.user
               })
           });
         });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    handleChatFormSubmit(message) {
        var _message = {
            message: message,
            user: JSON.parse(this.props.user)
        };
        axios.post('/messages', _message).then(response => {
          console.log(response.data.status);
          this.setState({
              messages: this.state.messages.concat(_message)
          });
        });
    }

    scrollToBottom() {
          const scrollHeight = this.messageList.scrollHeight;
          const height = this.messageList.clientHeight;
          const maxScrollTop = scrollHeight - height;
          this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
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
                    <div className="direct-chat-messages" ref={(div) => { this.messageList = div; }}>
                        <ChatMessages messages={this.state.messages} user={this.props.user} />
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
