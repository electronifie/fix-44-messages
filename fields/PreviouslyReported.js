var invert = require('invert-obj');

function PreviouslyReported (previouslyReported) {
  this.message = previouslyReported;
}

PreviouslyReported.prototype.value = function () {
  return this.message;
};


PreviouslyReported.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

PreviouslyReported.Tag = '570';

PreviouslyReported.Type = 'BOOLEAN';

PreviouslyReported.Values = invert(PreviouslyReported.Keys);

module.exports = PreviouslyReported;