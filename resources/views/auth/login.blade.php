@extends('layouts.app')

@section('content')
<div id="form_center_wrapper">
    <div id="form_center">
        <h2>Login</h2>
        <form role="form" method="POST" action="{{ route('login') }}">
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
            <button type="submit" class="btn btn-primary">
                Login
            </button>
            <a class="btn btn-link" href="{{ route('password.request') }}">
                Forgot Your Password?
            </a>
        </form>
    </div>
</div>
@endsection
