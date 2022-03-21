# Can Construct
White a function that accepts a target string and an array of strings. The function should return a boolean inidicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.
<br />
Note that when solve this kind of word bank problems, do not take out any characters from the MIDDLE of the string. 
<br />
The overall logic that we want to use when we build this tree is to only branch to children if we have a matching PREFIX in the word bank. 