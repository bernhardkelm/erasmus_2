@extends('layouts.app')

@section('content')
<div id="form_center_wrapper">
    <div id="form_center">
        <h2>Reset password</h2>
        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @endif
        <form role="form" method="POST" action="{{ route('password.email') }}">
            {{ csrf_field() }}
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <input id="email" type="email" placeholder="Email" class="form-control" name="email" value="{{ old('email') }}" required>

                @if ($errors->has('email'))
                    <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>
                <button type="submit" class="btn btn-primary">
                    Send Password Reset Link
                </button>
        </form>
    </div>
</div>
@endsection
