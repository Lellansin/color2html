/*!
 * color2html.js
 * https://github.com/Lellansin/code2html
 */
(function() {
  var styles = {
    // bold
    1: '<b>',
    22: '</b>',

    // italic
    3: '<font style="font-style:italic;">',
    23: '</font>',

    // underline
    4: '<font style="text-decoration: underline;">',
    24: '</font>',

    // inverse todo
    7: '',
    27: '',

    // color
    30: '<font color="black">',
    31: '<font color="red">',
    32: '<font color="green">',
    33: '<font color="yellow">',
    34: '<font color="blue">',
    35: '<font color="magenta">',
    36: '<font color="cyan">',
    37: '<font color="white">',
    39: '</font>',
    90: '<font color="grey">',
    0: '</font>',

    // backgroud
    40: '<span style="background-color:black">',
    41: '<span style="background-color:red">',
    42: '<span style="background-color:green">',
    43: '<span style="background-color:yellow">',
    44: '<span style="background-color:blue">',
    45: '<span style="background-color:magenta">',
    46: '<span style="background-color:cyan">',
    47: '<span style="background-color:white">',
    49: '</span>',
  };

  var convertor = function(str) {
    var stack = [];
    if (!str) {
      return '';
    }
    return str.replace(/\033\[([\d]{1,2})m/g, function(whole, num) {
      var top = stack[stack.length - 1];
      switch (num) {
        case '39':
        case '49':
          if (!top || top == '39' || top == '49') {
            stack.push(num);
            return '';
          } else {
            stack.pop(num);
            return styles[num];
          }
          break;
        default:
          stack.push(num);
          if (!styles[num]) {
            return '';
          }
          return styles[num];
      }
    });
  };

  // Node.js
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = convertor;
  }
  // AMD / RequireJS
  else if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return convertor;
    });
  }
  // included directly via <script> tag
  else {
    window.convertor = convertor;
  }
}());
