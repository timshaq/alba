"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(i, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 1);
}([function (e, t, n) {
  "use strict";

  n.r(t), t["default"] = function () {
    new Swiper("#aboutBrandsSlider", {
      navigation: {
        nextEl: "#aboutBrandsNextBtn",
        prevEl: "#aboutBrandsPrevBtn"
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },
        960: {
          slidesPerView: 6,
          spaceBetween: 15
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 30
        }
      }
    });
    var e = new Swiper("#reviewsSlider", {
      init: !1,
      pagination: {
        el: "#reviewsPagination",
        type: "bullets",
        dynamicBullets: !0
      },
      navigation: {
        nextEl: "#reviewsNextBtn",
        prevEl: "#reviewsPrevBtn"
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });

    function t(e, t) {
      return e.clientHeight > t.clientHeight ? -1 : e.clientHeight < t.clientHeight ? 1 : 0;
    }

    function n(e) {
      e.slides.forEach(function (e) {
        e.style.height = "inherit";
      });
      var n = e.slides.sort(t)[0].clientHeight;
      e.slides.forEach(function (e) {
        if (window.innerWidth < 480) return e.style.height = "inherit";
        e.style.height = n + "px";
      });
    }

    e.on("init", function () {
      return n(e);
    }), e.init(), e.on("resize", function () {
      return n(e);
    });
    new Swiper("#catalogsSlider", {
      navigation: {
        nextEl: "#catalogsNextBtn",
        prevEl: "#catalogsPrevBtn"
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 25
        },
        960: {
          slidesPerView: 2,
          spaceBetween: 95
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 95
        }
      }
    });

    function i(e) {
      e.classList.remove("open"), html.style.overflowX = "hidden", html.style.overflowY = "scroll";
    }

    function r(e) {
      e.classList.add("open"), html.style.overflowX = "hidden", html.style.overflowY = "hidden";
    }

    var s = document.getElementById("gift-form"),
        o = document.getElementById("gift-form-response"),
        l = o.querySelector(".popup__ok");
    s.addEventListener("submit", function (e) {
      e.preventDefault(), r(o);
    }), l.addEventListener("click", function () {
      return i(o);
    }), o.addEventListener("click", function (e) {
      e.target === this && i(o);
    });
  };
}, function (e, t, n) {
  n(2), e.exports = n(0);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var i = n(0);
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("header");
    Object(i["default"])();
  });
}]);