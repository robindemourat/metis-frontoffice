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

      return _react2.default.createElement('section', null, children);
    }
  }]);

  return LinkProvider;
}(_react.Component);
/**
 * This module exports a react component that provides to its children
 * the default Link component
 * @module metis-frontoffice/components/LinkProvider
 */

LinkProvider.childContextTypes = {
  Link: _propTypes2.default.func
};
exports.default = LinkProvider;