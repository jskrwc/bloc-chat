// Message factory  cp 4
(function() {
  /**
    * @function Message
    * @desc factory that defines  message related API queries
    * @param {Object} $firebaseArray -- data returned as array
    */
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

// get messages by roomID:
// pass argument into getByRoomId method that contains roomID associated w rooms message
// firebase equalTo() to find all messages with roomID property equal to the roomId in the argument.
    Message.getByRoomId = function(roomId) {
    //   // **** need  message roomID = to roomID in function argument
//888
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

// 888
      // return messages;
    };
    return Message;
  }

  angular
    .module('blocChat')
    .factory ('Message', ['$firebaseArray', Message]);
})();
