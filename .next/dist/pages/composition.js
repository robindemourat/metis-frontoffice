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

var _Composition = require('plurishing-shared/dist/components/views/dynamic/Composition');

var _Composition2 = _interopRequireDefault(_Composition);

var _LinkProvider = require('../components/LinkProvider');

var _LinkProvider2 = _interopRequireDefault(_LinkProvider);

var _data = require('../static/data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-next/pages/composition.js?entry';

var MyPage = function (_React$Component) {
  (0, _inherits3.default)(MyPage, _React$Component);

  function MyPage() {
    (0, _classCallCheck3.default)(this, MyPage);

    return (0, _possibleConstructorReturn3.default)(this, (MyPage.__proto__ || (0, _getPrototypeOf2.default)(MyPage)).apply(this, arguments));
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
          lineNumber: 25
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
          lineNumber: 26
        }
      }));
    }
  }]);

  return MyPage;
}(_react2.default.Component);

exports.default = MyPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvbXBvc2l0aW9uLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9zaXRpb24iLCJMaW5rUHJvdmlkZXIiLCJkYXRhIiwiTXlQYWdlIiwiaWQiLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwicGFyYW1ldGVycyIsIm1vbnRhZ2UiLCJjb21wb3NpdGlvbnMiLCJjb21wb3NpdGlvbiIsInRhcmdldF9jb21wb3NpdGlvbl9pZCIsImFzc2V0cyIsInJlc291cmNlcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFFekIsQUFBTyxBQUFVOzs7Ozs7OztJLEFBRUk7Ozs7Ozs7Ozs7OzZCQUVUO1VBQUEsQUFLQSxLQUxBLEFBU0osS0FUSSxBQUVOLE1BRk0sQUFHSixJQUhJLEFBSUYsTUFKRSxBQUtBLEFBS1I7O1VBQU0sYUFBYSxlQUFBLEFBQUssUUFBTCxBQUFhLEtBQWIsQUFBa0IsYUFBckMsQUFBbUIsQUFBK0IsQUFDbEQ7VUFBTSxjQUFjLGVBQUEsQUFBSyxhQUFhLFdBQXRDLEFBQW9CLEFBQTZCLEFBQ2pEOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQztvQkFBRCxBQUNjLEFBQ1o7cUJBRkYsQUFFZSxBQUNiO3NCQUFjLGVBSGhCLEFBR3FCLEFBQ25CO2lCQUFTLGVBSlgsQUFJZ0IsQUFDZDtnQkFBUSxlQUxWLEFBS2UsQUFDYjttQkFBVyxlQU5iLEFBTWtCOztvQkFObEI7c0JBRkosQUFDRSxBQUNFLEFBVUw7QUFWSztBQUNFOzs7OztFQWpCMEIsZ0JBQU0sQTs7a0JBQXJCLEEiLCJmaWxlIjoiY29tcG9zaXRpb24uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Jhd2Jpbi9Eb2N1bWVudHMvUHJvamV0cy9jb2xsYWJvcmF0aW9ucy9lbnNhZC1wdWJsaXNoaW5nL3Byb3RvdHlwZS9wbHVyaXNoaW5nLW5leHQifQ==