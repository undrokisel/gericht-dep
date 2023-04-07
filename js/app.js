/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      448: (e) => {
        window,
          (e.exports = (function (e) {
            var t = {};
            function s(i) {
              if (t[i]) return t[i].exports;
              var n = (t[i] = { i, l: !1, exports: {} });
              return (
                e[i].call(n.exports, n, n.exports, s), (n.l = !0), n.exports
              );
            }
            return (
              (s.m = e),
              (s.c = t),
              (s.d = function (e, t, i) {
                s.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: i });
              }),
              (s.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (s.t = function (e, t) {
                if ((1 & t && (e = s(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var i = Object.create(null);
                if (
                  (s.r(i),
                  Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var n in e)
                    s.d(
                      i,
                      n,
                      function (t) {
                        return e[t];
                      }.bind(null, n)
                    );
                return i;
              }),
              (s.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return s.d(t, "a", t), t;
              }),
              (s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (s.p = ""),
              s((s.s = 0))
            );
          })([
            function (e, t, s) {
              "use strict";
              s.r(t);
              var i = [],
                n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                r = [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ],
                o = {
                  t: "top",
                  r: "right",
                  b: "bottom",
                  l: "left",
                  c: "centered",
                };
              function a() {}
              var l = ["click", "focusin", "keydown", "input"];
              function c(e) {
                l.forEach(function (t) {
                  e.addEventListener(t, e === document ? M : A);
                });
              }
              function d(e) {
                return Array.isArray(e)
                  ? e.map(d)
                  : "[object Object]" === O(e)
                  ? Object.keys(e).reduce(function (t, s) {
                      return (t[s] = d(e[s])), t;
                    }, {})
                  : e;
              }
              function u(e, t) {
                var s = e.calendar.querySelector(".qs-overlay"),
                  i = s && !s.classList.contains("qs-hidden");
                (t = t || new Date(e.currentYear, e.currentMonth)),
                  (e.calendar.innerHTML = [
                    h(t, e, i),
                    p(t, e, i),
                    g(e, i),
                  ].join("")),
                  i &&
                    window.requestAnimationFrame(function () {
                      C(!0, e);
                    });
              }
              function h(e, t, s) {
                return [
                  '<div class="qs-controls' + (s ? " qs-blur" : "") + '">',
                  '<div class="qs-arrow qs-left"></div>',
                  '<div class="qs-month-year' +
                    (t.disableYearOverlay ? " qs-disabled-year-overlay" : "") +
                    '">',
                  '<span class="qs-month">' +
                    t.months[e.getMonth()] +
                    "</span>",
                  '<span class="qs-year">' + e.getFullYear() + "</span>",
                  "</div>",
                  '<div class="qs-arrow qs-right"></div>',
                  "</div>",
                ].join("");
              }
              function p(e, t, s) {
                var i = t.currentMonth,
                  n = t.currentYear,
                  r = t.dateSelected,
                  o = t.maxDate,
                  a = t.minDate,
                  l = t.showAllDates,
                  c = t.days,
                  d = t.disabledDates,
                  u = t.startDay,
                  h = t.weekendIndices,
                  p = t.events,
                  g = t.getRange ? t.getRange() : {},
                  m = +g.start,
                  f = +g.end,
                  v = S(new Date(e).setDate(1)),
                  y = v.getDay() - u,
                  b = y < 0 ? 7 : 0;
                v.setMonth(v.getMonth() + 1), v.setDate(0);
                var w = v.getDate(),
                  E = [],
                  x = b + 7 * (((y + w) / 7) | 0);
                x += (y + w) % 7 ? 7 : 0;
                for (var C = 1; C <= x; C++) {
                  var T = (C - 1) % 7,
                    O = c[T],
                    L = C - (y >= 0 ? y : 7 + y),
                    M = new Date(n, i, L),
                    A = p[+M],
                    I = L < 1 || L > w,
                    k = I ? (L < 1 ? -1 : 1) : 0,
                    _ = I && !l,
                    D = _ ? "" : M.getDate(),
                    P = +M == +r,
                    z = T === h[0] || T === h[1],
                    q = m !== f,
                    $ = "qs-square " + O;
                  A && !_ && ($ += " qs-event"),
                    I && ($ += " qs-outside-current-month"),
                    (!l && I) || ($ += " qs-num"),
                    P && ($ += " qs-active"),
                    (d[+M] ||
                      t.disabler(M) ||
                      (z && t.noWeekends) ||
                      (a && +M < +a) ||
                      (o && +M > +o)) &&
                      !_ &&
                      ($ += " qs-disabled"),
                    +S(new Date()) == +M && ($ += " qs-current"),
                    +M === m && f && q && ($ += " qs-range-start"),
                    +M > m && +M < f && ($ += " qs-range-middle"),
                    +M === f && m && q && ($ += " qs-range-end"),
                    _ && (($ += " qs-empty"), (D = "")),
                    E.push(
                      '<div class="' +
                        $ +
                        '" data-direction="' +
                        k +
                        '">' +
                        D +
                        "</div>"
                    );
                }
                var B = c
                  .map(function (e) {
                    return '<div class="qs-square qs-day">' + e + "</div>";
                  })
                  .concat(E);
                return (
                  B.unshift(
                    '<div class="qs-squares' + (s ? " qs-blur" : "") + '">'
                  ),
                  B.push("</div>"),
                  B.join("")
                );
              }
              function g(e, t) {
                var s = e.overlayPlaceholder,
                  i = e.overlayButton;
                return [
                  '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">',
                  "<div>",
                  '<input class="qs-overlay-year" placeholder="' +
                    s +
                    '" inputmode="numeric" />',
                  '<div class="qs-close">&#10005;</div>',
                  "</div>",
                  '<div class="qs-overlay-month-container">' +
                    e.overlayMonths
                      .map(function (e, t) {
                        return (
                          '<div class="qs-overlay-month" data-month-num="' +
                          t +
                          '">' +
                          e +
                          "</div>"
                        );
                      })
                      .join("") +
                    "</div>",
                  '<div class="qs-submit qs-disabled">' + i + "</div>",
                  "</div>",
                ].join("");
              }
              function m(e, t, s) {
                var i = t.el,
                  n = t.calendar.querySelector(".qs-active"),
                  r = e.textContent,
                  o = t.sibling;
                ((i.disabled || i.readOnly) && t.respectDisabledReadOnly) ||
                  ((t.dateSelected = s
                    ? void 0
                    : new Date(t.currentYear, t.currentMonth, r)),
                  n && n.classList.remove("qs-active"),
                  s || e.classList.add("qs-active"),
                  v(i, t, s),
                  s || E(t),
                  o &&
                    (f({ instance: t, deselect: s }),
                    t.first &&
                      !o.dateSelected &&
                      ((o.currentYear = t.currentYear),
                      (o.currentMonth = t.currentMonth),
                      (o.currentMonthName = t.currentMonthName)),
                    u(t),
                    u(o)),
                  t.onSelect(t, s ? void 0 : new Date(t.dateSelected)));
              }
              function f(e) {
                var t = e.instance.first ? e.instance : e.instance.sibling,
                  s = t.sibling;
                t === e.instance
                  ? e.deselect
                    ? ((t.minDate = t.originalMinDate),
                      (s.minDate = s.originalMinDate))
                    : (s.minDate = t.dateSelected)
                  : e.deselect
                  ? ((s.maxDate = s.originalMaxDate),
                    (t.maxDate = t.originalMaxDate))
                  : (t.maxDate = s.dateSelected);
              }
              function v(e, t, s) {
                if (!t.nonInput)
                  return s
                    ? (e.value = "")
                    : t.formatter !== a
                    ? t.formatter(e, t.dateSelected, t)
                    : void (e.value = t.dateSelected.toDateString());
              }
              function y(e, t, s, i) {
                s || i
                  ? (s && (t.currentYear = +s), i && (t.currentMonth = +i))
                  : ((t.currentMonth += e.contains("qs-right") ? 1 : -1),
                    12 === t.currentMonth
                      ? ((t.currentMonth = 0), t.currentYear++)
                      : -1 === t.currentMonth &&
                        ((t.currentMonth = 11), t.currentYear--)),
                  (t.currentMonthName = t.months[t.currentMonth]),
                  u(t),
                  t.onMonthChange(t);
              }
              function b(e) {
                if (!e.noPosition) {
                  var t = e.position.top,
                    s = e.position.right;
                  if (e.position.centered)
                    return e.calendarContainer.classList.add("qs-centered");
                  var i = e.positionedEl.getBoundingClientRect(),
                    n = e.el.getBoundingClientRect(),
                    r = e.calendarContainer.getBoundingClientRect(),
                    o = n.top - i.top + (t ? -1 * r.height : n.height) + "px",
                    a = n.left - i.left + (s ? n.width - r.width : 0) + "px";
                  e.calendarContainer.style.setProperty("top", o),
                    e.calendarContainer.style.setProperty("left", a);
                }
              }
              function w(e) {
                return (
                  "[object Date]" === O(e) && "Invalid Date" !== e.toString()
                );
              }
              function S(e) {
                if (w(e) || ("number" == typeof e && !isNaN(e))) {
                  var t = new Date(+e);
                  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                }
              }
              function E(e) {
                e.disabled ||
                  (!e.calendarContainer.classList.contains("qs-hidden") &&
                    !e.alwaysShow &&
                    ("overlay" !== e.defaultView && C(!0, e),
                    e.calendarContainer.classList.add("qs-hidden"),
                    e.onHide(e)));
              }
              function x(e) {
                e.disabled ||
                  (e.calendarContainer.classList.remove("qs-hidden"),
                  "overlay" === e.defaultView && C(!1, e),
                  b(e),
                  e.onShow(e));
              }
              function C(e, t) {
                var s = t.calendar,
                  i = s.querySelector(".qs-overlay"),
                  n = i.querySelector(".qs-overlay-year"),
                  r = s.querySelector(".qs-controls"),
                  o = s.querySelector(".qs-squares");
                e
                  ? (i.classList.add("qs-hidden"),
                    r.classList.remove("qs-blur"),
                    o.classList.remove("qs-blur"),
                    (n.value = ""))
                  : (i.classList.remove("qs-hidden"),
                    r.classList.add("qs-blur"),
                    o.classList.add("qs-blur"),
                    n.focus());
              }
              function T(e, t, s, i) {
                var n = isNaN(+new Date().setFullYear(t.value || void 0)),
                  r = n ? null : t.value;
                13 === e.which || 13 === e.keyCode || "click" === e.type
                  ? i
                    ? y(null, s, r, i)
                    : n || t.classList.contains("qs-disabled") || y(null, s, r)
                  : s.calendar.contains(t) &&
                    s.calendar
                      .querySelector(".qs-submit")
                      .classList[n ? "add" : "remove"]("qs-disabled");
              }
              function O(e) {
                return {}.toString.call(e);
              }
              function L(e) {
                i.forEach(function (t) {
                  t !== e && E(t);
                });
              }
              function M(e) {
                if (!e.__qs_shadow_dom) {
                  var t = e.which || e.keyCode,
                    s = e.type,
                    n = e.target,
                    o = n.classList,
                    a = i.filter(function (e) {
                      return e.calendar.contains(n) || e.el === n;
                    })[0],
                    l = a && a.calendar.contains(n);
                  if (!(a && a.isMobile && a.disableMobile))
                    if ("click" === s) {
                      if (!a) return i.forEach(E);
                      if (a.disabled) return;
                      var c = a.calendar,
                        d = a.calendarContainer,
                        h = a.disableYearOverlay,
                        p = a.nonInput,
                        g = c.querySelector(".qs-overlay-year"),
                        f = !!c.querySelector(".qs-hidden"),
                        v = c.querySelector(".qs-month-year").contains(n),
                        b = n.dataset.monthNum;
                      if (a.noPosition && !l)
                        (d.classList.contains("qs-hidden") ? x : E)(a);
                      else if (o.contains("qs-arrow")) y(o, a);
                      else if (v || o.contains("qs-close")) h || C(!f, a);
                      else if (b) T(e, g, a, b);
                      else {
                        if (o.contains("qs-disabled")) return;
                        if (o.contains("qs-num")) {
                          var w = n.textContent,
                            S = +n.dataset.direction,
                            O = new Date(a.currentYear, a.currentMonth + S, w);
                          if (S) {
                            (a.currentYear = O.getFullYear()),
                              (a.currentMonth = O.getMonth()),
                              (a.currentMonthName = r[a.currentMonth]),
                              u(a);
                            for (
                              var M,
                                A = a.calendar.querySelectorAll(
                                  '[data-direction="0"]'
                                ),
                                I = 0;
                              !M;

                            ) {
                              var k = A[I];
                              k.textContent === w && (M = k), I++;
                            }
                            n = M;
                          }
                          return void (+O == +a.dateSelected
                            ? m(n, a, !0)
                            : n.classList.contains("qs-disabled") || m(n, a));
                        }
                        o.contains("qs-submit")
                          ? T(e, g, a)
                          : p && n === a.el && (x(a), L(a));
                      }
                    } else if ("focusin" === s && a) x(a), L(a);
                    else if ("keydown" === s && 9 === t && a) E(a);
                    else if ("keydown" === s && a && !a.disabled) {
                      var _ = !a.calendar
                        .querySelector(".qs-overlay")
                        .classList.contains("qs-hidden");
                      13 === t && _ && l
                        ? T(e, n, a)
                        : 27 === t && _ && l && C(!0, a);
                    } else if ("input" === s) {
                      if (!a || !a.calendar.contains(n)) return;
                      var D = a.calendar.querySelector(".qs-submit"),
                        P = n.value
                          .split("")
                          .reduce(function (e, t) {
                            return e || "0" !== t
                              ? e + (t.match(/[0-9]/) ? t : "")
                              : "";
                          }, "")
                          .slice(0, 4);
                      (n.value = P),
                        D.classList[4 === P.length ? "remove" : "add"](
                          "qs-disabled"
                        );
                    }
                }
              }
              function A(e) {
                M(e), (e.__qs_shadow_dom = !0);
              }
              function I(e, t) {
                l.forEach(function (s) {
                  e.removeEventListener(s, t);
                });
              }
              function k() {
                x(this);
              }
              function _() {
                E(this);
              }
              function D(e, t) {
                var s = S(e),
                  i = this.currentYear,
                  n = this.currentMonth,
                  r = this.sibling;
                if (null == e)
                  return (
                    (this.dateSelected = void 0),
                    v(this.el, this, !0),
                    r && (f({ instance: this, deselect: !0 }), u(r)),
                    u(this),
                    this
                  );
                if (!w(e))
                  throw new Error("`setDate` needs a JavaScript Date object.");
                if (
                  this.disabledDates[+s] ||
                  s < this.minDate ||
                  s > this.maxDate
                )
                  throw new Error(
                    "You can't manually set a date that's disabled."
                  );
                (this.dateSelected = s),
                  t &&
                    ((this.currentYear = s.getFullYear()),
                    (this.currentMonth = s.getMonth()),
                    (this.currentMonthName = this.months[s.getMonth()])),
                  v(this.el, this),
                  r && (f({ instance: this }), u(r));
                var o = i === s.getFullYear() && n === s.getMonth();
                return (
                  o || t ? u(this, s) : o || u(this, new Date(i, n, 1)), this
                );
              }
              function P(e) {
                return q(this, e, !0);
              }
              function z(e) {
                return q(this, e);
              }
              function q(e, t, s) {
                var i = e.dateSelected,
                  n = e.first,
                  r = e.sibling,
                  o = e.minDate,
                  a = e.maxDate,
                  l = S(t),
                  c = s ? "Min" : "Max";
                function d() {
                  return "original" + c + "Date";
                }
                function h() {
                  return c.toLowerCase() + "Date";
                }
                function p() {
                  return "set" + c;
                }
                function g() {
                  throw new Error("Out-of-range date passed to " + p());
                }
                if (null == t)
                  (e[d()] = void 0),
                    r
                      ? ((r[d()] = void 0),
                        s
                          ? ((n && !i) || (!n && !r.dateSelected)) &&
                            ((e.minDate = void 0), (r.minDate = void 0))
                          : ((n && !r.dateSelected) || (!n && !i)) &&
                            ((e.maxDate = void 0), (r.maxDate = void 0)))
                      : (e[h()] = void 0);
                else {
                  if (!w(t)) throw new Error("Invalid date passed to " + p());
                  r
                    ? (((n && s && l > (i || a)) ||
                        (n && !s && l < (r.dateSelected || o)) ||
                        (!n && s && l > (r.dateSelected || a)) ||
                        (!n && !s && l < (i || o))) &&
                        g(),
                      (e[d()] = l),
                      (r[d()] = l),
                      ((s && ((n && !i) || (!n && !r.dateSelected))) ||
                        (!s && ((n && !r.dateSelected) || (!n && !i)))) &&
                        ((e[h()] = l), (r[h()] = l)))
                    : (((s && l > (i || a)) || (!s && l < (i || o))) && g(),
                      (e[h()] = l));
                }
                return r && u(r), u(e), e;
              }
              function $() {
                var e = this.first ? this : this.sibling,
                  t = e.sibling;
                return { start: e.dateSelected, end: t.dateSelected };
              }
              function B() {
                var e = this.shadowDom,
                  t = this.positionedEl,
                  s = this.calendarContainer,
                  n = this.sibling,
                  r = this;
                this.inlinePosition &&
                  (i.some(function (e) {
                    return e !== r && e.positionedEl === t;
                  }) ||
                    t.style.setProperty("position", null)),
                  s.remove(),
                  (i = i.filter(function (e) {
                    return e !== r;
                  })),
                  n && delete n.sibling,
                  i.length || I(document, M);
                var o = i.some(function (t) {
                  return t.shadowDom === e;
                });
                for (var a in (e && !o && I(e, A), this)) delete this[a];
                i.length ||
                  l.forEach(function (e) {
                    document.removeEventListener(e, M);
                  });
              }
              function N(e, t) {
                var s = new Date(e);
                if (!w(s)) throw new Error("Invalid date passed to `navigate`");
                (this.currentYear = s.getFullYear()),
                  (this.currentMonth = s.getMonth()),
                  u(this),
                  t && this.onMonthChange(this);
              }
              function G() {
                var e = !this.calendarContainer.classList.contains("qs-hidden"),
                  t = !this.calendarContainer
                    .querySelector(".qs-overlay")
                    .classList.contains("qs-hidden");
                e && C(t, this);
              }
              t.default = function (e, t) {
                var s = (function (e, t) {
                  var s,
                    l,
                    c = (function (e) {
                      var t = d(e);
                      t.events &&
                        (t.events = t.events.reduce(function (e, t) {
                          if (!w(t))
                            throw new Error(
                              '"options.events" must only contain valid JavaScript Date objects.'
                            );
                          return (e[+S(t)] = !0), e;
                        }, {})),
                        [
                          "startDate",
                          "dateSelected",
                          "minDate",
                          "maxDate",
                        ].forEach(function (e) {
                          var s = t[e];
                          if (s && !w(s))
                            throw new Error(
                              '"options.' +
                                e +
                                '" needs to be a valid JavaScript Date object.'
                            );
                          t[e] = S(s);
                        });
                      var s = t.position,
                        r = t.maxDate,
                        l = t.minDate,
                        c = t.dateSelected,
                        u = t.overlayPlaceholder,
                        h = t.overlayButton,
                        p = t.startDay,
                        g = t.id;
                      if (
                        ((t.startDate = S(t.startDate || c || new Date())),
                        (t.disabledDates = (t.disabledDates || []).reduce(
                          function (e, t) {
                            var s = +S(t);
                            if (!w(t))
                              throw new Error(
                                'You supplied an invalid date to "options.disabledDates".'
                              );
                            if (s === +S(c))
                              throw new Error(
                                '"disabledDates" cannot contain the same date as "dateSelected".'
                              );
                            return (e[s] = 1), e;
                          },
                          {}
                        )),
                        t.hasOwnProperty("id") && null == g)
                      )
                        throw new Error("`id` cannot be `null` or `undefined`");
                      if (null != g) {
                        var m = i.filter(function (e) {
                          return e.id === g;
                        });
                        if (m.length > 1)
                          throw new Error(
                            "Only two datepickers can share an id."
                          );
                        m.length
                          ? ((t.second = !0), (t.sibling = m[0]))
                          : (t.first = !0);
                      }
                      var f = ["tr", "tl", "br", "bl", "c"].some(function (e) {
                        return s === e;
                      });
                      if (s && !f)
                        throw new Error(
                          '"options.position" must be one of the following: tl, tr, bl, br, or c.'
                        );
                      function v(e) {
                        throw new Error(
                          '"dateSelected" in options is ' +
                            (e ? "less" : "greater") +
                            ' than "' +
                            (e || "max") +
                            'Date".'
                        );
                      }
                      if (
                        ((t.position = (function (e) {
                          var t = e[0],
                            s = e[1],
                            i = {};
                          return (i[o[t]] = 1), s && (i[o[s]] = 1), i;
                        })(s || "bl")),
                        r < l)
                      )
                        throw new Error(
                          '"maxDate" in options is less than "minDate".'
                        );
                      if (
                        (c && (l > c && v("min"), r < c && v()),
                        [
                          "onSelect",
                          "onShow",
                          "onHide",
                          "onMonthChange",
                          "formatter",
                          "disabler",
                        ].forEach(function (e) {
                          "function" != typeof t[e] && (t[e] = a);
                        }),
                        [
                          "customDays",
                          "customMonths",
                          "customOverlayMonths",
                        ].forEach(function (e, s) {
                          var i = t[e],
                            n = s ? 12 : 7;
                          if (i) {
                            if (
                              !Array.isArray(i) ||
                              i.length !== n ||
                              i.some(function (e) {
                                return "string" != typeof e;
                              })
                            )
                              throw new Error(
                                '"' +
                                  e +
                                  '" must be an array with ' +
                                  n +
                                  " strings."
                              );
                            t[
                              s ? (s < 2 ? "months" : "overlayMonths") : "days"
                            ] = i;
                          }
                        }),
                        p && p > 0 && p < 7)
                      ) {
                        var y = (t.customDays || n).slice(),
                          b = y.splice(0, p);
                        (t.customDays = y.concat(b)),
                          (t.startDay = +p),
                          (t.weekendIndices = [y.length - 1, y.length]);
                      } else (t.startDay = 0), (t.weekendIndices = [6, 0]);
                      "string" != typeof u && delete t.overlayPlaceholder,
                        "string" != typeof h && delete t.overlayButton;
                      var E = t.defaultView;
                      if (E && "calendar" !== E && "overlay" !== E)
                        throw new Error(
                          'options.defaultView must either be "calendar" or "overlay".'
                        );
                      return (t.defaultView = E || "calendar"), t;
                    })(
                      t || {
                        startDate: S(new Date()),
                        position: "bl",
                        defaultView: "calendar",
                      }
                    ),
                    u = e;
                  if ("string" == typeof u)
                    u =
                      "#" === u[0]
                        ? document.getElementById(u.slice(1))
                        : document.querySelector(u);
                  else {
                    if ("[object ShadowRoot]" === O(u))
                      throw new Error(
                        "Using a shadow DOM as your selector is not supported."
                      );
                    for (var h, p = u.parentNode; !h; ) {
                      var g = O(p);
                      "[object HTMLDocument]" === g
                        ? (h = !0)
                        : "[object ShadowRoot]" === g
                        ? ((h = !0), (s = p), (l = p.host))
                        : (p = p.parentNode);
                    }
                  }
                  if (!u) throw new Error("No selector / element found.");
                  if (
                    i.some(function (e) {
                      return e.el === u;
                    })
                  )
                    throw new Error(
                      "A datepicker already exists on that element."
                    );
                  var m = u === document.body,
                    f = s
                      ? u.parentElement || s
                      : m
                      ? document.body
                      : u.parentElement,
                    y = s ? u.parentElement || l : f,
                    b = document.createElement("div"),
                    E = document.createElement("div");
                  (b.className = "qs-datepicker-container qs-hidden"),
                    (E.className = "qs-datepicker");
                  var C = {
                    shadowDom: s,
                    customElement: l,
                    positionedEl: y,
                    el: u,
                    parent: f,
                    nonInput: "INPUT" !== u.nodeName,
                    noPosition: m,
                    position: !m && c.position,
                    startDate: c.startDate,
                    dateSelected: c.dateSelected,
                    disabledDates: c.disabledDates,
                    minDate: c.minDate,
                    maxDate: c.maxDate,
                    noWeekends: !!c.noWeekends,
                    weekendIndices: c.weekendIndices,
                    calendarContainer: b,
                    calendar: E,
                    currentMonth: (c.startDate || c.dateSelected).getMonth(),
                    currentMonthName: (c.months || r)[
                      (c.startDate || c.dateSelected).getMonth()
                    ],
                    currentYear: (c.startDate || c.dateSelected).getFullYear(),
                    events: c.events || {},
                    defaultView: c.defaultView,
                    setDate: D,
                    remove: B,
                    setMin: P,
                    setMax: z,
                    show: k,
                    hide: _,
                    navigate: N,
                    toggleOverlay: G,
                    onSelect: c.onSelect,
                    onShow: c.onShow,
                    onHide: c.onHide,
                    onMonthChange: c.onMonthChange,
                    formatter: c.formatter,
                    disabler: c.disabler,
                    months: c.months || r,
                    days: c.customDays || n,
                    startDay: c.startDay,
                    overlayMonths:
                      c.overlayMonths ||
                      (c.months || r).map(function (e) {
                        return e.slice(0, 3);
                      }),
                    overlayPlaceholder: c.overlayPlaceholder || "4-digit year",
                    overlayButton: c.overlayButton || "Submit",
                    disableYearOverlay: !!c.disableYearOverlay,
                    disableMobile: !!c.disableMobile,
                    isMobile: "ontouchstart" in window,
                    alwaysShow: !!c.alwaysShow,
                    id: c.id,
                    showAllDates: !!c.showAllDates,
                    respectDisabledReadOnly: !!c.respectDisabledReadOnly,
                    first: c.first,
                    second: c.second,
                  };
                  if (c.sibling) {
                    var T = c.sibling,
                      L = C,
                      M = T.minDate || L.minDate,
                      A = T.maxDate || L.maxDate;
                    (L.sibling = T),
                      (T.sibling = L),
                      (T.minDate = M),
                      (T.maxDate = A),
                      (L.minDate = M),
                      (L.maxDate = A),
                      (T.originalMinDate = M),
                      (T.originalMaxDate = A),
                      (L.originalMinDate = M),
                      (L.originalMaxDate = A),
                      (T.getRange = $),
                      (L.getRange = $);
                  }
                  c.dateSelected && v(u, C);
                  var I = getComputedStyle(y).position;
                  m ||
                    (I && "static" !== I) ||
                    ((C.inlinePosition = !0),
                    y.style.setProperty("position", "relative"));
                  var q = i.filter(function (e) {
                    return e.positionedEl === C.positionedEl;
                  });
                  return (
                    q.some(function (e) {
                      return e.inlinePosition;
                    }) &&
                      ((C.inlinePosition = !0),
                      q.forEach(function (e) {
                        e.inlinePosition = !0;
                      })),
                    b.appendChild(E),
                    f.appendChild(b),
                    C.alwaysShow && x(C),
                    C
                  );
                })(e, t);
                if (
                  (i.length || c(document),
                  s.shadowDom &&
                    (i.some(function (e) {
                      return e.shadowDom === s.shadowDom;
                    }) ||
                      c(s.shadowDom)),
                  i.push(s),
                  s.second)
                ) {
                  var l = s.sibling;
                  f({ instance: s, deselect: !s.dateSelected }),
                    f({ instance: l, deselect: !l.dateSelected }),
                    u(l);
                }
                return (
                  u(s, s.startDate || s.dateSelected), s.alwaysShow && b(s), s
                );
              };
            },
          ]).default);
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            o = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            a = function (t) {
              return e({}, o, t);
            },
            l = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(s);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            g = "data",
            m = "loading",
            f = "loaded",
            v = "applied",
            y = "error",
            b = "native",
            w = "data-",
            S = "ll-status",
            E = function (e, t) {
              return e.getAttribute(w + t);
            },
            x = function (e) {
              return E(e, S);
            },
            C = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            T = function (e) {
              return C(e, null);
            },
            O = function (e) {
              return null === x(e);
            },
            L = function (e) {
              return x(e) === b;
            },
            M = [m, f, v, y],
            A = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            I = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            k = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            _ = function (e) {
              return e.llTempImage;
            },
            D = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            P = function (e, t) {
              e && (e.loadingCount += t);
            },
            z = function (e, t) {
              e && (e.toLoadCount = t);
            },
            q = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            $ = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && q(s).forEach(t);
            },
            B = function (e, t) {
              q(e).forEach(t);
            },
            N = [c],
            G = [c, h],
            H = [c, d, u],
            W = [g],
            F = function (e) {
              return !!e[p];
            },
            V = function (e) {
              return e[p];
            },
            j = function (e) {
              return delete e[p];
            },
            R = function (e, t) {
              if (!F(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[p] = s);
              }
            },
            Y = function (e, t) {
              if (F(e)) {
                var s = V(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            X = function (e, t, s) {
              I(e, t.class_applied),
                C(e, v),
                s &&
                  (t.unobserve_completed && D(e, t),
                  A(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              I(e, t.class_loading),
                C(e, m),
                s && (P(s, 1), A(t.callback_loading, e, s));
            },
            K = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            Z = function (e, t) {
              K(e, u, E(e, t.data_sizes)),
                K(e, d, E(e, t.data_srcset)),
                K(e, c, E(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                $(e, function (e) {
                  R(e, H), Z(e, t);
                }),
                  R(e, H),
                  Z(e, t);
              },
              IFRAME: function (e, t) {
                R(e, N), K(e, c, E(e, t.data_src));
              },
              VIDEO: function (e, t) {
                B(e, function (e) {
                  R(e, N), K(e, c, E(e, t.data_src));
                }),
                  R(e, G),
                  K(e, h, E(e, t.data_poster)),
                  K(e, c, E(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                R(e, W), K(e, g, E(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                A(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                P(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                k(e, t.class_loading),
                t.unobserve_completed && D(e, s);
            },
            oe = function (e, t, s) {
              var i = _(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      re(t, s, i),
                        I(t, s.class_loaded),
                        C(t, f),
                        A(s.callback_loaded, t, i),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      re(t, s, i),
                        I(t, s.class_error),
                        C(t, y),
                        A(s.callback_error, t, i),
                        s.restore_on_error && Y(t, H),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  }
                );
            },
            ae = function (e, t, s) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      oe(e, t, s),
                      (function (e) {
                        F(e) ||
                          (e[p] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg),
                          n = E(e, t.data_bg_hidpi),
                          o = r && n ? n : i;
                        o &&
                          ((e.style.backgroundImage = 'url("'.concat(o, '")')),
                          _(e).setAttribute(c, o),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg_multi),
                          n = E(e, t.data_bg_multi_hidpi),
                          o = r && n ? n : i;
                        o && ((e.style.backgroundImage = o), X(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = E(e, t.data_bg_set);
                        if (i) {
                          var n = i.split("|"),
                            r = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            X(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    oe(e, t, s),
                      (function (e, t, s) {
                        var i = J[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              $(e, function (e) {
                Y(e, H);
              }),
                Y(e, H);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                Y(e, N);
              },
              VIDEO: function (e) {
                B(e, function (e) {
                  Y(e, N);
                }),
                  Y(e, G),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, W);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (F(e)) {
                        var t = V(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  O(e) ||
                    L(e) ||
                    (k(e, t.class_entered),
                    k(e, t.class_exited),
                    k(e, t.class_applied),
                    k(e, t.class_loading),
                    k(e, t.class_loaded),
                    k(e, t.class_error));
                })(e, t),
                T(e),
                j(e);
            },
            he = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            ge = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var n = (function (e) {
                        return M.indexOf(x(e)) >= 0;
                      })(e);
                      C(e, "entered"),
                        I(e, s.class_entered),
                        k(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && D(e, s);
                        })(e, s, i),
                        A(s.callback_enter, e, t, i),
                        n || ae(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      O(e) ||
                        (I(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return x(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              $(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            k(e, s.class_loading),
                            P(i, -1),
                            T(e),
                            A(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        A(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            fe = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return x(e) === y;
              })(e);
            },
            ye = function (e, t) {
              return (function (e) {
                return me(e).filter(O);
              })(e || fe(t));
            },
            be = function (e, s) {
              var n = a(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        ge(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = fe(e)), me(s).filter(ve)).forEach(function (t) {
                          k(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(n, this),
                this.update(s);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  n,
                  r = this._settings,
                  o = ye(e, r);
                z(this, o.length),
                  !s && i
                    ? pe(r)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== he.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  oe(e, t, s),
                                  (function (e, t) {
                                    var s = J[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  C(e, b);
                              })(e, t, s);
                          }),
                            z(s, 0);
                        })(o, r, this)
                      : ((n = o),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(o);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  fe(this._settings).forEach(function (e) {
                    j(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                ye(e, s).forEach(function (e) {
                  D(e, t), ae(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                fe(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var s = a(t);
              ae(e, s);
            }),
            (be.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) l(e, s);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          n = window.matchMedia(i[0]),
          r = i[1],
          o = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === r;
          });
        n.addListener(function () {
          e.mediaHandler(n, o);
        }),
          this.mediaHandler(n, o);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    new e("max").init();
    class t {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
              }.bind(this)
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : l(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            a &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              l(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && u(`[Попапос]: ${e}`);
      }
    }
    let i = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          i.Android() || i.BlackBerry() || i.iOS() || i.Opera() || i.Windows()
        );
      },
    };
    let n = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      r = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      o = (e, t = 500) => (e.hidden ? r(e, t) : n(e, t)),
      a = !0,
      l = (e = 500) => {
        document.documentElement.classList.contains("lock") ? c(e) : d(e);
      },
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (a) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (a = !1),
            setTimeout(function () {
              a = !0;
            }, e);
        }
      },
      d = (e = 500) => {
        let t = document.querySelector("body");
        if (a) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (a = !1),
            setTimeout(function () {
              a = !0;
            }, e);
        }
      };
    function u(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function h(e) {
      return e.filter(function (e, t, s) {
        return s.indexOf(e) === t;
      });
    }
    let p = (e, t = !1, s = 500, i = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let r = "",
          o = 0;
        t &&
          ((r = "header.header"), (o = document.querySelector(r).offsetHeight));
        let a = {
          speedAsDuration: !0,
          speed: s,
          header: r,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (c(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", a);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: o ? e - o : e, behavior: "smooth" });
        }
        u(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else u(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    class g {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          o(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          r = !!e.dataset.href && e.dataset.href,
          o = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let a = "";
        return (
          (a += r
            ? `<a ${o} ${i} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (a += this.getSelectElementContent(e)),
          (a += r ? "</a>" : "</button>"),
          a
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && f.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && u(`[select]: ${e}`);
      }
    }
    const m = { inputMaskModule: null, selectModule: null };
    let f = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                f.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (m.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  m.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    function v(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function y(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : v(t[s]) && v(e[s]) && Object.keys(t[s]).length > 0 && y(e[s], t[s]);
      });
    }
    const b = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function w() {
      const e = "undefined" != typeof document ? document : {};
      return y(e, b), e;
    }
    const S = {
      document: b,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function E() {
      const e = "undefined" != typeof window ? window : {};
      return y(e, S), e;
    }
    function x(e, t = 0) {
      return setTimeout(e, t);
    }
    function C() {
      return Date.now();
    }
    function T(e, t = "x") {
      const s = E();
      let i, n, r;
      const o = (function (e) {
        const t = E();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = o.transform || o.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              o.MozTransform ||
              o.OTransform ||
              o.MsTransform ||
              o.msTransform ||
              o.transform ||
              o
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function O(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function L(...e) {
      const t = Object(e[0]),
        s = ["__proto__", "constructor", "prototype"];
      for (let n = 1; n < e.length; n += 1) {
        const r = e[n];
        if (
          null != r &&
          ((i = r),
          !("undefined" != typeof window && void 0 !== window.HTMLElement
            ? i instanceof HTMLElement
            : i && (1 === i.nodeType || 11 === i.nodeType)))
        ) {
          const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
          for (let s = 0, i = e.length; s < i; s += 1) {
            const i = e[s],
              n = Object.getOwnPropertyDescriptor(r, i);
            void 0 !== n &&
              n.enumerable &&
              (O(t[i]) && O(r[i])
                ? r[i].__swiper__
                  ? (t[i] = r[i])
                  : L(t[i], r[i])
                : !O(t[i]) && O(r[i])
                ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : L(t[i], r[i]))
                : (t[i] = r[i]));
          }
        }
      }
      var i;
      return t;
    }
    function M(e, t, s) {
      e.style.setProperty(t, s);
    }
    function A({ swiper: e, targetPosition: t, side: s }) {
      const i = E(),
        n = -e.translate;
      let r,
        o = null;
      const a = e.params.speed;
      (e.wrapperEl.style.scrollSnapType = "none"),
        i.cancelAnimationFrame(e.cssModeFrameID);
      const l = t > n ? "next" : "prev",
        c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
        d = () => {
          (r = new Date().getTime()), null === o && (o = r);
          const l = Math.max(Math.min((r - o) / a, 1), 0),
            u = 0.5 - Math.cos(l * Math.PI) / 2;
          let h = n + u * (t - n);
          if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [s]: h }), c(h, t)))
            return (
              (e.wrapperEl.style.overflow = "hidden"),
              (e.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (e.wrapperEl.style.overflow = ""),
                  e.wrapperEl.scrollTo({ [s]: h });
              }),
              void i.cancelAnimationFrame(e.cssModeFrameID)
            );
          e.cssModeFrameID = i.requestAnimationFrame(d);
        };
      d();
    }
    function I(e) {
      return (
        e.querySelector(".swiper-slide-transform") ||
        (e.shadowEl && e.shadowEl.querySelector(".swiper-slide-transform")) ||
        e
      );
    }
    function k(e, t = "") {
      return [...e.children].filter((e) => e.matches(t));
    }
    function _(e, t = []) {
      const s = document.createElement(e);
      return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
    }
    function D(e, t) {
      return E().getComputedStyle(e, null).getPropertyValue(t);
    }
    function P(e) {
      let t,
        s = e;
      if (s) {
        for (t = 0; null !== (s = s.previousSibling); )
          1 === s.nodeType && (t += 1);
        return t;
      }
    }
    function z(e, t) {
      const s = [];
      let i = e.parentElement;
      for (; i; )
        t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
      return s;
    }
    function q(e, t, s) {
      const i = E();
      return s
        ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue("width" === t ? "margin-right" : "margin-top")
            ) +
            parseFloat(
              i
                .getComputedStyle(e, null)
                .getPropertyValue(
                  "width" === t ? "margin-left" : "margin-bottom"
                )
            )
        : e.offsetWidth;
    }
    let $, B, N;
    function G() {
      return (
        $ ||
          ($ = (function () {
            const e = E(),
              t = w();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
            };
          })()),
        $
      );
    }
    function H(e = {}) {
      return (
        B ||
          (B = (function ({ userAgent: e } = {}) {
            const t = G(),
              s = E(),
              i = s.navigator.platform,
              n = e || s.navigator.userAgent,
              r = { ios: !1, android: !1 },
              o = s.screen.width,
              a = s.screen.height,
              l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = n.match(/(iPad).*OS\s([\d_]+)/);
            const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
              u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              h = "Win32" === i;
            let p = "MacIntel" === i;
            return (
              !c &&
                p &&
                t.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${a}`) >= 0 &&
                ((c = n.match(/(Version)\/([\d.]+)/)),
                c || (c = [0, 1, "13_0_0"]),
                (p = !1)),
              l && !h && ((r.os = "android"), (r.android = !0)),
              (c || u || d) && ((r.os = "ios"), (r.ios = !0)),
              r
            );
          })(e)),
        B
      );
    }
    function W() {
      return (
        N ||
          (N = (function () {
            const e = E();
            let t = !1;
            function s() {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf("safari") >= 0 &&
                t.indexOf("chrome") < 0 &&
                t.indexOf("android") < 0
              );
            }
            if (s()) {
              const s = String(e.navigator.userAgent);
              if (s.includes("Version/")) {
                const [e, i] = s
                  .split("Version/")[1]
                  .split(" ")[0]
                  .split(".")
                  .map((e) => Number(e));
                t = e < 16 || (16 === e && i < 2);
              }
            }
            return {
              isSafari: t || s(),
              needPerspectiveFix: t,
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        N
      );
    }
    const F = {
      on(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed) return i;
        if ("function" != typeof t) return i;
        function n(...s) {
          i.off(e, n),
            n.__emitterProxy && delete n.__emitterProxy,
            t.apply(i, s);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if (!s.eventsListeners || s.destroyed) return s;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return !s.eventsListeners || s.destroyed
          ? s
          : s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed) return t;
        if (!t.eventsListeners) return t;
        let s, i, n;
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
          : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
          i.unshift(n);
        return (
          (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
            t.eventsAnyListeners &&
              t.eventsAnyListeners.length &&
              t.eventsAnyListeners.forEach((t) => {
                t.apply(n, [e, ...i]);
              }),
              t.eventsListeners &&
                t.eventsListeners[e] &&
                t.eventsListeners[e].forEach((e) => {
                  e.apply(n, i);
                });
          }),
          t
        );
      },
    };
    const V = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i.clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i.clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(D(i, "padding-left") || 0, 10) -
              parseInt(D(i, "padding-right") || 0, 10)),
            (s =
              s -
              parseInt(D(i, "padding-top") || 0, 10) -
              parseInt(D(i, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          {
            wrapperEl: n,
            slidesEl: r,
            size: o,
            rtlTranslate: a,
            wrongRTL: l,
          } = e,
          c = e.virtual && i.virtual.enabled,
          d = c ? e.virtual.slides.length : e.slides.length,
          u = k(r, `.${e.params.slideClass}, swiper-slide`),
          h = c ? e.virtual.slides.length : u.length;
        let p = [];
        const g = [],
          m = [];
        let f = i.slidesOffsetBefore;
        "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
        let v = i.slidesOffsetAfter;
        "function" == typeof v && (v = i.slidesOffsetAfter.call(e));
        const y = e.snapGrid.length,
          b = e.slidesGrid.length;
        let w = i.spaceBetween,
          S = -f,
          E = 0,
          x = 0;
        if (void 0 === o) return;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * o),
          (e.virtualSize = -w),
          u.forEach((e) => {
            a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
              (e.style.marginBottom = ""),
              (e.style.marginTop = "");
          }),
          i.centeredSlides &&
            i.cssMode &&
            (M(n, "--swiper-centered-offset-before", ""),
            M(n, "--swiper-centered-offset-after", ""));
        const C = i.grid && i.grid.rows > 1 && e.grid;
        let T;
        C && e.grid.initSlides(h);
        const O =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < h; n += 1) {
          let r;
          if (
            ((T = 0),
            u[n] && (r = u[n]),
            C && e.grid.updateSlide(n, r, h, t),
            !u[n] || "none" !== D(r, "display"))
          ) {
            if ("auto" === i.slidesPerView) {
              O && (u[n].style[t("width")] = "");
              const o = getComputedStyle(r),
                a = r.style.transform,
                l = r.style.webkitTransform;
              if (
                (a && (r.style.transform = "none"),
                l && (r.style.webkitTransform = "none"),
                i.roundLengths)
              )
                T = e.isHorizontal() ? q(r, "width", !0) : q(r, "height", !0);
              else {
                const e = s(o, "width"),
                  t = s(o, "padding-left"),
                  i = s(o, "padding-right"),
                  n = s(o, "margin-left"),
                  a = s(o, "margin-right"),
                  l = o.getPropertyValue("box-sizing");
                if (l && "border-box" === l) T = e + n + a;
                else {
                  const { clientWidth: s, offsetWidth: o } = r;
                  T = e + t + i + n + a + (o - s);
                }
              }
              a && (r.style.transform = a),
                l && (r.style.webkitTransform = l),
                i.roundLengths && (T = Math.floor(T));
            } else
              (T = (o - (i.slidesPerView - 1) * w) / i.slidesPerView),
                i.roundLengths && (T = Math.floor(T)),
                u[n] && (u[n].style[t("width")] = `${T}px`);
            u[n] && (u[n].swiperSlideSize = T),
              m.push(T),
              i.centeredSlides
                ? ((S = S + T / 2 + E / 2 + w),
                  0 === E && 0 !== n && (S = S - o / 2 - w),
                  0 === n && (S = S - o / 2 - w),
                  Math.abs(S) < 0.001 && (S = 0),
                  i.roundLengths && (S = Math.floor(S)),
                  x % i.slidesPerGroup == 0 && p.push(S),
                  g.push(S))
                : (i.roundLengths && (S = Math.floor(S)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(S),
                  g.push(S),
                  (S = S + T + w)),
              (e.virtualSize += T + w),
              (E = T),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, o) + v),
          a &&
            l &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            (n.style.width = `${e.virtualSize + i.spaceBetween}px`),
          i.setWrapperSize &&
            (n.style[t("width")] = `${e.virtualSize + i.spaceBetween}px`),
          C && e.grid.updateWrapperSize(T, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let n = p[s];
            i.roundLengths && (n = Math.floor(n)),
              p[s] <= e.virtualSize - o && t.push(n);
          }
          (p = t),
            Math.floor(e.virtualSize - o) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - o);
        }
        if (c && i.loop) {
          const t = m[0] + w;
          if (i.slidesPerGroup > 1) {
            const s = Math.ceil(
                (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                  i.slidesPerGroup
              ),
              n = t * i.slidesPerGroup;
            for (let e = 0; e < s; e += 1) p.push(p[p.length - 1] + n);
          }
          for (
            let s = 0;
            s < e.virtual.slidesBefore + e.virtual.slidesAfter;
            s += 1
          )
            1 === i.slidesPerGroup && p.push(p[p.length - 1] + t),
              g.push(g[g.length - 1] + t),
              (e.virtualSize += t);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          u.filter(
            (e, t) => !(i.cssMode && !i.loop) || t !== u.length - 1
          ).forEach((e) => {
            e.style[s] = `${w}px`;
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          m.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - o;
          p = p.map((e) => (e < 0 ? -f : e > t ? t + v : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (m.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < o)
          ) {
            const t = (o - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              g.forEach((e, s) => {
                g[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: u,
            snapGrid: p,
            slidesGrid: g,
            slidesSizesGrid: m,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          M(n, "--swiper-centered-offset-before", -p[0] + "px"),
            M(
              n,
              "--swiper-centered-offset-after",
              e.size / 2 - m[m.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (h !== d && e.emit("slidesLengthChange"),
          p.length !== y &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          g.length !== b && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(c || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.el.classList.contains(t);
          h <= i.maxBackfaceHiddenSlides
            ? s || e.el.classList.add(t)
            : s && e.el.classList.remove(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const o = (e) => (i ? t.getSlideIndexByData(e) : t.slides[e]);
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(o(e));
            }
        else s.push(o(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides,
          s = e.isElement
            ? e.isHorizontal()
              ? e.wrapperEl.offsetLeft
              : e.wrapperEl.offsetTop
            : 0;
        for (let i = 0; i < t.length; i += 1)
          t[i].swiperSlideOffset =
            (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s;
      },
      updateSlidesProgress: function (e = (this && this.translate) || 0) {
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let o = -e;
        n && (o = e),
          i.forEach((e) => {
            e.classList.remove(s.slideVisibleClass);
          }),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const a = i[e];
          let l = a.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
          const c =
              (o + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            d =
              (o - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (a.swiperSlideSize + s.spaceBetween),
            u = -(o - l),
            h = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (h > 1 && h <= t.size) ||
            (u <= 0 && h >= t.size)) &&
            (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(e),
            i[e].classList.add(s.slideVisibleClass)),
            (a.progress = n ? -c : c),
            (a.originalProgress = n ? -d : d);
        }
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: r, isEnd: o, progressLoop: a } = t;
        const l = r,
          c = o;
        if (0 === i) (n = 0), (r = !0), (o = !0);
        else {
          n = (e - t.minTranslate()) / i;
          const s = Math.abs(e - t.minTranslate()) < 1,
            a = Math.abs(e - t.maxTranslate()) < 1;
          (r = s || n <= 0), (o = a || n >= 1), s && (n = 0), a && (n = 1);
        }
        if (s.loop) {
          const s = t.getSlideIndexByData(0),
            i = t.getSlideIndexByData(t.slides.length - 1),
            n = t.slidesGrid[s],
            r = t.slidesGrid[i],
            o = t.slidesGrid[t.slidesGrid.length - 1],
            l = Math.abs(e);
          (a = l >= n ? (l - n) / o : (l + o - r) / o), a > 1 && (a -= 1);
        }
        Object.assign(t, {
          progress: n,
          progressLoop: a,
          isBeginning: r,
          isEnd: o,
        }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !l && t.emit("reachBeginning toEdge"),
          o && !c && t.emit("reachEnd toEdge"),
          ((l && !r) || (c && !o)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
          r = e.virtual && s.virtual.enabled,
          o = (e) => k(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
        let a;
        if (
          (t.forEach((e) => {
            e.classList.remove(
              s.slideActiveClass,
              s.slideNextClass,
              s.slidePrevClass
            );
          }),
          r)
        )
          if (s.loop) {
            let t = n - e.virtual.slidesBefore;
            t < 0 && (t = e.virtual.slides.length + t),
              t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
              (a = o(`[data-swiper-slide-index="${t}"]`));
          } else a = o(`[data-swiper-slide-index="${n}"]`);
        else a = t[n];
        if (a) {
          a.classList.add(s.slideActiveClass);
          let e = (function (e, t) {
            const s = [];
            for (; e.nextElementSibling; ) {
              const i = e.nextElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(a, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
          let i = (function (e, t) {
            const s = [];
            for (; e.previousElementSibling; ) {
              const i = e.previousElementSibling;
              t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
            }
            return s;
          })(a, `.${s.slideClass}, swiper-slide`)[0];
          s.loop && 0 === !i && (i = t[t.length - 1]),
            i && i.classList.add(s.slidePrevClass);
        }
        e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            snapGrid: i,
            params: n,
            activeIndex: r,
            realIndex: o,
            snapIndex: a,
          } = t;
        let l,
          c = e;
        const d = (e) => {
          let s = e - t.virtual.slidesBefore;
          return (
            s < 0 && (s = t.virtual.slides.length + s),
            s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
            s
          );
        };
        if (
          (void 0 === c &&
            (c = (function (e) {
              const { slidesGrid: t, params: s } = e,
                i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1)
                void 0 !== t[e + 1]
                  ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                    ? (n = e)
                    : i >= t[e] && i < t[e + 1] && (n = e + 1)
                  : i >= t[e] && (n = e);
              return (
                s.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
              );
            })(t)),
          i.indexOf(s) >= 0)
        )
          l = i.indexOf(s);
        else {
          const e = Math.min(n.slidesPerGroupSkip, c);
          l = e + Math.floor((c - e) / n.slidesPerGroup);
        }
        if ((l >= i.length && (l = i.length - 1), c === r))
          return (
            l !== a && ((t.snapIndex = l), t.emit("snapIndexChange")),
            void (
              t.params.loop &&
              t.virtual &&
              t.params.virtual.enabled &&
              (t.realIndex = d(c))
            )
          );
        let u;
        (u =
          t.virtual && n.virtual.enabled && n.loop
            ? d(c)
            : t.slides[c]
            ? parseInt(
                t.slides[c].getAttribute("data-swiper-slide-index") || c,
                10
              )
            : c),
          Object.assign(t, {
            snapIndex: l,
            realIndex: u,
            previousIndex: r,
            activeIndex: c,
          }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = e.closest(`.${s.slideClass}, swiper-slide`);
        let n,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (n = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                i.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const j = {
      getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
        const { params: t, rtlTranslate: s, translate: i, wrapperEl: n } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let r = T(n, e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          { rtlTranslate: i, params: n, wrapperEl: r, progress: o } = s;
        let a,
          l = 0,
          c = 0;
        s.isHorizontal() ? (l = i ? -e : e) : (c = e),
          n.roundLengths && ((l = Math.floor(l)), (c = Math.floor(c))),
          n.cssMode
            ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -l : -c)
            : n.virtualTranslate ||
              (r.style.transform = `translate3d(${l}px, ${c}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? l : c);
        const d = s.maxTranslate() - s.minTranslate();
        (a = 0 === d ? 0 : (e - s.minTranslate()) / d),
          a !== o && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
        const r = this,
          { params: o, wrapperEl: a } = r;
        if (r.animating && o.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = i && e > l ? l : i && e < c ? c : e),
          r.updateProgress(d),
          o.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                A({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.wrapperEl.removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.wrapperEl.addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function R({ swiper: e, runCallbacks: t, direction: s, step: i }) {
      const { activeIndex: n, previousIndex: r } = e;
      let o = s;
      if (
        (o || (o = n > r ? "next" : n < r ? "prev" : "reset"),
        e.emit(`transition${i}`),
        t && n !== r)
      ) {
        if ("reset" === o) return void e.emit(`slideResetTransition${i}`);
        e.emit(`slideChangeTransition${i}`),
          "next" === o
            ? e.emit(`slideNextTransition${i}`)
            : e.emit(`slidePrevTransition${i}`);
      }
    }
    const Y = {
      slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
        "string" == typeof e && (e = parseInt(e, 10));
        const r = this;
        let o = e;
        o < 0 && (o = 0);
        const {
          params: a,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: h,
          wrapperEl: p,
          enabled: g,
        } = r;
        if (
          (r.animating && a.preventInteractionOnTransition) ||
          (!g && !i && !n)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, o);
        let f = m + Math.floor((o - m) / r.params.slidesPerGroup);
        f >= l.length && (f = l.length - 1);
        const v = -l[f];
        if (a.normalizeSlideIndex)
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (o = e)
                : t >= s && t < i && (o = e + 1)
              : t >= s && (o = e);
          }
        if (r.initialized && o !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== o
          )
            return !1;
        }
        let y;
        if (
          (o !== (d || 0) && s && r.emit("beforeSlideChangeStart"),
          r.updateProgress(v),
          (y = o > u ? "next" : o < u ? "prev" : "reset"),
          (h && -v === r.translate) || (!h && v === r.translate))
        )
          return (
            r.updateActiveIndex(o),
            a.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== a.effect && r.setTranslate(v),
            "reset" !== y && (r.transitionStart(s, y), r.transitionEnd(s, y)),
            !1
          );
        if (a.cssMode) {
          const e = r.isHorizontal(),
            s = h ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                ? ((r._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    p[e ? "scrollLeft" : "scrollTop"] = s;
                  }))
                : (p[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._immediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                A({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            p.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(o),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(s, y),
          0 === t
            ? r.transitionEnd(s, y)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, y));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
        if ("string" == typeof e) {
          e = parseInt(e, 10);
        }
        const n = this;
        let r = e;
        return (
          n.params.loop &&
            (n.virtual && n.params.virtual.enabled
              ? (r += n.virtual.slidesBefore)
              : (r = n.getSlideIndexByData(r))),
          n.slideTo(r, t, s, i)
        );
      },
      slideNext: function (e = this.params.speed, t = !0, s) {
        const i = this,
          { enabled: n, params: r, animating: o } = i;
        if (!n) return i;
        let a = r.slidesPerGroup;
        "auto" === r.slidesPerView &&
          1 === r.slidesPerGroup &&
          r.slidesPerGroupAuto &&
          (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < r.slidesPerGroupSkip ? 1 : a,
          c = i.virtual && r.virtual.enabled;
        if (r.loop) {
          if (o && !c && r.loopPreventsSliding) return !1;
          i.loopFix({ direction: "next" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        return r.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e = this.params.speed, t = !0, s) {
        const i = this,
          {
            params: n,
            snapGrid: r,
            slidesGrid: o,
            rtlTranslate: a,
            enabled: l,
            animating: c,
          } = i;
        if (!l) return i;
        const d = i.virtual && n.virtual.enabled;
        if (n.loop) {
          if (c && !d && n.loopPreventsSliding) return !1;
          i.loopFix({ direction: "prev" }),
            (i._clientLeft = i.wrapperEl.clientLeft);
        }
        function u(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const h = u(a ? i.translate : -i.translate),
          p = r.map((e) => u(e));
        let g = r[p.indexOf(h) - 1];
        if (void 0 === g && n.cssMode) {
          let e;
          r.forEach((t, s) => {
            h >= t && (e = s);
          }),
            void 0 !== e && (g = r[e > 0 ? e - 1 : e]);
        }
        let m = 0;
        if (
          (void 0 !== g &&
            ((m = o.indexOf(g)),
            m < 0 && (m = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((m = m - i.slidesPerViewDynamic("previous", !0) + 1),
              (m = Math.max(m, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return i.slideTo(m, e, t, s);
      },
      slideReset: function (e = this.params.speed, t = !0, s) {
        return this.slideTo(this.activeIndex, e, t, s);
      },
      slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
        const n = this;
        let r = n.activeIndex;
        const o = Math.min(n.params.slidesPerGroupSkip, r),
          a = o + Math.floor((r - o) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[a]) {
          const e = n.snapGrid[a];
          l - e > (n.snapGrid[a + 1] - e) * i && (r += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[a - 1];
          l - e <= (n.snapGrid[a] - e) * i && (r -= n.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, slidesEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          r = e.clickedIndex;
        const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            e.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = e.getSlideIndex(
                    k(s, `${o}[data-swiper-slide-index="${n}"]`)[0]
                  )),
                  x(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = e.getSlideIndex(
                  k(s, `${o}[data-swiper-slide-index="${n}"]`)[0]
                )),
                x(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const X = {
      loopCreate: function (e) {
        const t = this,
          { params: s, slidesEl: i } = t;
        if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
        k(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
          e.setAttribute("data-swiper-slide-index", t);
        }),
          t.loopFix({
            slideRealIndex: e,
            direction: s.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function ({
        slideRealIndex: e,
        slideTo: t = !0,
        direction: s,
        setTranslate: i,
        activeSlideIndex: n,
        byController: r,
        byMousewheel: o,
      } = {}) {
        const a = this;
        if (!a.params.loop) return;
        a.emit("beforeLoopFix");
        const {
          slides: l,
          allowSlidePrev: c,
          allowSlideNext: d,
          slidesEl: u,
          params: h,
        } = a;
        if (
          ((a.allowSlidePrev = !0),
          (a.allowSlideNext = !0),
          a.virtual && h.virtual.enabled)
        )
          return (
            t &&
              (h.centeredSlides || 0 !== a.snapIndex
                ? h.centeredSlides && a.snapIndex < h.slidesPerView
                  ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
                  : a.snapIndex === a.snapGrid.length - 1 &&
                    a.slideTo(a.virtual.slidesBefore, 0, !1, !0)
                : a.slideTo(a.virtual.slides.length, 0, !1, !0)),
            (a.allowSlidePrev = c),
            (a.allowSlideNext = d),
            void a.emit("loopFix")
          );
        const p =
          "auto" === h.slidesPerView
            ? a.slidesPerViewDynamic()
            : Math.ceil(parseFloat(h.slidesPerView, 10));
        let g = h.loopedSlides || p;
        g % h.slidesPerGroup != 0 &&
          (g += h.slidesPerGroup - (g % h.slidesPerGroup)),
          (a.loopedSlides = g);
        const m = [],
          f = [];
        let v = a.activeIndex;
        void 0 === n
          ? (n = a.getSlideIndex(
              a.slides.filter((e) =>
                e.classList.contains(h.slideActiveClass)
              )[0]
            ))
          : (v = n);
        const y = "next" === s || !s,
          b = "prev" === s || !s;
        let w = 0,
          S = 0;
        if (n < g) {
          w = Math.max(g - n, h.slidesPerGroup);
          for (let e = 0; e < g - n; e += 1) {
            const t = e - Math.floor(e / l.length) * l.length;
            m.push(l.length - t - 1);
          }
        } else if (n > a.slides.length - 2 * g) {
          S = Math.max(n - (a.slides.length - 2 * g), h.slidesPerGroup);
          for (let e = 0; e < S; e += 1) {
            const t = e - Math.floor(e / l.length) * l.length;
            f.push(t);
          }
        }
        if (
          (b &&
            m.forEach((e) => {
              u.prepend(a.slides[e]);
            }),
          y &&
            f.forEach((e) => {
              u.append(a.slides[e]);
            }),
          a.recalcSlides(),
          h.watchSlidesProgress && a.updateSlidesOffset(),
          t)
        )
          if (m.length > 0 && b)
            if (void 0 === e) {
              const e = a.slidesGrid[v],
                t = a.slidesGrid[v + w] - e;
              o
                ? a.setTranslate(a.translate - t)
                : (a.slideTo(v + w, 0, !1, !0),
                  i &&
                    (a.touches[a.isHorizontal() ? "startX" : "startY"] += t));
            } else i && a.slideToLoop(e, 0, !1, !0);
          else if (f.length > 0 && y)
            if (void 0 === e) {
              const e = a.slidesGrid[v],
                t = a.slidesGrid[v - S] - e;
              o
                ? a.setTranslate(a.translate - t)
                : (a.slideTo(v - S, 0, !1, !0),
                  i &&
                    (a.touches[a.isHorizontal() ? "startX" : "startY"] += t));
            } else a.slideToLoop(e, 0, !1, !0);
        if (
          ((a.allowSlidePrev = c),
          (a.allowSlideNext = d),
          a.controller && a.controller.control && !r)
        ) {
          const t = {
            slideRealIndex: e,
            slideTo: !1,
            direction: s,
            setTranslate: i,
            activeSlideIndex: n,
            byController: !0,
          };
          Array.isArray(a.controller.control)
            ? a.controller.control.forEach((e) => {
                !e.destroyed && e.params.loop && e.loopFix(t);
              })
            : a.controller.control instanceof a.constructor &&
              a.controller.control.params.loop &&
              a.controller.control.loopFix(t);
        }
        a.emit("loopFix");
      },
      loopDestroy: function () {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        e.recalcSlides();
        const i = [];
        e.slides.forEach((e) => {
          const t =
            void 0 === e.swiperSlideIndex
              ? 1 * e.getAttribute("data-swiper-slide-index")
              : e.swiperSlideIndex;
          i[t] = e;
        }),
          e.slides.forEach((e) => {
            e.removeAttribute("data-swiper-slide-index");
          }),
          i.forEach((e) => {
            s.append(e);
          }),
          e.recalcSlides(),
          e.slideTo(e.realIndex, 0);
      },
    };
    function U(e) {
      const t = this,
        s = w(),
        i = E(),
        n = t.touchEventsData;
      n.evCache.push(e);
      const { params: r, touches: o, enabled: a } = t;
      if (!a) return;
      if (!r.simulateTouch && "mouse" === e.pointerType) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = l.target;
      if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(c)) return;
      if ("which" in l && 3 === l.which) return;
      if ("button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      const d = !!r.noSwipingClass && "" !== r.noSwipingClass,
        u = e.composedPath ? e.composedPath() : e.path;
      d && l.target && l.target.shadowRoot && u && (c = u[0]);
      const h = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        p = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (p
          ? (function (e, t = this) {
              return (function t(s) {
                if (!s || s === w() || s === E()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t);
            })(h, c)
          : c.closest(h))
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)) return;
      (o.currentX = l.pageX), (o.currentY = l.pageY);
      const g = o.currentX,
        m = o.currentY,
        f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (f && (g <= v || g >= i.innerWidth - v)) {
        if ("prevent" !== f) return;
        e.preventDefault();
      }
      Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
        (o.startX = g),
        (o.startY = m),
        (n.touchStartTime = C()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1);
      let y = !0;
      c.matches(n.focusableElements) &&
        ((y = !1), "SELECT" === c.nodeName && (n.isTouched = !1)),
        s.activeElement &&
          s.activeElement.matches(n.focusableElements) &&
          s.activeElement !== c &&
          s.activeElement.blur();
      const b = y && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !b) ||
        c.isContentEditable ||
        l.preventDefault(),
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function K(e) {
      const t = w(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: r, rtlTranslate: o, enabled: a } = s;
      if (!a) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      const c = i.evCache.findIndex((e) => e.pointerId === l.pointerId);
      c >= 0 && (i.evCache[c] = l);
      const d = i.evCache.length > 1 ? i.evCache[0] : l,
        u = d.pageX,
        h = d.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = u), void (r.startY = h);
      if (!s.allowTouchMove)
        return (
          l.target.matches(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: u,
              startY: h,
              prevX: s.touches.currentX,
              prevY: s.touches.currentY,
              currentX: u,
              currentY: h,
            }),
            (i.touchStartTime = C()))
          )
        );
      if (n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (h < r.startY && s.translate <= s.maxTranslate()) ||
            (h > r.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (u < r.startX && s.translate <= s.maxTranslate()) ||
          (u > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        t.activeElement &&
        l.target === t.activeElement &&
        l.target.matches(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = u), (r.currentY = h);
      const p = r.currentX - r.startX,
        g = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(p ** 2 + g ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : p * p + g * g >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(g), Math.abs(p))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling ||
          (s.zoom &&
            s.params.zoom &&
            s.params.zoom.enabled &&
            i.evCache.length > 1))
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation();
      let m = s.isHorizontal() ? p : g,
        f = s.isHorizontal()
          ? r.currentX - r.previousX
          : r.currentY - r.previousY;
      n.oneWayMovement &&
        ((m = Math.abs(m) * (o ? 1 : -1)), (f = Math.abs(f) * (o ? 1 : -1))),
        (r.diff = m),
        (m *= n.touchRatio),
        o && ((m = -m), (f = -f));
      const v = s.touchesDirection;
      (s.swipeDirection = m > 0 ? "prev" : "next"),
        (s.touchesDirection = f > 0 ? "prev" : "next");
      const y = s.params.loop && !n.cssMode;
      if (!i.isMoved) {
        if (
          (y && s.loopFix({ direction: s.swipeDirection }),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating)
        ) {
          const e = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          s.wrapperEl.dispatchEvent(e);
        }
        (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l);
      }
      let b;
      i.isMoved &&
        v !== s.touchesDirection &&
        y &&
        Math.abs(m) >= 1 &&
        (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }),
        (b = !0)),
        s.emit("sliderMove", l),
        (i.isMoved = !0),
        (i.currentTranslate = m + i.startTranslate);
      let S = !0,
        E = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (E = 0),
        m > 0
          ? (y &&
              !b &&
              i.currentTranslate >
                (n.centeredSlides
                  ? s.minTranslate() - s.size / 2
                  : s.minTranslate()) &&
              s.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0,
              }),
            i.currentTranslate > s.minTranslate() &&
              ((S = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + m) ** E)))
          : m < 0 &&
            (y &&
              !b &&
              i.currentTranslate <
                (n.centeredSlides
                  ? s.maxTranslate() + s.size / 2
                  : s.maxTranslate()) &&
              s.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex:
                  s.slides.length -
                  ("auto" === n.slidesPerView
                    ? s.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(n.slidesPerView, 10))),
              }),
            i.currentTranslate < s.maxTranslate() &&
              ((S = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - m) ** E))),
        S && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(m) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function Z(e) {
      const t = this,
        s = t.touchEventsData,
        i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
      if (
        (i >= 0 && s.evCache.splice(i, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
      ) {
        if (
          !(
            "pointercancel" === e.type &&
            (t.browser.isSafari || t.browser.isWebView)
          )
        )
          return;
      }
      const {
        params: n,
        touches: r,
        rtlTranslate: o,
        slidesGrid: a,
        enabled: l,
      } = t;
      if (!l) return;
      if (!n.simulateTouch && "mouse" === e.pointerType) return;
      let c = e;
      if (
        (c.originalEvent && (c = c.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", c),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && n.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      n.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const d = C(),
        u = d - s.touchStartTime;
      if (t.allowClick) {
        const e = c.path || (c.composedPath && c.composedPath());
        t.updateClickedSlide((e && e[0]) || c.target),
          t.emit("tap click", c),
          u < 300 &&
            d - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", c);
      }
      if (
        ((s.lastClickTime = C()),
        x(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === r.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let h;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (h = n.followFinger
          ? o
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        n.cssMode)
      )
        return;
      if (t.params.freeMode && n.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: h });
      let p = 0,
        g = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
      ) {
        const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        void 0 !== a[e + t]
          ? h >= a[e] && h < a[e + t] && ((p = e), (g = a[e + t] - a[e]))
          : h >= a[e] && ((p = e), (g = a[a.length - 1] - a[a.length - 2]));
      }
      let m = null,
        f = null;
      n.rewind &&
        (t.isBeginning
          ? (f =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (m = 0));
      const v = (h - a[p]) / g,
        y = p < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      if (u > n.longSwipesMs) {
        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (v >= n.longSwipesRatio
            ? t.slideTo(n.rewind && t.isEnd ? m : p + y)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (v > 1 - n.longSwipesRatio
              ? t.slideTo(p + y)
              : null !== f && v < 0 && Math.abs(v) > n.longSwipesRatio
              ? t.slideTo(f)
              : t.slideTo(p));
      } else {
        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
          ? c.target === t.navigation.nextEl
            ? t.slideTo(p + y)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== m ? m : p + y),
            "prev" === t.swipeDirection && t.slideTo(null !== f ? f : p));
      }
    }
    let J;
    function Q() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e,
        o = e.virtual && e.params.virtual.enabled;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
      const a = o && t.loop;
      !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
      !e.isEnd ||
      e.isBeginning ||
      e.params.centeredSlides ||
      a
        ? e.params.loop && !o
          ? e.slideToLoop(e.realIndex, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0)
        : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          (clearTimeout(J),
          (J = setTimeout(() => {
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.resume();
          }, 500))),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function ee(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function te() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    const se = (e, t) => {
      if (!e || e.destroyed || !e.params) return;
      const s = t.closest(
        e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
      );
      if (s) {
        const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        t && t.remove();
      }
    };
    function ie(e) {
      se(this, e.target), this.update();
    }
    let ne = !1;
    function re() {}
    const oe = (e, t) => {
      const s = w(),
        { params: i, el: n, wrapperEl: r, device: o } = e,
        a = !!i.nested,
        l = "on" === t ? "addEventListener" : "removeEventListener",
        c = t;
      n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
        s[l]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
        s[l]("pointerup", e.onTouchEnd, { passive: !0 }),
        s[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerout", e.onTouchEnd, { passive: !0 }),
        s[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
        (i.preventClicks || i.preventClicksPropagation) &&
          n[l]("click", e.onClick, !0),
        i.cssMode && r[l]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[c](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Q,
              !0
            )
          : e[c]("observerUpdate", Q, !0),
        n[l]("load", e.onLoad, { capture: !0 });
    };
    const ae = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const le = {
      init: !0,
      direction: "horizontal",
      oneWayMovement: !1,
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 5,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      loop: !1,
      loopedSlides: null,
      loopPreventsSliding: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideActiveClass: "swiper-slide-active",
      slideVisibleClass: "swiper-slide-visible",
      slideNextClass: "swiper-slide-next",
      slidePrevClass: "swiper-slide-prev",
      wrapperClass: "swiper-wrapper",
      lazyPreloaderClass: "swiper-lazy-preloader",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function ce(e, t) {
      return function (s = {}) {
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                L(t, s))
              : L(t, s))
          : L(t, s);
      };
    }
    const de = {
        eventsEmitter: F,
        update: V,
        translate: j,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode ||
              (s.wrapperEl.style.transitionDuration = `${e}ms`),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              R({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e = !0, t) {
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                R({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: Y,
        loop: X,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            t.isElement && (t.__preventObserver__ = !0),
              (s.style.cursor = "move"),
              (s.style.cursor = e ? "grabbing" : "grab"),
              t.isElement &&
                requestAnimationFrame(() => {
                  t.__preventObserver__ = !1;
                });
          },
          unsetGrabCursor: function () {
            const e = this;
            (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.isElement && (e.__preventObserver__ = !0),
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = ""),
              e.isElement &&
                requestAnimationFrame(() => {
                  e.__preventObserver__ = !1;
                }));
          },
        },
        events: {
          attachEvents: function () {
            const e = this,
              t = w(),
              { params: s } = e;
            (e.onTouchStart = U.bind(e)),
              (e.onTouchMove = K.bind(e)),
              (e.onTouchEnd = Z.bind(e)),
              s.cssMode && (e.onScroll = te.bind(e)),
              (e.onClick = ee.bind(e)),
              (e.onLoad = ie.bind(e)),
              ne || (t.addEventListener("touchstart", re), (ne = !0)),
              oe(e, "on");
          },
          detachEvents: function () {
            oe(this, "off");
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: s, params: i, el: n } = e,
              r = i.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!o || e.currentBreakpoint === o) return;
            const a = (o in r ? r[o] : void 0) || e.originalParams,
              l = ae(e, i),
              c = ae(e, a),
              d = i.enabled;
            l && !c
              ? (n.classList.remove(
                  `${i.containerModifierClass}grid`,
                  `${i.containerModifierClass}grid-column`
                ),
                e.emitContainerClasses())
              : !l &&
                c &&
                (n.classList.add(`${i.containerModifierClass}grid`),
                ((a.grid.fill && "column" === a.grid.fill) ||
                  (!a.grid.fill && "column" === i.grid.fill)) &&
                  n.classList.add(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ["navigation", "pagination", "scrollbar"].forEach((t) => {
                const s = i[t] && i[t].enabled,
                  n = a[t] && a[t].enabled;
                s && !n && e[t].disable(), !s && n && e[t].enable();
              });
            const u = a.direction && a.direction !== i.direction,
              h = i.loop && (a.slidesPerView !== i.slidesPerView || u);
            u && s && e.changeDirection(), L(e.params, a);
            const p = e.params.enabled;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              d && !p ? e.disable() : !d && p && e.enable(),
              (e.currentBreakpoint = o),
              e.emit("_beforeBreakpoint", a),
              h && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
              e.emit("breakpoint", a);
          },
          getBreakpoint: function (e, t = "window", s) {
            if (!e || ("container" === t && !s)) return;
            let i = !1;
            const n = E(),
              r = "window" === t ? n.innerHeight : s.clientHeight,
              o = Object.keys(e).map((e) => {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < o.length; e += 1) {
              const { point: r, value: a } = o[e];
              "window" === t
                ? n.matchMedia(`(min-width: ${a}px)`).matches && (i = r)
                : a <= s.clientWidth && (i = r);
            }
            return i || "max";
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: {
          addClasses: function () {
            const e = this,
              { classNames: t, params: s, rtl: i, el: n, device: r } = e,
              o = (function (e, t) {
                const s = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && s.push(t + i);
                        })
                      : "string" == typeof e && s.push(t + e);
                  }),
                  s
                );
              })(
                [
                  "initialized",
                  s.direction,
                  { "free-mode": e.params.freeMode && s.freeMode.enabled },
                  { autoheight: s.autoHeight },
                  { rtl: i },
                  { grid: s.grid && s.grid.rows > 1 },
                  {
                    "grid-column":
                      s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": s.cssMode },
                  { centered: s.cssMode && s.centeredSlides },
                  { "watch-progress": s.watchSlidesProgress },
                ],
                s.containerModifierClass
              );
            t.push(...o), n.classList.add(...t), e.emitContainerClasses();
          },
          removeClasses: function () {
            const { el: e, classNames: t } = this;
            e.classList.remove(...t), this.emitContainerClasses();
          },
        },
      },
      ue = {};
    class he {
      constructor(...e) {
        let t, s;
        1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
          s || (s = {}),
          (s = L({}, s)),
          t && !s.el && (s.el = t);
        const i = w();
        if (
          s.el &&
          "string" == typeof s.el &&
          i.querySelectorAll(s.el).length > 1
        ) {
          const e = [];
          return (
            i.querySelectorAll(s.el).forEach((t) => {
              const i = L({}, s, { el: t });
              e.push(new he(i));
            }),
            e
          );
        }
        const n = this;
        (n.__swiper__ = !0),
          (n.support = G()),
          (n.device = H({ userAgent: s.userAgent })),
          (n.browser = W()),
          (n.eventsListeners = {}),
          (n.eventsAnyListeners = []),
          (n.modules = [...n.__modules__]),
          s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const r = {};
        n.modules.forEach((e) => {
          e({
            params: s,
            swiper: n,
            extendParams: ce(s, r),
            on: n.on.bind(n),
            once: n.once.bind(n),
            off: n.off.bind(n),
            emit: n.emit.bind(n),
          });
        });
        const o = L({}, le, r);
        return (
          (n.params = L({}, o, ue, s)),
          (n.originalParams = L({}, n.params)),
          (n.passedParams = L({}, s)),
          n.params &&
            n.params.on &&
            Object.keys(n.params.on).forEach((e) => {
              n.on(e, n.params.on[e]);
            }),
          n.params && n.params.onAny && n.onAny(n.params.onAny),
          Object.assign(n, {
            enabled: n.params.enabled,
            el: t,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === n.params.direction,
            isVertical: () => "vertical" === n.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: n.params.allowSlideNext,
            allowSlidePrev: n.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: n.params.focusableElements,
              lastClickTime: C(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              evCache: [],
            },
            allowClick: !0,
            allowTouchMove: n.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          n.emit("_swiper"),
          n.params.init && n.init(),
          n
        );
      }
      getSlideIndex(e) {
        const { slidesEl: t, params: s } = this,
          i = P(k(t, `.${s.slideClass}, swiper-slide`)[0]);
        return P(e) - i;
      }
      getSlideIndexByData(e) {
        return this.getSlideIndex(
          this.slides.filter(
            (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
          )[0]
        );
      }
      recalcSlides() {
        const { slidesEl: e, params: t } = this;
        this.slides = k(e, `.${t.slideClass}, swiper-slide`);
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return t.destroyed
          ? ""
          : e.className
              .split(" ")
              .filter(
                (e) =>
                  0 === e.indexOf("swiper-slide") ||
                  0 === e.indexOf(t.params.slideClass)
              )
              .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.forEach((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e = "current", t = !1) {
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: o,
          activeIndex: a,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = i[a].swiperSlideSize;
          for (let s = a + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
          for (let s = a - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > o && (e = !0));
        } else if ("current" === e)
          for (let e = a + 1; e < i.length; e += 1) {
            (t ? n[e] + r[e] - n[a] < o : n[e] - n[a] < o) && (l += 1);
          }
        else
          for (let e = a - 1; e >= 0; e -= 1) {
            n[a] - n[e] < o && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
            t.complete && se(e, t);
          }),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t = !0) {
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.forEach((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      changeLanguageDirection(e) {
        const t = this;
        (t.rtl && "rtl" === e) ||
          (!t.rtl && "ltr" === e) ||
          ((t.rtl = "rtl" === e),
          (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
          t.rtl
            ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "rtl"))
            : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
              (t.el.dir = "ltr")),
          t.update());
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        let s = e || t.params.el;
        if (("string" == typeof s && (s = document.querySelector(s)), !s))
          return !1;
        (s.swiper = t), s.shadowEl && (t.isElement = !0);
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return k(s, i())[0];
        })();
        return (
          !n &&
            t.params.createElements &&
            ((n = _("div", t.params.wrapperClass)),
            s.append(n),
            k(s, `.${t.params.slideClass}`).forEach((e) => {
              n.append(e);
            })),
          Object.assign(t, {
            el: s,
            wrapperEl: n,
            slidesEl: t.isElement ? s : n,
            mounted: !0,
            rtl: "rtl" === s.dir.toLowerCase() || "rtl" === D(s, "direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === s.dir.toLowerCase() || "rtl" === D(s, "direction")),
            wrongRTL: "-webkit-box" === D(n, "display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete
                ? se(t, e)
                : e.addEventListener("load", (e) => {
                    se(t, e.target);
                  });
            }),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e = !0, t = !0) {
        const s = this,
          { params: i, el: n, wrapperEl: r, slides: o } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttribute("style"),
              r.removeAttribute("style"),
              o &&
                o.length &&
                o.forEach((e) => {
                  e.classList.remove(
                    i.slideVisibleClass,
                    i.slideActiveClass,
                    i.slideNextClass,
                    i.slidePrevClass
                  ),
                    e.removeAttribute("style"),
                    e.removeAttribute("data-swiper-slide-index");
                })),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.el.swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        L(ue, e);
      }
      static get extendedDefaults() {
        return ue;
      }
      static get defaults() {
        return le;
      }
      static installModule(e) {
        he.prototype.__modules__ || (he.prototype.__modules__ = []);
        const t = he.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => he.installModule(e)), he)
          : (he.installModule(e), he);
      }
    }
    Object.keys(de).forEach((e) => {
      Object.keys(de[e]).forEach((t) => {
        he.prototype[t] = de[e][t];
      });
    }),
      he.use([
        function ({ swiper: e, on: t, emit: s }) {
          const i = E();
          let n = null,
            r = null;
          const o = () => {
              e &&
                !e.destroyed &&
                e.initialized &&
                (s("beforeResize"), s("resize"));
            },
            a = () => {
              e && !e.destroyed && e.initialized && s("orientationchange");
            };
          t("init", () => {
            e.params.resizeObserver && void 0 !== i.ResizeObserver
              ? e &&
                !e.destroyed &&
                e.initialized &&
                ((n = new ResizeObserver((t) => {
                  r = i.requestAnimationFrame(() => {
                    const { width: s, height: i } = e;
                    let n = s,
                      r = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: s, target: i }) => {
                        (i && i !== e.el) ||
                          ((n = s ? s.width : (t[0] || t).inlineSize),
                          (r = s ? s.height : (t[0] || t).blockSize));
                      }
                    ),
                      (n === s && r === i) || o();
                  });
                })),
                n.observe(e.el))
              : (i.addEventListener("resize", o),
                i.addEventListener("orientationchange", a));
          }),
            t("destroy", () => {
              r && i.cancelAnimationFrame(r),
                n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                i.removeEventListener("resize", o),
                i.removeEventListener("orientationchange", a);
            });
        },
        function ({ swiper: e, extendParams: t, on: s, emit: i }) {
          const n = [],
            r = E(),
            o = (t, s = {}) => {
              const o = new (r.MutationObserver || r.WebkitMutationObserver)(
                (t) => {
                  if (e.__preventObserver__) return;
                  if (1 === t.length) return void i("observerUpdate", t[0]);
                  const s = function () {
                    i("observerUpdate", t[0]);
                  };
                  r.requestAnimationFrame
                    ? r.requestAnimationFrame(s)
                    : r.setTimeout(s, 0);
                }
              );
              o.observe(t, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData,
              }),
                n.push(o);
            };
          t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            s("init", () => {
              if (e.params.observer) {
                if (e.params.observeParents) {
                  const t = z(e.el);
                  for (let e = 0; e < t.length; e += 1) o(t[e]);
                }
                o(e.el, { childList: e.params.observeSlideChildren }),
                  o(e.wrapperEl, { attributes: !1 });
              }
            }),
            s("destroy", () => {
              n.forEach((e) => {
                e.disconnect();
              }),
                n.splice(0, n.length);
            });
        },
      ]);
    const pe = he;
    function ge(e = "") {
      return `.${e
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`;
    }
    function me({ swiper: e, extendParams: t, on: s, emit: i }) {
      const n = "swiper-pagination";
      let r;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${n}-bullet`,
          bulletActiveClass: `${n}-bullet-active`,
          modifierClass: `${n}-`,
          currentClass: `${n}-current`,
          totalClass: `${n}-total`,
          hiddenClass: `${n}-hidden`,
          progressbarFillClass: `${n}-progressbar-fill`,
          progressbarOppositeClass: `${n}-progressbar-opposite`,
          clickableClass: `${n}-clickable`,
          lockClass: `${n}-lock`,
          horizontalClass: `${n}-horizontal`,
          verticalClass: `${n}-vertical`,
          paginationDisabledClass: `${n}-disabled`,
        },
      }),
        (e.pagination = { el: null, bullets: [] });
      let o = 0;
      const a = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
      function l() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
        );
      }
      function c(t, s) {
        const { bulletActiveClass: i } = e.params.pagination;
        t &&
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          (t.classList.add(`${i}-${s}`),
          (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
            t.classList.add(`${i}-${s}-${s}`));
      }
      function d(t) {
        const s = t.target.closest(ge(e.params.pagination.bulletClass));
        if (!s) return;
        t.preventDefault();
        const i = P(s) * e.params.slidesPerGroup;
        if (e.params.loop) {
          if (e.realIndex === i) return;
          (i < e.loopedSlides || i > e.slides.length - e.loopedSlides) &&
            e.loopFix({
              direction: i < e.loopedSlides ? "prev" : "next",
              activeSlideIndex: i,
              slideTo: !1,
            }),
            e.slideToLoop(i);
        } else e.slideTo(i);
      }
      function u() {
        const t = e.rtl,
          s = e.params.pagination;
        if (l()) return;
        let n,
          d = e.pagination.el;
        d = a(d);
        const u =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          h = e.params.loop
            ? Math.ceil(u / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          ((n = e.params.loop
            ? e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex
            : void 0 !== e.snapIndex
            ? e.snapIndex
            : e.activeIndex || 0),
          "bullets" === s.type &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const i = e.pagination.bullets;
          let a, l, u;
          if (
            (s.dynamicBullets &&
              ((r = q(i[0], e.isHorizontal() ? "width" : "height", !0)),
              d.forEach((t) => {
                t.style[e.isHorizontal() ? "width" : "height"] =
                  r * (s.dynamicMainBullets + 4) + "px";
              }),
              s.dynamicMainBullets > 1 &&
                void 0 !== e.previousIndex &&
                ((o += n - (e.previousIndex || 0)),
                o > s.dynamicMainBullets - 1
                  ? (o = s.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (a = Math.max(n - o, 0)),
              (l = a + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (l + a) / 2)),
            i.forEach((e) => {
              const t = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((e) => `${s.bulletActiveClass}${e}`),
              ]
                .map((e) =>
                  "string" == typeof e && e.includes(" ") ? e.split(" ") : e
                )
                .flat();
              e.classList.remove(...t);
            }),
            d.length > 1)
          )
            i.forEach((e) => {
              const t = P(e);
              t === n && e.classList.add(...s.bulletActiveClass.split(" ")),
                s.dynamicBullets &&
                  (t >= a &&
                    t <= l &&
                    e.classList.add(
                      ...`${s.bulletActiveClass}-main`.split(" ")
                    ),
                  t === a && c(e, "prev"),
                  t === l && c(e, "next"));
            });
          else {
            const e = i[n];
            if (
              (e && e.classList.add(...s.bulletActiveClass.split(" ")),
              s.dynamicBullets)
            ) {
              const e = i[a],
                t = i[l];
              for (let e = a; e <= l; e += 1)
                i[e] &&
                  i[e].classList.add(
                    ...`${s.bulletActiveClass}-main`.split(" ")
                  );
              c(e, "prev"), c(t, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              o = (r * n - r) / 2 - u * r,
              a = t ? "right" : "left";
            i.forEach((t) => {
              t.style[e.isHorizontal() ? a : "top"] = `${o}px`;
            });
          }
        }
        d.forEach((t, r) => {
          if (
            ("fraction" === s.type &&
              (t.querySelectorAll(ge(s.currentClass)).forEach((e) => {
                e.textContent = s.formatFractionCurrent(n + 1);
              }),
              t.querySelectorAll(ge(s.totalClass)).forEach((e) => {
                e.textContent = s.formatFractionTotal(h);
              })),
            "progressbar" === s.type)
          ) {
            let i;
            i = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const r = (n + 1) / h;
            let o = 1,
              a = 1;
            "horizontal" === i ? (o = r) : (a = r),
              t.querySelectorAll(ge(s.progressbarFillClass)).forEach((t) => {
                (t.style.transform = `translate3d(0,0,0) scaleX(${o}) scaleY(${a})`),
                  (t.style.transitionDuration = `${e.params.speed}ms`);
              });
          }
          "custom" === s.type && s.renderCustom
            ? ((t.innerHTML = s.renderCustom(e, n + 1, h)),
              0 === r && i("paginationRender", t))
            : (0 === r && i("paginationRender", t), i("paginationUpdate", t)),
            e.params.watchOverflow &&
              e.enabled &&
              t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
        });
      }
      function h() {
        const t = e.params.pagination;
        if (l()) return;
        const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length;
        let n = e.pagination.el;
        n = a(n);
        let r = "";
        if ("bullets" === t.type) {
          let i = e.params.loop
            ? Math.ceil(s / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
          for (let s = 0; s < i; s += 1)
            t.renderBullet
              ? (r += t.renderBullet.call(e, s, t.bulletClass))
              : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        }
        "fraction" === t.type &&
          (r = t.renderFraction
            ? t.renderFraction.call(e, t.currentClass, t.totalClass)
            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
          "progressbar" === t.type &&
            (r = t.renderProgressbar
              ? t.renderProgressbar.call(e, t.progressbarFillClass)
              : `<span class="${t.progressbarFillClass}"></span>`),
          (e.pagination.bullets = []),
          n.forEach((s) => {
            "custom" !== t.type && (s.innerHTML = r || ""),
              "bullets" === t.type &&
                e.pagination.bullets.push(
                  ...s.querySelectorAll(ge(t.bulletClass))
                );
          }),
          "custom" !== t.type && i("paginationRender", n[0]);
      }
      function p() {
        e.params.pagination = (function (e, t, s, i) {
          return (
            e.params.createElements &&
              Object.keys(i).forEach((n) => {
                if (!s[n] && !0 === s.auto) {
                  let r = k(e.el, `.${i[n]}`)[0];
                  r ||
                    ((r = _("div", i[n])),
                    (r.className = i[n]),
                    e.el.append(r)),
                    (s[n] = r),
                    (t[n] = r);
                }
              }),
            s
          );
        })(e, e.originalParams.pagination, e.params.pagination, {
          el: "swiper-pagination",
        });
        const t = e.params.pagination;
        if (!t.el) return;
        let s;
        "string" == typeof t.el &&
          e.isElement &&
          (s = e.el.shadowRoot.querySelector(t.el)),
          s ||
            "string" != typeof t.el ||
            (s = [...document.querySelectorAll(t.el)]),
          s || (s = t.el),
          s &&
            0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              Array.isArray(s) &&
              s.length > 1 &&
              ((s = [...e.el.querySelectorAll(t.el)]),
              s.length > 1 &&
                (s = s.filter((t) => z(t, ".swiper")[0] === e.el)[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(e.pagination, { el: s }),
            (s = a(s)),
            s.forEach((s) => {
              "bullets" === t.type &&
                t.clickable &&
                s.classList.add(t.clickableClass),
                s.classList.add(t.modifierClass + t.type),
                s.classList.add(
                  e.isHorizontal() ? t.horizontalClass : t.verticalClass
                ),
                "bullets" === t.type &&
                  t.dynamicBullets &&
                  (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                  (o = 0),
                  t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type &&
                  t.progressbarOpposite &&
                  s.classList.add(t.progressbarOppositeClass),
                t.clickable && s.addEventListener("click", d),
                e.enabled || s.classList.add(t.lockClass);
            }));
      }
      function g() {
        const t = e.params.pagination;
        if (l()) return;
        let s = e.pagination.el;
        s &&
          ((s = a(s)),
          s.forEach((s) => {
            s.classList.remove(t.hiddenClass),
              s.classList.remove(t.modifierClass + t.type),
              s.classList.remove(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              t.clickable && s.removeEventListener("click", d);
          })),
          e.pagination.bullets &&
            e.pagination.bullets.forEach((e) =>
              e.classList.remove(...t.bulletActiveClass.split(" "))
            );
      }
      s("init", () => {
        !1 === e.params.pagination.enabled ? m() : (p(), h(), u());
      }),
        s("activeIndexChange", () => {
          void 0 === e.snapIndex && u();
        }),
        s("snapIndexChange", () => {
          u();
        }),
        s("snapGridLengthChange", () => {
          h(), u();
        }),
        s("destroy", () => {
          g();
        }),
        s("enable disable", () => {
          let { el: t } = e.pagination;
          t &&
            ((t = a(t)),
            t.forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.pagination.lockClass
              )
            ));
        }),
        s("lock unlock", () => {
          u();
        }),
        s("click", (t, s) => {
          const n = s.target;
          let { el: r } = e.pagination;
          if (
            (Array.isArray(r) || (r = [r].filter((e) => !!e)),
            e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !n.classList.contains(e.params.pagination.bulletClass))
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                (e.navigation.prevEl && n === e.navigation.prevEl))
            )
              return;
            const t = r[0].classList.contains(e.params.pagination.hiddenClass);
            i(!0 === t ? "paginationShow" : "paginationHide"),
              r.forEach((t) =>
                t.classList.toggle(e.params.pagination.hiddenClass)
              );
          }
        });
      const m = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = a(t)),
          t.forEach((t) =>
            t.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          g();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.el.classList.remove(e.params.pagination.paginationDisabledClass);
          let { el: t } = e.pagination;
          t &&
            ((t = a(t)),
            t.forEach((t) =>
              t.classList.remove(e.params.pagination.paginationDisabledClass)
            )),
            p(),
            h(),
            u();
        },
        disable: m,
        render: h,
        update: u,
        init: p,
        destroy: g,
      });
    }
    function fe({ swiper: e, extendParams: t, on: s, emit: i, params: n }) {
      let r, o;
      (e.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        t({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let a,
        l,
        c,
        d,
        u,
        h,
        p,
        g = n && n.autoplay ? n.autoplay.delay : 3e3,
        m = n && n.autoplay ? n.autoplay.delay : 3e3,
        f = new Date().getTime;
      function v(t) {
        e &&
          !e.destroyed &&
          e.wrapperEl &&
          t.target === e.wrapperEl &&
          (e.wrapperEl.removeEventListener("transitionend", v), C());
      }
      const y = () => {
          if (e.destroyed || !e.autoplay.running) return;
          e.autoplay.paused ? (l = !0) : l && ((m = a), (l = !1));
          const t = e.autoplay.paused ? a : f + m - new Date().getTime();
          (e.autoplay.timeLeft = t),
            i("autoplayTimeLeft", t, t / g),
            (o = requestAnimationFrame(() => {
              y();
            }));
        },
        b = (t) => {
          if (e.destroyed || !e.autoplay.running) return;
          cancelAnimationFrame(o), y();
          let s = void 0 === t ? e.params.autoplay.delay : t;
          (g = e.params.autoplay.delay), (m = e.params.autoplay.delay);
          const n = (() => {
            let t;
            if (
              ((t =
                e.virtual && e.params.virtual.enabled
                  ? e.slides.filter((e) =>
                      e.classList.contains("swiper-slide-active")
                    )[0]
                  : e.slides[e.activeIndex]),
              !t)
            )
              return;
            return parseInt(t.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(n) &&
            n > 0 &&
            void 0 === t &&
            ((s = n), (g = n), (m = n)),
            (a = s);
          const l = e.params.speed,
            c = () => {
              e &&
                !e.destroyed &&
                (e.params.autoplay.reverseDirection
                  ? !e.isBeginning || e.params.loop || e.params.rewind
                    ? (e.slidePrev(l, !0, !0), i("autoplay"))
                    : e.params.autoplay.stopOnLastSlide ||
                      (e.slideTo(e.slides.length - 1, l, !0, !0), i("autoplay"))
                  : !e.isEnd || e.params.loop || e.params.rewind
                  ? (e.slideNext(l, !0, !0), i("autoplay"))
                  : e.params.autoplay.stopOnLastSlide ||
                    (e.slideTo(0, l, !0, !0), i("autoplay")),
                e.params.cssMode &&
                  ((f = new Date().getTime()),
                  requestAnimationFrame(() => {
                    b();
                  })));
            };
          return (
            s > 0
              ? (clearTimeout(r),
                (r = setTimeout(() => {
                  c();
                }, s)))
              : requestAnimationFrame(() => {
                  c();
                }),
            s
          );
        },
        S = () => {
          (e.autoplay.running = !0), b(), i("autoplayStart");
        },
        E = () => {
          (e.autoplay.running = !1),
            clearTimeout(r),
            cancelAnimationFrame(o),
            i("autoplayStop");
        },
        x = (t, s) => {
          if (e.destroyed || !e.autoplay.running) return;
          clearTimeout(r), t || (p = !0);
          const n = () => {
            i("autoplayPause"),
              e.params.autoplay.waitForTransition
                ? e.wrapperEl.addEventListener("transitionend", v)
                : C();
          };
          if (((e.autoplay.paused = !0), s))
            return h && (a = e.params.autoplay.delay), (h = !1), void n();
          const o = a || e.params.autoplay.delay;
          (a = o - (new Date().getTime() - f)),
            (e.isEnd && a < 0 && !e.params.loop) || (a < 0 && (a = 0), n());
        },
        C = () => {
          (e.isEnd && a < 0 && !e.params.loop) ||
            e.destroyed ||
            !e.autoplay.running ||
            ((f = new Date().getTime()),
            p ? ((p = !1), b(a)) : b(),
            (e.autoplay.paused = !1),
            i("autoplayResume"));
        },
        T = () => {
          if (e.destroyed || !e.autoplay.running) return;
          const t = w();
          "hidden" === t.visibilityState && ((p = !0), x(!0)),
            "visible" === t.visibilityState && C();
        },
        O = (e) => {
          "mouse" === e.pointerType && ((p = !0), x(!0));
        },
        L = (t) => {
          "mouse" === t.pointerType && e.autoplay.paused && C();
        };
      s("init", () => {
        e.params.autoplay.enabled &&
          (e.params.autoplay.pauseOnMouseEnter &&
            (e.el.addEventListener("pointerenter", O),
            e.el.addEventListener("pointerleave", L)),
          w().addEventListener("visibilitychange", T),
          (f = new Date().getTime()),
          S());
      }),
        s("destroy", () => {
          e.el.removeEventListener("pointerenter", O),
            e.el.removeEventListener("pointerleave", L),
            w().removeEventListener("visibilitychange", T),
            e.autoplay.running && E();
        }),
        s("beforeTransitionStart", (t, s, i) => {
          !e.destroyed &&
            e.autoplay.running &&
            (i || !e.params.autoplay.disableOnInteraction ? x(!0, !0) : E());
        }),
        s("sliderFirstMove", () => {
          !e.destroyed &&
            e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction
              ? E()
              : ((c = !0),
                (d = !1),
                (p = !1),
                (u = setTimeout(() => {
                  (p = !0), (d = !0), x(!0);
                }, 200))));
        }),
        s("touchEnd", () => {
          if (!e.destroyed && e.autoplay.running && c) {
            if (
              (clearTimeout(u),
              clearTimeout(r),
              e.params.autoplay.disableOnInteraction)
            )
              return (d = !1), void (c = !1);
            d && e.params.cssMode && C(), (d = !1), (c = !1);
          }
        }),
        s("slideChange", () => {
          !e.destroyed && e.autoplay.running && (h = !0);
        }),
        Object.assign(e.autoplay, { start: S, stop: E, pause: x, resume: C });
    }
    function ve(e, t) {
      const s = I(t);
      return (
        s !== t &&
          ((s.style.backfaceVisibility = "hidden"),
          (s.style["-webkit-backface-visibility"] = "hidden")),
        s
      );
    }
    function ye({
      swiper: e,
      duration: t,
      transformElements: s,
      allSlides: i,
    }) {
      const { activeIndex: n } = e;
      if (e.params.virtualTranslate && 0 !== t) {
        let t,
          r = !1;
        (t = i
          ? s
          : s.filter((t) => {
              const s = t.classList.contains("swiper-slide-transform")
                ? ((t) => {
                    if (!t.parentElement)
                      return e.slides.filter(
                        (e) => e.shadowEl && e.shadowEl === t.parentNode
                      )[0];
                    return t.parentElement;
                  })(t)
                : t;
              return e.getSlideIndex(s) === n;
            })),
          t.forEach((t) => {
            !(function (e, t) {
              t &&
                e.addEventListener("transitionend", function s(i) {
                  i.target === e &&
                    (t.call(e, i), e.removeEventListener("transitionend", s));
                });
            })(t, () => {
              if (r) return;
              if (!e || e.destroyed) return;
              (r = !0), (e.animating = !1);
              const t = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0,
              });
              e.wrapperEl.dispatchEvent(t);
            });
          });
      }
    }
    function be({ swiper: e, extendParams: t, on: s }) {
      t({ fadeEffect: { crossFade: !1 } });
      !(function (e) {
        const {
          effect: t,
          swiper: s,
          on: i,
          setTranslate: n,
          setTransition: r,
          overwriteParams: o,
          perspective: a,
          recreateShadows: l,
          getEffectParams: c,
        } = e;
        let d;
        i("beforeInit", () => {
          if (s.params.effect !== t) return;
          s.classNames.push(`${s.params.containerModifierClass}${t}`),
            a &&
              a() &&
              s.classNames.push(`${s.params.containerModifierClass}3d`);
          const e = o ? o() : {};
          Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }),
          i("setTranslate", () => {
            s.params.effect === t && n();
          }),
          i("setTransition", (e, i) => {
            s.params.effect === t && r(i);
          }),
          i("transitionEnd", () => {
            if (s.params.effect === t && l) {
              if (!c || !c().slideShadows) return;
              s.slides.forEach((e) => {
                e.querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                ).forEach((e) => e.remove());
              }),
                l();
            }
          }),
          i("virtualUpdate", () => {
            s.params.effect === t &&
              (s.slides.length || (d = !0),
              requestAnimationFrame(() => {
                d && s.slides && s.slides.length && (n(), (d = !1));
              }));
          });
      })({
        effect: "fade",
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: t } = e;
          e.params.fadeEffect;
          for (let s = 0; s < t.length; s += 1) {
            const t = e.slides[s];
            let i = -t.swiperSlideOffset;
            e.params.virtualTranslate || (i -= e.translate);
            let n = 0;
            e.isHorizontal() || ((n = i), (i = 0));
            const r = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(t.progress), 0)
                : 1 + Math.min(Math.max(t.progress, -1), 0),
              o = ve(0, t);
            (o.style.opacity = r),
              (o.style.transform = `translate3d(${i}px, ${n}px, 0px)`);
          }
        },
        setTransition: (t) => {
          const s = e.slides.map((e) => I(e));
          s.forEach((e) => {
            e.style.transitionDuration = `${t}ms`;
          }),
            ye({ swiper: e, duration: t, transformElements: s, allSlides: !0 });
        },
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    }
    function we() {
      let e = document.querySelectorAll(
        '[class*="__swiper"]:not(.swiper-wrapper)'
      );
      e &&
        e.forEach((e) => {
          e.parentElement.classList.add("swiper"),
            e.classList.add("swiper-wrapper");
          for (const t of e.children) t.classList.add("swiper-slide");
        });
    }
    window.addEventListener("load", function (e) {
      we(),
        document.querySelector(".body-main-slider") &&
          new pe(".body-main-slider", {
            modules: [me, be, fe],
            effect: "fade",
            autoplay: { delay: 3e3, disableOnInteraction: !1 },
            observer: !0,
            observeParents: !0,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: !1,
            speed: 1e3,
            loop: !0,
            preloadImages: !1,
            pagination: { el: ".body-main-slider__controll", clickable: !0 },
            breakpoints: { 320: { autoHeight: !0 }, 992: { autoHeight: !1 } },
            on: {
              init: function () {
                document
                  .querySelectorAll(
                    ".body-main-slider__controll .swiper-pagination-bullet"
                  )
                  .forEach((e, t) => {
                    let s;
                    t < 10 && (s = "0"), (e.innerHTML = `${s}${t + 1}`);
                  });
              },
              breakpoint: function (e, t) {
                !t.autoHeight &&
                  (document.querySelector(
                    ".body-main-slider__swiper"
                  ).style.height = "auto"),
                  e.updateSize();
              },
            },
          });
    });
    var Se = s(807);
    const Ee = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
    const xe =
      "object" == typeof global && global && global.Object === Object && global;
    var Ce = "object" == typeof self && self && self.Object === Object && self;
    const Te = xe || Ce || Function("return this")();
    const Oe = function () {
      return Te.Date.now();
    };
    var Le = /\s/;
    const Me = function (e) {
      for (var t = e.length; t-- && Le.test(e.charAt(t)); );
      return t;
    };
    var Ae = /^\s+/;
    const Ie = function (e) {
      return e ? e.slice(0, Me(e) + 1).replace(Ae, "") : e;
    };
    const ke = Te.Symbol;
    var _e = Object.prototype,
      De = _e.hasOwnProperty,
      Pe = _e.toString,
      ze = ke ? ke.toStringTag : void 0;
    const qe = function (e) {
      var t = De.call(e, ze),
        s = e[ze];
      try {
        e[ze] = void 0;
        var i = !0;
      } catch (e) {}
      var n = Pe.call(e);
      return i && (t ? (e[ze] = s) : delete e[ze]), n;
    };
    var $e = Object.prototype.toString;
    const Be = function (e) {
      return $e.call(e);
    };
    var Ne = ke ? ke.toStringTag : void 0;
    const Ge = function (e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : Ne && Ne in Object(e)
        ? qe(e)
        : Be(e);
    };
    const He = function (e) {
      return null != e && "object" == typeof e;
    };
    const We = function (e) {
      return "symbol" == typeof e || (He(e) && "[object Symbol]" == Ge(e));
    };
    var Fe = /^[-+]0x[0-9a-f]+$/i,
      Ve = /^0b[01]+$/i,
      je = /^0o[0-7]+$/i,
      Re = parseInt;
    const Ye = function (e) {
      if ("number" == typeof e) return e;
      if (We(e)) return NaN;
      if (Ee(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = Ee(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = Ie(e);
      var s = Ve.test(e);
      return s || je.test(e)
        ? Re(e.slice(2), s ? 2 : 8)
        : Fe.test(e)
        ? NaN
        : +e;
    };
    var Xe = Math.max,
      Ue = Math.min;
    const Ke = function (e, t, s) {
      var i,
        n,
        r,
        o,
        a,
        l,
        c = 0,
        d = !1,
        u = !1,
        h = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      function p(t) {
        var s = i,
          r = n;
        return (i = n = void 0), (c = t), (o = e.apply(r, s));
      }
      function g(e) {
        var s = e - l;
        return void 0 === l || s >= t || s < 0 || (u && e - c >= r);
      }
      function m() {
        var e = Oe();
        if (g(e)) return f(e);
        a = setTimeout(
          m,
          (function (e) {
            var s = t - (e - l);
            return u ? Ue(s, r - (e - c)) : s;
          })(e)
        );
      }
      function f(e) {
        return (a = void 0), h && i ? p(e) : ((i = n = void 0), o);
      }
      function v() {
        var e = Oe(),
          s = g(e);
        if (((i = arguments), (n = this), (l = e), s)) {
          if (void 0 === a)
            return (function (e) {
              return (c = e), (a = setTimeout(m, t)), d ? p(e) : o;
            })(l);
          if (u) return clearTimeout(a), (a = setTimeout(m, t)), p(l);
        }
        return void 0 === a && (a = setTimeout(m, t)), o;
      }
      return (
        (t = Ye(t) || 0),
        Ee(s) &&
          ((d = !!s.leading),
          (r = (u = "maxWait" in s) ? Xe(Ye(s.maxWait) || 0, t) : r),
          (h = "trailing" in s ? !!s.trailing : h)),
        (v.cancel = function () {
          void 0 !== a && clearTimeout(a), (c = 0), (i = l = n = a = void 0);
        }),
        (v.flush = function () {
          return void 0 === a ? o : f(Oe());
        }),
        v
      );
    };
    const Ze = function (e, t, s) {
      var i = !0,
        n = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        Ee(s) &&
          ((i = "leading" in s ? !!s.leading : i),
          (n = "trailing" in s ? !!s.trailing : n)),
        Ke(e, t, { leading: i, maxWait: t, trailing: n })
      );
    };
    var Je = function () {
        return (
          (Je =
            Object.assign ||
            function (e) {
              for (var t, s = 1, i = arguments.length; s < i; s++)
                for (var n in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          Je.apply(this, arguments)
        );
      },
      Qe = null,
      et = null;
    function tt() {
      if (null === Qe) {
        if ("undefined" == typeof document) return (Qe = 0);
        var e = document.body,
          t = document.createElement("div");
        t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
        var s = t.getBoundingClientRect().right;
        e.removeChild(t), (Qe = s);
      }
      return Qe;
    }
    function st(e) {
      return e && e.ownerDocument && e.ownerDocument.defaultView
        ? e.ownerDocument.defaultView
        : window;
    }
    function it(e) {
      return e && e.ownerDocument ? e.ownerDocument : document;
    }
    Se &&
      window.addEventListener("resize", function () {
        et !== window.devicePixelRatio &&
          ((et = window.devicePixelRatio), (Qe = null));
      });
    var nt = function (e) {
      return Array.prototype.reduce.call(
        e,
        function (e, t) {
          var s = t.name.match(/data-simplebar-(.+)/);
          if (s) {
            var i = s[1].replace(/\W+(.)/g, function (e, t) {
              return t.toUpperCase();
            });
            switch (t.value) {
              case "true":
                e[i] = !0;
                break;
              case "false":
                e[i] = !1;
                break;
              case void 0:
                e[i] = !0;
                break;
              default:
                e[i] = t.value;
            }
          }
          return e;
        },
        {}
      );
    };
    function rt(e, t) {
      var s;
      e && (s = e.classList).add.apply(s, t.split(" "));
    }
    function ot(e, t) {
      e &&
        t.split(" ").forEach(function (t) {
          e.classList.remove(t);
        });
    }
    function at(e) {
      return ".".concat(e.split(" ").join("."));
    }
    var lt = Object.freeze({
        __proto__: null,
        getElementWindow: st,
        getElementDocument: it,
        getOptions: nt,
        addClasses: rt,
        removeClasses: ot,
        classNamesToQuery: at,
      }),
      ct = st,
      dt = it,
      ut = nt,
      ht = rt,
      pt = ot,
      gt = at,
      mt = (function () {
        function e(t, s) {
          void 0 === s && (s = {});
          var i = this;
          if (
            ((this.removePreventClickId = null),
            (this.minScrollbarWidth = 20),
            (this.stopScrollDelay = 175),
            (this.isScrolling = !1),
            (this.isMouseEntering = !1),
            (this.scrollXTicking = !1),
            (this.scrollYTicking = !1),
            (this.wrapperEl = null),
            (this.contentWrapperEl = null),
            (this.contentEl = null),
            (this.offsetEl = null),
            (this.maskEl = null),
            (this.placeholderEl = null),
            (this.heightAutoObserverWrapperEl = null),
            (this.heightAutoObserverEl = null),
            (this.rtlHelpers = null),
            (this.scrollbarWidth = 0),
            (this.resizeObserver = null),
            (this.mutationObserver = null),
            (this.elStyles = null),
            (this.isRtl = null),
            (this.mouseX = 0),
            (this.mouseY = 0),
            (this.onMouseMove = function () {}),
            (this.onWindowResize = function () {}),
            (this.onStopScrolling = function () {}),
            (this.onMouseEntered = function () {}),
            (this.onScroll = function () {
              var e = ct(i.el);
              i.scrollXTicking ||
                (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
                i.scrollYTicking ||
                  (e.requestAnimationFrame(i.scrollY), (i.scrollYTicking = !0)),
                i.isScrolling ||
                  ((i.isScrolling = !0), ht(i.el, i.classNames.scrolling)),
                i.showScrollbar("x"),
                i.showScrollbar("y"),
                i.onStopScrolling();
            }),
            (this.scrollX = function () {
              i.axis.x.isOverflowing && i.positionScrollbar("x"),
                (i.scrollXTicking = !1);
            }),
            (this.scrollY = function () {
              i.axis.y.isOverflowing && i.positionScrollbar("y"),
                (i.scrollYTicking = !1);
            }),
            (this._onStopScrolling = function () {
              pt(i.el, i.classNames.scrolling),
                i.options.autoHide &&
                  (i.hideScrollbar("x"), i.hideScrollbar("y")),
                (i.isScrolling = !1);
            }),
            (this.onMouseEnter = function () {
              i.isMouseEntering ||
                (ht(i.el, i.classNames.mouseEntered),
                i.showScrollbar("x"),
                i.showScrollbar("y"),
                (i.isMouseEntering = !0)),
                i.onMouseEntered();
            }),
            (this._onMouseEntered = function () {
              pt(i.el, i.classNames.mouseEntered),
                i.options.autoHide &&
                  (i.hideScrollbar("x"), i.hideScrollbar("y")),
                (i.isMouseEntering = !1);
            }),
            (this._onMouseMove = function (e) {
              (i.mouseX = e.clientX),
                (i.mouseY = e.clientY),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseMoveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseMoveForAxis("y");
            }),
            (this.onMouseLeave = function () {
              i.onMouseMove.cancel(),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  i.onMouseLeaveForAxis("x"),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  i.onMouseLeaveForAxis("y"),
                (i.mouseX = -1),
                (i.mouseY = -1);
            }),
            (this._onWindowResize = function () {
              (i.scrollbarWidth = i.getScrollbarWidth()),
                i.hideNativeScrollbar();
            }),
            (this.onPointerEvent = function (e) {
              var t, s;
              i.axis.x.track.el &&
                i.axis.y.track.el &&
                i.axis.x.scrollbar.el &&
                i.axis.y.scrollbar.el &&
                ((i.axis.x.track.rect =
                  i.axis.x.track.el.getBoundingClientRect()),
                (i.axis.y.track.rect =
                  i.axis.y.track.el.getBoundingClientRect()),
                (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                  (t = i.isWithinBounds(i.axis.x.track.rect)),
                (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                  (s = i.isWithinBounds(i.axis.y.track.rect)),
                (t || s) &&
                  (e.stopPropagation(),
                  "pointerdown" === e.type &&
                    "touch" !== e.pointerType &&
                    (t &&
                      ((i.axis.x.scrollbar.rect =
                        i.axis.x.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.x.scrollbar.rect)
                        ? i.onDragStart(e, "x")
                        : i.onTrackClick(e, "x")),
                    s &&
                      ((i.axis.y.scrollbar.rect =
                        i.axis.y.scrollbar.el.getBoundingClientRect()),
                      i.isWithinBounds(i.axis.y.scrollbar.rect)
                        ? i.onDragStart(e, "y")
                        : i.onTrackClick(e, "y")))));
            }),
            (this.drag = function (t) {
              var s, n, r, o, a, l, c, d, u, h, p;
              if (i.draggedAxis && i.contentWrapperEl) {
                var g = i.axis[i.draggedAxis].track,
                  m =
                    null !==
                      (n =
                        null === (s = g.rect) || void 0 === s
                          ? void 0
                          : s[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== n
                      ? n
                      : 0,
                  f = i.axis[i.draggedAxis].scrollbar,
                  v =
                    null !==
                      (o =
                        null === (r = i.contentWrapperEl) || void 0 === r
                          ? void 0
                          : r[i.axis[i.draggedAxis].scrollSizeAttr]) &&
                    void 0 !== o
                      ? o
                      : 0,
                  y = parseInt(
                    null !==
                      (l =
                        null === (a = i.elStyles) || void 0 === a
                          ? void 0
                          : a[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== l
                      ? l
                      : "0px",
                    10
                  );
                t.preventDefault(), t.stopPropagation();
                var b =
                    ("y" === i.draggedAxis ? t.pageY : t.pageX) -
                    (null !==
                      (d =
                        null === (c = g.rect) || void 0 === c
                          ? void 0
                          : c[i.axis[i.draggedAxis].offsetAttr]) && void 0 !== d
                      ? d
                      : 0) -
                    i.axis[i.draggedAxis].dragOffset,
                  w =
                    ((b = i.isRtl
                      ? (null !==
                          (h =
                            null === (u = g.rect) || void 0 === u
                              ? void 0
                              : u[i.axis[i.draggedAxis].sizeAttr]) &&
                        void 0 !== h
                          ? h
                          : 0) -
                        f.size -
                        b
                      : b) /
                      (m - f.size)) *
                    (v - y);
                "x" === i.draggedAxis &&
                  i.isRtl &&
                  (w = (
                    null === (p = e.getRtlHelpers()) || void 0 === p
                      ? void 0
                      : p.isScrollingToNegative
                  )
                    ? -w
                    : w),
                  (i.contentWrapperEl[i.axis[i.draggedAxis].scrollOffsetAttr] =
                    w);
              }
            }),
            (this.onEndDrag = function (e) {
              var t = dt(i.el),
                s = ct(i.el);
              e.preventDefault(),
                e.stopPropagation(),
                pt(i.el, i.classNames.dragging),
                t.removeEventListener("mousemove", i.drag, !0),
                t.removeEventListener("mouseup", i.onEndDrag, !0),
                (i.removePreventClickId = s.setTimeout(function () {
                  t.removeEventListener("click", i.preventClick, !0),
                    t.removeEventListener("dblclick", i.preventClick, !0),
                    (i.removePreventClickId = null);
                }));
            }),
            (this.preventClick = function (e) {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.el = t),
            (this.options = Je(Je({}, e.defaultOptions), s)),
            (this.classNames = Je(
              Je({}, e.defaultOptions.classNames),
              s.classNames
            )),
            (this.axis = {
              x: {
                scrollOffsetAttr: "scrollLeft",
                sizeAttr: "width",
                scrollSizeAttr: "scrollWidth",
                offsetSizeAttr: "offsetWidth",
                offsetAttr: "left",
                overflowAttr: "overflowX",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
              y: {
                scrollOffsetAttr: "scrollTop",
                sizeAttr: "height",
                scrollSizeAttr: "scrollHeight",
                offsetSizeAttr: "offsetHeight",
                offsetAttr: "top",
                overflowAttr: "overflowY",
                dragOffset: 0,
                isOverflowing: !0,
                forceVisible: !1,
                track: { size: null, el: null, rect: null, isVisible: !1 },
                scrollbar: { size: null, el: null, rect: null, isVisible: !1 },
              },
            }),
            "object" != typeof this.el || !this.el.nodeName)
          )
            throw new Error(
              "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                this.el
              )
            );
          (this.onMouseMove = Ze(this._onMouseMove, 64)),
            (this.onWindowResize = Ke(this._onWindowResize, 64, {
              leading: !0,
            })),
            (this.onStopScrolling = Ke(
              this._onStopScrolling,
              this.stopScrollDelay
            )),
            (this.onMouseEntered = Ke(
              this._onMouseEntered,
              this.stopScrollDelay
            )),
            this.init();
        }
        return (
          (e.getRtlHelpers = function () {
            if (e.rtlHelpers) return e.rtlHelpers;
            var t = document.createElement("div");
            t.innerHTML =
              '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
            var s = t.firstElementChild,
              i = null == s ? void 0 : s.firstElementChild;
            if (!i) return null;
            document.body.appendChild(s), (s.scrollLeft = 0);
            var n = e.getOffset(s),
              r = e.getOffset(i);
            s.scrollLeft = -999;
            var o = e.getOffset(i);
            return (
              document.body.removeChild(s),
              (e.rtlHelpers = {
                isScrollOriginAtZero: n.left !== r.left,
                isScrollingToNegative: r.left !== o.left,
              }),
              e.rtlHelpers
            );
          }),
          (e.prototype.getScrollbarWidth = function () {
            try {
              return (this.contentWrapperEl &&
                "none" ===
                  getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar")
                    .display) ||
                "scrollbarWidth" in document.documentElement.style ||
                "-ms-overflow-style" in document.documentElement.style
                ? 0
                : tt();
            } catch (e) {
              return tt();
            }
          }),
          (e.getOffset = function (e) {
            var t = e.getBoundingClientRect(),
              s = dt(e),
              i = ct(e);
            return {
              top: t.top + (i.pageYOffset || s.documentElement.scrollTop),
              left: t.left + (i.pageXOffset || s.documentElement.scrollLeft),
            };
          }),
          (e.prototype.init = function () {
            Se &&
              (this.initDOM(),
              (this.rtlHelpers = e.getRtlHelpers()),
              (this.scrollbarWidth = this.getScrollbarWidth()),
              this.recalculate(),
              this.initListeners());
          }),
          (e.prototype.initDOM = function () {
            var e, t;
            (this.wrapperEl = this.el.querySelector(
              gt(this.classNames.wrapper)
            )),
              (this.contentWrapperEl =
                this.options.scrollableNode ||
                this.el.querySelector(gt(this.classNames.contentWrapper))),
              (this.contentEl =
                this.options.contentNode ||
                this.el.querySelector(gt(this.classNames.contentEl))),
              (this.offsetEl = this.el.querySelector(
                gt(this.classNames.offset)
              )),
              (this.maskEl = this.el.querySelector(gt(this.classNames.mask))),
              (this.placeholderEl = this.findChild(
                this.wrapperEl,
                gt(this.classNames.placeholder)
              )),
              (this.heightAutoObserverWrapperEl = this.el.querySelector(
                gt(this.classNames.heightAutoObserverWrapperEl)
              )),
              (this.heightAutoObserverEl = this.el.querySelector(
                gt(this.classNames.heightAutoObserverEl)
              )),
              (this.axis.x.track.el = this.findChild(
                this.el,
                ""
                  .concat(gt(this.classNames.track))
                  .concat(gt(this.classNames.horizontal))
              )),
              (this.axis.y.track.el = this.findChild(
                this.el,
                ""
                  .concat(gt(this.classNames.track))
                  .concat(gt(this.classNames.vertical))
              )),
              (this.axis.x.scrollbar.el =
                (null === (e = this.axis.x.track.el) || void 0 === e
                  ? void 0
                  : e.querySelector(gt(this.classNames.scrollbar))) || null),
              (this.axis.y.scrollbar.el =
                (null === (t = this.axis.y.track.el) || void 0 === t
                  ? void 0
                  : t.querySelector(gt(this.classNames.scrollbar))) || null),
              this.options.autoHide ||
                (ht(this.axis.x.scrollbar.el, this.classNames.visible),
                ht(this.axis.y.scrollbar.el, this.classNames.visible));
          }),
          (e.prototype.initListeners = function () {
            var e,
              t = this,
              s = ct(this.el);
            if (
              (this.el.addEventListener("mouseenter", this.onMouseEnter),
              this.el.addEventListener("pointerdown", this.onPointerEvent, !0),
              this.el.addEventListener("mousemove", this.onMouseMove),
              this.el.addEventListener("mouseleave", this.onMouseLeave),
              null === (e = this.contentWrapperEl) ||
                void 0 === e ||
                e.addEventListener("scroll", this.onScroll),
              s.addEventListener("resize", this.onWindowResize),
              this.contentEl)
            ) {
              if (window.ResizeObserver) {
                var i = !1,
                  n = s.ResizeObserver || ResizeObserver;
                (this.resizeObserver = new n(function () {
                  i &&
                    s.requestAnimationFrame(function () {
                      t.recalculate();
                    });
                })),
                  this.resizeObserver.observe(this.el),
                  this.resizeObserver.observe(this.contentEl),
                  s.requestAnimationFrame(function () {
                    i = !0;
                  });
              }
              (this.mutationObserver = new s.MutationObserver(function () {
                s.requestAnimationFrame(function () {
                  t.recalculate();
                });
              })),
                this.mutationObserver.observe(this.contentEl, {
                  childList: !0,
                  subtree: !0,
                  characterData: !0,
                });
            }
          }),
          (e.prototype.recalculate = function () {
            if (
              this.heightAutoObserverEl &&
              this.contentEl &&
              this.contentWrapperEl &&
              this.wrapperEl &&
              this.placeholderEl
            ) {
              var e = ct(this.el);
              (this.elStyles = e.getComputedStyle(this.el)),
                (this.isRtl = "rtl" === this.elStyles.direction);
              var t = this.contentEl.offsetWidth,
                s = this.heightAutoObserverEl.offsetHeight <= 1,
                i = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                n = this.contentWrapperEl.offsetWidth,
                r = this.elStyles.overflowX,
                o = this.elStyles.overflowY;
              (this.contentEl.style.padding = ""
                .concat(this.elStyles.paddingTop, " ")
                .concat(this.elStyles.paddingRight, " ")
                .concat(this.elStyles.paddingBottom, " ")
                .concat(this.elStyles.paddingLeft)),
                (this.wrapperEl.style.margin = "-"
                  .concat(this.elStyles.paddingTop, " -")
                  .concat(this.elStyles.paddingRight, " -")
                  .concat(this.elStyles.paddingBottom, " -")
                  .concat(this.elStyles.paddingLeft));
              var a = this.contentEl.scrollHeight,
                l = this.contentEl.scrollWidth;
              (this.contentWrapperEl.style.height = s ? "auto" : "100%"),
                (this.placeholderEl.style.width = i
                  ? "".concat(t || l, "px")
                  : "auto"),
                (this.placeholderEl.style.height = "".concat(a, "px"));
              var c = this.contentWrapperEl.offsetHeight;
              (this.axis.x.isOverflowing = 0 !== t && l > t),
                (this.axis.y.isOverflowing = a > c),
                (this.axis.x.isOverflowing =
                  "hidden" !== r && this.axis.x.isOverflowing),
                (this.axis.y.isOverflowing =
                  "hidden" !== o && this.axis.y.isOverflowing),
                (this.axis.x.forceVisible =
                  "x" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                (this.axis.y.forceVisible =
                  "y" === this.options.forceVisible ||
                  !0 === this.options.forceVisible),
                this.hideNativeScrollbar();
              var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
              (this.axis.x.isOverflowing =
                this.axis.x.isOverflowing && l > n - u),
                (this.axis.y.isOverflowing =
                  this.axis.y.isOverflowing && a > c - d),
                (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                this.axis.x.scrollbar.el &&
                  (this.axis.x.scrollbar.el.style.width = "".concat(
                    this.axis.x.scrollbar.size,
                    "px"
                  )),
                this.axis.y.scrollbar.el &&
                  (this.axis.y.scrollbar.el.style.height = "".concat(
                    this.axis.y.scrollbar.size,
                    "px"
                  )),
                this.positionScrollbar("x"),
                this.positionScrollbar("y"),
                this.toggleTrackVisibility("x"),
                this.toggleTrackVisibility("y");
            }
          }),
          (e.prototype.getScrollbarSize = function (e) {
            var t, s;
            if (
              (void 0 === e && (e = "y"),
              !this.axis[e].isOverflowing || !this.contentEl)
            )
              return 0;
            var i,
              n = this.contentEl[this.axis[e].scrollSizeAttr],
              r =
                null !==
                  (s =
                    null === (t = this.axis[e].track.el) || void 0 === t
                      ? void 0
                      : t[this.axis[e].offsetSizeAttr]) && void 0 !== s
                  ? s
                  : 0,
              o = r / n;
            return (
              (i = Math.max(~~(o * r), this.options.scrollbarMinSize)),
              this.options.scrollbarMaxSize &&
                (i = Math.min(i, this.options.scrollbarMaxSize)),
              i
            );
          }),
          (e.prototype.positionScrollbar = function (t) {
            var s, i, n;
            void 0 === t && (t = "y");
            var r = this.axis[t].scrollbar;
            if (
              this.axis[t].isOverflowing &&
              this.contentWrapperEl &&
              r.el &&
              this.elStyles
            ) {
              var o = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                a =
                  (null === (s = this.axis[t].track.el) || void 0 === s
                    ? void 0
                    : s[this.axis[t].offsetSizeAttr]) || 0,
                l = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
              (c =
                "x" === t &&
                this.isRtl &&
                (null === (i = e.getRtlHelpers()) || void 0 === i
                  ? void 0
                  : i.isScrollOriginAtZero)
                  ? -c
                  : c),
                "x" === t &&
                  this.isRtl &&
                  (c = (
                    null === (n = e.getRtlHelpers()) || void 0 === n
                      ? void 0
                      : n.isScrollingToNegative
                  )
                    ? c
                    : -c);
              var d = c / (o - l),
                u = ~~((a - r.size) * d);
              (u = "x" === t && this.isRtl ? -u + (a - r.size) : u),
                (r.el.style.transform =
                  "x" === t
                    ? "translate3d(".concat(u, "px, 0, 0)")
                    : "translate3d(0, ".concat(u, "px, 0)"));
            }
          }),
          (e.prototype.toggleTrackVisibility = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e].track.el,
              s = this.axis[e].scrollbar.el;
            t &&
              s &&
              this.contentWrapperEl &&
              (this.axis[e].isOverflowing || this.axis[e].forceVisible
                ? ((t.style.visibility = "visible"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "scroll"),
                  this.el.classList.add(
                    "".concat(this.classNames.scrollable, "-").concat(e)
                  ))
                : ((t.style.visibility = "hidden"),
                  (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                    "hidden"),
                  this.el.classList.remove(
                    "".concat(this.classNames.scrollable, "-").concat(e)
                  )),
              this.axis[e].isOverflowing
                ? (s.style.display = "block")
                : (s.style.display = "none"));
          }),
          (e.prototype.showScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                !this.axis[e].scrollbar.isVisible &&
                (ht(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !0));
          }),
          (e.prototype.hideScrollbar = function (e) {
            void 0 === e && (e = "y"),
              this.axis[e].isOverflowing &&
                this.axis[e].scrollbar.isVisible &&
                (pt(this.axis[e].scrollbar.el, this.classNames.visible),
                (this.axis[e].scrollbar.isVisible = !1));
          }),
          (e.prototype.hideNativeScrollbar = function () {
            this.offsetEl &&
              ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                this.axis.y.isOverflowing || this.axis.y.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"),
              (this.offsetEl.style.bottom =
                this.axis.x.isOverflowing || this.axis.x.forceVisible
                  ? "-".concat(this.scrollbarWidth, "px")
                  : "0px"));
          }),
          (e.prototype.onMouseMoveForAxis = function (e) {
            void 0 === e && (e = "y");
            var t = this.axis[e];
            t.track.el &&
              t.scrollbar.el &&
              ((t.track.rect = t.track.el.getBoundingClientRect()),
              (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
              this.isWithinBounds(t.track.rect)
                ? (this.showScrollbar(e),
                  ht(t.track.el, this.classNames.hover),
                  this.isWithinBounds(t.scrollbar.rect)
                    ? ht(t.scrollbar.el, this.classNames.hover)
                    : pt(t.scrollbar.el, this.classNames.hover))
                : (pt(t.track.el, this.classNames.hover),
                  this.options.autoHide && this.hideScrollbar(e)));
          }),
          (e.prototype.onMouseLeaveForAxis = function (e) {
            void 0 === e && (e = "y"),
              pt(this.axis[e].track.el, this.classNames.hover),
              pt(this.axis[e].scrollbar.el, this.classNames.hover),
              this.options.autoHide && this.hideScrollbar(e);
          }),
          (e.prototype.onDragStart = function (e, t) {
            var s;
            void 0 === t && (t = "y");
            var i = dt(this.el),
              n = ct(this.el),
              r = this.axis[t].scrollbar,
              o = "y" === t ? e.pageY : e.pageX;
            (this.axis[t].dragOffset =
              o -
              ((null === (s = r.rect) || void 0 === s
                ? void 0
                : s[this.axis[t].offsetAttr]) || 0)),
              (this.draggedAxis = t),
              ht(this.el, this.classNames.dragging),
              i.addEventListener("mousemove", this.drag, !0),
              i.addEventListener("mouseup", this.onEndDrag, !0),
              null === this.removePreventClickId
                ? (i.addEventListener("click", this.preventClick, !0),
                  i.addEventListener("dblclick", this.preventClick, !0))
                : (n.clearTimeout(this.removePreventClickId),
                  (this.removePreventClickId = null));
          }),
          (e.prototype.onTrackClick = function (e, t) {
            var s,
              i,
              n,
              r,
              o = this;
            void 0 === t && (t = "y");
            var a = this.axis[t];
            if (
              this.options.clickOnTrack &&
              a.scrollbar.el &&
              this.contentWrapperEl
            ) {
              e.preventDefault();
              var l = ct(this.el);
              this.axis[t].scrollbar.rect =
                a.scrollbar.el.getBoundingClientRect();
              var c =
                  null !==
                    (i =
                      null === (s = this.axis[t].scrollbar.rect) || void 0 === s
                        ? void 0
                        : s[this.axis[t].offsetAttr]) && void 0 !== i
                    ? i
                    : 0,
                d = parseInt(
                  null !==
                    (r =
                      null === (n = this.elStyles) || void 0 === n
                        ? void 0
                        : n[this.axis[t].sizeAttr]) && void 0 !== r
                    ? r
                    : "0px",
                  10
                ),
                u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                h =
                  ("y" === t ? this.mouseY - c : this.mouseX - c) < 0 ? -1 : 1,
                p = -1 === h ? u - d : u + d,
                g = function () {
                  o.contentWrapperEl &&
                    (-1 === h
                      ? u > p &&
                        ((u -= 40),
                        (o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u),
                        l.requestAnimationFrame(g))
                      : u < p &&
                        ((u += 40),
                        (o.contentWrapperEl[o.axis[t].scrollOffsetAttr] = u),
                        l.requestAnimationFrame(g)));
                };
              g();
            }
          }),
          (e.prototype.getContentElement = function () {
            return this.contentEl;
          }),
          (e.prototype.getScrollElement = function () {
            return this.contentWrapperEl;
          }),
          (e.prototype.removeListeners = function () {
            var e = ct(this.el);
            this.el.removeEventListener("mouseenter", this.onMouseEnter),
              this.el.removeEventListener(
                "pointerdown",
                this.onPointerEvent,
                !0
              ),
              this.el.removeEventListener("mousemove", this.onMouseMove),
              this.el.removeEventListener("mouseleave", this.onMouseLeave),
              this.contentWrapperEl &&
                this.contentWrapperEl.removeEventListener(
                  "scroll",
                  this.onScroll
                ),
              e.removeEventListener("resize", this.onWindowResize),
              this.mutationObserver && this.mutationObserver.disconnect(),
              this.resizeObserver && this.resizeObserver.disconnect(),
              this.onMouseMove.cancel(),
              this.onWindowResize.cancel(),
              this.onStopScrolling.cancel(),
              this.onMouseEntered.cancel();
          }),
          (e.prototype.unMount = function () {
            this.removeListeners();
          }),
          (e.prototype.isWithinBounds = function (e) {
            return (
              this.mouseX >= e.left &&
              this.mouseX <= e.left + e.width &&
              this.mouseY >= e.top &&
              this.mouseY <= e.top + e.height
            );
          }),
          (e.prototype.findChild = function (e, t) {
            var s =
              e.matches ||
              e.webkitMatchesSelector ||
              e.mozMatchesSelector ||
              e.msMatchesSelector;
            return Array.prototype.filter.call(e.children, function (e) {
              return s.call(e, t);
            })[0];
          }),
          (e.rtlHelpers = null),
          (e.defaultOptions = {
            forceVisible: !1,
            clickOnTrack: !0,
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            ariaLabel: "scrollable content",
            classNames: {
              contentEl: "simplebar-content",
              contentWrapper: "simplebar-content-wrapper",
              offset: "simplebar-offset",
              mask: "simplebar-mask",
              wrapper: "simplebar-wrapper",
              placeholder: "simplebar-placeholder",
              scrollbar: "simplebar-scrollbar",
              track: "simplebar-track",
              heightAutoObserverWrapperEl:
                "simplebar-height-auto-observer-wrapper",
              heightAutoObserverEl: "simplebar-height-auto-observer",
              visible: "simplebar-visible",
              horizontal: "simplebar-horizontal",
              vertical: "simplebar-vertical",
              hover: "simplebar-hover",
              dragging: "simplebar-dragging",
              scrolling: "simplebar-scrolling",
              scrollable: "simplebar-scrollable",
              mouseEntered: "simplebar-mouse-entered",
            },
            scrollableNode: null,
            contentNode: null,
            autoHide: !0,
          }),
          (e.getOptions = ut),
          (e.helpers = lt),
          e
        );
      })(),
      ft = function (e, t) {
        return (
          (ft =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var s in t)
                Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            }),
          ft(e, t)
        );
      };
    var vt = mt.helpers,
      yt = vt.getOptions,
      bt = vt.addClasses,
      wt = (function (e) {
        function t() {
          for (var s = [], i = 0; i < arguments.length; i++)
            s[i] = arguments[i];
          var n = e.apply(this, s) || this;
          return t.instances.set(s[0], n), n;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Class extends value " +
                  String(t) +
                  " is not a constructor or null"
              );
            function s() {
              this.constructor = e;
            }
            ft(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((s.prototype = t.prototype), new s()));
          })(t, e),
          (t.initDOMLoadedElements = function () {
            document.removeEventListener(
              "DOMContentLoaded",
              this.initDOMLoadedElements
            ),
              window.removeEventListener("load", this.initDOMLoadedElements),
              Array.prototype.forEach.call(
                document.querySelectorAll("[data-simplebar]"),
                function (e) {
                  "init" === e.getAttribute("data-simplebar") ||
                    t.instances.has(e) ||
                    new t(e, yt(e.attributes));
                }
              );
          }),
          (t.removeObserver = function () {
            var e;
            null === (e = t.globalObserver) || void 0 === e || e.disconnect();
          }),
          (t.prototype.initDOM = function () {
            var e,
              t,
              s,
              i = this;
            if (
              !Array.prototype.filter.call(this.el.children, function (e) {
                return e.classList.contains(i.classNames.wrapper);
              }).length
            ) {
              for (
                this.wrapperEl = document.createElement("div"),
                  this.contentWrapperEl = document.createElement("div"),
                  this.offsetEl = document.createElement("div"),
                  this.maskEl = document.createElement("div"),
                  this.contentEl = document.createElement("div"),
                  this.placeholderEl = document.createElement("div"),
                  this.heightAutoObserverWrapperEl =
                    document.createElement("div"),
                  this.heightAutoObserverEl = document.createElement("div"),
                  bt(this.wrapperEl, this.classNames.wrapper),
                  bt(this.contentWrapperEl, this.classNames.contentWrapper),
                  bt(this.offsetEl, this.classNames.offset),
                  bt(this.maskEl, this.classNames.mask),
                  bt(this.contentEl, this.classNames.contentEl),
                  bt(this.placeholderEl, this.classNames.placeholder),
                  bt(
                    this.heightAutoObserverWrapperEl,
                    this.classNames.heightAutoObserverWrapperEl
                  ),
                  bt(
                    this.heightAutoObserverEl,
                    this.classNames.heightAutoObserverEl
                  );
                this.el.firstChild;

              )
                this.contentEl.appendChild(this.el.firstChild);
              this.contentWrapperEl.appendChild(this.contentEl),
                this.offsetEl.appendChild(this.contentWrapperEl),
                this.maskEl.appendChild(this.offsetEl),
                this.heightAutoObserverWrapperEl.appendChild(
                  this.heightAutoObserverEl
                ),
                this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                this.wrapperEl.appendChild(this.maskEl),
                this.wrapperEl.appendChild(this.placeholderEl),
                this.el.appendChild(this.wrapperEl),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.setAttribute("tabindex", "0"),
                null === (t = this.contentWrapperEl) ||
                  void 0 === t ||
                  t.setAttribute("role", "region"),
                null === (s = this.contentWrapperEl) ||
                  void 0 === s ||
                  s.setAttribute("aria-label", this.options.ariaLabel);
            }
            if (!this.axis.x.track.el || !this.axis.y.track.el) {
              var n = document.createElement("div"),
                r = document.createElement("div");
              bt(n, this.classNames.track),
                bt(r, this.classNames.scrollbar),
                n.appendChild(r),
                (this.axis.x.track.el = n.cloneNode(!0)),
                bt(this.axis.x.track.el, this.classNames.horizontal),
                (this.axis.y.track.el = n.cloneNode(!0)),
                bt(this.axis.y.track.el, this.classNames.vertical),
                this.el.appendChild(this.axis.x.track.el),
                this.el.appendChild(this.axis.y.track.el);
            }
            mt.prototype.initDOM.call(this),
              this.el.setAttribute("data-simplebar", "init");
          }),
          (t.prototype.unMount = function () {
            mt.prototype.unMount.call(this), t.instances.delete(this.el);
          }),
          (t.initHtmlApi = function () {
            (this.initDOMLoadedElements =
              this.initDOMLoadedElements.bind(this)),
              "undefined" != typeof MutationObserver &&
                ((this.globalObserver = new MutationObserver(
                  t.handleMutations
                )),
                this.globalObserver.observe(document, {
                  childList: !0,
                  subtree: !0,
                })),
              "complete" === document.readyState ||
              ("loading" !== document.readyState &&
                !document.documentElement.doScroll)
                ? window.setTimeout(this.initDOMLoadedElements)
                : (document.addEventListener(
                    "DOMContentLoaded",
                    this.initDOMLoadedElements
                  ),
                  window.addEventListener("load", this.initDOMLoadedElements));
          }),
          (t.handleMutations = function (e) {
            e.forEach(function (e) {
              e.addedNodes.forEach(function (e) {
                1 === e.nodeType &&
                  (e.hasAttribute("data-simplebar")
                    ? !t.instances.has(e) &&
                      document.documentElement.contains(e) &&
                      new t(e, yt(e.attributes))
                    : e
                        .querySelectorAll("[data-simplebar]")
                        .forEach(function (e) {
                          "init" !== e.getAttribute("data-simplebar") &&
                            !t.instances.has(e) &&
                            document.documentElement.contains(e) &&
                            new t(e, yt(e.attributes));
                        }));
              }),
                e.removedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    ("init" === e.getAttribute("data-simplebar")
                      ? t.instances.has(e) &&
                        !document.documentElement.contains(e) &&
                        t.instances.get(e).unMount()
                      : Array.prototype.forEach.call(
                          e.querySelectorAll('[data-simplebar="init"]'),
                          function (e) {
                            t.instances.has(e) &&
                              !document.documentElement.contains(e) &&
                              t.instances.get(e).unMount();
                          }
                        ));
                });
            });
          }),
          (t.instances = new WeakMap()),
          t
        );
      })(mt);
    Se && wt.initHtmlApi();
    new (s(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class St {
      constructor(e) {
        (this.config = Object.assign({ logging: !0 }, e)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(e) {
        if (e.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${e.length})...`
          ),
            h(
              Array.from(e).map(function (e) {
                return `${
                  e.dataset.watchRoot ? e.dataset.watchRoot : null
                }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
              })
            ).forEach((t) => {
              let s = t.split("|"),
                i = { root: s[0], margin: s[1], threshold: s[2] },
                n = Array.from(e).filter(function (e) {
                  let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                    s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                    n = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                  if (
                    String(t) === i.root &&
                    String(s) === i.margin &&
                    String(n) === i.threshold
                  )
                    return e;
                }),
                r = this.getScrollWatcherConfig(i);
              this.scrollWatcherInit(n, r);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(e) {
        let t = {};
        if (
          (document.querySelector(e.root)
            ? (t.root = document.querySelector(e.root))
            : "null" !== e.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${e.root} нет на странице`
              ),
          (t.rootMargin = e.margin),
          !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
        ) {
          if ("prx" === e.threshold) {
            e.threshold = [];
            for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
          } else e.threshold = e.threshold.split(",");
          return (t.threshold = e.threshold), t;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(e) {
        this.observer = new IntersectionObserver((e, t) => {
          e.forEach((e) => {
            this.scrollWatcherCallback(e, t);
          });
        }, e);
      }
      scrollWatcherInit(e, t) {
        this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
      }
      scrollWatcherIntersecting(e, t) {
        e.isIntersecting
          ? (!t.classList.contains("_watcher-view") &&
              t.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${t.classList}, добавил класс _watcher-view`
            ))
          : (t.classList.contains("_watcher-view") &&
              t.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${t.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(e, t) {
        t.unobserve(e),
          this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
      }
      scrollWatcherLogging(e) {
        this.config.logging && u(`[Наблюдатель]: ${e}`);
      }
      scrollWatcherCallback(e, t) {
        const s = e.target;
        this.scrollWatcherIntersecting(e, s),
          s.hasAttribute("data-watch-once") &&
            e.isIntersecting &&
            this.scrollWatcherOff(s, t),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: e } })
          );
      }
    }
    let Et = !1;
    setTimeout(() => {
      if (Et) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0);
    var xt = function () {
      return (
        (xt =
          Object.assign ||
          function (e) {
            for (var t, s = 1, i = arguments.length; s < i; s++)
              for (var n in (t = arguments[s]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }),
        xt.apply(this, arguments)
      );
    };
    var Ct = "lgAfterAppendSlide",
      Tt = "lgInit",
      Ot = "lgHasVideo",
      Lt = "lgContainerResize",
      Mt = "lgUpdateSlides",
      At = "lgAfterAppendSubHtml",
      It = "lgBeforeOpen",
      kt = "lgAfterOpen",
      _t = "lgSlideItemLoad",
      Dt = "lgBeforeSlide",
      Pt = "lgAfterSlide",
      zt = "lgPosterClick",
      qt = "lgDragStart",
      $t = "lgDragMove",
      Bt = "lgDragEnd",
      Nt = "lgBeforeNextSlide",
      Gt = "lgBeforePrevSlide",
      Ht = "lgBeforeClose",
      Wt = "lgAfterClose",
      Ft = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        resetScrollPosition: !0,
        hideScrollbar: !1,
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        trapFocus: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
        },
      };
    var Vt = (function () {
      function e(e) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(e)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (e.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = (16 * Math.random()) | 0;
              return ("x" == e ? t : (3 & t) | 8).toString(16);
            }
          );
        }),
        (e.prototype._getSelector = function (e, t) {
          return (
            void 0 === t && (t = document),
            "string" != typeof e
              ? e
              : ((t = t || document),
                "#" === e.substring(0, 1)
                  ? t.querySelector(e)
                  : t.querySelectorAll(e))
          );
        }),
        (e.prototype._each = function (e) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, e)
                : e(this.selector, 0),
              this)
            : this;
        }),
        (e.prototype._setCssVendorPrefix = function (e, t, s) {
          var i = t.replace(/-([a-z])/gi, function (e, t) {
            return t.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(i)
            ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = s),
              (e.style["webkit" + i] = s),
              (e.style["moz" + i] = s),
              (e.style["ms" + i] = s),
              (e.style["o" + i] = s))
            : (e.style[i] = s);
        }),
        (e.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (e.prototype.isEventMatched = function (e, t) {
          var s = t.split(".");
          return e
            .split(".")
            .filter(function (e) {
              return e;
            })
            .every(function (e) {
              return -1 !== s.indexOf(e);
            });
        }),
        (e.prototype.attr = function (e, t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.getAttribute(e)
              : ""
            : (this._each(function (s) {
                s.setAttribute(e, t);
              }),
              this);
        }),
        (e.prototype.find = function (e) {
          return jt(this._getSelector(e, this.selector));
        }),
        (e.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? jt(this.selector[0])
            : jt(this.selector);
        }),
        (e.prototype.eq = function (e) {
          return jt(this.selector[e]);
        }),
        (e.prototype.parent = function () {
          return jt(this.selector.parentElement);
        }),
        (e.prototype.get = function () {
          return this._getFirstEl();
        }),
        (e.prototype.removeAttr = function (e) {
          var t = e.split(" ");
          return (
            this._each(function (e) {
              t.forEach(function (t) {
                return e.removeAttribute(t);
              });
            }),
            this
          );
        }),
        (e.prototype.wrap = function (e) {
          if (!this.firstElement) return this;
          var t = document.createElement("div");
          return (
            (t.className = e),
            this.firstElement.parentNode.insertBefore(t, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            t.appendChild(this.firstElement),
            this
          );
        }),
        (e.prototype.addClass = function (e) {
          return (
            void 0 === e && (e = ""),
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.add(e);
              });
            }),
            this
          );
        }),
        (e.prototype.removeClass = function (e) {
          return (
            this._each(function (t) {
              e.split(" ").forEach(function (e) {
                e && t.classList.remove(e);
              });
            }),
            this
          );
        }),
        (e.prototype.hasClass = function (e) {
          return !!this.firstElement && this.firstElement.classList.contains(e);
        }),
        (e.prototype.hasAttribute = function (e) {
          return !!this.firstElement && this.firstElement.hasAttribute(e);
        }),
        (e.prototype.toggleClass = function (e) {
          return this.firstElement
            ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this)
            : this;
        }),
        (e.prototype.css = function (e, t) {
          var s = this;
          return (
            this._each(function (i) {
              s._setCssVendorPrefix(i, e, t);
            }),
            this
          );
        }),
        (e.prototype.on = function (t, s) {
          var i = this;
          return this.selector
            ? (t.split(" ").forEach(function (t) {
                Array.isArray(e.eventListeners[t]) ||
                  (e.eventListeners[t] = []),
                  e.eventListeners[t].push(s),
                  i.selector.addEventListener(t.split(".")[0], s);
              }),
              this)
            : this;
        }),
        (e.prototype.once = function (e, t) {
          var s = this;
          return (
            this.on(e, function () {
              s.off(e), t(e);
            }),
            this
          );
        }),
        (e.prototype.off = function (t) {
          var s = this;
          return this.selector
            ? (Object.keys(e.eventListeners).forEach(function (i) {
                s.isEventMatched(t, i) &&
                  (e.eventListeners[i].forEach(function (e) {
                    s.selector.removeEventListener(i.split(".")[0], e);
                  }),
                  (e.eventListeners[i] = []));
              }),
              this)
            : this;
        }),
        (e.prototype.trigger = function (e, t) {
          if (!this.firstElement) return this;
          var s = new CustomEvent(e.split(".")[0], { detail: t || null });
          return this.firstElement.dispatchEvent(s), this;
        }),
        (e.prototype.load = function (e) {
          var t = this;
          return (
            fetch(e)
              .then(function (e) {
                return e.text();
              })
              .then(function (e) {
                t.selector.innerHTML = e;
              }),
            this
          );
        }),
        (e.prototype.html = function (e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (t) {
                t.innerHTML = e;
              }),
              this);
        }),
        (e.prototype.append = function (e) {
          return (
            this._each(function (t) {
              "string" == typeof e
                ? t.insertAdjacentHTML("beforeend", e)
                : t.appendChild(e);
            }),
            this
          );
        }),
        (e.prototype.prepend = function (e) {
          return (
            this._each(function (t) {
              t.insertAdjacentHTML("afterbegin", e);
            }),
            this
          );
        }),
        (e.prototype.remove = function () {
          return (
            this._each(function (e) {
              e.parentNode.removeChild(e);
            }),
            this
          );
        }),
        (e.prototype.empty = function () {
          return (
            this._each(function (e) {
              e.innerHTML = "";
            }),
            this
          );
        }),
        (e.prototype.scrollTop = function (e) {
          return void 0 !== e
            ? ((document.body.scrollTop = e),
              (document.documentElement.scrollTop = e),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (e.prototype.scrollLeft = function (e) {
          return void 0 !== e
            ? ((document.body.scrollLeft = e),
              (document.documentElement.scrollLeft = e),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (e.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var e = this.firstElement.getBoundingClientRect(),
            t = jt("body").style().marginLeft;
          return {
            left: e.left - parseFloat(t) + this.scrollLeft(),
            top: e.top + this.scrollTop(),
          };
        }),
        (e.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (e.prototype.width = function () {
          var e = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(e.paddingLeft) -
            parseFloat(e.paddingRight)
          );
        }),
        (e.prototype.height = function () {
          var e = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(e.paddingTop) -
            parseFloat(e.paddingBottom)
          );
        }),
        (e.eventListeners = {}),
        e
      );
    })();
    function jt(e) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (e, t) {
            t = t || { bubbles: !1, cancelable: !1, detail: null };
            var s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new Vt(e)
      );
    }
    var Rt = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function Yt(e) {
      return "href" === e
        ? "src"
        : (e = (e =
            (e = e.replace("data-", "")).charAt(0).toLowerCase() +
            e.slice(1)).replace(/-([a-z])/g, function (e) {
            return e[1].toUpperCase();
          }));
    }
    var Xt = function (e, t, s, i) {
        void 0 === s && (s = 0);
        var n = jt(e).attr("data-lg-size") || i;
        if (n) {
          var r = n.split(",");
          if (r[1])
            for (var o = window.innerWidth, a = 0; a < r.length; a++) {
              var l = r[a];
              if (parseInt(l.split("-")[2], 10) > o) {
                n = l;
                break;
              }
              a === r.length - 1 && (n = l);
            }
          var c = n.split("-"),
            d = parseInt(c[0], 10),
            u = parseInt(c[1], 10),
            h = t.width(),
            p = t.height() - s,
            g = Math.min(h, d),
            m = Math.min(p, u),
            f = Math.min(g / d, m / u);
          return { width: d * f, height: u * f };
        }
      },
      Ut = function (e, t, s, i, n) {
        if (n) {
          var r = jt(e).find("img").first();
          if (r.get()) {
            var o = t.get().getBoundingClientRect(),
              a = o.width,
              l = t.height() - (s + i),
              c = r.width(),
              d = r.height(),
              u = r.style(),
              h =
                (a - c) / 2 -
                r.offset().left +
                (parseFloat(u.paddingLeft) || 0) +
                (parseFloat(u.borderLeft) || 0) +
                jt(window).scrollLeft() +
                o.left,
              p =
                (l - d) / 2 -
                r.offset().top +
                (parseFloat(u.paddingTop) || 0) +
                (parseFloat(u.borderTop) || 0) +
                jt(window).scrollTop() +
                s;
            return (
              "translate3d(" +
              (h *= -1) +
              "px, " +
              (p *= -1) +
              "px, 0) scale3d(" +
              c / n.width +
              ", " +
              d / n.height +
              ", 1)"
            );
          }
        }
      },
      Kt = function (e, t, s, i, n, r) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          e +
          "; max-width:" +
          s +
          "; height: " +
          t +
          "; max-height:" +
          i +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (r ? 'title="' + r + '"' : "") +
          ' src="' +
          n +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      Zt = function (e, t, s, i, n, r) {
        var o =
            "<img " +
            s +
            " " +
            (i ? 'srcset="' + i + '"' : "") +
            "  " +
            (n ? 'sizes="' + n + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            e +
            '" src="' +
            t +
            '" />',
          a = "";
        r &&
          (a = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
            var t = "";
            return (
              Object.keys(e).forEach(function (s) {
                t += " " + s + '="' + e[s] + '"';
              }),
              "<source " + t + "></source>"
            );
          }));
        return "" + a + o;
      },
      Jt = function (e) {
        for (var t = [], s = [], i = "", n = 0; n < e.length; n++) {
          var r = e[n].split(" ");
          "" === r[0] && r.splice(0, 1), s.push(r[0]), t.push(r[1]);
        }
        for (var o = window.innerWidth, a = 0; a < t.length; a++)
          if (parseInt(t[a], 10) > o) {
            i = s[a];
            break;
          }
        return i;
      },
      Qt = function (e) {
        return !!e && !!e.complete && 0 !== e.naturalWidth;
      },
      es = function (e, t, s, i, n) {
        return (
          '<div class="lg-video-cont ' +
          (n && n.youtube
            ? "lg-has-youtube"
            : n && n.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          s +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
          i +
          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
          i +
          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (t || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          e +
          '" />\n        </div>'
        );
      },
      ts = function (e) {
        var t = e.querySelectorAll(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
        );
        return [].filter.call(t, function (e) {
          var t = window.getComputedStyle(e);
          return "none" !== t.display && "hidden" !== t.visibility;
        });
      },
      ss = function (e, t, s, i) {
        var n = [],
          r = (function () {
            for (var e = 0, t = 0, s = arguments.length; t < s; t++)
              e += arguments[t].length;
            var i = Array(e),
              n = 0;
            for (t = 0; t < s; t++)
              for (var r = arguments[t], o = 0, a = r.length; o < a; o++, n++)
                i[n] = r[o];
            return i;
          })(Rt, t);
        return (
          [].forEach.call(e, function (e) {
            for (var t = {}, o = 0; o < e.attributes.length; o++) {
              var a = e.attributes[o];
              if (a.specified) {
                var l = Yt(a.name),
                  c = "";
                r.indexOf(l) > -1 && (c = l), c && (t[c] = a.value);
              }
            }
            var d = jt(e),
              u = d.find("img").first().attr("alt"),
              h = d.attr("title"),
              p = i ? d.attr(i) : d.find("img").first().attr("src");
            (t.thumb = p),
              s && !t.subHtml && (t.subHtml = h || u || ""),
              (t.alt = u || h || ""),
              n.push(t);
          }),
          n
        );
      },
      is = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      ns = function (e, t, s) {
        if (!e)
          return t
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (s + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
              );
        var i = e.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
          ),
          n = e.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
          ),
          r = e.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
          );
        return i
          ? { youtube: i }
          : n
          ? { vimeo: n }
          : r
          ? { wistia: r }
          : void 0;
      },
      rs = 0,
      os = (function () {
        function e(e, t) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.bodyPaddingRight = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !e)
          )
            return this;
          if (
            (rs++,
            (this.lgId = rs),
            (this.el = e),
            (this.LGel = jt(e)),
            this.generateSettings(t),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (e.prototype.generateSettings = function (e) {
            if (
              ((this.settings = xt(xt({}, Ft), e)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : is())
            ) {
              var t = xt(
                xt({}, this.settings.mobileSettings),
                this.settings.mobileSettings
              );
              this.settings = xt(xt({}, this.settings), t);
            }
          }),
          (e.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length
              ));
          }),
          (e.prototype.init = function () {
            var e = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(Tt, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (e.prototype.openGalleryOnItemClick = function () {
            for (
              var e = this,
                t = function (t) {
                  var i = s.items[t],
                    n = jt(i),
                    r = Vt.generateUUID();
                  n.attr("data-lg-id", r).on(
                    "click.lgcustom-item-" + r,
                    function (s) {
                      s.preventDefault();
                      var n = e.settings.index || t;
                      e.openGallery(n, i);
                    }
                  );
                },
                s = this,
                i = 0;
              i < this.items.length;
              i++
            )
              t(i);
          }),
          (e.prototype.buildModules = function () {
            var e = this;
            this.settings.plugins.forEach(function (t) {
              e.plugins.push(new t(e, jt));
            });
          }),
          (e.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use"
                )
              : console.error("Please provide a valid license key");
          }),
          (e.prototype.getSlideItem = function (e) {
            return jt(this.getSlideItemId(e));
          }),
          (e.prototype.getSlideItemId = function (e) {
            return "#lg-item-" + this.lgId + "-" + e;
          }),
          (e.prototype.getIdName = function (e) {
            return e + "-" + this.lgId;
          }),
          (e.prototype.getElementById = function (e) {
            return jt("#" + this.getIdName(e));
          }),
          (e.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (e.prototype.buildStructure = function () {
            var e = this;
            if (!(this.$container && this.$container.get())) {
              var t = "",
                s = "";
              this.settings.controls &&
                (t =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="' +
                  this.settings.strings.previousSlide +
                  '" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="' +
                  this.settings.strings.nextSlide +
                  '" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (s =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var i = "";
              this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
              var n = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                r = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                o =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                a =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.closeGallery +
                      '" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                l = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.toggleMaximize +
                    '" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                c =
                  '\n        <div class="' +
                  o +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  n +
                  " " +
                  r +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  i +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  t +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  l +
                  "\n                    " +
                  a +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? s : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? s : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              jt(this.settings.container).append(c),
                document.body !== this.settings.container &&
                  jt(this.settings.container).css("position", "relative"),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms"
                );
              var d = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (d += "lg-grab "),
                this.outer.addClass(d),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms"
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="' +
                      this.settings.strings.download +
                      '" download class="lg-download lg-icon"></a>'
                  ),
                this.counter(),
                jt(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    e.refreshOnResize();
                  }
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (e.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var e = this.galleryItems[this.index].__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var t = this.mediaContainerPosition,
                s = t.top,
                i = t.bottom;
              if (
                ((this.currentImageSize = Xt(
                  this.items[this.index],
                  this.outer,
                  s + i,
                  e && this.settings.videoMaxSize
                )),
                e && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var n = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", n);
              }
              this.LGel.trigger(Lt);
            }
          }),
          (e.prototype.resizeVideoSlide = function (e, t) {
            var s = this.getVideoContStyle(t);
            this.getSlideItem(e).find(".lg-video-cont").attr("style", s);
          }),
          (e.prototype.updateSlides = function (e, t) {
            if (
              (this.index > e.length - 1 && (this.index = e.length - 1),
              1 === e.length && (this.index = 0),
              e.length)
            ) {
              var s = this.galleryItems[t].src;
              (this.galleryItems = e),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var i = 0;
              this.galleryItems.some(function (e, t) {
                return e.src === s && ((i = t), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
                this.loadContent(i, !0),
                this.getSlideItem(i).addClass("lg-current"),
                (this.index = i),
                this.updateCurrentCounter(i),
                this.LGel.trigger(Mt);
            } else this.closeGallery();
          }),
          (e.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var e = jt(this.settings.selectWithin);
                  this.items = e.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return ss(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage
            );
          }),
          (e.prototype.shouldHideScrollbar = function () {
            return (
              this.settings.hideScrollbar &&
              document.body === this.settings.container
            );
          }),
          (e.prototype.hideScrollbar = function () {
            if (this.shouldHideScrollbar()) {
              this.bodyPaddingRight = parseFloat(
                jt("body").style().paddingRight
              );
              var e = document.documentElement.getBoundingClientRect(),
                t = window.innerWidth - e.width;
              jt(document.body).css(
                "padding-right",
                t + this.bodyPaddingRight + "px"
              ),
                jt(document.body).addClass("lg-overlay-open");
            }
          }),
          (e.prototype.resetScrollBar = function () {
            this.shouldHideScrollbar() &&
              (jt(document.body).css(
                "padding-right",
                this.bodyPaddingRight + "px"
              ),
              jt(document.body).removeClass("lg-overlay-open"));
          }),
          (e.prototype.openGallery = function (e, t) {
            var s = this;
            if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.removeClass("lg-hide-items"),
                this.hideScrollbar(),
                this.$container.addClass("lg-show");
              var i = this.getItemsToBeInsertedToDom(e, e);
              this.currentItemsInDom = i;
              var n = "";
              i.forEach(function (e) {
                n = n + '<div id="' + e + '" class="lg-item"></div>';
              }),
                this.$inner.append(n),
                this.addHtml(e);
              var r = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var o = this.mediaContainerPosition,
                a = o.top,
                l = o.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(a, l);
              var c = this.galleryItems[e].__slideVideoInfo;
              this.zoomFromOrigin &&
                t &&
                ((this.currentImageSize = Xt(
                  t,
                  this.outer,
                  a + l,
                  c && this.settings.videoMaxSize
                )),
                (r = Ut(t, this.outer, a, l, this.currentImageSize))),
                (this.zoomFromOrigin && r) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(e).removeClass("lg-complete"));
              var d = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                s.outer.addClass("lg-components-open");
              }, d),
                (this.index = e),
                this.LGel.trigger(It),
                this.getSlideItem(e).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = jt(window).scrollTop()),
                setTimeout(function () {
                  if (s.zoomFromOrigin && r) {
                    var t = s.getSlideItem(e);
                    t.css("transform", r),
                      setTimeout(function () {
                        t
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            s.settings.startAnimationDuration + "ms"
                          ),
                          s.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        t.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    s.$backdrop.addClass("in"),
                      s.$container.addClass("lg-show-in");
                  }, 10),
                    setTimeout(function () {
                      s.settings.trapFocus &&
                        document.body === s.settings.container &&
                        s.trapFocus();
                    }, s.settings.backdropDuration + 50),
                    (s.zoomFromOrigin && r) ||
                      setTimeout(function () {
                        s.outer.addClass("lg-visible");
                      }, s.settings.backdropDuration),
                    s.slide(e, !1, !1, !1),
                    s.LGel.trigger(kt);
                }),
                document.body === this.settings.container &&
                  jt("html").addClass("lg-on");
            }
          }),
          (e.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var e = this.$toolbar.get().clientHeight || 0,
              t = this.outer.find(".lg-components .lg-sub-html").get(),
              s =
                this.settings.defaultCaptionHeight ||
                (t && t.clientHeight) ||
                0,
              i = this.outer.find(".lg-thumb-outer").get();
            return { top: e, bottom: (i ? i.clientHeight : 0) + s };
          }),
          (e.prototype.setMediaContainerPosition = function (e, t) {
            void 0 === e && (e = 0),
              void 0 === t && (t = 0),
              this.$content.css("top", e + "px").css("bottom", t + "px");
          }),
          (e.prototype.hideBars = function () {
            var e = this;
            setTimeout(function () {
              e.outer.removeClass("lg-hide-items"),
                e.settings.hideBarsDelay > 0 &&
                  (e.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      e.outer.removeClass("lg-hide-items"),
                        clearTimeout(e.hideBarTimeout),
                        (e.hideBarTimeout = setTimeout(function () {
                          e.outer.addClass("lg-hide-items");
                        }, e.settings.hideBarsDelay));
                    }
                  ),
                  e.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (e.prototype.initPictureFill = function (e) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [e.get()] });
              } catch (e) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                );
              }
          }),
          (e.prototype.counter = function () {
            if (this.settings.counter) {
              var e =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(e);
            }
          }),
          (e.prototype.addHtml = function (e) {
            var t, s;
            if (
              (this.galleryItems[e].subHtmlUrl
                ? (s = this.galleryItems[e].subHtmlUrl)
                : (t = this.galleryItems[e].subHtml),
              !s)
            )
              if (t) {
                var i = t.substring(0, 1);
                ("." !== i && "#" !== i) ||
                  (t =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? jt(this.items).eq(e).find(t).first().html()
                      : jt(t).first().html());
              } else t = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              s
                ? this.outer.find(".lg-sub-html").load(s)
                : this.outer.find(".lg-sub-html").html(t);
            else {
              var n = jt(this.getSlideItemId(e));
              s
                ? n.load(s)
                : n.append('<div class="lg-sub-html">' + t + "</div>");
            }
            null != t &&
              ("" === t
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(At, { index: e });
          }),
          (e.prototype.preload = function (e) {
            for (
              var t = 1;
              t <= this.settings.preload &&
              !(t >= this.galleryItems.length - e);
              t++
            )
              this.loadContent(e + t, !1);
            for (var s = 1; s <= this.settings.preload && !(e - s < 0); s++)
              this.loadContent(e - s, !1);
          }),
          (e.prototype.getDummyImgStyles = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                margin-left: -" +
                  e.width / 2 +
                  "px;\n                margin-top: -" +
                  e.height / 2 +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getVideoContStyle = function (e) {
            return e
              ? "width:" +
                  e.width +
                  "px;\n                height:" +
                  e.height +
                  "px"
              : "";
          }),
          (e.prototype.getDummyImageContent = function (e, t, s) {
            var i;
            if ((this.settings.dynamic || (i = jt(this.items).eq(t)), i)) {
              var n = void 0;
              if (
                !(n = this.settings.exThumbImage
                  ? i.attr(this.settings.exThumbImage)
                  : i.find("img").first().attr("src"))
              )
                return "";
              var r =
                "<img " +
                s +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                n +
                '" />';
              return (
                e.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                r
              );
            }
            return "";
          }),
          (e.prototype.setImgMarkup = function (e, t, s) {
            var i = this.galleryItems[s],
              n = i.alt,
              r = i.srcset,
              o = i.sizes,
              a = i.sources,
              l = n ? 'alt="' + n + '"' : "",
              c =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(t, s, l)
                  : Zt(s, e, l, r, o, a)) +
                "</picture>";
            t.prepend(c);
          }),
          (e.prototype.onSlideObjectLoad = function (e, t, s, i) {
            var n = e.find(".lg-object").first();
            Qt(n.get()) || t
              ? s()
              : (n.on("load.lg error.lg", function () {
                  s && s();
                }),
                n.on("error.lg", function () {
                  i && i();
                }));
          }),
          (e.prototype.onLgObjectLoad = function (e, t, s, i, n, r) {
            var o = this;
            this.onSlideObjectLoad(
              e,
              r,
              function () {
                o.triggerSlideItemLoad(e, t, s, i, n);
              },
              function () {
                e.addClass("lg-complete lg-complete_"),
                  e.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                  );
              }
            );
          }),
          (e.prototype.triggerSlideItemLoad = function (e, t, s, i, n) {
            var r = this,
              o = this.galleryItems[t],
              a = n && "video" === this.getSlideType(o) && !o.poster ? i : 0;
            setTimeout(function () {
              e.addClass("lg-complete lg-complete_"),
                r.LGel.trigger(_t, {
                  index: t,
                  delay: s || 0,
                  isFirstSlide: n,
                });
            }, a);
          }),
          (e.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (e.prototype.addSlideVideoInfo = function (e) {
            var t = this;
            e.forEach(function (e, s) {
              (e.__slideVideoInfo = ns(e.src, !!e.video, s)),
                e.__slideVideoInfo &&
                  t.settings.loadYouTubePoster &&
                  !e.poster &&
                  e.__slideVideoInfo.youtube &&
                  (e.poster =
                    "//img.youtube.com/vi/" +
                    e.__slideVideoInfo.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (e.prototype.loadContent = function (e, t) {
            var s = this,
              i = this.galleryItems[e],
              n = jt(this.getSlideItemId(e)),
              r = i.poster,
              o = i.srcset,
              a = i.sizes,
              l = i.sources,
              c = i.src,
              d = i.video,
              u = d && "string" == typeof d ? JSON.parse(d) : d;
            if (i.responsive) {
              var h = i.responsive.split(",");
              c = Jt(h) || c;
            }
            var p = i.__slideVideoInfo,
              g = "",
              m = !!i.iframe,
              f = !this.lGalleryOn,
              v = 0;
            if (
              (f &&
                (v =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !n.hasClass("lg-loaded"))
            ) {
              if (p) {
                var y = this.mediaContainerPosition,
                  b = y.top,
                  w = y.bottom,
                  S = Xt(
                    this.items[e],
                    this.outer,
                    b + w,
                    p && this.settings.videoMaxSize
                  );
                g = this.getVideoContStyle(S);
              }
              if (m) {
                var E = Kt(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  c,
                  i.iframeTitle
                );
                n.prepend(E);
              } else if (r) {
                var x = "";
                f &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (x = this.getDummyImageContent(n, e, ""));
                E = es(r, x || "", g, this.settings.strings.playVideo, p);
                n.prepend(E);
              } else if (p) {
                E = '<div class="lg-video-cont " style="' + g + '"></div>';
                n.prepend(E);
              } else if ((this.setImgMarkup(c, n, e), o || l)) {
                var C = n.find(".lg-object");
                this.initPictureFill(C);
              }
              (r || p) &&
                this.LGel.trigger(Ot, {
                  index: e,
                  src: c,
                  html5Video: u,
                  hasPoster: !!r,
                }),
                this.LGel.trigger(Ct, { index: e }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(e);
            }
            var T = 0;
            v && !jt(document.body).hasClass("lg-from-hash") && (T = v),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  n.removeClass(
                    "lg-start-end-progress lg-start-progress"
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                n.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if ("image" === s.getSlideType(i)) {
                      var t = i.alt,
                        d = t ? 'alt="' + t + '"' : "";
                      if (
                        (n
                          .find(".lg-img-wrap")
                          .append(Zt(e, c, d, o, a, i.sources)),
                        o || l)
                      ) {
                        var u = n.find(".lg-object");
                        s.initPictureFill(u);
                      }
                    }
                    ("image" === s.getSlideType(i) ||
                      ("video" === s.getSlideType(i) && r)) &&
                      (s.onLgObjectLoad(n, e, v, T, !0, !1),
                      s.onSlideObjectLoad(
                        n,
                        !(!p || !p.html5 || r),
                        function () {
                          s.loadContentOnFirstSlideLoad(e, n, T);
                        },
                        function () {
                          s.loadContentOnFirstSlideLoad(e, n, T);
                        }
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              n.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(i) || r)) ||
                this.onLgObjectLoad(n, e, v, T, f, !(!p || !p.html5 || r)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !n.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  n.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === t &&
                (n.hasClass("lg-complete_")
                  ? this.preload(e)
                  : n
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        s.preload(e);
                      }));
          }),
          (e.prototype.loadContentOnFirstSlideLoad = function (e, t, s) {
            var i = this;
            setTimeout(function () {
              t.find(".lg-dummy-img").remove(),
                t.removeClass("lg-first-slide"),
                i.outer.removeClass("lg-first-slide-loading"),
                (i.isDummyImageRemoved = !0),
                i.preload(e);
            }, s + 300);
          }),
          (e.prototype.getItemsToBeInsertedToDom = function (e, t, s) {
            var i = this;
            void 0 === s && (s = 0);
            var n = [],
              r = Math.max(s, 3);
            r = Math.min(r, this.galleryItems.length);
            var o = "lg-item-" + this.lgId + "-" + t;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (e, t) {
                  n.push("lg-item-" + i.lgId + "-" + t);
                }),
                n
              );
            if (e < (this.galleryItems.length - 1) / 2) {
              for (var a = e; a > e - r / 2 && a >= 0; a--)
                n.push("lg-item-" + this.lgId + "-" + a);
              var l = n.length;
              for (a = 0; a < r - l; a++)
                n.push("lg-item-" + this.lgId + "-" + (e + a + 1));
            } else {
              for (
                a = e;
                a <= this.galleryItems.length - 1 && a < e + r / 2;
                a++
              )
                n.push("lg-item-" + this.lgId + "-" + a);
              for (l = n.length, a = 0; a < r - l; a++)
                n.push("lg-item-" + this.lgId + "-" + (e - a - 1));
            }
            return (
              this.settings.loop &&
                (e === this.galleryItems.length - 1
                  ? n.push("lg-item-" + this.lgId + "-0")
                  : 0 === e &&
                    n.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1)
                    )),
              -1 === n.indexOf(o) && n.push("lg-item-" + this.lgId + "-" + t),
              n
            );
          }),
          (e.prototype.organizeSlideItems = function (e, t) {
            var s = this,
              i = this.getItemsToBeInsertedToDom(
                e,
                t,
                this.settings.numberOfSlideItemsInDom
              );
            return (
              i.forEach(function (e) {
                -1 === s.currentItemsInDom.indexOf(e) &&
                  s.$inner.append('<div id="' + e + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (e) {
                -1 === i.indexOf(e) && jt("#" + e).remove();
              }),
              i
            );
          }),
          (e.prototype.getPreviousSlideIndex = function () {
            var e = 0;
            try {
              var t = this.outer.find(".lg-current").first().attr("id");
              e = parseInt(t.split("-")[3]) || 0;
            } catch (t) {
              e = 0;
            }
            return e;
          }),
          (e.prototype.setDownloadValue = function (e) {
            if (this.settings.download) {
              var t = this.galleryItems[e];
              if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var s = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  s.attr("href", t.downloadUrl || t.src),
                  t.download && s.attr("download", t.download);
              }
            }
          }),
          (e.prototype.makeSlideAnimation = function (e, t, s) {
            var i = this;
            this.lGalleryOn && s.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  i.outer.addClass("lg-no-trans"),
                    i.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === e
                      ? (t.addClass("lg-prev-slide"),
                        s.addClass("lg-next-slide"))
                      : (t.addClass("lg-next-slide"),
                        s.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      i.outer.find(".lg-item").removeClass("lg-current"),
                        t.addClass("lg-current"),
                        i.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0
              );
          }),
          (e.prototype.slide = function (e, t, s, i) {
            var n = this,
              r = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
              !this.lGalleryOn || r !== e)
            ) {
              var o = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(e);
                var a = this.getSlideItem(e),
                  l = this.getSlideItem(r),
                  c = this.galleryItems[e],
                  d = c.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(c)),
                  this.setDownloadValue(e),
                  d)
                ) {
                  var u = this.mediaContainerPosition,
                    h = u.top,
                    p = u.bottom,
                    g = Xt(
                      this.items[e],
                      this.outer,
                      h + p,
                      d && this.settings.videoMaxSize
                    );
                  this.resizeVideoSlide(e, g);
                }
                if (
                  (this.LGel.trigger(Dt, {
                    prevIndex: r,
                    index: e,
                    fromTouch: !!t,
                    fromThumb: !!s,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(e),
                  i || (e < r ? (i = "prev") : e > r && (i = "next")),
                  t)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var m = void 0,
                    f = void 0;
                  o > 2
                    ? ((m = e - 1),
                      (f = e + 1),
                      ((0 === e && r === o - 1) || (e === o - 1 && 0 === r)) &&
                        ((f = 0), (m = o - 1)))
                    : ((m = 0), (f = 1)),
                    "prev" === i
                      ? this.getSlideItem(f).addClass("lg-next-slide")
                      : this.getSlideItem(m).addClass("lg-prev-slide"),
                    a.addClass("lg-current");
                } else this.makeSlideAnimation(i, a, l);
                this.lGalleryOn
                  ? setTimeout(function () {
                      n.loadContent(e, !0),
                        ".lg-item" !== n.settings.appendSubHtmlTo &&
                          n.addHtml(e);
                    }, this.settings.speed +
                      50 +
                      (t ? 0 : this.settings.slideDelay))
                  : this.loadContent(e, !0),
                  setTimeout(function () {
                    (n.lgBusy = !1),
                      l.removeClass("lg-slide-progress"),
                      n.LGel.trigger(Pt, {
                        prevIndex: r,
                        index: e,
                        fromTouch: t,
                        fromThumb: s,
                      });
                  }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                    (t ? 0 : this.settings.slideDelay));
              }
              this.index = e;
            }
          }),
          (e.prototype.updateCurrentCounter = function (e) {
            this.getElementById("lg-counter-current").html(e + 1 + "");
          }),
          (e.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + ""
            );
          }),
          (e.prototype.getSlideType = function (e) {
            return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image";
          }),
          (e.prototype.touchMove = function (e, t, s) {
            var i = t.pageX - e.pageX,
              n = t.pageY - e.pageY,
              r = !1;
            if (
              (this.swipeDirection
                ? (r = !0)
                : Math.abs(i) > 15
                ? ((this.swipeDirection = "horizontal"), (r = !0))
                : Math.abs(n) > 15 &&
                  ((this.swipeDirection = "vertical"), (r = !0)),
              r)
            ) {
              var o = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == s || s.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(o, i, 0);
                var a = o.get().offsetWidth,
                  l = (15 * a) / 100 - Math.abs((10 * i) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -a + i - l,
                  0
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    a + i + l,
                    0
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == s || s.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var c = 1 - Math.abs(n) / window.innerHeight;
                this.$backdrop.css("opacity", c);
                var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                this.setTranslate(o, 0, n, d, d),
                  Math.abs(n) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (e.prototype.touchEnd = function (e, t, s) {
            var i,
              n = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                n.$container.removeClass("lg-dragging-vertical"),
                  n.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var r = !0;
                if ("horizontal" === n.swipeDirection) {
                  i = e.pageX - t.pageX;
                  var o = Math.abs(e.pageX - t.pageX);
                  i < 0 && o > n.settings.swipeThreshold
                    ? (n.goToNextSlide(!0), (r = !1))
                    : i > 0 &&
                      o > n.settings.swipeThreshold &&
                      (n.goToPrevSlide(!0), (r = !1));
                } else if ("vertical" === n.swipeDirection) {
                  if (
                    ((i = Math.abs(e.pageY - t.pageY)),
                    n.settings.closable && n.settings.swipeToClose && i > 100)
                  )
                    return void n.closeGallery();
                  n.$backdrop.css("opacity", 1);
                }
                if (
                  (n.outer.find(".lg-item").removeAttr("style"),
                  r && Math.abs(e.pageX - t.pageX) < 5)
                ) {
                  var a = jt(s.target);
                  n.isPosterElement(a) && n.LGel.trigger(zt);
                }
                n.swipeDirection = void 0;
              }),
              setTimeout(function () {
                n.outer.hasClass("lg-dragging") ||
                  "lg-slide" === n.settings.mode ||
                  n.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (e.prototype.enableSwipe = function () {
            var e = this,
              t = {},
              s = {},
              i = !1,
              n = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (s) {
                e.dragOrSwipeEnabled = !0;
                var i = e.getSlideItem(e.index);
                (!jt(s.target).hasClass("lg-item") &&
                  !i.get().contains(s.target)) ||
                  e.outer.hasClass("lg-zoomed") ||
                  e.lgBusy ||
                  1 !== s.touches.length ||
                  ((n = !0),
                  (e.touchAction = "swipe"),
                  e.manageSwipeClass(),
                  (t = {
                    pageX: s.touches[0].pageX,
                    pageY: s.touches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (r) {
                n &&
                  "swipe" === e.touchAction &&
                  1 === r.touches.length &&
                  ((s = {
                    pageX: r.touches[0].pageX,
                    pageY: r.touches[0].pageY,
                  }),
                  e.touchMove(t, s, r),
                  (i = !0));
              }),
              this.$inner.on("touchend.lg", function (r) {
                if ("swipe" === e.touchAction) {
                  if (i) (i = !1), e.touchEnd(s, t, r);
                  else if (n) {
                    var o = jt(r.target);
                    e.isPosterElement(o) && e.LGel.trigger(zt);
                  }
                  (e.touchAction = void 0), (n = !1);
                }
              }));
          }),
          (e.prototype.enableDrag = function () {
            var e = this,
              t = {},
              s = {},
              i = !1,
              n = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (s) {
                e.dragOrSwipeEnabled = !0;
                var n = e.getSlideItem(e.index);
                (jt(s.target).hasClass("lg-item") ||
                  n.get().contains(s.target)) &&
                  (e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    (s.preventDefault(),
                    e.lgBusy ||
                      (e.manageSwipeClass(),
                      (t = { pageX: s.pageX, pageY: s.pageY }),
                      (i = !0),
                      (e.outer.get().scrollLeft += 1),
                      (e.outer.get().scrollLeft -= 1),
                      e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      e.LGel.trigger(qt))));
              }),
              jt(window).on("mousemove.lg.global" + this.lgId, function (r) {
                i &&
                  e.lgOpened &&
                  ((n = !0),
                  (s = { pageX: r.pageX, pageY: r.pageY }),
                  e.touchMove(t, s),
                  e.LGel.trigger($t));
              }),
              jt(window).on("mouseup.lg.global" + this.lgId, function (r) {
                if (e.lgOpened) {
                  var o = jt(r.target);
                  n
                    ? ((n = !1), e.touchEnd(s, t, r), e.LGel.trigger(Bt))
                    : e.isPosterElement(o) && e.LGel.trigger(zt),
                    i &&
                      ((i = !1),
                      e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (e.prototype.triggerPosterClick = function () {
            var e = this;
            this.$inner.on("click.lg", function (t) {
              !e.dragOrSwipeEnabled &&
                e.isPosterElement(jt(t.target)) &&
                e.LGel.trigger(zt);
            });
          }),
          (e.prototype.manageSwipeClass = function () {
            var e = this.index + 1,
              t = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (t = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (e = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
              this.getSlideItem(e).addClass("lg-next-slide");
          }),
          (e.prototype.goToNextSlide = function (e) {
            var t = this,
              s = this.settings.loop;
            e && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(Nt, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : s
                  ? ((this.index = 0),
                    this.LGel.trigger(Nt, { index: this.index }),
                    this.slide(this.index, !!e, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (e.prototype.goToPrevSlide = function (e) {
            var t = this,
              s = this.settings.loop;
            e && this.galleryItems.length < 3 && (s = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(Gt, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : s
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(Gt, { index: this.index, fromTouch: e }),
                    this.slide(this.index, !!e, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !e &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      t.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (e.prototype.keyPress = function () {
            var e = this;
            jt(window).on("keydown.lg.global" + this.lgId, function (t) {
              e.lgOpened &&
                !0 === e.settings.escKey &&
                27 === t.keyCode &&
                (t.preventDefault(),
                e.settings.allowMediaOverlap &&
                e.outer.hasClass("lg-can-toggle") &&
                e.outer.hasClass("lg-components-open")
                  ? e.outer.removeClass("lg-components-open")
                  : e.closeGallery()),
                e.lgOpened &&
                  e.galleryItems.length > 1 &&
                  (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()),
                  39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()));
            });
          }),
          (e.prototype.arrow = function () {
            var e = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              e.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                e.goToNextSlide();
              });
          }),
          (e.prototype.arrowDisable = function (e) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var t = this.getElementById("lg-prev"),
                s = this.getElementById("lg-next");
              e + 1 === this.galleryItems.length
                ? s.attr("disabled", "disabled").addClass("disabled")
                : s.removeAttr("disabled").removeClass("disabled"),
                0 === e
                  ? t.attr("disabled", "disabled").addClass("disabled")
                  : t.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (e.prototype.setTranslate = function (e, t, s, i, n) {
            void 0 === i && (i = 1),
              void 0 === n && (n = 1),
              e.css(
                "transform",
                "translate3d(" +
                  t +
                  "px, " +
                  s +
                  "px, 0px) scale3d(" +
                  i +
                  ", " +
                  n +
                  ", 1)"
              );
          }),
          (e.prototype.mousewheel = function () {
            var e = this,
              t = 0;
            this.outer.on("wheel.lg", function (s) {
              if (s.deltaY && !(e.galleryItems.length < 2)) {
                s.preventDefault();
                var i = new Date().getTime();
                i - t < 1e3 ||
                  ((t = i),
                  s.deltaY > 0
                    ? e.goToNextSlide()
                    : s.deltaY < 0 && e.goToPrevSlide());
              }
            });
          }),
          (e.prototype.isSlideElement = function (e) {
            return (
              e.hasClass("lg-outer") ||
              e.hasClass("lg-item") ||
              e.hasClass("lg-img-wrap")
            );
          }),
          (e.prototype.isPosterElement = function (e) {
            var t = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              e.hasClass("lg-video-poster") ||
              e.hasClass("lg-video-play-button") ||
              (t && t.contains(e.get()))
            );
          }),
          (e.prototype.toggleMaximize = function () {
            var e = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              e.$container.toggleClass("lg-inline"), e.refreshOnResize();
            });
          }),
          (e.prototype.invalidateItems = function () {
            for (var e = 0; e < this.items.length; e++) {
              var t = jt(this.items[e]);
              t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
            }
          }),
          (e.prototype.trapFocus = function () {
            var e = this;
            this.$container.get().focus({ preventScroll: !0 }),
              jt(window).on("keydown.lg.global" + this.lgId, function (t) {
                if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                  var s = ts(e.$container.get()),
                    i = s[0],
                    n = s[s.length - 1];
                  t.shiftKey
                    ? document.activeElement === i &&
                      (n.focus(), t.preventDefault())
                    : document.activeElement === n &&
                      (i.focus(), t.preventDefault());
                }
              });
          }),
          (e.prototype.manageCloseGallery = function () {
            var e = this;
            if (this.settings.closable) {
              var t = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                e.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (s) {
                    var i = jt(s.target);
                    t = !!e.isSlideElement(i);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    t = !1;
                  }),
                  this.outer.on("mouseup.lg", function (s) {
                    var i = jt(s.target);
                    e.isSlideElement(i) &&
                      t &&
                      (e.outer.hasClass("lg-dragging") || e.closeGallery());
                  }));
            }
          }),
          (e.prototype.closeGallery = function (e) {
            var t = this;
            if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
            this.LGel.trigger(Ht),
              this.settings.resetScrollPosition &&
                !this.settings.hideScrollbar &&
                jt(window).scrollTop(this.prevScrollTop);
            var s,
              i = this.items[this.index];
            if (this.zoomFromOrigin && i) {
              var n = this.mediaContainerPosition,
                r = n.top,
                o = n.bottom,
                a = this.galleryItems[this.index],
                l = a.__slideVideoInfo,
                c = a.poster,
                d = Xt(
                  i,
                  this.outer,
                  r + o,
                  l && c && this.settings.videoMaxSize
                );
              s = Ut(i, this.outer, r, o, d);
            }
            this.zoomFromOrigin && s
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms"
                  )
                  .css("transform", s))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              jt("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var u =
              this.zoomFromOrigin && s
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                t.zoomFromOrigin &&
                  s &&
                  t.outer.removeClass("lg-zoom-from-image"),
                  t.$container.removeClass("lg-show"),
                  t.resetScrollBar(),
                  t.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      t.settings.backdropDuration + "ms"
                    ),
                  t.outer.removeClass("lg-closing " + t.settings.startClass),
                  t.getSlideItem(t.index).removeClass("lg-start-end-progress"),
                  t.$inner.empty(),
                  t.lgOpened && t.LGel.trigger(Wt, { instance: t }),
                  t.$container.get() && t.$container.get().blur(),
                  (t.lgOpened = !1);
              }, u + 100),
              u + 100
            );
          }),
          (e.prototype.initModules = function () {
            this.plugins.forEach(function (e) {
              try {
                e.init();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated"
                );
              }
            });
          }),
          (e.prototype.destroyModules = function (e) {
            this.plugins.forEach(function (t) {
              try {
                e ? t.destroy() : t.closeGallery && t.closeGallery();
              } catch (e) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed"
                );
              }
            });
          }),
          (e.prototype.refresh = function (e) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = e || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(Mt);
          }),
          (e.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (e.prototype.destroyGallery = function () {
            this.destroyModules(!0),
              this.settings.dynamic || this.invalidateItems(),
              jt(window).off(".lg.global" + this.lgId),
              this.LGel.off(".lg"),
              this.$container.remove();
          }),
          (e.prototype.destroy = function () {
            var e = this.closeGallery(!0);
            return (
              e
                ? setTimeout(this.destroyGallery.bind(this), e)
                : this.destroyGallery(),
              e
            );
          }),
          e
        );
      })();
    const as = function (e, t) {
      return new os(e, t);
    };
    var ls = s(448);
    window.addEventListener("load", function (e) {
      const t = document.querySelectorAll("[data-bg]");
      t.length &&
        t.forEach((e) => {
          e.insertAdjacentHTML("beforeend", '<div class="bg-item"></div>');
        });
      ls("[data-calendar]", {});
      if (document.querySelector(".video-module")) {
        document.addEventListener("watcherCallback", function (e) {
          const t = e.detail.entry,
            s = t.target;
          "video" !== s.dataset.watch ||
            s.classList.contains("_init") ||
            (t.isIntersecting
              ? s.querySelector("video").play()
              : s.querySelector("video").pause());
        });
        const e = document.querySelector(".video-module");
        e.addEventListener("click", function (t) {
          e.classList.contains("_init")
            ? (e.querySelector("video").paused
                ? e.querySelector("video").play()
                : e.querySelector("video").pause(),
              e.classList.toggle("_active"))
            : ((e.querySelector("video").src =
                e.querySelector("video").dataset.full),
              e.classList.add("_active"),
              e.classList.add("_init"),
              e.querySelector("video").play(),
              (e.querySelector("video").muted = !1));
        });
      }
    }),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      i.any() && document.documentElement.classList.add("touch"),
      (function () {
        let e = document.querySelector(".icon-menu");
        e &&
          e.addEventListener("click", function (e) {
            a && (l(), document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && i.any()) {
          function e() {
            let e = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${e}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      new t({}),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              f.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && f.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                f.formClean(t);
              });
        async function s(t, s) {
          if (0 === (e ? f.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              s.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                n = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                r = new FormData(t);
              t.classList.add("_sending");
              const o = await fetch(e, { method: n, body: r });
              if (o.ok) {
                await o.json();
                t.classList.remove("_sending"), i(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (s.preventDefault(), i(t));
          } else {
            s.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && p(e, !0, 1e3);
          }
        }
        function i(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            f.formClean(e),
            u(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (m.selectModule = new g({})),
      new St({}),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                i = s.dataset.goto ? s.dataset.goto : "",
                n = !!s.hasAttribute("data-goto-header"),
                r = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
              p(i, n, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              const e = s.id,
                i =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })(),
      (function () {
        Et = !0;
        const e = document.querySelector("header.header"),
          t = e.hasAttribute("data-scroll-show"),
          s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
          i = e.dataset.scroll ? e.dataset.scroll : 1;
        let n,
          r = 0;
        document.addEventListener("windowScroll", function (o) {
          const a = window.scrollY;
          clearTimeout(n),
            a >= i
              ? (!e.classList.contains("_header-scroll") &&
                  e.classList.add("_header-scroll"),
                t &&
                  (a > r
                    ? e.classList.contains("_header-show") &&
                      e.classList.remove("_header-show")
                    : !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show"),
                  (n = setTimeout(() => {
                    !e.classList.contains("_header-show") &&
                      e.classList.add("_header-show");
                  }, s))))
              : (e.classList.contains("_header-scroll") &&
                  e.classList.remove("_header-scroll"),
                t &&
                  e.classList.contains("_header-show") &&
                  e.classList.remove("_header-show")),
            (r = a <= 0 ? 0 : a);
        });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-gallery]");
        e.length &&
          e.forEach((e) => {
            as(e, {
              licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
              speed: 500,
            });
          });
      })();
  })();
})();
