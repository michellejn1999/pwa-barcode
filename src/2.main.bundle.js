(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    44: function (t, e, n) {
        var r;
        r = function (t) {
            return function (t) {
                function e(r) {
                    if (n[r]) return n[r].exports;
                    var o = n[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports
                }
                var n = {};
                return e.m = t, e.c = n, e.i = function (t) {
                    return t
                }, e.d = function (t, n, r) {
                    e.o(t, n) || Object.defineProperty(t, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, e.n = function (t) {
                    var n = t && t.__esModule ? function () {
                        return t.default
                    } : function () {
                        return t
                    };
                    return e.d(n, "a", n), n
                }, e.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, e.p = "/", e(e.s = 166)
            }([function (t, e) {
                t.exports = function (t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }
            }, function (t, e, n) {
                "use strict";

                function r(t, e) {
                    return this._row = [], this.config = t || {}, this.supplements = e, this
                }
                var o = n(3);
                r.prototype._nextUnset = function (t, e) {
                    var n;
                    for (void 0 === e && (e = 0), n = e; n < t.length; n++)
                        if (!t[n]) return n;
                    return t.length
                }, r.prototype._matchPattern = function (t, e, n) {
                    var r, o, i, a, u = 0,
                        c = 0,
                        s = 0,
                        f = 0;
                    for (n = n || this.SINGLE_CODE_ERROR || 1, r = 0; r < t.length; r++) s += t[r], f += e[r];
                    if (s < f) return Number.MAX_VALUE;
                    for (n *= o = s / f, r = 0; r < t.length; r++) {
                        if (i = t[r], a = e[r] * o, (c = Math.abs(i - a) / a) > n) return Number.MAX_VALUE;
                        u += c
                    }
                    return u / f
                }, r.prototype._nextSet = function (t, e) {
                    var n;
                    for (n = e = e || 0; n < t.length; n++)
                        if (t[n]) return n;
                    return t.length
                }, r.prototype._correctBars = function (t, e, n) {
                    for (var r = n.length, o = 0; r--;)(o = t[n[r]] * (1 - (1 - e) / 2)) > 1 && (t[n[r]] = o)
                }, r.prototype._matchTrace = function (t, e) {
                    var n, r = [],
                        o = this,
                        i = o._nextSet(o._row),
                        a = !o._row[i],
                        u = 0,
                        c = {
                            error: Number.MAX_VALUE,
                            code: -1,
                            start: 0
                        };
                    if (t) {
                        for (n = 0; n < t.length; n++) r.push(0);
                        for (n = i; n < o._row.length; n++)
                            if (o._row[n] ^ a) r[u]++;
                            else {
                                if (u === r.length - 1) return o._matchPattern(r, t) < e ? (c.start = n - i, c.end = n, c.counter = r, c) : null;
                                r[++u] = 1, a = !a
                            }
                    } else
                        for (r.push(0), n = i; n < o._row.length; n++) o._row[n] ^ a ? r[u]++ : (u++, r.push(0), r[u] = 1, a = !a);
                    return c.start = i, c.end = o._row.length - 1, c.counter = r, c
                }, r.prototype.decodePattern = function (t) {
                    var e, n = this;
                    return n._row = t, null === (e = n._decode()) ? (n._row.reverse(), (e = n._decode()) && (e.direction = r.DIRECTION.REVERSE, e.start = n._row.length - e.start, e.end = n._row.length - e.end)) : e.direction = r.DIRECTION.FORWARD, e && (e.format = n.FORMAT), e
                }, r.prototype._matchRange = function (t, e, n) {
                    var r;
                    for (r = t = t < 0 ? 0 : t; r < e; r++)
                        if (this._row[r] !== n) return !1;
                    return !0
                }, r.prototype._fillCounters = function (t, e, n) {
                    var r, o = this,
                        i = 0,
                        a = [];
                    for (n = void 0 === n || n, t = void 0 !== t ? t : o._nextUnset(o._row), e = e || o._row.length, a[i] = 0, r = t; r < e; r++) o._row[r] ^ n ? a[i]++ : (a[++i] = 1, n = !n);
                    return a
                }, r.prototype._toCounters = function (t, e) {
                    var n, r = this,
                        i = e.length,
                        a = r._row.length,
                        u = !r._row[t],
                        c = 0;
                    for (o.a.init(e, 0), n = t; n < a; n++)
                        if (r._row[n] ^ u) e[c]++;
                        else {
                            if (++c === i) break;
                            e[c] = 1, u = !u
                        } return e
                }, Object.defineProperty(r.prototype, "FORMAT", {
                    value: "unknown",
                    writeable: !1
                }), r.DIRECTION = {
                    FORWARD: 1,
                    REVERSE: -1
                }, r.Exception = {
                    StartNotFoundException: "Start-Info was not found!",
                    CodeNotFoundException: "Code could not be found!",
                    PatternNotFoundException: "Pattern could not be found!"
                }, r.CONFIG_KEYS = {}, e.a = r
            }, function (t, e) {
                var n = Array.isArray;
                t.exports = n
            }, function (t, e, n) {
                "use strict";
                e.a = {
                    init: function (t, e) {
                        for (var n = t.length; n--;) t[n] = e
                    },
                    shuffle: function (t) {
                        for (var e, n, r = t.length - 1; r >= 0; r--) e = Math.floor(Math.random() * r), n = t[r], t[r] = t[e], t[e] = n;
                        return t
                    },
                    toPointList: function (t) {
                        var e, n, r = [],
                            o = [];
                        for (e = 0; e < t.length; e++) {
                            for (r = [], n = 0; n < t[e].length; n++) r[n] = t[e][n];
                            o[e] = "[" + r.join(",") + "]"
                        }
                        return "[" + o.join(",\r\n") + "]"
                    },
                    threshold: function (t, e, n) {
                        var r, o = [];
                        for (r = 0; r < t.length; r++) n.apply(t, [t[r]]) >= e && o.push(t[r]);
                        return o
                    },
                    maxIndex: function (t) {
                        var e, n = 0;
                        for (e = 0; e < t.length; e++) t[e] > t[n] && (n = e);
                        return n
                    },
                    max: function (t) {
                        var e, n = 0;
                        for (e = 0; e < t.length; e++) t[e] > n && (n = t[e]);
                        return n
                    },
                    sum: function (t) {
                        for (var e = t.length, n = 0; e--;) n += t[e];
                        return n
                    }
                }
            }, function (t, e, n) {
                "use strict";

                function r(t, e) {
                    t = i()(function () {
                        var t = {};
                        return Object.keys(r.CONFIG_KEYS).forEach((function (e) {
                            t[e] = r.CONFIG_KEYS[e].default
                        })), t
                    }(), t), a.a.call(this, t, e)
                }
                var o = n(28),
                    i = n.n(o),
                    a = n(1),
                    u = Object.assign || function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    };
                r.prototype = Object.create(a.a.prototype, {
                    CODE_L_START: {
                        value: 0
                    },
                    CODE_G_START: {
                        value: 10
                    },
                    START_PATTERN: {
                        value: [1, 1, 1]
                    },
                    STOP_PATTERN: {
                        value: [1, 1, 1]
                    },
                    MIDDLE_PATTERN: {
                        value: [1, 1, 1, 1, 1]
                    },
                    EXTENSION_START_PATTERN: {
                        value: [1, 1, 2]
                    },
                    CODE_PATTERN: {
                        value: [[3, 2, 1, 1], [2, 2, 2, 1], [2, 1, 2, 2], [1, 4, 1, 1], [1, 1, 3, 2], [1, 2, 3, 1], [1, 1, 1, 4], [1, 3, 1, 2], [1, 2, 1, 3], [3, 1, 1, 2], [1, 1, 2, 3], [1, 2, 2, 2], [2, 2, 1, 2], [1, 1, 4, 1], [2, 3, 1, 1], [1, 3, 2, 1], [4, 1, 1, 1], [2, 1, 3, 1], [3, 1, 2, 1], [2, 1, 1, 3]]
                    },
                    CODE_FREQUENCY: {
                        value: [0, 11, 13, 14, 19, 25, 28, 21, 22, 26]
                    },
                    SINGLE_CODE_ERROR: {
                        value: .7
                    },
                    AVG_CODE_ERROR: {
                        value: .48
                    },
                    FORMAT: {
                        value: "ean_13",
                        writeable: !1
                    }
                }), r.prototype.constructor = r, r.prototype._decodeCode = function (t, e) {
                    var n, r, o, i = [0, 0, 0, 0],
                        a = this,
                        u = t,
                        c = !a._row[u],
                        s = 0,
                        f = {
                            error: Number.MAX_VALUE,
                            code: -1,
                            start: t,
                            end: t
                        };
                    for (e || (e = a.CODE_PATTERN.length), n = u; n < a._row.length; n++)
                        if (a._row[n] ^ c) i[s]++;
                        else {
                            if (s === i.length - 1) {
                                for (r = 0; r < e; r++)(o = a._matchPattern(i, a.CODE_PATTERN[r])) < f.error && (f.code = r, f.error = o);
                                return f.end = n, f.error > a.AVG_CODE_ERROR ? null : f
                            }
                            i[++s] = 1, c = !c
                        } return null
                }, r.prototype._findPattern = function (t, e, n, r, o) {
                    var i, a, u, c, s = [],
                        f = this,
                        l = 0,
                        d = {
                            error: Number.MAX_VALUE,
                            code: -1,
                            start: 0,
                            end: 0
                        };
                    for (e || (e = f._nextSet(f._row)), void 0 === n && (n = !1), void 0 === r && (r = !0), void 0 === o && (o = f.AVG_CODE_ERROR), i = 0; i < t.length; i++) s[i] = 0;
                    for (i = e; i < f._row.length; i++)
                        if (f._row[i] ^ n) s[l]++;
                        else {
                            if (l === s.length - 1) {
                                for (c = 0, u = 0; u < s.length; u++) c += s[u];
                                if ((a = f._matchPattern(s, t)) < o) return d.error = a, d.start = i - c, d.end = i, d;
                                if (!r) return null;
                                for (u = 0; u < s.length - 2; u++) s[u] = s[u + 2];
                                s[s.length - 2] = 0, s[s.length - 1] = 0, l--
                            } else l++;
                            s[l] = 1, n = !n
                        } return null
                }, r.prototype._findStart = function () {
                    for (var t, e, n = this, r = n._nextSet(n._row); !e;) {
                        if (!(e = n._findPattern(n.START_PATTERN, r))) return null;
                        if ((t = e.start - (e.end - e.start)) >= 0 && n._matchRange(t, e.start, 0)) return e;
                        r = e.end, e = null
                    }
                }, r.prototype._verifyTrailingWhitespace = function (t) {
                    var e;
                    return (e = t.end + (t.end - t.start)) < this._row.length && this._matchRange(t.end, e, 0) ? t : null
                }, r.prototype._findEnd = function (t, e) {
                    var n = this,
                        r = n._findPattern(n.STOP_PATTERN, t, e, !1);
                    return null !== r ? n._verifyTrailingWhitespace(r) : null
                }, r.prototype._calculateFirstDigit = function (t) {
                    var e;
                    for (e = 0; e < this.CODE_FREQUENCY.length; e++)
                        if (t === this.CODE_FREQUENCY[e]) return e;
                    return null
                }, r.prototype._decodePayload = function (t, e, n) {
                    var r, o, i = this,
                        a = 0;
                    for (r = 0; r < 6; r++) {
                        if (!(t = i._decodeCode(t.end))) return null;
                        t.code >= i.CODE_G_START ? (t.code = t.code - i.CODE_G_START, a |= 1 << 5 - r) : a |= 0 << 5 - r, e.push(t.code), n.push(t)
                    }
                    if (null === (o = i._calculateFirstDigit(a))) return null;
                    if (e.unshift(o), null === (t = i._findPattern(i.MIDDLE_PATTERN, t.end, !0, !1))) return null;
                    for (n.push(t), r = 0; r < 6; r++) {
                        if (!(t = i._decodeCode(t.end, i.CODE_G_START))) return null;
                        n.push(t), e.push(t.code)
                    }
                    return t
                }, r.prototype._decode = function () {
                    var t, e, n = this,
                        r = [],
                        o = [],
                        i = {};
                    if (!(t = n._findStart())) return null;
                    if (e = {
                            code: t.code,
                            start: t.start,
                            end: t.end
                        }, o.push(e), !(e = n._decodePayload(e, r, o))) return null;
                    if (!(e = n._findEnd(e.end, !1))) return null;
                    if (o.push(e), !n._checksum(r)) return null;
                    if (this.supplements.length > 0) {
                        var a = this._decodeExtensions(e.end);
                        if (!a) return null;
                        var c = a.decodedCodes[a.decodedCodes.length - 1],
                            s = {
                                start: c.start + ((c.end - c.start) / 2 | 0),
                                end: c.end
                            };
                        if (!n._verifyTrailingWhitespace(s)) return null;
                        i = {
                            supplement: a,
                            code: r.join("") + a.code
                        }
                    }
                    return u({
                        code: r.join(""),
                        start: t.start,
                        end: e.end,
                        codeset: "",
                        startInfo: t,
                        decodedCodes: o
                    }, i)
                }, r.prototype._decodeExtensions = function (t) {
                    var e, n, r = this._nextSet(this._row, t),
                        o = this._findPattern(this.EXTENSION_START_PATTERN, r, !1, !1);
                    if (null === o) return null;
                    for (e = 0; e < this.supplements.length; e++)
                        if (null !== (n = this.supplements[e].decode(this._row, o.end))) return {
                            code: n.code,
                            start: r,
                            startInfo: o,
                            end: n.end,
                            codeset: "",
                            decodedCodes: n.decodedCodes
                        };
                    return null
                }, r.prototype._checksum = function (t) {
                    var e, n = 0;
                    for (e = t.length - 2; e >= 0; e -= 2) n += t[e];
                    for (n *= 3, e = t.length - 1; e >= 0; e -= 2) n += t[e];
                    return n % 10 == 0
                }, r.CONFIG_KEYS = {
                    supplements: {
                        type: "arrayOf(string)",
                        default: [],
                        description: "Allowed extensions to be decoded (2 and/or 5)"
                    }
                }, e.a = r
            }, function (t, e, n) {
                var r = n(38),
                    o = "object" == typeof self && self && self.Object === Object && self,
                    i = r || o || Function("return this")();
                t.exports = i
            }, function (t, e) {
                t.exports = function (t) {
                    return null != t && "object" == typeof t
                }
            }, function (t, e) {
                t.exports = function (t) {
                    var e = new Float32Array(2);
                    return e[0] = t[0], e[1] = t[1], e
                }
            }, function (t, e, n) {
                var r = n(11),
                    o = n(119),
                    i = n(146),
                    a = "[object Null]",
                    u = "[object Undefined]",
                    c = r ? r.toStringTag : void 0;
                t.exports = function (t) {
                    return null == t ? void 0 === t ? u : a : c && c in Object(t) ? o(t) : i(t)
                }
            }, function (t, e, n) {
                "use strict";
                e.a = {
                    drawRect: function (t, e, n, r) {
                        n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = 1, n.beginPath(), n.strokeRect(t.x, t.y, e.x, e.y)
                    },
                    drawPath: function (t, e, n, r) {
                        n.strokeStyle = r.color, n.fillStyle = r.color, n.lineWidth = r.lineWidth, n.beginPath(), n.moveTo(t[0][e.x], t[0][e.y]);
                        for (var o = 1; o < t.length; o++) n.lineTo(t[o][e.x], t[o][e.y]);
                        n.closePath(), n.stroke()
                    },
                    drawImage: function (t, e, n) {
                        var r, o = n.getImageData(0, 0, e.x, e.y),
                            i = o.data,
                            a = t.length,
                            u = i.length;
                        if (u / a != 4) return !1;
                        for (; a--;) r = t[a], i[--u] = 255, i[--u] = r, i[--u] = r, i[--u] = r;
                        return n.putImageData(o, 0, 0), !0
                    }
                }
            }, function (t, e, n) {
                function r(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }
                var o = n(133),
                    i = n(134),
                    a = n(135),
                    u = n(136),
                    c = n(137);
                r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
            }, function (t, e, n) {
                var r = n(5).Symbol;
                t.exports = r
            }, function (t, e, n) {
                var r = n(17);
                t.exports = function (t, e) {
                    for (var n = t.length; n--;)
                        if (r(t[n][0], e)) return n;
                    return -1
                }
            }, function (t, e, n) {
                var r = n(2),
                    o = n(130),
                    i = n(154),
                    a = n(165);
                t.exports = function (t, e) {
                    return r(t) ? t : o(t, e) ? [t] : i(a(t))
                }
            }, function (t, e, n) {
                var r = n(131);
                t.exports = function (t, e) {
                    var n = t.__data__;
                    return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                }
            }, function (t, e) {
                var n = 9007199254740991,
                    r = /^(?:0|[1-9]\d*)$/;
                t.exports = function (t, e) {
                    return !!(e = null == e ? n : e) && ("number" == typeof t || r.test(t)) && t > -1 && t % 1 == 0 && t < e
                }
            }, function (t, e, n) {
                var r = n(22)(Object, "create");
                t.exports = r
            }, function (t, e) {
                t.exports = function (t, e) {
                    return t === e || t != t && e != e
                }
            }, function (t, e, n) {
                var r = n(96),
                    o = n(6),
                    i = Object.prototype,
                    a = i.hasOwnProperty,
                    u = i.propertyIsEnumerable,
                    c = r(function () {
                        return arguments
                    }()) ? r : function (t) {
                        return o(t) && a.call(t, "callee") && !u.call(t, "callee")
                    };
                t.exports = c
            }, function (t, e, n) {
                "use strict";

                function r(t, e) {
                    function n(t, e) {
                        var n, r = 0;
                        for (n = t; n <= e; n++) r += o[n];
                        return r
                    }

                    function r(t, e) {
                        var n, r = 0;
                        for (n = t; n <= e; n++) r += n * o[n];
                        return r
                    }
                    e || (e = 8);
                    var o, i = 8 - e;
                    return function () {
                        var i, u, c, s, f, l = [0],
                            d = (1 << e) - 1;
                        for (o = function (t, e) {
                                e || (e = 8);
                                for (var n = t.data, r = n.length, o = 8 - e, i = new Int32Array(1 << e); r--;) i[n[r] >> o]++;
                                return i
                            }(t, e), s = 1; s < d; s++) 0 == (c = (i = n(0, s)) * (u = n(s + 1, d))) && (c = 1), f = r(0, s) * u - r(s + 1, d) * i, l[s] = f * f / c;
                        return a.a.maxIndex(l)
                    }() << i
                }

                function o(t) {
                    var e, n = [],
                        r = [];
                    for (e = 1; e < Math.sqrt(t) + 1; e++) t % e == 0 && (r.push(e), e !== t / e && n.unshift(Math.floor(t / e)));
                    return r.concat(n)
                }
                var i = n(50),
                    a = n(3);
                e.b = function (t, e) {
                    return {
                        x: t,
                        y: e,
                        toVec2: function () {
                            return u.clone([this.x, this.y])
                        },
                        toVec3: function () {
                            return c.clone([this.x, this.y, 1])
                        },
                        round: function () {
                            return this.x = this.x > 0 ? Math.floor(this.x + .5) : Math.floor(this.x - .5), this.y = this.y > 0 ? Math.floor(this.y + .5) : Math.floor(this.y - .5), this
                        }
                    }
                }, e.f = function (t, e) {
                    var n = r(t);
                    return function (t, e, n) {
                        n || (n = t);
                        for (var r = t.data, o = r.length, i = n.data; o--;) i[o] = r[o] < e ? 1 : 0
                    }(t, n, e), n
                }, e.g = function (t, e, n) {
                    function r(t) {
                        var e = !1;
                        for (a = 0; a < s.length; a++)(u = s[a]).fits(t) && (u.add(t), e = !0);
                        return e
                    }
                    var o, a, u, c, s = [];
                    for (n || (n = "rad"), o = 0; o < t.length; o++) r(c = i.a.createPoint(t[o], o, n)) || s.push(i.a.create(c, e));
                    return s
                }, e.h = function (t, e, n) {
                    var r, o, i, a, u = 0,
                        c = 0,
                        s = [];
                    for (r = 0; r < e; r++) s[r] = {
                        score: 0,
                        item: null
                    };
                    for (r = 0; r < t.length; r++)
                        if ((o = n.apply(this, [t[r]])) > c)
                            for ((i = s[u]).score = o, i.item = t[r], c = Number.MAX_VALUE, a = 0; a < e; a++) s[a].score < c && (c = s[a].score, u = a);
                    return s
                }, e.c = function (t, e, n) {
                    for (var r, o = 0, i = e.x, a = Math.floor(t.length / 4), u = e.x / 2, c = 0, s = e.x; i < a;) {
                        for (r = 0; r < u; r++) n[c] = (.299 * t[4 * o + 0] + .587 * t[4 * o + 1] + .114 * t[4 * o + 2] + (.299 * t[4 * (o + 1) + 0] + .587 * t[4 * (o + 1) + 1] + .114 * t[4 * (o + 1) + 2]) + (.299 * t[4 * i + 0] + .587 * t[4 * i + 1] + .114 * t[4 * i + 2]) + (.299 * t[4 * (i + 1) + 0] + .587 * t[4 * (i + 1) + 1] + .114 * t[4 * (i + 1) + 2])) / 4, c++, o += 2, i += 2;
                        o += s, i += s
                    }
                }, e.d = function (t, e, n) {
                    var r, o = t.length / 4 | 0;
                    if (n && !0 === n.singleChannel)
                        for (r = 0; r < o; r++) e[r] = t[4 * r + 0];
                    else
                        for (r = 0; r < o; r++) e[r] = .299 * t[4 * r + 0] + .587 * t[4 * r + 1] + .114 * t[4 * r + 2]
                }, e.i = function (t, e) {
                    for (var n = t.data, r = t.size.x, o = e.data, i = 0, a = r, u = n.length, c = r / 2, s = 0; a < u;) {
                        for (var f = 0; f < c; f++) o[s] = Math.floor((n[i] + n[i + 1] + n[a] + n[a + 1]) / 4), s++, i += 2, a += 2;
                        i += r, a += r
                    }
                }, e.a = function (t, e) {
                    var n = t[0],
                        r = t[1],
                        o = t[2],
                        i = o * r,
                        a = i * (1 - Math.abs(n / 60 % 2 - 1)),
                        u = o - i,
                        c = 0,
                        s = 0,
                        f = 0;
                    return n < 60 ? (c = i, s = a) : n < 120 ? (c = a, s = i) : n < 180 ? (s = i, f = a) : n < 240 ? (s = a, f = i) : n < 300 ? (c = a, f = i) : n < 360 && (c = i, f = a), (e = e || [0, 0, 0])[0] = 255 * (c + u) | 0, e[1] = 255 * (s + u) | 0, e[2] = 255 * (f + u) | 0, e
                }, e.e = function (t, e) {
                    function n(t) {
                        for (var e = 0, n = t[Math.floor(t.length / 2)]; e < t.length - 1 && t[e] < h;) e++;
                        return e > 0 && (n = Math.abs(t[e] - h) > Math.abs(t[e - 1] - h) ? t[e - 1] : t[e]), h / n < s[l + 1] / s[l] && h / n > s[l - 1] / s[l] ? {
                            x: n,
                            y: n
                        } : null
                    }
                    var r, i = o(e.x),
                        a = o(e.y),
                        u = Math.max(e.x, e.y),
                        c = function (t, e) {
                            for (var n = 0, r = 0, o = []; n < t.length && r < e.length;) t[n] === e[r] ? (o.push(t[n]), n++, r++) : t[n] > e[r] ? r++ : n++;
                            return o
                        }(i, a),
                        s = [8, 10, 15, 20, 32, 60, 80],
                        f = {
                            "x-small": 5,
                            small: 4,
                            medium: 3,
                            large: 2,
                            "x-large": 1
                        },
                        l = f[t] || f.medium,
                        d = s[l],
                        h = Math.floor(u / d);
                    return (r = n(c)) || (r = n(o(u))) || (r = n(o(h * d))), r
                }, e.j = function (t, e, n) {
                    var r = {
                            width: t,
                            height: e
                        },
                        o = Object.keys(n).reduce((function (t, e) {
                            var o = function (t) {
                                    return {
                                        value: parseFloat(t),
                                        unit: (t.indexOf("%"), t.length, "%")
                                    }
                                }(n[e]),
                                i = s[e](o, r);
                            return t[e] = i, t
                        }), {});
                    return {
                        sx: o.left,
                        sy: o.top,
                        sw: o.right - o.left,
                        sh: o.bottom - o.top
                    }
                };
                var u = {
                        clone: n(7)
                    },
                    c = {
                        clone: n(83)
                    },
                    s = {
                        top: function (t, e) {
                            if ("%" === t.unit) return Math.floor(e.height * (t.value / 100))
                        },
                        right: function (t, e) {
                            if ("%" === t.unit) return Math.floor(e.width - e.width * (t.value / 100))
                        },
                        bottom: function (t, e) {
                            if ("%" === t.unit) return Math.floor(e.height - e.height * (t.value / 100))
                        },
                        left: function (t, e) {
                            if ("%" === t.unit) return Math.floor(e.width * (t.value / 100))
                        }
                    }
            }, function (t, e, n) {
                "use strict";

                function r(t, e, n, r) {
                    e ? this.data = e : n ? (this.data = new n(t.x * t.y), n === Array && r && a.a.init(this.data, 0)) : (this.data = new Uint8Array(t.x * t.y), Uint8Array === Array && r && a.a.init(this.data, 0)), this.size = t
                }
                var o = n(53),
                    i = n(19),
                    a = n(3),
                    u = {
                        clone: n(7)
                    };
                r.prototype.inImageWithBorder = function (t, e) {
                    return t.x >= e && t.y >= e && t.x < this.size.x - e && t.y < this.size.y - e
                }, r.sample = function (t, e, n) {
                    var r = Math.floor(e),
                        o = Math.floor(n),
                        i = t.size.x,
                        a = o * t.size.x + r,
                        u = t.data[a + 0],
                        c = t.data[a + 1],
                        s = t.data[a + i],
                        f = t.data[a + i + 1],
                        l = u - c;
                    return e -= r, n -= o, Math.floor(e * (n * (l - s + f) - l) + n * (s - u) + u)
                }, r.clearArray = function (t) {
                    for (var e = t.length; e--;) t[e] = 0
                }, r.prototype.subImage = function (t, e) {
                    return new o.a(t, e, this)
                }, r.prototype.subImageAsCopy = function (t, e) {
                    var n, r, o = t.size.y,
                        i = t.size.x;
                    for (n = 0; n < i; n++)
                        for (r = 0; r < o; r++) t.data[r * i + n] = this.data[(e.y + r) * this.size.x + e.x + n]
                }, r.prototype.copyTo = function (t) {
                    for (var e = this.data.length, n = this.data, r = t.data; e--;) r[e] = n[e]
                }, r.prototype.get = function (t, e) {
                    return this.data[e * this.size.x + t]
                }, r.prototype.getSafe = function (t, e) {
                    var n;
                    if (!this.indexMapping) {
                        for (this.indexMapping = {
                                x: [],
                                y: []
                            }, n = 0; n < this.size.x; n++) this.indexMapping.x[n] = n, this.indexMapping.x[n + this.size.x] = n;
                        for (n = 0; n < this.size.y; n++) this.indexMapping.y[n] = n, this.indexMapping.y[n + this.size.y] = n
                    }
                    return this.data[this.indexMapping.y[e + this.size.y] * this.size.x + this.indexMapping.x[t + this.size.x]]
                }, r.prototype.set = function (t, e, n) {
                    return this.data[e * this.size.x + t] = n, this
                }, r.prototype.zeroBorder = function () {
                    var t, e = this.size.x,
                        n = this.size.y,
                        r = this.data;
                    for (t = 0; t < e; t++) r[t] = r[(n - 1) * e + t] = 0;
                    for (t = 1; t < n - 1; t++) r[t * e] = r[t * e + (e - 1)] = 0
                }, r.prototype.invert = function () {
                    for (var t = this.data, e = t.length; e--;) t[e] = t[e] ? 0 : 1
                }, r.prototype.convolve = function (t) {
                    var e, n, r, o, i = t.length / 2 | 0,
                        a = 0;
                    for (n = 0; n < this.size.y; n++)
                        for (e = 0; e < this.size.x; e++) {
                            for (a = 0, o = -i; o <= i; o++)
                                for (r = -i; r <= i; r++) a += t[o + i][r + i] * this.getSafe(e + r, n + o);
                            this.data[n * this.size.x + e] = a
                        }
                }, r.prototype.moments = function (t) {
                    var e, n, r, o, i, a, c, s, f, l, d = this.data,
                        h = this.size.y,
                        p = this.size.x,
                        v = [],
                        _ = [],
                        g = Math.PI,
                        y = g / 4;
                    if (t <= 0) return _;
                    for (i = 0; i < t; i++) v[i] = {
                        m00: 0,
                        m01: 0,
                        m10: 0,
                        m11: 0,
                        m02: 0,
                        m20: 0,
                        theta: 0,
                        rad: 0
                    };
                    for (n = 0; n < h; n++)
                        for (o = n * n, e = 0; e < p; e++)(r = d[n * p + e]) > 0 && ((a = v[r - 1]).m00 += 1, a.m01 += n, a.m10 += e, a.m11 += e * n, a.m02 += o, a.m20 += e * e);
                    for (i = 0; i < t; i++) a = v[i], isNaN(a.m00) || 0 === a.m00 || (s = a.m10 / a.m00, f = a.m01 / a.m00, c = a.m11 / a.m00 - s * f, l = (a.m02 / a.m00 - f * f - (a.m20 / a.m00 - s * s)) / (2 * c), l = .5 * Math.atan(l) + (c >= 0 ? y : -y) + g, a.theta = (180 * l / g + 90) % 180 - 90, a.theta < 0 && (a.theta += 180), a.rad = l > g ? l - g : l, a.vec = u.clone([Math.cos(l), Math.sin(l)]), _.push(a));
                    return _
                }, r.prototype.show = function (t, e) {
                    var n, r, o, i, a, u, c;
                    for (e || (e = 1), n = t.getContext("2d"), t.width = this.size.x, t.height = this.size.y, o = (r = n.getImageData(0, 0, t.width, t.height)).data, i = 0, c = 0; c < this.size.y; c++)
                        for (u = 0; u < this.size.x; u++) a = c * this.size.x + u, i = this.get(u, c) * e, o[4 * a + 0] = i, o[4 * a + 1] = i, o[4 * a + 2] = i, o[4 * a + 3] = 255;
                    n.putImageData(r, 0, 0)
                }, r.prototype.overlay = function (t, e, r) {
                    (!e || e < 0 || e > 360) && (e = 360);
                    for (var o = [0, 1, 1], a = [0, 0, 0], u = [255, 255, 255], c = [0, 0, 0], s = [], f = t.getContext("2d"), l = f.getImageData(r.x, r.y, this.size.x, this.size.y), d = l.data, h = this.data.length; h--;) o[0] = this.data[h] * e, s = o[0] <= 0 ? u : o[0] >= 360 ? c : n.i(i.a)(o, a), d[4 * h + 0] = s[0], d[4 * h + 1] = s[1], d[4 * h + 2] = s[2], d[4 * h + 3] = 255;
                    f.putImageData(l, r.x, r.y)
                }, e.a = r
            }, function (t, e, n) {
                var r = n(37);
                t.exports = function (t, e, n) {
                    "__proto__" == e && r ? r(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : t[e] = n
                }
            }, function (t, e, n) {
                var r = n(97),
                    o = n(120);
                t.exports = function (t, e) {
                    var n = o(t, e);
                    return r(n) ? n : void 0
                }
            }, function (t, e, n) {
                var r = n(27),
                    o = 1 / 0;
                t.exports = function (t) {
                    if ("string" == typeof t || r(t)) return t;
                    var e = t + "";
                    return "0" == e && 1 / t == -o ? "-0" : e
                }
            }, function (t, e, n) {
                var r = n(25),
                    o = n(26);
                t.exports = function (t) {
                    return null != t && o(t.length) && !r(t)
                }
            }, function (t, e, n) {
                var r = n(8),
                    o = n(0),
                    i = "[object AsyncFunction]",
                    a = "[object Function]",
                    u = "[object GeneratorFunction]",
                    c = "[object Proxy]";
                t.exports = function (t) {
                    if (!o(t)) return !1;
                    var e = r(t);
                    return e == a || e == u || e == i || e == c
                }
            }, function (t, e) {
                var n = 9007199254740991;
                t.exports = function (t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
                }
            }, function (t, e, n) {
                var r = n(8),
                    o = n(6),
                    i = "[object Symbol]";
                t.exports = function (t) {
                    return "symbol" == typeof t || o(t) && r(t) == i
                }
            }, function (t, e, n) {
                var r = n(100),
                    o = n(116)((function (t, e, n) {
                        r(t, e, n)
                    }));
                t.exports = o
            }, function (t, e) {
                t.exports = function (t) {
                    return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l
                        }
                    }), Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i
                        }
                    }), t.webpackPolyfill = 1), t
                }
            }, function (t, e, n) {
                "use strict";
                e.a = {
                    searchDirections: [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]],
                    create: function (t, e) {
                        function n(t, e, n, r) {
                            var o, f, l;
                            for (o = 0; o < 7; o++) {
                                if (f = t.cy + c[t.dir][0], l = t.cx + c[t.dir][1], a[i = f * s + l] === e && (0 === u[i] || u[i] === n)) return u[i] = n, t.cy = f, t.cx = l, !0;
                                0 === u[i] && (u[i] = r), t.dir = (t.dir + 1) % 8
                            }
                            return !1
                        }

                        function r(t, e, n) {
                            return {
                                dir: n,
                                x: t,
                                y: e,
                                next: null,
                                prev: null
                            }
                        }

                        function o(t, e, o, i, a) {
                            var u, c, s, f = null,
                                l = {
                                    cx: e,
                                    cy: t,
                                    dir: 0
                                };
                            if (n(l, i, o, a)) {
                                u = f = r(e, t, l.dir), s = l.dir, (c = r(l.cx, l.cy, 0)).prev = u, u.next = c, c.next = null, u = c;
                                do {
                                    l.dir = (l.dir + 6) % 8, n(l, i, o, a), s !== l.dir ? (u.dir = l.dir, (c = r(l.cx, l.cy, 0)).prev = u, u.next = c, c.next = null, u = c) : (u.dir = s, u.x = l.cx, u.y = l.cy), s = l.dir
                                } while (l.cx !== e || l.cy !== t);
                                f.prev = u.prev, u.prev.next = f
                            }
                            return f
                        }
                        var i, a = t.data,
                            u = e.data,
                            c = this.searchDirections,
                            s = t.size.x;
                        return {
                            trace: function (t, e, r, o) {
                                return n(t, e, r, o)
                            },
                            contourTracing: function (t, e, n, r, i) {
                                return o(t, e, n, r, i)
                            }
                        }
                    }
                }
            }, function (t, e, n) {
                "use strict";

                function r() {
                    o.a.call(this)
                }
                var o = n(1),
                    i = n(3);
                r.prototype = Object.create(o.a.prototype, {
                    ALPHABETH_STRING: {
                        value: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. *$/+%"
                    },
                    ALPHABET: {
                        value: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 45, 46, 32, 42, 36, 47, 43, 37]
                    },
                    CHARACTER_ENCODINGS: {
                        value: [52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280, 88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385, 193, 448, 145, 400, 208, 133, 388, 196, 148, 168, 162, 138, 42]
                    },
                    ASTERISK: {
                        value: 148
                    },
                    FORMAT: {
                        value: "code_39",
                        writeable: !1
                    }
                }), r.prototype.constructor = r, r.prototype._decode = function () {
                    var t, e, n, r, o = this,
                        a = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        u = [],
                        c = o._findStart();
                    if (!c) return null;
                    r = o._nextSet(o._row, c.end);
                    do {
                        if (a = o._toCounters(r, a), (n = o._toPattern(a)) < 0) return null;
                        if ((t = o._patternToChar(n)) < 0) return null;
                        u.push(t), e = r, r += i.a.sum(a), r = o._nextSet(o._row, r)
                    } while ("*" !== t);
                    return u.pop(), u.length && o._verifyTrailingWhitespace(e, r, a) ? {
                        code: u.join(""),
                        start: c.start,
                        end: r,
                        startInfo: c,
                        decodedCodes: u
                    } : null
                }, r.prototype._verifyTrailingWhitespace = function (t, e, n) {
                    var r = i.a.sum(n);
                    return 3 * (e - t - r) >= r
                }, r.prototype._patternToChar = function (t) {
                    var e, n = this;
                    for (e = 0; e < n.CHARACTER_ENCODINGS.length; e++)
                        if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]);
                    return -1
                }, r.prototype._findNextWidth = function (t, e) {
                    var n, r = Number.MAX_VALUE;
                    for (n = 0; n < t.length; n++) t[n] < r && t[n] > e && (r = t[n]);
                    return r
                }, r.prototype._toPattern = function (t) {
                    for (var e, n, r = t.length, o = 0, i = r, a = 0; i > 3;) {
                        for (o = this._findNextWidth(t, o), i = 0, e = 0, n = 0; n < r; n++) t[n] > o && (e |= 1 << r - 1 - n, i++, a += t[n]);
                        if (3 === i) {
                            for (n = 0; n < r && i > 0; n++)
                                if (t[n] > o && (i--, 2 * t[n] >= a)) return -1;
                            return e
                        }
                    }
                    return -1
                }, r.prototype._findStart = function () {
                    var t, e, n, r = this,
                        o = r._nextSet(r._row),
                        i = o,
                        a = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                        u = 0,
                        c = !1;
                    for (t = o; t < r._row.length; t++)
                        if (r._row[t] ^ c) a[u]++;
                        else {
                            if (u === a.length - 1) {
                                if (r._toPattern(a) === r.ASTERISK && (n = Math.floor(Math.max(0, i - (t - i) / 4)), r._matchRange(n, i, 0))) return {
                                    start: i,
                                    end: t
                                };
                                for (i += a[0] + a[1], e = 0; e < 7; e++) a[e] = a[e + 2];
                                a[7] = 0, a[8] = 0, u--
                            } else u++;
                            a[u] = 1, c = !c
                        } return null
                }, e.a = r
            }, function (t, e) {
                t.exports = function (t, e) {
                    return t[0] * e[0] + t[1] * e[1]
                }
            }, function (t, e, n) {
                var r = n(22)(n(5), "Map");
                t.exports = r
            }, function (t, e, n) {
                function r(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }
                var o = n(138),
                    i = n(139),
                    a = n(140),
                    u = n(141),
                    c = n(142);
                r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
            }, function (t, e, n) {
                var r = n(21),
                    o = n(17);
                t.exports = function (t, e, n) {
                    (void 0 === n || o(t[e], n)) && (void 0 !== n || e in t) || r(t, e, n)
                }
            }, function (t, e, n) {
                var r = n(21),
                    o = n(17),
                    i = Object.prototype.hasOwnProperty;
                t.exports = function (t, e, n) {
                    var a = t[e];
                    i.call(t, e) && o(a, n) && (void 0 !== n || e in t) || r(t, e, n)
                }
            }, function (t, e, n) {
                var r = n(22),
                    o = function () {
                        try {
                            var t = r(Object, "defineProperty");
                            return t({}, "", {}), t
                        } catch (t) {}
                    }();
                t.exports = o
            }, function (t, e, n) {
                (function (e) {
                    var n = "object" == typeof e && e && e.Object === Object && e;
                    t.exports = n
                }).call(e, n(47))
            }, function (t, e, n) {
                var r = n(147)(Object.getPrototypeOf, Object);
                t.exports = r
            }, function (t, e) {
                var n = Object.prototype;
                t.exports = function (t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || n)
                }
            }, function (t, e, n) {
                var r = n(87),
                    o = Math.max;
                t.exports = function (t, e, n) {
                    return e = o(void 0 === e ? t.length - 1 : e, 0),
                        function () {
                            for (var i = arguments, a = -1, u = o(i.length - e, 0), c = Array(u); ++a < u;) c[a] = i[e + a];
                            a = -1;
                            for (var s = Array(e + 1); ++a < e;) s[a] = i[a];
                            return s[e] = n(c), r(t, this, s)
                        }
                }
            }, function (t, e, n) {
                var r = n(106),
                    o = n(148)(r);
                t.exports = o
            }, function (t, e) {
                t.exports = function (t) {
                    return t
                }
            }, function (t, e, n) {
                (function (t) {
                    var r = n(5),
                        o = n(163),
                        i = "object" == typeof e && e && !e.nodeType && e,
                        a = i && "object" == typeof t && t && !t.nodeType && t,
                        u = a && a.exports === i ? r.Buffer : void 0,
                        c = (u ? u.isBuffer : void 0) || o;
                    t.exports = c
                }).call(e, n(29)(t))
            }, function (t, e, n) {
                var r = n(98),
                    o = n(109),
                    i = n(145),
                    a = i && i.isTypedArray,
                    u = a ? o(a) : r;
                t.exports = u
            }, function (t, e, n) {
                var r = n(88),
                    o = n(99),
                    i = n(24);
                t.exports = function (t) {
                    return i(t) ? r(t, !0) : o(t)
                }
            }, function (t, e) {
                var n;
                n = function () {
                    return this
                }();
                try {
                    n = n || Function("return this")() || (0, eval)("this")
                } catch (t) {
                    "object" == typeof window && (n = window)
                }
                t.exports = n
            }, function (e, n, r) {
                "use strict";

                function o(t) {
                    (function (t) {
                        x = t || new R.a({
                            x: g.getWidth(),
                            y: g.getHeight()
                        }), b = [k.clone([0, 0]), k.clone([0, x.size.y]), k.clone([x.size.x, x.size.y]), k.clone([x.size.x, 0])], T.a.init(x, B.locator)
                    })(t), E = S.a.create(B.decoder, x)
                }

                function i(t) {
                    var e;
                    if ("VideoStream" === B.inputStream.type) e = document.createElement("video"), g = z.a.createVideoStream(e);
                    else if ("ImageStream" === B.inputStream.type) g = z.a.createImageStream();
                    else if ("LiveStream" === B.inputStream.type) {
                        var n = a();
                        n && ((e = n.querySelector("video")) || (e = document.createElement("video"), n.appendChild(e))), g = z.a.createLiveStream(e), P.a.request(e, B.inputStream.constraints).then((function () {
                            g.trigger("canrecord")
                        })).catch((function (e) {
                            return t(e)
                        }))
                    }
                    g.setAttribute("preload", "auto"), g.setInputStream(B.inputStream), g.addEventListener("canrecord", u.bind(void 0, t))
                }

                function a() {
                    var t = B.inputStream.target;
                    if (t && t.nodeName && 1 === t.nodeType) return t;
                    var e = "string" == typeof t ? t : "#interactive.viewport";
                    return document.querySelector(e)
                }

                function u(t) {
                    T.a.checkImageConstraints(g, B.locator),
                        function () {
                            if ("undefined" != typeof document) {
                                var t = a();
                                if (L.dom.image = document.querySelector("canvas.imgBuffer"), L.dom.image || (L.dom.image = document.createElement("canvas"), L.dom.image.className = "imgBuffer", t && "ImageStream" === B.inputStream.type && t.appendChild(L.dom.image)), L.ctx.image = L.dom.image.getContext("2d"), L.dom.image.width = g.getCanvasSize().x, L.dom.image.height = g.getCanvasSize().y, L.dom.overlay = document.querySelector("canvas.drawingBuffer"), !L.dom.overlay) {
                                    L.dom.overlay = document.createElement("canvas"), L.dom.overlay.className = "drawingBuffer", t && t.appendChild(L.dom.overlay);
                                    var e = document.createElement("br");
                                    e.setAttribute("clear", "all"), t && t.appendChild(e)
                                }
                                L.ctx.overlay = L.dom.overlay.getContext("2d"), L.dom.overlay.width = g.getCanvasSize().x, L.dom.overlay.height = g.getCanvasSize().y
                            }
                        }(), y = j.a.create(g, L.dom.image), _(B.numOfWorkers, (function () {
                            0 === B.numOfWorkers && o(),
                                function (t) {
                                    g.play(), t()
                                }(t)
                        }))
                }

                function c(t, e) {
                    var n = t;
                    t && W && (function t(e) {
                            function n(t) {
                                for (var e = t.length; e--;) t[e][0] += i, t[e][1] += a
                            }
                            var r, o = g.getTopRight(),
                                i = o.x,
                                a = o.y;
                            if (0 !== i || 0 !== a) {
                                if (e.barcodes)
                                    for (r = 0; r < e.barcodes.length; r++) t(e.barcodes[r]);
                                if (e.line && 2 === e.line.length && function (t) {
                                        t[0].x += i, t[0].y += a, t[1].x += i, t[1].y += a
                                    }(e.line), e.box && n(e.box), e.boxes && e.boxes.length > 0)
                                    for (r = 0; r < e.boxes.length; r++) n(e.boxes[r])
                            }
                        }(t), function t(e, n) {
                            n && C && (e.barcodes ? e.barcodes.filter((function (t) {
                                return t.codeResult
                            })).forEach((function (e) {
                                return t(e, n)
                            })) : e.codeResult && C.addResult(n, g.getCanvasSize(), e.codeResult))
                        }(t, e), n = t.barcodes || t), D.a.publish("processed", n),
                        function (t) {
                            return t && (t.barcodes ? t.barcodes.some((function (t) {
                                return t.codeResult
                            })) : t.codeResult)
                        }(t) && D.a.publish("detected", n)
                }

                function s() {
                    var t, e;
                    (e = B.locate ? T.a.locate() : [[k.clone(b[0]), k.clone(b[1]), k.clone(b[2]), k.clone(b[3])]]) ? ((t = (t = E.decodeFromBoundingBoxes(e)) || {}).boxes = e, c(t, x.data)) : c()
                }

                function f() {
                    var t;
                    if (W) {
                        if (F.length > 0) {
                            if (!(t = F.filter((function (t) {
                                    return !t.busy
                                }))[0])) return;
                            y.attachData(t.imageData)
                        } else y.attachData(x.data);
                        y.grab() && (t ? (t.busy = !0, t.worker.postMessage({
                            cmd: "process",
                            imageData: t.imageData
                        }, [t.imageData.buffer])) : s())
                    } else s()
                }

                function l() {
                    W && "LiveStream" === B.inputStream.type ? function () {
                        var t = null,
                            e = 1e3 / (B.frequency || 60);
                        m = !1,
                            function n(r) {
                                t = t || r, m || (r >= t && (t += e, f()), window.requestAnimFrame(n))
                            }(performance.now())
                    }() : f()
                }

                function d(t) {
                    var e, n = {
                        worker: void 0,
                        imageData: new Uint8Array(g.getWidth() * g.getHeight()),
                        busy: !0
                    };
                    e = v(), n.worker = new Worker(e), n.worker.onmessage = function (r) {
                        if ("initialized" === r.data.event) return URL.revokeObjectURL(e), n.busy = !1, n.imageData = new Uint8Array(r.data.imageData), t(n);
                        "processed" === r.data.event ? (n.imageData = new Uint8Array(r.data.imageData), n.busy = !1, c(r.data.result, n.imageData)) : r.data.event
                    }, n.worker.postMessage({
                        cmd: "init",
                        size: {
                            x: g.getWidth(),
                            y: g.getHeight()
                        },
                        imageData: n.imageData,
                        config: h(B)
                    }, [n.imageData.buffer])
                }

                function h(t) {
                    return U({}, t, {
                        inputStream: U({}, t.inputStream, {
                            target: null
                        })
                    })
                }

                function p(t) {
                    function e(t) {
                        self.postMessage({
                            event: "processed",
                            imageData: o.data,
                            result: t
                        }, [o.data.buffer])
                    }

                    function n() {
                        self.postMessage({
                            event: "initialized",
                            imageData: o.data
                        }, [o.data.buffer])
                    }
                    if (t) {
                        var r = t().default;
                        if (!r) return void self.postMessage({
                            event: "error",
                            message: "Quagga could not be created"
                        })
                    }
                    var o;
                    self.onmessage = function (t) {
                        if ("init" === t.data.cmd) {
                            var i = t.data.config;
                            i.numOfWorkers = 0, o = new r.ImageWrapper({
                                x: t.data.size.x,
                                y: t.data.size.y
                            }, new Uint8Array(t.data.imageData)), r.init(i, n, o), r.onProcessed(e)
                        } else "process" === t.data.cmd ? (o.data = new Uint8Array(t.data.imageData), r.start()) : "setReaders" === t.data.cmd && r.setReaders(t.data.readers)
                    }
                }

                function v() {
                    var e, n;
                    return void 0 !== t && (n = t), e = new Blob(["(" + p.toString() + ")(" + n + ");"], {
                        type: "text/javascript"
                    }), window.URL.createObjectURL(e)
                }

                function _(t, e) {
                    var n = t - F.length;
                    if (0 === n) return e && e();
                    if (n < 0) return F.slice(n).forEach((function (t) {
                        t.worker.terminate()
                    })), F = F.slice(0, n), e && e();
                    for (var r = function (n) {
                            F.push(n), F.length >= t && e && e()
                        }, o = 0; o < n; o++) d(r)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var g, y, m, x, b, E, C, O = r(28),
                    w = r.n(O),
                    A = r(54),
                    R = (r.n(A), r(20)),
                    T = r(64),
                    S = r(57),
                    D = r(51),
                    P = r(59),
                    M = r(9),
                    I = r(49),
                    N = r(55),
                    z = r(63),
                    j = r(61),
                    U = Object.assign || function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    },
                    k = {
                        clone: r(7)
                    },
                    L = {
                        ctx: {
                            image: null,
                            overlay: null
                        },
                        dom: {
                            image: null,
                            overlay: null
                        }
                    },
                    F = [],
                    W = !0,
                    B = {};
                n.default = {
                    init: function (t, e, n) {
                        if (B = w()({}, N.a, t), n) return W = !1, o(n), e();
                        i(e)
                    },
                    start: function () {
                        l()
                    },
                    stop: function () {
                        m = !0, _(0), "LiveStream" === B.inputStream.type && (P.a.release(), g.clearEventHandlers())
                    },
                    pause: function () {
                        m = !0
                    },
                    onDetected: function (t) {
                        D.a.subscribe("detected", t)
                    },
                    offDetected: function (t) {
                        D.a.unsubscribe("detected", t)
                    },
                    onProcessed: function (t) {
                        D.a.subscribe("processed", t)
                    },
                    offProcessed: function (t) {
                        D.a.unsubscribe("processed", t)
                    },
                    setReaders: function (t) {
                        ! function (t) {
                            E ? E.setReaders(t) : W && F.length > 0 && F.forEach((function (e) {
                                e.worker.postMessage({
                                    cmd: "setReaders",
                                    readers: t
                                })
                            }))
                        }(t)
                    },
                    registerResultCollector: function (t) {
                        t && "function" == typeof t.addResult && (C = t)
                    },
                    canvas: L,
                    decodeSingle: function (t, e) {
                        var n = this;
                        t = w()({
                            inputStream: {
                                type: "ImageStream",
                                sequence: !1,
                                size: 800,
                                src: t.src
                            },
                            numOfWorkers: 1,
                            locator: {
                                halfSample: !1
                            }
                        }, t), this.init(t, (function () {
                            D.a.once("processed", (function (t) {
                                n.stop(), e.call(null, t)
                            }), !0), l()
                        }))
                    },
                    ImageWrapper: R.a,
                    ImageDebug: M.a,
                    ResultCollector: I.a,
                    CameraAccess: P.a
                }
            }, function (t, e, n) {
                "use strict";
                var r = n(9);
                e.a = {
                    create: function (t) {
                        function e(e) {
                            return a && e && ! function (t, e) {
                                return !!e && e.some((function (e) {
                                    return Object.keys(e).every((function (n) {
                                        return e[n] === t[n]
                                    }))
                                }))
                            }(e, t.blacklist) && function (t, e) {
                                return "function" != typeof e || e(t)
                            }(e, t.filter)
                        }
                        var n = document.createElement("canvas"),
                            o = n.getContext("2d"),
                            i = [],
                            a = t.capacity || 20,
                            u = !0 === t.capture;
                        return {
                            addResult: function (t, c, s) {
                                var f = {};
                                e(s) && (a--, f.codeResult = s, u && (n.width = c.x, n.height = c.y, r.a.drawImage(t, c, o), f.frame = n.toDataURL()), i.push(f))
                            },
                            getResults: function () {
                                return i
                            }
                        }
                    }
                }
            }, function (t, e, n) {
                "use strict";
                var r = {
                    clone: n(7),
                    dot: n(32)
                };
                e.a = {
                    create: function (t, e) {
                        function n(t) {
                            u[t.id] = t, i.push(t)
                        }

                        function o() {
                            var t, e = 0;
                            for (t = 0; t < i.length; t++) e += i[t].rad;
                            a.rad = e / i.length, a.vec = r.clone([Math.cos(a.rad), Math.sin(a.rad)])
                        }
                        var i = [],
                            a = {
                                rad: 0,
                                vec: r.clone([0, 0])
                            },
                            u = {};
                        return n(t), o(), {
                            add: function (t) {
                                u[t.id] || (n(t), o())
                            },
                            fits: function (t) {
                                return Math.abs(r.dot(t.point.vec, a.vec)) > e
                            },
                            getPoints: function () {
                                return i
                            },
                            getCenter: function () {
                                return a
                            }
                        }
                    },
                    createPoint: function (t, e, n) {
                        return {
                            rad: t[n],
                            point: t,
                            id: e
                        }
                    }
                }
            }, function (t, e, n) {
                "use strict";
                e.a = function () {
                    function t(t) {
                        return o[t] || (o[t] = {
                            subscribers: []
                        }), o[t]
                    }

                    function e() {
                        o = {}
                    }

                    function n(t, e) {
                        t.async ? setTimeout((function () {
                            t.callback(e)
                        }), 4) : t.callback(e)
                    }

                    function r(e, n, r) {
                        var o;
                        if ("function" == typeof n) o = {
                            callback: n,
                            async: r
                        };
                        else if (!(o = n).callback) throw "Callback was not specified on options";
                        t(e).subscribers.push(o)
                    }
                    var o = {};
                    return {
                        subscribe: function (t, e, n) {
                            return r(t, e, n)
                        },
                        publish: function (e, r) {
                            var o = t(e),
                                i = o.subscribers;
                            i.filter((function (t) {
                                return !!t.once
                            })).forEach((function (t) {
                                n(t, r)
                            })), o.subscribers = i.filter((function (t) {
                                return !t.once
                            })), o.subscribers.forEach((function (t) {
                                n(t, r)
                            }))
                        },
                        once: function (t, e, n) {
                            r(t, {
                                callback: e,
                                async: n,
                                once: !0
                            })
                        },
                        unsubscribe: function (n, r) {
                            var o;
                            n ? (o = t(n)).subscribers = o && r ? o.subscribers.filter((function (t) {
                                return t.callback !== r
                            })) : [] : e()
                        }
                    }
                }()
            }, function (t, e, n) {
                "use strict";
                e.b = function () {
                    return navigator.mediaDevices && "function" == typeof navigator.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices() : Promise.reject(new Error("enumerateDevices is not defined"))
                }, e.a = function (t) {
                    return navigator.mediaDevices && "function" == typeof navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia(t) : Promise.reject(new Error("getUserMedia is not defined"))
                }
            }, function (t, e, n) {
                "use strict";

                function r(t, e, n) {
                    n || (n = {
                        data: null,
                        size: e
                    }), this.data = n.data, this.originalSize = n.size, this.I = n, this.from = t, this.size = e
                }
                r.prototype.show = function (t, e) {
                    var n, r, o, i, a, u, c;
                    for (e || (e = 1), n = t.getContext("2d"), t.width = this.size.x, t.height = this.size.y, o = (r = n.getImageData(0, 0, t.width, t.height)).data, i = 0, a = 0; a < this.size.y; a++)
                        for (u = 0; u < this.size.x; u++) c = a * this.size.x + u, i = this.get(u, a) * e, o[4 * c + 0] = i, o[4 * c + 1] = i, o[4 * c + 2] = i, o[4 * c + 3] = 255;
                    r.data = o, n.putImageData(r, 0, 0)
                }, r.prototype.get = function (t, e) {
                    return this.data[(this.from.y + e) * this.originalSize.x + this.from.x + t]
                }, r.prototype.updateData = function (t) {
                    this.originalSize = t.size, this.data = t.data
                }, r.prototype.updateFrom = function (t) {
                    return this.from = t, this
                }, e.a = r
            }, function (t, e) {
                "undefined" != typeof window && (window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    window.setTimeout(t, 1e3 / 60)
                }), Math.imul = Math.imul || function (t, e) {
                    var n = 65535 & t,
                        r = 65535 & e;
                    return n * r + ((t >>> 16 & 65535) * r + n * (e >>> 16 & 65535) << 16 >>> 0) | 0
                }, "function" != typeof Object.assign && (Object.assign = function (t) {
                    "use strict";
                    if (null === t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        if (null !== r)
                            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                })
            }, function (t, e, n) {
                "use strict";
                var r;
                r = n(56), e.a = r
            }, function (t, e) {
                t.exports = {
                    inputStream: {
                        name: "Live",
                        type: "LiveStream",
                        constraints: {
                            width: 640,
                            height: 480,
                            facingMode: "environment"
                        },
                        area: {
                            top: "0%",
                            right: "0%",
                            left: "0%",
                            bottom: "0%"
                        },
                        singleChannel: !1
                    },
                    locate: !0,
                    numOfWorkers: 4,
                    decoder: {
                        readers: ["code_128_reader"]
                    },
                    locator: {
                        halfSample: !0,
                        patchSize: "medium"
                    }
                }
            }, function (t, e, n) {
                "use strict";
                var r = n(58),
                    o = (n(9), n(69)),
                    i = n(4),
                    a = n(31),
                    u = n(70),
                    c = n(68),
                    s = n(77),
                    f = n(74),
                    l = n(72),
                    d = n(73),
                    h = n(76),
                    p = n(75),
                    v = n(67),
                    _ = n(71),
                    g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    } : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    y = {
                        code_128_reader: o.a,
                        ean_reader: i.a,
                        ean_5_reader: d.a,
                        ean_2_reader: l.a,
                        ean_8_reader: f.a,
                        code_39_reader: a.a,
                        code_39_vin_reader: u.a,
                        codabar_reader: c.a,
                        upc_reader: s.a,
                        upc_e_reader: h.a,
                        i2of5_reader: p.a,
                        "2of5_reader": v.a,
                        code_93_reader: _.a
                    };
                e.a = {
                    create: function (t, e) {
                        function n() {
                            t.readers.forEach((function (t) {
                                var e, n = {},
                                    r = [];
                                "object" === (void 0 === t ? "undefined" : g(t)) ? (e = t.format, n = t.config) : "string" == typeof t && (e = t), n.supplements && (r = n.supplements.map((function (t) {
                                    return new y[t]
                                }))), c.push(new y[e](n, r))
                            }))
                        }

                        function o(t, n, r) {
                            function o(e) {
                                var r = e * Math.sin(n),
                                    o = e * Math.cos(n);
                                t[0].y -= r, t[0].x -= o, t[1].y += r, t[1].x += o
                            }
                            for (o(r); r > 1 && (!e.inImageWithBorder(t[0], 0) || !e.inImageWithBorder(t[1], 0));) o(-(r -= Math.ceil(r / 2)));
                            return t
                        }

                        function i(t) {
                            var n, o = null,
                                i = r.a.getBarcodeLine(e, t[0], t[1]);
                            for (r.a.toBinaryLine(i), n = 0; n < c.length && null === o; n++) o = c[n].decodePattern(i.line);
                            return null === o ? null : {
                                codeResult: o,
                                barcodeLine: i
                            }
                        }

                        function a(t) {
                            var e, n, r, a;
                            return u.ctx.overlay, a = function (t) {
                                return Math.sqrt(Math.pow(Math.abs(t[1].y - t[0].y), 2) + Math.pow(Math.abs(t[1].x - t[0].x), 2))
                            }(e = function (t) {
                                return [{
                                    x: (t[1][0] - t[0][0]) / 2 + t[0][0],
                                    y: (t[1][1] - t[0][1]) / 2 + t[0][1]
                                }, {
                                    x: (t[3][0] - t[2][0]) / 2 + t[2][0],
                                    y: (t[3][1] - t[2][1]) / 2 + t[2][1]
                                }]
                            }(t)), null === (e = o(e, n = Math.atan2(e[1].y - e[0].y, e[1].x - e[0].x), Math.floor(.1 * a))) ? null : (null === (r = i(e)) && (r = function (t, e, n) {
                                var r, o, a, u = Math.sqrt(Math.pow(t[1][0] - t[0][0], 2) + Math.pow(t[1][1] - t[0][1], 2)),
                                    c = null,
                                    s = Math.sin(n),
                                    f = Math.cos(n);
                                for (r = 1; r < 16 && null === c; r++) a = {
                                    y: (o = u / 16 * r * (r % 2 == 0 ? -1 : 1)) * s,
                                    x: o * f
                                }, e[0].y += a.x, e[0].x -= a.y, e[1].y += a.x, e[1].x -= a.y, c = i(e);
                                return c
                            }(t, e, n)), null === r ? null : {
                                codeResult: r.codeResult,
                                line: e,
                                angle: n,
                                pattern: r.barcodeLine.line,
                                threshold: r.barcodeLine.threshold
                            })
                        }
                        var u = {
                                ctx: {
                                    frequency: null,
                                    pattern: null,
                                    overlay: null
                                },
                                dom: {
                                    frequency: null,
                                    pattern: null,
                                    overlay: null
                                }
                            },
                            c = [];
                        return n(), {
                            decodeFromBoundingBox: function (t) {
                                return a(t)
                            },
                            decodeFromBoundingBoxes: function (e) {
                                var n, r, o = [],
                                    i = t.multiple;
                                for (n = 0; n < e.length; n++) {
                                    var u = e[n];
                                    if ((r = a(u) || {}).box = u, i) o.push(r);
                                    else if (r.codeResult) return r
                                }
                                if (i) return {
                                    barcodes: o
                                }
                            },
                            setReaders: function (e) {
                                t.readers = e, c.length = 0, n()
                            }
                        }
                    }
                }
            }, function (t, e, n) {
                "use strict";
                var r = (n(20), {}),
                    o = {
                        UP: 1,
                        DOWN: -1
                    };
                r.getBarcodeLine = function (t, e, n) {
                    function r(t, e) {
                        l = y[e * m + t], x = l < x ? l : x, b = l > b ? l : b, g.push(l)
                    }
                    var o, i, a, u, c, s, f, l, d = 0 | e.x,
                        h = 0 | e.y,
                        p = 0 | n.x,
                        v = 0 | n.y,
                        _ = Math.abs(v - h) > Math.abs(p - d),
                        g = [],
                        y = t.data,
                        m = t.size.x,
                        x = 255,
                        b = 0;
                    for (_ && (s = d, d = h, h = s, s = p, p = v, v = s), d > p && (s = d, d = p, p = s, s = h, h = v, v = s), o = p - d, i = Math.abs(v - h), a = o / 2 | 0, c = h, u = h < v ? 1 : -1, f = d; f < p; f++) _ ? r(c, f) : r(f, c), (a -= i) < 0 && (c += u, a += o);
                    return {
                        line: g,
                        min: x,
                        max: b
                    }
                }, r.toBinaryLine = function (t) {
                    var e, n, r, i, a, u, c = t.min,
                        s = t.max,
                        f = t.line,
                        l = c + (s - c) / 2,
                        d = [],
                        h = (s - c) / 12,
                        p = -h;
                    for (r = f[0] > l ? o.UP : o.DOWN, d.push({
                            pos: 0,
                            val: f[0]
                        }), a = 0; a < f.length - 2; a++) r !== (i = (e = f[a + 1] - f[a]) + (n = f[a + 2] - f[a + 1]) < p && f[a + 1] < 1.5 * l ? o.DOWN : e + n > h && f[a + 1] > .5 * l ? o.UP : r) && (d.push({
                        pos: a,
                        val: f[a]
                    }), r = i);
                    for (d.push({
                            pos: f.length,
                            val: f[f.length - 1]
                        }), u = d[0].pos; u < d[1].pos; u++) f[u] = f[u] > l ? 0 : 1;
                    for (a = 1; a < d.length - 1; a++)
                        for (h = d[a + 1].val > d[a].val ? d[a].val + (d[a + 1].val - d[a].val) / 3 * 2 | 0 : d[a + 1].val + (d[a].val - d[a + 1].val) / 3 | 0, u = d[a].pos; u < d[a + 1].pos; u++) f[u] = f[u] > h ? 0 : 1;
                    return {
                        line: f,
                        threshold: h
                    }
                }, r.debug = {
                    printFrequency: function (t, e) {
                        var n, r = e.getContext("2d");
                        for (e.width = t.length, e.height = 256, r.beginPath(), r.strokeStyle = "blue", n = 0; n < t.length; n++) r.moveTo(n, 255), r.lineTo(n, 255 - t[n]);
                        r.stroke(), r.closePath()
                    },
                    printPattern: function (t, e) {
                        var n, r = e.getContext("2d");
                        for (e.width = t.length, r.fillColor = "black", n = 0; n < t.length; n++) 1 === t[n] && r.fillRect(n, 0, 1, 100)
                    }
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r(t) {
                    return new Promise((function (e, n) {
                        var r = 10;
                        ! function o() {
                            r > 0 ? t.videoWidth > 10 && t.videoHeight > 10 ? e() : window.setTimeout(o, 500) : n("Unable to play video stream. Is webcam working?"), r--
                        }()
                    }))
                }

                function o(t, e) {
                    return n.i(f.a)(e).then((function (e) {
                        return new Promise((function (n) {
                            u = e, t.setAttribute("autoplay", !0), t.setAttribute("muted", !0), t.setAttribute("playsinline", !0), t.srcObject = e, t.addEventListener("loadedmetadata", (function () {
                                t.play(), n()
                            }))
                        }))
                    })).then(r.bind(null, t))
                }

                function i(t) {
                    var e = s()(t, ["width", "height", "facingMode", "aspectRatio", "deviceId"]);
                    return void 0 !== t.minAspectRatio && t.minAspectRatio > 0 && (e.aspectRatio = t.minAspectRatio, console.log("WARNING: Constraint 'minAspectRatio' is deprecated; Use 'aspectRatio' instead")), void 0 !== t.facing && (e.facingMode = t.facing, console.log("WARNING: Constraint 'facing' is deprecated. Use 'facingMode' instead'")), e
                }

                function a() {
                    if (u) {
                        var t = u.getVideoTracks();
                        if (t && t.length) return t[0]
                    }
                }
                var u, c = n(162),
                    s = n.n(c),
                    f = n(52);
                e.a = {
                    request: function (t, e) {
                        return function (t) {
                            var e = {
                                audio: !1,
                                video: i(t)
                            };
                            return e.video.deviceId && e.video.facingMode && delete e.video.facingMode, Promise.resolve(e)
                        }(e).then(o.bind(null, t))
                    },
                    release: function () {
                        var t = u && u.getVideoTracks();
                        t && t.length && t[0].stop(), u = null
                    },
                    enumerateVideoDevices: function () {
                        return n.i(f.b)().then((function (t) {
                            return t.filter((function (t) {
                                return "videoinput" === t.kind
                            }))
                        }))
                    },
                    getActiveStreamLabel: function () {
                        var t = a();
                        return t ? t.label : ""
                    },
                    getActiveTrack: a
                }
            }, function (t, e, n) {
                "use strict";

                function r(t) {
                    return new Promise((function (e) {
                        var n = new FileReader;
                        n.onload = function (t) {
                            return e(t.target.result)
                        }, n.readAsArrayBuffer(t)
                    }))
                }

                function o(t) {
                    return new Promise((function (e, n) {
                        var r = new XMLHttpRequest;
                        r.open("GET", t, !0), r.responseType = "blob", r.onreadystatechange = function () {
                            r.readyState !== XMLHttpRequest.DONE || 200 !== r.status && 0 !== r.status || e(this.response)
                        }, r.onerror = n, r.send()
                    }))
                }

                function i(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                        n = new DataView(t),
                        r = t.byteLength,
                        o = e.reduce((function (t, e) {
                            var n = Object.keys(c).filter((function (t) {
                                return c[t] === e
                            }))[0];
                            return n && (t[n] = e), t
                        }), {}),
                        i = 2;
                    if (255 !== n.getUint8(0) || 216 !== n.getUint8(1)) return !1;
                    for (; i < r;) {
                        if (255 !== n.getUint8(i)) return !1;
                        if (225 === n.getUint8(i + 1)) return a(n, i + 4, o);
                        i += 2 + n.getUint16(i + 2)
                    }
                }

                function a(t, e, n) {
                    if ("Exif" !== function (t, e, n) {
                            for (var r = "", o = e; o < e + n; o++) r += String.fromCharCode(t.getUint8(o));
                            return r
                        }(t, e, 4)) return !1;
                    var r = e + 6,
                        o = void 0;
                    if (18761 === t.getUint16(r)) o = !1;
                    else {
                        if (19789 !== t.getUint16(r)) return !1;
                        o = !0
                    }
                    if (42 !== t.getUint16(r + 2, !o)) return !1;
                    var i = t.getUint32(r + 4, !o);
                    return !(i < 8) && function (t, e, n, r, o) {
                        for (var i = t.getUint16(n, !o), a = {}, c = 0; c < i; c++) {
                            var s = n + 12 * c + 2,
                                f = r[t.getUint16(s, !o)];
                            f && (a[f] = u(t, s, 0, 0, o))
                        }
                        return a
                    }(t, 0, r + i, n, o)
                }

                function u(t, e, n, r, o) {
                    var i = t.getUint16(e + 2, !o),
                        a = t.getUint32(e + 4, !o);
                    switch (i) {
                        case 3:
                            if (1 === a) return t.getUint16(e + 8, !o)
                    }
                }
                e.a = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s;
                    return /^blob\:/i.test(t) ? o(t).then(r).then((function (t) {
                        return i(t, e)
                    })) : Promise.resolve(null)
                };
                var c = {
                        274: "orientation"
                    },
                    s = Object.keys(c).map((function (t) {
                        return c[t]
                    }))
            }, function (t, e, n) {
                "use strict";
                var r = n(19),
                    o = Math.PI / 180,
                    i = {
                        create: function (t, e) {
                            var i, a = {},
                                u = t.getConfig(),
                                c = (n.i(r.b)(t.getRealWidth(), t.getRealHeight()), t.getCanvasSize()),
                                s = n.i(r.b)(t.getWidth(), t.getHeight()),
                                f = t.getTopRight(),
                                l = f.x,
                                d = f.y,
                                h = null,
                                p = null;
                            return (i = e || document.createElement("canvas")).width = c.x, i.height = c.y, h = i.getContext("2d"), p = new Uint8Array(s.x * s.y), a.attachData = function (t) {
                                p = t
                            }, a.getData = function () {
                                return p
                            }, a.grab = function () {
                                var e, a = u.halfSample,
                                    f = t.getFrame(),
                                    v = f,
                                    _ = 0;
                                if (v) {
                                    if (function (t, e) {
                                            t.width !== e.x && (t.width = e.x), t.height !== e.y && (t.height = e.y)
                                        }(i, c), "ImageStream" === u.type && (v = f.img, f.tags && f.tags.orientation)) switch (f.tags.orientation) {
                                        case 6:
                                            _ = 90 * o;
                                            break;
                                        case 8:
                                            _ = -90 * o
                                    }
                                    return 0 !== _ ? (h.translate(c.x / 2, c.y / 2), h.rotate(_), h.drawImage(v, -c.y / 2, -c.x / 2, c.y, c.x), h.rotate(-_), h.translate(-c.x / 2, -c.y / 2)) : h.drawImage(v, 0, 0, c.x, c.y), e = h.getImageData(l, d, s.x, s.y).data, a ? n.i(r.c)(e, s, p) : n.i(r.d)(e, p, u), !0
                                }
                                return !1
                            }, a.getSize = function () {
                                return s
                            }, a
                        }
                    };
                e.a = i
            }, function (t, e, n) {
                "use strict";

                function r(t, e) {
                    t.onload = function () {
                        e.loaded(this)
                    }
                }
                var o = n(60),
                    i = {
                        load: function (t, e, i, a, u) {
                            var c, s, f, l = new Array(a),
                                d = new Array(l.length);
                            if (!1 === u) l[0] = t;
                            else
                                for (c = 0; c < l.length; c++) f = i + c, l[c] = t + "image-" + ("00" + f).slice(-3) + ".jpg";
                            for (d.notLoaded = [], d.addImage = function (t) {
                                    d.notLoaded.push(t)
                                }, d.loaded = function (r) {
                                    for (var i = d.notLoaded, a = 0; a < i.length; a++)
                                        if (i[a] === r) {
                                            i.splice(a, 1);
                                            for (var c = 0; c < l.length; c++) {
                                                var s = l[c].substr(l[c].lastIndexOf("/"));
                                                if (-1 !== r.src.lastIndexOf(s)) {
                                                    d[c] = {
                                                        img: r
                                                    };
                                                    break
                                                }
                                            }
                                            break
                                        } 0 === i.length && (!1 === u ? n.i(o.a)(t, ["orientation"]).then((function (t) {
                                        d[0].tags = t, e(d)
                                    })).catch((function (t) {
                                        console.log(t), e(d)
                                    })) : e(d))
                                }, c = 0; c < l.length; c++) s = new Image, d.addImage(s), r(s, d), s.src = l[c]
                        }
                    };
                e.a = i
            }, function (t, e, n) {
                "use strict";
                var r = n(62),
                    o = {
                        createVideoStream: function (t) {
                            function e() {
                                var e = t.videoWidth,
                                    o = t.videoHeight;
                                n = i.size ? e / o > 1 ? i.size : Math.floor(e / o * i.size) : e, r = i.size ? e / o > 1 ? Math.floor(o / e * i.size) : i.size : o, s.x = n, s.y = r
                            }
                            var n, r, o = {},
                                i = null,
                                a = ["canrecord", "ended"],
                                u = {},
                                c = {
                                    x: 0,
                                    y: 0
                                },
                                s = {
                                    x: 0,
                                    y: 0
                                };
                            return o.getRealWidth = function () {
                                return t.videoWidth
                            }, o.getRealHeight = function () {
                                return t.videoHeight
                            }, o.getWidth = function () {
                                return n
                            }, o.getHeight = function () {
                                return r
                            }, o.setWidth = function (t) {
                                n = t
                            }, o.setHeight = function (t) {
                                r = t
                            }, o.setInputStream = function (e) {
                                i = e, t.src = void 0 !== e.src ? e.src : ""
                            }, o.ended = function () {
                                return t.ended
                            }, o.getConfig = function () {
                                return i
                            }, o.setAttribute = function (e, n) {
                                t.setAttribute(e, n)
                            }, o.pause = function () {
                                t.pause()
                            }, o.play = function () {
                                t.play()
                            }, o.setCurrentTime = function (e) {
                                "LiveStream" !== i.type && (t.currentTime = e)
                            }, o.addEventListener = function (e, n, r) {
                                -1 !== a.indexOf(e) ? (u[e] || (u[e] = []), u[e].push(n)) : t.addEventListener(e, n, r)
                            }, o.clearEventHandlers = function () {
                                a.forEach((function (e) {
                                    var n = u[e];
                                    n && n.length > 0 && n.forEach((function (n) {
                                        t.removeEventListener(e, n)
                                    }))
                                }))
                            }, o.trigger = function (t, n) {
                                var r, i = u[t];
                                if ("canrecord" === t && e(), i && i.length > 0)
                                    for (r = 0; r < i.length; r++) i[r].apply(o, n)
                            }, o.setTopRight = function (t) {
                                c.x = t.x, c.y = t.y
                            }, o.getTopRight = function () {
                                return c
                            }, o.setCanvasSize = function (t) {
                                s.x = t.x, s.y = t.y
                            }, o.getCanvasSize = function () {
                                return s
                            }, o.getFrame = function () {
                                return t
                            }, o
                        },
                        createLiveStream: function (t) {
                            t.setAttribute("autoplay", !0);
                            var e = o.createVideoStream(t);
                            return e.ended = function () {
                                return !1
                            }, e
                        },
                        createImageStream: function () {
                            function t() {
                                l = !1, r.a.load(v, (function (t) {
                                    if (d = t, t[0].tags && t[0].tags.orientation) switch (t[0].tags.orientation) {
                                        case 6:
                                        case 8:
                                            u = t[0].img.height, c = t[0].img.width;
                                            break;
                                        default:
                                            u = t[0].img.width, c = t[0].img.height
                                    } else u = t[0].img.width, c = t[0].img.height;
                                    n = a.size ? u / c > 1 ? a.size : Math.floor(u / c * a.size) : u, o = a.size ? u / c > 1 ? Math.floor(c / u * a.size) : a.size : c, x.x = n, x.y = o, l = !0, s = 0, setTimeout((function () {
                                        e("canrecord", [])
                                    }), 0)
                                }), p, h, a.sequence)
                            }

                            function e(t, e) {
                                var n, r = y[t];
                                if (r && r.length > 0)
                                    for (n = 0; n < r.length; n++) r[n].apply(i, e)
                            }
                            var n, o, i = {},
                                a = null,
                                u = 0,
                                c = 0,
                                s = 0,
                                f = !0,
                                l = !1,
                                d = null,
                                h = 0,
                                p = 1,
                                v = null,
                                _ = !1,
                                g = ["canrecord", "ended"],
                                y = {},
                                m = {
                                    x: 0,
                                    y: 0
                                },
                                x = {
                                    x: 0,
                                    y: 0
                                };
                            return i.trigger = e, i.getWidth = function () {
                                return n
                            }, i.getHeight = function () {
                                return o
                            }, i.setWidth = function (t) {
                                n = t
                            }, i.setHeight = function (t) {
                                o = t
                            }, i.getRealWidth = function () {
                                return u
                            }, i.getRealHeight = function () {
                                return c
                            }, i.setInputStream = function (e) {
                                a = e, !1 === e.sequence ? (v = e.src, h = 1) : (v = e.src, h = e.length), t()
                            }, i.ended = function () {
                                return _
                            }, i.setAttribute = function () {}, i.getConfig = function () {
                                return a
                            }, i.pause = function () {
                                f = !0
                            }, i.play = function () {
                                f = !1
                            }, i.setCurrentTime = function (t) {
                                s = t
                            }, i.addEventListener = function (t, e) {
                                -1 !== g.indexOf(t) && (y[t] || (y[t] = []), y[t].push(e))
                            }, i.setTopRight = function (t) {
                                m.x = t.x, m.y = t.y
                            }, i.getTopRight = function () {
                                return m
                            }, i.setCanvasSize = function (t) {
                                x.x = t.x, x.y = t.y
                            }, i.getCanvasSize = function () {
                                return x
                            }, i.getFrame = function () {
                                var t;
                                return l ? (f || (t = d[s], s < h - 1 ? s++ : setTimeout((function () {
                                    _ = !0, e("ended", [])
                                }), 0)), t) : null
                            }, i
                        }
                    };
                e.a = o
            }, function (t, e, n) {
                "use strict";
                (function (t) {
                    function r() {
                        var e;
                        s = c.halfSample ? new x.a({
                            x: y.size.x / 2 | 0,
                            y: y.size.y / 2 | 0
                        }) : y, g = n.i(b.e)(c.patchSize, s.size), S.x = s.size.x / g.x | 0, S.y = s.size.y / g.y | 0, _ = new x.a(s.size, void 0, Uint8Array, !1), d = new x.a(g, void 0, Array, !0), e = new ArrayBuffer(65536), l = new x.a(g, new Uint8Array(e, 0, g.x * g.y)), f = new x.a(g, new Uint8Array(e, g.x * g.y * 3, g.x * g.y), void 0, !0), m = n.i(w.a)("undefined" != typeof window ? window : "undefined" != typeof self ? self : t, {
                            size: g.x
                        }, e), v = new x.a({
                            x: s.size.x / l.size.x | 0,
                            y: s.size.y / l.size.y | 0
                        }, void 0, Array, !0), h = new x.a(v.size, void 0, void 0, !0), p = new x.a(v.size, void 0, Int32Array, !0)
                    }

                    function o(t) {
                        var e, n, r, o, i, a, u, s = _.size.x,
                            f = _.size.y,
                            l = -_.size.x,
                            d = -_.size.y;
                        for (e = 0, n = 0; n < t.length; n++) e += (o = t[n]).rad;
                        for ((e = (180 * (e /= t.length) / Math.PI + 90) % 180 - 90) < 0 && (e += 180), e = (180 - e) * Math.PI / 180, i = R.copy(R.create(), [Math.cos(e), Math.sin(e), -Math.sin(e), Math.cos(e)]), n = 0; n < t.length; n++)
                            for (o = t[n], r = 0; r < 4; r++) A.transformMat2(o.box[r], o.box[r], i);
                        for (n = 0; n < t.length; n++)
                            for (o = t[n], r = 0; r < 4; r++) o.box[r][0] < s && (s = o.box[r][0]), o.box[r][0] > l && (l = o.box[r][0]), o.box[r][1] < f && (f = o.box[r][1]), o.box[r][1] > d && (d = o.box[r][1]);
                        for (a = [[s, f], [l, f], [l, d], [s, d]], u = c.halfSample ? 2 : 1, i = R.invert(i, i), r = 0; r < 4; r++) A.transformMat2(a[r], a[r], i);
                        for (r = 0; r < 4; r++) A.scale(a[r], a[r], u);
                        return a
                    }

                    function i(t) {
                        var e = n.i(b.g)(t, .9),
                            r = n.i(b.h)(e, 1, (function (t) {
                                return t.getPoints().length
                            })),
                            o = [],
                            i = [];
                        if (1 === r.length) {
                            o = r[0].item.getPoints();
                            for (var a = 0; a < o.length; a++) i.push(o[a].point)
                        }
                        return i
                    }

                    function a(t, e) {
                        _.subImageAsCopy(l, n.i(b.b)(t, e)), m.skeletonize()
                    }

                    function u(t, e, n, r) {
                        var o, a, u, c, s = [],
                            f = [],
                            d = Math.ceil(g.x / 3);
                        if (t.length >= 2) {
                            for (o = 0; o < t.length; o++) t[o].m00 > d && s.push(t[o]);
                            if (s.length >= 2) {
                                for (u = i(s), a = 0, o = 0; o < u.length; o++) a += u[o].rad;
                                u.length > 1 && u.length >= s.length / 4 * 3 && u.length > t.length / 4 && (a /= u.length, c = {
                                    index: e[1] * S.x + e[0],
                                    pos: {
                                        x: n,
                                        y: r
                                    },
                                    box: [A.clone([n, r]), A.clone([n + l.size.x, r]), A.clone([n + l.size.x, r + l.size.y]), A.clone([n, r + l.size.y])],
                                    moments: u,
                                    rad: a,
                                    vec: A.clone([Math.cos(a), Math.sin(a)])
                                }, f.push(c))
                            }
                        }
                        return f
                    }
                    var c, s, f, l, d, h, p, v, _, g, y, m, x = n(20),
                        b = n(19),
                        E = n(3),
                        C = (n(9), n(65)),
                        O = n(30),
                        w = n(66),
                        A = {
                            clone: n(7),
                            dot: n(32),
                            scale: n(81),
                            transformMat2: n(82)
                        },
                        R = {
                            copy: n(78),
                            create: n(79),
                            invert: n(80)
                        },
                        T = {
                            ctx: {
                                binary: null
                            },
                            dom: {
                                binary: null
                            }
                        },
                        S = {
                            x: 0,
                            y: 0
                        };
                    e.a = {
                        init: function (t, e) {
                            c = e, y = t, r(), c.useWorker || "undefined" == typeof document || (T.dom.binary = document.createElement("canvas"), T.dom.binary.className = "binaryBuffer", T.ctx.binary = T.dom.binary.getContext("2d"), T.dom.binary.width = _.size.x, T.dom.binary.height = _.size.y)
                        },
                        locate: function () {
                            var t, e;
                            if (c.halfSample && n.i(b.i)(y, s), n.i(b.f)(s, _), _.zeroBorder(), (t = function () {
                                    var t, e, n, r, o, i, c = [];
                                    for (t = 0; t < S.x; t++)
                                        for (e = 0; e < S.y; e++) a(n = l.size.x * t, r = l.size.y * e), f.zeroBorder(), E.a.init(d.data, 0), i = C.a.create(f, d).rasterize(0), o = d.moments(i.count), c = c.concat(u(o, [t, e], n, r));
                                    return c
                                }()).length < S.x * S.y * .05) return null;
                            var r = function (t) {
                                function e() {
                                    var t;
                                    for (t = 0; t < p.data.length; t++)
                                        if (0 === p.data[t] && 1 === h.data[t]) return t;
                                    return p.length
                                }

                                function n(t) {
                                    var e, r, o, u, c, s = t % p.size.x,
                                        f = t / p.size.x | 0;
                                    if (t < p.data.length)
                                        for (o = v.data[t], p.data[t] = i, c = 0; c < O.a.searchDirections.length; c++) r = f + O.a.searchDirections[c][0], e = s + O.a.searchDirections[c][1], u = r * p.size.x + e, 0 !== h.data[u] ? 0 === p.data[u] && Math.abs(A.dot(v.data[u].vec, o.vec)) > a && n(u) : p.data[u] = Number.MAX_VALUE
                                }
                                var r, o, i = 0,
                                    a = .95,
                                    u = 0;
                                for (E.a.init(h.data, 0), E.a.init(p.data, 0), E.a.init(v.data, null), r = 0; r < t.length; r++) o = t[r], v.data[o.index] = o, h.data[o.index] = 1;
                                for (h.zeroBorder();
                                    (u = e()) < p.data.length;) i++, n(u);
                                return i
                            }(t);
                            return r < 1 || 0 === (e = function (t) {
                                var e, n, r = [];
                                for (e = 0; e < t; e++) r.push(0);
                                for (n = p.data.length; n--;) p.data[n] > 0 && r[p.data[n] - 1]++;
                                return (r = r.map((function (t, e) {
                                    return {
                                        val: t,
                                        label: e + 1
                                    }
                                }))).sort((function (t, e) {
                                    return e.val - t.val
                                })), r.filter((function (t) {
                                    return t.val >= 5
                                }))
                            }(r)).length ? null : function (t, e) {
                                var n, r, i, a, u = [],
                                    c = [];
                                for (n = 0; n < t.length; n++) {
                                    for (r = p.data.length, u.length = 0; r--;) p.data[r] === t[n].label && (i = v.data[r], u.push(i));
                                    (a = o(u)) && c.push(a)
                                }
                                return c
                            }(e)
                        },
                        checkImageConstraints: function (t, e) {
                            var r, o, i, a = t.getWidth(),
                                u = t.getHeight(),
                                c = e.halfSample ? .5 : 1;
                            if (t.getConfig().area && (i = n.i(b.j)(a, u, t.getConfig().area), t.setTopRight({
                                    x: i.sx,
                                    y: i.sy
                                }), t.setCanvasSize({
                                    x: a,
                                    y: u
                                }), a = i.sw, u = i.sh), o = {
                                    x: Math.floor(a * c),
                                    y: Math.floor(u * c)
                                }, r = n.i(b.e)(e.patchSize, o), t.setWidth(Math.floor(Math.floor(o.x / r.x) * (1 / c) * r.x)), t.setHeight(Math.floor(Math.floor(o.y / r.y) * (1 / c) * r.y)), t.getWidth() % r.x == 0 && t.getHeight() % r.y == 0) return !0;
                            throw new Error("Image dimensions do not comply with the current settings: Width (" + a + " )and height (" + u + ") must a multiple of " + r.x)
                        }
                    }
                }).call(e, n(47))
            }, function (t, e, n) {
                "use strict";
                var r = n(30),
                    o = {
                        createContour2D: function () {
                            return {
                                dir: null,
                                index: null,
                                firstVertex: null,
                                insideContours: null,
                                nextpeer: null,
                                prevpeer: null
                            }
                        },
                        CONTOUR_DIR: {
                            CW_DIR: 0,
                            CCW_DIR: 1,
                            UNKNOWN_DIR: 2
                        },
                        DIR: {
                            OUTSIDE_EDGE: -32767,
                            INSIDE_EDGE: -32766
                        },
                        create: function (t, e) {
                            var n = t.data,
                                i = e.data,
                                a = t.size.x,
                                u = t.size.y,
                                c = r.a.create(t, e);
                            return {
                                rasterize: function (t) {
                                    var e, r, s, f, l, d, h, p, v, _, g, y, m = [],
                                        x = 0;
                                    for (y = 0; y < 400; y++) m[y] = 0;
                                    for (m[0] = n[0], v = null, d = 1; d < u - 1; d++)
                                        for (f = 0, r = m[0], l = 1; l < a - 1; l++)
                                            if (0 === i[g = d * a + l])
                                                if ((e = n[g]) !== r) {
                                                    if (0 === f) m[s = x + 1] = e, r = e, null !== (h = c.contourTracing(d, l, s, e, o.DIR.OUTSIDE_EDGE)) && (x++, f = s, (p = o.createContour2D()).dir = o.CONTOUR_DIR.CW_DIR, p.index = f, p.firstVertex = h, p.nextpeer = v, p.insideContours = null, null !== v && (v.prevpeer = p), v = p);
                                                    else if (null !== (h = c.contourTracing(d, l, o.DIR.INSIDE_EDGE, e, f))) {
                                                        for ((p = o.createContour2D()).firstVertex = h, p.insideContours = null, p.dir = 0 === t ? o.CONTOUR_DIR.CCW_DIR : o.CONTOUR_DIR.CW_DIR, p.index = t, _ = v; null !== _ && _.index !== f;) _ = _.nextpeer;
                                                        null !== _ && (p.nextpeer = _.insideContours, null !== _.insideContours && (_.insideContours.prevpeer = p), _.insideContours = p)
                                                    }
                                                } else i[g] = f;
                                    else i[g] === o.DIR.OUTSIDE_EDGE || i[g] === o.DIR.INSIDE_EDGE ? (f = 0, r = i[g] === o.DIR.INSIDE_EDGE ? n[g] : m[0]) : r = m[f = i[g]];
                                    for (_ = v; null !== _;) _.index = t, _ = _.nextpeer;
                                    return {
                                        cc: v,
                                        count: x
                                    }
                                },
                                debug: {
                                    drawContour: function (t, e) {
                                        var n, r, i, a = t.getContext("2d"),
                                            u = e;
                                        for (a.strokeStyle = "red", a.fillStyle = "red", a.lineWidth = 1, n = null !== u ? u.insideContours : null; null !== u;) {
                                            switch (null !== n ? (r = n, n = n.nextpeer) : (r = u, n = null !== (u = u.nextpeer) ? u.insideContours : null), r.dir) {
                                                case o.CONTOUR_DIR.CW_DIR:
                                                    a.strokeStyle = "red";
                                                    break;
                                                case o.CONTOUR_DIR.CCW_DIR:
                                                    a.strokeStyle = "blue";
                                                    break;
                                                case o.CONTOUR_DIR.UNKNOWN_DIR:
                                                    a.strokeStyle = "green"
                                            }
                                            i = r.firstVertex, a.beginPath(), a.moveTo(i.x, i.y);
                                            do {
                                                i = i.next, a.lineTo(i.x, i.y)
                                            } while (i !== r.firstVertex);
                                            a.stroke()
                                        }
                                    }
                                }
                            }
                        }
                    };
                e.a = o
            }, function (t, e, n) {
                "use strict";
                e.a = function (t, e, n) {
                    "use asm";
                    var r = new t.Uint8Array(n),
                        o = e.size | 0,
                        i = t.Math.imul;

                    function a(t, e) {
                        t = t | 0;
                        e = e | 0;
                        var n = 0,
                            i = 0,
                            a = 0,
                            u = 0,
                            c = 0,
                            s = 0,
                            f = 0,
                            l = 0;
                        for (n = 1;
                            (n | 0) < (o - 1 | 0); n = n + 1 | 0) {
                            l = l + o | 0;
                            for (i = 1;
                                (i | 0) < (o - 1 | 0); i = i + 1 | 0) {
                                u = l - o | 0;
                                c = l + o | 0;
                                s = i - 1 | 0;
                                f = i + 1 | 0;
                                a = (r[t + u + s | 0] | 0) + (r[t + u + f | 0] | 0) + (r[t + l + i | 0] | 0) + (r[t + c + s | 0] | 0) + (r[t + c + f | 0] | 0) | 0;
                                if ((a | 0) == (5 | 0)) {
                                    r[e + l + i | 0] = 1
                                } else {
                                    r[e + l + i | 0] = 0
                                }
                            }
                        }
                        return
                    }

                    function u(t, e, n) {
                        t = t | 0;
                        e = e | 0;
                        n = n | 0;
                        var a = 0;
                        a = i(o, o) | 0;
                        while ((a | 0) > 0) {
                            a = a - 1 | 0;
                            r[n + a | 0] = (r[t + a | 0] | 0) - (r[e + a | 0] | 0) | 0
                        }
                    }

                    function c(t, e, n) {
                        t = t | 0;
                        e = e | 0;
                        n = n | 0;
                        var a = 0;
                        a = i(o, o) | 0;
                        while ((a | 0) > 0) {
                            a = a - 1 | 0;
                            r[n + a | 0] = r[t + a | 0] | 0 | (r[e + a | 0] | 0) | 0
                        }
                    }

                    function s(t) {
                        t = t | 0;
                        var e = 0,
                            n = 0;
                        n = i(o, o) | 0;
                        while ((n | 0) > 0) {
                            n = n - 1 | 0;
                            e = (e | 0) + (r[t + n | 0] | 0) | 0
                        }
                        return e | 0
                    }

                    function f(t, e) {
                        t = t | 0;
                        e = e | 0;
                        var n = 0;
                        n = i(o, o) | 0;
                        while ((n | 0) > 0) {
                            n = n - 1 | 0;
                            r[t + n | 0] = e
                        }
                    }

                    function l(t, e) {
                        t = t | 0;
                        e = e | 0;
                        var n = 0,
                            i = 0,
                            a = 0,
                            u = 0,
                            c = 0,
                            s = 0,
                            f = 0,
                            l = 0;
                        for (n = 1;
                            (n | 0) < (o - 1 | 0); n = n + 1 | 0) {
                            l = l + o | 0;
                            for (i = 1;
                                (i | 0) < (o - 1 | 0); i = i + 1 | 0) {
                                u = l - o | 0;
                                c = l + o | 0;
                                s = i - 1 | 0;
                                f = i + 1 | 0;
                                a = (r[t + u + s | 0] | 0) + (r[t + u + f | 0] | 0) + (r[t + l + i | 0] | 0) + (r[t + c + s | 0] | 0) + (r[t + c + f | 0] | 0) | 0;
                                if ((a | 0) > (0 | 0)) {
                                    r[e + l + i | 0] = 1
                                } else {
                                    r[e + l + i | 0] = 0
                                }
                            }
                        }
                        return
                    }

                    function d(t, e) {
                        t = t | 0;
                        e = e | 0;
                        var n = 0;
                        n = i(o, o) | 0;
                        while ((n | 0) > 0) {
                            n = n - 1 | 0;
                            r[e + n | 0] = r[t + n | 0] | 0
                        }
                    }

                    function h(t) {
                        t = t | 0;
                        var e = 0,
                            n = 0;
                        for (e = 0;
                            (e | 0) < (o - 1 | 0); e = e + 1 | 0) {
                            r[t + e | 0] = 0;
                            r[t + n | 0] = 0;
                            n = n + o - 1 | 0;
                            r[t + n | 0] = 0;
                            n = n + 1 | 0
                        }
                        for (e = 0;
                            (e | 0) < (o | 0); e = e + 1 | 0) {
                            r[t + n | 0] = 0;
                            n = n + 1 | 0
                        }
                    }

                    function p() {
                        var t = 0,
                            e = 0,
                            n = 0,
                            r = 0,
                            p = 0,
                            v = 0;
                        e = i(o, o) | 0;
                        n = e + e | 0;
                        r = n + e | 0;
                        f(r, 0);
                        h(t);
                        do {
                            a(t, e);
                            l(e, n);
                            u(t, n, n);
                            c(r, n, r);
                            d(e, t);
                            p = s(t) | 0;
                            v = (p | 0) == 0 | 0
                        } while (!v)
                    }
                    return {
                        skeletonize: p
                    }
                }
            }, function (t, e, n) {
                "use strict";

                function r(t) {
                    o.a.call(this, t), this.barSpaceRatio = [1, 1]
                }
                var o = n(1),
                    i = {
                        START_PATTERN: {
                            value: [3, 1, 3, 1, 1, 1]
                        },
                        STOP_PATTERN: {
                            value: [3, 1, 1, 1, 3]
                        },
                        CODE_PATTERN: {
                            value: [[1, 1, 3, 3, 1], [3, 1, 1, 1, 3], [1, 3, 1, 1, 3], [3, 3, 1, 1, 1], [1, 1, 3, 1, 3], [3, 1, 3, 1, 1], [1, 3, 3, 1, 1], [1, 1, 1, 3, 3], [3, 1, 1, 3, 1], [1, 3, 1, 3, 1]]
                        },
                        SINGLE_CODE_ERROR: {
                            value: .78,
                            writable: !0
                        },
                        AVG_CODE_ERROR: {
                            value: .3,
                            writable: !0
                        },
                        FORMAT: {
                            value: "2of5"
                        }
                    },
                    a = i.START_PATTERN.value.reduce((function (t, e) {
                        return t + e
                    }), 0);
                r.prototype = Object.create(o.a.prototype, i), r.prototype.constructor = r, r.prototype._findPattern = function (t, e, n, r) {
                    var o, i, a, u, c = [],
                        s = this,
                        f = 0,
                        l = {
                            error: Number.MAX_VALUE,
                            code: -1,
                            start: 0,
                            end: 0
                        },
                        d = s.AVG_CODE_ERROR;
                    for (n = n || !1, r = r || !1, e || (e = s._nextSet(s._row)), o = 0; o < t.length; o++) c[o] = 0;
                    for (o = e; o < s._row.length; o++)
                        if (s._row[o] ^ n) c[f]++;
                        else {
                            if (f === c.length - 1) {
                                for (u = 0, a = 0; a < c.length; a++) u += c[a];
                                if ((i = s._matchPattern(c, t)) < d) return l.error = i, l.start = o - u, l.end = o, l;
                                if (!r) return null;
                                for (a = 0; a < c.length - 2; a++) c[a] = c[a + 2];
                                c[c.length - 2] = 0, c[c.length - 1] = 0, f--
                            } else f++;
                            c[f] = 1, n = !n
                        } return null
                }, r.prototype._findStart = function () {
                    for (var t, e, n = this, r = n._nextSet(n._row), o = 1; !e;) {
                        if (!(e = n._findPattern(n.START_PATTERN, r, !1, !0))) return null;
                        if (o = Math.floor((e.end - e.start) / a), (t = e.start - 5 * o) >= 0 && n._matchRange(t, e.start, 0)) return e;
                        r = e.end, e = null
                    }
                }, r.prototype._verifyTrailingWhitespace = function (t) {
                    var e;
                    return (e = t.end + (t.end - t.start) / 2) < this._row.length && this._matchRange(t.end, e, 0) ? t : null
                }, r.prototype._findEnd = function () {
                    var t, e, n, r = this;
                    return r._row.reverse(), n = r._nextSet(r._row), t = r._findPattern(r.STOP_PATTERN, n, !1, !0), r._row.reverse(), null === t ? null : (e = t.start, t.start = r._row.length - t.end, t.end = r._row.length - e, null !== t ? r._verifyTrailingWhitespace(t) : null)
                }, r.prototype._decodeCode = function (t) {
                    var e, n, r, o = this,
                        i = o.AVG_CODE_ERROR,
                        a = {
                            error: Number.MAX_VALUE,
                            code: -1,
                            start: 0,
                            end: 0
                        };
                    for (e = 0; e < t.length; e++) t[e];
                    for (r = 0; r < o.CODE_PATTERN.length; r++)(n = o._matchPattern(t, o.CODE_PATTERN[r])) < a.error && (a.code = r, a.error = n);
                    if (a.error < i) return a
                }, r.prototype._decodePayload = function (t, e, n) {
                    for (var r, o, i = 0, a = t.length, u = [0, 0, 0, 0, 0]; i < a;) {
                        for (r = 0; r < 5; r++) u[r] = t[i] * this.barSpaceRatio[0], i += 2;
                        if (!(o = this._decodeCode(u))) return null;
                        e.push(o.code + ""), n.push(o)
                    }
                    return o
                }, r.prototype._verifyCounterLength = function (t) {
                    return t.length % 10 == 0
                }, r.prototype._decode = function () {
                    var t, e, n, r = this,
                        o = [],
                        i = [];
                    return (t = r._findStart()) ? (i.push(t), (e = r._findEnd()) ? (n = r._fillCounters(t.end, e.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, o, i) ? o.length < 5 ? null : (i.push(e), {
                        code: o.join(""),
                        start: t.start,
                        end: e.end,
                        startInfo: t,
                        decodedCodes: i
                    }) : null) : null) : null
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r() {
                    o.a.call(this), this._counters = []
                }
                var o = n(1);
                r.prototype = Object.create(o.a.prototype, {
                    ALPHABETH_STRING: {
                        value: "0123456789-$:/.+ABCD"
                    },
                    ALPHABET: {
                        value: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 36, 58, 47, 46, 43, 65, 66, 67, 68]
                    },
                    CHARACTER_ENCODINGS: {
                        value: [3, 6, 9, 96, 18, 66, 33, 36, 48, 72, 12, 24, 69, 81, 84, 21, 26, 41, 11, 14]
                    },
                    START_END: {
                        value: [26, 41, 11, 14]
                    },
                    MIN_ENCODED_CHARS: {
                        value: 4
                    },
                    MAX_ACCEPTABLE: {
                        value: 2
                    },
                    PADDING: {
                        value: 1.5
                    },
                    FORMAT: {
                        value: "codabar",
                        writeable: !1
                    }
                }), r.prototype.constructor = r, r.prototype._decode = function () {
                    var t, e, n, r, o, i = this,
                        a = [];
                    if (this._counters = i._fillCounters(), !(t = i._findStart())) return null;
                    r = t.startCounter;
                    do {
                        if ((n = i._toPattern(r)) < 0) return null;
                        if ((e = i._patternToChar(n)) < 0) return null;
                        if (a.push(e), r += 8, a.length > 1 && i._isStartEnd(n)) break
                    } while (r < i._counters.length);
                    return a.length - 2 < i.MIN_ENCODED_CHARS || !i._isStartEnd(n) ? null : i._verifyWhitespace(t.startCounter, r - 8) && i._validateResult(a, t.startCounter) ? (r = r > i._counters.length ? i._counters.length : r, o = t.start + i._sumCounters(t.startCounter, r - 8), {
                        code: a.join(""),
                        start: t.start,
                        end: o,
                        startInfo: t,
                        decodedCodes: a
                    }) : null
                }, r.prototype._verifyWhitespace = function (t, e) {
                    return (t - 1 <= 0 || this._counters[t - 1] >= this._calculatePatternLength(t) / 2) && (e + 8 >= this._counters.length || this._counters[e + 7] >= this._calculatePatternLength(e) / 2)
                }, r.prototype._calculatePatternLength = function (t) {
                    var e, n = 0;
                    for (e = t; e < t + 7; e++) n += this._counters[e];
                    return n
                }, r.prototype._thresholdResultPattern = function (t, e) {
                    var n, r, o, i, a, u = this,
                        c = {
                            space: {
                                narrow: {
                                    size: 0,
                                    counts: 0,
                                    min: 0,
                                    max: Number.MAX_VALUE
                                },
                                wide: {
                                    size: 0,
                                    counts: 0,
                                    min: 0,
                                    max: Number.MAX_VALUE
                                }
                            },
                            bar: {
                                narrow: {
                                    size: 0,
                                    counts: 0,
                                    min: 0,
                                    max: Number.MAX_VALUE
                                },
                                wide: {
                                    size: 0,
                                    counts: 0,
                                    min: 0,
                                    max: Number.MAX_VALUE
                                }
                            }
                        },
                        s = e;
                    for (o = 0; o < t.length; o++) {
                        for (a = u._charToPattern(t[o]), i = 6; i >= 0; i--) n = 2 == (1 & i) ? c.bar : c.space, (r = 1 == (1 & a) ? n.wide : n.narrow).size += u._counters[s + i], r.counts++, a >>= 1;
                        s += 8
                    }
                    return ["space", "bar"].forEach((function (t) {
                        var e = c[t];
                        e.wide.min = Math.floor((e.narrow.size / e.narrow.counts + e.wide.size / e.wide.counts) / 2), e.narrow.max = Math.ceil(e.wide.min), e.wide.max = Math.ceil((e.wide.size * u.MAX_ACCEPTABLE + u.PADDING) / e.wide.counts)
                    })), c
                }, r.prototype._charToPattern = function (t) {
                    var e, n = this,
                        r = t.charCodeAt(0);
                    for (e = 0; e < n.ALPHABET.length; e++)
                        if (n.ALPHABET[e] === r) return n.CHARACTER_ENCODINGS[e];
                    return 0
                }, r.prototype._validateResult = function (t, e) {
                    var n, r, o, i, a, u, c = this,
                        s = c._thresholdResultPattern(t, e),
                        f = e;
                    for (n = 0; n < t.length; n++) {
                        for (u = c._charToPattern(t[n]), r = 6; r >= 0; r--) {
                            if (o = 0 == (1 & r) ? s.bar : s.space, i = 1 == (1 & u) ? o.wide : o.narrow, (a = c._counters[f + r]) < i.min || a > i.max) return !1;
                            u >>= 1
                        }
                        f += 8
                    }
                    return !0
                }, r.prototype._patternToChar = function (t) {
                    var e, n = this;
                    for (e = 0; e < n.CHARACTER_ENCODINGS.length; e++)
                        if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]);
                    return -1
                }, r.prototype._computeAlternatingThreshold = function (t, e) {
                    var n, r, o = Number.MAX_VALUE,
                        i = 0;
                    for (n = t; n < e; n += 2)(r = this._counters[n]) > i && (i = r), r < o && (o = r);
                    return (o + i) / 2 | 0
                }, r.prototype._toPattern = function (t) {
                    var e, n, r, o, i = t + 7,
                        a = 64,
                        u = 0;
                    if (i > this._counters.length) return -1;
                    for (e = this._computeAlternatingThreshold(t, i), n = this._computeAlternatingThreshold(t + 1, i), r = 0; r < 7; r++) o = 0 == (1 & r) ? e : n, this._counters[t + r] > o && (u |= a), a >>= 1;
                    return u
                }, r.prototype._isStartEnd = function (t) {
                    var e;
                    for (e = 0; e < this.START_END.length; e++)
                        if (this.START_END[e] === t) return !0;
                    return !1
                }, r.prototype._sumCounters = function (t, e) {
                    var n, r = 0;
                    for (n = t; n < e; n++) r += this._counters[n];
                    return r
                }, r.prototype._findStart = function () {
                    var t, e, n = this,
                        r = n._nextUnset(n._row);
                    for (t = 1; t < this._counters.length; t++)
                        if (-1 !== (e = n._toPattern(t)) && n._isStartEnd(e)) return {
                            start: r += n._sumCounters(0, t),
                            end: r + n._sumCounters(t, t + 8),
                            startCounter: t,
                            endCounter: t + 8
                        }
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r() {
                    i.a.call(this)
                }

                function o(t, e, n) {
                    for (var r = n.length, o = 0, i = 0; r--;) i += t[n[r]], o += e[n[r]];
                    return i / o
                }
                var i = n(1);
                r.prototype = Object.create(i.a.prototype, {
                    CODE_SHIFT: {
                        value: 98
                    },
                    CODE_C: {
                        value: 99
                    },
                    CODE_B: {
                        value: 100
                    },
                    CODE_A: {
                        value: 101
                    },
                    START_CODE_A: {
                        value: 103
                    },
                    START_CODE_B: {
                        value: 104
                    },
                    START_CODE_C: {
                        value: 105
                    },
                    STOP_CODE: {
                        value: 106
                    },
                    CODE_PATTERN: {
                        value: [[2, 1, 2, 2, 2, 2], [2, 2, 2, 1, 2, 2], [2, 2, 2, 2, 2, 1], [1, 2, 1, 2, 2, 3], [1, 2, 1, 3, 2, 2], [1, 3, 1, 2, 2, 2], [1, 2, 2, 2, 1, 3], [1, 2, 2, 3, 1, 2], [1, 3, 2, 2, 1, 2], [2, 2, 1, 2, 1, 3], [2, 2, 1, 3, 1, 2], [2, 3, 1, 2, 1, 2], [1, 1, 2, 2, 3, 2], [1, 2, 2, 1, 3, 2], [1, 2, 2, 2, 3, 1], [1, 1, 3, 2, 2, 2], [1, 2, 3, 1, 2, 2], [1, 2, 3, 2, 2, 1], [2, 2, 3, 2, 1, 1], [2, 2, 1, 1, 3, 2], [2, 2, 1, 2, 3, 1], [2, 1, 3, 2, 1, 2], [2, 2, 3, 1, 1, 2], [3, 1, 2, 1, 3, 1], [3, 1, 1, 2, 2, 2], [3, 2, 1, 1, 2, 2], [3, 2, 1, 2, 2, 1], [3, 1, 2, 2, 1, 2], [3, 2, 2, 1, 1, 2], [3, 2, 2, 2, 1, 1], [2, 1, 2, 1, 2, 3], [2, 1, 2, 3, 2, 1], [2, 3, 2, 1, 2, 1], [1, 1, 1, 3, 2, 3], [1, 3, 1, 1, 2, 3], [1, 3, 1, 3, 2, 1], [1, 1, 2, 3, 1, 3], [1, 3, 2, 1, 1, 3], [1, 3, 2, 3, 1, 1], [2, 1, 1, 3, 1, 3], [2, 3, 1, 1, 1, 3], [2, 3, 1, 3, 1, 1], [1, 1, 2, 1, 3, 3], [1, 1, 2, 3, 3, 1], [1, 3, 2, 1, 3, 1], [1, 1, 3, 1, 2, 3], [1, 1, 3, 3, 2, 1], [1, 3, 3, 1, 2, 1], [3, 1, 3, 1, 2, 1], [2, 1, 1, 3, 3, 1], [2, 3, 1, 1, 3, 1], [2, 1, 3, 1, 1, 3], [2, 1, 3, 3, 1, 1], [2, 1, 3, 1, 3, 1], [3, 1, 1, 1, 2, 3], [3, 1, 1, 3, 2, 1], [3, 3, 1, 1, 2, 1], [3, 1, 2, 1, 1, 3], [3, 1, 2, 3, 1, 1], [3, 3, 2, 1, 1, 1], [3, 1, 4, 1, 1, 1], [2, 2, 1, 4, 1, 1], [4, 3, 1, 1, 1, 1], [1, 1, 1, 2, 2, 4], [1, 1, 1, 4, 2, 2], [1, 2, 1, 1, 2, 4], [1, 2, 1, 4, 2, 1], [1, 4, 1, 1, 2, 2], [1, 4, 1, 2, 2, 1], [1, 1, 2, 2, 1, 4], [1, 1, 2, 4, 1, 2], [1, 2, 2, 1, 1, 4], [1, 2, 2, 4, 1, 1], [1, 4, 2, 1, 1, 2], [1, 4, 2, 2, 1, 1], [2, 4, 1, 2, 1, 1], [2, 2, 1, 1, 1, 4], [4, 1, 3, 1, 1, 1], [2, 4, 1, 1, 1, 2], [1, 3, 4, 1, 1, 1], [1, 1, 1, 2, 4, 2], [1, 2, 1, 1, 4, 2], [1, 2, 1, 2, 4, 1], [1, 1, 4, 2, 1, 2], [1, 2, 4, 1, 1, 2], [1, 2, 4, 2, 1, 1], [4, 1, 1, 2, 1, 2], [4, 2, 1, 1, 1, 2], [4, 2, 1, 2, 1, 1], [2, 1, 2, 1, 4, 1], [2, 1, 4, 1, 2, 1], [4, 1, 2, 1, 2, 1], [1, 1, 1, 1, 4, 3], [1, 1, 1, 3, 4, 1], [1, 3, 1, 1, 4, 1], [1, 1, 4, 1, 1, 3], [1, 1, 4, 3, 1, 1], [4, 1, 1, 1, 1, 3], [4, 1, 1, 3, 1, 1], [1, 1, 3, 1, 4, 1], [1, 1, 4, 1, 3, 1], [3, 1, 1, 1, 4, 1], [4, 1, 1, 1, 3, 1], [2, 1, 1, 4, 1, 2], [2, 1, 1, 2, 1, 4], [2, 1, 1, 2, 3, 2], [2, 3, 3, 1, 1, 1, 2]]
                    },
                    SINGLE_CODE_ERROR: {
                        value: .64
                    },
                    AVG_CODE_ERROR: {
                        value: .3
                    },
                    FORMAT: {
                        value: "code_128",
                        writeable: !1
                    },
                    MODULE_INDICES: {
                        value: {
                            bar: [0, 2, 4],
                            space: [1, 3, 5]
                        }
                    }
                }), r.prototype.constructor = r, r.prototype._decodeCode = function (t, e) {
                    var n, r, i, a = [0, 0, 0, 0, 0, 0],
                        u = this,
                        c = t,
                        s = !u._row[c],
                        f = 0,
                        l = {
                            error: Number.MAX_VALUE,
                            code: -1,
                            start: t,
                            end: t,
                            correction: {
                                bar: 1,
                                space: 1
                            }
                        };
                    for (n = c; n < u._row.length; n++)
                        if (u._row[n] ^ s) a[f]++;
                        else {
                            if (f === a.length - 1) {
                                for (e && u._correct(a, e), r = 0; r < u.CODE_PATTERN.length; r++)(i = u._matchPattern(a, u.CODE_PATTERN[r])) < l.error && (l.code = r, l.error = i);
                                return l.end = n, -1 === l.code || l.error > u.AVG_CODE_ERROR ? null : (u.CODE_PATTERN[l.code] && (l.correction.bar = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.bar), l.correction.space = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.space)), l)
                            }
                            a[++f] = 1, s = !s
                        } return null
                }, r.prototype._correct = function (t, e) {
                    this._correctBars(t, e.bar, this.MODULE_INDICES.bar), this._correctBars(t, e.space, this.MODULE_INDICES.space)
                }, r.prototype._findStart = function () {
                    var t, e, n, r, i, a = [0, 0, 0, 0, 0, 0],
                        u = this,
                        c = u._nextSet(u._row),
                        s = !1,
                        f = 0,
                        l = {
                            error: Number.MAX_VALUE,
                            code: -1,
                            start: 0,
                            end: 0,
                            correction: {
                                bar: 1,
                                space: 1
                            }
                        };
                    for (t = c; t < u._row.length; t++)
                        if (u._row[t] ^ s) a[f]++;
                        else {
                            if (f === a.length - 1) {
                                for (i = 0, r = 0; r < a.length; r++) i += a[r];
                                for (e = u.START_CODE_A; e <= u.START_CODE_C; e++)(n = u._matchPattern(a, u.CODE_PATTERN[e])) < l.error && (l.code = e, l.error = n);
                                if (l.error < u.AVG_CODE_ERROR) return l.start = t - i, l.end = t, l.correction.bar = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.bar), l.correction.space = o(u.CODE_PATTERN[l.code], a, this.MODULE_INDICES.space), l;
                                for (r = 0; r < 4; r++) a[r] = a[r + 2];
                                a[4] = 0, a[5] = 0, f--
                            } else f++;
                            a[f] = 1, s = !s
                        } return null
                }, r.prototype._decode = function () {
                    var t, e, n = this,
                        r = n._findStart(),
                        o = null,
                        i = !1,
                        a = [],
                        u = 0,
                        c = 0,
                        s = [],
                        f = [],
                        l = !1,
                        d = !0;
                    if (null === r) return null;
                    switch (o = {
                        code: r.code,
                        start: r.start,
                        end: r.end,
                        correction: {
                            bar: r.correction.bar,
                            space: r.correction.space
                        }
                    }, f.push(o), c = o.code, o.code) {
                        case n.START_CODE_A:
                            t = n.CODE_A;
                            break;
                        case n.START_CODE_B:
                            t = n.CODE_B;
                            break;
                        case n.START_CODE_C:
                            t = n.CODE_C;
                            break;
                        default:
                            return null
                    }
                    for (; !i;) {
                        if (e = l, l = !1, null !== (o = n._decodeCode(o.end, o.correction))) switch (o.code !== n.STOP_CODE && (d = !0), o.code !== n.STOP_CODE && (s.push(o.code), u++, c += u * o.code), f.push(o), t) {
                            case n.CODE_A:
                                if (o.code < 64) a.push(String.fromCharCode(32 + o.code));
                                else if (o.code < 96) a.push(String.fromCharCode(o.code - 64));
                                else switch (o.code !== n.STOP_CODE && (d = !1), o.code) {
                                    case n.CODE_SHIFT:
                                        l = !0, t = n.CODE_B;
                                        break;
                                    case n.CODE_B:
                                        t = n.CODE_B;
                                        break;
                                    case n.CODE_C:
                                        t = n.CODE_C;
                                        break;
                                    case n.STOP_CODE:
                                        i = !0
                                }
                                break;
                            case n.CODE_B:
                                if (o.code < 96) a.push(String.fromCharCode(32 + o.code));
                                else switch (o.code !== n.STOP_CODE && (d = !1), o.code) {
                                    case n.CODE_SHIFT:
                                        l = !0, t = n.CODE_A;
                                        break;
                                    case n.CODE_A:
                                        t = n.CODE_A;
                                        break;
                                    case n.CODE_C:
                                        t = n.CODE_C;
                                        break;
                                    case n.STOP_CODE:
                                        i = !0
                                }
                                break;
                            case n.CODE_C:
                                if (o.code < 100) a.push(o.code < 10 ? "0" + o.code : o.code);
                                else switch (o.code !== n.STOP_CODE && (d = !1), o.code) {
                                    case n.CODE_A:
                                        t = n.CODE_A;
                                        break;
                                    case n.CODE_B:
                                        t = n.CODE_B;
                                        break;
                                    case n.STOP_CODE:
                                        i = !0
                                }
                        } else i = !0;
                        e && (t = t === n.CODE_A ? n.CODE_B : n.CODE_A)
                    }
                    return null === o ? null : (o.end = n._nextUnset(n._row, o.end), n._verifyTrailingWhitespace(o) ? (c -= u * s[s.length - 1]) % 103 !== s[s.length - 1] ? null : a.length ? (d && a.splice(a.length - 1, 1), {
                        code: a.join(""),
                        start: r.start,
                        end: o.end,
                        codeset: t,
                        startInfo: r,
                        decodedCodes: f,
                        endInfo: o
                    }) : null : null)
                }, i.a.prototype._verifyTrailingWhitespace = function (t) {
                    var e;
                    return (e = t.end + (t.end - t.start) / 2) < this._row.length && this._matchRange(t.end, e, 0) ? t : null
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r() {
                    o.a.call(this)
                }
                var o = n(31),
                    i = /[IOQ]/g,
                    a = /[A-Z0-9]{17}/;
                r.prototype = Object.create(o.a.prototype), r.prototype.constructor = r, r.prototype._decode = function () {
                    var t = o.a.prototype._decode.apply(this);
                    if (!t) return null;
                    var e = t.code;
                    return e && (e = e.replace(i, "")).match(a) && this._checkChecksum(e) ? (t.code = e, t) : null
                }, r.prototype._checkChecksum = function (t) {
                    return !!t
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r() {
                    o.a.call(this)
                }
                var o = n(1),
                    i = n(3),
                    a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*",
                    u = {
                        ALPHABETH_STRING: {
                            value: a
                        },
                        ALPHABET: {
                            value: a.split("").map((function (t) {
                                return t.charCodeAt(0)
                            }))
                        },
                        CHARACTER_ENCODINGS: {
                            value: [276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418, 404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278, 436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466, 458, 366, 374, 430, 294, 474, 470, 306, 350]
                        },
                        ASTERISK: {
                            value: 350
                        },
                        FORMAT: {
                            value: "code_93",
                            writeable: !1
                        }
                    };
                r.prototype = Object.create(o.a.prototype, u), r.prototype.constructor = r, r.prototype._decode = function () {
                    var t, e, n, r, o = this,
                        a = [0, 0, 0, 0, 0, 0],
                        u = [],
                        c = o._findStart();
                    if (!c) return null;
                    r = o._nextSet(o._row, c.end);
                    do {
                        if (a = o._toCounters(r, a), (n = o._toPattern(a)) < 0) return null;
                        if ((t = o._patternToChar(n)) < 0) return null;
                        u.push(t), e = r, r += i.a.sum(a), r = o._nextSet(o._row, r)
                    } while ("*" !== t);
                    return u.pop(), u.length && o._verifyEnd(e, r, a) && o._verifyChecksums(u) ? (u = u.slice(0, u.length - 2), null === (u = o._decodeExtended(u)) ? null : {
                        code: u.join(""),
                        start: c.start,
                        end: r,
                        startInfo: c,
                        decodedCodes: u
                    }) : null
                }, r.prototype._verifyEnd = function (t, e) {
                    return !(t === e || !this._row[e])
                }, r.prototype._patternToChar = function (t) {
                    var e, n = this;
                    for (e = 0; e < n.CHARACTER_ENCODINGS.length; e++)
                        if (n.CHARACTER_ENCODINGS[e] === t) return String.fromCharCode(n.ALPHABET[e]);
                    return -1
                }, r.prototype._toPattern = function (t) {
                    for (var e = t.length, n = 0, r = 0, o = 0; o < e; o++) r += t[o];
                    for (var i = 0; i < e; i++) {
                        var a = Math.round(9 * t[i] / r);
                        if (a < 1 || a > 4) return -1;
                        if (0 == (1 & i))
                            for (var u = 0; u < a; u++) n = n << 1 | 1;
                        else n <<= a
                    }
                    return n
                }, r.prototype._findStart = function () {
                    var t, e, n, r = this,
                        o = r._nextSet(r._row),
                        i = o,
                        a = [0, 0, 0, 0, 0, 0],
                        u = 0,
                        c = !1;
                    for (t = o; t < r._row.length; t++)
                        if (r._row[t] ^ c) a[u]++;
                        else {
                            if (u === a.length - 1) {
                                if (r._toPattern(a) === r.ASTERISK && (n = Math.floor(Math.max(0, i - (t - i) / 4)), r._matchRange(n, i, 0))) return {
                                    start: i,
                                    end: t
                                };
                                for (i += a[0] + a[1], e = 0; e < 4; e++) a[e] = a[e + 2];
                                a[4] = 0, a[5] = 0, u--
                            } else u++;
                            a[u] = 1, c = !c
                        } return null
                }, r.prototype._decodeExtended = function (t) {
                    for (var e = t.length, n = [], r = 0; r < e; r++) {
                        var o = t[r];
                        if (o >= "a" && o <= "d") {
                            if (r > e - 2) return null;
                            var i = t[++r],
                                a = i.charCodeAt(0),
                                u = void 0;
                            switch (o) {
                                case "a":
                                    if (!(i >= "A" && i <= "Z")) return null;
                                    u = String.fromCharCode(a - 64);
                                    break;
                                case "b":
                                    if (i >= "A" && i <= "E") u = String.fromCharCode(a - 38);
                                    else if (i >= "F" && i <= "J") u = String.fromCharCode(a - 11);
                                    else if (i >= "K" && i <= "O") u = String.fromCharCode(a + 16);
                                    else if (i >= "P" && i <= "S") u = String.fromCharCode(a + 43);
                                    else {
                                        if (!(i >= "T" && i <= "Z")) return null;
                                        u = String.fromCharCode(127)
                                    }
                                    break;
                                case "c":
                                    if (i >= "A" && i <= "O") u = String.fromCharCode(a - 32);
                                    else {
                                        if ("Z" !== i) return null;
                                        u = ":"
                                    }
                                    break;
                                case "d":
                                    if (!(i >= "A" && i <= "Z")) return null;
                                    u = String.fromCharCode(a + 32)
                            }
                            n.push(u)
                        } else n.push(o)
                    }
                    return n
                }, r.prototype._verifyChecksums = function (t) {
                    return this._matchCheckChar(t, t.length - 2, 20) && this._matchCheckChar(t, t.length - 1, 15)
                }, r.prototype._matchCheckChar = function (t, e, n) {
                    var r = this,
                        o = t.slice(0, e),
                        i = o.length,
                        a = o.reduce((function (t, e, o) {
                            return t + ((-1 * o + (i - 1)) % n + 1) * r.ALPHABET.indexOf(e.charCodeAt(0))
                        }), 0);
                    return this.ALPHABET[a % 47] === t[e].charCodeAt(0)
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r() {
                    o.a.call(this)
                }
                var o = n(4);
                r.prototype = Object.create(o.a.prototype, {
                    FORMAT: {
                        value: "ean_2",
                        writeable: !1
                    }
                }), r.prototype.constructor = r, r.prototype.decode = function (t, e) {
                    this._row = t;
                    var n, r = 0,
                        o = 0,
                        i = e,
                        a = this._row.length,
                        u = [],
                        c = [];
                    for (o = 0; o < 2 && i < a; o++) {
                        if (!(n = this._decodeCode(i))) return null;
                        c.push(n), u.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 1 - o), 1 != o && (i = this._nextSet(this._row, n.end), i = this._nextUnset(this._row, i))
                    }
                    return 2 != u.length || parseInt(u.join("")) % 4 !== r ? null : {
                        code: u.join(""),
                        decodedCodes: c,
                        end: n.end
                    }
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r() {
                    i.a.call(this)
                }

                function o(t) {
                    var e;
                    for (e = 0; e < 10; e++)
                        if (t === a[e]) return e;
                    return null
                }
                var i = n(4),
                    a = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5];
                r.prototype = Object.create(i.a.prototype, {
                    FORMAT: {
                        value: "ean_5",
                        writeable: !1
                    }
                }), r.prototype.constructor = r, r.prototype.decode = function (t, e) {
                    this._row = t;
                    var n, r = 0,
                        i = 0,
                        a = e,
                        u = this._row.length,
                        c = [],
                        s = [];
                    for (i = 0; i < 5 && a < u; i++) {
                        if (!(n = this._decodeCode(a))) return null;
                        s.push(n), c.push(n.code % 10), n.code >= this.CODE_G_START && (r |= 1 << 4 - i), 4 != i && (a = this._nextSet(this._row, n.end), a = this._nextUnset(this._row, a))
                    }
                    return 5 != c.length || function (t) {
                        var e, n = t.length,
                            r = 0;
                        for (e = n - 2; e >= 0; e -= 2) r += t[e];
                        for (r *= 3, e = n - 1; e >= 0; e -= 2) r += t[e];
                        return (r *= 3) % 10
                    }(c) !== o(r) ? null : {
                        code: c.join(""),
                        decodedCodes: s,
                        end: n.end
                    }
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r(t, e) {
                    o.a.call(this, t, e)
                }
                var o = n(4);
                r.prototype = Object.create(o.a.prototype, {
                    FORMAT: {
                        value: "ean_8",
                        writeable: !1
                    }
                }), r.prototype.constructor = r, r.prototype._decodePayload = function (t, e, n) {
                    var r, o = this;
                    for (r = 0; r < 4; r++) {
                        if (!(t = o._decodeCode(t.end, o.CODE_G_START))) return null;
                        e.push(t.code), n.push(t)
                    }
                    if (null === (t = o._findPattern(o.MIDDLE_PATTERN, t.end, !0, !1))) return null;
                    for (n.push(t), r = 0; r < 4; r++) {
                        if (!(t = o._decodeCode(t.end, o.CODE_G_START))) return null;
                        n.push(t), e.push(t.code)
                    }
                    return t
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r(t) {
                    t = i()(function () {
                        var t = {};
                        return Object.keys(r.CONFIG_KEYS).forEach((function (e) {
                            t[e] = r.CONFIG_KEYS[e].default
                        })), t
                    }(), t), a.a.call(this, t), this.barSpaceRatio = [1, 1], t.normalizeBarSpaceWidth && (this.SINGLE_CODE_ERROR = .38, this.AVG_CODE_ERROR = .09)
                }
                var o = n(28),
                    i = n.n(o),
                    a = n(1),
                    u = {
                        START_PATTERN: {
                            value: [1, 1, 1, 1]
                        },
                        STOP_PATTERN: {
                            value: [1, 1, 3]
                        },
                        CODE_PATTERN: {
                            value: [[1, 1, 3, 3, 1], [3, 1, 1, 1, 3], [1, 3, 1, 1, 3], [3, 3, 1, 1, 1], [1, 1, 3, 1, 3], [3, 1, 3, 1, 1], [1, 3, 3, 1, 1], [1, 1, 1, 3, 3], [3, 1, 1, 3, 1], [1, 3, 1, 3, 1]]
                        },
                        SINGLE_CODE_ERROR: {
                            value: .78,
                            writable: !0
                        },
                        AVG_CODE_ERROR: {
                            value: .38,
                            writable: !0
                        },
                        MAX_CORRECTION_FACTOR: {
                            value: 5
                        },
                        FORMAT: {
                            value: "i2of5"
                        }
                    };
                r.prototype = Object.create(a.a.prototype, u), r.prototype.constructor = r, r.prototype._matchPattern = function (t, e) {
                    if (this.config.normalizeBarSpaceWidth) {
                        var n, r = [0, 0],
                            o = [0, 0],
                            i = [0, 0],
                            u = this.MAX_CORRECTION_FACTOR,
                            c = 1 / u;
                        for (n = 0; n < t.length; n++) r[n % 2] += t[n], o[n % 2] += e[n];
                        for (i[0] = o[0] / r[0], i[1] = o[1] / r[1], i[0] = Math.max(Math.min(i[0], u), c), i[1] = Math.max(Math.min(i[1], u), c), this.barSpaceRatio = i, n = 0; n < t.length; n++) t[n] *= this.barSpaceRatio[n % 2]
                    }
                    return a.a.prototype._matchPattern.call(this, t, e)
                }, r.prototype._findPattern = function (t, e, n, r) {
                    var o, i, a, u, c = [],
                        s = this,
                        f = 0,
                        l = {
                            error: Number.MAX_VALUE,
                            code: -1,
                            start: 0,
                            end: 0
                        },
                        d = s.AVG_CODE_ERROR;
                    for (n = n || !1, r = r || !1, e || (e = s._nextSet(s._row)), o = 0; o < t.length; o++) c[o] = 0;
                    for (o = e; o < s._row.length; o++)
                        if (s._row[o] ^ n) c[f]++;
                        else {
                            if (f === c.length - 1) {
                                for (u = 0, a = 0; a < c.length; a++) u += c[a];
                                if ((i = s._matchPattern(c, t)) < d) return l.error = i, l.start = o - u, l.end = o, l;
                                if (!r) return null;
                                for (a = 0; a < c.length - 2; a++) c[a] = c[a + 2];
                                c[c.length - 2] = 0, c[c.length - 1] = 0, f--
                            } else f++;
                            c[f] = 1, n = !n
                        } return null
                }, r.prototype._findStart = function () {
                    for (var t, e, n = this, r = n._nextSet(n._row), o = 1; !e;) {
                        if (!(e = n._findPattern(n.START_PATTERN, r, !1, !0))) return null;
                        if (o = Math.floor((e.end - e.start) / 4), (t = e.start - 10 * o) >= 0 && n._matchRange(t, e.start, 0)) return e;
                        r = e.end, e = null
                    }
                }, r.prototype._verifyTrailingWhitespace = function (t) {
                    var e;
                    return (e = t.end + (t.end - t.start) / 2) < this._row.length && this._matchRange(t.end, e, 0) ? t : null
                }, r.prototype._findEnd = function () {
                    var t, e, n = this;
                    return n._row.reverse(), t = n._findPattern(n.STOP_PATTERN), n._row.reverse(), null === t ? null : (e = t.start, t.start = n._row.length - t.end, t.end = n._row.length - e, null !== t ? n._verifyTrailingWhitespace(t) : null)
                }, r.prototype._decodePair = function (t) {
                    var e, n, r = [];
                    for (e = 0; e < t.length; e++) {
                        if (!(n = this._decodeCode(t[e]))) return null;
                        r.push(n)
                    }
                    return r
                }, r.prototype._decodeCode = function (t) {
                    var e, n, r, o = this,
                        i = o.AVG_CODE_ERROR,
                        a = {
                            error: Number.MAX_VALUE,
                            code: -1,
                            start: 0,
                            end: 0
                        };
                    for (e = 0; e < t.length; e++) t[e];
                    for (r = 0; r < o.CODE_PATTERN.length; r++)(n = o._matchPattern(t, o.CODE_PATTERN[r])) < a.error && (a.code = r, a.error = n);
                    if (a.error < i) return a
                }, r.prototype._decodePayload = function (t, e, n) {
                    for (var r, o, i = 0, a = t.length, u = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]; i < a;) {
                        for (r = 0; r < 5; r++) u[0][r] = t[i] * this.barSpaceRatio[0], u[1][r] = t[i + 1] * this.barSpaceRatio[1], i += 2;
                        if (!(o = this._decodePair(u))) return null;
                        for (r = 0; r < o.length; r++) e.push(o[r].code + ""), n.push(o[r])
                    }
                    return o
                }, r.prototype._verifyCounterLength = function (t) {
                    return t.length % 10 == 0
                }, r.prototype._decode = function () {
                    var t, e, n, r = this,
                        o = [],
                        i = [];
                    return (t = r._findStart()) ? (i.push(t), (e = r._findEnd()) ? (n = r._fillCounters(t.end, e.start, !1), r._verifyCounterLength(n) && r._decodePayload(n, o, i) ? o.length % 2 != 0 || o.length < 6 ? null : (i.push(e), {
                        code: o.join(""),
                        start: t.start,
                        end: e.end,
                        startInfo: t,
                        decodedCodes: i
                    }) : null) : null) : null
                }, r.CONFIG_KEYS = {
                    normalizeBarSpaceWidth: {
                        type: "boolean",
                        default: !1,
                        description: "If true, the reader tries to normalize thewidth-difference between bars and spaces"
                    }
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r(t, e) {
                    o.a.call(this, t, e)
                }
                var o = n(4);
                r.prototype = Object.create(o.a.prototype, {
                    CODE_FREQUENCY: {
                        value: [[56, 52, 50, 49, 44, 38, 35, 42, 41, 37], [7, 11, 13, 14, 19, 25, 28, 21, 22, 26]]
                    },
                    STOP_PATTERN: {
                        value: [1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7, 1 / 6 * 7]
                    },
                    FORMAT: {
                        value: "upc_e",
                        writeable: !1
                    }
                }), r.prototype.constructor = r, r.prototype._decodePayload = function (t, e, n) {
                    var r, o = this,
                        i = 0;
                    for (r = 0; r < 6; r++) {
                        if (!(t = o._decodeCode(t.end))) return null;
                        t.code >= o.CODE_G_START && (t.code = t.code - o.CODE_G_START, i |= 1 << 5 - r), e.push(t.code), n.push(t)
                    }
                    return o._determineParity(i, e) ? t : null
                }, r.prototype._determineParity = function (t, e) {
                    var n, r;
                    for (r = 0; r < this.CODE_FREQUENCY.length; r++)
                        for (n = 0; n < this.CODE_FREQUENCY[r].length; n++)
                            if (t === this.CODE_FREQUENCY[r][n]) return e.unshift(r), e.push(n), !0;
                    return !1
                }, r.prototype._convertToUPCA = function (t) {
                    var e = [t[0]],
                        n = t[t.length - 2];
                    return (e = n <= 2 ? e.concat(t.slice(1, 3)).concat([n, 0, 0, 0, 0]).concat(t.slice(3, 6)) : 3 === n ? e.concat(t.slice(1, 4)).concat([0, 0, 0, 0, 0]).concat(t.slice(4, 6)) : 4 === n ? e.concat(t.slice(1, 5)).concat([0, 0, 0, 0, 0, t[5]]) : e.concat(t.slice(1, 6)).concat([0, 0, 0, 0, n])).push(t[t.length - 1]), e
                }, r.prototype._checksum = function (t) {
                    return o.a.prototype._checksum.call(this, this._convertToUPCA(t))
                }, r.prototype._findEnd = function (t, e) {
                    return o.a.prototype._findEnd.call(this, t, !0)
                }, r.prototype._verifyTrailingWhitespace = function (t) {
                    var e;
                    if ((e = t.end + (t.end - t.start) / 2) < this._row.length && this._matchRange(t.end, e, 0)) return t
                }, e.a = r
            }, function (t, e, n) {
                "use strict";

                function r(t, e) {
                    o.a.call(this, t, e)
                }
                var o = n(4);
                r.prototype = Object.create(o.a.prototype, {
                    FORMAT: {
                        value: "upc_a",
                        writeable: !1
                    }
                }), r.prototype.constructor = r, r.prototype._decode = function () {
                    var t = o.a.prototype._decode.call(this);
                    return t && t.code && 13 === t.code.length && "0" === t.code.charAt(0) ? (t.code = t.code.substring(1), t) : null
                }, e.a = r
            }, function (t, e) {
                t.exports = function (t, e) {
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
                }
            }, function (t, e) {
                t.exports = function () {
                    var t = new Float32Array(4);
                    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t
                }
            }, function (t, e) {
                t.exports = function (t, e) {
                    var n = e[0],
                        r = e[1],
                        o = e[2],
                        i = e[3],
                        a = n * i - o * r;
                    return a ? (a = 1 / a, t[0] = i * a, t[1] = -r * a, t[2] = -o * a, t[3] = n * a, t) : null
                }
            }, function (t, e) {
                t.exports = function (t, e, n) {
                    return t[0] = e[0] * n, t[1] = e[1] * n, t
                }
            }, function (t, e) {
                t.exports = function (t, e, n) {
                    var r = e[0],
                        o = e[1];
                    return t[0] = n[0] * r + n[2] * o, t[1] = n[1] * r + n[3] * o, t
                }
            }, function (t, e) {
                t.exports = function (t) {
                    var e = new Float32Array(3);
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
                }
            }, function (t, e, n) {
                function r(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }
                var o = n(122),
                    i = n(123),
                    a = n(124),
                    u = n(125),
                    c = n(126);
                r.prototype.clear = o, r.prototype.delete = i, r.prototype.get = a, r.prototype.has = u, r.prototype.set = c, t.exports = r
            }, function (t, e, n) {
                function r(t) {
                    var e = this.__data__ = new o(t);
                    this.size = e.size
                }
                var o = n(10),
                    i = n(149),
                    a = n(150),
                    u = n(151),
                    c = n(152),
                    s = n(153);
                r.prototype.clear = i, r.prototype.delete = a, r.prototype.get = u, r.prototype.has = c, r.prototype.set = s, t.exports = r
            }, function (t, e, n) {
                var r = n(5).Uint8Array;
                t.exports = r
            }, function (t, e) {
                t.exports = function (t, e, n) {
                    switch (n.length) {
                        case 0:
                            return t.call(e);
                        case 1:
                            return t.call(e, n[0]);
                        case 2:
                            return t.call(e, n[0], n[1]);
                        case 3:
                            return t.call(e, n[0], n[1], n[2])
                    }
                    return t.apply(e, n)
                }
            }, function (t, e, n) {
                var r = n(107),
                    o = n(18),
                    i = n(2),
                    a = n(44),
                    u = n(15),
                    c = n(45),
                    s = Object.prototype.hasOwnProperty;
                t.exports = function (t, e) {
                    var n = i(t),
                        f = !n && o(t),
                        l = !n && !f && a(t),
                        d = !n && !f && !l && c(t),
                        h = n || f || l || d,
                        p = h ? r(t.length, String) : [],
                        v = p.length;
                    for (var _ in t) !e && !s.call(t, _) || h && ("length" == _ || l && ("offset" == _ || "parent" == _) || d && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || u(_, v)) || p.push(_);
                    return p
                }
            }, function (t, e) {
                t.exports = function (t, e) {
                    for (var n = -1, r = null == t ? 0 : t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
                    return o
                }
            }, function (t, e) {
                t.exports = function (t, e) {
                    for (var n = -1, r = e.length, o = t.length; ++n < r;) t[o + n] = e[n];
                    return t
                }
            }, function (t, e, n) {
                var r = n(0),
                    o = Object.create,
                    i = function () {
                        function t() {}
                        return function (e) {
                            if (!r(e)) return {};
                            if (o) return o(e);
                            t.prototype = e;
                            var n = new t;
                            return t.prototype = void 0, n
                        }
                    }();
                t.exports = i
            }, function (t, e, n) {
                var r = n(90),
                    o = n(128);
                t.exports = function t(e, n, i, a, u) {
                    var c = -1,
                        s = e.length;
                    for (i || (i = o), u || (u = []); ++c < s;) {
                        var f = e[c];
                        n > 0 && i(f) ? n > 1 ? t(f, n - 1, i, a, u) : r(u, f) : a || (u[u.length] = f)
                    }
                    return u
                }
            }, function (t, e, n) {
                var r = n(117)();
                t.exports = r
            }, function (t, e, n) {
                var r = n(13),
                    o = n(23);
                t.exports = function (t, e) {
                    for (var n = 0, i = (e = r(e, t)).length; null != t && n < i;) t = t[o(e[n++])];
                    return n && n == i ? t : void 0
                }
            }, function (t, e) {
                t.exports = function (t, e) {
                    return null != t && e in Object(t)
                }
            }, function (t, e, n) {
                var r = n(8),
                    o = n(6),
                    i = "[object Arguments]";
                t.exports = function (t) {
                    return o(t) && r(t) == i
                }
            }, function (t, e, n) {
                var r = n(25),
                    o = n(132),
                    i = n(0),
                    a = n(155),
                    u = /^\[object .+?Constructor\]$/,
                    c = Function.prototype,
                    s = Object.prototype,
                    f = c.toString,
                    l = s.hasOwnProperty,
                    d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                t.exports = function (t) {
                    return !(!i(t) || o(t)) && (r(t) ? d : u).test(a(t))
                }
            }, function (t, e, n) {
                var r = n(8),
                    o = n(26),
                    i = n(6),
                    a = {};
                a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function (t) {
                    return i(t) && o(t.length) && !!a[r(t)]
                }
            }, function (t, e, n) {
                var r = n(0),
                    o = n(40),
                    i = n(144),
                    a = Object.prototype.hasOwnProperty;
                t.exports = function (t) {
                    if (!r(t)) return i(t);
                    var e = o(t),
                        n = [];
                    for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
                    return n
                }
            }, function (t, e, n) {
                var r = n(85),
                    o = n(35),
                    i = n(93),
                    a = n(101),
                    u = n(0),
                    c = n(46);
                t.exports = function t(e, n, s, f, l) {
                    e !== n && i(n, (function (i, c) {
                        if (u(i)) l || (l = new r), a(e, n, c, s, t, f, l);
                        else {
                            var d = f ? f(e[c], i, c + "", e, n, l) : void 0;
                            void 0 === d && (d = i), o(e, c, d)
                        }
                    }), c)
                }
            }, function (t, e, n) {
                var r = n(35),
                    o = n(111),
                    i = n(112),
                    a = n(113),
                    u = n(127),
                    c = n(18),
                    s = n(2),
                    f = n(159),
                    l = n(44),
                    d = n(25),
                    h = n(0),
                    p = n(160),
                    v = n(45),
                    _ = n(164);
                t.exports = function (t, e, n, g, y, m, x) {
                    var b = t[n],
                        E = e[n],
                        C = x.get(E);
                    if (C) r(t, n, C);
                    else {
                        var O = m ? m(b, E, n + "", t, e, x) : void 0,
                            w = void 0 === O;
                        if (w) {
                            var A = s(E),
                                R = !A && l(E),
                                T = !A && !R && v(E);
                            O = E, A || R || T ? s(b) ? O = b : f(b) ? O = a(b) : R ? (w = !1, O = o(E, !0)) : T ? (w = !1, O = i(E, !0)) : O = [] : p(E) || c(E) ? (O = b, c(b) ? O = _(b) : (!h(b) || g && d(b)) && (O = u(E))) : w = !1
                        }
                        w && (x.set(E, O), y(O, E, g, m, x), x.delete(E)), r(t, n, O)
                    }
                }
            }, function (t, e, n) {
                var r = n(103),
                    o = n(158);
                t.exports = function (t, e) {
                    return r(t, e, (function (e, n) {
                        return o(t, n)
                    }))
                }
            }, function (t, e, n) {
                var r = n(94),
                    o = n(105),
                    i = n(13);
                t.exports = function (t, e, n) {
                    for (var a = -1, u = e.length, c = {}; ++a < u;) {
                        var s = e[a],
                            f = r(t, s);
                        n(f, s) && o(c, i(s, t), f)
                    }
                    return c
                }
            }, function (t, e, n) {
                var r = n(43),
                    o = n(41),
                    i = n(42);
                t.exports = function (t, e) {
                    return i(o(t, e, r), t + "")
                }
            }, function (t, e, n) {
                var r = n(36),
                    o = n(13),
                    i = n(15),
                    a = n(0),
                    u = n(23);
                t.exports = function (t, e, n, c) {
                    if (!a(t)) return t;
                    for (var s = -1, f = (e = o(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
                        var h = u(e[s]),
                            p = n;
                        if (s != l) {
                            var v = d[h];
                            void 0 === (p = c ? c(v, h, d) : void 0) && (p = a(v) ? v : i(e[s + 1]) ? [] : {})
                        }
                        r(d, h, p), d = d[h]
                    }
                    return t
                }
            }, function (t, e, n) {
                var r = n(156),
                    o = n(37),
                    i = n(43),
                    a = o ? function (t, e) {
                        return o(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: r(e),
                            writable: !0
                        })
                    } : i;
                t.exports = a
            }, function (t, e) {
                t.exports = function (t, e) {
                    for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                    return r
                }
            }, function (t, e, n) {
                var r = n(11),
                    o = n(89),
                    i = n(2),
                    a = n(27),
                    u = 1 / 0,
                    c = r ? r.prototype : void 0,
                    s = c ? c.toString : void 0;
                t.exports = function t(e) {
                    if ("string" == typeof e) return e;
                    if (i(e)) return o(e, t) + "";
                    if (a(e)) return s ? s.call(e) : "";
                    var n = e + "";
                    return "0" == n && 1 / e == -u ? "-0" : n
                }
            }, function (t, e) {
                t.exports = function (t) {
                    return function (e) {
                        return t(e)
                    }
                }
            }, function (t, e, n) {
                var r = n(86);
                t.exports = function (t) {
                    var e = new t.constructor(t.byteLength);
                    return new r(e).set(new r(t)), e
                }
            }, function (t, e, n) {
                (function (t) {
                    var r = n(5),
                        o = "object" == typeof e && e && !e.nodeType && e,
                        i = o && "object" == typeof t && t && !t.nodeType && t,
                        a = i && i.exports === o ? r.Buffer : void 0,
                        u = a ? a.allocUnsafe : void 0;
                    t.exports = function (t, e) {
                        if (e) return t.slice();
                        var n = t.length,
                            r = u ? u(n) : new t.constructor(n);
                        return t.copy(r), r
                    }
                }).call(e, n(29)(t))
            }, function (t, e, n) {
                var r = n(110);
                t.exports = function (t, e) {
                    var n = e ? r(t.buffer) : t.buffer;
                    return new t.constructor(n, t.byteOffset, t.length)
                }
            }, function (t, e) {
                t.exports = function (t, e) {
                    var n = -1,
                        r = t.length;
                    for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
                    return e
                }
            }, function (t, e, n) {
                var r = n(36),
                    o = n(21);
                t.exports = function (t, e, n, i) {
                    var a = !n;
                    n || (n = {});
                    for (var u = -1, c = e.length; ++u < c;) {
                        var s = e[u],
                            f = i ? i(n[s], t[s], s, n, t) : void 0;
                        void 0 === f && (f = t[s]), a ? o(n, s, f) : r(n, s, f)
                    }
                    return n
                }
            }, function (t, e, n) {
                var r = n(5)["__core-js_shared__"];
                t.exports = r
            }, function (t, e, n) {
                var r = n(104),
                    o = n(129);
                t.exports = function (t) {
                    return r((function (e, n) {
                        var r = -1,
                            i = n.length,
                            a = i > 1 ? n[i - 1] : void 0,
                            u = i > 2 ? n[2] : void 0;
                        for (a = t.length > 3 && "function" == typeof a ? (i--, a) : void 0, u && o(n[0], n[1], u) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++r < i;) {
                            var c = n[r];
                            c && t(e, c, r, a)
                        }
                        return e
                    }))
                }
            }, function (t, e) {
                t.exports = function (t) {
                    return function (e, n, r) {
                        for (var o = -1, i = Object(e), a = r(e), u = a.length; u--;) {
                            var c = a[t ? u : ++o];
                            if (!1 === n(i[c], c, i)) break
                        }
                        return e
                    }
                }
            }, function (t, e, n) {
                var r = n(157),
                    o = n(41),
                    i = n(42);
                t.exports = function (t) {
                    return i(o(t, void 0, r), t + "")
                }
            }, function (t, e, n) {
                var r = n(11),
                    o = Object.prototype,
                    i = o.hasOwnProperty,
                    a = o.toString,
                    u = r ? r.toStringTag : void 0;
                t.exports = function (t) {
                    var e = i.call(t, u),
                        n = t[u];
                    try {
                        t[u] = void 0;
                        var r = !0
                    } catch (t) {}
                    var o = a.call(t);
                    return r && (e ? t[u] = n : delete t[u]), o
                }
            }, function (t, e) {
                t.exports = function (t, e) {
                    return null == t ? void 0 : t[e]
                }
            }, function (t, e, n) {
                var r = n(13),
                    o = n(18),
                    i = n(2),
                    a = n(15),
                    u = n(26),
                    c = n(23);
                t.exports = function (t, e, n) {
                    for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
                        var d = c(e[s]);
                        if (!(l = null != t && n(t, d))) break;
                        t = t[d]
                    }
                    return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (i(t) || o(t))
                }
            }, function (t, e, n) {
                var r = n(16);
                t.exports = function () {
                    this.__data__ = r ? r(null) : {}, this.size = 0
                }
            }, function (t, e) {
                t.exports = function (t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }
            }, function (t, e, n) {
                var r = n(16),
                    o = "__lodash_hash_undefined__",
                    i = Object.prototype.hasOwnProperty;
                t.exports = function (t) {
                    var e = this.__data__;
                    if (r) {
                        var n = e[t];
                        return n === o ? void 0 : n
                    }
                    return i.call(e, t) ? e[t] : void 0
                }
            }, function (t, e, n) {
                var r = n(16),
                    o = Object.prototype.hasOwnProperty;
                t.exports = function (t) {
                    var e = this.__data__;
                    return r ? void 0 !== e[t] : o.call(e, t)
                }
            }, function (t, e, n) {
                var r = n(16),
                    o = "__lodash_hash_undefined__";
                t.exports = function (t, e) {
                    var n = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? o : e, this
                }
            }, function (t, e, n) {
                var r = n(91),
                    o = n(39),
                    i = n(40);
                t.exports = function (t) {
                    return "function" != typeof t.constructor || i(t) ? {} : r(o(t))
                }
            }, function (t, e, n) {
                var r = n(11),
                    o = n(18),
                    i = n(2),
                    a = r ? r.isConcatSpreadable : void 0;
                t.exports = function (t) {
                    return i(t) || o(t) || !!(a && t && t[a])
                }
            }, function (t, e, n) {
                var r = n(17),
                    o = n(24),
                    i = n(15),
                    a = n(0);
                t.exports = function (t, e, n) {
                    if (!a(n)) return !1;
                    var u = typeof e;
                    return !!("number" == u ? o(n) && i(e, n.length) : "string" == u && e in n) && r(n[e], t)
                }
            }, function (t, e, n) {
                var r = n(2),
                    o = n(27),
                    i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                    a = /^\w*$/;
                t.exports = function (t, e) {
                    if (r(t)) return !1;
                    var n = typeof t;
                    return !("number" != n && "symbol" != n && "boolean" != n && null != t && !o(t)) || a.test(t) || !i.test(t) || null != e && t in Object(e)
                }
            }, function (t, e) {
                t.exports = function (t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }
            }, function (t, e, n) {
                var r = n(115),
                    o = function () {
                        var t = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                        return t ? "Symbol(src)_1." + t : ""
                    }();
                t.exports = function (t) {
                    return !!o && o in t
                }
            }, function (t, e) {
                t.exports = function () {
                    this.__data__ = [], this.size = 0
                }
            }, function (t, e, n) {
                var r = n(12),
                    o = Array.prototype.splice;
                t.exports = function (t) {
                    var e = this.__data__,
                        n = r(e, t);
                    return !(n < 0 || (n == e.length - 1 ? e.pop() : o.call(e, n, 1), --this.size, 0))
                }
            }, function (t, e, n) {
                var r = n(12);
                t.exports = function (t) {
                    var e = this.__data__,
                        n = r(e, t);
                    return n < 0 ? void 0 : e[n][1]
                }
            }, function (t, e, n) {
                var r = n(12);
                t.exports = function (t) {
                    return r(this.__data__, t) > -1
                }
            }, function (t, e, n) {
                var r = n(12);
                t.exports = function (t, e) {
                    var n = this.__data__,
                        o = r(n, t);
                    return o < 0 ? (++this.size, n.push([t, e])) : n[o][1] = e, this
                }
            }, function (t, e, n) {
                var r = n(84),
                    o = n(10),
                    i = n(33);
                t.exports = function () {
                    this.size = 0, this.__data__ = {
                        hash: new r,
                        map: new(i || o),
                        string: new r
                    }
                }
            }, function (t, e, n) {
                var r = n(14);
                t.exports = function (t) {
                    var e = r(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }
            }, function (t, e, n) {
                var r = n(14);
                t.exports = function (t) {
                    return r(this, t).get(t)
                }
            }, function (t, e, n) {
                var r = n(14);
                t.exports = function (t) {
                    return r(this, t).has(t)
                }
            }, function (t, e, n) {
                var r = n(14);
                t.exports = function (t, e) {
                    var n = r(this, t),
                        o = n.size;
                    return n.set(t, e), this.size += n.size == o ? 0 : 1, this
                }
            }, function (t, e, n) {
                var r = n(161),
                    o = 500;
                t.exports = function (t) {
                    var e = r(t, (function (t) {
                            return n.size === o && n.clear(), t
                        })),
                        n = e.cache;
                    return e
                }
            }, function (t, e) {
                t.exports = function (t) {
                    var e = [];
                    if (null != t)
                        for (var n in Object(t)) e.push(n);
                    return e
                }
            }, function (t, e, n) {
                (function (t) {
                    var r = n(38),
                        o = "object" == typeof e && e && !e.nodeType && e,
                        i = o && "object" == typeof t && t && !t.nodeType && t,
                        a = i && i.exports === o && r.process,
                        u = function () {
                            try {
                                return a && a.binding && a.binding("util")
                            } catch (t) {}
                        }();
                    t.exports = u
                }).call(e, n(29)(t))
            }, function (t, e) {
                var n = Object.prototype.toString;
                t.exports = function (t) {
                    return n.call(t)
                }
            }, function (t, e) {
                t.exports = function (t, e) {
                    return function (n) {
                        return t(e(n))
                    }
                }
            }, function (t, e) {
                var n = 800,
                    r = 16,
                    o = Date.now;
                t.exports = function (t) {
                    var e = 0,
                        i = 0;
                    return function () {
                        var a = o(),
                            u = r - (a - i);
                        if (i = a, u > 0) {
                            if (++e >= n) return arguments[0]
                        } else e = 0;
                        return t.apply(void 0, arguments)
                    }
                }
            }, function (t, e, n) {
                var r = n(10);
                t.exports = function () {
                    this.__data__ = new r, this.size = 0
                }
            }, function (t, e) {
                t.exports = function (t) {
                    var e = this.__data__,
                        n = e.delete(t);
                    return this.size = e.size, n
                }
            }, function (t, e) {
                t.exports = function (t) {
                    return this.__data__.get(t)
                }
            }, function (t, e) {
                t.exports = function (t) {
                    return this.__data__.has(t)
                }
            }, function (t, e, n) {
                var r = n(10),
                    o = n(33),
                    i = n(34),
                    a = 200;
                t.exports = function (t, e) {
                    var n = this.__data__;
                    if (n instanceof r) {
                        var u = n.__data__;
                        if (!o || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
                        n = this.__data__ = new i(u)
                    }
                    return n.set(t, e), this.size = n.size, this
                }
            }, function (t, e, n) {
                var r = n(143),
                    o = /^\./,
                    i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                    a = /\\(\\)?/g,
                    u = r((function (t) {
                        var e = [];
                        return o.test(t) && e.push(""), t.replace(i, (function (t, n, r, o) {
                            e.push(r ? o.replace(a, "$1") : n || t)
                        })), e
                    }));
                t.exports = u
            }, function (t, e) {
                var n = Function.prototype.toString;
                t.exports = function (t) {
                    if (null != t) {
                        try {
                            return n.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }
            }, function (t, e) {
                t.exports = function (t) {
                    return function () {
                        return t
                    }
                }
            }, function (t, e, n) {
                var r = n(92);
                t.exports = function (t) {
                    return null != t && t.length ? r(t, 1) : []
                }
            }, function (t, e, n) {
                var r = n(95),
                    o = n(121);
                t.exports = function (t, e) {
                    return null != t && o(t, e, r)
                }
            }, function (t, e, n) {
                var r = n(24),
                    o = n(6);
                t.exports = function (t) {
                    return o(t) && r(t)
                }
            }, function (t, e, n) {
                var r = n(8),
                    o = n(39),
                    i = n(6),
                    a = "[object Object]",
                    u = Function.prototype,
                    c = Object.prototype,
                    s = u.toString,
                    f = c.hasOwnProperty,
                    l = s.call(Object);
                t.exports = function (t) {
                    if (!i(t) || r(t) != a) return !1;
                    var e = o(t);
                    if (null === e) return !0;
                    var n = f.call(e, "constructor") && e.constructor;
                    return "function" == typeof n && n instanceof n && s.call(n) == l
                }
            }, function (t, e, n) {
                function r(t, e) {
                    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
                    var n = function () {
                        var r = arguments,
                            o = e ? e.apply(this, r) : r[0],
                            i = n.cache;
                        if (i.has(o)) return i.get(o);
                        var a = t.apply(this, r);
                        return n.cache = i.set(o, a) || i, a
                    };
                    return n.cache = new(r.Cache || o), n
                }
                var o = n(34),
                    i = "Expected a function";
                r.Cache = o, t.exports = r
            }, function (t, e, n) {
                var r = n(102),
                    o = n(118)((function (t, e) {
                        return null == t ? {} : r(t, e)
                    }));
                t.exports = o
            }, function (t, e) {
                t.exports = function () {
                    return !1
                }
            }, function (t, e, n) {
                var r = n(114),
                    o = n(46);
                t.exports = function (t) {
                    return r(t, o(t))
                }
            }, function (t, e, n) {
                var r = n(108);
                t.exports = function (t) {
                    return null == t ? "" : r(t)
                }
            }, function (t, e, n) {
                t.exports = n(48)
            }])
        }, t.exports = r(r.toString()).default
    },
    45: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            },
            o = a(n(0)),
            i = a(n(6));

        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var u = function (t) {
            var e = t.color,
                n = t.size,
                i = function (t, e) {
                    var n = {};
                    for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                    return n
                }(t, ["color", "size"]);
            return o.default.createElement("svg", r({
                xmlns: "http://www.w3.org/2000/svg",
                width: n,
                height: n,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, i), o.default.createElement("line", {
                x1: "12",
                y1: "2",
                x2: "12",
                y2: "6"
            }), o.default.createElement("line", {
                x1: "12",
                y1: "18",
                x2: "12",
                y2: "22"
            }), o.default.createElement("line", {
                x1: "4.93",
                y1: "4.93",
                x2: "7.76",
                y2: "7.76"
            }), o.default.createElement("line", {
                x1: "16.24",
                y1: "16.24",
                x2: "19.07",
                y2: "19.07"
            }), o.default.createElement("line", {
                x1: "2",
                y1: "12",
                x2: "6",
                y2: "12"
            }), o.default.createElement("line", {
                x1: "18",
                y1: "12",
                x2: "22",
                y2: "12"
            }), o.default.createElement("line", {
                x1: "4.93",
                y1: "19.07",
                x2: "7.76",
                y2: "16.24"
            }), o.default.createElement("line", {
                x1: "16.24",
                y1: "7.76",
                x2: "19.07",
                y2: "4.93"
            }))
        };
        u.propTypes = {
            color: i.default.string,
            size: i.default.oneOfType([i.default.string, i.default.number])
        }, u.defaultProps = {
            color: "currentColor",
            size: "24"
        }, e.default = u
    }
}]);
