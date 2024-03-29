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
        @if (isset($currentTopic))
            <h3>{{ $currentTopic->name }}</h3>
        @else
            <h3>All discussions</h3>
        @endif
        <a href="/forums/d/create" class="button is-primary">
            <span>Create Discussion</span>
        </a>
        <div class="forum_list">
            @foreach($threads as $thread)
                <div class="forum_wrapper">
                    <div class="forum_head">
                        <div class="forum_img">
                            <img class="img" src="{{ $thread->user->picture }}">
                        </div>
                    </div>
                    <div class="forum_body">
                        <a href="/forums/d/{{ $thread->id }}"><h4>{{ $thread->title }}</h4></a>
                        @if($thread->latestPost)
                            <span>Last Reply {{ $thread->latestPost->getDiffTimeForHumans() }} hours ago by {{ $thread->user->name }}</span>
                        @else
                            <span>No answers yet...be the first one!</span>
                        @endif
                        <p class="crop">{!! $thread->body !!}</p>
                    </div>
                </div>
            @endforeach
        </div>
    </div><!-- div.col_right -->
</div> <!-- div.container -->
<div class="clearfix"></div>
</div>
@endsection
