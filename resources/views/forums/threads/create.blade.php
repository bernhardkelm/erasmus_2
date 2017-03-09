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
    	<h3>New Discussion</h3>
    	<form role="form" id="store_thread" name="reply" method="POST" action="{{ route('forums.threads.store') }}">
        	{{ csrf_field() }}
        	<select name="topic_id">
					  @foreach($topics as $topic)
		            <option value="{{ $topic->id }}">{{ $topic->name }}</option>
		        @endforeach
					</select>
        	<input type="text" name="title" placeholder="Title">
        	<textarea class="editor" name="body" placeholder="Your text here..."></textarea>
        	<a class="button is-primary"
               href="javascript:{}" onclick="document.getElementById('store_thread').submit();">
                <span>Submit</span>
            </a>
        </form>
    </div><!-- div.col_right -->
</div> <!-- div.container -->
<div class="clearfix"></div>
</div>
@endsection
