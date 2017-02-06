@extends('frontend.themes.'.$theme.'.layouts.master')

@section('content')

    <div class="question-container" ng-controller="SummaryCtrl" ng-init='init("{{$cat}}", {!!$votes!!}, [ "#19845b", "#a50f0f", "#facf5a", "#444854", "#1a2156" ])' ng-cloak>

        <div class="container theme-showcase" role="main">
          <div class="jumbotron-final">
              <div class="container">
                <div class="row">
                  <div class="col-md-4"></div>
                  <div class="col-md-4"><img alt="Vos y cuantos más?" src="images/logo_grande.png" class="img-responsive" style="margin:30px 0 0 0"/></div>
                  <div class="col-md-4"></div>
                </div>
                <div class="clearfix"></div>
                <div class="text-center"><h2>Resultados finales</h2></div>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-1"></div>
                    <div class="col-md-8">
                        <div class="row">
                          <div class="col-md-4">
                            <p class="bg-info"><img alt="Vos y cuantos más?" src="images/monton.png" class="img-responsive"/></p>
                            <h3>respondieron igual en temas de</h3>
                            <p class="bg-info" ng-cloak ng-repeat="q in votes.muchos">@{{q.question.title}}</p>
                          </div>
                          <div class="col-md-4">
                            <p class="bg-info"><img alt="Vos y cuantos más?" src="images/muchos.png" class="img-responsive"/></p>
                            <h3>respondieron igual en temas de</h3>
                            <p class="bg-info" ng-cloak ng-repeat="q in votes.algunos">@{{q.question.title}}</p>
                          </div>
                          <div class="col-md-4">
                            <p class="bg-info"><img alt="Vos y cuantos más?" src="images/pocos.png" class="img-responsive"/></p>
                            <h3>respondieron igual en temas de</h3>
                            <p class="bg-info" ng-cloak ng-repeat="q in votes.pocos">@{{q.question.title}}</p>
                          </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <a class="share-btn share-twitter btn btn-default btn-especial3" share-url="{{Request::fullUrl()}}" share-text="Mis resultados en '¿Vos y cuántos más?'" share-hashtags="" share-via="chequeado">Compartir <i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </div>
                            <div class="col-md-4">
                                <a id="share-facebook" class="btn btn-default btn-especial3" data-url="{{Request::fullUrl()}}">Compartir <i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                            </div>
                            <div class="col-md-4">
                                <a href="/" class="btn btn-default btn-especial3">Volver al home</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-1"></div>
                </div>
            </div>
        </div>
    </div> <!-- /container -->         

</div><!--main-->
@endsection

@section('after-scripts-end')
    <script>
    </script>
@stop