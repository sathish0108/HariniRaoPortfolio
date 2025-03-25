(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    9664: function (e, t) {
      var i, s, r, l, a, n, o, c, d, m, h, p, x, u, f, g, w, b, j, v;
      (i = t),
        (m = function () {
          return "undefined" != typeof window;
        }),
        (h = function () {
          return s || (m() && (s = window.gsap) && s.registerPlugin && s);
        }),
        (p = function (e) {
          return "string" == typeof e;
        }),
        (x = function (e) {
          return "function" == typeof e;
        }),
        (u = function (e, t) {
          var i = "x" === t ? "Width" : "Height",
            s = "scroll" + i,
            r = "client" + i;
          return e === l || e === a || e === n
            ? Math.max(a[s], n[s]) - (l["inner" + i] || a[r] || n[r])
            : e[s] - e["offset" + i];
        }),
        (f = function (e, t) {
          var i = "scroll" + ("x" === t ? "Left" : "Top");
          return (
            e === l &&
              (null != e.pageXOffset
                ? (i = "page" + t.toUpperCase() + "Offset")
                : (e = null != a[i] ? a : n)),
            function () {
              return e[i];
            }
          );
        }),
        (g = function (e, t, i, s) {
          if ((x(e) && (e = e(t, i, s)), "object" != typeof e))
            return p(e) && "max" !== e && "=" !== e.charAt(1)
              ? { x: e, y: e }
              : { y: e };
          if (e.nodeType) return { y: e, x: e };
          var r,
            l = {};
          for (r in e)
            l[r] = "onAutoKill" !== r && x(e[r]) ? e[r](t, i, s) : e[r];
          return l;
        }),
        (w = function (e, t) {
          if (!(e = o(e)[0]) || !e.getBoundingClientRect)
            return (
              console.warn("scrollTo target doesn't exist. Using 0") || {
                x: 0,
                y: 0,
              }
            );
          var i = e.getBoundingClientRect(),
            s = !t || t === l || t === n,
            r = s
              ? {
                  top:
                    a.clientTop -
                    (l.pageYOffset || a.scrollTop || n.scrollTop || 0),
                  left:
                    a.clientLeft -
                    (l.pageXOffset || a.scrollLeft || n.scrollLeft || 0),
                }
              : t.getBoundingClientRect(),
            c = { x: i.left - r.left, y: i.top - r.top };
          return !s && t && ((c.x += f(t, "x")()), (c.y += f(t, "y")())), c;
        }),
        (b = function (e, t, i, s, r) {
          return isNaN(e) || "object" == typeof e
            ? p(e) && "=" === e.charAt(1)
              ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + s - r
              : "max" === e
              ? u(t, i) - r
              : Math.min(u(t, i), w(e, t)[i] - r)
            : parseFloat(e) - r;
        }),
        (j = function () {
          (s = h()),
            m() &&
              s &&
              "undefined" != typeof document &&
              document.body &&
              ((l = window),
              (n = document.body),
              (a = document.documentElement),
              (o = s.utils.toArray),
              s.config({ autoKillThreshold: 7 }),
              (c = s.config()),
              (r = 1));
        }),
        ((v = {
          version: "3.11.5",
          name: "scrollTo",
          rawVars: 1,
          register: function (e) {
            (s = e), j();
          },
          init: function (e, t, i, a, n) {
            r || j();
            var o = this,
              c = s.getProperty(e, "scrollSnapType");
            (o.isWin = e === l),
              (o.target = e),
              (o.tween = i),
              (t = g(t, a, e, n)),
              (o.vars = t),
              (o.autoKill = !!t.autoKill),
              (o.getX = f(e, "x")),
              (o.getY = f(e, "y")),
              (o.x = o.xPrev = o.getX()),
              (o.y = o.yPrev = o.getY()),
              d || (d = s.core.globals().ScrollTrigger),
              "smooth" === s.getProperty(e, "scrollBehavior") &&
                s.set(e, { scrollBehavior: "auto" }),
              c &&
                "none" !== c &&
                ((o.snap = 1),
                (o.snapInline = e.style.scrollSnapType),
                (e.style.scrollSnapType = "none")),
              null != t.x
                ? (o.add(
                    o,
                    "x",
                    o.x,
                    b(t.x, e, "x", o.x, t.offsetX || 0),
                    a,
                    n
                  ),
                  o._props.push("scrollTo_x"))
                : (o.skipX = 1),
              null != t.y
                ? (o.add(
                    o,
                    "y",
                    o.y,
                    b(t.y, e, "y", o.y, t.offsetY || 0),
                    a,
                    n
                  ),
                  o._props.push("scrollTo_y"))
                : (o.skipY = 1);
          },
          render: function (e, t) {
            for (
              var i,
                s,
                r,
                a,
                n,
                o = t._pt,
                m = t.target,
                h = t.tween,
                p = t.autoKill,
                x = t.xPrev,
                f = t.yPrev,
                g = t.isWin,
                w = t.snap,
                b = t.snapInline;
              o;

            )
              o.r(e, o.d), (o = o._next);
            (i = g || !t.skipX ? t.getX() : x),
              (r = (s = g || !t.skipY ? t.getY() : f) - f),
              (a = i - x),
              (n = c.autoKillThreshold),
              t.x < 0 && (t.x = 0),
              t.y < 0 && (t.y = 0),
              p &&
                (!t.skipX &&
                  (a > n || a < -n) &&
                  i < u(m, "x") &&
                  (t.skipX = 1),
                !t.skipY && (r > n || r < -n) && s < u(m, "y") && (t.skipY = 1),
                t.skipX &&
                  t.skipY &&
                  (h.kill(),
                  t.vars.onAutoKill &&
                    t.vars.onAutoKill.apply(h, t.vars.onAutoKillParams || []))),
              g
                ? l.scrollTo(t.skipX ? i : t.x, t.skipY ? s : t.y)
                : (t.skipY || (m.scrollTop = t.y),
                  t.skipX || (m.scrollLeft = t.x)),
              w &&
                (1 === e || 0 === e) &&
                ((s = m.scrollTop),
                (i = m.scrollLeft),
                b
                  ? (m.style.scrollSnapType = b)
                  : m.style.removeProperty("scroll-snap-type"),
                (m.scrollTop = s + 1),
                (m.scrollLeft = i + 1),
                (m.scrollTop = s),
                (m.scrollLeft = i)),
              (t.xPrev = t.x),
              (t.yPrev = t.y),
              d && d.update();
          },
          kill: function (e) {
            var t = "scrollTo" === e;
            (t || "scrollTo_x" === e) && (this.skipX = 1),
              (t || "scrollTo_y" === e) && (this.skipY = 1);
          },
        }).max = u),
        (v.getOffset = w),
        (v.buildGetter = f),
        h() && s.registerPlugin(v),
        (i.ScrollToPlugin = v),
        (i.default = v),
        Object.defineProperty(i, "__esModule", { value: !0 });
    },
    5728: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(8195);
        },
      ]);
    },
    8195: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return v;
          },
        });
      var s = i(5893),
        r = i(7294),
        l = i(6038),
        a = i(6546),
        n = i.n(a),
        o = i(9664),
        c = i(2757),
        d = i(1664),
        m = i.n(d),
        h = i(1915),
        p = i(9762),
        x = i(4924),
        u = i(9842),
        f = i.n(u);
      u.Common.setDecomp(i(1513));
      class g {
        start() {
          this.addEvents(), this.run();
        }
        run() {
          u.Render.run(this.render), u.Runner.run(this.runner, this.engine);
        }
        addObjects() {
          let e = u.Common.choose(["#111"]);
          function t(e, t) {
            return (
              (e = Math.ceil(e)),
              Math.floor(Math.random() * ((t = Math.floor(t)) - e + 1)) + e
            );
          }
          let i = [50, 15];
          this.loadSvg(["/img/next-arrow.svg"]).then((s) => {
            s.forEach((s, r) => {
              let l = Array.prototype.slice
                .call(s.querySelectorAll("path"))
                .map((e) => {
                  let t = u.Svg.pathToVertices(e, 30),
                    s = (0.06 * this.config.width) / i[r];
                  return u.Vertices.scale(t, s, s);
                });
              for (let a = 0; a < 70; a++) {
                let n = t(80, this.config.width - 80),
                  o = t(-400, -80) * (a % 10),
                  c = u.Bodies.fromVertices(
                    n,
                    o,
                    l,
                    { render: { fillStyle: e, strokeStyle: e, lineWidth: 1 } },
                    !0
                  );
                f().Body.rotate(c, t(0, 2 * Math.PI)),
                  this.timeouts.push(
                    setTimeout(() => {
                      u.Composite.add(this.engine.world, c);
                    }, 25 * a)
                  );
              }
            });
          });
          let s = { isStatic: !0, render: { opacity: 0 } };
          (this.walls = [
            u.Bodies.rectangle(this.config.width / 2, -750, 3e3, 500, s),
            u.Bodies.rectangle(
              this.config.width + 250,
              this.config.height / 2,
              500,
              4 * this.config.height,
              s
            ),
            u.Bodies.rectangle(
              this.config.width / 2,
              this.config.height + 250,
              3e3,
              500,
              s
            ),
            u.Bodies.rectangle(
              -250,
              this.config.height / 2,
              500,
              4 * this.config.height,
              s
            ),
          ]),
            u.Composite.add(this.engine.world, this.walls),
            this.addMouse();
        }
        loadSvg(e) {
          return Promise.all(
            e.map((e) =>
              fetch(e)
                .then(function (e) {
                  return e.text();
                })
                .then(function (e) {
                  return new window.DOMParser().parseFromString(
                    e,
                    "image/svg+xml"
                  );
                })
            )
          );
        }
        addMouse() {
          let e = f().Mouse.create(this.render.canvas),
            t = f().MouseConstraint.create(this.engine, {
              mouse: e,
              constraint: { stiffness: 0.9, render: { visible: !1 } },
            });
          u.Composite.add(this.engine.world, t);
        }
        onResize() {
          console.log("resize"),
            (this.config.width = document.body.clientWidth),
            (this.config.height = document.body.clientHeight),
            (this.render.canvas.width = this.config.width),
            (this.render.canvas.height = this.config.height),
            this.walls.length &&
              (f().Body.setPosition(
                this.walls[0],
                f().Vector.create(this.config.width / 2, -750)
              ),
              f().Body.setPosition(
                this.walls[1],
                f().Vector.create(
                  this.config.width + 250,
                  this.config.height / 2
                )
              ),
              f().Body.setPosition(
                this.walls[2],
                f().Vector.create(
                  this.config.width / 2,
                  this.config.height + 250
                )
              ),
              f().Body.setPosition(
                this.walls[3],
                f().Vector.create(-250, this.config.height / 2)
              ));
        }
        events() {
          this.resize = this.onResize.bind(this);
        }
        addEvents() {
          this.events(), window.addEventListener("resize", this.resize);
        }
        destroy() {
          console.log("destroy"),
            window.removeEventListener("resize", this.resize),
            this.timeouts.forEach((e) => clearTimeout(e)),
            f().World.clear(this.engine.world, !1),
            f().Render.stop(this.render),
            f().Engine.clear(this.engine),
            (this.el.innerHTML = "");
        }
        constructor(e) {
          (0, x.Z)(this, "engine", null),
            (0, x.Z)(this, "render", null),
            (0, x.Z)(this, "runner", u.Runner.create()),
            (0, x.Z)(this, "el", null),
            (0, x.Z)(this, "config", { width: 800, height: 600 }),
            (0, x.Z)(this, "resize", null),
            (0, x.Z)(this, "walls", []),
            (0, x.Z)(this, "timeouts", []),
            (this.el = e),
            (this.engine = f().Engine.create()),
            (this.config = {
              width: this.el.clientWidth,
              height: this.el.clientHeight,
            }),
            (this.render = f().Render.create({
              element: this.el,
              engine: this.engine,
              options: {
                width: this.config.width,
                height: this.config.height,
                wireframes: !1,
                background: "transparent",
              },
            })),
            this.addObjects();
        }
      }
      var w = i(2172),
        b = i(966);
      l.p8.registerPlugin(c.SplitText, o.ScrollToPlugin, n());
      let j = () => {
        let [e, t] = (0, r.useState)(0),
          i = (0, r.useRef)(),
          a = (0, r.useRef)(null),
          n = (0, r.useRef)(null),
          o = () => {
            i.current.play();
          },
          d = () => {
            i.current.pause();
          };
        (0, r.useEffect)(() => {
          let e = window.innerWidth > 1200,
            t = () => {
              let t,
                i = l.p8.utils.toArray(".single-section"),
                s = document.querySelector(".scroll-main");
              if (
                (e &&
                  s &&
                  (t = l.p8.to(i, {
                    xPercent: -100 * (i.length - 1),
                    ease: "none",
                    scrollTrigger: {
                      trigger: ".scroll-main",
                      pin: !0,
                      scrub: !0,
                      end: () => "+=" + s.offsetWidth,
                    },
                  })),
                document.querySelectorAll(".scroll-click").forEach((e) => {
                  window.innerWidth > 1200 &&
                    e.addEventListener("click", function (e) {
                      e.stopPropagation(), e.preventDefault();
                      let t = document.querySelector(
                          e.currentTarget.getAttribute("href")
                        ),
                        i =
                          (s.offsetTop + t.offsetLeft) *
                          (s.offsetWidth / (s.offsetWidth - window.innerWidth));
                      console.log(s.offsetWidth - window.innerWidth),
                        l.p8.to(window, {
                          scrollTo: { y: i, autoKill: !1 },
                          duration: 1,
                        });
                    });
                }),
                l.p8.set(".v-text-1", { y: 100 }),
                l.p8.set(".v-text-2", { y: -100 }),
                l.p8.to(".v-text-1", {
                  yPercent: -50,
                  duration: 2,
                  ease: "linear",
                  scrollTrigger: {
                    trigger: ".vertical-text-wrapper",
                    containerAnimation: t || "",
                    start: "60% 100%",
                    end: "140% 0%",
                    scrub: 0.5,
                    id: "1",
                  },
                }),
                l.p8.to(".v-text-2", {
                  yPercent: 50,
                  duration: 2,
                  ease: "linear",
                  scrollTrigger: {
                    trigger: ".vertical-text-wrapper",
                    containerAnimation: t || "",
                    start: "60% 100%",
                    scrub: 0.5,
                    id: "2",
                  },
                }),
                l.p8.utils.toArray(".scale-img").forEach((e) => {
                  l.p8.to(e, {
                    scale: 1.2,
                    duration: 2,
                    ease: "linear",
                    scrollTrigger: {
                      trigger: e,
                      containerAnimation: t || "",
                      start: "60% 100%",
                      scrub: 0.5,
                      id: "2",
                    },
                  });
                }),
                e)
              ) {
                let r = new c.SplitText(".parallax-heading-1", {
                  type: "lines",
                }).lines;
                l.p8.fromTo(
                  r,
                  { x: 30 },
                  {
                    duration: 3,
                    x: -30,
                    ease: "power2.out",
                    stagger: 0.3,
                    scrollTrigger: {
                      containerAnimation: t || "",
                      trigger: ".section-2",
                      start: "60% 100%",
                      end: "140% 0%",
                      scrub: 0.6,
                      id: "4",
                    },
                  }
                );
                let a = new c.SplitText(".parallax-text", { type: "lines" })
                  .lines;
                l.p8.fromTo(
                  a,
                  { x: 0 },
                  {
                    duration: 3,
                    x: -30,
                    ease: "power2.out",
                    stagger: 0.3,
                    scrollTrigger: {
                      containerAnimation: t || "",
                      trigger: ".section-2",
                      start: "60% 100%",
                      end: "140% 0%",
                      scrub: 0.6,
                      id: "4",
                    },
                  }
                ),
                  l.p8.fromTo(
                    ".parallax-text-left",
                    { xPercent: 0 },
                    {
                      duration: 3,
                      xPercent: -30,
                      ease: "power2.out",
                      scrollTrigger: {
                        containerAnimation: t || "",
                        trigger: ".section-3",
                        start: "60% 100%",
                        end: "140% 0%",
                        scrub: 0.6,
                        id: "5",
                      },
                    }
                  ),
                  l.p8.fromTo(
                    ".parallax-text-right",
                    { xPercent: 0 },
                    {
                      duration: 3,
                      xPercent: 30,
                      ease: "power2.out",
                      scrollTrigger: {
                        containerAnimation: t || "",
                        trigger: ".section-3",
                        start: "60% 100%",
                        end: "140% 0%",
                        scrub: 0.6,
                        id: "5",
                      },
                    }
                  );
              }
              if (e) {
                l.p8.fromTo(
                  ".project-section-main",
                  { xPercent: 0 },
                  {
                    duration: 1,
                    xPercent: 100,
                    ease: "linear",
                    scrollTrigger: {
                      containerAnimation: t || "",
                      trigger: "#projects",
                      start: "100% 100%",
                      end: "100% 0%",
                      scrub: !0,
                      id: "6",
                    },
                  }
                );
                let n =
                  document.querySelector(".project-wrapper").offsetHeight -
                  window.innerHeight +
                  250;
                l.p8.fromTo(
                  ".project-wrapper",
                  { y: 0 },
                  {
                    duration: 3,
                    y: -n,
                    ease: "power2.out",
                    scrollTrigger: {
                      containerAnimation: t || "",
                      trigger: "#projects",
                      start: "100% 100%",
                      end: "100% 0%",
                      scrub: 0.6,
                      id: "6",
                    },
                  }
                );
              }
            };
          var i = document.querySelectorAll(".top-anim-chars"),
            s = l.p8.timeline({ paused: !0, repeat: -1, delay: 0 });
          for (let r = 0; r < i.length; r++) {
            var o = new c.SplitText(i[r], { type: "chars" }).chars;
            s.from(o, {
              duration: 1,
              opacity: 0,
              y: 90,
              ease: "power2.out",
              stagger: 0.06,
              delay: -1,
            }),
              s.to(o, {
                duration: 1,
                opacity: 0,
                y: -30,
                delay: 1,
                ease: "power2.out",
                stagger: 0.06,
              });
          }
          s.play();
          let d = document.querySelector(".loader-curtain"),
            m = document.querySelector(".loader-main");
          document.body.style.overflow = "hidden";
          let h = new w.Z({});
          h.stop(),
            setTimeout(() => {
              d.classList.add("animating"),
                setTimeout(() => {
                  document
                    .querySelector(".loader-text-wrapper")
                    .classList.add("hidden");
                }, 1e3),
                setTimeout(() => {
                  m.classList.add("opacity-0", "invisible"),
                    document
                      .querySelector(".header-main")
                      .classList.add("!opacity-100"),
                    (document.body.style.overflow = "visible"),
                    h.start(),
                    t();
                }, 1700),
                setTimeout(() => {
                  document
                    .querySelector(".home-container")
                    .classList.add("loaded");
                }, 2e3),
                setTimeout(() => {
                  let e = l.p8.utils.toArray(".skill-text");
                  e.forEach((e) => {
                    let t = new c.SplitText(e, {
                      type: "words",
                      wordsClass: "overflow-hidden",
                    }).words;
                    l.p8.from(t, {
                      duration: 0.7,
                      opacity: 0,
                      delay: 1,
                      y: 90,
                      ease: "power2.out",
                      stagger: 0.1,
                    });
                  });
                  let t = l.p8.utils.toArray(".marquee-text");
                  t.forEach((e) => {
                    let t = new c.SplitText(e, {
                      type: "chars",
                      charsClass: "overflow-hidden",
                    }).chars;
                    l.p8.from(t, {
                      duration: 0.7,
                      opacity: 0,
                      delay: 1,
                      y: 90,
                      ease: "power2.out",
                      stagger: 0.1,
                    });
                  });
                  let i = l.p8.utils.toArray(".skill-para");
                  i.forEach((e) => {
                    let t = new c.SplitText(e, {
                      type: "lines",
                      linesClass: "overflow-hidden",
                    }).lines;
                    l.p8.from(t, {
                      duration: 0.7,
                      opacity: 0,
                      delay: 1,
                      y: 90,
                      ease: "power2.out",
                      stagger: 0.1,
                    });
                  }),
                    l.p8.from(".hero-img", {
                      duration: 0.7,
                      clipPath: "inset(0% 0% 0% 100%)",
                      scale: "1.1",
                      delay: 1,
                      ease: "power2.out",
                    }),
                    l.p8.from(".header-main", {
                      duration: 0.7,
                      opacity: 0,
                      delay: 1,
                      ease: "power2.out",
                    }),
                    l.p8.from(".hero-btn", {
                      duration: 0.7,
                      opacity: 0,
                      y: 80,
                      delay: 1,
                      ease: "power2.out",
                    });
                }, 1600),
                window.innerWidth > 1200 &&
                  setTimeout(() => {
                    a.current &&
                      ((n.current = new g(a.current)), n.current.start());
                  }, 2500);
            }, 2e3);
        }, []),
          (0, r.useEffect)(() => {
            setTimeout(() => {
              document.querySelector(".loader-text-wrapper").style.opacity = 1;
            }, 200);
            var e = document.querySelectorAll(".loader-text"),
              t = l.p8.timeline({ paused: !0, repeat: -1, delay: 0 });
            for (let i = 0; i < e.length; i++) {
              var s = new c.SplitText(e[i], {
                type: "chars",
                charsClass: "opacity: 0",
              }).chars;
              t.fromTo(
                s,
                {
                  duration: 1,
                  yPercent: 100,
                  autoAlpha: 0,
                  ease: "power2.out",
                  delay: -0.5,
                },
                { autoAlpha: 1, stagger: 0.1, yPercent: 0 }
              ),
                t.to(s, {
                  duration: 1,
                  yPercent: -100,
                  delay: 1,
                  ease: "power2.out",
                  stagger: 0.1,
                });
            }
            t.play();
          }, []),
          (0, r.useEffect)(() => {
            let e = window.innerHeight;
            document.querySelector(".loader-main").style.height = e + "px";
          }, []);
        let [x, u] = (0, r.useState)(),
          f = (0, r.useRef)();
        (0, r.useEffect)(() => {
          let e = (e) => {
            l.p8.to(f.current, {
              duration: 0.2,
              overwrite: "auto",
              x: e.clientX,
              y: e.clientY,
              ease: "none",
            });
          };
          return (
            window.addEventListener("pointermove", e),
            () => {
              window.removeEventListener("pointermove", e);
            }
          );
        }, []);
        let j = (e) => {
            u(e), l.p8.to(f.current, { alpha: 1 });
          },
          v = () => {
            l.p8.to(f.current, { alpha: 0 });
          };
        (0, r.useEffect)(() => {
          window.innerWidth < 1200 && o();
        }, []);
        let y = (0, r.useRef)(null),
          N = (0, r.useRef)(null),
          T = (0, r.useRef)(null),
          S = 0,
          k = -1;
        (0, r.useEffect)(() => {
          l.p8.to(T.current, {
            scrollTrigger: {
              trigger: document.documentElement,
              scrub: 0.25,
              start: 0,
              end: window.innerHeight,
              onUpdate: (e) => (k = -1 * e.direction),
            },
            duration: 20,
            x: "-500px",
          }),
            requestAnimationFrame(P);
        }, []);
        let P = () => {
          S < -100 ? (S = 0) : S > 0 && (S = -100),
            l.p8.set(y.current, { xPercent: S }),
            l.p8.set(N.current, { xPercent: S }),
            requestAnimationFrame(P),
            (S += 0.05 * k);
        };
        return (0, s.jsxs)(b.Z, {
          children: [
            (0, s.jsxs)("div", {
              className:
                "loader-main fixed inset-0 z-[9999] flex h-full w-full items-center justify-center overflow-hidden bg-white duration-300 ease-out",
              children: [
                (0, s.jsxs)("div", {
                  className: "loader-text-wrapper relative overflow-hidden",
                  style: { opacity: 0 },
                  children: [
                    (0, s.jsx)("div", {
                      className: "loader-text",
                      children: "HELLO",
                    }),
                    (0, s.jsx)("div", {
                      className: "loader-text",
                      children: "NAMASTE",
                    }),
                    (0, s.jsx)("div", {
                      className: "loader-text",
                      children: "HOLA",
                    }),
                    (0, s.jsx)("div", {
                      className: "loader-text",
                      children: "Bonjour",
                    }),
                    (0, s.jsx)("div", {
                      className: "loader-text",
                      children: "Ol\xe1",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "loader-curtain duration-800 fixed inset-0 z-30 m-auto h-full w-full bg-black ",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "home-container overflow-hidden",
              children: (0, s.jsxs)("div", {
                className: "scroll-main xl:flex xl:w-[600%]",
                children: [
                  (0, s.jsxs)("section", {
                    className:
                      "home-section section-1 single-section flex flex-col",
                    children: [
                      (0, s.jsx)("div", {
                        className: "pseudo-bottom-border relative py-1",
                        children: (0, s.jsx)("div", {
                          className: "container",
                          children: (0, s.jsxs)("div", {
                            className: "-mx-2 flex",
                            children: [
                              (0, s.jsx)("div", {
                                className: "w-4/6 px-2",
                                children: (0, s.jsxs)("p", {
                                  className:
                                    "hover-hidden-text group relative mb-0 overflow-hidden text-12 md:text-14",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className:
                                        "block duration-500 ease-out group-hover:-translate-y-full " ,//invisible product 
                                      children: "Product Designer",
                                      // children: "H",
                                    }),
                                    (0, s.jsx)("span", {
                                      className:
                                        "absolute top-0 left-0 translate-y-full  duration-500 ease-out group-hover:translate-y-0",
                                      // children: "UX Bootcamp Collective Writer",
                                      children: "UX Collective Bootcamp Writer"//,
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex w-1/3 justify-between px-2",
                                children: [
                                  (0, s.jsx)("p", {
                                    className:
                                      "mb-0 hidden flex-1 text-12 text-green md:block md:text-14",
                                      style: { display: "none" },
                                    // children: "Me #01",
                                  }),
                                  (0, s.jsxs)("div", {
                                    className:
                                      "relative mb-0 flex-1 overflow-hidden text-12",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          " absolute right-0 top-0 left-0 w-full text-right",
                                        children: (0, s.jsx)("span", {
                                          className: "top-anim-chars uppercase",
                                          children: "Product Designer",/// aniamted content
                                        }),
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          " absolute right-0 top-0 left-0 w-full text-right",
                                        children: (0, s.jsx)("span", {
                                          className: "top-anim-chars uppercase",
                                          children: "UX Collective Bootcamp Writer",
                                        }),
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          " absolute right-0 top-0 left-0 w-full text-right",
                                        children: (0, s.jsx)("span", {
                                          className: "top-anim-chars uppercase",
                                          children: "XR Designer",
                                        }),
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          " absolute right-0 top-0 left-0 w-full text-right",
                                        children: (0, s.jsx)("span", {
                                          className: "top-anim-chars uppercase",
                                          children: "Interaction Designer",
                                        }),
                                      }),
                                      // (0, s.jsx)("div", {
                                      //   className:
                                      //     " absolute right-0 top-0 left-0 w-full text-right",
                                      //   children: (0, s.jsx)("span", {
                                      //     className: "top-anim-chars uppercase",
                                      //     children: "Ol\xe1",
                                      //   }),
                                      // }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        style: { width: "100vw" },
                        className: "relative flex-1",
                        children: [
                          (0, s.jsx)("div", {
                            ref: a,
                            className:
                              "more arrow-container absolute left-0 top-0 bottom-0 h-full ",
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "md:flex-no-wrap container flex h-full flex-wrap !px-0 md:!px-2 ",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "pseudo-left-border relative flex w-full flex-col md:flex-1 xl:ml-8",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "pseudo-bottom-border relative flex flex-1 items-center p-2 md:p-4",
                                    children: (0, s.jsx)("p", {
                                      className:
                                        "skill-para mb-0 md:max-w-[70%]",
                                      children:
                                        "UX Designer with 6 years of experience, specializing in human-centered systems design across web, mobile, and immersive AR/VR platforms.I thrive on making products intuitive and user-friendly while driving tangible ROI for businesses",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "pointer-events-none fixed left-[-90px] top-[-62px] z-[2] hidden aspect-[4/3] w-[20%] overflow-hidden opacity-0 md:block",
                                    ref: f,
                                    children: [
                                      {
                                        id: 0,
                                        featuredVideo:
                                          "/video/web-designer.mp4",
                                      },
                                      {
                                        id: 0,
                                        featuredVideo:
                                          "/video/interaction-designer.mp4",
                                      },
                                      {
                                        id: 0,
                                        featuredVideo:
                                          "/video/creative-director.mp4",
                                      },
                                    ].map((e, t) => {
                                      let { featuredVideo: i } = e;
                                      return (0, s.jsx)(
                                        "video",
                                        {
                                          className:
                                            "absolute h-full w-full object-cover transition-all duration-300 ".concat(
                                              t == x
                                                ? "opacity-100 blur-0"
                                                : "opacity-0 blur-2xl"
                                            ),
                                          src: i,
                                          autoPlay: !0,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                        },
                                        t
                                      );
                                    }),
                                  }),//page 1 headings
                                  [
                                    { id: 0, headingTitle: "Web And Mobile Experiences" },
                                    {
                                      id: 1,
                                      headingTitle: "Immersive Experiences",
                                    },
                                    {
                                      id: 2,
                                      headingTitle: "UX Writing",
                                    },
                                  ].map((e, t) => {
                                    let { headingTitle: i } = e;
                                    return (0, s.jsx)(
                                      "div",
                                      {
                                        className:
                                          " pseudo-bottom-border relative p-2 md:p-4",
                                          // "hide-cursor pseudo-bottom-border relative p-2 md:p-4",
                                        "data-selected": t === x,
                                        // onPointerEnter: () => j(t),
                                        // onPointerLeave: v,
                                        children: (0, s.jsx)("h2", {
                                          className:
                                            "skill-text mb-0 text-24 font-medium uppercase md:text-32",
                                          children: i,
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "flex flex-1 items-center py-4 px-2 md:p-4",
                                    children: (0, s.jsx)("div", {
                                      className: "hero-btn",
                                      children: (0, s.jsxs)("a", {
                                        href: "#about",
                                        className:
                                          "scroll-click inline-flex items-center gap-1",
                                        children: [
                                          (0, s.jsx)(p.Z, {
                                            className: "font-medium uppercase",
                                            children:
                                              "Explore More About Me With A Scroll",///digital scroll area
                                          }),
                                          (0, s.jsx)("span", {
                                            className: "rotate-90 md:rotate-0",
                                            children: (0, s.jsx)("svg", {
                                              width: "77",
                                              height: "4",
                                              fill: "none",
                                              viewBox: "0 0 77 4",
                                              children: (0, s.jsx)("path", {
                                                fill: "#111",
                                                d: "M77 2 74.5.557v2.886L77 2ZM0 2.25h74.75v-.5H0v.5Z",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "hero-img flex w-full items-center bg-[#101010] md:w-1/3 md:pl-3",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "relative h-[500px] max-h-[500px] overflow-hidden md:h-full",
                                  children: (0, s.jsx)("img", {
                                    // onMouseEnter: o,
                                    // onMouseLeave: d,
                                    // ref: i,
                                    // loop: !0,
                                    // playsInline: !0,
                                    // muted: !0,
                                    src: "/img/Mask.png",
                                    className:
                                      "h-full w-full object-cover object-left",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {///the scrolling animatioon below
                        className: "pseudo-top-border relative",
                        children: (0, s.jsx)("div", {
                          className: "marquee-text-wrapper",
                          children: (0, s.jsxs)("div", {
                            className: "relative flex w-max gap-4 whitespace-nowrap",
                            ref: T,
                            children: [
                              (0, s.jsxs)("div", {
                                ref: y,
                                className: "relative flex gap-4",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "marquee-text mb-0 text-48 font-medium leading-[40%] md:text-[calc((75)/1440*100vw)]",
                                    children: "HARINI RAO",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "marquee-text mb-0 text-48 font-medium leading-[40%] md:text-[calc((75)/1440*100vw)]",
                                    children: "HARINI RAO",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "marquee-text mb-0 text-48 font-medium leading-[40%] md:text-[calc((75)/1440*100vw)]",
                                    children: "HARINI RAO",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                ref: N,
                                className: "absolute left-full top-0 flex gap-4",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "marquee-text mb-0 text-48 font-medium leading-[40%] md:text-[calc((75)/1440*100vw)]",
                                    children: "HARINI RAO",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "marquee-text mb-0 text-48 font-medium leading-[40%] md:text-[calc((75)/1440*100vw)]",
                                    children: "HARINI RAO",
                                  }),
                                  (0, s.jsx)("p", {
                                    className: "marquee-text mb-0 text-48 font-medium leading-[40%] md:text-[calc((75)/1440*100vw)]",
                                    children: "HARINI RAO",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        
                      }),
                    ],
                  }),
                  (0, s.jsxs)("section", {
                    id: "about",
                    className:
                      "home-section single-section section-2 relative mt-5 flex flex-col md:mt-0 hidden",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "relative z-[99] border-y border-y-black py-1 md:border-b md:border-b-white md:mix-blend-exclusion",
                        children: (0, s.jsx)("div", {
                          className: "container",
                          children: (0, s.jsx)("div", {
                            className: "flex",
                            children: (0, s.jsx)("div", {
                              className: "flex w-full justify-between md:w-2/5",
                              children: (0, s.jsx)("p", {
                                className: "mb-0 text-12 md:text-white",
                                children: "Based in London",
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "container flex flex-grow flex-wrap md:flex-nowrap hidden",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "vertical-text-wrapper hidden w-full flex-wrap justify-center overflow-hidden border-x border-x-black px-2 md:ml-[45%] md:flex md:w-[7%] md:flex-nowrap",
                            children: [
                              (0, s.jsx)("div", {
                                className: "vertical-orientation-text v-text-1",
                                children: (0, s.jsxs)("p", {
                                  className: "text-24 uppercase",
                                  children: [//that vertical scroll
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "vertical-orientation-text vertical-orientation-text-2 v-text-2",
                                children: (0, s.jsxs)("p", {
                                  className:
                                    "flex justify-end text-24 uppercase",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2",
                                      children: "Portfolio",
                                    }),
                                    (0, s.jsx)("span", {
                                      className: "my-2 text-green",
                                      children: "HariniRao",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex w-full flex-col pt-5 md:w-[48%] hidden",
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  "flex flex-grow flex-col justify-center md:pl-8",
                                children: [
                                  (0, s.jsxs)("h2", {
                                    className:
                                      "parallax-heading-1 mb-4 text-30 font-medium uppercase leading-[120%] md:mb-[150px] md:text-64 md:leading-[72px]",
                                    children: [
                                      " Hello, I'm  ",
                                      // (0, s.jsx)("br", {}),
                                      // "I'm ",
                                      (0, s.jsx)("span", {
                                        className: "text-green",
                                        children: "Harini Rajeshwara Rao",// main name
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("p", {
                                    className:
                                      "parallax-text text-18 font-medium uppercase md:text-24",
                                    children:
                                      "I began as a copywriter but found my calling in UX design, crafting user-focused experiences.",
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "extended-borders-right relative mt-4 mb-5 border-y border-y-black py-2 md:mb-[94px] md:mt-0 md:p-4 md:pl-8",
                                children: (0, s.jsxs)(h.Z, {
                                  arrow: !0,
                                  className: "scroll-click",
                                  href: "#about-more",
                                  children: [
                                    (0, s.jsx)("span", {
                                      className: "hidden md:inline",
                                      children: "Let's design-dive!",
                                    }),
                                    " ",
                                    "Explore The Best of My Works.",
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "left-0 top-0 bottom-0 h-full w-full overflow-hidden md:absolute md:w-[44%]",
                        children: (0, s.jsx)("video", {
                          className: "scale-img h-full w-full object-cover",
                          src: "/video/about-video.mp4",
                          autoPlay: !0,
                          loop: !0,
                          muted: !0,
                          playsInline: !0,
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("section", {
                    id: "projects",
                    className:
                      "home-section single-section relative mt-5 !overflow-visible border-l border-l-black md:mt-0",
                    children: (0, s.jsxs)("div", {
                      className: "project-section-main flex flex-col",
                      children: [
                        (0, s.jsx)("div", {
                          className: "border-b border-b-black py-1",
                          children: (0, s.jsx)("div", {
                            className: "container",
                            children: (0, s.jsxs)("div", {
                              className: "flex",
                              children: [
                                (0, s.jsx)("div", {
                                  className: "w-3/5",
                                  children: (0, s.jsx)("p", {
                                    className: "mb-0 text-12",
                                    children: "Best of My Works",
                                  }),
                                }),
                                (0, s.jsx)("div", {
                                  className: "w-2/5",
                                  children: (0, s.jsx)("p", {
                                    className: "mb-0 text-right text-12",
                                    children: "2019-2025",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),//projects area
                        (0, s.jsx)("div", {
                          className: "project-lists h-full overflow-auto",
                          children: (0, s.jsxs)("div", {
                            className: "project-wrapper",
                            children: [
                              [
                                {
                                  id: 0,
                                  projectName: "SpeakProVR",
                                  projectYear: "2025",
                                  projectFeatures:
                                    "Virtual Reality, Generative AI, Speech-To-Text, Text-To-Speech",
                                  projectThumb: "/img/SpeakProVR.png",
                                  mobileprojectThumb: "/img/mob-flexibrid.webp",
                                  projectUrl: "https://medium.com/@harinirajeshwararao/speakpro-vr-a7263cbe94be",
                                },
                                {
                                  id: 1,
                                  projectName: "Interactive AR Learning Companion",
                                  projectYear: "2024",
                                  projectFeatures:
                                    "Augmented Reality, Generative AI, Speech-To-Text, Text-To-Speech",
                                  projectThumb: "/img/Interactive_AR.png",
                                  mobileprojectThumb: "/img/mob-interiro.webp",
                                  projectUrl: "https://medium.com/@harinirajeshwararao/interactive-ar-learning-companion-89cc0dd4a167",
                                  // cursorText: "COMING SOON",
                                },
                                {
                                  id: 2,
                                  projectName: "Phonepe Budget Pro",
                                  projectYear: "2024",
                                  projectFeatures: "Mobile App, Interaction Design, WCAG 2.1",
                                  projectThumb: "/img/PhonePe.png",
                                  mobileprojectThumb:
                                    "/img/mob-plantastic.webp",
                                  projectUrl:
                                    "https://medium.com/@harinirajeshwararao/phonepe-budget-pro-07d2aaa06eab",
                                    // cursorText: "COMING SOON",
                                },
                                {
                                  id: 3,
                                  projectName: "ZIVA",
                                  projectYear: "2023",
                                  projectFeatures:
                                    "Workflow Automation, Design System, Interaction Design",
                                  projectThumb: "/img/ZIVA.png",
                                  mobileprojectThumb:
                                    "/img/mob-numberdekho.webp",
                                  projectUrl: "#!",
                                  cursorText: "COMING SOON",
                                },
                                {
                                  id: 4,
                                  projectName: "ASTRA Insure-tech",
                                  projectYear: "2023",
                                  projectFeatures:
                                    "Workflow Automation, Interaction Design, User Retention",
                                  projectThumb: "/img/astra.png",
                                  mobileprojectThumb: "/img/mob-mksss.webp",
                                  projectUrl: "#!",
                                  cursorText: "COMING SOON",
                                },//more projects
                                // {
                                //   id: 5,
                                //   projectName: "Mariox",
                                //   projectYear: "2024",
                                //   projectFeatures:
                                //     "Website Design, Creative Direction, Interaction",
                                //   projectThumb: "/img/mariox.webp",
                                //   mobileprojectThumb: "/img/mob-mariox.webp",
                                //   projectUrl: "#!",
                                //   cursorText: "COMING SOON",
                                // },
                                // {
                                //   id: 6,
                                //   projectName: "StackCMS",
                                //   projectYear: "2022",
                                //   projectFeatures: "Website Design",
                                //   projectThumb: "/img/stackcms.webp",
                                //   mobileprojectThumb: "/img/mob-stackcms.webp",
                                //   projectUrl: "#!",
                                //   cursorText: "COMING SOON",
                                // },
                                // {
                                //   id: 7,
                                //   projectName: "Starkmedia",
                                //   projectYear: "2023",
                                //   projectFeatures: "Website Design",
                                //   projectThumb: "/img/stark.webp",
                                //   mobileprojectThumb: "/img/mob-stark.webp",
                                //   projectUrl: "#!",
                                //   cursorText: "COMING SOON",
                                // },
                              ].map((i) => {
                                let {
                                  id: r,
                                  projectName: l,
                                  projectFeatures: a,
                                  projectThumb: n,
                                  projectYear: o,
                                  projectUrl: c,
                                  mobileprojectThumb: d,
                                  cursorText: h,
                                } = i;
                                return (0, s.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "single-project-block border-b border-b-black ",
                                    children: [
                                      (0, s.jsx)("button", {
                                        onClick: () =>
                                          t((e) => (e === r ? null : r)),
                                        className: "w-full text-left",
                                        children: (0, s.jsx)("div", {
                                          className: "container relative z-10",
                                          children: (0, s.jsxs)("div", {
                                            className:
                                              "-mx-2 flex flex-wrap py-3",
                                            children: [
                                              (0, s.jsx)("div", {
                                                className:
                                                  "w-1/2 px-2 md:w-1/3",
                                                children: (0, s.jsx)("p", {
                                                  className: "".concat(
                                                    e === r
                                                      ? "text-green"
                                                      : "text-black",
                                                    " mb-0 text-16 uppercase duration-300 ease-out"
                                                  ),
                                                  children: l,
                                                }),
                                              }),
                                              (0, s.jsx)("div", {
                                                className:
                                                  "w-1/2 px-2 text-right md:w-1/3 md:text-left",
                                                children: (0, s.jsx)("p", {
                                                  className: "".concat(
                                                    e === r
                                                      ? "text-green"
                                                      : "text-black",
                                                    " mb-0 text-16 duration-300 ease-out"
                                                  ),
                                                  children: o,
                                                }),
                                              }),
                                              (0, s.jsx)("div", {
                                                className:
                                                  "w-full px-2 md:w-1/3",
                                                children: (0, s.jsx)("p", {
                                                  className: "".concat(
                                                    e === r
                                                      ? "text-green"
                                                      : "text-black",
                                                    " mb-0 pt-3 text-16 duration-300 ease-out md:pt-0 md:text-right"
                                                  ),
                                                  children: a,
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                      (0, s.jsx)("div", {
                                        className:
                                          "accordion-answer fadein  grid  overflow-hidden  ".concat(
                                            e === r ? "active mb-3" : ""
                                          ),
                                        children: (0, s.jsxs)("div", {
                                          className:
                                            "work-img-wrapper min-h-0 cursor-text duration-300 ease-out md:px-3",
                                          "data-cursor": h || "VIEW PROJECT",
                                          children: [
                                            (0, s.jsx)(m(), {
                                              scroll: !1,
                                              href: c,
                                              target:"_blank",
                                              className: "block",
                                              children: (0, s.jsxs)("picture", {
                                                children: [
                                                  (0, s.jsx)("source", {
                                                    srcSet: n,
                                                    media: "(min-width: 768px)",
                                                  }),
                                                  (0, s.jsx)("img", {
                                                    src: d,
                                                    alt: "",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            (0, s.jsx)("div", {
                                              className: "container relative",
                                              children: (0, s.jsx)("div", {
                                                className:
                                                  "left-0 bottom-4 mt-3 md:absolute md:mt-0 md:px-2",
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  r
                                );
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "border-b border-b-black py-3 text-center font-semibold uppercase text-green",
                                children:
                                  "More Awesome projects are cooking...",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("section", {
                    className:
                      "home-section single-section relative !z-[-1] hidden flex-col xl:flex",
                  }),
                  (0, s.jsxs)("section", {
                    id: "about-more",
                    className:
                      "section-3 home-section single-section relative flex flex-col border-l border-l-black ",
                    children: [
                      (0, s.jsx)("div", {
                        className: "border-b border-b-black py-1",
                        children: (0, s.jsx)("div", {
                          className: "container",
                          children: (0, s.jsxs)("div", {
                            className: "flex",
                            children: [
                              (0, s.jsx)("div", {
                                className: "w-3/5",
                                children: (0, s.jsx)("p", {
                                  className: "mb-0 text-12 text-green",
                                  children: "More about me",
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: "w-2/5",
                                children: (0, s.jsx)("p", {
                                  className: "mb-0 text-12 text-green",
                                  children: "Me #02",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "container flex flex-grow overflow-hidden",
                        children: (0, s.jsxs)("div", {
                          className: "-mx-2 flex flex-wrap",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "flex flex-col justify-between px-2 py-3 md:w-3/5 md:py-6",
                              children: [
                                (0, s.jsx)("div", {
                                  className:
                                    "parallax-text-right w-full md:w-3/4",
                                  children: (0, s.jsx)("p", {
                                    children:
                                      "I'm a results-driven UX professional with 6 years of experience specializing in Interaction Design, HCI and user-centric design. My work spans fintech, large-scale digital transformation, ed-tech, and FMCG. I hold an MSc in Digital Design (Immersive Mixed Reality) from Brunel University London, where I focused on UX for XR and the integration of XR with GenAI. Leading to the development of immersive educational experiences like the Interactive AR Learning Companion and tools for overcoming speaking anxiety, such as SpeakProVR.",
                                  }),
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "parallax-text-left ml-auto w-full md:w-2/3",
                                  children: (0, s.jsx)("p", {
                                    children:
                                      "Driven by intellectual curiosity, I continuously explore HCI principles to better understand how humans interact with systems. Whether leading research-informed UX strategies or collaborating with cross-functional teams, I am committed to putting users at the heart of every design decision. I thrive on solving complex problems and pushing the boundaries of design to bring value to the user and the business.",
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "w-full md:w-2/5",
                              children: (0, s.jsx)("div", {
                                className: "h-full w-full overflow-hidden",
                                children: (0, s.jsx)("img", {
                                  src: "/img/Second.png",
                                  
                                  // src: "/img/me_2.jpeg",
                                  className:
                                    "scale-img h-full w-full object-cover",// CHANGING THEIMAGE 
                                  alt: "",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "social-links flex overflow-auto border-t border-t-black py-3 md:justify-center",
                        children: [
                          {
                            id: 0,
                            socialName: "LINKEDIN",
                            socialIcon: "/img/linkedin.png",
                            socialUrl: "https://www.linkedin.com/in/harini-rajeshwara-rao-5089121b3/",
                          },
                          {
                            id: 1,
                            socialName: "MEDIUM",
                            socialIcon: "/img/behance.png",
                            socialUrl: "https://medium.com/@harinirajeshwararao",
                          },
                          {
                            id: 2,
                            socialName: "FIGMA",
                            socialIcon: "/img/instagram.svg",
                            socialUrl: "https://figma.com/@harinirao",
                          },
                          {
                            id: 3,
                            socialName: "GUM ROAD",
                            socialIcon: "/img/linkedin.png",
                            socialUrl:
                              "https://harinirajeshwara.gumroad.com/l/otidfp",
                          },
                          {
                            id: 4,
                            socialName: "BEEHIIV",
                            socialIcon: "/img/twitter.svg",
                            socialUrl: "https://untyebyharini.beehiiv.com/",
                          },
                        ].map((e) => {
                          let {
                            id: t,
                            socialName: i,
                            socialIcon: r,
                            socialUrl: l,
                          } = e;
                          return (0, s.jsx)(
                            "a",
                            {
                              href: l,
                              className:
                                "px-3 text-20 font-medium xl:px-4 xl:text-32",
                              children: (0, s.jsxs)("div", {
                                className:
                                  "anchor-animation relative inline-flex overflow-hidden text-center uppercase text-green",
                                children: [
                                  (0, s.jsx)("div", { children: i }),
                                  (0, s.jsx)("div", {
                                    children: (0, s.jsx)("img", {
                                      src: r,
                                      className: "inline-block max-w-[30px]",
                                      alt: i,
                                    }),
                                  }),
                                ],
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("section", {
                    id: "contact",
                    className:
                      "home-section single-section relative mt-5 flex flex-col border-l border-l-black md:mt-0",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "border-b border-t border-b-black border-t-black py-1 xl:border-t-0",
                        children: (0, s.jsx)("div", {
                          className: "container",
                          children: (0, s.jsx)("div", {
                            className: "flex",
                            children: (0, s.jsx)("div", {
                              className: "w-full md:w-3/5",
                              children: (0, s.jsx)("p", {
                                className: "mb-0 text-12 text-green",
                                children: "Let’s connect",
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex flex-1 flex-wrap ",
                        children: [
                          (0, s.jsx)("div", {
                            className: "lg:w-2/5",
                            children: (0, s.jsx)("video", {
                              className: "h-full w-full object-cover",
                              src: "/video/lets-connect.mp4",
                              autoPlay: !0,
                              loop: !0,
                              muted: !0,
                              playsInline: !0,
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-1 flex-col ",
                            children: [
                              (0, s.jsx)("div", {
                                className: "flex flex-1 items-center",
                                children: (0, s.jsx)("div", {
                                  className: "w-full py-4 px-2 md:p-4",
                                  children: (0, s.jsxs)("div", {
                                    className: "overflow-hidden",
                                    children: [
                                      (0, s.jsx)("h2", {
                                        className:
                                          "contact-name mb-3 whitespace-nowrap text-32 font-medium uppercase leading-none md:text-[calc((90)/1440*100vw)] ",
                                        children: "Let’s connect",
                                      }),
                                      (0, s.jsx)("p", {
                                        className:
                                          "mb-4 text-14 font-medium uppercase md:text-20",
                                        children:
                                          "Curious to explore UX over a coffee? Or dive into XR and AI to see where ideas can lead? Let’s have a conversation—who knows, it might just turn into something exciting.",
                                      }),
                                      (0, s.jsx)(h.Z, {
                                        href: "https://calendly.com/harinirajeshwararao/30min",
                                        boxButton: !0,
                                        greenButton: !0,
                                        arrow: !0,
                                        arrowColor: "#fff",
                                        children: "Schedule A Meeting",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "relative flex flex-1 flex-wrap border-t border-t-black pt-4 xl:pl-4",
                                children: (0, s.jsx)("div", {
                                  className: "w-full",
                                  children: (0, s.jsx)("div", {
                                    className: " flex flex-wrap ",
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "px-2 pt-5 md:py-5 md:px-4 lg:px-0",
                                      children: [
                                        (0, s.jsx)(m(), {
                                          href: "/",
                                          className:
                                            "mb-2 inline-block text-16 font-medium uppercase xl:text-para",
                                          children: "Harini Rao",//last page name
                                        }),
                                        (0, s.jsxs)("p", {
                                          className: "xl:max-w-[60%]",
                                          children: [
                                            "Thanks for dropping by! ",
                                            (0, s.jsx)("br", {}),
                                            "Let’s stay connected- join me as I explore the intricacies of Evolving User Experience Design, Extended Reality, and Artificial Intelligence.",
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "social-links social-link-alt flex flex-wrap gap-x-3 pt-4 md:gap-4",
                                          children: [
                                            (0, s.jsx)("a", {
                                              href: "https://www.linkedin.com/in/harini-rajeshwara-rao-5089121b3/",
                                              className:
                                                " text-20 font-medium md:text-14",
                                              children: (0, s.jsx)(p.Z, {
                                                children: "LINKEDIN",
                                              }),
                                            }),
                                            (0, s.jsx)("a", {
                                              href: "https://medium.com/@harinirajeshwararao",
                                              className:
                                                " text-20 font-medium md:text-14",
                                              children: (0, s.jsx)(p.Z, {
                                                children: "MEDIUM",
                                              }),
                                            }),
                                            (0, s.jsx)("a", {
                                              href: "https://figma.com/@harinirao",
                                              className:
                                                " text-20 font-medium md:text-14",
                                              children: (0, s.jsx)(p.Z, {
                                                children: "FIGMA",
                                              }),
                                            }),
                                            (0, s.jsx)("a", {
                                              href: "https://harinirajeshwara.gumroad.com/l/otidfp",
                                              className:
                                                " text-20 font-medium md:text-14",
                                              children: (0, s.jsx)(p.Z, {
                                                children: "GUM ROAD",
                                              }),
                                            }),
                                            (0, s.jsx)("a", {
                                              href: " https://untyebyharini.beehiiv.com/",
                                              className:
                                                " text-20 font-medium md:text-14",
                                              children: (0, s.jsx)(p.Z, {
                                                children: "BEEHIIV",
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
      function v() {
        return (0, s.jsx)(s.Fragment, { children: (0, s.jsx)(j, {}) });
      }
    },
  },
  function (e) {
    e.O(0, [611, 210, 877, 553, 581, 774, 888, 179], function () {
      return e((e.s = 5728));
    }),
      (_N_E = e.O());
  },
]);
