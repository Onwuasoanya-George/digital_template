webpackJsonp([9], [
    function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("Homepage", [i(2).name, i(64).name, i(107).name, i(55).name, i(109).name, i(25).name]), e.exports.controller("HomepageController", i(113))
}, ,
    function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MiyagiCore", [i(3).name, i(4).name, i(5).name, i(6).name, i(7).name, i(9).name, i(16).name, i(20).name, i(24).name, i(36).name, i(39).name]), e.exports.directive("mygCheckFlexWrap", i(41)), e.exports.directive("mygCheckGrayscale", i(42)), e.exports.directive("mygTrackingRegisterScreenResolution", i(43)), e.exports.directive("mygTrackingLogin", i(44)), e.exports.config(i(45)), e.exports.filter("hashPrefixHref", i(46)), e.exports.filter("sprintf", i(47)), e.exports.filter("bold", i(48)), e.exports.filter("unsafe", i(49)), e.exports.filter("sprintfbold", i(50))
}, , , , , function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MiyagiUtilsComponent", []), e.exports.service("MygUtilsService", i(8))
},
    function (e, t) {
    "use strict";
    var i = function () {
        this.transitionEnd = this.getTransitionEnd(), this.animationEnd = this.getAnimationEnd(), this.matchesSelector = this.getMatchesSelector()
    };
    i.prototype.getCSSTransform = function () {
        for (var e = "transform WebkitTransform MozTransform OTransform msTransform".split(" "), t = document.createElement("div"), i = 0; i < e.length; i++)if (t && void 0 !== t.style[e[i]])return e[i]
    }, i.prototype.getCSSTransition = function () {
        for (var e = "transition WebkitTransition MozTransition OTransition msTransition".split(" "), t = document.createElement("div"), i = 0; i < e.length; i++)if (t && void 0 !== t.style[e[i]])return e[i]
    }, i.prototype.getTransitionEnd = function () {
        var e = document.createElement("div"), t = {
            transition: "transitionend",
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd"
        };
        for (var i in t)if (t.hasOwnProperty(i) && void 0 !== e.style[i])return e = null, t[i]
    }, i.prototype.getAnimationEnd = function () {
        var e = document.createElement("div"), t = {
            animation: "animationend",
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oanimationend",
            MSAnimation: "MSAnimationEnd"
        };
        for (var i in t)if (t.hasOwnProperty(i) && void 0 !== e.style[i])return t[i]
    }, i.prototype.getMatchesSelector = function () {
        var e = "undefined" != typeof Element && Element.prototype || {}, t = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
        return t || null
    }, i.prototype.getParent = function (e, t) {
        if ("string" != typeof e.tagName)throw new Error("MygUtilsService:getParent - Supply a valid DOM element.");
        if ("string" != typeof t)throw new Error("MygUtilsService:getParent - Supply a selector string.");
        for (var i = e, o = null; i.parentNode;) {
            if (this.matchesSelector.call(i, t)) {
                o = i;
                break
            }
            i = i.parentNode
        }
        return o
    }, i.prototype.nodesToArray = function (e) {
        return Array.prototype.slice.call(e)
    }, i.prototype.getElementHeight = function (e) {
        var t = window.getComputedStyle(e), i = t.display, o = t.position, s = t.visibility, n = t.maxHeight.replace("px", "").replace("%", ""), r = 0;
        return "none" !== i && "0" !== n ? e.offsetHeight : (e.style.position = "absolute", e.style.visibility = "hidden", e.style.display = "block", r = e.offsetHeight, e.style.position = o, e.style.visibility = s, e.style.display = i, r)
    }, i.prototype.bindDOMContentLoadedListener = function (e) {
        "complete" === document.readyState || "interactive" === document.readyState || "loaded" === document.readyState ? setTimeout(function () {
                e()
            }, 0) : document.addEventListener("DOMContentLoaded", function t() {
                document.removeEventListener("DOMContentLoaded", t, !1), setTimeout(function () {
                    e()
                }, 0)
            }, !1)
    }, i.prototype.regexEmailValidityCheck = function (e) {
        var t = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i);
        return t.test(e)
    }, i.prototype.regexUrlValidityCheck = function (e) {
        var t = new RegExp(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i);
        return t.test(e)
    }, i.prototype.throttle = function (e, t, i) {
        var o, s, n, r = null, l = 0;
        i || (i = {});
        var a = function () {
            l = i.leading === !1 ? 0 : (new Date).getTime(), r = null, n = e.apply(o, s), r || (o = s = null)
        }, d = function () {
            var d = (new Date).getTime();
            l || i.leading !== !1 || (l = d);
            var c = t - (d - l);
            return o = this, s = arguments, c <= 0 || c > t ? (clearTimeout(r), r = null, l = d, n = e.apply(o, s), r || (o = s = null)) : r || i.trailing === !1 || (r = setTimeout(a, c)), n
        };
        return d
    }, i.prototype.easingFunctions = {
        linear: function (e) {
            return e
        }, easeInQuad: function (e) {
            return e * e
        }, easeOutQuad: function (e) {
            return e * (2 - e)
        }, easeInOutQuad: function (e) {
            return e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e
        }, easeInCubic: function (e) {
            return e * e * e
        }, easeOutCubic: function (e) {
            return --e * e * e + 1
        }, easeInOutCubic: function (e) {
            return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
        }, easeInQuart: function (e) {
            return e * e * e * e
        }, easeOutQuart: function (e) {
            return 1 - --e * e * e * e
        }, easeInOutQuart: function (e) {
            return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
        }, easeInQuint: function (e) {
            return e * e * e * e * e
        }, easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e
        }, easeInOutQuint: function (e) {
            return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
        }
    }, e.exports = i
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("HeaderComponent", [i(7).name, i(10).name]), e.exports.controller("HeaderController", i(12)), e.exports.controller("SidenavController", i(13)), e.exports.controller("HeaderNavController", i(14)), e.exports.directive("toggleActiveLinkDirective", i(15))
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MygDataLayerPush", []), e.exports.directive("mygDataLayerPush", i(11))
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = function (e) {
        return {
            restrict: "A", scope: {dataPayload: "=mygDataLayerPushPayload"}, link: function (t) {
                var i = function (t) {
                    window.dataLayer.push(t[0]), t.length > 1 && e(function () {
                        t.shift(), i(t)
                    }, 500)
                };
                if (window && window.dataLayer && t.dataPayload) {
                    var s = t.dataPayload;
                    o.isArray(t.dataPayload) || (s = [s]), i(s)
                }
            }
        }
    }, e.exports.$inject = ["$timeout"]
}, function (e, t) {
    "use strict";
    e.exports = function (e, t) {
        this.sideNav = t("miyagi-sidenav"), this.toggleNav = this.sideNav.toggle
    }, e.exports.$inject = ["$scope", "$mdSidenav"]
}, function (e, t) {
    "use strict";
    e.exports = function (e, t, i, o, s) {
        var n = this;
        i(function () {
            n.close = t("miyagi-sidenav").close
        }), this.onLinkClick = function (e) {
            e.preventDefault();
            var t = e.target, i = e.target.href;
            "undefined" == typeof i && (t = s.getParent(t, "a"), i = t.href), t.classList.contains("js-link--external") ? o.open(i, "_blank") : o.location.href = i, this.close()
        }, e.$watch("sidenav.isSidenavOpen", function (e) {
            var t = o.document.getElementsByTagName("html")[0], i = t.classList;
            e ? i.add("js-sidenav-open") : i.remove("js-sidenav-open")
        })
    }, e.exports.$inject = ["$scope", "$mdSidenav", "$timeout", "$window", "MygUtilsService"]
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = function (e, t, i, s) {
        e.currentNavItem = "unselected", s(function () {
            var s = i.location.pathname;
            t.find(".md-nav-item.sub-header-nav__link").filter(function (t, i) {
                var n = o.element(i).attr("md-nav-href"), r = "/" + n.replace(/^\//gi, "");
                r === s && (e.currentNavItem = o.element(i).attr("name"))
            }).first(), e.$apply()
        }, 0)
    }, e.exports.$inject = ["$scope", "$element", "$window", "$timeout"]
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = function (e) {
        return {
            restrict: "A", link: function (t, i) {
                function s() {
                    for (var t = e.absUrl(), i = "/" + t.split(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)[5].split("/")[1], s = 0, l = r.length; s < l; s++) {
                        var a = r[s], d = a.getAttribute("href");
                        if (d === i) {
                            n && n.removeClass("is-active"), n = o.element(a), n.addClass("is-active");
                            break
                        }
                    }
                }

                var n = null, r = i[0].querySelectorAll(".js-main-sidenav__link");
                t.$on("$locationChangeSuccess", function () {
                    s()
                })
            }
        }
    }, e.exports.$inject = ["$location"]
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("FooterComponent", [i(3).name, i(7).name]), e.exports.directive("mygLocaleSelector", i(17)), e.exports.directive("mygShareLink", i(19))
}, function (e, t, i) {
    "use strict";
    e.exports = function () {
        return {
            bindToController: !0,
            controller: i(18),
            controllerAs: "LocaleSelectorCtrl",
            restrict: "A",
            replace: !1,
            scope: {eventXsrfToken: "@", xsrfToken: "@", showOnLoad: "@"},
            link: function (e, t, i, o) {
                t.on("change", function (e) {
                    e.preventDefault();
                    var i = t[0].selectedIndex, s = t[0].options[i];
                    o.goToURL(s.value)
                })
            }
        }
    }
}, function (e, t) {
    "use strict";
    e.exports = function (e, t, i, o, s) {
        var n = this;
        n.goToURL = function (e) {
            i.location.href = e
        }, n.showSuggestion = function () {
            var e = t.$new();
            e.hide = s.hide, s.show({
                hideDelay: 12e3,
                position: "bottom center",
                templateUrl: "locale-selector-toast",
                scope: e
            }).then(function (e) {
                void 0 === e ? n.rejectSuggestion() : n.goToURL(e)
            })
        }, n.rejectSuggestion = function () {
            return o({
                method: "POST",
                url: "/api/locale-suggestion-overruled",
                data: {"xsrf-token": n.xsrfToken, eventXsrfToken: n.eventXsrfToken}
            })
        }, "true" === n.showOnLoad.toLowerCase() && n.showSuggestion()
    }, e.exports.$inject = ["$scope", "$rootScope", "$window", "$http", "$mdToast"]
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = function (e, t) {
        return {
            restrict: "A", link: function (i, s, n) {
                var r = encodeURI(n.href);
                if (!r || !r.length || !e.regexUrlValidityCheck(r))throw new Error("Share URL provided must be valid with preceeding http:// or https://");
                var l, a = n.shareWidth || 400, d = n.shareHeight || 400, c = {
                    width: a,
                    height: d,
                    left: t.innerWidth / 2 - a / 2,
                    top: t.innerHeight / 2 - d / 2,
                    menubar: "no",
                    location: "no",
                    status: "no"
                }, u = "";
                for (var p in Object.keys(c))l = Object.keys(c)[p], u += l + "=" + c[l] + ",";
                o.element(s).on("click", function (e) {
                    e.preventDefault(), t.open(r, "Share", u)
                })
            }
        }
    }, e.exports.$inject = ["MygUtilsService", "$window"]
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("DialogSignUpComponent", [i(3).name]), e.exports.controller("SignUpDialogController", i(21)), e.exports.directive("mygDialogSignUp", i(22)), e.exports.directive("mygDialogSignUpC", i(23))
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        this.dialogHide = function () {
            e.hide()
        }
    }, e.exports.$inject = ["$mdDialog"]
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        return {
            restrict: "A", scope: {dialogSignUpTemplate: "@"}, link: function (t, i) {
                var o = function (i) {
                    i.preventDefault(), e.show({
                        templateUrl: t.dialogSignUpTemplate ? t.dialogSignUpTemplate : "signup-dialog",
                        controller: "SignUpDialogController",
                        controllerAs: "signUpDialog",
                        clickOutsideToClose: !0,
                        scope: t,
                        preserveScope: !0
                    })
                };
                i.on("click", o)
            }
        }
    }, e.exports.$inject = ["$mdDialog"]
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        return {
            restrict: "A", scope: {dialogSignUpTemplate: "@"}, link: function (t) {
                e.show({
                    templateUrl: t.dialogSignUpTemplate ? t.dialogSignUpTemplate : "signup-dialog-c",
                    clickOutsideToClose: !1,
                    scope: t,
                    preserveScope: !0
                })
            }
        }
    }, e.exports.$inject = ["$mdDialog"]
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MygSurvey", [i(3).name, i(7).name, i(25).name]), e.exports.directive("mygSurvey", i(30)), e.exports.controller("mygSurveyToastController", i(32)), e.exports.controller("mygSurveyDialogController", i(34)), e.exports.service("SurveyApiService", i(35))
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MygSlickCarousel", []), e.exports.directive("mygSlickCarousel", i(26))
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    i(27), e.exports = function (e) {
        return {
            restrict: "E",
            controller: i(29),
            controllerAs: "SlickCtrl",
            scope: {carouselOptions: "=options"},
            link: function (t, i) {
                o.element(document).ready(function () {
                    t.carouselSelector = e.$(i).slick(t.carouselOptions)
                })
            }
        }
    }, e.exports.$inject = ["$window"]
}, function (e, t, i) {
    var o = !1;
    !function (t) {
        "use strict";
        "function" == typeof o && o.amd ? o(["jquery"], t) : e.exports = t(i(28))
    }(function (e) {
        "use strict";
        var t = window.Slick || {};
        t = function () {
            function t(t, o) {
                var s, n = this;
                n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, i) {
                        return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = e(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = e(t).data("slick") || {}, n.options = e.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = e.proxy(n.autoPlay, n), n.autoPlayClear = e.proxy(n.autoPlayClear, n), n.autoPlayIterator = e.proxy(n.autoPlayIterator, n), n.changeSlide = e.proxy(n.changeSlide, n), n.clickHandler = e.proxy(n.clickHandler, n), n.selectHandler = e.proxy(n.selectHandler, n), n.setPosition = e.proxy(n.setPosition, n), n.swipeHandler = e.proxy(n.swipeHandler, n), n.dragHandler = e.proxy(n.dragHandler, n), n.keyHandler = e.proxy(n.keyHandler, n), n.instanceUid = i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
            }

            var i = 0;
            return t
        }(), t.prototype.activateADA = function () {
            var e = this;
            e.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
        }, t.prototype.addSlide = t.prototype.slickAdd = function (t, i, o) {
            var s = this;
            if ("boolean" == typeof i) o = i, i = null; else if (i < 0 || i >= s.slideCount)return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? e(t).appendTo(s.$slideTrack) : o ? e(t).insertBefore(s.$slides.eq(i)) : e(t).insertAfter(s.$slides.eq(i)) : o === !0 ? e(t).prependTo(s.$slideTrack) : e(t).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (t, i) {
                e(i).attr("data-slick-index", t)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, t.prototype.animateHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({height: t}, e.options.speed)
            }
        }, t.prototype.animateSlide = function (t, i) {
            var o = {}, s = this;
            s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (t = -t), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({left: t}, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({top: t}, s.options.speed, s.options.easing, i) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), e({animStart: s.currentLeft}).animate({animStart: t}, {
                        duration: s.options.speed,
                        easing: s.options.easing,
                        step: function (e) {
                            e = Math.ceil(e), s.options.vertical === !1 ? (o[s.animType] = "translate(" + e + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(o))
                        },
                        complete: function () {
                            i && i.call()
                        }
                    })) : (s.applyTransition(), t = Math.ceil(t), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + t + "px, 0px)", s.$slideTrack.css(o), i && setTimeout(function () {
                        s.disableTransition(), i.call()
                    }, s.options.speed))
        }, t.prototype.getNavTarget = function () {
            var t = this, i = t.options.asNavFor;
            return i && null !== i && (i = e(i).not(t.$slider)), i
        }, t.prototype.asNavFor = function (t) {
            var i = this, o = i.getNavTarget();
            null !== o && "object" == typeof o && o.each(function () {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            })
        }, t.prototype.applyTransition = function (e) {
            var t = this, i = {};
            t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function () {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function () {
            var e = this;
            e.autoPlayTimer && clearInterval(e.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function () {
            var e = this, t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 === 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function () {
            var t = this;
            t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
        }, t.prototype.buildDots = function () {
            var t, i, o = this;
            if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
                for (o.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(o.options.dotsClass), t = 0; t <= o.getDotCount(); t += 1)i.append(e("<li />").append(o.options.customPaging.call(this, o, t)));
                o.$dots = i.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, t.prototype.buildOut = function () {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), t.options.centerMode !== !0 && t.options.swipeToSlide !== !0 || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.options.draggable === !0 && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function () {
            var e, t, i, o, s, n, r, l = this;
            if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
                for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), e = 0; e < s; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.rows; t++) {
                        var d = document.createElement("div");
                        for (i = 0; i < l.options.slidesPerRow; i++) {
                            var c = e * r + (t * l.options.slidesPerRow + i);
                            n.get(c) && d.appendChild(n.get(c))
                        }
                        a.appendChild(d)
                    }
                    o.appendChild(a)
                }
                l.$slider.empty().append(o), l.$slider.children().children().children().css({
                    width: 100 / l.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function (t, i) {
            var o, s, n, r = this, l = !1, a = r.$slider.width(), d = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? n = d : "slider" === r.respondTo ? n = a : "min" === r.respondTo && (n = Math.min(d, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                s = null;
                for (o in r.breakpoints)r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, t === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(t), l = s), t || l === !1 || r.$slider.trigger("breakpoint", [r, l])
            }
        }, t.prototype.changeSlide = function (t, i) {
            var o, s, n, r = this, l = e(t.currentTarget);
            switch (l.is("a") && t.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
                case"previous":
                    s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, i);
                    break;
                case"next":
                    s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, i);
                    break;
                case"index":
                    var a = 0 === t.data.index ? 0 : t.data.index || l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(a), !1, i), l.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function (e) {
            var t, i, o = this;
            if (t = o.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var s in t) {
                if (e < t[s]) {
                    e = i;
                    break
                }
                i = t[s]
            }
            return e
        }, t.prototype.cleanUpEvents = function () {
            var t = this;
            t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function () {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function () {
            var e, t = this;
            t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function (e) {
            var t = this;
            t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function (t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                e(this).attr("style", e(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function (e) {
            var t = this, i = {};
            i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function (e, t) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(e).css({zIndex: i.options.zIndex}), i.$slides.eq(e).animate({opacity: 1}, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                    opacity: 1,
                    zIndex: i.options.zIndex
                }), t && setTimeout(function () {
                    i.disableTransition(e), t.call()
                }, i.options.speed))
        }, t.prototype.fadeSlideOut = function (e) {
            var t = this;
            t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function () {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
                var o = e(this);
                setTimeout(function () {
                    t.options.pauseOnFocus && (t.focussed = o.is(":focus"), t.autoPlay())
                }, 0)
            })
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
            var e = this;
            return e.currentSlide
        }, t.prototype.getDotCount = function () {
            var e = this, t = 0, i = 0, o = 0;
            if (e.options.infinite === !0)for (; t < e.slideCount;)++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else if (e.options.centerMode === !0) o = e.slideCount; else if (e.options.asNavFor)for (; t < e.slideCount;)++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow; else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return o - 1
        }, t.prototype.getLeft = function (e) {
            var t, i, o, s = this, n = 0;
            return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, n = i * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll !== 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, n = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, n = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, n = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, n = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = s.options.vertical === !1 ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + n, s.options.variableWidth === !0 && (o = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = s.options.rtl === !0 ? o[0] ? (s.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, s.options.centerMode === !0 && (o = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = s.options.rtl === !0 ? o[0] ? (s.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, t += (s.$list.width() - o.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
            var t = this;
            return t.options[e]
        }, t.prototype.getNavigableIndexes = function () {
            var e, t = this, i = 0, o = 0, s = [];
            for (t.options.infinite === !1 ? e = t.slideCount : (i = t.options.slidesToScroll * -1, o = t.options.slidesToScroll * -1, e = 2 * t.slideCount); i < e;)s.push(i), i = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return s
        }, t.prototype.getSlick = function () {
            return this
        }, t.prototype.getSlideCount = function () {
            var t, i, o, s = this;
            return o = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function (t, n) {
                    if (n.offsetLeft - o + e(n).outerWidth() / 2 > s.swipeLeft * -1)return i = n, !1
                }), t = Math.abs(e(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
            var i = this;
            i.changeSlide({data: {message: "index", index: parseInt(e)}}, t)
        }, t.prototype.init = function (t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, t.prototype.initADA = function () {
            var t = this;
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({tabindex: "-1"}), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
                e(this).attr("role", "option");
                var o = t.options.centerMode ? i : Math.floor(i / t.options.slidesToShow);
                t.options.dots === !0 && e(this).attr("aria-describedby", "slick-slide" + t.instanceUid + o)
            }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (i) {
                e(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + t.instanceUid + i,
                    id: "slick-slide" + t.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
        }, t.prototype.initArrowEvents = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, e.changeSlide))
        }, t.prototype.initDotEvents = function () {
            var t = this;
            t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function () {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function () {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.initUI = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function (e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({data: {message: t.options.rtl === !0 ? "next" : "previous"}}) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({data: {message: t.options.rtl === !0 ? "previous" : "next"}}))
        }, t.prototype.lazyLoad = function () {
            function t(t) {
                e("img[data-lazy]", t).each(function () {
                    var t = e(this), i = e(this).attr("data-lazy"), o = document.createElement("img");
                    o.onload = function () {
                        t.animate({opacity: 0}, 100, function () {
                            t.attr("src", i).animate({opacity: 1}, 200, function () {
                                t.removeAttr("data-lazy").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, t, i])
                        })
                    }, o.onerror = function () {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
                    }, o.src = i
                })
            }

            var i, o, s, n, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), i = r.$slider.find(".slick-slide").slice(s, n), t(i), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), t(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), t(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), t(o))
        }, t.prototype.loadSlider = function () {
            var e = this;
            e.setPosition(), e.$slideTrack.css({opacity: 1}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function () {
            var e = this;
            e.changeSlide({data: {message: "next"}})
        }, t.prototype.orientationChange = function () {
            var e = this;
            e.checkResponsive(), e.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function () {
            var e = this;
            e.autoPlayClear(), e.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function () {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), t.options.accessibility === !0 && t.initADA())
        }, t.prototype.prev = t.prototype.slickPrev = function () {
            var e = this;
            e.changeSlide({data: {message: "previous"}})
        }, t.prototype.preventDefault = function (e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function (t) {
            t = t || 1;
            var i, o, s, n = this, r = e("img[data-lazy]", n.$slider);
            r.length ? (i = r.first(), o = i.attr("data-lazy"), s = document.createElement("img"), s.onload = function () {
                    i.attr("src", o).removeAttr("data-lazy").removeClass("slick-loading"), n.options.adaptiveHeight === !0 && n.setPosition(), n.$slider.trigger("lazyLoaded", [n, i, o]), n.progressiveLazyLoad()
                }, s.onerror = function () {
                    t < 3 ? setTimeout(function () {
                            n.progressiveLazyLoad(t + 1)
                        }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, i, o]), n.progressiveLazyLoad())
                }, s.src = o) : n.$slider.trigger("allImagesLoaded", [n])
        }, t.prototype.refresh = function (t) {
            var i, o, s = this;
            o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), e.extend(s, s.initials, {currentSlide: i}), s.init(), t || s.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function () {
            var t, i, o, s = this, n = s.options.responsive || null;
            if ("array" === e.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (t in n)if (o = s.breakpoints.length - 1, i = n[t].breakpoint, n.hasOwnProperty(t)) {
                    for (; o >= 0;)s.breakpoints[o] && s.breakpoints[o] === i && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(i), s.breakpointSettings[i] = n[t].settings
                }
                s.breakpoints.sort(function (e, t) {
                    return s.options.mobileFirst ? e - t : t - e
                })
            }
        }, t.prototype.reinit = function () {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function () {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }, 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, i) {
            var o = this;
            return "boolean" == typeof e ? (t = e, e = t === !0 ? 0 : o.slideCount - 1) : e = t === !0 ? --e : e, !(o.slideCount < 1 || e < 0 || e > o.slideCount - 1) && (o.unload(), i === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
        }, t.prototype.setCSS = function (e) {
            var t, i, o = this, s = {};
            o.options.rtl === !0 && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", s[o.positionProp] = e, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + t + ", " + i + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + t + ", " + i + ", 0px)", o.$slideTrack.css(s)))
        }, t.prototype.setDimensions = function () {
            var e = this;
            e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({padding: "0px " + e.options.centerPadding}) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({padding: e.options.centerPadding + " 0px"})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function () {
            var t, i = this;
            i.$slides.each(function (o, s) {
                t = i.slideWidth * o * -1, i.options.rtl === !0 ? e(s).css({
                        position: "relative",
                        right: t,
                        top: 0,
                        zIndex: i.options.zIndex - 2,
                        opacity: 0
                    }) : e(s).css({position: "relative", left: t, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
            }), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
        }, t.prototype.setHeight = function () {
            var e = this;
            if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function () {
            var t, i, o, s, n, r = this, l = !1;
            if ("object" === e.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s; else if ("multiple" === n) e.each(o, function (e, t) {
                r.options[e] = t
            }); else if ("responsive" === n)for (i in s)if ("array" !== e.type(r.options.responsive)) r.options.responsive = [s[i]]; else {
                for (t = r.options.responsive.length - 1; t >= 0;)r.options.responsive[t].breakpoint === s[i].breakpoint && r.options.responsive.splice(t, 1), t--;
                r.options.responsive.push(s[i])
            }
            l && (r.unload(), r.reinit())
        }, t.prototype.setPosition = function () {
            var e = this;
            e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function () {
            var e = this, t = document.body.style;
            e.positionProp = e.options.vertical === !0 ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
        }, t.prototype.setSlideClasses = function (e) {
            var t, i, o, s, n = this;
            i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), n.options.centerMode === !0 ? (t = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (e >= t && e <= n.slideCount - 1 - t ? n.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + e, i.slice(o - t + 1, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? i.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === n.options.lazyLoad && n.lazyLoad()
        }, t.prototype.setupInfinite = function () {
            var t, i, o, s = this;
            if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, t = s.slideCount; t > s.slideCount - o; t -= 1)i = t - 1, e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < o; t += 1)i = t, e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    e(this).attr("id", "")
                })
            }
        }, t.prototype.interrupt = function (e) {
            var t = this;
            e || t.autoPlay(), t.interrupted = e
        }, t.prototype.selectHandler = function (t) {
            var i = this, o = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"), s = parseInt(o.attr("data-slick-index"));
            return s || (s = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(s), void i.asNavFor(s)) : void i.slideHandler(s)
        }, t.prototype.slideHandler = function (e, t, i) {
            var o, s, n, r, l, a = null, d = this;
            if (t = t || !1, (d.animating !== !0 || d.options.waitForAnimate !== !0) && !(d.options.fade === !0 && d.currentSlide === e || d.slideCount <= d.options.slidesToShow))return t === !1 && d.asNavFor(e), o = e, a = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (o = d.currentSlide, i !== !0 ? d.animateSlide(r, function () {
                        d.postSlide(o)
                    }) : d.postSlide(o))) : d.options.infinite === !1 && d.options.centerMode === !0 && (e < 0 || e > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (o = d.currentSlide, i !== !0 ? d.animateSlide(r, function () {
                            d.postSlide(o)
                        }) : d.postSlide(o))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), s = o < 0 ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), n = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (l = d.getNavTarget(), l = l.slick("getSlick"), l.slideCount <= l.options.slidesToShow && l.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (i !== !0 ? (d.fadeSlideOut(n), d.fadeSlide(s, function () {
                                d.postSlide(s)
                            })) : d.postSlide(s), void d.animateHeight()) : void(i !== !0 ? d.animateSlide(a, function () {
                                d.postSlide(s)
                            }) : d.postSlide(s)))
        }, t.prototype.startLoad = function () {
            var e = this;
            e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function () {
            var e, t, i, o, s = this;
            return e = s.touchObject.startX - s.touchObject.curX, t = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(t, e), o = Math.round(180 * i / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function (e) {
            var t, i, o = this;
            if (o.dragging = !1, o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX)return !1;
            if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                switch (i = o.swipeDirection()) {
                    case"left":
                    case"down":
                        t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                        break;
                    case"right":
                    case"up":
                        t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
                }
                "vertical" != i && (o.slideHandler(t), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
        }, t.prototype.swipeHandler = function (e) {
            var t = this;
            if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && e.type.indexOf("mouse") !== -1))switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case"start":
                    t.swipeStart(e);
                    break;
                case"move":
                    t.swipeMove(e);
                    break;
                case"end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function (e) {
            var t, i, o, s, n, r = this;
            return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!r.dragging || n && 1 !== n.length) && (t = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== e.originalEvent && r.touchObject.swipeLength > 4 && e.preventDefault(), s = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), o = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (o = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = t + o * s : r.swipeLeft = t + o * (r.$list.height() / r.listWidth) * s, r.options.verticalSwiping === !0 && (r.swipeLeft = t + o * s), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, t.prototype.swipeStart = function (e) {
            var t, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function () {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function (e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function () {
            var e, t = this;
            e = Math.floor(t.options.slidesToShow / 2), t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function () {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, t.prototype.visibility = function () {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function () {
            var e, i, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
            for (e = 0; e < r; e++)if ("object" == typeof s || "undefined" == typeof s ? o[e].slick = new t(o[e], s) : i = o[e].slick[s].apply(o[e].slick, n), "undefined" != typeof i)return i;
            return o
        }
    })
}, function (e, t) {
    e.exports = window.$
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        var t = this;
        t.getSlideCount = function () {
            return e.carouselSelector[0].querySelectorAll(".slick-slide:not(.slick-cloned)").length
        }, t.getCarouselElement = function () {
            return e.carouselSelector
        }
    }, e.exports.$inject = ["$scope"]
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t, o) {
        return {
            restrict: "A", scope: {}, link: function (e) {
                if (o.studentSurveys = o.studentSurveys[0], o.studentSurveys) {
                    var s;
                    o.studentSurveys.fields = Object.keys(o.studentSurveys.fields).map(function (e) {
                        return s = o.studentSurveys.fields[e], s.id = e, s
                    })
                }
                e.showToast = function () {
                    window && window.dataLayer && window.dataLayer.push({
                        eCat: "User",
                        eAct: "surveyToast",
                        eLab: "showSurveyToast",
                        event: "GAevent"
                    }), t.show({
                        hideDelay: 0,
                        position: "bottom right",
                        controller: "mygSurveyToastController",
                        controllerAs: "ToastController",
                        template: i(31)
                    })
                }, o.studentSurveys && e.showToast()
            }
        }
    }, e.exports.$inject = ["$mdDialog", "$mdToast", "$window"]
}, function (e, t) {
    e.exports = '<md-toast class=survey__toast ng-cloak><span class="md-toast-text example" flex>{{studentSurveyToast.survey_toast_copy}}</span><md-button ng-click=ToastController.closeToast() class=eszett-button aria-label={{studentSurveyToast.survey_toast_dismiss_label}} ng-bind-html="studentSurveyToast.survey_toast_dismiss_label | unsafe"></md-button><md-button class="md-highlight eszett-button" ng-click=ToastController.openTakeTheSurvey($event) aria-label={{studentSurveyToast.survey_toast_open_label}} ng-bind-html="studentSurveyToast.survey_toast_open_label | unsafe"></md-button></md-toast>'
}, function (e, t, i) {
    "use strict";
    e.exports = function (e, t, o, s, n) {
        var r = this;
        e.studentSurveyToast = window.studentSurveyToast, this.submitStatusClass = !1, this.openTakeTheSurvey = function () {
            var e = o.document.getElementsByTagName("html")[0], n = e.classList;
            n.add("js-sidenav-open"), t.hide(), s.show({
                controller: "mygSurveyDialogController",
                controllerAs: "DialogController",
                template: i(33),
                escapeToClose: !1,
                disableParentScroll: !1,
                clickOutsideToClose: !1
            })
        }, this.closeToast = function () {
            t.hide();
            var i;
            n.dismissForm({id: window.studentSurveys.id}).then(function () {
                r.submitStatusClass = !0, s.cancel();
                var e = o.document.getElementsByTagName("html")[0], t = e.classList;
                t.remove("js-sidenav-open")
            }, function (t) {
                r.submitStatusClass = !1, console.log("error: ", t), i = e.$new(), i.resubmit = function (e) {
                    r.submit(e)
                }
            })
        }
    }, e.exports.$inject = ["$scope", "$mdToast", "$window", "$mdDialog", "SurveyApiService"]
}, function (e, t) {
    e.exports = '<md-dialog class="survey-modal js-survey-modal"><md-dialog-content class="survey-modal__content answer-list--modal-content"><md-tabs md-dynamic-height md-selected=selectedIndex><md-tab label="{{ studentSurveys.welcome_header }}"><img ng-if="studentSurveys.bucket_welcome_image_url !== \'\'" ng-src="{{ studentSurveys.bucket_welcome_image_url }}" class=survey-modal__start__image alt=""><div class=survey-modal__start><h1 class=survey-modal__start__title>{{ studentSurveys.welcome_header }}</h1><p>{{ studentSurveys.welcome_copy }}</p><div class=survey-modal__buttons-bar><md-button class="md-button md-accent md-default-theme survey-modal__survey-no eszett-button" ng-click=DialogController.noSurvey() aria-label="{{ studentSurveys.welcome_dismiss_label }}" ng-bind-html="studentSurveys.welcome_dismiss_label | unsafe"></md-button><md-button class="md-button md-primary md-raised md-default-theme survey-modal__survey-cta eszett-button" ng-click=DialogController.takeSurvey() aria-label="{{ studentSurveys.welcome_progress_label }}" ng-bind-html="studentSurveys.welcome_progress_label | unsafe"></md-button></div></div></md-tab><md-tab label=Survey><md-progress-linear md-mode=determinate value={{surveyProgress}}></md-progress-linear><button class=action-close ng-click=DialogController.submitSurvey(false) aria-label="{{ studentSurveys.progress_close_aria }}"><i class="material-icons icon--close"></i></button><div class=survey-dialog__carousel-container><myg-slick-carousel class="survey-dialog__carousel js-survey-dialog-carousel"><form id={{question.id}} name={{question.id}} novalidate ng-submit=DialogController.advanceSurvey(FormController) class="survey-dialog__carousel-container js-form-question" ng-repeat="question in studentSurveys.fields | orderBy:\'order\'"><div ng-if="question.widget == \'Boolean\'"><p class=survey-dialog__carousel__text>{{ studentSurveys.progress_copy | sprintf: ($index + 1):studentSurveys.fields.length}}</p><h1 class=survey-dialog__carousel__title>{{question.label}}</h1><md-input-container class=survey-dialog__carousel__question><md-checkbox aria-label={{question.help_text}} ng-model=question.value id=checkbox name=checkbox ng-required={{question.required}} required><span>{{question.help_text}}</span></md-checkbox><div ng-messages=currentFormController.checkbox.$error><div ng-message=required>{{question.error_messages.required}}</div></div></md-input-container></div><div ng-if="question.widget == \'MultipleChoice\' || question.widget == \'RadioSelect\' "><p class=survey-dialog__carousel__text>{{ studentSurveys.progress_copy | sprintf: ($index + 1):studentSurveys.fields.length}}</p><h1 class=survey-dialog__carousel__title>{{question.label}}</h1><md-input-container class=survey-dialog__carousel__question><md-radio-group ng-model=question.value id=radio name=radio ng-required={{question.required}} required><md-radio-button ng-repeat="choice in question.choices" value={{choice[0]}} aria-label={{choice[1]}}><span>{{choice[1]}}</span></md-radio-button></md-radio-group><div ng-messages=currentFormController.radio.$error><div ng-message=required>{{question.error_messages.required}}</div></div></md-input-container></div><div ng-if="question.widget == \'Textarea\'"><p class=survey-dialog__carousel__text>{{ studentSurveys.progress_copy | sprintf: ($index + 1):studentSurveys.fields.length}}</p><h1 class=survey-dialog__carousel__title>{{question.label}}</h1><md-input-container class=survey-dialog__carousel__question><label>{{ studentSurveyToast.survey_textarea_placeholder }}</label><textarea id=textarea name=textarea md-maxlength=400 ng-required={{question.required}} required ng-model=question.value max-rows=4 md-select-on-focus></textarea><div ng-messages=currentFormController.textarea.$error><div ng-message=required>{{question.error_messages.required}}</div></div></md-input-container></div></form></myg-slick-carousel></div><div class=survey-modal__footer><md-button ng-click=DialogController.rewindSurvey() class="footer__button-close eszett-button" aria-label="{{ studentSurveys.previous_label }}" ng-bind-html="studentSurveys.previous_label | unsafe"></md-button><md-button ng-click=DialogController.advanceSurvey() type=submit ng-disabled=currentFormController.$invalid data-test={{currentFormController.$name}} class="footer__button-next eszett-button" aria-label="{{ studentSurveys.next_label }}" ng-bind-html="studentSurveys.next_label | unsafe"></md-button></div></md-tab><md-tab label="Thank you"><img ng-if="studentSurveys.bucket_finish_image_url !== \'\'" ng-src="{{ studentSurveys.bucket_finish_image_url }}" class=survey-modal__end__image alt=""><div class=survey-modal__end><h1 class=survey-modal__end__title>{{ studentSurveys.finish_header }}</h1><p>{{ studentSurveys.finish_copy }}</p><div class=survey-modal__buttons-bar><md-button class="md-button md-primary md-raised md-default-theme survey-modal__survey-cta" aria-label="{{ studentSurveys.finish_dismiss_label }}" ng-click=DialogController.submitSurvey(true) ng-bind-html="studentSurveys.finish_dismiss_label | unsafe"></md-button></div></div></md-tab></md-tabs></md-dialog-content></md-dialog>'
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    i(27), e.exports = function (e, t, i, s, n, r) {
        var l = this;
        this.submitStatusClass = !1, e.studentSurveys = t.studentSurveys, e.studentSurveyToast = t.studentSurveyToast, e.selectedIndex = 0, e.surveyProgress = 0, e.currentForm = "", t.ontouchmove = function (e) {
            var t = !0;
            e.target.classList && e.target.classList.contains("md-dialog-container") && (t = !1), t || e.preventDefault()
        }, l.noSurvey = function () {
            t.ontouchmove = null, s.cancel();
            var i = t.document.getElementsByTagName("html")[0], o = i.classList;
            o.remove("js-sidenav-open");
            var n;
            r.dismissForm({id: e.studentSurveys.id}).then(function () {
                l.submitStatusClass = !0, l.submitting = !1, s.cancel();
                var e = t.document.getElementsByTagName("html")[0], i = e.classList;
                i.remove("js-sidenav-open")
            }, function (t) {
                console.log("error: ", t), l.submitStatusClass = !1, l.submitting = !1, n = e.$new(), n.resubmit = function (e) {
                    l.submit(e)
                }
            })
        }, l.takeSurvey = function () {
            e.selectedIndex = 1;
            var s = i[0].querySelector(".js-survey-dialog-carousel"), n = o.element(s).controller("mygSlickCarousel");
            l.slickCarousel = n.getCarouselElement(), l.slickCarousel.slick("unslick");
            var r = {
                dots: !1,
                draggable: !1,
                arrows: !1,
                infinite: !1,
                swipeToSlide: !1,
                swipe: !1,
                accessibility: !1,
                touchMove: !1,
                adaptiveHeight: !0
            };
            if (s) {
                l.slickCarousel = t.$(s).slick(r), l.slickCarousel.on("afterChange", l.onSurveySlideChanged), e.currentFormName = s.querySelectorAll(".slick-slide")[0].getAttribute("name"), l.onSurveySlideChanged(null, e.currentFormName, 0);
                var a = s.querySelectorAll(".slick-slide")[0];
                e.currentFormController = o.element(a).scope()[e.currentFormName]
            }
        }, l.rewindSurvey = function () {
            var t = l.slickCarousel.slick("slickCurrentSlide");
            t <= 0 ? e.selectedIndex = 0 : l.slickCarousel.slick("slickPrev")
        }, l.advanceSurvey = function () {
            var t = i[0].querySelector(".js-survey-dialog-carousel"), s = o.element(t).controller("mygSlickCarousel"), n = s.getSlideCount(), r = l.slickCarousel.slick("slickCurrentSlide");
            e.surveyProgress = (r + 1) / n * 100, e.currentFormName = t.querySelectorAll(".slick-slide")[r].getAttribute("name");
            var a = t.querySelectorAll(".slick-slide")[r], d = o.element(a).scope()[e.currentFormName];
            d.$valid === !0 && (r === n - 1 ? e.selectedIndex = 2 : (l.slickCarousel.slick("slickNext"), e.currentFormController = d))
        }, l.onSurveySlideChanged = function (t, s, r) {
            var a = i[0].querySelector(".js-survey-dialog-carousel"), d = o.element(a).controller("mygSlickCarousel"), c = d.getSlideCount(), u = l.slickCarousel.slick("slickCurrentSlide");
            e.surveyProgress = u / c * 100, e.currentFormName = a.querySelectorAll(".slick-slide")[r].getAttribute("name");
            var p = a.querySelectorAll(".slick-slide")[r];
            n(function () {
                e.currentFormController = o.element(p).scope()[e.currentFormName]
            }, 0)
        }, l.submitSurvey = function (i) {
            t.ontouchmove = null, l.submitting = !0, e.studentSurveys.completed = i, s.cancel();
            var o = t.document.getElementsByTagName("html")[0], n = o.classList;
            n.remove("js-sidenav-open");
            var a;
            r.submitForm(e.studentSurveys).then(function () {
                l.submitStatusClass = !0, l.submitting = !1
            }, function (t) {
                console.log("error: ", t), l.submitStatusClass = !1, l.submitting = !1, a = e.$new(), a.resubmit = function (e) {
                    l.submit(e)
                }
            })
        }
    }, e.exports.$inject = ["$scope", "$window", "$document", "$mdDialog", "$timeout", "SurveyApiService"]
}, function (e, t) {
    "use strict";
    var i = function (e, t) {
        this.$http = e, this.$q = t
    };
    i.$inject = ["$http", "$q"], i.prototype.submitForm = function (e) {
        var t = this.$q.defer();
        return this.$http.post("/api/formbox_survey", e).success(function (e) {
            "object" == typeof e ? t.resolve(e) : t.reject({})
        }).error(t.reject), t.promise
    }, i.prototype.dismissForm = function (e) {
        var t = this.$q.defer();
        return this.$http.post("/api/formbox_survey/dismiss", e).success(function (e) {
            "object" == typeof e ? t.resolve(e) : t.reject({})
        }).error(t.reject), t.promise
    }, e.exports = i
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MygBroadcast", [i(3).name]), e.exports.controller("mygBroadcastController", i(37)), e.exports.service("mygBroadcastApiService", i(38))
}, function (e, t) {
    "use strict";
    e.exports = function (e, t) {
        e.broadcastShowed = function () {
            window && window.dataLayer && window.dataLayer.push({
                eCat: "User",
                eAct: "broadcastToast",
                eLab: "showBroadcastToast",
                event: "GAevent"
            })
        }, e.broadcastClicked = function () {
            window && window.dataLayer && window.dataLayer.push({
                eCat: "User",
                eAct: "broadcastToast",
                eLab: "clickBroadcastToast",
                event: "GAevent"
            }), t.hide()
        }
    }, e.exports.$inject = ["$scope", "$mdToast"]
}, function (e, t) {
    "use strict";
    var i = function (e, t) {
        this.$http = e, this.$q = t
    };
    i.$inject = ["$http", "$q"], i.prototype.dismiss = function (e) {
        var t = this.$q.defer();
        return this.$http.post("/api/broadcasts/dismiss", e).success(function (e) {
            "object" == typeof e ? t.resolve(e) : t.reject({})
        }).error(t.reject), t.promise
    }, e.exports = i
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MygToaster", [i(3).name]), e.exports.directive("mygToaster", i(40))
}, function (e, t, i) {
    "use strict";
    var o = i(1), s = {
        hideDelay: "=?mygHideDelay",
        position: "@?mygPosition",
        templateUrl: "@?mygTemplateUrl",
        template: "@?mygTemplate",
        autoWrap: "=?mygAutoWrap",
        preserveScope: "=?mygPreserveScope",
        toastClass: "@?mygToastClass",
        controller: "@?mygController",
        locals: "=?mygLocals",
        scope: "=?mygScope",
        bindToController: "=?mygBindToController",
        resolve: "=?mygResolve",
        controllerAs: "@?mygControllerAs",
        parent: "=?mygParent",
        textContent: "@?mygTextContent",
        action: "@?mygAction",
        highlightAction: "=?mygHighlightAction",
        highlightClass: "@?mygHighlightClass",
        capsule: "=?mygCapsule",
        theme: "@?mygTheme",
        onShow: "&?mygOnShow",
        onHide: "&?mygOnHide",
        onRemove: "&?mygOnRemove"
    };
    e.exports = function (e, t, i) {
        return {
            restrict: "AEC",
            scope: o.extend({preset: "@?mygPreset", showDelay: "=?mygShowDelay", onInit: "&?mygOnInit"}, s),
            link: function (n) {
                var r = {toaster: n};
                n.$mdToast = e;
                var l = o.isFunction(e[n.preset]) ? e[n.preset]() : {};
                o.forEach(s, function (e, t) {
                    var i = n[t];
                    void 0 !== i && (o.isFunction(l[t]) ? l[t](i) : l[t] = i)
                });
                var a = i.defer();
                n.promise = i.promise, n.show = function () {
                    return e.show(l).then(a.resolve, a.reject)
                }, n.showDelay ? t(n.show, n.showDelay) : n.showDelay !== !1 && n.show(), o.isFunction(n.onInit) && n.onInit(r)
            }
        }
    }, e.exports.$inject = ["$mdToast", "$timeout", "$q"]
}, function (e, t) {
    "use strict";
    e.exports = function () {
        return {
            restrict: "A", link: function (e, t) {
                function i(e) {
                    var t = document.createElement("div"), i = t.style, o = e.charAt(0).toUpperCase() + e.slice(1), s = (e + " " + l.join(o + " ") + o).split(" ");
                    for (var n in s) {
                        var r = s[n];
                        if (void 0 !== i[r])return t = null, !0
                    }
                    return t = null, !1
                }

                var o = "flexwrap", s = "no-", n = "", r = "Webkit Moz O ms", l = r.split(" ");
                n = i("flexWrap") ? o : s + o, t.addClass(n)
            }
        }
    }
}, function (e, t) {
    "use strict";
    e.exports = function () {
        return {
            restrict: "A", link: function (e, t) {
                function i() {
                    var e = " -webkit- -moz- -o- -ms- ".split(" "), t = document.createElement("div");
                    t.style.cssText = e.join("filter: blur(2px);");
                    var i = !!t.style.length && (void 0 === document.documentMode || document.documentMode > 9);
                    return t = null, i
                }

                var o = "cssfilters", s = "no-", n = i() ? o : s + o;
                t.addClass(n)
            }
        }
    }
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        return {
            restrict: "E", scope: {}, link: function () {
                var t = e[0].body.getAttribute("data-registration-screen-resolution");
                window && window.dataLayer && t && window.dataLayer.push({regRes: t, event: "regResPush"})
            }
        }
    }, e.exports.$inject = ["$document"]
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        return {
            restrict: "E",
            scope: {hasUserSuccessfullySignedIn: "@", hasUserSuccessfullyRegistered: "@"},
            link: function (t) {
                "true" === t.hasUserSuccessfullyRegistered && e && e.dataLayer && e.dataLayer.push({
                    eCat: "User",
                    eAct: "registration",
                    eLab: "registrationSuccess",
                    event: "GAevent"
                }), "true" === t.hasUserSuccessfullySignedIn && e && e.dataLayer && e.dataLayer.push({
                    eCat: "User",
                    eAct: "signIn",
                    eLab: "signInSuccess",
                    event: "GAevent"
                })
            }
        }
    }, e.exports.$inject = ["$window"]
}, function (e, t) {
    "use strict";
    e.exports = function (e, t) {
        e.startSymbol("{["), e.endSymbol("]}"), t.definePalette("mygPrimary", t.extendPalette("pink", {
            500: "00BFA5",
            600: "00E8C8"
        })), t.definePalette("mygSecondary", t.extendPalette("blue", {A200: "4054B2"})), t.theme("default").primaryPalette("mygPrimary").accentPalette("mygSecondary"), t.definePalette("mygFab", t.extendPalette("grey", {
            500: "FAFAFA",
            600: "EEEEEE"
        })), t.theme("mygFABs").primaryPalette("mygFab"), "serviceWorker" in navigator && "https:" === window.location.protocol && navigator.serviceWorker.register("/static/js/myg-service-worker.js").then(function (e) {
            console.info("ServiceWorker::registered", e)
        })["catch"](function (e) {
            console.error("ServiceWorker::error", e)
        })
    }, e.exports.$inject = ["$interpolateProvider", "$mdThemingProvider"]
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.trustAsResourceUrl("#" + t)
        }
    }, e.exports.$inject = ["$sce"]
}, function (e, t) {
    "use strict";
    e.exports = function () {
        function e(e, t) {
            return e.replace(/\B(\$(\d+))\b(?![\.,]\d)/gi, function (e, i, o) {
                var s = o - 1;
                return t[s] || ""
            })
        }

        return function () {
            var t = Array.prototype.slice.call(arguments, 0, 1)[0], i = Array.prototype.slice.call(arguments, 1);
            return e(t, i)
        }
    }
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            var i = "<strong>" + t + "</strong>";
            return e.trustAsHtml(i)
        }
    }, e.exports.$inject = ["$sce"]
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        return e.trustAsHtml
    }, e.exports.$inject = ["$sce"]
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        function t(t, i) {
            return t.replace(/\B(\$(\d+))\b(?![\.,]\d)/gi, function (t, o, s) {
                var n = s - 1, r = i[n] || "";
                return "string" == typeof r && "" !== r && (r = e("bold")(r)), r
            })
        }

        return function () {
            var e = Array.prototype.slice.call(arguments, 0, 1)[0], i = Array.prototype.slice.call(arguments, 1);
            return t(e, i)
        }
    }, e.exports.$inject = ["$filter"]
}, , , , , function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MygScrollTo", [i(7).name]), e.exports.directive("mygScrollTo", i(56))
}, function (e, t) {
    "use strict";
    e.exports = function (e, t, i) {
        return {
            restrict: "A",
            scope: {
                targetElementClass: "@mygScrollToTarget",
                scrollDuration: "@?mygScrollToDuration",
                targetOffset: "@?mygScrollToTargetOffset"
            },
            link: function (o, s) {
                var n;
                t(function () {
                    if (n = e.document.getElementsByClassName(o.targetElementClass)[0], !n)return console.info("Unable to initialise scroll-to directive. myg-scroll-to-target not found."), void s.css("display", "none")
                }), s.on("click", function () {
                    n = e.document.getElementsByClassName(o.targetElementClass)[0];
                    var t = (e.scrollY || e.pageYOffset) + n.getBoundingClientRect().top;
                    t -= e.document.getElementsByClassName("js-gbl-header")[0].offsetHeight, t += o.targetOffset ? parseInt(o.targetOffset, 10) : 0, r(t)
                });
                var r = function (t) {
                    var s, r = Date.now(), l = e.scrollY || e.pageYOffset, a = i.easingFunctions.easeInOutCubic, d = o.scrollDuration ? parseInt(o.scrollDuration, 10) : 500, c = function () {
                        var i, u = (Date.now() - r) / d;
                        l < t ? (i = l + t * a(u), i = Math.min(t, i)) : (i = (t - l) * a(u) + l, i = Math.max(t, i)), e.scrollTo(0, i), u >= 1 ? (e.cancelAnimationFrame(s), o.$emit("myg:scroll-to:complete", n, i)) : e.requestAnimationFrame(c)
                    };
                    return s = e.requestAnimationFrame(c)
                }
            }
        }
    }, e.exports.$inject = ["$window", "$timeout", "MygUtilsService"]
}, , , , , , , , function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MygScrolledPastNav", [i(7).name]), e.exports.directive("mygScrolledPastNav", i(65))
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = function (e, t) {
        return {
            restrict: "A",
            scope: {
                targetElementClass: "@mygScrolledPastNavTarget",
                targetToggleClass: "@mygScrolledPastNavClass",
                targetWatchedElementClass: "@mygScrolledPastNavWatchedElement"
            },
            link: function (i, s) {
                var n = e.document.getElementsByClassName(i.targetElementClass), r = o.element(n), l = s[0], a = "js-gbl-header";
                i.targetWatchedElementClass && (a = i.targetWatchedElementClass);
                var d = e.document.getElementsByClassName(a)[0].offsetHeight, c = i.targetToggleClass, u = function () {
                    r.toggleClass(c, Math.round(l.getBoundingClientRect().top) < d)
                };
                e.addEventListener("scroll", t.throttle(u, 100)), u()
            }
        }
    }, e.exports.$inject = ["$window", "MygUtilsService"]
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MygScrolledIntoView", [i(7).name]), e.exports.directive("mygScrolledIntoView", i(108))
}, function (e, t) {
    "use strict";
    e.exports = function (e, t) {
        return {
            restrict: "A",
            scope: {
                entitySelector: "@mygScrolledIntoViewTarget",
                activeClass: "@mygScrolledIntoViewClass",
                ignoreSpace: "@mygScrolledIntoViewIgnore"
            },
            link: function (i, o) {
                function s() {
                    f.yTop = f.getBoundingClientRect().top;
                    var e = c > f.yTop;
                    l(f, e)
                }

                function n() {
                    if (i.ignoreSpace) {
                        var t = e.document.getElementsByClassName(i.ignoreSpace)[0].offsetHeight;
                        u = window.scrollY || (window.pageYOffset || document.body.scrollTop) - (document.body.clientTop || 0) + t
                    }
                }

                function r() {
                    c = Math.round((window.innerHeight || document.documentElement.clientHeight) * d)
                }

                function l(e, t) {
                    if (void 0 === t && (t = !0), e.active !== t) {
                        e.active = t;
                        var o = t ? "add" : "remove";
                        e.classList[o](i.activeClass)
                    }
                }

                function a() {
                    n(), r(), s()
                }

                var d = .5, c = 0, u = 0, p = function () {
                    navigator.userAgent.match("CriOS") || (n(), s())
                }, f = o[0].querySelector("." + i.entitySelector);
                navigator.userAgent.indexOf("CriOS") > -1 ? f.classList.add(i.activeClass) : (n(), r(), s()), e.addEventListener("scroll", t.throttle(p, 100)), e.addEventListener("resize", t.throttle(a, 100)), p()
            }
        }
    }, e.exports.$inject = ["$window", "MygUtilsService"]
}, function (e, t, i) {
    "use strict";
    var o = i(1);
    e.exports = o.module("MygVideoLightboxComponent", [i(2).name]), e.exports.constant("MygVideoLightboxConstants", i(110)), e.exports.directive("mygVideoLightbox", i(111)), e.exports.controller("MygVideoLightboxController", i(112))
}, function (e, t) {
    "use strict";
    e.exports = {videoUrl: "https://www.youtube.com/embed/$1?rel=0&amp;showinfo=0"}
}, function (e, t) {
    "use strict";
    e.exports = function (e) {
        return {
            restrict: "A",
            scope: {videoId: "@mygVideoId", videoTitle: "@?mygVideoTitle"},
            controller: "MygVideoLightboxController",
            controllerAs: "videoController",
            link: function (t, i) {
                var o = function (i) {
                    i.preventDefault(), e.show(t.dialogOptions)
                };
                i.on("click", o), t.$on("$destroy", function () {
                    i.off("click", o)
                })
            }
        }
    }, e.exports.$inject = ["$mdDialog"]
}, function (e, t) {
    "use strict";
    e.exports = function (e, t, i, o) {
        var s = t("sprintf"), n = s(o.videoUrl, e.videoId), r = e.$new(!0);
        r.videoUrl = i.trustAsResourceUrl(n), r.title = e.videoTitle, e.dialogOptions = {
            scope: r,
            clickOutsideToClose: !0,
            preserveScope: !0,
            templateUrl: "video-lightbox"
        }
    }, e.exports.$inject = ["$scope", "$filter", "$sce", "MygVideoLightboxConstants"]
}, function (e, t) {
    "use strict";
    e.exports = function () {
        var e = this;
        e.trackUserGroup = function (e) {
            var t = "gitkit" === e ? "without_dialog" : "with_dialog";
            window && window.dataLayer && window.dataLayer.push({
                testName: "SeoLoginPopverTestMarch16",
                testVariation: t,
                customEvent: "testData"
            })
        }
    }
}]);