@extends('layouts.app')

@section('content')
<div class="form__wrapper">
    <div class="form__center">
        <form role="form" method="POST" id="login" action="{{ route('login') }}">
            <h2>Login</h2>
            {{ csrf_field() }}
            <input type="email" placeholder="Email" class="form-control" name="email" value="{{ old('email') }}" required autofocus>
            @if ($errors->has('email'))
                <span class="help-block">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
            <input type="password" placeholder="Password" class="form-control" name="password" required>
            @if ($errors->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
            <div class="checkbox">
                <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                <label for="remember">Remember Me</label>
            </div>
            <a class="button is-outline is-animated"
               href="javascript:{}" onclick="document.getElementById('login').submit();">
                <span>Login</span>
                <span class="icon">
                    <i class="mdi mdi-chevron-right"></i>
                </span>
            </a>
            <a href="{{ route('password.request') }}">
                Forgot Your Password?
            </a>
        </form>
    </div>
</div>
@endsection
