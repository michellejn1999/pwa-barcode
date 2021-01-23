(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    46: function (e, t, n) {},
    47: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0),
            a = n.n(r),
            o = n(44),
            c = n.n(o),
            i = n(1),
            l = n(8),
            u = n(45),
            s = n.n(u),
            d = function (e) {
                var t = e.error;
                return a.a.createElement("div", {
                    className: "skeleton__video"
                }, t ? "" : a.a.createElement("div", {
                    className: "skeleton__video--loading"
                }, a.a.createElement(s.a, null)))
            };
        n(46);

        function f(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [],
                    r = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var c, i = e[Symbol.iterator](); !(r = (c = i.next()).done) && (n.push(c.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    a = !0, o = e
                } finally {
                    try {
                        r || null == i.return || i.return()
                    } finally {
                        if (a) throw o
                    }
                }
                return n
            }(e, t) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return m(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }
        var p = Object(i.g)((function (e) {
            var t = e.history,
                n = f(Object(r.useState)(!1), 2),
                o = n[0],
                i = n[1],
                u = f(Object(r.useState)(!1), 2),
                s = u[0],
                m = u[1],
                p = f(Object(r.useState)(0), 2),
                v = p[0],
                b = p[1],
                y = f(Object(r.useState)(null), 2),
                h = y[0],
                E = y[1],
                g = function (e) {
                    c.a.stop(), "not-found" === e ? t.push("/product/".concat(e, "?code=").concat(h)) : t.push("/product/".concat(e))
                },
                _ = function e(t) {
                    c.a.offDetected(e), fetch("https://world.openfoodfacts.org/api/v0/product/".concat(t.codeResult.code, ".json")).then((function (e) {
                        return e.json()
                    })).then((function (e) {
                        return w(e)
                    }))
                },
                w = function (e) {
                    var t = e.status,
                        n = e.code;
                    E(n), b((function (e) {
                        return e + 1
                    })), 1 === t ? g(n) : c.a.onDetected(_)
                };
            return Object(r.useEffect)((function () {
                navigator.mediaDevices && navigator.mediaDevices.getUserMedia && (c.a.init({
                    inputStream: {
                        name: "Live",
                        type: "LiveStream",
                        target: document.querySelector("#video")
                    },
                    numOfWorkers: 1,
                    locate: !0,
                    decoder: {
                        readers: ["ean_reader", "ean_8_reader", "upc_reader", "code_128_reader"]
                    }
                }, (function (e) {
                    e ? m(!0) : (c.a.start(), i(!0))
                })), c.a.onDetected(_))
            }), []), Object(r.useEffect)((function () {
                v > 3 && g("not-found")
            }), [v]), a.a.createElement("div", null, a.a.createElement("div", {
                className: "video__explanation"
            }, a.a.createElement("p", null, "Scan a product's barcode and get its nutritional values ", a.a.createElement("span", {
                role: "img",
                "aria-label": "apple"
            }, "🍎"))), a.a.createElement("div", {
                className: "video__container"
            }, s ? a.a.createElement("div", {
                className: "skeleton__unsopported"
            }, a.a.createElement("div", null, a.a.createElement("p", null, "Your device does not support camera access or something went wrong ", a.a.createElement("span", {
                role: "img",
                "aria-label": "thinking-face"
            }, "🤔")), a.a.createElement("p", null, "You can enter the barcode below"), a.a.createElement(l.a, null))) : a.a.createElement("div", null, a.a.createElement("div", {
                className: "video",
                id: "video"
            }), o ? "" : a.a.createElement(d, null))))
        }));
        t.default = p
    }
}]);
