@extends('layouts.app')

@section('content')
<div class="profile">
<div class="profile__header"
    style="background-image: url('{{ $user->header }}')"></div>
<div class="container">
    <div class="col_left has-depth">
        <div class="left_head">
            <meta name="user_id" content="{{ $user->id }}">
            <div class="profile_img">
                @if ($user->picture)
                    <img class="img" src="{{ $user->picture }}">
                @else 
                    <img class="img" src="{{ asset('src/plug_blue.png') }}">
                @endif
            </div>
            <h2 id="profile_name">{{ $user->name }}</h2>
            <div class="social_cotainer">
                <a href="#" class="button is-primary">
                    <span class="icon">
                        <i class="mdi mdi-email"></i>
                    </span>
                    <span>Message</span>
                </a>
                @if ($user->twitter)
                    <a href="{{ $user->twitter }}" class="social_button"><i class="mdi mdi-twitter"></i></a>
                @endif
                @if ($user->facebook)
                    <a href="{{ $user->facebook }}" class="social_button"><i class="mdi mdi-facebook"></i></a>
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
                <h4>Country</h4>
                @if ($user->country)
                    <p>{{ $user->country->name }}</p>
                @else 
                    <p>Not disclosed</p>
                @endif
            </div>
            <div class="profile_data">
                <h4>Major</h4>
                @if ($user->major)
                    <p>{{ $user->major }}</p>
                @else 
                    <p>Not disclosed</p>
                @endif
            </div>
            <div class="profile_data">
                <h4>Languages</h4>
                @if ($user->languages)
                    <p>{{ $user->languages }}</p>
                @else 
                    <p>Not disclosed</p>
                @endif
            </div>
            <div class="profile_docs">
                @if ($user->resume)
                    <a href="{{ $user->resume }}" class="button is-outline">
                        <span class="icon">
                            <i class="mdi mdi-file-pdf"></i>
                        </span>
                        <span> Resume</span>
                    </a>
                @endif
            </div>
        </div>
    </div>
    <div class="col_right">
        <div class="tab_wrapper">
            <div name="profile" class="tab active">Feed</div>
            <div name="requests" class="tab right">Job Requests</div>
        </div>

        <div class="profile_wrapper has-depth">
            <form role="form" id="store_post" name="store_post" method="POST" action="{{ route('posts.store') }}">
                {{ csrf_field() }}
                <textarea name="body" placeholder="Write a message..."></textarea>
                <a class="button is-outline is-animated"
                   href="javascript:{}" onclick="document.getElementById('store_post').submit();">
                    <span>Submit</span>
                    <span class="icon">
                        <i class="mdi mdi-chevron-right"></i>
                    </span>
                </a>
            </form>

            <hr />

            <div class="feed">
                <h4>User Feed</h4>
                @foreach ($posts as $post)
                    <div class="row">
                        <div class="column">
                        <div class="post">
                            <div class="post__image">
                                @if($user->picture)
                                    <img class="img" src="{{ $user->picture }}">
                                @else
                                    <img class="img" src="{{ asset('images/default_avatar.jpg') }}">
                                @endif
                            </div>
                            <div class="post__content">
                                <p class="post__user">{{ $user->name }}
                                    <span class="post__date">{{ $post->getDiffTimeForHumans() }} ago</span>
                                </p>
                                <p>{{ $post->body }}</p>
                                <ul class="post__controls">
                                    @can('update', $post)
                                        <li><a href="#">Edit</a></li>
                                    @endcan
                                    @can('delete', $post)
                                        <li><form role="form" method="POST" action="{{ route('posts.destroy', ['id' => $post->id]) }}">
                                                {{ csrf_field() }}
                                                {{ method_field('DELETE') }}
                                                <input type="submit" value="Delete">
                                            </form></li>
                                    @endcan
                                </ul>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        </div>
                    </div>
                    @foreach ($post->comments as $comment)
                        <div class="row">
                            <div class="column is-offset-1">
                                <div class="comment">
                                    <div class="comment__image">
                                        @if($comment->user->picture)
                                            <img class="img" src="{{ $comment->user->picture }}">
                                        @else
                                            <img class="img" src="{{ asset('images/default_avatar.jpg') }}">
                                        @endif
                                    </div>
                                    <div class="comment__content">
                                        <p class="comment__user">{{ $comment->user->name }}
                                            <span class="comment_date">{{ $comment->getDiffTimeForHumans() }} ago</span>
                                        </p>
                                        <p>{{ $comment->body }}</p>
                                        <ul class="comment__controls">
                                        @can('update', $comment)
                                            <li><a href="#">Edit</a></li>
                                        @endcan
                                        @can('delete', [$comment, $post])
                                            <li><form role="form" method="POST" action="{{ route('comments.destroy', ['id' => $comment->id]) }}">
                                                {{ csrf_field() }}
                                                {{ method_field('DELETE') }}
                                                <input type="submit" value="Delete">
                                            </form></li>
                                        @endcan
                                    </ul>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                    <div class="row">
                        <div class="commentbox column is-offset-1">
                            <form role="form" method="POST" action="{{ route('comments.store', ['id' => $post->id]) }}">
                                {{ csrf_field() }}
                                <textarea name="body" placeholder="Write a comment..."></textarea>
                                <button type="submit" class="button is-outline">
                                    <span>Submit</span>
                                </button>
                            </form>
                        </div>
                    </div>
                @endforeach
            </div> <!-- div.feed -->

        </div> <!-- div.profile_wrapper -->

    </div><!-- div.col_right -->
</div> <!-- div.container -->
<div class="clearfix"></div>
</div>
@endsection
