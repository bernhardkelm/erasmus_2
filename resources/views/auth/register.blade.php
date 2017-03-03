@extends('layouts.app')

@section('content')
<div id="form_center_wrapper">
    <div id="form_center">
        <h2>{{ config('app.name', 'Laravel') }}</h2>
        <form role="form" id="register" method="POST" action="{{ route('register') }}">
            {{ csrf_field() }}
            <span>Sign up! It's free.</span>
            <input placeholder="Name" type="text" name="name" value="{{ old('name') }}" required autofocus>
            @if ($errors->has('name'))
                <span class="help-block">
                    {{ $errors->first('name') }}
                </span>
            @endif
            <div class="radio_wrapper">
                <input type="radio" name="role" value="professional"><label>Professional</label>
                <input type="radio" name="role" value="company"><label>Company</label>
            </div>
            <input placeholder="Email" type="email" name="email" value="{{ old('email') }}" required>
            @if ($errors->has('email'))
                <span class="help-block">
                    {{ $errors->first('email') }}
                </span>
            @endif
            <input placeholder="Password" type="password" name="password" required>
            @if ($errors->has('password'))
                <span class="help-block">
                    {{ $errors->first('password') }}
                </span>
            @endif
            <input type="password" placeholder="Confirm passowrd" name="password_confirmation" required>
            <button type="submit" class="btn btn-primary">
                Register
            </button>
            </form>
    </div>
</div>
@endsection
