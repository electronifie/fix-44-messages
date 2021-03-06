var invert = require('invert-obj');

function DueToRelated (dueToRelated) {
  this.message = dueToRelated;
}

DueToRelated.prototype.value = function () {
  return this.message;
};


DueToRelated.Keys = {
  'YES': 'Y',
  'NO': 'N',
};

DueToRelated.Tag = '329';

DueToRelated.Type = 'BOOLEAN';

DueToRelated.Values = invert(DueToRelated.Keys);

module.exports = DueToRelated;