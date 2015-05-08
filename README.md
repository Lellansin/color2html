# color2html

Convert ANSII color characters to html 

## Example

```javascript
var color2html = require('color2html');
var str = '\033[32mhello, world\033[39m';
console.log(color2html(str)); // <font color="green">hello, world</font>
```
