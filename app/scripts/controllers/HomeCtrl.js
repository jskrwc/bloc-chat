(function() {
    function HomeCtrl(Room, Message, $uibModal) {
//cp2 part 2
      this.rooms = Room.all;

      this.newRoom = function() {
        $uibModal.open({
            animation: this.animationsEnabled,
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal'
            });
      }

      // cp 4 - setting active room
      // this.setActiveRoom = function(room) {
      //   this.activeRoom = room;
      //   this.messages= Message.getByRoomId(room)
      //
      // }
      this.messages= Message.getByRoomId(-1)  //use -1 to be invalid
}
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$uibModal', HomeCtrl]);
})();
