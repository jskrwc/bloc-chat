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
        //user.add(this.username); //????  add to $cookies

        $cookies.put('blocChatCurrentUser', this.username);

        $uibModalInstance.close('submitted');
      };
    }

    angular
        .module('blocChat')
        .controller('UsernameModalCtrl', [ '$uibModalInstance', '$cookies', UsernameModalCtrl]);
})();
