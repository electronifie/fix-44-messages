var invert = require('invert-obj');

function MsgType (msgType) {
  this.message = msgType;
}

MsgType.prototype.value = function () {
  return this.message;
};


MsgType.Keys = {
  'HEARTBEAT': '0',
  'TEST_REQUEST': '1',
  'RESEND_REQUEST': '2',
  'REJECT': '3',
  'SEQUENCE_RESET': '4',
  'LOGOUT': '5',
  'INDICATION_OF_INTEREST': '6',
  'ADVERTISEMENT': '7',
  'EXECUTION_REPORT': '8',
  'ORDER_CANCEL_REJECT': '9',
  'LOGON': 'A',
  'NEWS': 'B',
  'EMAIL': 'C',
  'ORDER_SINGLE': 'D',
  'ORDER_LIST': 'E',
  'ORDER_CANCEL_REQUEST': 'F',
  'ORDER_CANCEL_REPLACE_REQUEST': 'G',
  'ORDER_STATUS_REQUEST': 'H',
  'ALLOCATION_INSTRUCTION': 'J',
  'LIST_CANCEL_REQUEST': 'K',
  'LIST_EXECUTE': 'L',
  'LIST_STATUS_REQUEST': 'M',
  'LIST_STATUS': 'N',
  'ALLOCATION_INSTRUCTION_ACK': 'P',
  'DONT_KNOW_TRADE': 'Q',
  'QUOTE_REQUEST': 'R',
  'QUOTE': 'S',
  'SETTLEMENT_INSTRUCTIONS': 'T',
  'MARKET_DATA_REQUEST': 'V',
  'MARKET_DATA_SNAPSHOT_FULL_REFRESH': 'W',
  'MARKET_DATA_INCREMENTAL_REFRESH': 'X',
  'MARKET_DATA_REQUEST_REJECT': 'Y',
  'QUOTE_CANCEL': 'Z',
  'QUOTE_STATUS_REQUEST': 'a',
  'MASS_QUOTE_ACKNOWLEDGEMENT': 'b',
  'SECURITY_DEFINITION_REQUEST': 'c',
  'SECURITY_DEFINITION': 'd',
  'SECURITY_STATUS_REQUEST': 'e',
  'SECURITY_STATUS': 'f',
  'TRADING_SESSION_STATUS_REQUEST': 'g',
  'TRADING_SESSION_STATUS': 'h',
  'MASS_QUOTE': 'i',
  'BUSINESS_MESSAGE_REJECT': 'j',
  'BID_REQUEST': 'k',
  'BID_RESPONSE': 'l',
  'LIST_STRIKE_PRICE': 'm',
  'XML_MESSAGE': 'n',
  'REGISTRATION_INSTRUCTIONS': 'o',
  'REGISTRATION_INSTRUCTIONS_RESPONSE': 'p',
  'ORDER_MASS_CANCEL_REQUEST': 'q',
  'ORDER_MASS_CANCEL_REPORT': 'r',
  'NEW_ORDER_s': 's',
  'CROSS_ORDER_CANCEL_REPLACE_REQUEST': 't',
  'CROSS_ORDER_CANCEL_REQUEST': 'u',
  'SECURITY_TYPE_REQUEST': 'v',
  'SECURITY_TYPES': 'w',
  'SECURITY_LIST_REQUEST': 'x',
  'SECURITY_LIST': 'y',
  'DERIVATIVE_SECURITY_LIST_REQUEST': 'z',
  'DERIVATIVE_SECURITY_LIST': 'AA',
  'NEW_ORDER_AB': 'AB',
  'MULTILEG_ORDER_CANCEL_REPLACE': 'AC',
  'TRADE_CAPTURE_REPORT_REQUEST': 'AD',
  'TRADE_CAPTURE_REPORT': 'AE',
  'ORDER_MASS_STATUS_REQUEST': 'AF',
  'QUOTE_REQUEST_REJECT': 'AG',
  'RFQ_REQUEST': 'AH',
  'QUOTE_STATUS_REPORT': 'AI',
  'QUOTE_RESPONSE': 'AJ',
  'CONFIRMATION': 'AK',
  'POSITION_MAINTENANCE_REQUEST': 'AL',
  'POSITION_MAINTENANCE_REPORT': 'AM',
  'REQUEST_FOR_POSITIONS': 'AN',
  'REQUEST_FOR_POSITIONS_ACK': 'AO',
  'POSITION_REPORT': 'AP',
  'TRADE_CAPTURE_REPORT_REQUEST_ACK': 'AQ',
  'TRADE_CAPTURE_REPORT_ACK': 'AR',
  'ALLOCATION_REPORT': 'AS',
  'ALLOCATION_REPORT_ACK': 'AT',
  'CONFIRMATION_ACK': 'AU',
  'SETTLEMENT_INSTRUCTION_REQUEST': 'AV',
  'ASSIGNMENT_REPORT': 'AW',
  'COLLATERAL_REQUEST': 'AX',
  'COLLATERAL_ASSIGNMENT': 'AY',
  'COLLATERAL_RESPONSE': 'AZ',
  'COLLATERAL_REPORT': 'BA',
  'COLLATERAL_INQUIRY': 'BB',
  'NETWORK_BC': 'BC',
  'NETWORK_BD': 'BD',
  'USER_REQUEST': 'BE',
  'USER_RESPONSE': 'BF',
  'COLLATERAL_INQUIRY_ACK': 'BG',
  'CONFIRMATION_REQUEST': 'BH',
};

MsgType.Tag = '35';

MsgType.Type = 'STRING';

MsgType.Values = invert(MsgType.Keys);

module.exports = MsgType;