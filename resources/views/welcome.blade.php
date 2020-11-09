<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('theme/css/app.css')}}">
        <link rel="stylesheet" href="{{asset('theme/css/core.css')}}">
        <title>Laravel</title>
    </head>
    <body>

        <div id="app"><main-component></main-component></div>
        <script src="{{asset('js/app.js')}}"></script>

    </body>
</html>

<script src="{{asset('theme/js/app.js')}}"></script>
<script src="{{asset('theme/js/core.min.js')}}"></script>
