/**
 * Satellizer 0.13.3
 * (c) 2015 Sahat Yalkabov
 * License: MIT
 */
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "satellizer"),
    function(e, t, r) {
        "use strict";
        e.location.origin || (e.location.origin = e.location.protocol + "//" + e.location.host), t.module("satellizer", []).constant("SatellizerConfig", {
            httpInterceptor: function() {
                return !0
            },

            withCredentials: !1,
            tokenRoot: null,
            cordova: !1,
            baseUrl: "/#",
            loginUrl: "/auth/login",
            signupUrl: "/auth/signup",
            unlinkUrl: "/auth/unlink/",
            tokenName: 'token',
            tokenPrefix: "satellizer",
            authHeader: "Authorization",
            authToken: "Bearer",
            storageType: "localStorage",
            providers: {
                facebook: {
                    name: "facebook",
                    url: "/auth/facebook",
                    authorizationEndpoint: "https://www.facebook.com/v2.5/dialog/oauth",
                    redirectUri: e.location.origin + "/",
                    requiredUrlParams: ["display", "scope"],
                    scope: ["email"],
                    scopeDelimiter: ",",
                    display: "popup",
                    type: "2.0",
                    popupOptions: {
                        width: 580,
                        height: 400
                    }
                },
                google: {
                    name: "google",
                    url: "/auth/google",
                    authorizationEndpoint: "https://accounts.google.com/o/oauth2/auth",
                    redirectUri: e.location.origin,
                    requiredUrlParams: ["scope"],
                    optionalUrlParams: ["display"],
                    scope: ["profile", "email"],
                    scopePrefix: "openid",
                    scopeDelimiter: " ",
                    display: "popup",
                    type: "2.0",
                    popupOptions: {
                        width: 452,
                        height: 633
                    }
                },
                github: {
                    name: "github",
                    url: "/auth/github",
                    authorizationEndpoint: "https://github.com/login/oauth/authorize",
                    redirectUri: e.location.origin,
                    optionalUrlParams: ["scope"],
                    scope: ["user:email"],
                    scopeDelimiter: " ",
                    type: "2.0",
                    popupOptions: {
                        width: 1020,
                        height: 618
                    }
                },
                instagram: {
                    name: "instagram",
                    url: "/auth/instagram",
                    authorizationEndpoint: "https://api.instagram.com/oauth/authorize",
                    redirectUri: e.location.origin,
                    requiredUrlParams: ["scope"],
                    scope: ["basic"],
                    scopeDelimiter: "+",
                    type: "2.0"
                },
                linkedin: {
                    name: "linkedin",
                    url: "/auth/linkedin",
                    authorizationEndpoint: "https://www.linkedin.com/uas/oauth2/authorization",
                    redirectUri: e.location.origin,
                    requiredUrlParams: ["state"],
                    scope: ["r_emailaddress"],
                    scopeDelimiter: " ",
                    state: "STATE",
                    type: "2.0",
                    popupOptions: {
                        width: 527,
                        height: 582
                    }
                },
                twitter: {
                    name: "twitter",
                    url: "/auth/twitter",
                    authorizationEndpoint: "https://api.twitter.com/oauth/authenticate",
                    redirectUri: e.location.origin,
                    type: "1.0",
                    popupOptions: {
                        width: 495,
                        height: 645
                    }
                },
                twitch: {
                    name: "twitch",
                    url: "/auth/twitch",
                    authorizationEndpoint: "https://api.twitch.tv/kraken/oauth2/authorize",
                    redirectUri: e.location.origin,
                    requiredUrlParams: ["scope"],
                    scope: ["user_read"],
                    scopeDelimiter: " ",
                    display: "popup",
                    type: "2.0",
                    popupOptions: {
                        width: 500,
                        height: 560
                    }
                },
                live: {
                    name: "live",
                    url: "/auth/live",
                    authorizationEndpoint: "https://login.live.com/oauth20_authorize.srf",
                    redirectUri: e.location.origin,
                    requiredUrlParams: ["display", "scope"],
                    scope: ["wl.emails"],
                    scopeDelimiter: " ",
                    display: "popup",
                    type: "2.0",
                    popupOptions: {
                        width: 500,
                        height: 560
                    }
                },
                yahoo: {
                    name: "yahoo",
                    url: "/auth/yahoo",
                    authorizationEndpoint: "https://api.login.yahoo.com/oauth2/request_auth",
                    redirectUri: e.location.origin,
                    scope: [],
                    scopeDelimiter: ",",
                    type: "2.0",
                    popupOptions: {
                        width: 559,
                        height: 519
                    }
                },
                bitbucket: {
                    name: "bitbucket",
                    url: "/auth/bitbucket",
                    authorizationEndpoint: "https://bitbucket.org/site/oauth2/authorize",
                    redirectUri: e.location.origin + "/",
                    requiredUrlParams: ["scope"],
                    scope: ["email"],
                    scopeDelimiter: ",",
                    type: "2.0",
                    popupOptions: {
                        width: 1028,
                        height: 529
                    }
                }
            }
        }).provider("$auth", ["SatellizerConfig", function(e) {
            Object.defineProperties(this, {
                httpInterceptor: {
                    get: function() {
                        return e.httpInterceptor
                    },
                    set: function(t) {
                        "function" == typeof t ? e.httpInterceptor = t : e.httpInterceptor = function() {
                            return t
                        }
                    }
                },
                baseUrl: {
                    get: function() {
                        return e.baseUrl
                    },
                    set: function(t) {
                        e.baseUrl = t
                    }
                },
                loginUrl: {
                    get: function() {
                        return e.loginUrl
                    },
                    set: function(t) {
                        e.loginUrl = t
                    }
                },
                signupUrl: {
                    get: function() {
                        return e.signupUrl
                    },
                    set: function(t) {
                        e.signupUrl = t
                    }
                },
                tokenRoot: {
                    get: function() {
                        return e.tokenRoot
                    },
                    set: function(t) {
                        e.tokenRoot = t
                    }
                },
                tokenName: {
                    get: function() {
                        return e.tokenName
                    },
                    set: function(t) {
                        e.tokenName = t
                    }
                },
                tokenPrefix: {
                    get: function() {
                        return e.tokenPrefix
                    },
                    set: function(t) {
                        e.tokenPrefix = t
                    }
                },
                unlinkUrl: {
                    get: function() {
                        return e.unlinkUrl
                    },
                    set: function(t) {
                        e.unlinkUrl = t
                    }
                },
                authHeader: {
                    get: function() {
                        return e.authHeader
                    },
                    set: function(t) {
                        e.authHeader = t
                    }
                },
                authToken: {
                    get: function() {
                        return e.authToken
                    },
                    set: function(t) {
                        e.authToken = t
                    }
                },
                withCredentials: {
                    get: function() {
                        return e.withCredentials
                    },
                    set: function(t) {
                        e.withCredentials = t
                    }
                },
                cordova: {
                    get: function() {
                        return e.cordova
                    },
                    set: function(t) {
                        e.cordova = t
                    }
                },
                storageType: {
                    get: function() {
                        return e.storageType
                    },
                    set: function(t) {
                        e.storageType = t
                    }
                }
            }), t.forEach(Object.keys(e.providers), function(r) {
                this[r] = function(n) {
                    return t.extend(e.providers[r], n)
                }
            }, this);
            var r = function(r) {
                e.providers[r.name] = e.providers[r.name] || {}, t.extend(e.providers[r.name], r)
            };
            this.oauth1 = function(t) {
                r(t), e.providers[t.name].type = "1.0"
            }, this.oauth2 = function(t) {
                r(t), e.providers[t.name].type = "2.0"
            }, this.$get = ["$q", "SatellizerShared", "SatellizerLocal", "SatellizerOauth", function(e, t, r, n) {
                var o = {};
                return o.login = function(e, t) {
                    return r.login(e, t)
                }, o.signup = function(e, t) {
                    return r.signup(e, t)
                }, o.logout = function() {
                    return t.logout()
                }, o.authenticate = function(e, t) {
                    return n.authenticate(e, t)
                }, o.link = function(e, t) {
                    return n.authenticate(e, t)
                }, o.unlink = function(e, t) {
                    return n.unlink(e, t)
                }, o.isAuthenticated = function() {
                    return t.isAuthenticated()
                }, o.getToken = function() {
                    return t.getToken()
                }, o.setToken = function(e) {
                    t.setToken({
                        access_token: e
                    })
                }, o.removeToken = function() {
                    return t.removeToken()
                }, o.getPayload = function() {
                    return t.getPayload()
                }, o.setStorageType = function(e) {
                    return t.setStorageType(e)
                }, o
            }]
        }]).factory("SatellizerShared", ["$q", "$window", "$log", "SatellizerConfig", "SatellizerStorage", function(n, o, i, a, u) {
            var p = {},
                l = a.tokenPrefix ? [a.tokenPrefix, a.tokenName].join("_") : a.tokenName;
            return p.getToken = function() {
                return u.get(l)
            }, p.getPayload = function() {
                var t = u.get(l);
                if (t && 3 === t.split(".").length) try {
                    var n = t.split(".")[1],
                        o = n.replace(/-/g, "+").replace(/_/g, "/");
                    return JSON.parse(decodeURIComponent(escape(e.atob(o))))
                } catch (i) {
                    return r
                }
            }, p.setToken = function(e) {
                if (!e) return i.warn("Can't set token without passing a value");
                var r, n = e && e.access_token;
                if (n && (t.isObject(n) && t.isObject(n.data) ? e = n : t.isString(n) && (r = n)), !r && e) {
                    var o = a.tokenRoot && a.tokenRoot.split(".").reduce(function(e, t) {
                        return e[t]
                    }, e.data);
                    r = o ? o[a.tokenName] : e.data[a.tokenName]
                }
                if (!r) {
                    var p = a.tokenRoot ? a.tokenRoot + "." + a.tokenName : a.tokenName;
                    return i.warn('Expecting a token named "' + p)
                }
                u.set(l, r)
            }, p.removeToken = function() {
                u.remove(l)
            }, p.isAuthenticated = function() {
                var e = u.get(l);
                if (e) {
                    if (3 === e.split(".").length) try {
                        var t = e.split(".")[1],
                            r = t.replace(/-/g, "+").replace(/_/g, "/"),
                            n = JSON.parse(o.atob(r)).exp;
                        if (n) {
                            var i = Math.round((new Date).getTime() / 1e3) >= n;
                            return i ? (u.remove(l), !1) : !0
                        }
                    } catch (a) {
                        return !0
                    }
                    return !0
                }
                return !1
            }, p.logout = function() {
                return u.remove(l), n.when()
            }, p.setStorageType = function(e) {
                a.storageType = e
            }, p
        }]).factory("SatellizerOauth", ["$q", "$http", "SatellizerConfig", "SatellizerUtils", "SatellizerShared", "SatellizerOauth1", "SatellizerOauth2", function(e, t, r, n, o, i, a) {
            var u = {};
            return u.authenticate = function(t, n) {
                var u = "1.0" === r.providers[t].type ? new i : new a,
                    p = e.defer();
                return u.open(r.providers[t], n || {}).then(function(e) {
                    r.providers[t].url && o.setToken(e, !1), p.resolve(e)
                })["catch"](function(e) {
                    p.reject(e)
                }), p.promise
            }, u.unlink = function(e, o) {
                return o = o || {}, o.url = o.url ? o.url : n.joinUrl(r.baseUrl, r.unlinkUrl), o.data = {
                    provider: e
                } || o.data, o.method = o.method || "POST", o.withCredentials = o.withCredentials || r.withCredentials, t(o)
            }, u
        }]).factory("SatellizerLocal", ["$http", "SatellizerUtils", "SatellizerShared", "SatellizerConfig", function(e, t, r, n) {
            var o = {};
            return o.login = function(o, i) {
                return i = i || {}, i.url = i.url ? i.url : t.joinUrl(n.baseUrl, n.loginUrl), i.data = o || i.data, i.method = i.method || "POST", i.withCredentials = i.withCredentials || n.withCredentials, e(i).then(function(e) {
                    return r.setToken(e), e
                })
            }, o.signup = function(r, o) {
                return o = o || {}, o.url = o.url ? o.url : t.joinUrl(n.baseUrl, n.signupUrl), o.data = r || o.data, o.method = o.method || "POST", o.withCredentials = o.withCredentials || n.withCredentials, e(o)
            }, o
        }]).factory("SatellizerOauth2", ["$q", "$http", "$window", "SatellizerPopup", "SatellizerUtils", "SatellizerConfig", "SatellizerStorage", function(e, r, n, o, i, a, u) {
            return function() {
                var n = {},
                    p = {
                        defaultUrlParams: ["response_type", "client_id", "redirect_uri"],
                        responseType: "code",
                        responseParams: {
                            code: "code",
                            clientId: "clientId",
                            redirectUri: "redirectUri"
                        }
                    };
                return n.open = function(r, l) {
                    p = i.merge(r, p);
                    var c, s, d = p.name + "_state";
                    return t.isFunction(p.state) ? u.set(d, p.state()) : t.isString(p.state) && u.set(d, p.state), c = [p.authorizationEndpoint, n.buildQueryString()].join("?"), s = a.cordova ? o.open(c, p.name, p.popupOptions, p.redirectUri).eventListener(p.redirectUri) : o.open(c, p.name, p.popupOptions, p.redirectUri).pollPopup(), s.then(function(t) {
                        return "token" !== p.responseType && p.url ? t.state && t.state !== u.get(d) ? e.reject('OAuth "state" mismatch') : n.exchangeForToken(t, l) : t
                    })
                }, n.exchangeForToken = function(e, n) {
                    var o = t.extend({}, n);
                    t.forEach(p.responseParams, function(t, r) {
                        switch (r) {
                            case "code":
                                o[t] = e.code;
                                break;
                            case "clientId":
                                o[t] = p.clientId;
                                break;
                            case "redirectUri":
                                o[t] = p.redirectUri;
                                break;
                            default:
                                o[t] = e[r]
                        }
                    }), e.state && (o.state = e.state);
                    var u = a.baseUrl ? i.joinUrl(a.baseUrl, p.url) : p.url;
                    return r.post(u, o, {
                        withCredentials: a.withCredentials
                    })
                }, n.buildQueryString = function() {
                    var e = [],
                        r = ["defaultUrlParams", "requiredUrlParams", "optionalUrlParams"];
                    return t.forEach(r, function(r) {
                        t.forEach(p[r], function(r) {
                            var n = i.camelCase(r),
                                o = t.isFunction(p[r]) ? p[r]() : p[n];
                            if ("redirect_uri" !== r || o) {
                                if ("state" === r) {
                                    var a = p.name + "_state";
                                    o = encodeURIComponent(u.get(a))
                                }
                                "scope" === r && Array.isArray(o) && (o = o.join(p.scopeDelimiter), p.scopePrefix && (o = [p.scopePrefix, o].join(p.scopeDelimiter))), e.push([r, o])
                            }
                        })
                    }), e.map(function(e) {
                        return e.join("=")
                    }).join("&")
                }, n
            }
        }]).factory("SatellizerOauth1", ["$q", "$http", "SatellizerPopup", "SatellizerConfig", "SatellizerUtils", function(e, r, n, o, i) {
            return function() {
                var e = {},
                    a = {
                        url: null,
                        name: null,
                        popupOptions: null,
                        redirectUri: null,
                        authorizationEndpoint: null
                    };
                return e.open = function(u, p) {
                    t.extend(a, u);
                    var l, c = o.baseUrl ? i.joinUrl(o.baseUrl, a.url) : a.url;
                    return o.cordova || (l = n.open("", a.name, a.popupOptions, a.redirectUri)), r.post(c, a).then(function(t) {
                        var r = [a.authorizationEndpoint, e.buildQueryString(t.data)].join("?");
                        o.cordova ? l = n.open(r, a.name, a.popupOptions, a.redirectUri) : l.popupWindow.location = r;
                        var i;
                        return i = o.cordova ? l.eventListener(a.redirectUri) : l.pollPopup(), i.then(function(t) {
                            return e.exchangeForToken(t, p)
                        })
                    })
                }, e.exchangeForToken = function(e, n) {
                    var u = t.extend({}, n, e),
                        p = o.baseUrl ? i.joinUrl(o.baseUrl, a.url) : a.url;
                    return r.post(p, u, {
                        withCredentials: o.withCredentials
                    })
                }, e.buildQueryString = function(e) {
                    var r = [];
                    return t.forEach(e, function(e, t) {
                        r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
                    }), r.join("&")
                }, e
            }
        }]).factory("SatellizerPopup", ["$q", "$interval", "$window", "SatellizerConfig", "SatellizerUtils", function(e, n, o, i, a) {
            var u = {};
            return u.url = "", u.popupWindow = null, u.open = function(e, t, r) {
                u.url = e;
                var n = u.stringifyOptions(u.prepareOptions(r)),
                    a = o.navigator.userAgent,
                    p = i.cordova || a.indexOf("CriOS") > -1 ? "_blank" : t;
                return u.popupWindow = o.open(e, p, n), o.popup = u.popupWindow, u.popupWindow && u.popupWindow.focus && u.popupWindow.focus(), u
            }, u.eventListener = function(r) {
                var n = e.defer();
                return u.popupWindow.addEventListener("loadstart", function(e) {
                    if (0 === e.url.indexOf(r)) {
                        var o = document.createElement("a");
                        if (o.href = e.url, o.search || o.hash) {
                            var i = o.search.substring(1).replace(/\/$/, ""),
                                p = o.hash.substring(1).replace(/\/$/, ""),
                                l = a.parseQueryString(p),
                                c = a.parseQueryString(i);
                            t.extend(c, l), c.error || n.resolve(c), u.popupWindow.close()
                        }
                    }
                }), u.popupWindow.addEventListener("loaderror", function() {
                    n.reject("Authorization Failed")
                }), n.promise
            }, u.pollPopup = function() {
                var o = e.defer(),
                    i = n(function() {
                        try {
                            var e = document.location.host,
                                p = u.popupWindow.location.host;
                            if (p === e && (u.popupWindow.location.search || u.popupWindow.location.hash)) {
                                var l = u.popupWindow.location.search.substring(1).replace(/\/$/, ""),
                                    c = u.popupWindow.location.hash.substring(1).replace(/[\/$]/, ""),
                                    s = a.parseQueryString(c),
                                    d = a.parseQueryString(l);
                                t.extend(d, s), d.error ? o.reject(d) : o.resolve(d), n.cancel(i), u.popupWindow.close()
                            }
                        } catch (h) {}(!u.popupWindow || u.popupWindow.closed || u.popupWindow.closed === r) && n.cancel(i)
                    }, 50);
                return o.promise
            }, u.prepareOptions = function(e) {
                e = e || {};
                var r = e.width || 500,
                    n = e.height || 500;
                return t.extend({
                    width: r,
                    height: n,
                    left: o.screenX + (o.outerWidth - r) / 2,
                    top: o.screenY + (o.outerHeight - n) / 2.5
                }, e)
            }, u.stringifyOptions = function(e) {
                var r = [];
                return t.forEach(e, function(e, t) {
                    r.push(t + "=" + e)
                }), r.join(",")
            }, u
        }]).service("SatellizerUtils", function() {
            this.camelCase = function(e) {
                return e.replace(/([\:\-\_]+(.))/g, function(e, t, r, n) {
                    return n ? r.toUpperCase() : r
                })
            }, this.parseQueryString = function(e) {
                var r, n, o = {};
                return t.forEach((e || "").split("&"), function(e) {
                    e && (n = e.split("="), r = decodeURIComponent(n[0]), o[r] = t.isDefined(n[1]) ? decodeURIComponent(n[1]) : !0)
                }), o
            }, this.joinUrl = function(e, t) {
                if (/^(?:[a-z]+:)?\/\//i.test(t)) return t;
                var r = [e, t].join("/"),
                    n = function(e) {
                        return e.replace(/[\/]+/g, "/").replace(/\/\?/g, "?").replace(/\/\#/g, "#").replace(/\:\//g, "://")
                    };
                return n(r)
            }, this.merge = function(e, t) {
                var r = {};
                for (var n in e) e.hasOwnProperty(n) && (n in t && "object" == typeof e[n] && null !== n ? r[n] = this.merge(e[n], t[n]) : r[n] = e[n]);
                for (n in t)
                    if (t.hasOwnProperty(n)) {
                        if (n in r) continue;
                        r[n] = t[n]
                    }
                return r
            }
        }).factory("SatellizerStorage", ["$window", "$log", "SatellizerConfig", function(e, t, r) {
            var n = {},
                o = function() {
                    try {
                        var t = r.storageType in e && null !== e[r.storageType];
                        if (t) {
                            var n = Math.random().toString(36).substring(7);
                            e[r.storageType].setItem(n, ""), e[r.storageType].removeItem(n)
                        }
                        return t
                    } catch (o) {
                        return !1
                    }
                }();
            return o || t.warn(r.storageType + " is not available."), {
                get: function(t) {
                    return o ? e[r.storageType].getItem(t) : n[t]
                },
                set: function(t, i) {
                    return o ? e[r.storageType].setItem(t, i) : n[t] = i
                },
                remove: function(t) {
                    return o ? e[r.storageType].removeItem(t) : delete n[t]
                }
            }
        }]).factory("SatellizerInterceptor", ["$q", "SatellizerConfig", "SatellizerStorage", "SatellizerShared", function(e, t, r, n) {
            return {
                request: function(e) {
                    if (e.skipAuthorization) return e;
                    if (n.isAuthenticated() && t.httpInterceptor(e)) {
                        var o = t.tokenPrefix ? t.tokenPrefix + "_" + t.tokenName : t.tokenName,
                            i = r.get(o);
                        t.authHeader && t.authToken && (i = t.authToken + " " + i), e.headers[t.authHeader] = i
                    }
                    return e
                },
                responseError: function(t) {
                    return e.reject(t)
                }
            }
        }]).config(["$httpProvider", function(e) {
            e.interceptors.push("SatellizerInterceptor")
        }])
    }(window, window.angular);
