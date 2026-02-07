1. Find code which modifies an element
 - Find the element you want to look the code for in the Elements tab on the DevTools (F12)
 - Right-click and go to 'Break on...'
 - Select 'attribute modifications'

2. Regular
console.log(<string>)
Prints out <string> to the console.

3.console.log('Hello I am a %s string', <string>)
Behaves like the printf() function of the C language

4.console.log('%c some text...', <css-string>)
It lets us style the first argument using css with '%c'

7.console.assert(<condition>, <string>)
If <condition> is false, <string> will be output to the console.

9. Viewing DOM elements (1)
console.log(<element>)
Prints out the <element> to the console along with its attributes and content.

9(ii). Viewing DOM elements (2)
console.dir(<element>)
Prints out a drop-down list of properties and methods in <element>.

11. Groups
console.group(<string>)
console.groupEnd(<string>)
Prints out a drop-down which groups a set of console.logs together. <string> must be the same to start and end the drop-down list.

console.groupCollapsed(<string>)
By default, the drop-down will be printed out uncollapsed, use the method above than console.group to change this behaviour.
