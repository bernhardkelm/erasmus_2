@extends('layouts.app')

@section('content')
	<div class="container">
		<div class="users_wrapper">
			<h2>User Overview</h2>
			@foreach($users as $user)
		    <div class="usercard has-depth">
		    	<div class="left">
		    		<div class="card_img">
		    			@if($user->picture)
		    				<img class="img" src="{{ $user->picture }}">
		    			@else
		    				<img class="img" src="{{ asset('images/default_avatar.jpg') }}">
		    			@endif
		    		</div>
			      <h3>{{ $user->name }}</h3>
			      <a href="#" class="button is-primary">
                <span class="icon">
                    <i class="mdi mdi-email"></i>
                </span>
                <span>Message</span>
            </a>
		    	</div>
		    	<div class="right">
		    		<h4>COUNTRY</h4>
		    		<span>{{ $user->country or 'Not disclosed' }}</span>
		    		<h4>MAJOR</h4>
		    		<span>{{ $user->major or 'Not disclosed' }}</span>
		    		<h4>LANGUAGES</h4>
		    		<span>{{ $user->languages or 'Not Disclosed' }}</span>
		    	</div>
		    </div>
			@endforeach
			{{ $users->links() }}
		</div>
	</div>
@endsection
