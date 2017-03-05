@extends('layouts.app')

@section('content')
<div id="col_wrapper">
    <div class="col_left">
        <div class="left_head">
            <div class="profile_img">
                @if ($user->picture)
                    {{ $user->picture }}
                @else 
                    <img class="img" src="{{ asset('src/plug_blue.png') }}">
                @endif
            </div>
            <h2 id="profile_name">{{ $user->name }}</h2>
            <div class="social_cotainer">
                <div id="message"><a href="#"><img src="{{ asset('src/icons/message.png') }}"></a></div>
                @if ($user->twitter)
                    <div id="twitter"><a href="#"><img src="{{ asset('src/icons/twitter.png') }}"></a></div>
                @endif
                @if ($user->facebook)
                    <div id="facebook"><a href="#"><img src="{{ asset('src/icons/facebook.png') }}"></a></div>
                @endif
            </div>
        </div>
        <div class="left_body">
            <div class="about">
                <h4>About</h4>
                @if ($user->about)
                    <p>{{ $user->about }}</p>
                @else 
                    <p>Not disclosed</p>
                @endif
            </div>
            <div class="profile_data">
                <h4>COUNTRY</h4>
                @if ($user->country)
                    <p>{{ $user->country }}</p>
                @else 
                    <p>Not disclosed</p>
                @endif
            </div>
            <div class="profile_data">
                <h4>MAJOR</h4>
                @if ($user->major)
                    <p>{{ $user->major }}</p>
                @else 
                    <p>Not disclosed</p>
                @endif
            </div>
            <div class="profile_data">
                <h4>LANGUAGES</h4>
                @if ($user->languages)
                    <p>{{ $user->languages }}</p>
                @else 
                    <p>Not disclosed</p>
                @endif
            </div>
            <div class="profile_docs">
                <a href="#"><img src="{{ asset('src/icons/resume.png') }}">Resume</a>
                <a href="#"><img src="{{ asset('src/icons/requests.png') }}">Job Requests</a>
            </div>
        </div>
    </div>
    <div class="col_right">
        <form role="form" id="store_post" name="store_post" method="POST" action="{{ route('posts.store') }}">
            {{ csrf_field() }}
            <textarea name="post" placeholder="Write a message..."></textarea>
            <button type="submit">
                Submit
            </button>
        </form>
        <div class="feed">
            <h4>USER FEED</h4>            
            @foreach ($posts as $post)
                <div class="post">
                    <div class="main">
                        <div class="post_img">
                            @if ($user->picture)
                                {{ $user->picture }}
                            @else 
                                <img class="img" src="{{ asset('src/plug_blue.png') }}">
                            @endif
                        </div>
                        <h4>{{ $user->name }}</h4>
                        <p>{{ $post->body }}</p>
                        @can('update', $post)
                            <a>Edit</a>
                        @endcan
                        @can('delete', $post)
                            <a>Delete</a>
                        @endcan
                    </div>
                    @foreach ($post->comments as $comment)
                    <div class="comment">
                        <div class="post_img">
                            @if ($comment->user->picture)
                                {{ $comment->user->picture }}
                            @else 
                                <img class="img" src="{{ asset('src/plug_blue.png') }}">
                            @endif
                        </div>
                        <h4>{{ $comment->user->name }}</h4>
                        <p>{{ $comment->body }}</p>
                        @can('update', $comment)
                            <a>Edit</a>
                        @endcan
                        @can('delete', [$comment, $post])
                            <a>Delete</a>
                        @endcan
                    </div>
                    @endforeach
                </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
