describe("$.passThru()", function() {
  var background, foreground;

  beforeEach(function() {
    background = $('#background');
    foreground = $('#foreground');
  });

  it("passes click event through the targeted element to the one behind it", function() {    
    $(foreground).passThru();
    
    spyOnEvent(foreground, 'click');
            
    foreground.trigger('click');
    
    expect('click').toHaveBeenTriggeredOn(background);
  });
  
  it("passes hover events through the targeted element to the one behind it", function() {    
    $(foreground).passThru();
    
    spyOnEvent(foreground, 'mouseover');
            
    foreground.trigger('mouseover');
    
    expect('mouseover').toHaveBeenTriggeredOn(background);
  });
  
});