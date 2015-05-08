# color2html.js

Convert ANSII color characters to html. With this module, you can convert your colorful log into clear html.

## Example

```javascript
var color2html = require('color2html');
var str = '\033[32mhello, world\033[39m';
console.log(color2html(str));
// <font color="green">hello, world</font>

str = '\033[1m\033[32mhello, \033[39m\033[22m\033[34mworld\033[39m';
console.log(color2html(str));
// <b><font color="green">hello, </font></b><font color="blue">world</font>

str = '\033[4mhello world\033[24m';
console.log(color2html(str));
// <font style="text-decoration: underline;">hello world</font>
```
