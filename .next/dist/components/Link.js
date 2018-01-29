'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This module exports a react component that provides
 * a next-js compliant link component
 * @module metis-frontoffice/components/Link
 */

exports.default = function (_ref) {
  var to = _ref.to,
      children = _ref.children;

  var url = void 0;
  var as = void 0;

  if (to.view === 'composition') {
    url = '/' + to.view + '?id=' + to.index;
    as = '/' + to.view + '/' + to.index;
  } else {
    url = '/';
    as = '/';
  }
  return _react2.default.createElement(_link2.default, { prefetch: true, href: url, as: as }, _react2.default.createElement('a', { className: 'link' }, children));
};