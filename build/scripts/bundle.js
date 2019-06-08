'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 0);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  $(document).ready(function () {
    var $popup = $('.js-popup');
    var $openBtnPopup = $('.js-open-popup');
    var $closeBtnPopup = $('.js-close-popup');

    var int = void 0;

    $openBtnPopup.click(function () {
      clearInterval(int);
      $popup.addClass('popup_active');
      int = setTimeout(function () {
        $popup.removeClass('popup_active');
      }, 5000);
    });

    $closeBtnPopup.click(function () {
      $popup.removeClass('popup_active');
    });

    var $btnUp = $('.js-btn-up');

    $btnUp.click(function () {
      $('html, body').animate({ scrollTop: 0 }, 500);
    });

    //slider
    $(".js-slider").owlCarousel({
      items: 3,
      margin: 30,
      nav: true,
      loop: true,
      autoHeight: false,
      onInitialized: function nonNav() {
        if ($('.owl-nav').hasClass('disabled')) {
          $('.owl-nav').removeClass('disabled');
        }
      },
      onChanged: function nonNav() {
        if ($('.owl-nav').hasClass('disabled')) {
          $('.owl-nav').removeClass('disabled');
        }
      },
      responsive: {
        768: {
          items: 3,
          dots: false,
          autoHeight: false,
          autoWidth: false
        },
        320: {
          items: 1,
          dots: false,
          autoHeight: false,
          autoWidth: false
        }
      }
    });

    $(".next").click(function () {
      $(".js-slider").trigger("next.owl.carousel");
    });
    $(".prev").click(function () {
      $(".js-slider").trigger("prev.owl.carousel");
    });

    //animation

    var $pointStart = $('.price').offset().top;
    var $items = $('.price__item');
    var $up = $('.button-up');
    var $pointBtn = $('.offer').offset().top;

    $(window).scroll(function () {
      if ($(document).scrollTop() >= $pointStart) {
        $items.each(function (i, item) {
          $(item).addClass('js-rise');
        });
      }

      if ($(document).scrollTop() >= $pointBtn) {
        $up.removeClass('hide-btn');
        $up.addClass('show-btn');
      } else if ($(document).scrollTop() === 0) {
        $up.removeClass('show-btn');
        $up.addClass('hide-btn');
      }
    });
  });

  /***/
}]
/******/);