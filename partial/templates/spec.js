describe('<%= ctrlname %>', function () {
  var scope;
  var ctrl;

  beforeEach(function () {
    module('<%= appname %>');
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('<%= ctrlname %>', {$scope: scope});
    });
  });

  xit('should have tests', function () {

  });

});
