@extends('layouts.app')

@section('content')
<div class="form__wrapper">
    <div class="form__center">
        @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
        @endif
        <form role="form" method="POST" id="email" action="{{ route('password.email') }}">
            <h2>Reset password</h2>
            <p>To reset your password, enter your email below</p>
            {{ csrf_field() }}
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <input id="email" type="email" placeholder="Email" class="form-control" name="email" value="{{ old('email') }}" required>

                @if ($errors->has('email'))
                    <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                @endif
            </div>
            <a class="button is-outline is-animated"
               href="javascript:{}" onclick="document.getElementById('email').submit();">
                <span>Submit</span>
                <span class="icon">
                    <i class="mdi mdi-chevron-right"></i>
                </span>
            </a>
        </form>
    </div>
</div>
@endsection
