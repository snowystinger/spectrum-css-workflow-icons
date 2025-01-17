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
exports.A4uAdDisplay = A4uAdDisplay;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uAdDisplay(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "14",
    width: "8",
    x: "22",
    y: "8"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M35,2H1A1,1,0,0,0,0,3V27a1,1,0,0,0,1,1H14v5a1,1,0,0,1-1,1H11a.979.979,0,0,0-1,1v1H26V35a1,1,0,0,0-1-1H23a1,1,0,0,1-1-1V28H35a1,1,0,0,0,1-1V3A1,1,0,0,0,35,2ZM32,24H4V6H32Z"
  }));
}