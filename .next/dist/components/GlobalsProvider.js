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

var _apa = require('./assets/apa');

var _apa2 = _interopRequireDefault(_apa);

var _englishLocale = require('./assets/english-locale');

var _englishLocale2 = _interopRequireDefault(_englishLocale);

var _WebNotePointerPointer = require('plurishing-shared/dist/components/views/dynamic/WebNotePointerPointer');

var _WebNotePointerPointer2 = _interopRequireDefault(_WebNotePointerPointer);

var _WebNoteContentPointer = require('plurishing-shared/dist/components/views/dynamic/WebNoteContentPointer');

var _WebNoteContentPointer2 = _interopRequireDefault(_WebNoteContentPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = void 0;
var fs = void 0;
var resolve = void 0;

var isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

var inBrowser = isBrowser();

if (inBrowser) {
  style = require('plurishing-shared/dist/style.css');
  /**
   * @todo fix bug in loading css styles server-side
   */
} else {
    // fs = require('fs');
    // resolve = require('path').resolve;
    // style = require('plurishing-shared/dist/style.css')
    // style = fs.readFile(resolve(__dirname + '/node_modules/plurishing-shared/dist/style.css'));
  }

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
        citationStyle: _apa2.default,
        citationLocale: _englishLocale2.default,
        renderingMode: 'web',
        NotePointerPointer: _WebNotePointerPointer2.default,
        NoteContentPointer: _WebNoteContentPointer2.default,

        getAssetUri: function getAssetUri(asset) {
          return '/static/data/' + asset._id + '/' + asset.filename;
        }
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GlobalsProvider, [{
    key: 'render',

    // static async getInitialProps({ req }) {
    //   console.log('in browser', inBrowser);
    //   if (!inBrowser) {
    //     console.log('in get initial props');
    //     const style = await new Promise((resolve, reject) => {
    //       console.log('in promise')
    //       fs.readFile(resolve(__dirname + 'plurishing-shared/dist/style.css'), (error, str) => {
    //         if (error) {
    //           reject(error)
    //         } else {
    //           resolve(str);
    //         }
    //       })
    //     });
    //     return {style};
    //   }
    //   return {};
    // }


    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement('section', { className: 'GlobalsProvider' }, children, !inBrowser && _react2.default.createElement('section', {
        style: {
          width: '100%',
          height: '100%',
          position: 'fixed',
          textAlign: 'center',
          background: 'white',
          display: 'flex',
          flexFlow: 'row nowrap',
          alignItems: 'center',
          justifyContent: 'center',
          left: 0,
          top: 0,
          fontFamily: 'open-sans, sans-serif'
        }
      }, _react2.default.createElement('img', { src: '/static/assets/loading.gif' })), _react2.default.createElement('style', null, '$', style));
    }
  }]);

  return GlobalsProvider;
}(_react.Component);

GlobalsProvider.childContextTypes = {
  citationStyle: _propTypes2.default.string,
  citationLocale: _propTypes2.default.string,
  renderingMode: _propTypes2.default.string,

  NotePointerPointer: _propTypes2.default.func,
  NoteContentPointer: _propTypes2.default.func,
  getAssetUri: _propTypes2.default.func
};
exports.default = GlobalsProvider;