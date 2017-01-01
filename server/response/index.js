var NounProject = require('the-noun-project');

/**
 * Words to skip fetching an image for.
 */
var SKIP_WORDS = [
  'I',
  'are',
  'with',
  'from',
  'to'
]

const Response = {

  /**
   * Return either cached instance or a new one.
   */
  getNounProjectInstance: function() {
    return this.nounProject || new NounProject({
      key: 'c1f6c72669324cf98664b4aee38f5a42',
      secret: 'f2944d3f61e848948f71b98c45bf744a'
    });
  },

  /**
   * Helper to load images recursively from API until done.
   * @param  {Object} res - Express response object. Will send via HTTP when ready.
   * @param  {Array} allData
   * @param  {String} words
   * @param  {Number} index
   * @return {[type]}
   */
  getImages: function(res, allData, words, index) {
    if (SKIP_WORDS.indexOf(words[index]) !== -1) {
      // skip this word
      allData.push({
        success: false,
        word: words[index],
        data: null
      });
      this.getRemainingImages(res, allData, words, index);
    } else {
      // make a request for the image
      this.getNounProjectInstance().getIconByTerm(words[index], (err, data) => {
        allData.push({
          success: !err,
          word: words[index],
          data: data
        });
        this.getRemainingImages(res, allData, words, index);
      });
    }
  },

  /**
   * Load remaining images if any, otherwise send response.
   * @param  {Object} res
   * @param  {Array} allData
   * @param  {String} words
   * @param  {Number} index
   */
  getRemainingImages: function(res, allData, words, index) {
    if (words.length === index) {
      res.send({
        data: allData
      });
    } else {
      this.getImages(res, allData, words, index + 1)
    }
  }
};

module.exports = Response;
