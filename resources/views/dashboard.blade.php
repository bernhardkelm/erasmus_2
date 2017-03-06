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
			<a href="#" name="inbox"><i class="mdi mdi-email red"></i>Inbox</a>
			<a href="#" name="edit_profile"><i class="mdi mdi-lead-pencil blue"></i>Edit Profile</a>
			<a href="#" name="job_requests"><i class="mdi mdi-book-open purple"></i>My Job Requests</a>
			<a href="#" name="company_section"><i class="mdi mdi-domain green"></i>Company Section</a>
			<a href="#" name="job_offers"><i class="mdi mdi-book-open pink mdi-flip-vertical"></i>My Job Offers</a>
		</div>
	</div>
	<div class="dash_right">
		<!--Inbox-->
			<div name="inbox" class="dash_container" style="display: none">
				<h2 class="bottomless">Inbox</h2>
				@if ($conversations->count() == 1)
					<span>{{ $conversations->count()}} conversation in total</span>
				@else 
					<span>{{ $conversations->count()}} conversation in total</span>
				@endif
				@foreach ($conversations as $conversation)
					@if($conversation->latestMessage->recipient_id == $user->id && !$conversation->latestMessage->is_seen)
						<div class="convo unread" name="convo_{{ $conversation->id }}">
					@else
						<div class="convo" name="convo_{{ $conversation->id }}">
					@endif
						@if ($conversation->user_one == $user->id)
							<div class="msg_img">
								@if($conversation->userTwo->picture)
										<img class="img" src="{{ $conversation->userTwo->picture }}">
								@else
										<img class="img" src="{{ asset('images/default_avatar.jpg') }}">
								@endif
							</div>
							<div class="convo_body">
								<h4>{{ $conversation->userTwo->name}}</h4>
								<span>{{ $conversation->latestMessage->message }}</span>
							</div>
						@else
							<div class="msg_img">
								@if($conversation->userOne->picture)
									<img class="img" src="{{ $conversation->userOne->picture }}">
								@else
									<img class="img" src="{{ asset('images/default_avatar.jpg') }}">
								@endif
							</div>
							<div class="convo_body">
								<h4>{{ $conversation->userOne->name}}</h4>
								<span>{{ $conversation->latestMessage->message }}</span>
							</div>
						@endif
					</div>
					<div class="convo_deep" name="convo_{{ $conversation->id }}" style="display: none">
						<form method="post" action="{{ route('messages.store') }}">
							{{ csrf_field() }}
							<textarea name="message" placeholder="New message..."></textarea>
							<input type="hidden" name="conversation_id" value="{{ $conversation->id }}">
							@if ($conversation->user_one == $user->id)
								<input type="hidden" name="recipient_id" value="{{ $conversation->userTwo->id }}">
							@else
								<input type="hidden" name="recipient_id" value="{{ $conversation->userOne->id }}">
							@endif
							<input class="button is-outline is-info" type="submit" name="submit" value="Send">
							<a href="#" class="back button is-outline">Back</a>
						</form>
						@foreach ($conversation->messages as $message)
							<div class="convo message">
								<div class="msg_img">
									@if($message->sender->picture)
										<img class="img" src="{{ $conversation->userOne->picture }}">
									@else
										<img class="img" src="{{ asset('images/default_avatar.jpg') }}">
									@endif
								</div>
								<div class="msg_body">
									<h4>{{ $message->sender->name}}</h4>
									<span>{{ $message->message }}</span>
								</div>
							</div>
						@endforeach
						<!--TODO: Place button correctly and format header on convo change, also convo post over ajax-->
						<form name="convo_destroy" action="{{ route('conversations.destroy', ['id' => $conversation->id]) }}">
							{{ csrf_field() }}
							{{ method_field('PUT') }}
							<input type="submit" class="button has-depth is-danger" value="Delete">
						</form>
					</div>
	      @endforeach
			</div>
		<!--End inbox-->
		<!--Edit profile-->
		<div name="edit_profile" class="dash_container" style="display: none">
			<h2>Edit Profile</h2>
			<form id="edit_profile" method="post" action="{{ route('users.update', ['id' => $user->id]) }}" enctype="multipart/form-data">
				{{ csrf_field() }}
				{{ method_field('PUT') }}
				<h3>Account Information</h3>
				<div>
					<label for="name">Name</label>
					<input type="text" name="name" id="name" value="{{ $user->name }}">
		            @if ($errors->has('name'))
		                <span class="help-block">
		                    {{ $errors->first('name') }}
		                </span>
		            @endif
	            </div>
	            <div>
		            <label for="email">Email</label>
		            <input type="email" name="email" id="email" value="{{ $user->email }}">
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
	            	<input type="text" name="country" id="country" value="{{ $user->country }}">
	            </div>
	            <div>
	            	<label for="major">Major</label>
	            	<input type="text" name="major" id="major" value="{{ $user->major }}">
	            </div>
	            <div>
	            	<label for="languages">Languages</label>
	            	<input type="text" name="languages" id="languages" value="{{ $user->languages }}">
	            </div>
	            <hr>
	            <h3>About</h3>
	            <div class="full">
	            	<label for="about">Write something about yourself.</label>
	            	<textarea name="about" id="about">{{ $user->about }}</textarea>
	            </div>
	            <hr>
	            <h3>Files</h3>
	            <div class="full">
		            <input id="image" type="file" name="image">
		            <label for="image">Upload Profile Picture <i class="mdi mdi-cloud-upload"></i></label>
		            <input id="resume" type="file" name="resume">
		            <label for="resume">Upload Resume (PDF) <i class="mdi mdi-cloud-upload"></i></label>
	            </div>
	            <div>
		            <a class="button is-outline is-info"
		               href="javascript:{}" onclick="document.getElementById('edit_profile').submit();">
		              <span>Save</span>
		            </a>
	            </div>
			</form>
		</div>
		<!--End edit profile-->
		<!--Job requests-->
		<div name="job_requests" class="dash_container" style="display: none" >
			<h2>Job Requests</h2>
			<h3>Create a new Requests</h3>
			<form id="add_request" name="job_request" method="post" action="{{ route('job_requests.store') }}">
				{{ csrf_field() }}
				<div>
					<label for="request_title">Title</label>
					<input type="text" name="title" id="request_title">
				</div>
				<div class="full">
					<label for="request_body">Description</label>
					<textarea id="request_body" name="body"></textarea>
				</div>
				<div>
					<a class="button is-outline is-info"
		          href="javascript:{}" onclick="document.getElementById('add_request').submit();">
            <span>Save</span>
          </a>
          </div>
			</form>
			<hr>
			<!--TODO: Add all job requests and make them editable-->
			<h3>Active Requests</h3>
			@foreach ($jobRequests as $request)
				<div class="request">
					<meta name="id" content="{{ $request->id }}">
					<h3>{{ $request->title }}</h3>
					<p>{{ $request->body }}</p>
					<a class="button is-outline edit_request" href="#">
              <span>Edit</span><span class="icon"><i class="mdi mdi-pencil"></i></span>
          </a>
          <form id="delete_request" name="delete_request" method="post" action="{{ route('job_requests.destroy', ['id' => $request->id]) }}">
          	{{ csrf_field() }}
          	{{ method_field('DELETE') }}
          	<a class="button is-outline"
               href="javascript:{}" onclick="document.getElementById('delete_request').submit();">
              <span>Delete</span>
            </a>
          </form>
				</div>
      @endforeach
		</div>
		<!--End job requests-->
	</div>
</div>
@endsection
