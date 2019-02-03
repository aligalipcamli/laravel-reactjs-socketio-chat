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
            <div id="chat-messages"></div>
        </div>
    </div>
    <div class="box-footer">
        <div id="chat-form"></div>
    </div>
</div>
@stop
