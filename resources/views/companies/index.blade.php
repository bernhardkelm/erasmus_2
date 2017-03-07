@extends('layouts.app')

@section('content')
    <div class="container">
		<div class="users_wrapper">
			<h2>Companies Overview</h2>
			@foreach($companies as $company)
		    <div class="usercard has-depth">
		    	<div class="left">
		    		<div class="card_img">
		    			@if($company->picture)
		    				<img class="img" src="{{ $company->picture }}">
		    			@else
		    				<img class="img" src="{{ asset('images/default_avatar.jpg') }}">
		    			@endif
		    		</div>
			      <h3>{{ $company->name }}</h3>
			      <a href="#" class="button is-primary">
                <span class="icon">
                    <i class="mdi mdi-domain"></i>
                </span>
                <span>Profile</span>
            </a>
		    	</div>
		    	<div class="right">
		    		<h4>LOCATION</h4>
		    		<span>{{ $company->location or 'Not disclosed' }}</span>
		    		<h4>DESCRIPTION</h4>
		    		<span class="description">{{ $company->description or 'Not disclosed' }}</span>
		    		<a href="#" class="button is-outline">
            <span class="icon">
                <i class="mdi mdi-book-open"></i>
            </span>
            <span>Job Offers</span>
            </a>
		    	</div>
		    </div>
			@endforeach
			{{ $companies->links() }}
		</div>
	</div>
@endsection
