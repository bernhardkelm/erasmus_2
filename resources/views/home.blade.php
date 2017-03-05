@extends('layouts.app')

@section('content')
<div id="col_wrapper">
    <div class="col_left">
        <div class="left_head">
            <div class="profile_img">
                <img class="img" src="src/plug_blue.png">
            </div>
            <div class="social_cotainer">
                <div id="message"><a href="#"><img src="src/icons/message.png"></a></div>
                <div id="twitter"><a href="#"><img src="src/icons/twitter.png"></a></div>
                <div id="facebook"><a href="#"><img src="src/icons/facebook.png"></a></div>
            </div>
        </div>
        <div class="left_body">
            <div class="about">
                <h4>About</h4>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
            <div class="profile_data">
                <h4>COUNTRY</h4>
                <span>Germany</span>
            </div>
            <div class="profile_data">
                <h4>MAJOR</h4>
                <span>Informatics</span>
            </div>
            <div class="profile_data">
                <h4>LANGUAGES</h4>
                <span>English, German</span>
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
                            <h6>{{ $comment->user->name }}</h6>
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
