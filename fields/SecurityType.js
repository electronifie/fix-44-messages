var invert = require('invert-obj');

function SecurityType (securityType) {
  this.message = securityType;
}

SecurityType.prototype.value = function () {
  return this.message;
};


SecurityType.Keys = {
  'FUTURE': 'FUT',
  'OPTION': 'OPT',
  'EURO_SUPRANATIONAL_COUPONS': 'EUSUPRA',
  'FEDERAL_AGENCY_COUPON': 'FAC',
  'FEDERAL_AGENCY_DISCOUNT_NOTE': 'FADN',
  'PRIVATE_EXPORT_FUNDING': 'PEF',
  'USD_SUPRANATIONAL_COUPONS': 'SUPRA',
  'CORPORATE_BOND': 'CORP',
  'CORPORATE_PRIVATE_PLACEMENT': 'CPP',
  'CONVERTIBLE_BOND': 'CB',
  'DUAL_CURRENCY': 'DUAL',
  'EURO_CORPORATE_BOND': 'EUCORP',
  'INDEXED_LINKED': 'XLINKD',
  'STRUCTURED_NOTES': 'STRUCT',
  'YANKEE_CORPORATE_BOND': 'YANK',
  'FOREIGN_EXCHANGE_CONTRACT': 'FOR',
  'COMMON_STOCK': 'CS',
  'PREFERRED_STOCK': 'PS',
  'BRADY_BOND': 'BRADY',
  'EURO_SOVEREIGNS': 'EUSOV',
  'US_TREASURY_BOND': 'TBOND',
  'INTEREST_STRIP_FROM_ANY_BOND_OR_NOTE': 'TINT',
  'TREASURY_INFLATION_PROTECTED_SECURITIES': 'TIPS',
  'PRINCIPAL_STRIP_OF_A_CALLABLE_BOND_OR_NOTE': 'TCAL',
  'PRINCIPAL_STRIP_FROM_A_NON_CALLABLE_BOND_OR_NOTE': 'TPRN',
  'US_TREASURY_NOTE_UST': 'UST',
  'US_TREASURY_BILL_USTB': 'USTB',
  'US_TREASURY_NOTE_TNOTE': 'TNOTE',
  'US_TREASURY_BILL_TBILL': 'TBILL',
  'REPURCHASE': 'REPO',
  'FORWARD': 'FORWARD',
  'BUY_SELLBACK': 'BUYSELL',
  'SECURITIES_LOAN': 'SECLOAN',
  'SECURITIES_PLEDGE': 'SECPLEDGE',
  'TERM_LOAN': 'TERM',
  'REVOLVER_LOAN': 'RVLV',
  'REVOLVER_TERM_LOAN': 'RVLVTRM',
  'BRIDGE_LOAN': 'BRIDGE',
  'LETTER_OF_CREDIT': 'LOFC',
  'SWING_LINE_FACILITY': 'SWING',
  'DEBTOR_IN_POSSESSION': 'DINP',
  'DEFAULTED': 'DEFLTED',
  'WITHDRAWN': 'WITHDRN',
  'REPLACED': 'REPLACD',
  'MATURED': 'MATURED',
  'AMENDED_RESTATED': 'AMENDED',
  'RETIRED': 'RETIRED',
  'BANKERS_ACCEPTANCE': 'BA',
  'BANK_NOTES': 'BN',
  'BILL_OF_EXCHANGES': 'BOX',
  'CERTIFICATE_OF_DEPOSIT': 'CD',
  'CALL_LOANS': 'CL',
  'COMMERCIAL_PAPER': 'CP',
  'DEPOSIT_NOTES': 'DN',
  'EURO_CERTIFICATE_OF_DEPOSIT': 'EUCD',
  'EURO_COMMERCIAL_PAPER': 'EUCP',
  'LIQUIDITY_NOTE': 'LQN',
  'MEDIUM_TERM_NOTES': 'MTN',
  'OVERNIGHT': 'ONITE',
  'PROMISSORY_NOTE': 'PN',
  'PLAZOS_FIJOS': 'PZFJ',
  'SHORT_TERM_LOAN_NOTE': 'STN',
  'TIME_DEPOSIT': 'TD',
  'EXTENDED_COMM_NOTE': 'XCN',
  'YANKEE_CERTIFICATE_OF_DEPOSIT': 'YCD',
  'ASSET_BACKED_SECURITIES': 'ABS',
  'CORP_MORTGAGE_BACKED_SECURITIES': 'CMBS',
  'COLLATERALIZED_MORTGAGE_OBLIGATION': 'CMO',
  'IOETTE_MORTGAGE': 'IET',
  'MORTGAGE_BACKED_SECURITIES': 'MBS',
  'MORTGAGE_INTEREST_ONLY': 'MIO',
  'MORTGAGE_PRINCIPAL_ONLY': 'MPO',
  'MORTGAGE_PRIVATE_PLACEMENT': 'MPP',
  'MISCELLANEOUS_PASS_THROUGH': 'MPT',
  'PFANDBRIEFE': 'PFAND',
  'TO_BE_ANNOUNCED': 'TBA',
  'OTHER_ANTICIPATION_NOTES_BAN_GAN_ETC': 'AN',
  'CERTIFICATE_OF_OBLIGATION': 'COFO',
  'CERTIFICATE_OF_PARTICIPATION': 'COFP',
  'GENERAL_OBLIGATION_BONDS': 'GO',
  'MANDATORY_TENDER': 'MT',
  'REVENUE_ANTICIPATION_NOTE': 'RAN',
  'REVENUE_BONDS': 'REV',
  'SPECIAL_ASSESSMENT': 'SPCLA',
  'SPECIAL_OBLIGATION': 'SPCLO',
  'SPECIAL_TAX': 'SPCLT',
  'TAX_ANTICIPATION_NOTE': 'TAN',
  'TAX_ALLOCATION': 'TAXA',
  'TAX_EXEMPT_COMMERCIAL_PAPER': 'TECP',
  'TAX_REVENUE_ANTICIPATION_NOTE': 'TRAN',
  'VARIABLE_RATE_DEMAND_NOTE': 'VRDN',
  'WARRANT': 'WAR',
  'MUTUAL_FUND': 'MF',
  'MULTI_LEG_INSTRUMENT': 'MLEG',
  'NO_SECURITY_TYPE': 'NONE',
};

SecurityType.Tag = '167';

SecurityType.Type = 'STRING';

SecurityType.Values = invert(SecurityType.Keys);

module.exports = SecurityType;