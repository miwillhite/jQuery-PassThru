// SpecHelper.js

// Adapted from http://luizfar.wordpress.com/2011/01/10/testing-events-on-jquery-objects-with-jasmine/
var jasmineExtensions = {
  jQuerySpies: {},
  spyOnEvent: function(element, eventName) {
    var control = {
      triggered: false
    }
    
    element.bind(eventName, function() {
      control.triggered = true;
    });
    
    jasmineExtensions.jQuerySpies[element] = {};
    jasmineExtensions.jQuerySpies[element][eventName] = control;
  }
};

var spyOnEvent = jasmineExtensions.spyOnEvent;

beforeEach(function() {
  this.addMatchers({
    toBePlaying: function(expectedSong) {
      var player = this.actual;
      return player.currentlyPlayingSong === expectedSong
          && player.isPlaying;
    },
    
    toHaveBeenTriggeredOn: function(elem) {
      var control = jasmineExtensions.jQuerySpies[elem][this.actual];
      return control.triggered;
    }
  })
});
