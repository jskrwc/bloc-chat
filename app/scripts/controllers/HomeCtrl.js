(function() {
    function HomeCtrl(Room, $uibModal) {
//cp2 part 2
      this.rooms = Room.all;

      this.newRoom = function() {
        $uibModal.open({
            animation: this.animationsEnabled,
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal'
            });
      }
    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
