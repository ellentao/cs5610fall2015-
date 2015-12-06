(function()
{
	angular
	.module("PandaMusicApp")
	.factory("UserService", userService);

	function userService($http, $q)
	{ 
		var service = {
		  findUserByUsernameAndPassword : findUserByUsernameAndPassword,
		  findAllUsers : findAllUsers,
		  createUser : createUser,
		  deleteUserById : deleteUserById,
		  updateUser : updateUser
		};

		return service;

		function findUserByUsernameAndPassword(username, password)
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/user?username=' + username + '&' + 'password=' + password)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}

		function findAllUsers()
		{
			var deferred = $q.defer();
			$http
				.get('/api/project/user')
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		} 

		function createUser(user)
		{
			var deferred = $q.defer();
			$http
				.post('/api/project/user', user)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}

		function deleteUserById(id)
		{
			var deferred = $q.defer();
			$http
				.delete('/api/project/user/' + id)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}

		function updateUser(id, user)
		{
			var deferred = $q.defer();
			$http
				.put('/api/project/user/' + id, user)
				.success(function(response) {
					deferred.resolve(response);	
				});						 
			return deferred.promise;
		}    
	}
})();