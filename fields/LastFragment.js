var invert = require('invert-obj');

function LastFragment (lastFragment) {
  this.message = lastFragment;
}

LastFragment.prototype.value = function () {
  return this.message;
};


LastFragment.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

LastFragment.Tag = '893';

LastFragment.Type = 'BOOLEAN';

LastFragment.Values = invert(LastFragment.Keys);

module.exports = LastFragment;