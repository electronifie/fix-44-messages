var NoAllocs = require('../fields/NoAllocs');
var NestedParties2 = require('../components/NestedParties2');
var AllocAccount = require('../fields/AllocAccount');
var AllocAcctIDSource = require('../fields/AllocAcctIDSource');
var AllocSettlCurrency = require('../fields/AllocSettlCurrency');
var IndividualAllocID = require('../fields/IndividualAllocID');
var AllocQty = require('../fields/AllocQty');

function TrdAllocGrp (trdAllocGrp) {
  this.message = trdAllocGrp;
}

/* group */

/* component */
TrdAllocGrp.prototype.nestedParties2 = function () {
  return this.message.groups[NestedParties2.Tag]
    .map(function (nestedParties2) {
      return new NestedParties2(nestedParties2);
  });
};

/* field */
TrdAllocGrp.prototype.allocAccount = function () {
  return new AllocAccount(this.message.tags[AllocAccount.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocAcctIdsource = function () {
  return new AllocAcctIDSource(this.message.tags[AllocAcctIDSource.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocSettlCurrency = function () {
  return new AllocSettlCurrency(this.message.tags[AllocSettlCurrency.Tag]);
};

/* field */
TrdAllocGrp.prototype.individualAllocId = function () {
  return new IndividualAllocID(this.message.tags[IndividualAllocID.Tag]);
};

/* field */
TrdAllocGrp.prototype.allocQty = function () {
  return new AllocQty(this.message.tags[AllocQty.Tag]);
};

/* end group */

TrdAllocGrp.Tag = '78';

module.exports = TrdAllocGrp;