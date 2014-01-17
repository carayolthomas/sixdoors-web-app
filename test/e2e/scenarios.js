'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Sixdoors App', function() {

  it('should redirect index.html to index.html#/feedEntries', function() {
    browser().navigateTo('app/index.html');
    expect(browser().location().url()).toBe('/feedEntries');
  });


  describe('feedEntries list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/feedEntries');
    });


    it('should count the number of feedEntries as 2', function() {
      expect(repeater('.container div').count()).toBe(2);
    });


    it('should render feedEntry2 specific links', function() {
      element('.container div a').click();
      expect(browser().location().url()).toBe('/feedItems/2');
    });
  });

  describe('feedItems list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html#/feedItems/1');
    });

    it('should count the number of feedItems as 3', function() {
      expect(repeater('.row div').count()).toBe(3);
    });
  });
});
