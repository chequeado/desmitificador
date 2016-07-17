<!DOCTYPE html>
<html lang="en" itemscope itemtype="http://schema.org/Article">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="_token" content="{{ csrf_token() }}" />

        @yield('meta')

        <!-- Styles -->
        @yield('before-styles-end')
        {!! Html::style(elixir('css/frontend.'.$theme.'.css')) !!}
        @yield('after-styles-end')

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
    <body ng-app="HomeApp" ng-cloak>


        @include('includes.partials.messages')
        @yield('content')

        <!-- JavaScripts -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="{{asset('js/vendor/jquery/jquery-2.1.4.min.js')}}"><\/script>')</script>

        {!! Html::script('js/vendor/bootstrap/bootstrap.min.js') !!}

        @yield('before-scripts-end')
        {!! Html::script(elixir('js/frontend.js')) !!}
        @yield('after-scripts-end')

        <!-- Your application bootstrap  -->
          <script type="text/javascript">    
            /**
             * You must include the dependency on 'ngMaterial' 
             */
            angular.module('HomeApp', ['ngMaterial'])
            .config(function($mdThemingProvider) {
              $mdThemingProvider.theme('altTheme')
                /*.primaryPalette('pink')
                .accentPalette('orange')
                .backgroundPalette('grey');*/
            });
          </script>

        @include('includes.partials.ga')
    </body>
</html>