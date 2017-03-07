@extends('layouts.app')

@section('content')
    <h1>Users</h1>
    @foreach($users as $user)
        <div class="usercard">
            <h5>{{ $user->name }}</h5>
            <p>{{ $user->country or '' }} - {{ $user->major or '' }}</p>
        </div>
    @endforeach
    {{ $users->links() }}
@endsection
