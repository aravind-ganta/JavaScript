## Strings
* Strings created with single and double quotes are the same. We can call them simple or basic strings. They simply represent some static textual value
* Strings created with backticks on the other hand provide extended functionality. They are dynamic. They allow us to execute real JavaScript logic inside of them.

### String Methods
* **str[index]:** get a certain character of a string
* **str.length:** return the number of characters in a string
* **str.split(' '):** returns an array of words of a string
* **str.split(''):** returns an array of characters of a string
* **str.toLowerCase():** returns a lowercased string
* **str.toUpperCase():** returns an uppercased string
* **str.charAt(index):** returns string of a character present at the index position
* **str.replace(substr, newSubstr):** returns a new string with a substring replaced by a new one
* **str.includes(substr):** performs a case-sensitive search to determine whether one string may be found within another string, returns true or false
* **str.substr(start, length):** returns a portion of the string, starting at the specified index, and extending for a given number
* **str.indexOf(substr, position):** returns the index of the first occurence of the specified value, starting the search at from index. Returns -1 if the value is not found 
* **str.lastIndexOf(substr, position):** returns the index of the last occurrence of the specified value, searching backwards from position. Returns -1 if the value is not found
* **str.startsWith(substr):** return true or false
* **str.endsWith(substr):** return true or false
* **str.slice(start, end):** extracts a section of a string and returns it as a new string without modifying the original string
* **str.repeat(4):** returns a  string repeated given number of times
* **str.trim():** returns a string with trimmed spaces at ends