## async vs defer attributes.

In HTML5, you can tell browser when to run your JavaScript code. There are 3 possibilities:

> **`<script src="myscript.js"></script> // 1`**

> **`<script async src="myscript.js"></script> // 2`**

> **`<script defer src="myscript.js"></script> // 3`**

1. Without **`async`** or **`defer`**, browser will run your script immediately, before rendering the elements that's below your script tag.

2. With **`async`** (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.

3. With **`defer`**, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.)

While executing that HTML line by line, browser may encounter a **`<script>`** tag in that HTML code. In this scenario `async` and `defer` come into picture.

If we put script tag just before these closing **`</body>`** tags, the HTML parsing is almost complete. But the scripts will now begin to be fetched from the network and later executed. It used to be a good way of not blocking the HTML parsing in older days. But now when we have these attributes, we can fetch the script from the network asynchronously and execute it whenever we want to.

**Note:**

**`async`** - fetched from network on parallel and executes by stopping html parsing.

**`defer`** - fetched from network on parallel and executes once html parsing is completed.

**`HTML Parsing`** refers to executing the HTML code line by line.

In the HTML file if the script tag is encountered then the html rendering is stopped then the JS file is fetched from internet and start render JS file. After completing that HTML starts rendering.

> **`Script tag without Attributes:`** Render blocking.

> **`Script tag with Async:`** Render blocking.

> **`Script tag with Defer:`** Non-Render blocking

**`Defer: Why named defer`**

The choice of the term **`defer`** is descriptive of this behaviour. When you defer something, you postpone it to a later time. In the case of defer attribute, it postpones the execution of the script until after the parsing of the HTML document is complete.

---

## Event Bubbling, Capturing aka Trickling.

The bubbling principle is simple.

> **`When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.`**

**`The standard DOM Events describes 3 phases of event propagation:`**

1. Capturing phase – the event goes down to the element.
2. Target phase – the event reached the target element.
3. Bubbling phase – the event bubbles up from the element.

Any event handler can stop the event by calling **`event.stopPropagation()`**, but that’s not recommended, because we can’t really be sure we won’t need it above, maybe for completely different things.

**`Points to notice:`**

1. Normally the event goes first down (“capturing”) and then up (“bubbling”). But if **`event.stopPropagation()`** is called during the capturing phase, then the event travel stops, no bubbling will occur.

2. True or false used here are called **`UseCapture Flags`**. Hence, if flag is **`true`**, Capturing is triggered at that point else Bubbling.

To summarise code execution always runs from outer most div element's event handler/listener to inner most.
If the **`useCapture`** flag inside a listener is:

1. **`true:`** then run the code block immediately (if there's a stopPropogation as well then, no need to go further)
2. **`false:`** then wait for code execution till bubbling (bottom up)

---

## Event Delegation

Event delegation is really cool! It’s one of the most helpful patterns for DOM events.

It’s often used to add the same handling for many similar elements, but not only for that.

**`The algorithm:`**

1. Put a single handler on the container.
2. In the handler – check the source element **`event.target`**.
3. If the event happened inside an element that interests us, then handle the event.

**`Benefits of event delegation:`**

1. `Simplifies initialization and saves memory:` no need to add many handlers.
2. `Less code:` when adding or removing elements, no need to add/remove handlers.
3. `DOM modifications:` we can mass add/remove elements with innerHTML and the like.
   **`Limitations:`**
4. First, the event must be bubbling. Some events do not bubble. Also, low-level handlers should not use **`event.stopPropagation()`**.
5. Second, the delegation may add CPU load, because the container-level handler reacts on events in any place of the container, no matter whether they interest us or not. But usually the load is negligible, so we don’t take it into account.
6. All the events are not bubbled up, some events like blur, focus are not bubbled up

---

## Debouncing vs Throttling

**`Debouncing`** and **`throttling`** are two techniques that can help you optimize the performance of your code that runs repeatedly within a short period of time.

1. **`Debouncing`** - Only call the function when the difference between the last and current events exceeds the limit.
2. **`Throttling`** - Only call the function when the difference between the last and current functions exceeds the limit.

**`Shooting game analogy:`**

**`Deboucing:`** When the user clicks on the shoot button 10 times (Number of Bullets) Reload the gun for more shooting.

**`Throttle:`** When the user clicks on the shoot button, bullets runs out, but going to have to wait for the interval before it reloads by itself

**`Note:`**

**`Throttling:`**

```
Baby: Mom give me a piece of chocolate cake
Mom: No you can get one, only after 1 hour
(baby wont get a piece of cake no matter how many times she asked, but only after each hour)
```

**`Debouncing:`**

```
Baby: Mom give me a piece of chocolate cake, . . .Mom give me a piece of chocolate cake ... mom give me ...
Mom: No, You will get a piece of cake only after 1 hour from LAST time you asked for one.
```

> it's best to use the **`loadash library`** if you're implementing `debouncing` in your webapp. But in interviews, it's frequently asked to write your own implementation of `debounce` function, just to check if the candidate understand what happens behind the scenes or not.

**`Examples:`**

**`In case if anyone looking for shorter version:`**

```
const debounce = (fn, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(fn, wait, ...args);
    }
}
```

**`I think you did a pretty well job but to make it simpler to understand you can also write it as:`**

```
// debounce method
const debounceRequests = (fn, delay) => {
  let timer;
  return function() {
    // clearing timeout
    if(timer) {
      clearTimeout(timer);
    }
    // setting timeout
    timer = setTimeout(fn, delay);
                      // no need to use apply method and creating context since already passing an function as callback
  }
}
// normal function to fectch data on key press event
let counter = 0;
const fetchData = () => {
  console.log(counter++ + ' fetching data.. ');
}

const makeDebounceReq = debounceRequests(fetchData, 300);
```

**`I'm able implement the same functionality with below code:`**

```
let timer;
const getData = () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("Fetching Data ...");
  }, 300);
};


// <input type="text" id="i1" />

const el = document.querySelector('#i1');

function debounce() {
  let timer;
  return function (param1) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      console.log('call api', param1);
    }, 2000);
  };
}

function throttle() {
  let flag = true;
  return function (param1) {
    if (flag === true) {
      console.log('call API', param1);
      flag = false;
      setTimeout(function () {
        flag = true;
      }, 2000);
    }
  };
}

const result = debounce();

const result2 = throttle();

el.addEventListener('keyup', function () {
  result2(el.value); // throttle
  //result(el.value); // debounce
});

```
