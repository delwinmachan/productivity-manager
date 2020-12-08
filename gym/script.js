angular.module('myApp', ['ngAnimate', 'ui.bootstrap']);

angular.module('myApp').service('records', function() {
    
    this.data = [{
        'date': new Date(),
        'place': 'Bangalore'
    }];
    
    this.fetch = function() {
        return this.data;
    };
    
    this.save = function(record) {
        this.data.push(record);
    };
    
    this.delete = function(index) {
        this.data.splice(index, 1);
    };
});

angular.module('myApp').controller('HomeController', function($scope, $uibModal, records) {

    $scope.records = records.data; 

    $scope.openModal = function(record) {
        $uibModal.open({
            resolve: {record: null},
            templateUrl: 'modaldialog.html',
            controller: 'ModalController'
        }).result.then(function(newRecord) {
            records.save(newRecord);
        });
    };

    $scope.edit = function(record) {
        $uibModal.open({
            resolve: {
                record: record
            },
            templateUrl: 'modaldialog.html',
            controller: 'ModalController'
        }).result.then(function(updatedRecord) {
            angular.extend(record, updatedRecord);
        });
    };
    
    $scope.delete = function(index) {
      console.log(index + " in delete function");
      $uibModal.open({
        resolve: {record: index},
        template: '<div class="modal-body">' + 
                  '<button class="btn btn-danger" type="button" ng-click="deleteRecord(index)">delete</button>' + 
                  '<button class="btn btn-default" type="button" ng-click="cancel()">cancel</button>' + 
                  '</div>',
        controller: 'ModalController'
      }).result.then(function(deleteIndex) {
        console.log(deleteIndex);
        records.delete(deleteIndex, 1);
      });
    };

    $scope.addwithinCtrl = function() {
        var record = {
            'date': new Date(),
            'place': 'Hyderabad'
        };
        records.save(record);
    };
});

angular.module('myApp').controller('ModalController', function($scope, $uibModalInstance, record) {
    
    $scope.record = angular.copy(record);
    
    // save the input and dismiss the dialog
    $scope.save = function() {
        $uibModalInstance.close($scope.record);
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };
    
    $scope.deleteRecord = function() {
      $uibModalInstance.close($scope.record);
    };
});


angular.module('myApp').directive('dateDirective', function() {
    return {
        scope: {
            model: '=ngModel'
        },
        restrict: 'A',
        templateUrl: 'date.html',
        controller: function($scope) {
            $scope.format = 'dd-MMM-yy';

            $scope.open = function() {
                $scope.status.opened = true;
            };

            $scope.status = {
                opened: false
            };
        }
    }
});