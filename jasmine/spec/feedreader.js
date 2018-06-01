/*Test to check if allFeeds variable has been defined and it is not
 * empty
 */
$(function() {

  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* Test to check if URL is defined
     * and it is not empty
     */
    it('URL defined and not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
        //the content should not be empty
      })
    });

    /* allFeeds object has a name defined
     * and the name is not empty
     */
    it('name defined and not empty', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      })
    });
  });

  describe('The menu', function() {

    /* The menu element should be
     * hidden by default
     */
    it('menu to be hidden', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    /* The menu changes
     * visibility when the menu icon is clicked
     */
    it('displays once clicked and hides when clicked again', function() {
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  describe('Initial Entries', function() {

    /* To check when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it('there is at least a single .entry within the .feed container', function() {
      expect($('.feed .entry').length).not.toBe(0);

    });
  });

  describe('New Feed Selection', function() {
    var loadingFeed;

    /* Test that ensures when a new feed is loaded
     * by the loadFeed function the content actually changes
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        loadingFeed = $('.feed').html();
        //check a loading feed
        loadFeed(1, done);
      });
    });
    it('the content actually changes when a new feed is loaded', function() {
      expect($('.feed').html()).not.toBe(loadingFeed);
    });
  });
}());
