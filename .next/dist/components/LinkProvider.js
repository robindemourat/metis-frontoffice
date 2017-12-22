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

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rawbin/Documents/Projets/collaborations/ensad-publishing/prototype/plurishing-next/components/LinkProvider.js';


var LinkProvider = function (_Component) {
  (0, _inherits3.default)(LinkProvider, _Component);

  function LinkProvider(props) {
    (0, _classCallCheck3.default)(this, LinkProvider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LinkProvider.__proto__ || (0, _getPrototypeOf2.default)(LinkProvider)).call(this, props));

    _this.getChildContext = function () {
      return {
        Link: _Link2.default
      };
    };

    return _this;
  }

  (0, _createClass3.default)(LinkProvider, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement('section', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, children);
    }
  }]);

  return LinkProvider;
}(_react.Component);

LinkProvider.childContextTypes = {
  Link: _propTypes2.default.func
};
exports.default = LinkProvider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlua1Byb3ZpZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiTGluayIsIkxpbmtQcm92aWRlciIsInByb3BzIiwiZ2V0Q2hpbGRDb250ZXh0IiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTzs7OztBQUVQLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFHSTt3Q0FNbkI7O3dCQUFBLEFBQVksT0FBTzt3Q0FBQTs7a0pBQUEsQUFDWDs7VUFEVyxBQUluQixrQkFBa0IsWUFBQTs7QUFBQSxBQUFPO0FBQUEsQUFDdkI7QUFMaUI7O1dBRWxCOzs7Ozs2QkFNUTtVQUFBLEFBRUwsV0FDRSxLQUhHLEFBR0UsTUFIRixBQUVMLEFBRUY7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsRUFERixBQUNFLEFBSUg7Ozs7O0EsQUF2QnVDOztBQUFyQixBLGFBRVosQTtRQUNDLG9CLEFBRG1CLEFBQ1Q7QUFEUyxBQUN6QjtrQkFIaUIsQSIsImZpbGUiOiJMaW5rUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3Jhd2Jpbi9Eb2N1bWVudHMvUHJvamV0cy9jb2xsYWJvcmF0aW9ucy9lbnNhZC1wdWJsaXNoaW5nL3Byb3RvdHlwZS9wbHVyaXNoaW5nLW5leHQifQ==