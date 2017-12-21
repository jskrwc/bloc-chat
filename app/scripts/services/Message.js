// Message factory  cp 4
(function() {
  /**
    * @function Message
    * @desc factory that defines  message related API queries
    * @param {Object} $firebaseArray -- data returned as array
    */
    function Message($cookies, $firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);

// get messages by roomID:
// pass argument into getByRoomId method that contains roomID associated w rooms message
// firebase equalTo() to find all messages with roomID property equal to the roomId in the argument.
      Message.getByRoomId = function(roomId) {
        this.activeRoom = roomId;
      //  logic for filtering messages
      // **** need  message roomID = to roomID in function argument
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      };

  // cp 6
      Message.send = function(newMessage) {
        //Send method logic
        if (newMessage !== undefined && newMessage !=='' && this.activeRoom !== 'no room selected') {
          // var date = firebase.database.ServerValue.TIMESTAMP
          // using new Date() method instead...
          var d = new Date();
          date = d.toUTCString();

          var message = {
            username: $cookies.get('blocChatCurrentUser'),
            color: 'darkgreen',  //set as green for now
            roomId: this.activeRoom,
            sentAt: date,
            content: newMessage
          };
          messages.$add(message);
        }
      };

      return Message;
};

  angular
    .module('blocChat')
    .factory ('Message', ['$cookies','$firebaseArray', Message]);
})();
