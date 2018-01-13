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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-frontoffice/components/GlobalsProvider.js';


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
        renderingMode: 'web'
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

      return _react2.default.createElement('section', { className: 'GlobalsProvider', __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, children, !inBrowser && _react2.default.createElement('section', {
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('img', { src: '/static/assets/loading.gif', __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })), _react2.default.createElement('style', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, '$', style));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvR2xvYmFsc1Byb3ZpZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiZGVmYXVsdFN0eWxlIiwiZGVmYXVsdExvY2FsZSIsInN0eWxlIiwiZnMiLCJyZXNvbHZlIiwiaXNCcm93c2VyIiwiRnVuY3Rpb24iLCJpbkJyb3dzZXIiLCJyZXF1aXJlIiwiR2xvYmFsc1Byb3ZpZGVyIiwiZ2V0Q2hpbGRDb250ZXh0IiwiY2l0YXRpb25TdHlsZSIsImNpdGF0aW9uTG9jYWxlIiwicmVuZGVyaW5nTW9kZSIsImNoaWxkcmVuIiwicHJvcHMiLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJmbGV4RmxvdyIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxlZnQiLCJ0b3AiLCJmb250RmFtaWx5IiwiY2hpbGRDb250ZXh0VHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUVQLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFtQjs7Ozs7Ozs7O0FBRTFCLElBQUksYUFBSjtBQUNBLElBQUksVUFBSjtBQUNBLElBQUksZUFBSjs7QUFFQSxJQUFNLFlBQVksSUFBQSxBQUFJLFNBQXRCLEFBQWtCLEFBQWE7O0FBRS9CLElBQU0sWUFBTixBQUFrQjs7QUFFbEIsSUFBQSxBQUFJLFdBQVcsQUFDYjtVQUFBLEFBQVEsQUFDVjtBQUdDOzs7QUFMRCxPQUtPLEFBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7O0ksQUFHb0I7Ozs7Ozs7Ozs7Ozs7OzhOLEFBUW5CLGtCQUFrQixZQUFBOztBQUFPLEFBQ1IsQUFDZjtBQUZ1QixBQUVQLEFBQ2hCO3VCQUhnQixBQUFPLEFBR1I7QUFIUSxBQUN2QjtBOzs7O1NBS0Y7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs2QkFHUztVQUFBLEFBR0gsV0FIRyxBQUtILEtBTEcsQUFFTCxNQUZLLEFBR0gsQUFHSjs7NkJBQ0UsY0FBQSxhQUFTLFdBQVQsQUFBbUI7b0JBQW5CO3NCQUFBLEFBQ0c7QUFESDtPQUFBLEVBQUEsQUFHSSxXQUFBLEFBQUMsNkJBQ0QsY0FBQTs7aUJBQ1MsQUFDRSxBQUNQO2tCQUZLLEFBRUcsQUFDUjtvQkFISyxBQUdLLEFBQ1Y7cUJBSkssQUFJTyxBQUNaO3NCQUxLLEFBS08sQUFDWjttQkFOSyxBQU1JLEFBQ1Q7b0JBUEssQUFPSyxBQUNWO3NCQVJLLEFBUU8sQUFDWjswQkFUSyxBQVNXLEFBQ2hCO2dCQVZLLEFBVUMsQUFDTjtlQVhLLEFBV0EsQUFDTDtzQkFiSixBQUNTLEFBWU87QUFaUCxBQUNMOztvQkFGSjtzQkFBQSxBQWdCRTtBQWhCRjtBQUNFLE9BREYseUNBZ0JPLEtBQUwsQUFBUztvQkFBVDtzQkFwQk4sQUFJSSxBQWdCRSxBQUdKO0FBSEk7MkJBR0osY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQ0ksS0F6QlIsQUFDRSxBQXVCRSxBQUtMOzs7OztBLEFBckUwQzs7QSxBQUF4QixnQkFFWixBO2lCQUNVLG9CQURVLEFBQ0EsQUFDekI7a0JBQWdCLG9CQUZTLEFBRUMsQUFDMUI7aUJBQWUsb0JBSFUsQUFHQSxBO0FBSEEsQUFDekI7a0JBSGlCLEEiLCJmaWxlIjoiR2xvYmFsc1Byb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yYXdiaW4vRG9jdW1lbnRzL1Byb2pldHMvY29sbGFib3JhdGlvbnMvZW5zYWQtcHVibGlzaGluZy9wcm90b3R5cGUvcGx1cmlzaGluZy1mcm9udG9mZmljZSJ9