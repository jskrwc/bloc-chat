(function() {
    function HomeCtrl($cookies, Room, Message, $uibModal) {
//cp2 part 2
      this.rooms = Room.all;

      this.activeRoom='no room selected';

      // this.currentUser = "tester"  //$from cookies   html need home.user
      this.currentUser = $cookies.get('blocChatCurrentUser')
//cp6
      this.messages = [];

      this.newRoom = function() {
        $uibModal.open({
            animation: this.animationsEnabled,
            templateUrl: '/templates/modal.html',
            controller: 'ModalCtrl as modal'
            });
      }

      // cp 4 - setting active room
      this.setActiveRoom = function(room) {
        this.activeRoom = room.$value;
        this.messages= Message.getByRoomId(room.$id)
// console.log(this.messages);
      }

      this.newMessage = function() {
        Message.send(this.content);
        this.content= '';
      }
      // this.messages= Message.getByRoomId(-1)  //use -1 to be invalid
}
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$cookies','Room', 'Message','$uibModal', HomeCtrl]);
})();
