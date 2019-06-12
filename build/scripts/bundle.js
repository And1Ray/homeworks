"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  var o = {};function t(n) {
    if (o[n]) return o[n].exports;var i = o[n] = { i: n, l: !1, exports: {} };return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
  }t.m = e, t.c = o, t.d = function (e, o, n) {
    t.o(e, o) || Object.defineProperty(e, o, { enumerable: !0, get: n });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, t.t = function (e, o) {
    if (1 & o && (e = t(e)), 8 & o) return e;if (4 & o && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e && e.__esModule) return e;var n = Object.create(null);if (t.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & o && "string" != typeof e) for (var i in e) {
      t.d(n, i, function (o) {
        return e[o];
      }.bind(null, i));
    }return n;
  }, t.n = function (e) {
    var o = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return t.d(o, "a", o), o;
  }, t.o = function (e, o) {
    return Object.prototype.hasOwnProperty.call(e, o);
  }, t.p = "", t(t.s = 0);
}([function (e, o) {
  $(document).ready(function () {
    Vue.use(window.vuelidate.default), Vue.use(VueMask.VueMaskPlugin);var e = validators.required,
        o = validators.email,
        t = validators.minLength,
        n = validators.maxLength;new Vue({ el: "#app", delimiters: ["${", "}"], data: { email: "", name: "", phone: "", mask: "+7(###)###-##-##", check: !1 }, methods: {
        submitFormOffer: function submitFormOffer() {
          if (this.check = !0, this.$v.name.$error || this.$v.name.$invalid || this.$v.phone.$error || this.$v.phone.$invalid) this.check = !0;else {
            var _e = { name: this.name, phone: this.phone };this.check = !1, console.log("Данные отправлены", _e);
          }
        },
        submitFormFeedback: function submitFormFeedback() {
          if (this.check = !0, this.$v.$invalid || this.$v.$error) this.check = !0;else {
            var _e2 = { email: this.email, name: this.name, phone: this.phone };this.check = !1, console.log("Данные отправлены", _e2);
          }
        }
      }, validations: { email: { email: o, required: e }, name: { required: e, minLength: t(2), maxLength: n(15) }, phone: { required: e } } });var i = $(".js-popup"),
        s = $(".js-open-popup"),
        a = $(".js-close-popup");var r = void 0;s.click(function () {
      clearInterval(r), i.addClass("popup_active"), r = setTimeout(function () {
        i.removeClass("popup_active");
      }, 5e3);
    }), a.click(function () {
      i.removeClass("popup_active");
    }), $(".js-btn-up").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
    }), $(".js-slider").owlCarousel({ items: 3, margin: 30, nav: !0, loop: !0, autoHeight: !1, onInitialized: function onInitialized() {
        $(".owl-nav").hasClass("disabled") && $(".owl-nav").removeClass("disabled");
      }, onChanged: function onChanged() {
        $(".owl-nav").hasClass("disabled") && $(".owl-nav").removeClass("disabled");
      }, responsive: { 768: { items: 3, dots: !1, autoHeight: !1, autoWidth: !1 }, 320: { items: 1, dots: !1, autoHeight: !1, autoWidth: !1 } } }), $(".next").click(function () {
      $(".js-slider").trigger("next.owl.carousel");
    }), $(".prev").click(function () {
      $(".js-slider").trigger("prev.owl.carousel");
    });var l = $(".slider").offset().top,
        c = $(".price__item"),
        u = $(".button-up"),
        d = $(".offer").offset().top;$(window).scroll(function () {
      $(document).scrollTop() >= l && c.each(function (e, o) {
        $(o).addClass("js-rise");
      }), $(document).scrollTop() >= d ? (u.removeClass("hide-btn"), u.addClass("show-btn")) : 0 === $(document).scrollTop() && (u.removeClass("show-btn"), u.addClass("hide-btn"));
    });var p = 0;ymaps.ready(void $(".footer__map").hover(function () {
      if (0 === p) {
        var _e3 = new ymaps.Map("map", { center: [55.43287307, 37.2686305], zoom: 17 });_e3.geoObjects.add(new ymaps.Placemark([55.43287307, 37.2686305], { balloonContent: "<strong>Мы здесь</strong>" }, { preset: "islands#circleIcon", iconColor: "#3caa3c" })), _e3.behaviors.disable("scrollZoom");
      }
    }, function () {
      p = 1;
    }));
  });
}]);