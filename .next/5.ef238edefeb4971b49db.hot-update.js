webpackHotUpdate(5,{

/***/ 1231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(58);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _apa = __webpack_require__(1232);

var _apa2 = _interopRequireDefault(_apa);

var _englishLocale = __webpack_require__(1233);

var _englishLocale2 = _interopRequireDefault(_englishLocale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-frontoffice/components/GlobalsProvider.js';


var style = void 0;
var fs = void 0;
var resolve = void 0;

var isBrowser = new Function('try {return this===window;}catch(e){ return false;}');

var inBrowser = isBrowser();

if (inBrowser) {
  style = __webpack_require__(1234);
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-frontoffice/components/GlobalsProvider.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-frontoffice/components/GlobalsProvider.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lZjIzOGVkZWZlYjQ5NzFiNDlkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HbG9iYWxzUHJvdmlkZXIuanM/OWM1YWNhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBkZWZhdWx0U3R5bGUgZnJvbSAnLi9hc3NldHMvYXBhJztcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4vYXNzZXRzL2VuZ2xpc2gtbG9jYWxlJztcblxubGV0IHN0eWxlO1xubGV0IGZzO1xubGV0IHJlc29sdmU7XG5cbmNvbnN0IGlzQnJvd3NlciA9IG5ldyBGdW5jdGlvbigndHJ5IHtyZXR1cm4gdGhpcz09PXdpbmRvdzt9Y2F0Y2goZSl7IHJldHVybiBmYWxzZTt9Jyk7XG5cbmNvbnN0IGluQnJvd3NlciA9IGlzQnJvd3NlcigpO1xuXG5pZiAoaW5Ccm93c2VyKSB7XG4gIHN0eWxlID0gcmVxdWlyZSgncGx1cmlzaGluZy1zaGFyZWQvZGlzdC9zdHlsZS5jc3MnKVxuLyoqXG4gKiBAdG9kbyBmaXggYnVnIGluIGxvYWRpbmcgY3NzIHN0eWxlcyBzZXJ2ZXItc2lkZVxuICovXG59IGVsc2Uge1xuICAvLyBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gIC8vIHJlc29sdmUgPSByZXF1aXJlKCdwYXRoJykucmVzb2x2ZTtcbiAgLy8gc3R5bGUgPSByZXF1aXJlKCdwbHVyaXNoaW5nLXNoYXJlZC9kaXN0L3N0eWxlLmNzcycpXG4gIC8vIHN0eWxlID0gZnMucmVhZEZpbGUocmVzb2x2ZShfX2Rpcm5hbWUgKyAnL25vZGVfbW9kdWxlcy9wbHVyaXNoaW5nLXNoYXJlZC9kaXN0L3N0eWxlLmNzcycpKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHbG9iYWxzUHJvdmlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBjaXRhdGlvblN0eWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNpdGF0aW9uTG9jYWxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbmRlcmluZ01vZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQgPSAoKSA9PiAoe1xuICAgIGNpdGF0aW9uU3R5bGU6IGRlZmF1bHRTdHlsZSxcbiAgICBjaXRhdGlvbkxvY2FsZTogZGVmYXVsdExvY2FsZSxcbiAgICByZW5kZXJpbmdNb2RlOiAnd2ViJyxcbiAgfSk7XG5cbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSB9KSB7XG4gIC8vICAgY29uc29sZS5sb2coJ2luIGJyb3dzZXInLCBpbkJyb3dzZXIpO1xuICAvLyAgIGlmICghaW5Ccm93c2VyKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZygnaW4gZ2V0IGluaXRpYWwgcHJvcHMnKTtcbiAgLy8gICAgIGNvbnN0IHN0eWxlID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAvLyAgICAgICBjb25zb2xlLmxvZygnaW4gcHJvbWlzZScpXG4gIC8vICAgICAgIGZzLnJlYWRGaWxlKHJlc29sdmUoX19kaXJuYW1lICsgJ3BsdXJpc2hpbmctc2hhcmVkL2Rpc3Qvc3R5bGUuY3NzJyksIChlcnJvciwgc3RyKSA9PiB7XG4gIC8vICAgICAgICAgaWYgKGVycm9yKSB7XG4gIC8vICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgIHJlc29sdmUoc3RyKTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgIH0pXG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHJldHVybiB7c3R5bGV9O1xuICAvLyAgIH1cbiAgLy8gICByZXR1cm4ge307XG4gIC8vIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBjaGlsZHJlblxuICAgICAgfVxuICAgIH0gPSB0aGlzO1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJHbG9iYWxzUHJvdmlkZXJcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICB7XG4gICAgICAgICAgIWluQnJvd3NlciAmJlxuICAgICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgIHRleHRBbGlnbiA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGZsZXhGbG93OiAncm93IG5vd3JhcCcsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgZm9udEZhbWlseTogJ29wZW4tc2Fucywgc2Fucy1zZXJpZidcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2Fzc2V0cy9sb2FkaW5nLmdpZlwiIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB9XG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAke3N0eWxlfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvR2xvYmFsc1Byb3ZpZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTs7O0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTs7QUFFQTtBQUNBO0FBQUE7QUFGQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBR0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWEE7O0FBRkE7QUFnQkE7QUFoQkE7QUFDQTtBQWVBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7OztBQTdEQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==