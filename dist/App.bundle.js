/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/modules/accordion.js":
/*!*************************************************!*\
  !*** ./public/javascripts/modules/accordion.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function accordion() {
  var faqQuestions = document.querySelectorAll(".js-question");
  faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
      var icon = this.querySelector(".js-question-toggle");
      var answer = this.nextElementSibling;
      var text = this.querySelector(".js-question-text");

      // Toggle the visibility of the answer
      answer.classList.toggle("visible");

      // Toggle the icon direction
      icon.classList.toggle("rotated");

      // Toggle the bold style of the question
      text.classList.toggle("bold");
    });
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./public/javascripts/modules/activeNavItem.js":
/*!*****************************************************!*\
  !*** ./public/javascripts/modules/activeNavItem.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function activeNavItem() {
  var links = document.querySelectorAll('.js-nav--item');
  var path = window.location.pathname;
  var pathArray = path.split('/');
  var currentPath = pathArray[pathArray.length - 1];
  links.forEach(function (link) {
    var linkPath = link.getAttribute('href');
    var linkArray = linkPath.split('/');
    var linkCurrentPath = linkArray[linkArray.length - 1];
    var linkWithoutHtml = linkCurrentPath.split('.')[0];
    if (linkCurrentPath === currentPath || linkWithoutHtml === currentPath) {
      link.classList.add('js-nav--item__active');
    } else {
      link.classList.remove('js-nav--item__active');
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (activeNavItem);

/***/ }),

/***/ "./public/javascripts/modules/dropdownMenu.js":
/*!****************************************************!*\
  !*** ./public/javascripts/modules/dropdownMenu.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function dropdownMenu() {
  var navMenu = document.querySelector(".js-nav--menu");
  var navWrapper = document.querySelector(".js-nav--wrapper");
  navMenu.addEventListener("click", function () {
    navWrapper.classList.toggle("js-is-open");
  });
}
/* harmony default export */ __webpack_exports__["default"] = (dropdownMenu);

/***/ }),

/***/ "./public/javascripts/modules/slider.js":
/*!**********************************************!*\
  !*** ./public/javascripts/modules/slider.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function slider() {
  var testimonialsWrapper = document.querySelector('.js-testimonials-div');
  var testimonials = document.querySelectorAll('.js-testimonial');
  var next = document.querySelector('.js-next');
  var prev = document.querySelector('.js-previous');
  var dot = document.querySelectorAll('.js-dot');
  var toggleTestimonials = function toggleTestimonials() {
    testimonials.forEach(function (testimonial) {
      testimonial.classList.toggle('js-transform');
    });
  };
  var toggleDots = function toggleDots() {
    if (dot[0].classList.contains('js-dot__active')) {
      dot[0].classList.remove('js-dot__active');
      dot[1].classList.add('js-dot__active');
    } else {
      dot[1].classList.remove('js-dot__active');
      dot[0].classList.add('js-dot__active');
    }
  };
  var handleClick = function handleClick() {
    toggleTestimonials();
    toggleDots();
  };

  //when clicking next, js-tranform class should be toggled to all testimonials regardless of its index either all have js-dot__active or none
  next.addEventListener('click', handleClick);

  //when clicking previous, js-transform class should be toggled to all testimonials regardless of its index either all have js-dot__active or none
  prev.addEventListener('click', handleClick);

  // TOUCHSCREEN
  var touchstartX = 0;
  var touchendX = 0;
  var handleTouchStart = function handleTouchStart(event) {
    touchstartX = event.changedTouches[0].screenX;
  };
  var handleTouchMove = function handleTouchMove(event) {
    touchendX = event.changedTouches[0].screenX;
  };
  var handleTouchEnd = function handleTouchEnd() {
    var deltaX = touchendX - touchstartX;
    if (Math.abs(deltaX) >= 30) {
      // Csak akkor kezeljük, ha az elmozdulás legalább 30 pixel
      if (deltaX < 0) {
        if (testimonials[0].classList.contains('js-transform')) {
          return; // Ha már balra van tolva, akkor ne csináljon semmit
        } else {
          handleClick(); // Balra pöccintés
        }
      } else if (deltaX > 0) {
        if (!testimonials[0].classList.contains('js-transform')) {
          return; // Ha már jobbra van tolva, akkor ne csináljon semmit
        } else {
          handleClick(); // Jobbra pöccintés
        }
      }
    }
  };
  testimonialsWrapper.addEventListener('touchstart', handleTouchStart, {
    passive: true
  });
  testimonialsWrapper.addEventListener('touchmove', handleTouchMove, {
    passive: true
  });
  testimonialsWrapper.addEventListener('touchend', handleTouchEnd);
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./public/javascripts/homepage-app.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./public/css/style.css");
/* harmony import */ var _modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dropdownMenu */ "./public/javascripts/modules/dropdownMenu.js");
/* harmony import */ var _modules_activeNavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/activeNavItem */ "./public/javascripts/modules/activeNavItem.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion */ "./public/javascripts/modules/accordion.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./public/javascripts/modules/slider.js");
 // without this import webpack doesn't generate the css file





(0,_modules_dropdownMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_activeNavItem__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
/******/ })()
;
//# sourceMappingURL=App.bundle.js.map