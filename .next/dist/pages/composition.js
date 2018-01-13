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

var _GlobalsProvider = require('../components/GlobalsProvider');

var _GlobalsProvider2 = _interopRequireDefault(_GlobalsProvider);

var _data = require('../static/data/data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-frontoffice/pages/composition.js?entry';

var CompositionPage = function (_Component) {
  (0, _inherits3.default)(CompositionPage, _Component);

  function CompositionPage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CompositionPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CompositionPage.__proto__ || (0, _getPrototypeOf2.default)(CompositionPage)).call.apply(_ref, [this].concat(args))), _this), _this.getChildContext = function () {
      return {
        getAssetUri: function getAssetUri(asset) {
          return '/static/data/' + asset._id + '/' + asset.filename;
        }
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CompositionPage, [{
    key: 'render',
    value: function render() {
      var id = this.props.url.query.id;

      var parameters = _data2.default.montage.data.compositions[id];
      var composition = _data2.default.compositions.find(function (c) {
        return c._id === parameters.target_composition_id;
      });
      return _react2.default.createElement(_GlobalsProvider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement(_LinkProvider2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_Composition2.default, {
        parameters: parameters,
        composition: composition,
        compositions: _data2.default.compositions,
        resources: _data2.default.resources,
        montage: _data2.default.montage,
        assets: _data2.default.assets,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      })));
    }
  }]);

  return CompositionPage;
}(_react.Component);

CompositionPage.childContextTypes = {
  getAssetUri: _propTypes2.default.func
};
exports.default = CompositionPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBvc2l0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQ29tcG9zaXRpb24iLCJMaW5rUHJvdmlkZXIiLCJHbG9iYWxzUHJvdmlkZXIiLCJkYXRhIiwiQ29tcG9zaXRpb25QYWdlIiwiZ2V0Q2hpbGRDb250ZXh0IiwiZ2V0QXNzZXRVcmkiLCJhc3NldCIsIl9pZCIsImZpbGVuYW1lIiwiaWQiLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwicGFyYW1ldGVycyIsIm1vbnRhZ2UiLCJjb21wb3NpdGlvbnMiLCJjb21wb3NpdGlvbiIsImZpbmQiLCJjIiwidGFyZ2V0X2NvbXBvc2l0aW9uX2lkIiwicmVzb3VyY2VzIiwiYXNzZXRzIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQXFCOzs7O0FBRTVCLEFBQU8sQUFBVTs7Ozs7Ozs7SUFFSSxBOzs7Ozs7Ozs7Ozs7Ozs4TkFNbkIsQSxrQkFBa0IsWUFBQTs7cUJBQ0gsNEJBQUE7bUNBQXlCLE1BQXpCLEFBQStCLFlBQU8sTUFBdEMsQUFBNEM7QUFEekMsQUFBTztBQUFBLEFBQ3ZCO0E7Ozs7OzZCQUdRO1VBQUEsQUFLQSxLQUxBLEFBU0osS0FUSSxBQUVOLE1BRk0sQUFHSixJQUhJLEFBSUYsTUFKRSxBQUtBLEFBS1I7O1VBQU0sYUFBYSxlQUFBLEFBQUssUUFBTCxBQUFhLEtBQWIsQUFBa0IsYUFBckMsQUFBbUIsQUFBK0IsQUFDbEQ7VUFBTSw2QkFBYyxBQUFLLGFBQUwsQUFBa0IsS0FBSyxhQUFBO2VBQUssRUFBQSxBQUFFLFFBQVEsV0FBZixBQUEwQjtBQUFyRSxBQUFvQixBQUNwQixPQURvQjs2QkFFbEIsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDO29CQUFELEFBQ2MsQUFDWjtxQkFGRixBQUVlLEFBQ2I7c0JBQWMsZUFIaEIsQUFHcUIsQUFDbkI7bUJBQVcsZUFKYixBQUlrQixBQUNoQjtpQkFBUyxlQUxYLEFBS2dCLEFBQ2Q7Z0JBQVEsZUFOVixBQU1lOztvQkFOZjtzQkFITixBQUNFLEFBQ0UsQUFDRSxBQVdQO0FBWE87QUFDRTs7Ozs7QUExQmlDLEE7O0FBQXhCLEEsZ0JBRVosQTtlQUNRLG9CQURZLEFBQ0YsQTtBQURFLEFBQ3pCO2tCQUhpQixBIiwiZmlsZSI6ImNvbXBvc2l0aW9uLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yYXdiaW4vRG9jdW1lbnRzL1Byb2pldHMvY29sbGFib3JhdGlvbnMvZW5zYWQtcHVibGlzaGluZy9wcm90b3R5cGUvcGx1cmlzaGluZy1mcm9udG9mZmljZSJ9