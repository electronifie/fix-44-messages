var invert = require('invert-obj');

function RegistRejReasonCode (registRejReasonCode) {
  this.message = registRejReasonCode;
}

RegistRejReasonCode.prototype.value = function () {
  return this.message;
};


RegistRejReasonCode.Keys = {
  'INVALID_UNACCEPTABLE_ACCOUNT_TYPE': '1',
  'INVALID_UNACCEPTABLE_TAX_EXEMPT_TYPE': '2',
  'INVALID_UNACCEPTABLE_OWNERSHIP_TYPE': '3',
  'INVALID_UNACCEPTABLE_NO_REG_DETLS': '4',
  'INVALID_UNACCEPTABLE_REG_SEQ_NO': '5',
  'INVALID_UNACCEPTABLE_REG_DTLS': '6',
  'INVALID_UNACCEPTABLE_MAILING_DTLS': '7',
  'INVALID_UNACCEPTABLE_MAILING_INST': '8',
  'INVALID_UNACCEPTABLE_INVESTOR_ID': '9',
  'INVALID_UNACCEPTABLE_INVESTOR_ID_SOURCE': '10',
  'INVALID_UNACCEPTABLE_DATE_OF_BIRTH': '11',
  'INVALID_UNACCEPTABLE_INVESTOR_COUNTRY_OF_RESIDENCE': '12',
  'INVALID_UNACCEPTABLE_NODISTRIBINSTNS': '13',
  'INVALID_UNACCEPTABLE_DISTRIB_PERCENTAGE': '14',
  'INVALID_UNACCEPTABLE_DISTRIB_PAYMENT_METHOD': '15',
  'INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NAME': '16',
  'INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_CODE': '17',
  'INVALID_UNACCEPTABLE_CASH_DISTRIB_AGENT_ACCT_NUM': '18',
  'OTHER': '99',
};

RegistRejReasonCode.Tag = '507';

RegistRejReasonCode.Type = 'INT';

RegistRejReasonCode.Values = invert(RegistRejReasonCode.Keys);

module.exports = RegistRejReasonCode;