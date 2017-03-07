@extends('layouts.app')

@section('content')
	<div class="container users">
		<h2>Users</h2>
		@foreach($users as $user)
	    <div class="usercard">
	      <h5>{{ $user->name }}</h5>
	      <p>{{ $user->country or '' }} - {{ $user->major or '' }}</p>
	    </div>
		@endforeach
		{{ $users->links() }}
	</div>
@endsection
