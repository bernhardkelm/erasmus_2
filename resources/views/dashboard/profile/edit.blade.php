@extends('layouts.app')

@section('content')
<div id="dash_wrapper" class="container">
	<div class="dash_left">
		<div class="left_head">
			<div class="profile_img">
                @if ($user->picture)
                    <img class="img" src="{{ $user->picture }}">
                @else 
                    <img class="img" src="{{ asset('src/plug_blue.png') }}">
                @endif
            </div>
            <h2 id="profile_name">{{ $user->name }}</h2>
		</div>
		<div class="dash_options">
			<a href="#"><i class="mdi mdi-email red"></i>Inbox</a>
			<a href="#"><i class="mdi mdi-lead-pencil blue"></i>Edit Profile</a>
			<a href="#"><i class="mdi mdi-book-open purple"></i>My Job Requests</a>
			<a href="#"><i class="mdi mdi-domain green"></i>Company Section</a>
			<a href="#"><i class="mdi mdi-book-open pink mdi-flip-vertical"></i>My Job Offers</a>
		</div>
	</div>
	<div class="dash_right">
		<form name="edit_profile" method="post" action="{{ route('users.update', ['id' => $user->id]) }}" enctype="multipart/form-data">
			{{ csrf_field() }}
			{{ method_field('PUT') }}
			<h2>Edit Profile</h2>
			<h3>Account Information</h3>
			<div>
				<label for="name">Name</label>
				<input type="text" name="name" id="name">
	            @if ($errors->has('name'))
	                <span class="help-block">
	                    {{ $errors->first('name') }}
	                </span>
	            @endif
            </div>
            <div>
	            <label for="email">Email</label>
	            <input type="email" name="email" id="email">
	            @if ($errors->has('email'))
	                <span class="help-block">
	                    {{ $errors->first('email') }}
	                </span>
	            @endif
            </div>
            <div>
	            <label for="password">New password</label>
	            <input type="password" name="password" id="password">
	            @if ($errors->has('password'))
	                <span class="help-block">
	                    {{ $errors->first('password') }}
	                </span>
	            @endif
            </div>
            <div>
	            <label for="repeat_password">Repeat password</label>
	            <input type="password" name="password_confirmation" id="repeat_password">
            </div>
            <hr>
            <h3>Personal information</h3>
            <div>
            	<label for="country">Country</label>
            	<input type="text" name="country" id="country">
            </div>
            <div>
            	<label for="major">Major</label>
            	<input type="text" name="major" id="major">
            </div>
            <div>
            	<label for="languages">Languages</label>
            	<input type="text" name="languages" id="languages">
            </div>
            <hr>
            <h3>About</h3>
            <div class="full">
            	<label for="about">Write something about yourself.</label>
            	<textarea name="about" id="about"></textarea>
            </div>
            <hr>
            <h3>Files</h3>
            <div class="full">
	            <input id="image" type="file" name="image">
	            <label for="image">Upload Profile Picture <i class="mdi mdi-cloud-upload"></i></label>
	            <input id="resume" type="file" name="resume">
	            <label for="resume">Upload Resume (PDF) <i class="mdi mdi-cloud-upload"></i></label>
            </div>
		</form>
	</div>
</div>
@endsection
