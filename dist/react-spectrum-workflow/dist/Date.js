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
exports.A4uDate = A4uDate;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uDate(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M35,6H30V3a1,1,0,0,0-1-1H27a1,1,0,0,0-1,1V6H12V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V6H3A1,1,0,0,0,2,7V33a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V7A1,1,0,0,0,35,6ZM34,32H4V8H8V9a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V8H26V9a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V8h4Z"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "8",
    rx: "1",
    ry: "1",
    width: "8",
    x: "22",
    y: "20"
  }));
}