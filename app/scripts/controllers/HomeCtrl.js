(function() {
    function HomeCtrl(Room) {
//cp2 part 2
      this.rooms = Room.all;

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
