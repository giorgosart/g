# g.js


g.js is a cross-browser lightweight javascript framework that can be used for DOM manipulation, event handling and basic HTML effects. 

####Suported Platforms####
* Mobile browsers
* Microsoft Internet Explorer
* Mozilla Firefox
* Chrome
* Safari

**Current Version: 0.2**

####Usage####
In order to use g.js in your application, download the latest version and copy /g.js in your preferred location and import it in your HTML pages. 

<script type="text/javascript" src="/g.js"></script>

The namespace to use for g.js is the letter <b>g</b> so that it does not conflict and can be used with any other js libraries.
```javascript
// Select an HMTL element by tag, id, class and css selector  
g(selector)

* g('#myEl'); //selected by id
* g('.myClass'); //selected by class
* g('body'); //selected by tag name
* g('[name="myEl"]'); //selected by name

// Chain functions
g('#myEl').val(" awesome! ").addClass("g").toUpperCaseFirst().trim();

// Change css syle
g('#myEl').visual('color','red');

// Event listeners
function alive(){
  alert("It's alive!!!");
}

g('#myEl').stick("click", alive); // Attach events
g('#myEl').unstick("click", alive); // Detach events

// Show or hide an element
g('#myEl').show();
g('#myEl').hide();
g('#myEl').toggle();

// Effects
g('#myEl').fadeIn();
g('#myEl').fadeOut();
g('#myEl').shake();
g('#myEl').spin();
```

####Method List####
**g(selector)**
* clone([Boolean])
* appendChild(Element)
* removeChild(Element)
* before(value)
* after(value)
* attr(property [,value])
* removeAttr(property)
* data(data [, value])
* parent()
* children()
* position(Obj)
* stick(events, fn [, bubbling])
* unstick(events, fn)
* visual(property [, value])
* destroy()
* val([value])
* center()
* background([value])
* fontSize([value])
* fontColor([value])
* addClass(cssClass)
* removeClass(cssClass)
* toggleClass(cssClass)
* hasClass(cssClass)
* show()
* hide()
* toggle([Boolean])
* toLowerCase()
* toUpperCase()
* upperCaseFirst()
* trim()
* fadeIn()
* fadeOut()
* shake()
* spin()
* dimensions([width, height])
* animate(property, from, to, unit [, time])
* height([h])
* width([w])

**gg**
* element(elType, attributes)
* resolution()
* viewport()
* typeOf(any)
* version
* random(n)
* randomBetween(min, max)
* getObjectProperties(obj)
* idExists(id)
* isNull(v)
* isUndefined(v)
* isEmptyString(s)
* isNaN(v)
* createCookie(name, value, days)
* readCookie(name)
* removeCookie(name)
* toLowerCase(s)
* toUpperCase(s)
* upperCaseFirst(s)
* trim(s)

**String**
* repeat(n)

**Number**
* isBetween(x,y)

**Array**
* lpush(item)

**Date**
* getDayName()
* getAbbrDayName()
* getMonthName()
* getAbbrMonthName()
* isWeekend()
* isWeekDay()
* isLeapYear()
* addDays(d)
* addWeeks(w)
* addMonths(m)
* addYears(y)
