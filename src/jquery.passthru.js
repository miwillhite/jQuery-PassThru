/*

  Will pass the specified event through to the element behind
  Usage:
  
  $.passThru('.background');
  
  Inspired (and partially lifted) from Pines Notify http://pines.sourceforge.net/pnotify/
  
*/

(function($) {

  $.fn.passThru = function(event) {
    return this.each(function() {
      event = event || 'click';
      elem  = $(this);
      
      elem.bind(event, function(e) {
        var displayValue = elem.css('display');

        elem.css('display', 'none');
        var intendedElement = document.elementFromPoint(e.pageX, e.pageY);
        elem.css('display', displayValue);

        $(intendedElement).trigger(event);

      });
    });
    
  };
  
})(jQuery);

// // This keeps track of the last element the mouse was over, so
// // mouseleave, mouseenter, etc can be called.
// var nonblock_last_elem;
// // This is used to pass events through the notice if it is non-blocking.
// var nonblock_pass = function(e, e_name){
//  pnotify.css("display", "none");
//  var element_below = document.elementFromPoint(e.clientX, e.clientY);
//  pnotify.css("display", "block");
//  var jelement_below = $(element_below);
//  var cursor_style = jelement_below.css("cursor");
//  pnotify.css("cursor", cursor_style != "auto" ? cursor_style : "default");
//  // If the element changed, call mouseenter, mouseleave, etc.
//  if (!nonblock_last_elem || nonblock_last_elem.get(0) != element_below) {
//    if (nonblock_last_elem) {
//      dom_event.call(nonblock_last_elem.get(0), "mouseleave", e.originalEvent);
//      dom_event.call(nonblock_last_elem.get(0), "mouseout", e.originalEvent);
//    }
//    dom_event.call(element_below, "mouseenter", e.originalEvent);
//    dom_event.call(element_below, "mouseover", e.originalEvent);
//  }
//  dom_event.call(element_below, e_name, e.originalEvent);
//  // Remember the latest element the mouse was over.
//  nonblock_last_elem = jelement_below;
// };