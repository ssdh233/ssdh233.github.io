"use strict";

var _MahjongTextParser = require("../MahjongTextParser.js");

var _MahjongTextParser2 = _interopRequireDefault(_MahjongTextParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INVALID_INPUT = -1;

var DEFAULT_IMG_URL = "https://raw.githubusercontent.com/matsumatsu233/mahjong-pai-converter/master/sources/mj-king/";

var parser = new _MahjongTextParser2.default();
parser.testImport();

function parser(inputStr) {
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

function isNumber(char) {
  return char >= 0 && char <= 9;
}

function isSymbol(char) {
  return char === "m" || char === "p" || char === "s" || char === "z";
}

function isInvalidCombination(pai) {
  return pai === "0z" || pai === "8z" || pai === "9z";
}

function convert(outputSet, options) {
  var size = getSizeFromOption(options.checkedSizeOption, options.customSize);
  var outputHtml = "";

  outputSet.forEach(function (pai) {
    outputHtml += "<img src='" + options.hostUrl + pai + ".gif' height='" + size + "px'>";
  });

  return outputHtml;
}

$(document).ready(function (e) {
  $("#convert").click(function () {
    var checkedSizeOption = $("input[name=size]:checked").val();
    var customSize = $("#customSize>input").val();
    var hostUrl = DEFAULT_IMG_URL;

    var options = {
      checkedSizeOption: checkedSizeOption,
      customSize: customSize,
      hostUrl: hostUrl
    };

    var inputText = $("#inputText").val();

    saveLocalOptions(inputText, options);

    if (inputText) {
      var outputSet = parser(inputText);
      if (outputSet === INVALID_INPUT) {
        $("#inputErrorLabel").css({ "display": "inline-block" });
        setShowArea("");
      } else {
        $("#inputErrorLabel").css("display", "none");

        var outputHtml = convert(outputSet, options);
        setShowArea(outputHtml);
      }
    } else {
      setShowArea("");
    }
  });

  $("#inputText").on("keydown", function (e) {
    if (e.which == 13) {
      $("#convert").click();
    }
  });

  $('input[type=radio][name=size]').change(function () {
    $("#customSizeErrorLabel").css({ "display": "none" });

    if ($("input[name=size]:checked").val() == SIZE_CUSTOM) {
      $("#customSize").removeClass("disabled");
      $("#customSize>input").focus();
    } else {
      $("#convert").click();
      $("#customSize").addClass("disabled");
    }
  });

  $('#customSize>input').blur(function () {
    $("#convert").click();
  });

  $('#customSize>input').on("keydown", function (e) {
    if (e.which == 13) {
      $("#convert").click();
    }
  });

  readLocalOptions();
  $("#convert").click();
});

function setShowArea(innerHtml) {
  $("#show-area").html(innerHtml);
  $("#outputTextarea").val(innerHtml);
}

var SIZE_SMALL = "1";
var SIZE_MIDDLE = "2";
var SIZE_BIG = "3";
var SIZE_CUSTOM = "4";

function getSizeFromOption(checkedSizeOption, customSize) {
  switch (checkedSizeOption) {
    case SIZE_SMALL:
      return "25";
    case SIZE_MIDDLE:
      return "40";
    case SIZE_BIG:
      return "60";
    case SIZE_CUSTOM:
      if (isNumber(customSize)) {
        $("#customSizeErrorLabel").css({ "display": "none" });
        return customSize;
      } else {
        $("#customSizeErrorLabel").css({ "display": "inline-block" });
        return "40";
      }
    default:
      return "40";
  }
}

function isNumber(n) {
  return Number(n) == n;
}

function saveLocalOptions(inputText, options) {
  localStorage.setItem("inputText", inputText);
  localStorage.setItem("options", JSON.stringify(options));
}

function readLocalOptions() {
  $("#inputText").val(localStorage.getItem("inputText"));

  var optionsStr = localStorage.getItem("options");
  var options = JSON.parse(optionsStr);
  $("input[name=size][value=" + options.checkedSizeOption + "]").prop('checked', true);
  $("#customSize>input").val(options.customSize);
}