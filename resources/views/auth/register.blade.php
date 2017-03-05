@extends('layouts.app')

@section('content')
<div class="form__wrapper">
    <div class="form__center">
        <form role="form" id="register" method="POST" action="{{ route('register') }}">
            {{ csrf_field() }}
            <h2>Sign up! It's free.</h2>
            <input placeholder="Name" type="text" name="name" value="{{ old('name') }}" required autofocus>
            @if ($errors->has('name'))
                <span class="help-block">
                    {{ $errors->first('name') }}
                </span>
            @endif
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
            <input type="password" placeholder="Confirm password" name="password_confirmation" required>

            <div class="form__radios">
                <input type="radio" name="type" id="professional" value="1"><label for="professional">Professional</label>
                <input type="radio" name="type" id="company" value="2"><label for="company">Company</label>
            </div>
            @if ($errors->has('type'))
                <span class="help-block">
                    {{ $errors->first('type') }}
                </span>
            @endif
            
            <a class="button is-outline is-animated"
               href="javascript:{}" onclick="document.getElementById('register').submit();">
                <span>Register</span>
                <span class="icon">
                    <i class="mdi mdi-chevron-right"></i>
                </span>
            </a>
        </form>
    </div>
</div>
@endsection
