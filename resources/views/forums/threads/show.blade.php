@extends('layouts.app')

@section('content')
<div class="container forum">
    <div class="topics">
       <a href="/forums"><div class="square" style="background: #E66F05"></div>All Discussions</a>
        @foreach($topics as $topic)
            <a href="/forums/t/{{ $topic->id }}"><div class="square" style="background: {{ $topic->color }}"></div>{{ $topic->name }}</a>
        @endforeach
    </div><!-- div.col_left -->
    <div class="forum_main has-depth">
        <div class="forum_list">
          	@foreach($posts as $post)
	          	@if ($loop->first)
		        <div class="forum_wrapper parent">
	                <div class="forum_head">
	                    <div class="forum_img">
	                        <img class="img" src="{{ $post->user->picture }}">
	                    </div>
	                </div>
	                <div class="forum_body">
                		<h3>{{ $thread->title }}</h3>
                    <a href="/users/{{ $post->user->id }}"><h4>{{ $post->user->name }}</h4></a>
                    <i>{{ $post->getDiffTimeForHumans() }} ago</i>
                    <p>{!! $post->body !!}</p>
	                </div>
	            </div>
	            <hr>
	          	@else
					<div class="forum_wrapper">
						<div class="forum_head">
						    <div class="forum_img">
						        <img class="img" src="{{ $post->user->picture }}">
						    </div>
						</div>
						<div class="forum_body">
						    <a href="/users/{{ $post->user->id }}"><h4>{{ $post->user->name }}</h4></a>
						      <i>{{ $post->getDiffTimeForHumans() }} ago</i>
						    <p>{!! $post->body !!}</p>
						</div>
					</div>
					<hr>
				@endif
          	@endforeach
        </div>
        <h3>Reply</h3>
        <form role="form" id="store_post" name="reply" method="POST" action="{{ route('forums.posts.store') }}">
        	{{ csrf_field() }}
        	<input type="hidden" name="thread_id" value="{{ $thread->id }}">
        	<textarea class="editor" name="body" placeholder="Your text here..."></textarea>
        	<a class="button is-primary"
               href="javascript:{}" onclick="document.getElementById('store_post').submit();">
                <span>Submit</span>
            </a>
        </form>
    </div><!-- div.col_right -->
</div> <!-- div.container -->
<div class="clearfix"></div>
</div>
@endsection
