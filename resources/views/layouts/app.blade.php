<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="_token" content="{{ csrf_token() }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>PluggedIN</title>

    <!-- Styles -->
    <link href="{{ asset('css/pluggedin.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="http://cdn.materialdesignicons.com/1.8.36/css/materialdesignicons.min.css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet">
</head>
<body>

    @if (Auth::check())
        @include('modules.navigation-private')
    @else
        @include('modules.navigation-public')
    @endif

    <main>
        @yield('content')
    </main>

    @include('modules.footer')

    @section('scripts')
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/luma.min.js') }}"></script>
    <script src="{{ asset('js/jquery.te.js') }}"></script>
    <script type="text/javascript">
        //Editor settings
        $(".editor").jqte({
            center: false,
            color: false,
            fsize: false,
            format: false,
            indent: false,
            outdent: false,
            left: false,
            right: false,
            ol: false,
            ul: false,
            p: false,
            rule: false,
            source: false,
            sub: false,
            sup: false
        });
    </script>
    @show
</body>
</html>
