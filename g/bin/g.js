/**
 * gg library
 */
gg = {

  /**
   * @author George Artemiou
   * @param elType:
   *          the element type to be created
   * @param attributes:
   *          a key:pair value with all the attributes to be set for the newly
   *          created element
   * @return the created element
   */
  element: function(elType, attributes) {
    attributes = attributes || {};

    var el = document.createElement(elType);

    for (a in attributes) {
      el.setAttribute(a, attributes[a]);
    }

    return el;
  },

  /**
   * Returns the screen's resolution in pixels
   * 
   * @author George Artemiou
   * @return screen's resolution
   */
  resolution: function() {
    return screen.width + " x " + screen.height;
  },

  /**
   * @author George Artemiou
   * @return viewport's resolution
   */
  viewport: function() {
    if (window.innerHeight && window.innerWidth) {
      return window.innerWidth + " x " + window.innerHeight;
    } else if (document.body && document.body.offsetHeight
            && document.body.offsetWidth) {
      return document.body.offsetWidth + " x " + document.body.offsetHeight;
    } else {
      return 0;
    }
  },

  /**
   * @author George Artemiou
   * @param x: 
   * @return the type of the passed object
   */
  typeOf: function(x) {
    if (x == null) { return 'null'; }
    switch (x.nodeName) {
    case 1:
      return 'element';
      break;
    case 2:
      return 'attribute';
      break;
    case 9:
      return 'document';
      break;
    default:
      return typeof x;
    }
  },

  /**
   * the library's version
   * 
   * @author George Artemiou
   */
  version: '0.1',

  /**
   * returns a random number between 0 and n
   * 
   * @author George Artemiou
   * @param n:
   *          an upper limit to be used
   * @return a random number from 0 to n
   */
  random: function(n) {
    return Math.floor((Math.random() * n));
  },

  /**
   * @author George Artemiou
   * @param min: a lower limit to be used
   * @param max: an upperlimit to be used
   * @return a random number between min and max
   */
  randomBetween: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  /**
   * returns all properties of an object
   * 
   * @author George Artemiou
   * @param obj: an object
   * @return a list with all the object's properties 
   */
  getObjectProperties: function(obj) { // not IE8 compatible
    return Object.getOwnPropertyNames(obj);
  },

  /**
   * Checks if an id exists in the current HTML document
   * 
   * @author George Artemiou
   * @param id: the id to be checked 
   * @return boolean whether id exists
   */
  idExists: function(id) {
    return (document.getElementById(id) !== null);
  },

  /**
   * Checks if a value is null
   * 
   * @author George Artemiou
   * @param variable:
   *          the variable to be checked
   * @return boolean whether variable is null or not
   */
  isNull: function(variable) {
    return (variable === null && typeof variable === "object");
  },

  /**
   * Checks if a variable is undefined
   * 
   * @author George Artemiou
   * @param variable:
   *          the variable to be checked
   * @return boolean whether variable is undefined or not
   */
  isUndefined: function(variable) {
    return (variable === undefined && typeof variable === "undefined");
  },

  /**
   * Checks if the string passed is empty or not
   * 
   * @author George Artemiou
   * @param val:
   *          user provided string
   * @return boolean whether the string provided is empty or not
   */
  isEmptyString: function(val) {
    return (val === "" && typeof val === "string");
  },

  /**
   * @author George Artemiou
   * @param variable:
   *          the variable to be checked
   * @return boolean whether variable is NaN or not
   */
  isNaN: function(variable) {
    return (!parseInt(variable) && variable != 0 && typeof variable === "number");
  },

  /**
   * create a cookie
   * 
   * @author George Artemiou
   */
  createCookie: function(name, value, days) {
    var expires = "", date;
    if (days) {
      date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  },

  /**
   * read a cookie
   * 
   * @author George Artemiou
   */
  readCookie: function(name) {
    var nameEQ = name + "=", ca = document.cookie.split(';'), i, c;
    i = ca.length;
    while (i--) {
      c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) { return c
              .substring(nameEQ.length, c.length); }
    }
    return null;
  },

  /**
   * removes a cookie
   * 
   * @author George Artemiou
   */
  removeCookie: function(name) {
    createCookie(name, '', -1);
  },

  /**
   * Converts the text value of an element to lower case
   * 
   * @author George Artemiou
   * @param val
   *          the string to be converted to lower case
   * @return the string lower cased
   */
  toLowerCase: function(val) {
    return val.toLowerCase();
  },

  /**
   * Converts the text value of an element to upper case
   * 
   * @author George Artemiou
   * @param val
   *          the string to be converted to upper case
   * @return the string upper cased
   */
  toUpperCase: function(val) {
    return val.toUpperCase();
  },

  /**
   * Capitalises the first letter of the given string
   * 
   * @author George Artemiou
   * @param val
   *          the string to be converted to lower case
   * @return the string lower cased
   */
  upperCaseFirst: function(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  },

  /**
   * trims any extra spaces from the beginning and end of a string
   * 
   * @author George Artemiou
   * @param val: the string to be trimmed
   * @return the trimmed string
   */
  trim: function(val) {
    return val.replace(/^\s+|\s+$/gm, '');
  }
};

/**
 * @author George Artemiou
 * @param selector: the query selector to be used to retrieve an element
 * @return element  
 */

function g(selector) {
  if (selector) {
    if (window === this) { return new g(selector); }
    this.e = document.querySelector(selector);
    /*
     * document.querySelector('#searchTxt'); //selected by id
     * document.querySelector('.searchField'); //selected by class
     * document.querySelector('input'); //selected by tag name
     * document.querySelector('[name="searchTxt"]'); //selected by name
     */
    return this;
  } else {
    // No 'id' parameter was given
    // return new g;
  }
}

g.prototype = {

  /**
   * Creates a copy of the selected node including all its' attributes and their
   * values
   * 
   * @author George Artemiou
   * @param deep {boolean} [optional]:
   *          Specifies whether all descendants of the node should be cloned.
   *          true - Clone the node, its attributes, and its descendants false -
   *          Default. Clone only the node and its attributes
   * @return the cloned element
   */
  clone: function(deep) {
    if (gg.isUndefined(deep)) deep = false;
    return this.e.cloneNode(deep);
  },

  /**
   * @author George Artemiou
   */
  appendChild: function(el) {
    this.e.appendChild(el);
    return this;
  },

  /**
   * @author George Artemiou
   */
  removeChild: function(el) {
    this.e.removeChild(el);
    return this;
  },

  /**
   * @author George Artemiou
   */
  attr: function(attr, val) {
    if (gg.isUndefined(val)) {
      return this.e.getAttribute(attr);
    } else {
      this.e.setAttribute(attr, val);
    }
    return this;
  },

  /**
   * 
   */
  data: function(data, val) {
    if (gg.isUndefined(val)) { return this.e.getAttribute(data); }
    this.e.setAttribute(data, val);
    return this;
  },

  /**
   * @author George Arteimou
   */
  removeAttr: function(attr) {
    this.e.removeAttribute(attr);
  },

  /**
   * @author George Arteimou
   * @return the element's parent node
   */
  parent: function() {
    return this.e.parentNode;
  },

  /**
   * @author George Arteimou
   * @return the element's children node
   */
  children: function() {
    return this.e.childNodes;
  },

  /**
   * @author George Artemiou
   * @param attributes:
   *          a key:pair value that sets top, right, bottom, left and position
   *          style
   */
  position: function(attributes) {

    for (a in attributes) {
      if (a.toLowerCase() == 'top') this.e.style.top = attributes[a];
      if (a.toLowerCase() == 'right') this.e.style.right = attributes[a];
      if (a.toLowerCase() == 'bottom') this.e.style.bottom = attributes[a];
      if (a.toLowerCase() == 'left') this.e.style.left = attributes[a];
      if (a.toLowerCase() == 'position') this.e.style.position = attributes[a];
    }

    return this;

  },

  /**
   * @author George Artemiou
   * @param events:
   *          one or more events to be attached to the element
   * @param fn:
   *          the function to be attached
   * @param bubbling:
   *          bubbling propagation is set by default but when the value is set
   *          to true, the event uses the capturing propagation
   */
  stick: function(events, fn, bubbling) {
    bubbling = typeof bubbling !== 'undefined' ? bubbling : false;
    events = typeof events === 'string' ? [events] : events;

    if (this.e.addEventListener) {
      for (i = 0; i < events.length; i++) {
        this.e.addEventListener(events[i], fn, bubbling);
      }
    } else if (this.e.attachEvent) { // For IE 8 and earlier versions
      for (i = 0; i < events.length; i++) {
        this.e.attachEvent(events[i], fn, bubbling);
      }
    }
  },

  /**
   * @author George Artemiou
   * @param events:
   *          one or more events to be detached from the element
   * @param fn:
   *          the function to be detached
   */
  unstick: function(events, fn) {
    if (this.e.removeEventListener) {
      for (i = 0; i < events.length; i++) {
        this.e.removeEventListener(events[i], fn, bubbling);
      }
    } else if (this.e.detachEvent) { // For IE 8 and earlier versions
      for (i = 0; i < events.length; i++) {
        this.e.detachEvent(events[i], fn, bubbling);
      }
    }
  },

  /**
   * Sets or gets any css properties of an HTML element
   * 
   * @author George Artemiou
   * @param property:
   *          the css property to either be set or retrieved
   * @param value:
   *          the value to be set for the passed property
   * @returns this
   */
  visual: function(property, value) {
    if (gg.isUndefined(value)) { return this.e.style[property]; }
    this.e.style[property] = value;
    return this;
  },

  /**
   * Removes the selected HTML element and all of its children
   * 
   * @author George Artemiou
   */
  destroy: function() {
    this.e.parentNode.removeChild(this.e);
  },

  /**
   * Get the value of an element
   * 
   * @author George Artemiou
   */
  val: function(val) {
    if (gg.isUndefined(val)) {
      return this.e.innerHTML;
    } else {
      this.e.innerHTML = val;
    }
    return this;

  },

  /**
   * Center an element in the document. In order for this to work, the element
   * needs to have a set width
   * 
   * @author George Artemiou
   */
  center: function() {
    this.e.style.margin = '0 auto;';
    return this;
  },

  /**
   * Changes the background property of an element
   * 
   * @author George Artemiou
   */
  background: function(input) {
    this.e.style.background = input;
    return this;
  },

  /**
   * changes the font size of an element
   * 
   * @author George Artemiou
   */
  fontSize: function(input) {
    if (gg.isUndefined(input)) { return this.e.style.fontSize; }
    this.e.style.fontSize = input;
    return this;
  },

  /**
   * changes the font color of an element
   * 
   * @author George Artemiou
   */
  fontColor: function(input) {
    this.e.style.color = input;
    return this;
  },

  /**
   * Adds a css class to the element
   * 
   * @author George Artemiou
   */
  addClass: function(cssClass) {
    this.e.classList.add(cssClass);
    return this;
  },

  /**
   * Removes a css class from the element
   * 
   * @author George Artemiou
   */
  removeClass: function(cssClass) {
    this.e.classList.remove(cssClass);
    return this;
  },

  /**
   * Removes a css class from the element
   * 
   * @author George Artemiou
   */
  toggleClass: function(cssClass) {
    this.e.classList.toggle(cssClass);
    return this;
  },

  /**
   * Checks if a class exists for the given element
   * 
   * @author George Artemiou
   */
  hasClass: function(cssClass) {
    for (var i = 0; i < this.e.classList.length; i++) {
      if (this.e.classList[i] == cssClass) { return true; }
    }
    return false;
  },

  /**
   * shows an element
   * 
   * @author George Artemiou
   */
  show: function() {
    this.e.style.display = 'block';
    return this;
  },

  /**
   * hides an element
   * 
   * @author George Artemiou
   */
  hide: function() {
    this.e.style.display = 'none';
    return this;
  },

  /**
   * toggles the visibility of an element based on a boolean value passed. If
   * nothing is passed then it toggles the element according to it's state.
   * 
   * @author George Artemiou
   * @param bool:
   *          a boolean value to determine the state of the element. If the
   *          passed value is true then the element is shown else it's hidden
   * @return this
   */
  toggle: function(bool) {
    if (typeof bool === "undefined") {
      if (this.e.style.display == 'block')
        this.e.style.display = 'none';
      else
        this.e.style.display = 'block';
    } else if (bool && typeof bool === "boolean") {
      this.e.style.display = 'block';
    } else
      this.e.style.display = 'none';
    return this;
  },

  /**
   * Converts the text value of an element to lower case
   * 
   * @author George Artemiou
   * @return this
   */
  toLowerCase: function() {
    this.e.innerHTML = gg.toLowerCase(this.e.innerHTML);
    return this;
  },

  /**
   * Converts the text value of an element to upper case
   * 
   * @author George Artemiou
   * @return this
   */
  toUpperCase: function() {
    this.e.innerHTML = gg.toUpperCase(this.e.innerHTML);
    return this;
  },

  /**
   * Capitalises the first letter of the given string
   * 
   * @author George Artemiou
   * @return this
   */
  upperCaseFirst: function() {
    this.e.innerHTML = gg.upperCaseFirst(this.e.innerHTML);
    return this;
  },

  /**
   * trims any extra spaces from the beginning and end of a string
   * 
   * @author George Artemiou
   * @return this
   */
  trim: function() {
    this.e.innerHTML = gg.trim(this.e.innerHTML);
    return this;
  },

  /**
   * @author George Artemiou
   */
  fadeIn: function() {
    var elem = this.e;
    var count = 0;

    if (gg.isEmptyString(elem.style.opacity)
            || gg.isEmptyString(elem.style.filter)) {
      elem.style.opacity = 0.0;
      elem.style.filter = 'alpha(opacity=0)';
    }

    var timer = setInterval(function() {
      if (elem.style.opacity > 1.0 || count >= 10) {
        clearInterval(this.timer);
        return;
      }
      elem.style.opacity = parseFloat(elem.style.opacity) + 0.1;
      elem.style.filter = 'alpha(opacity=' + (count * 10) + ')';
      count++;
    }, 50);

    return this;
  },

  /**
   * @author George Artemiou
   */
  fadeOut: function() {
    var elem = this.e;
    var count = 0;

    if (gg.isEmptyString(elem.style.opacity)
            || gg.isEmptyString(elem.style.filter)) {
      elem.style.opacity = 1.0;
      elem.style.filter = 'alpha(opacity=100)';
    }

    var timerOut = setInterval(function() {
      if (elem.style.opacity <= 0 || count >= 10) {
        clearInterval(this.timerOut);
        return;
      }
      elem.style.opacity = parseFloat(elem.style.opacity) - 0.1;
      elem.style.filter = 'alpha(opacity=' + (100 - (count * 10)) + ')';
      count++;
    }, 50);

    return this;
  },

  /**
   * @author George Artemiou
   * 
   */
  shake: function() {
    var el = this.e;
    var count = 0, offset = 5, initOffset = gg.isUndefined(this.e.marginLeft)
            ? 0 : this.e.marginLeft;

    var shakeTimer = setInterval(function() {
      offset = offset > 0 ? -5 : 5;
      if (count >= 20) {
        el.style.marginLeft = initOffset;
        clearInterval(this.shakeTimer);
        return;
      }

      el.style.marginLeft = offset + 'px';
      count++;
    }, 50);
  },

  /**
   * @author George Artemiou
   */
  spin: function() {
    var el = this.e;
    var count = 0, deg = 0;

    var spinTimer = setInterval(function() {
      deg += 18;
      if (count >= 20) {
        clearInterval(this.spinTimer);
        return;
      }

      el.style.webkitTransform = 'rotate(' + deg + 'deg)';
      el.style.mozTransform = 'rotate(' + deg + 'deg)';
      el.style.msTransform = 'rotate(' + deg + 'deg)';
      el.style.oTransform = 'rotate(' + deg + 'deg)';
      el.style.transform = 'rotate(' + deg + 'deg)';
      count++;
    }, 50);
  },

  /**
   * Sets the width and height of an element depending on the input passed. If
   * nothing is passed, the dimensions of the element is returned as an object
   * 
   * @author George Artemiou
   * @param w:
   *          user defined width
   * @param h:
   *          user defined height
   * @returns dimensions object if nothing is passed or this
   */
  dimensions: function(w, h) {
    if (gg.isUndefined(w) && gg.isUndefined(h)) {
      return {
        "width": this.e.offsetWidth,
        "height": this.e.offsetHeight
      };
    } else if (typeof w === 'number' && typeof h === 'number') {
      this.e.style.height = h + 'px';
      this.e.style.width = w + 'px';
      return this;
    } else {
      this.e.style.height = h;
      this.e.style.width = w;
      return this;
    }
  },

  /**
   * Sets the height of an element depending on the input passed. If nothing is
   * passed, the height of the element is returned in pixels
   * 
   * @author George Artemiou
   */
  height: function(h) {
    if (gg.isUndefined(h)) {
      return this.e.offsetHeight;
    } else if (typeof h === 'number') {
      this.e.style.height = h + 'px';
      return this;
    } else {
      this.e.style.height = h;
      return this;
    }
  },

  /**
   * Sets the width of an element depending on the input passed. If nothing is
   * passed, the width of the element is returned in pixels
   * 
   * @author George Artemiou
   */
  width: function(w) {
    if (gg.isUndefined(w)) {
      return this.e.offsetWidth;
    } else if (typeof w === 'number') {
      this.e.style.height = w + 'px';
      return this;
    } else {
      this.e.style.height = w;
      return this;
    }
  }
};

/** String prototype */

/**
 * repeats the given string n times
 * 
 * @author George Artemiou
 */
String.prototype.repeat = function(n) {
  return new Array(n + 1).join(this);
};

/** Number prototype */

/**
 * Checks if given number is between x and y
 * 
 * @author George Artemiou
 */
Number.prototype.isBetween = function() {
  return this > arguments[0] && this < arguments[1];
};

/** Array prototype */

/**
 * adds an item at the beginning of an array and returns the array itself
 * 
 * @author George Artemiou
 */
Array.prototype.lpush = function(item) {
  this.unshift(item);
  return this;
};

/**
 * returns a copy of the passed array
 * 
 * @author George Artemiou
 * @return a copy of an array
 */
Array.prototype.clone = function() {
  return this.slice(0);
};

/** Date prototype */

/**
 * An Array of day names starting with Sunday.
 */
Date.dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'];
Date.prototype.dayNames = Date.dayNames;

/**
 * An Array of month names starting with January.
 */
Date.monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
Date.prototype.monthNames = Date.monthNames;

/**
 * returns the day's name
 * 
 * @author George Artemiou
 */
Date.prototype.getDayName = function() {
  return this.dayNames[this.getDay()];
};

/**
 * returns the abbreviated day's name
 * 
 * @author George Artemiou
 */
Date.prototype.getAbbrDayName = function() {
  return this.getDayName().slice(0, 3);
};

/**
 * returns the month's name
 * 
 * @author George Artemiou
 */
Date.prototype.getMonthName = function() {
  return this.monthNames[this.getMonth()];
};

/**
 * returns the abbreviated month's name
 * 
 * @author George Artemiou
 */
Date.prototype.getAbbrMonthName = function() {
  return this.getMonthName().slice(0, 3);
};

/**
 * @author George Artemiou
 */
Date.prototype.isWeekend = function() {
  return this.getDay() == 0 || this.getDay() == 6;
};

/**
 * @author George Artemiou
 */
Date.prototype.isWeekDay = function() {
  return !this.isWeekend();
};

/**
 * @author George Artemiou
 * checks if the year of date is leap
 */
Date.prototype.isLeapYear = function() {
  var y = this.getFullYear();
  return (y % 400 == 0 || (y % 100 != 0 && y % 4 == 0));
};

/**
 * @author George Artemiou
 */
Date.prototype.addDays = function(d) {
  this.setDate(this.getDate() + d);
  return this;
};

/**
 * @author George Artemiou
 */
Date.prototype.addWeeks = function(w) {
  this.addDays(w * 7);
  return this;
};

/**
 * @author George Artemiou
 */
Date.prototype.addMonths = function(m) {
  this.setMonth(this.getMonth() + m);
  if (this.getDate() < this.getDate()) this.setDate(0); // leap year fix
  return this;
};

/**
 * @author George Artemiou
 */
Date.prototype.addYears = function(y) {
  var m = this.getMonth();
  this.setFullYear(this.getFullYear() + y);

  if (m < this.getMonth()) {
    this.setDate(0); // leap year fix
  }
  return this;
};
