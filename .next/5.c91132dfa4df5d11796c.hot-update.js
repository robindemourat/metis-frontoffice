webpackHotUpdate(5,{

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _Composition = __webpack_require__(405);

var _Composition2 = _interopRequireDefault(_Composition);

var _LinkProvider = __webpack_require__(445);

var _LinkProvider2 = _interopRequireDefault(_LinkProvider);

var _data = __webpack_require__(459);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-frontoffice/pages/composition.js?entry';

var MyPage = function (_Component) {
  (0, _inherits3.default)(MyPage, _Component);

  function MyPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MyPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyPage.__proto__ || (0, _getPrototypeOf2.default)(MyPage)).call.apply(_ref, [this].concat(args))), _this), _this.getChildContext = function () {
      return {
        getAssetUri: function getAssetUri(asset) {
          return '/static/data/' + asset._id + '/' + asset.filename;
        }
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MyPage, [{
    key: 'render',
    value: function render() {
      var id = this.props.url.query.id;

      var parameters = _data2.default.montage.data.compositions[id];
      var composition = _data2.default.compositions[parameters.target_composition_id];
      return _react2.default.createElement(_LinkProvider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_Composition2.default, {
        parameters: parameters,
        composition: composition,
        compositions: _data2.default.compositions,
        montage: _data2.default.montage,
        assets: _data2.default.assets,
        resources: _data2.default.resources,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }));
    }
  }]);

  return MyPage;
}(_react.Component);

MyPage.childContextTypes = {
  getAssetUri: _propTypes2.default.func
};
exports.default = MyPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBvc2l0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQ29tcG9zaXRpb24iLCJMaW5rUHJvdmlkZXIiLCJkYXRhIiwiTXlQYWdlIiwiZ2V0Q2hpbGRDb250ZXh0IiwiZ2V0QXNzZXRVcmkiLCJhc3NldCIsIl9pZCIsImZpbGVuYW1lIiwiaWQiLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwicGFyYW1ldGVycyIsIm1vbnRhZ2UiLCJjb21wb3NpdGlvbnMiLCJjb21wb3NpdGlvbiIsInRhcmdldF9jb21wb3NpdGlvbl9pZCIsImFzc2V0cyIsInJlc291cmNlcyIsImNoaWxkQ29udGV4dFR5cGVzIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFFekIsQUFBTyxBQUFVOzs7Ozs7OztJLEFBRUk7Ozs7Ozs7Ozs7Ozs7OzRNQU1uQixBLGtCQUFrQixZQUFBOztxQkFDSCw0QkFBQTttQ0FBeUIsTUFBekIsQUFBK0IsWUFBTyxNQUF0QyxBQUE0QztBQUR6QyxBQUFPO0FBQUEsQUFDdkI7QTs7Ozs7NkJBR1E7VUFBQSxBQUtBLEtBTEEsQUFTSixLQVRJLEFBRU4sTUFGTSxBQUdKLElBSEksQUFJRixNQUpFLEFBS0EsQUFLUjs7VUFBTSxhQUFhLGVBQUEsQUFBSyxRQUFMLEFBQWEsS0FBYixBQUFrQixhQUFyQyxBQUFtQixBQUErQixBQUNsRDtVQUFNLGNBQWMsZUFBQSxBQUFLLGFBQWEsV0FBdEMsQUFBb0IsQUFBNkIsQUFDakQ7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDO29CQUFELEFBQ2MsQUFDWjtxQkFGRixBQUVlLEFBQ2I7c0JBQWMsZUFIaEIsQUFHcUIsQUFDbkI7aUJBQVMsZUFKWCxBQUlnQixBQUNkO2dCQUFRLGVBTFYsQUFLZSxBQUNiO21CQUFXLGVBTmIsQUFNa0I7O29CQU5sQjtzQkFGSixBQUNFLEFBQ0UsQUFVTDtBQVZLO0FBQ0U7Ozs7O0FBekIwQixBOztBLEFBQWYsT0FFWixBO2VBQ1Esb0JBRFksQUFDRixBO0FBREUsQUFDekI7a0JBSGlCLEEiLCJmaWxlIjoiY29tcG9zaXRpb24uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Jhd2Jpbi9Eb2N1bWVudHMvUHJvamV0cy9jb2xsYWJvcmF0aW9ucy9lbnNhZC1wdWJsaXNoaW5nL3Byb3RvdHlwZS9wbHVyaXNoaW5nLWZyb250b2ZmaWNlIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-frontoffice/pages/composition.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-frontoffice/pages/composition.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/composition")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jOTExMzJkZmE0ZGY1ZDExNzk2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9zaXRpb24uanM/MGNhYTUwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDb21wb3NpdGlvbiBmcm9tICdwbHVyaXNoaW5nLXNoYXJlZC9kaXN0L2NvbXBvbmVudHMvdmlld3MvZHluYW1pYy9Db21wb3NpdGlvbic7XG5pbXBvcnQgTGlua1Byb3ZpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGlua1Byb3ZpZGVyJztcblxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vc3RhdGljL2RhdGEvZGF0YS5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgZ2V0QXNzZXRVcmk6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQgPSAoKSA9PiAoe1xuICAgIGdldEFzc2V0VXJpOiBhc3NldCA9PiBgL3N0YXRpYy9kYXRhLyR7YXNzZXQuX2lkfS8ke2Fzc2V0LmZpbGVuYW1lfWBcbiAgfSlcblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHVybDoge1xuICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gPSB0aGlzO1xuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBkYXRhLm1vbnRhZ2UuZGF0YS5jb21wb3NpdGlvbnNbaWRdO1xuICAgIGNvbnN0IGNvbXBvc2l0aW9uID0gZGF0YS5jb21wb3NpdGlvbnNbcGFyYW1ldGVycy50YXJnZXRfY29tcG9zaXRpb25faWRdO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlua1Byb3ZpZGVyPlxuICAgICAgICA8Q29tcG9zaXRpb25cbiAgICAgICAgICBwYXJhbWV0ZXJzPXtwYXJhbWV0ZXJzfVxuICAgICAgICAgIGNvbXBvc2l0aW9uPXtjb21wb3NpdGlvbn1cbiAgICAgICAgICBjb21wb3NpdGlvbnM9e2RhdGEuY29tcG9zaXRpb25zfVxuICAgICAgICAgIG1vbnRhZ2U9e2RhdGEubW9udGFnZX1cbiAgICAgICAgICBhc3NldHM9e2RhdGEuYXNzZXRzfVxuICAgICAgICAgIHJlc291cmNlcz17ZGF0YS5yZXNvdXJjZXN9XG4gICAgICAgIC8+XG4gICAgICA8L0xpbmtQcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jb21wb3NpdGlvbi5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTs7QUFDQTtBQUFBO0FBREE7QUFDQTs7Ozs7O0FBR0E7QUFLQTtBQUNBO0FBSUE7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQU5BO0FBVUE7QUFWQTtBQUNBOzs7Ozs7OztBQXRCQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9