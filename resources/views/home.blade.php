@extends('adminlte::page')

@section('title', 'LaraChat - Laravel, ReactJS & Socket.io Chat')

@section('content_header')
<h1>LaraChat</h1>
@stop

@section('content')
<div id="chat-box" data-user="{{ Auth::user() }}"></div>
@stop
