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
exports.A4uTextStrikethrough = A4uTextStrikethrough;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uTextStrikethrough(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M23,28H20V22H16v6H13a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V29A1,1,0,0,0,23,28Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M31,4H5A1,1,0,0,0,4,5v6a1,1,0,0,0,1,1H7a1,1,0,0,0,1-1V8h8v8h4V8h8v3a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V5A1,1,0,0,0,31,4Z"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "2",
    rx: "0.5",
    ry: "0.5",
    width: "28",
    x: "4",
    y: "18"
  }));
}