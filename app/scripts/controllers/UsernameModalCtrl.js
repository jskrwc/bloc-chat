//cp 5
//Username Modal controller $uibModalInstance -- controls username modal
//
(function() {
    function UsernameModalCtrl ($uibModalInstance, $cookies) {
      // no cancel-- a username must be entered
      // this.cancel = function() {
      //   $uibModalInstance.dismiss('canceled');
      // };

      this.submit = function() {

        $cookies.put('blocChatCurrentUser', this.username);
//make sure acceptable username - 3 or more characters
        if (this.username.length >2) {
          $uibModalInstance.close('submitted');
        }
      };
    }

    angular
        .module('blocChat')
        .controller('UsernameModalCtrl', [ '$uibModalInstance', '$cookies', UsernameModalCtrl]);
})();
