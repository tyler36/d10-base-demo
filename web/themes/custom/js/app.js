// Drupal.behaviors.exampleModule = {
//   attach: function (context, settings) {
//     let header = context.querySelector('html');

//     if (header) {
//       console.log('Hello world!');
//     }
//   }

// };
(function (Drupal, once) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) {
      once('header', 'html', context).forEach(
        item => {
          const messages = new Drupal.Message();
          const messageId = messages.add('test message');
          // messages.remove(messageId);
          messages.add('test message', {type: 'warning'});
          messages.add('test message', {type: 'error'});
          // Clear ALL
          // messages.clear();
        }
      )
    },
    detach: function (context, settings) {
      once('header', 'html', context).forEach(
        item => console.log('goodbye world!')
      )
      console.log('goodbye world! ... out')
    }
  };
})(Drupal, once);
