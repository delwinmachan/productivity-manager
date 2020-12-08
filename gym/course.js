angular.module('myapp',[])
.controller('myctrl',function($scope)
{
    $scope.listCourses=[
        {name:'PREMIUM SESSION',price:5000,hours:2},
        {name:'ORD SESSION',price:3455,hours:8},
        {name:'ZUMBA',price:4205,hours:3},
        {name:'PERSONAL TRAINING',price:2000,hours:4}
    ];
    $scope.save=function()
    {
        var index=getindex($scope.id);
        $scope.listCourses[index].name=$scope.name;
        $scope.listCourses[index].price=$scope.price;
        $scope.listCourses[index].hours=$scope.hours;
    }
    $scope.add=function()
    {
        $scope.listCourses.push({
            id:$scope.id,name:$scope.name,price:$scope.price,hours:$scope.hours
        });
    }
    function getindex(id)
    {
        for(var i=0;i<$scope.listCourses.length;i++)
        if($scope.listCourses[i].id==id)
        return i;
        return -1;
    }
    $scope.edit=function(id)
    {
        var index=this.$index;
        var course=$scope.listCourses[index];
        $scope.id=course.id;
        $scope.name=course.name;
        $scope.price=course.price;
        $scope.hours=course.hours;
    }
    $scope.delete=function()
    {
        var result=confirm('Are you sure?');
        if(result==true)
        {
            var index=this.$index;
            $scope.listCourses.splice(index,1);
        }
    };
});