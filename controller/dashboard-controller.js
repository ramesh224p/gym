//this is dashboard controller

app.controller('dashboardController',['$scope', '$http', '$localStorage', '$window', function($scope, $http, $localStorage, $window){
	$scope.ready = $localStorage.userData;
	roly=$scope.ready.role;
	
	
	
	$scope.search = function(startDate,endDate){
		console.log(startDate,endDate)
		console.log(moment(startDate).format("YYYY/MM/DD"))
		$http.get('http://localhost:3003/dashboard?startdate="'+moment(startDate).format("YYYY/MM/DD")+'"&enddate="'+moment(endDate).format("YYYY/MM/DD")+'"').then(function(response){
		console.log(response.data.data)
		$scope.some=response.data.data;
		});
	}
	 
	  if(roly==1){
		emp_id=$scope.ready.id;
		var emp_obj={};
		$scope.eemail=$scope.ready.email;
		$scope.ename11=$scope.ready.name11;
		$scope.eaddress=$scope.ready.address;
		$scope.emobilenumber=$scope.ready.mobilenumber;
			 
			 
		$http.get('http://localhost:3003/dashboard/'+emp_id).then(function(response){
			$scope.some=response.data.data;
		});	

 
	$scope.openAddMembersPopup=function(){
		$('#myModal').modal('show');
		$scope._id=undefined;
		$scope.email="";
		$scope.name11="";
		$scope.address="";
		$scope.mobilenumber="";
	 }
	
	$scope.submitAddMembersPopup=function(val1, val2, val3, val4){
		
		var emp = {};
		emp.email = val1;
		emp.name11 = val2;
		emp.address = val3;
		emp.mobilenumber = val4;

		$http.post('http://localhost:3003/dashboard/', emp).then(function (data, status, headers, config) { 
		    console.log(data) 
			if(data.status==true){
				$scope.some.push(emp)
			}
		})			
	}
}


 
 if(roly==2){
	$http.get('http://localhost:3003/dashboard').then(function(response){
		console.log(response.data.data);
		$scope.some=response.data.data;
           
	 }); 
	 
	 $scope.openAddMemberPopup=function(){
		 $('#myModal').modal('show');
		 $scope._id=undefined;
		$scope.email="";
		$scope.name11="";
		$scope.address="";
		$scope.mobilenumber="";
	 }
	
	$scope.submitAddMemberPopup=function(val1, val2, val3, val4){
		$('#myModal').modal('show');
		var emp = {};
		emp.email = val1;
		emp.name11 = val2;
		emp.address = val3;
		emp.mobilenumber = val4;

		$http.post('http://localhost:3003/dashboard/', emp).then(function (data, status, headers, config) { 
		    console.log(data) 
			if(data.status==true){
				$scope.some.push(emp)
			}
		})			
	}
	
	$scope.editMember=function(index, emp){
		$('#myModal').modal('show');
		$scope._id=emp.id;
		$scope.email=emp.email;
		$scope.name11=emp.name11;
		$scope.address=emp.address;
		$scope.mobilenumber=emp.mobilenumber;
	}
	
	$scope.edit=function(val1, val2, val3, val4){
		$('#myModal').modal('show');
		var editobj={};
		editobj.email=val1;
		editobj.name11=val2;
		editobj.address=val3;
		editobj.mobilenumber=val4;
		console.log($scope._id)
		

		$http.put('http://localhost:3003/dashboard/'+$scope._id, editobj).then(function (data, status, headers, config) { 
			
		})
	}
	
	$scope.deleteMember=function(index,id){
		if ($window.confirm("Do you want to delete: " )) {
				$scope.some.splice(index,1);
				$http.delete('http://localhost:3003/dashboard/'+id).then(function(response){
				console.log(response);
			}); 
		}
	}
 }	
 

	
}]);

