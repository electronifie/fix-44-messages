var invert = require('invert-obj');

function MDUpdateAction (mdupdateAction) {
  this.message = mdupdateAction;
}

MDUpdateAction.prototype.value = function () {
  return this.message;
};


MDUpdateAction.Keys = {
  'NEW': '0',
  'CHANGE': '1',
  'DELETE': '2',
};

MDUpdateAction.Tag = '279';

MDUpdateAction.Type = 'CHAR';

MDUpdateAction.Values = invert(MDUpdateAction.Keys);

module.exports = MDUpdateAction;