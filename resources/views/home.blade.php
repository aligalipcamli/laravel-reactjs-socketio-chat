@extends('adminlte::page')

@section('title', 'LaraChat - Laravel, ReactJS & Socket.io Chat')

@section('content_header')
<h1>LaraChat</h1>
@stop

@section('content')
<div class="box box-primary direct-chat direct-chat-primary">
    <div class="box-header with-border">
        <h3 class="box-title">Public Chat</h3>

        <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" data-widget="collapse">
              <i class="fa fa-minus"></i>
            </button>
        </div>
    </div>
    <div class="box-body">
        <div class="direct-chat-messages">
            <div class="direct-chat-msg">
                <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-left">Alexander Pierce</span>
                    <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                </div>
                <i class="fa fa-3x fa-user direct-chat-img"></i>
                <div class="direct-chat-text">
                    Is this template really for free? That's unbelievable!
                </div>
            </div>
            <div class="direct-chat-msg right">
                <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-right">Sarah Bullock</span>
                    <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                </div>
                <i class="fa fa-3x fa-user direct-chat-img"></i>
                <div class="direct-chat-text">
                    You better believe it!
                </div>
            </div>
            <div class="direct-chat-msg">
                <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-left">Alexander Pierce</span>
                    <span class="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
                </div>
                <i class="fa fa-3x fa-user direct-chat-img"></i>
                <div class="direct-chat-text">
                    Working with AdminLTE on a great new app! Wanna join?
                </div>
            </div>
            <div class="direct-chat-msg right">
                <div class="direct-chat-info clearfix">
                    <span class="direct-chat-name pull-right">Sarah Bullock</span>
                    <span class="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
                </div>
                <i class="fa fa-3x fa-user direct-chat-img"></i>
                <div class="direct-chat-text">
                    I would love to.
                </div>
            </div>
        </div>
    </div>
    <div class="box-footer">
        <form action="#" method="post">
            <div class="input-group">
                <input type="text" name="message" placeholder="Type Message ..." class="form-control">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-warning btn-flat">Send</button>
                </span>
            </div>
        </form>
    </div>
</div>
@stop
