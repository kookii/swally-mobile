// Generated by CoffeeScript 1.4.0
(function() {
  'use strict';

  describe('Launch the taptap Game', function() {
    beforeEach(function() {
      browser().navigateTo('/mobile/');
      return expect(browser().location().path()).toBe('/');
    });
    it('should lauch a game', function(done) {
      element('.card-area>form>button').click();
      return expect(repeater('.card-area div.card').count()).toBeGreaterThan(0);
    });
    it('should upturn the card', function() {
      element('.card-area>form>button').click();
      expect(repeater('.card-area>div.span3.show').count()).toEqual(0);
      element('.card-area>div.span3:first>div.card').click();
      return expect(repeater('.card-area>div.span3.show').count()).toEqual(1);
    });
    return it('should show the tap tap game layout', function() {
      element('.card-area>form>button').click();
      element('.card-area div.card:first').click();
      element('.card-area>div.span3:first>div.card').click();
      return sleep(2);
    });
  });

}).call(this);
