"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MahjongTextParser = function () {
  function MahjongTextParser() {
    _classCallCheck(this, MahjongTextParser);
  }

  _createClass(MahjongTextParser, [{
    key: "test",
    value: function test() {
      console.log("test import");
    }
  }, {
    key: "parse",
    value: function parse(inputStr) {
      var status = 0;
      var pos = 0;
      var stack = [];
      var symbol = "";
      var outputSet = [];
      while (pos < inputStr.length) {
        var char = inputStr.charAt(pos);
        switch (status) {
          case 0:
            if (isNumber(char)) {
              stack.push(char);
              status = 1;
              pos++;
            } else {
              return INVALID_INPUT;
            }
            break;
          case 1:
            if (isNumber(char)) {
              stack.push(char);
              status = 1;
              pos++;
            } else if (isSymbol(char)) {
              symbol = char;
              status = 2;
            } else {
              return INVALID_INPUT;
            }
            break;
          case 2:
            try {
              stack.forEach(function (item) {
                var pai = item + symbol;

                if (isInvalidCombination(pai)) {
                  throw "Invalide combination";
                }

                outputSet.push(pai);
              });
            } catch (e) {
              return INVALID_INPUT;
            }
            stack = [];
            pos++;
            status = 0;
            break;
          default:
            return INVALID_INPUT;
        }
      }

      // when input text doesn't end with a symbol
      if (stack.length !== 0) {
        return INVALID_INPUT;
      } else {
        return outputSet;
      }
    }
  }, {
    key: "isNumber",
    value: function isNumber(char) {
      return char >= 0 && char <= 9;
    }
  }, {
    key: "isSymbol",
    value: function isSymbol(char) {
      return char === "m" || char === "p" || char === "s" || char === "z";
    }
  }, {
    key: "isInvalidCombination",
    value: function isInvalidCombination(pai) {
      return pai === "0z" || pai === "8z" || pai === "9z";
    }
  }]);

  return MahjongTextParser;
}();