/**
* @adobe/react-spectrum-workflow (c) by Adobe
* 
* @adobe/react-spectrum-workflow is licensed under a
* Creative Commons Attribution-NoDerivatives 4.0 International License.
* 
* You should have received a copy of the license along with this
* work. If not, see <http://creativecommons.org/licenses/by-nd/4.0/>.
**/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A4uTreeCollapseAll = A4uTreeCollapseAll;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uTreeCollapseAll(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M9,8H26V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V25a1,1,0,0,0,1,1H8V9A1,1,0,0,1,9,8Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10,11V33a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V11a1,1,0,0,0-1-1H11A1,1,0,0,0,10,11Zm4.5,13a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,.5-.5h15a.5.5,0,0,1,.5.5v3a.5.5,0,0,1-.5.5Z"
  }));
}