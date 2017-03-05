<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
    <header>
        <a id="logo" href="{{ url('/') }}">
            <img src="{{ asset('src/plug_blue.png') }}">
            {{ config('app.name', 'Laravel') }}
        </a>
        <nav>
            <!-- Authentication Links -->
            @if (Auth::guest())
                <ul>
                    <li><a href="{{ route('login') }}">Login</a></li>
                    <li><a href="{{ route('register') }}">Register</a></li>
                </ul>
            @else
                <ul class="dropdown">
                    <li>
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            {{ Auth::user()->name }} <span class="caret"></span>
                        </a>
                        <li>
                            <a href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                         document.getElementById('logout-form').submit();">
                                Logout
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </li>
                    </li>
                </ul>
            @endif
        </nav>
    </header>
    <main>
        @yield('content')
    </main>
    <footer>
        <img src="{{ asset('src/plug_blue_text.png') }}">
        <span>© 2017</span>
        <div class="footer_social">
            <a href="#"><img src="{{ asset('src/footer/fb_logo.png') }}"></a>
            <a href="#"><img src="{{ asset('src/footer/twitter_logo.png') }}"></a>
            <a href="#"><img src="{{ asset('src/footer/insta_logo.png') }}"></a>
            <a href="#"><img src="{{ asset('src/footer/yt_logo.png') }}"></a>
        </div>
    </footer>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
