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

var _Composition = require('plurishing-shared/dist/components/views/dynamic/Composition');

var _Composition2 = _interopRequireDefault(_Composition);

var _LinkProvider = require('../components/LinkProvider');

var _LinkProvider2 = _interopRequireDefault(_LinkProvider);

var _data = require('../static/data/data.json');

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