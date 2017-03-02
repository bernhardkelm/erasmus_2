@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Your Posts</div>

                <div class="panel-body">
                    @foreach ($posts as $post)
                        <div class="row">
                            <div class="col-md-12">
                                <p>{{ $post->body }}</p>
                                @can('update', $post)
                                    <a>Edit</a>
                                @endcan
                                @foreach ($post->comments as $comment)
                                    <div class="row">
                                        <div class="col-md-11 col-md-offset-1">
                                            <h6>{{ $comment->user->name }}</h6>
                                            <p>{{ $comment->body }}</p>
                                            @can('update', $comment)
                                                <a>Edit</a>
                                            @endcan
                                            @can('delete', [$comment, $post])
                                                <a>Delete</a>
                                            @endcan
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                        <hr />
                    @endforeach
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
