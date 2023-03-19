(function(){"use strict";var n={7453:function(n,r,t){var e=t(9242),o=t(3396);const u={id:"app"};function i(n,r,t,e,i,c){const f=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(f)])}var c={name:"App"},f=t(89);const a=(0,f.Z)(c,[["render",i]]);var p=a;(0,e.ri)(p).mount("#app")}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var u=r[e]={exports:{}};return n[e](u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(r,e,o,u){if(!e){var i=1/0;for(p=0;p<n.length;p++){e=n[p][0],o=n[p][1],u=n[p][2];for(var c=!0,f=0;f<e.length;f++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](e[f])}))?e.splice(f--,1):(c=!1,u<i&&(i=u));if(c){n.splice(p--,1);var a=o();void 0!==a&&(r=a)}}return r}u=u||0;for(var p=n.length;p>0&&n[p-1][2]>u;p--)n[p]=n[p-1];n[p]=[e,o,u]}}(),function(){t.n=function(n){var r=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(r,{a:r}),r}}(),function(){t.d=function(n,r){for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)}}(),function(){var n={143:0};t.O.j=function(r){return 0===n[r]};var r=function(r,e){var o,u,i=e[0],c=e[1],f=e[2],a=0;if(i.some((function(r){return 0!==n[r]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(f)var p=f(t)}for(r&&r(e);a<i.length;a++)u=i[a],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(p)},e=self["webpackChunkcounter_app"]=self["webpackChunkcounter_app"]||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(7453)}));e=t.O(e)})();
//# sourceMappingURL=app.98e02748.js.map(()=>
{
    "use strict";
    var e = {
        1838: (e,n,t)=>{
            t(6992),
            t(8674),
            t(9601),
            t(7727);
            var u = t(5010)
              , r = (t(2564),
            t(847));
            const a = (0,
            r.MT)({
                state: {
                    counter: 0,
                    range: [0, 0],
                    interval: null
                },
                mutations: {
                    increment: function(e) {
                        e.counter++
                    },
                    decrement: function(e) {
                        e.counter--
                    },
                    setValue: function(e, n) {
                        null != n && (e.counter = n)
                    },
                    reset: function(e) {
                        e.counter = 0
                    },
                    play: function(e, n) {
                        if (0 != n) {
                            e.range[1] = n;
                            var t = e.range[1] > 0 ? "+" : "-";
                            e.interval = setInterval((function() {
                                "+" == t ? e.range[0] != e.range[1] ? e.range[0]++ : (clearInterval(e.interval),
                                e.interval = null) : e.range[0] != e.range[1] ? e.range[0]-- : (clearInterval(e.interval),
                                e.interval = null)
                            }
                            ), 1e3)
                        }
                    },
                    stop: function(e) {
                        clearInterval(e.interval),
                        e.interval = null
                    },
                    rangeReset: function(e) {
                        clearInterval(e.interval),
                        e.interval = null,
                        e.range[0] = 0
                    }
                }
            });
            var l = t(2483)
              , o = t(3396)
              , c = (0,
            o._)("header", {
                class: "header"
            }, [(0,
            o._)("h1", null, [(0,
            o._)("p", null, "THE"), (0,
            o._)("p", null, "COUNTER APP")]), (0,
            o._)("p", {
                class: "email"
            }, "❤mmejuenoch@gmail.com❤")], -1)
              , i = {
                class: "main"
            }
              , s = (0,
            o._)("option", {
                value: "manual"
            }, "Manual Count", -1)
              , d = (0,
            o._)("option", {
                value: "range"
            }, "Range Count", -1)
              , v = (0,
            o._)("option", {
                value: "word"
            }, "Word Count", -1)
              , p = [s, d, v];
            function m(e, n, t, r, a, l) {
                var s = (0,
                o.up)("Manual")
                  , d = (0,
                o.up)("Range")
                  , v = (0,
                o.up)("Word");
                return (0,
                o.wg)(),
                (0,
                o.iD)(o.HY, null, [c, (0,
                o._)("main", i, [(0,
                o._)("form", {
                    class: "form-options",
                    onSubmit: n[1] || (n[1] = (0,
                    u.iM)((function() {
                        return l.handleSelect && l.handleSelect.apply(l, arguments)
                    }
                    ), ["prevent"]))
                }, [(0,
                o._)("select", {
                    class: "select",
                    onChange: n[0] || (n[0] = function() {
                        return l.handleSelect && l.handleSelect.apply(l, arguments)
                    }
                    )
                }, p, 32)], 32), "manual" == a.selected ? ((0,
                o.wg)(),
                (0,
                o.j4)(s, {
                    key: 0
                })) : "range" == a.selected ? ((0,
                o.wg)(),
                (0,
                o.j4)(d, {
                    key: 1
                })) : ((0,
                o.wg)(),
                (0,
                o.j4)(v, {
                    key: 2
                }))])], 64)
            }
            var f = t(7139)
              , h = {
                class: "manual"
            }
              , _ = {
                class: "controls"
            }
              , g = (0,
            o._)("button", null, "Set", -1)
              , b = {
                class: "the-buttons"
            };
            function w(e, n, t, r, a, l) {
                return (0,
                o.wg)(),
                (0,
                o.iD)("div", h, [(0,
                o._)("div", {
                    class: (0,
                    f.C_)(r.countClass)
                }, [(0,
                o._)("p", null, (0,
                f.zw)(r.count), 1), (0,
                o._)("button", {
                    onClick: n[0] || (n[0] = function() {
                        return r.reset && r.reset.apply(r, arguments)
                    }
                    )
                }, "Reset")], 2), (0,
                o._)("div", _, [(0,
                o._)("form", {
                    class: "form-input",
                    onSubmit: n[2] || (n[2] = (0,
                    u.iM)((function() {
                        return r.handleSetValue && r.handleSetValue.apply(r, arguments)
                    }
                    ), ["prevent"]))
                }, [(0,
                o.wy)((0,
                o._)("input", {
                    type: "number",
                    placeholder: "Set counter",
                    "onUpdate:modelValue": n[1] || (n[1] = function(e) {
                        return r.numberValue = e
                    }
                    )
                }, null, 512), [[u.nr, r.numberValue]]), g], 32), (0,
                o._)("div", b, [(0,
                o._)("button", {
                    onClick: n[3] || (n[3] = function() {
                        return r.increment && r.increment.apply(r, arguments)
                    }
                    ),
                    class: "increment"
                }, "+"), (0,
                o._)("button", {
                    onClick: n[4] || (n[4] = function() {
                        return r.decrement && r.decrement.apply(r, arguments)
                    }
                    ),
                    class: "decrement"
                }, "-")])])])
            }
            var C = function() {
                var e = (0,
                r.oR)();
                return {
                    count: (0,
                    o.Fl)((function() {
                        return e.state.counter
                    }
                    )),
                    rangeStart: (0,
                    o.Fl)((function() {
                        return e.state.range[0]
                    }
                    )),
                    interval: (0,
                    o.Fl)((function() {
                        return e.state.interval
                    }
                    )),
                    increment: function() {
                        e.commit("increment")
                    },
                    decrement: function() {
                        e.commit("decrement")
                    },
                    setValue: function(n) {
                        e.commit("setValue", n)
                    },
                    reset: function() {
                        e.commit("reset")
                    },
                    play: function(n) {
                        e.commit("play", n)
                    },
                    stop: function() {
                        e.commit("stop")
                    },
                    rangeReset: function() {
                        e.commit("rangeReset")
                    }
                }
            };
            const y = C;
            var R = t(4870);
            const S = {
                name: "Manual",
                setup: function() {
                    var e = y()
                      , n = e.count
                      , t = e.increment
                      , u = e.decrement
                      , r = e.setValue
                      , a = e.reset
                      , l = (0,
                    R.iH)(null)
                      , c = (0,
                    o.Fl)((function() {
                        return n.value >= 0 && n.value < 100 ? "count-number" : n.value >= 100 && n.value < 1e3 || n.value < 0 && n.value >= -99 ? "count-number hundred" : n.value >= 1e3 && n.value < 1e4 ? "count-number thousand" : (n.value,
                        "count-number ten-thousand")
                    }
                    ))
                      , i = function() {
                        r(l.value),
                        l.value = null
                    };
                    return {
                        handleSetValue: i,
                        numberValue: l,
                        count: n,
                        increment: t,
                        decrement: u,
                        reset: a,
                        countClass: c
                    }
                }
            };
            var O = t(89);
            const V = (0,
            O.Z)(S, [["render", w]])
              , k = V;
            var H = {
                class: "range"
            }
              , j = {
                class: "controls"
            }
              , x = {
                class: "form-input"
            }
              , F = ["disabled"]
              , M = {
                class: "the-buttons"
            };
            function I(e, n, t, r, a, l) {
                return (0,
                o.wg)(),
                (0,
                o.iD)("div", H, [(0,
                o._)("div", {
                    class: (0,
                    f.C_)(r.countClass)
                }, [(0,
                o._)("p", null, (0,
                f.zw)(r.rangeStart), 1)], 2), (0,
                o._)("div", j, [(0,
                o._)("div", x, [(0,
                o.wy)((0,
                o._)("input", {
                    type: "number",
                    placeholder: "count up to",
                    "onUpdate:modelValue": n[0] || (n[0] = function(e) {
                        return r.numberValue = e
                    }
                    ),
                    disabled: r.disableInput
                }, null, 8, F), [[u.nr, r.numberValue]])]), (0,
                o._)("div", M, [(0,
                o._)("button", {
                    onClick: n[1] || (n[1] = function() {
                        return r.handleCountOrReset && r.handleCountOrReset.apply(r, arguments)
                    }
                    ),
                    class: (0,
                    f.C_)(r.countOrReset)
                }, (0,
                f.zw)(r.countOrReset), 3), (0,
                o._)("button", {
                    onClick: n[2] || (n[2] = function() {
                        return r.handleStop && r.handleStop.apply(r, arguments)
                    }
                    ),
                    class: (0,
                    f.C_)(r.disabledOrStop)
                }, "Stop", 2)])])])
            }
            const W = {
                name: "Range",
                setup: function() {
                    var e = y()
                      , n = e.rangeStart
                      , t = e.interval
                      , u = e.play
                      , r = e.stop
                      , a = e.rangeReset
                      , l = (0,
                    R.iH)(null)
                      , c = (0,
                    R.iH)(!1)
                      , i = (0,
                    R.iH)("count")
                      , s = (0,
                    o.Fl)((function() {
                        return t.value ? "stop" : "disabled"
                    }
                    ))
                      , d = (0,
                    o.Fl)((function() {
                        return n.value >= 0 && n.value < 100 ? "count-number" : n.value >= 100 && n.value < 1e3 || n.value < 0 && n.value >= -99 ? "count-number hundred" : n.value >= 1e3 && n.value < 1e4 ? "count-number thousand" : (n.value,
                        "count-number ten-thousand")
                    }
                    ))
                      , v = function() {
                        null != l.value && "count" == i.value ? (u(l.value),
                        c.value = !0,
                        i.value = "reset") : "reset" == i.value && (a(),
                        c.value = !1,
                        l.value = null,
                        i.value = "count")
                    }
                      , p = function() {
                        "stop" == s.value && r()
                    };
                    return (0,
                    o.Ah)((function() {
                        a()
                    }
                    )),
                    {
                        numberValue: l,
                        disableInput: c,
                        disabledOrStop: s,
                        countOrReset: i,
                        rangeStart: n,
                        handleCountOrReset: v,
                        handleStop: p,
                        countClass: d
                    }
                }
            }
              , P = (0,
            O.Z)(W, [["render", I]])
              , Z = P;
            var D = {
                class: "word"
            }
              , T = {
                class: "controls"
            }
              , U = (0,
            o._)("button", null, "Count", -1);
            function z(e, n, t, r, a, l) {
                return (0,
                o.wg)(),
                (0,
                o.iD)("div", D, [(0,
                o._)("p", null, [(0,
                o._)("span", {
                    class: (0,
                    f.C_)({
                        show: 1 == r.showResult
                    })
                }, (0,
                f.zw)(r.wordNum), 3), (0,
                o._)("span", {
                    class: (0,
                    f.C_)({
                        show: 1 == r.showResult
                    }),
                    onClick: n[0] || (n[0] = function() {
                        return r.handleHideResult && r.handleHideResult.apply(r, arguments)
                    }
                    )
                }, "X", 2)]), (0,
                o._)("div", T, [(0,
                o._)("form", {
                    class: "form-input",
                    onSubmit: n[2] || (n[2] = (0,
                    u.iM)((function() {
                        return r.handleCountWords && r.handleCountWords.apply(r, arguments)
                    }
                    ), ["prevent"]))
                }, [(0,
                o.wy)((0,
                o._)("textarea", {
                    placeholder: "Paste/write text",
                    "onUpdate:modelValue": n[1] || (n[1] = function(e) {
                        return r.text = e
                    }
                    )
                }, null, 512), [[u.nr, r.text]]), U], 32)])])
            }
            const N = {
                name: "Word",
                setup: function() {
                    var e = (0,
                    R.iH)(null)
                      , n = (0,
                    R.iH)(0)
                      , t = (0,
                    R.iH)(!1)
                      , u = function() {
                        null != e.value && (n.value = e.value.split(" ").length,
                        t.value = !0)
                    }
                      , r = function() {
                        t.value = !1,
                        e.value = null
                    };
                    return {
                        text: e,
                        wordsCount: n,
                        handleCountWords: u,
                        wordNum: (0,
                        o.Fl)((function() {
                            return n.value > 1 ? "".concat(n.value, " words") : "".concat(n.value, " word")
                        }
                        )),
                        showResult: t,
                        handleHideResult: r
                    }
                }
            }
              , A = (0,
            O.Z)(N, [["render", z]])
              , E = A
              , X = {
                name: "CounterView",
                components: {
                    Manual: k,
                    Range: Z,
                    Word: E
                },
                data: function() {
                    return {
                        selected: "manual"
                    }
                },
                methods: {
                    handleSelect: function(e) {
                        this.selected = e.target.value
                    }
                }
            }
              , Y = (0,
            O.Z)(X, [["render", m]])
              , q = Y;
            var B = {
                class: "not-found"
            }
              , G = (0,
            o._)("h1", null, "404", -1)
              , J = (0,
            o._)("p", null, "I am sorry, but the page you are looking for does not exist", -1);
            function K(e, n) {
                var t = (0,
                o.up)("router-link");
                return (0,
                o.wg)(),
                (0,
                o.iD)("div", B, [G, J, (0,
                o.Wm)(t, {
                    to: {
                        name: "CounterView"
                    }
                }, {
                    default: (0,
                    o.w5)((function() {
                        return [(0,
                        o.Uk)(" Counter page ")]
                    }
                    )),
                    _: 1
                })])
            }
            const L = {}
              , Q = (0,
            O.Z)(L, [["render", K]])
              , $ = Q;
            var ee = [{
                path: "/counter",
                name: "CounterView",
                component: q
            }, {
                path: "/",
                redirect: "/counter"
            }, {
                path: "/:catchAll(.*)",
                name: "NotFound",
                component: $
            }]
              , ne = (0,
            l.p7)({
                history: (0,
                l.PO)("/"),
                routes: ee
            });
            const te = ne;
            function ue(e, n) {
                var t = (0,
                o.up)("router-view");
                return (0,
                o.wg)(),
                (0,
                o.j4)(t)
            }
            const re = {}
              , ae = (0,
            O.Z)(re, [["render", ue]])
              , le = ae;
            var oe = (0,
            u.ri)(le);
            oe.use(a),
            oe.use(te),
            oe.mount("#app")
        }
    }
      , n = {};
    function t(u) {
        var r = n[u];
        if (void 0 !== r)
            return r.exports;
        var a = n[u] = {
            exports: {}
        };
        return e[u](a, a.exports, t),
        a.exports
    }
    t.m = e,
    (()=>{
        var e = [];
        t.O = (n,u,r,a)=>{
            if (!u) {
                var l = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    for (var [u,r,a] = e[s], o = !0, c = 0; c < u.length; c++)
                        (!1 & a || l >= a) && Object.keys(t.O).every((e=>t.O[e](u[c]))) ? u.splice(c--, 1) : (o = !1,
                        a < l && (l = a));
                    if (o) {
                        e.splice(s--, 1);
                        var i = r();
                        void 0 !== i && (n = i)
                    }
                }
                return n
            }
            a = a || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > a; s--)
                e[s] = e[s - 1];
            e[s] = [u, r, a]
        }
    }
    )(),
    (()=>{
        t.n = e=>{
            var n = e && e.__esModule ? ()=>e["default"] : ()=>e;
            return t.d(n, {
                a: n
            }),
            n
        }
    }
    )(),
    (()=>{
        t.d = (e,n)=>{
            for (var u in n)
                t.o(n, u) && !t.o(e, u) && Object.defineProperty(e, u, {
                    enumerable: !0,
                    get: n[u]
                })
        }
    }
    )(),
    (()=>{
        t.g = function() {
            if ("object" === typeof globalThis)
                return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window)
                    return window
            }
        }()
    }
    )(),
    (()=>{
        t.o = (e,n)=>Object.prototype.hasOwnProperty.call(e, n)
    }
    )(),
    (()=>{
        var e = {
            143: 0
        };
        t.O.j = n=>0 === e[n];
        var n = (n,u)=>{
            var r, a, [l,o,c] = u, i = 0;
            if (l.some((n=>0 !== e[n]))) {
                for (r in o)
                    t.o(o, r) && (t.m[r] = o[r]);
                if (c)
                    var s = c(t)
            }
            for (n && n(u); i < l.length; i++)
                a = l[i],
                t.o(e, a) && e[a] && e[a][0](),
                e[a] = 0;
            return t.O(s)
        }
          , u = self["webpackChunkthe_counter_app"] = self["webpackChunkthe_counter_app"] || [];
        u.forEach(n.bind(null, 0)),
        u.push = n.bind(null, u.push.bind(u))
    }
    )();
    var u = t.O(void 0, [998], (()=>t(1838)));
    u = t.O(u)
}
