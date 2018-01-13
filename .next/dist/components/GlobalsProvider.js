'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultStyle = void 0;
var defaultLocale = void 0;
var style = void 0;

var isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

var inBrowser = isBrowser();

if (inBrowser) {
  defaultStyle = require('./assets/apa.csl');
  defaultLocale = require('./assets/english-locale.xml');
  style = require('plurishing-shared/dist/style.css');
} else {
  var fs = require('fs');
  var resolve = require('path').resolve;
  defaultStyle = fs.readFileSync(resolve(__dirname + '/assets/apa.csl'));
  defaultLocale = fs.readFileSync(resolve(__dirname + '/assets/english-locale.xml'));
  style = fs.readFileSync(resolve(__dirname + 'plurishing-shared/dist/style.css'));
}

// import style from 'plurishing-shared/dist/components/views/dynamic/ArticleTemplate.scss';


var GlobalsProvider = function (_Component) {
  (0, _inherits3.default)(GlobalsProvider, _Component);

  function GlobalsProvider() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GlobalsProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GlobalsProvider.__proto__ || (0, _getPrototypeOf2.default)(GlobalsProvider)).call.apply(_ref, [this].concat(args))), _this), _this.getChildContext = function () {
      return {
        citationStyle: defaultStyle,
        citationLocale: defaultLocale,
        renderingMode: 'web'
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GlobalsProvider, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement('section', { className: 'GlobalsProvider' }, children, _react2.default.createElement('style', null, '$', style));
    }
  }]);

  return GlobalsProvider;
}(_react.Component);

GlobalsProvider.childContextTypes = {
  citationStyle: _propTypes2.default.string,
  citationLocale: _propTypes2.default.string,
  renderingMode: _propTypes2.default.string
};
exports.default = GlobalsProvider;