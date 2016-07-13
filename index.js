var rootFontSize = 16; // By default browsers have a font-size of 16px.

/**
 * Convert pixels to rem.
 * @param  {String|Number} pxValue value in pixel unit
 * @return {String}                value in rem unit
 */
function convertToRem(pxValue) {
  return pxValue / rootFontSize + 'rem';
}

/**
 * Convert a sequence of pixel values to rem values.
 * @param  {String|Number} pxValues values in px unit
 * @return {String}                 values in rem unit
 */
function rem(pxValues) {
  var remValues = String(pxValues).split(' ');
  remValues = remValues.map(convertToRem);
  remValues = remValues.join(' ');

  return remValues;
}

exports.default = rem;
module.exports = exports['default'];
