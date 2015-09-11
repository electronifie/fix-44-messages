var invert = require('invert-obj');

function TaxAdvantageType (taxAdvantageType) {
  this.message = taxAdvantageType;
}

TaxAdvantageType.prototype.value = function () {
  return this.message;
};


TaxAdvantageType.Keys = {
  'NONE_NOT_APPLICABLE': '0',
  'MAXI_ISA': '1',
  'TESSA': '2',
  'MINI_CASH_ISA': '3',
  'MINI_STOCKS_AND_SHARES_ISA': '4',
  'MINI_INSURANCE_ISA': '5',
  'CURRENT_YEAR_PAYMENT': '6',
  'PRIOR_YEAR_PAYMENT': '7',
  'ASSET_TRANSFER': '8',
  'EMPLOYEE': '9',
  'EMPLOYEE_CURRENT_YEAR': '10',
  'EMPLOYER': '11',
  'EMPLOYER_CURRENT_YEAR': '12',
  'NON_FUND_PROTOTYPE_IRA': '13',
  'NON_FUND_QUALIFIED_PLAN': '14',
  'DEFINED_CONTRIBUTION_PLAN': '15',
  'INDIVIDUAL_RETIREMENT_ACCOUNT': '16',
  'INDIVIDUAL_RETIREMENT_ACCOUNT_ROLLOVER': '17',
  'KEOGH': '18',
  'PROFIT_SHARING_PLAN': '19',
  '401K': '20',
  'SELF_DIRECTED_IRA': '21',
  '403': '22',
  '457': '23',
  'ROTH_IRA_24': '24',
  'ROTH_IRA_25': '25',
  'ROTH_CONVERSION_IRA_26': '26',
  'ROTH_CONVERSION_IRA_27': '27',
  'EDUCATION_IRA_28': '28',
  'EDUCATION_IRA_29': '29',
};

TaxAdvantageType.Tag = '495';

TaxAdvantageType.Type = 'INT';

TaxAdvantageType.Values = invert(TaxAdvantageType.Keys);

module.exports = TaxAdvantageType;