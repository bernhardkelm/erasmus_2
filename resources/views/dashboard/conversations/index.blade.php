@extends('layouts.app')

@section('content')
    {{ $conversations->count() }}
@endsection