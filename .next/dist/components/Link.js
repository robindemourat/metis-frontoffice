'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var to = _ref.to,
      children = _ref.children;

  var url = '/' + to.view + '?id=' + to.index;
  var as = '/' + to.view + '/' + to.index;
  return _react2.default.createElement(_link2.default, { prefetch: true, href: url, as: as }, _react2.default.createElement('a', null, children));
};