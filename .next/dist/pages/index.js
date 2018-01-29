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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Home = require('metis-shared/dist/components/views/dynamic/Home');

var _Home2 = _interopRequireDefault(_Home);

var _LinkProvider = require('../components/LinkProvider');

var _LinkProvider2 = _interopRequireDefault(_LinkProvider);

var _GlobalsProvider = require('../components/GlobalsProvider');

var _GlobalsProvider2 = _interopRequireDefault(_GlobalsProvider);

var _data = require('../static/data/data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyPage = function (_React$Component) {
  (0, _inherits3.default)(MyPage, _React$Component);

  function MyPage() {
    (0, _classCallCheck3.default)(this, MyPage);

    return (0, _possibleConstructorReturn3.default)(this, (MyPage.__proto__ || (0, _getPrototypeOf2.default)(MyPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_GlobalsProvider2.default, null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, _data2.default.montage.metadata.title || 'Métis')), _react2.default.createElement(_LinkProvider2.default, null, _react2.default.createElement(_Home2.default, {
        montage: _data2.default.montage,
        compositions: _data2.default.compositions
      })));
    }
  }]);

  return MyPage;
}(_react2.default.Component);
/**
 * This module exports a stateful component dedicated to render the home view
 * @module metis-frontoffice/pages/index
 */

exports.default = MyPage;