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

var CompositionPage = function (_Component) {
  (0, _inherits3.default)(CompositionPage, _Component);

  function CompositionPage() {
    (0, _classCallCheck3.default)(this, CompositionPage);

    return (0, _possibleConstructorReturn3.default)(this, (CompositionPage.__proto__ || (0, _getPrototypeOf2.default)(CompositionPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(CompositionPage, [{
    key: 'render',
    value: function render() {
      var id = this.props.url.query.id;

      var parameters = _data2.default.montage.data.compositions[id];
      var composition = _data2.default.compositions.find(function (c) {
        return c._id === parameters.target_composition_id;
      });
      return _react2.default.createElement(_GlobalsProvider2.default, null, _react2.default.createElement(_LinkProvider2.default, null, _react2.default.createElement(_Composition2.default, {
        parameters: parameters,
        composition: composition,
        compositions: _data2.default.compositions,
        resources: _data2.default.resources,
        montage: _data2.default.montage,
        assets: _data2.default.assets,
        renderingMode: 'web'
      })));
    }
  }]);

  return CompositionPage;
}(_react.Component);

exports.default = CompositionPage;