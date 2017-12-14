// cp 5 - username cookies

(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        animation: this.animationsEnabled,
        templateUrl: '/templates/username-modal.html',
        controller: 'UsernameModalCtrl as modal'
      });
    }
  }


  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
