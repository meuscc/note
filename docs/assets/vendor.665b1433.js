/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Rt =
    window.ShadowRoot &&
    (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  Ot = Symbol(),
  Kt = new Map();
class ae {
  constructor(t, e) {
    if (((this._$cssResult$ = !0), e !== Ot))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = t;
  }
  get styleSheet() {
    let t = Kt.get(this.cssText);
    return (
      Rt &&
        t === void 0 &&
        (Kt.set(this.cssText, (t = new CSSStyleSheet())),
        t.replaceSync(this.cssText)),
      t
    );
  }
  toString() {
    return this.cssText;
  }
}
const Ne = (n) => new ae(typeof n == "string" ? n : n + "", Ot),
  Zn = (n, ...t) => {
    const e =
      n.length === 1
        ? n[0]
        : t.reduce(
            (s, i, r) =>
              s +
              ((o) => {
                if (o._$cssResult$ === !0) return o.cssText;
                if (typeof o == "number") return o;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    o +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(i) +
              n[r + 1],
            n[0]
          );
    return new ae(e, Ot);
  },
  Re = (n, t) => {
    Rt
      ? (n.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        ))
      : t.forEach((e) => {
          const s = document.createElement("style"),
            i = window.litNonce;
          i !== void 0 && s.setAttribute("nonce", i),
            (s.textContent = e.cssText),
            n.appendChild(s);
        });
  },
  qt = Rt
    ? (n) => n
    : (n) =>
        n instanceof CSSStyleSheet
          ? ((t) => {
              let e = "";
              for (const s of t.cssRules) e += s.cssText;
              return Ne(e);
            })(n)
          : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var mt;
const Wt = window.trustedTypes,
  Oe = Wt ? Wt.emptyScript : "",
  Ft = window.reactiveElementPolyfillSupport,
  St = {
    toAttribute(n, t) {
      switch (t) {
        case Boolean:
          n = n ? Oe : null;
          break;
        case Object:
        case Array:
          n = n == null ? n : JSON.stringify(n);
      }
      return n;
    },
    fromAttribute(n, t) {
      let e = n;
      switch (t) {
        case Boolean:
          e = n !== null;
          break;
        case Number:
          e = n === null ? null : Number(n);
          break;
        case Object:
        case Array:
          try {
            e = JSON.parse(n);
          } catch {
            e = null;
          }
      }
      return e;
    },
  },
  ce = (n, t) => t !== n && (t == t || n == n),
  vt = {
    attribute: !0,
    type: String,
    converter: St,
    reflect: !1,
    hasChanged: ce,
  };
class j extends HTMLElement {
  constructor() {
    super(),
      (this._$Et = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Ei = null),
      this.o();
  }
  static addInitializer(t) {
    var e;
    ((e = this.l) !== null && e !== void 0) || (this.l = []), this.l.push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((e, s) => {
        const i = this._$Eh(s, e);
        i !== void 0 && (this._$Eu.set(i, s), t.push(i));
      }),
      t
    );
  }
  static createProperty(t, e = vt) {
    if (
      (e.state && (e.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, e),
      !e.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const s = typeof t == "symbol" ? Symbol() : "__" + t,
        i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && Object.defineProperty(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    return {
      get() {
        return this[e];
      },
      set(i) {
        const r = this[t];
        (this[e] = i), this.requestUpdate(t, r, s);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || vt;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Eu = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const e = this.properties,
        s = [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      for (const i of s) this.createProperty(i, e[i]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(qt(i));
    } else t !== void 0 && e.push(qt(t));
    return e;
  }
  static _$Eh(t, e) {
    const s = e.attribute;
    return s === !1
      ? void 0
      : typeof s == "string"
      ? s
      : typeof t == "string"
      ? t.toLowerCase()
      : void 0;
  }
  o() {
    var t;
    (this._$Ep = new Promise((e) => (this.enableUpdating = e))),
      (this._$AL = new Map()),
      this._$Em(),
      this.requestUpdate(),
      (t = this.constructor.l) === null ||
        t === void 0 ||
        t.forEach((e) => e(this));
  }
  addController(t) {
    var e, s;
    ((e = this._$Eg) !== null && e !== void 0 ? e : (this._$Eg = [])).push(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((s = t.hostConnected) === null || s === void 0 || s.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$Eg) === null ||
      e === void 0 ||
      e.splice(this._$Eg.indexOf(t) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Et.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e =
      (t = this.shadowRoot) !== null && t !== void 0
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return Re(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$Eg) === null ||
        t === void 0 ||
        t.forEach((e) => {
          var s;
          return (s = e.hostConnected) === null || s === void 0
            ? void 0
            : s.call(e);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$Eg) === null ||
      t === void 0 ||
      t.forEach((e) => {
        var s;
        return (s = e.hostDisconnected) === null || s === void 0
          ? void 0
          : s.call(e);
      });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ES(t, e, s = vt) {
    var i, r;
    const o = this.constructor._$Eh(t, s);
    if (o !== void 0 && s.reflect === !0) {
      const l = (
        (r =
          (i = s.converter) === null || i === void 0
            ? void 0
            : i.toAttribute) !== null && r !== void 0
          ? r
          : St.toAttribute
      )(e, s.type);
      (this._$Ei = t),
        l == null ? this.removeAttribute(o) : this.setAttribute(o, l),
        (this._$Ei = null);
    }
  }
  _$AK(t, e) {
    var s, i, r;
    const o = this.constructor,
      l = o._$Eu.get(t);
    if (l !== void 0 && this._$Ei !== l) {
      const a = o.getPropertyOptions(l),
        c = a.converter,
        h =
          (r =
            (i =
              (s = c) === null || s === void 0 ? void 0 : s.fromAttribute) !==
              null && i !== void 0
              ? i
              : typeof c == "function"
              ? c
              : null) !== null && r !== void 0
            ? r
            : St.fromAttribute;
      (this._$Ei = l), (this[l] = h(e, a.type)), (this._$Ei = null);
    }
  }
  requestUpdate(t, e, s) {
    let i = !0;
    t !== void 0 &&
      (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || ce)(
        this[t],
        e
      )
        ? (this._$AL.has(t) || this._$AL.set(t, e),
          s.reflect === !0 &&
            this._$Ei !== t &&
            (this._$EC === void 0 && (this._$EC = new Map()),
            this._$EC.set(t, s)))
        : (i = !1)),
      !this.isUpdatePending && i && (this._$Ep = this._$E_());
  }
  async _$E_() {
    this.isUpdatePending = !0;
    try {
      await this._$Ep;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Et &&
        (this._$Et.forEach((i, r) => (this[r] = i)), (this._$Et = void 0));
    let e = !1;
    const s = this._$AL;
    try {
      (e = this.shouldUpdate(s)),
        e
          ? (this.willUpdate(s),
            (t = this._$Eg) === null ||
              t === void 0 ||
              t.forEach((i) => {
                var r;
                return (r = i.hostUpdate) === null || r === void 0
                  ? void 0
                  : r.call(i);
              }),
            this.update(s))
          : this._$EU();
    } catch (i) {
      throw ((e = !1), this._$EU(), i);
    }
    e && this._$AE(s);
  }
  willUpdate(t) {}
  _$AE(t) {
    var e;
    (e = this._$Eg) === null ||
      e === void 0 ||
      e.forEach((s) => {
        var i;
        return (i = s.hostUpdated) === null || i === void 0
          ? void 0
          : i.call(s);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$EU() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 &&
      (this._$EC.forEach((e, s) => this._$ES(s, this[s], e)),
      (this._$EC = void 0)),
      this._$EU();
  }
  updated(t) {}
  firstUpdated(t) {}
}
(j.finalized = !0),
  (j.elementProperties = new Map()),
  (j.elementStyles = []),
  (j.shadowRootOptions = { mode: "open" }),
  Ft == null || Ft({ ReactiveElement: j }),
  ((mt = globalThis.reactiveElementVersions) !== null && mt !== void 0
    ? mt
    : (globalThis.reactiveElementVersions = [])
  ).push("1.3.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var At;
const z = globalThis.trustedTypes,
  Jt = z ? z.createPolicy("lit-html", { createHTML: (n) => n }) : void 0,
  L = `lit$${(Math.random() + "").slice(9)}$`,
  ue = "?" + L,
  Le = `<${ue}>`,
  V = document,
  tt = (n = "") => V.createComment(n),
  et = (n) => n === null || (typeof n != "object" && typeof n != "function"),
  he = Array.isArray,
  Ue = (n) => {
    var t;
    return (
      he(n) ||
      typeof ((t = n) === null || t === void 0 ? void 0 : t[Symbol.iterator]) ==
        "function"
    );
  },
  G = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Xt = /-->/g,
  Gt = />/g,
  k =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  Yt = /'/g,
  Zt = /"/g,
  fe = /^(?:script|style|textarea|title)$/i,
  He =
    (n) =>
    (t, ...e) => ({ _$litType$: n, strings: t, values: e }),
  Qn = He(1),
  M = Symbol.for("lit-noChange"),
  v = Symbol.for("lit-nothing"),
  Qt = new WeakMap(),
  ke = (n, t, e) => {
    var s, i;
    const r =
      (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0
        ? s
        : t;
    let o = r._$litPart$;
    if (o === void 0) {
      const l =
        (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0
          ? i
          : null;
      r._$litPart$ = o = new st(t.insertBefore(tt(), l), l, void 0, e ?? {});
    }
    return o._$AI(n), o;
  },
  D = V.createTreeWalker(V, 129, null, !1),
  Me = (n, t) => {
    const e = n.length - 1,
      s = [];
    let i,
      r = t === 2 ? "<svg>" : "",
      o = G;
    for (let a = 0; a < e; a++) {
      const c = n[a];
      let h,
        u,
        f = -1,
        d = 0;
      for (; d < c.length && ((o.lastIndex = d), (u = o.exec(c)), u !== null); )
        (d = o.lastIndex),
          o === G
            ? u[1] === "!--"
              ? (o = Xt)
              : u[1] !== void 0
              ? (o = Gt)
              : u[2] !== void 0
              ? (fe.test(u[2]) && (i = RegExp("</" + u[2], "g")), (o = k))
              : u[3] !== void 0 && (o = k)
            : o === k
            ? u[0] === ">"
              ? ((o = i ?? G), (f = -1))
              : u[1] === void 0
              ? (f = -2)
              : ((f = o.lastIndex - u[2].length),
                (h = u[1]),
                (o = u[3] === void 0 ? k : u[3] === '"' ? Zt : Yt))
            : o === Zt || o === Yt
            ? (o = k)
            : o === Xt || o === Gt
            ? (o = G)
            : ((o = k), (i = void 0));
      const A = o === k && n[a + 1].startsWith("/>") ? " " : "";
      r +=
        o === G
          ? c + Le
          : f >= 0
          ? (s.push(h), c.slice(0, f) + "$lit$" + c.slice(f) + L + A)
          : c + L + (f === -2 ? (s.push(void 0), a) : A);
    }
    const l = r + (n[e] || "<?>") + (t === 2 ? "</svg>" : "");
    if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [Jt !== void 0 ? Jt.createHTML(l) : l, s];
  };
class nt {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0,
      o = 0;
    const l = t.length - 1,
      a = this.parts,
      [c, h] = Me(t, e);
    if (
      ((this.el = nt.createElement(c, s)),
      (D.currentNode = this.el.content),
      e === 2)
    ) {
      const u = this.el.content,
        f = u.firstChild;
      f.remove(), u.append(...f.childNodes);
    }
    for (; (i = D.nextNode()) !== null && a.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) {
          const u = [];
          for (const f of i.getAttributeNames())
            if (f.endsWith("$lit$") || f.startsWith(L)) {
              const d = h[o++];
              if ((u.push(f), d !== void 0)) {
                const A = i.getAttribute(d.toLowerCase() + "$lit$").split(L),
                  _ = /([.?@])?(.*)/.exec(d);
                a.push({
                  type: 1,
                  index: r,
                  name: _[2],
                  strings: A,
                  ctor:
                    _[1] === "."
                      ? Ie
                      : _[1] === "?"
                      ? De
                      : _[1] === "@"
                      ? ze
                      : pt,
                });
              } else a.push({ type: 6, index: r });
            }
          for (const f of u) i.removeAttribute(f);
        }
        if (fe.test(i.tagName)) {
          const u = i.textContent.split(L),
            f = u.length - 1;
          if (f > 0) {
            i.textContent = z ? z.emptyScript : "";
            for (let d = 0; d < f; d++)
              i.append(u[d], tt()),
                D.nextNode(),
                a.push({ type: 2, index: ++r });
            i.append(u[f], tt());
          }
        }
      } else if (i.nodeType === 8)
        if (i.data === ue) a.push({ type: 2, index: r });
        else {
          let u = -1;
          for (; (u = i.data.indexOf(L, u + 1)) !== -1; )
            a.push({ type: 7, index: r }), (u += L.length - 1);
        }
      r++;
    }
  }
  static createElement(t, e) {
    const s = V.createElement("template");
    return (s.innerHTML = t), s;
  }
}
function K(n, t, e = n, s) {
  var i, r, o, l;
  if (t === M) return t;
  let a =
    s !== void 0
      ? (i = e._$Cl) === null || i === void 0
        ? void 0
        : i[s]
      : e._$Cu;
  const c = et(t) ? void 0 : t._$litDirective$;
  return (
    (a == null ? void 0 : a.constructor) !== c &&
      ((r = a == null ? void 0 : a._$AO) === null ||
        r === void 0 ||
        r.call(a, !1),
      c === void 0 ? (a = void 0) : ((a = new c(n)), a._$AT(n, e, s)),
      s !== void 0
        ? (((o = (l = e)._$Cl) !== null && o !== void 0 ? o : (l._$Cl = []))[
            s
          ] = a)
        : (e._$Cu = a)),
    a !== void 0 && (t = K(n, a._$AS(n, t.values), a, s)),
    t
  );
}
class Be {
  constructor(t, e) {
    (this.v = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = e);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t) {
    var e;
    const {
        el: { content: s },
        parts: i,
      } = this._$AD,
      r = (
        (e = t == null ? void 0 : t.creationScope) !== null && e !== void 0
          ? e
          : V
      ).importNode(s, !0);
    D.currentNode = r;
    let o = D.nextNode(),
      l = 0,
      a = 0,
      c = i[0];
    for (; c !== void 0; ) {
      if (l === c.index) {
        let h;
        c.type === 2
          ? (h = new st(o, o.nextSibling, this, t))
          : c.type === 1
          ? (h = new c.ctor(o, c.name, c.strings, this, t))
          : c.type === 6 && (h = new Ve(o, this, t)),
          this.v.push(h),
          (c = i[++a]);
      }
      l !== (c == null ? void 0 : c.index) && ((o = D.nextNode()), l++);
    }
    return r;
  }
  m(t) {
    let e = 0;
    for (const s of this.v)
      s !== void 0 &&
        (s.strings !== void 0
          ? (s._$AI(t, s, e), (e += s.strings.length - 2))
          : s._$AI(t[e])),
        e++;
  }
}
class st {
  constructor(t, e, s, i) {
    var r;
    (this.type = 2),
      (this._$AH = v),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = e),
      (this._$AM = s),
      (this.options = i),
      (this._$Cg =
        (r = i == null ? void 0 : i.isConnected) === null || r === void 0 || r);
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !==
      null && e !== void 0
      ? e
      : this._$Cg;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    (t = K(this, t, e)),
      et(t)
        ? t === v || t == null || t === ""
          ? (this._$AH !== v && this._$AR(), (this._$AH = v))
          : t !== this._$AH && t !== M && this.$(t)
        : t._$litType$ !== void 0
        ? this.T(t)
        : t.nodeType !== void 0
        ? this.k(t)
        : Ue(t)
        ? this.S(t)
        : this.$(t);
  }
  A(t, e = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, e);
  }
  k(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.A(t)));
  }
  $(t) {
    this._$AH !== v && et(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.k(V.createTextNode(t)),
      (this._$AH = t);
  }
  T(t) {
    var e;
    const { values: s, _$litType$: i } = t,
      r =
        typeof i == "number"
          ? this._$AC(t)
          : (i.el === void 0 && (i.el = nt.createElement(i.h, this.options)),
            i);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.m(s);
    else {
      const o = new Be(r, this),
        l = o.p(this.options);
      o.m(s), this.k(l), (this._$AH = o);
    }
  }
  _$AC(t) {
    let e = Qt.get(t.strings);
    return e === void 0 && Qt.set(t.strings, (e = new nt(t))), e;
  }
  S(t) {
    he(this._$AH) || ((this._$AH = []), this._$AR());
    const e = this._$AH;
    let s,
      i = 0;
    for (const r of t)
      i === e.length
        ? e.push((s = new st(this.A(tt()), this.A(tt()), this, this.options)))
        : (s = e[i]),
        s._$AI(r),
        i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), (e.length = i));
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for (
      (s = this._$AP) === null || s === void 0 || s.call(this, !1, !0, e);
      t && t !== this._$AB;

    ) {
      const i = t.nextSibling;
      t.remove(), (t = i);
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 &&
      ((this._$Cg = t),
      (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class pt {
  constructor(t, e, s, i, r) {
    (this.type = 1),
      (this._$AH = v),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = e),
      (this._$AM = i),
      (this.options = r),
      s.length > 2 || s[0] !== "" || s[1] !== ""
        ? ((this._$AH = Array(s.length - 1).fill(new String())),
          (this.strings = s))
        : (this._$AH = v);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let o = !1;
    if (r === void 0)
      (t = K(this, t, e, 0)),
        (o = !et(t) || (t !== this._$AH && t !== M)),
        o && (this._$AH = t);
    else {
      const l = t;
      let a, c;
      for (t = r[0], a = 0; a < r.length - 1; a++)
        (c = K(this, l[s + a], e, a)),
          c === M && (c = this._$AH[a]),
          o || (o = !et(c) || c !== this._$AH[a]),
          c === v ? (t = v) : t !== v && (t += (c ?? "") + r[a + 1]),
          (this._$AH[a] = c);
    }
    o && !i && this.C(t);
  }
  C(t) {
    t === v
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ie extends pt {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  C(t) {
    this.element[this.name] = t === v ? void 0 : t;
  }
}
const je = z ? z.emptyScript : "";
class De extends pt {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  C(t) {
    t && t !== v
      ? this.element.setAttribute(this.name, je)
      : this.element.removeAttribute(this.name);
  }
}
class ze extends pt {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), (this.type = 5);
  }
  _$AI(t, e = this) {
    var s;
    if ((t = (s = K(this, t, e, 0)) !== null && s !== void 0 ? s : v) === M)
      return;
    const i = this._$AH,
      r =
        (t === v && i !== v) ||
        t.capture !== i.capture ||
        t.once !== i.once ||
        t.passive !== i.passive,
      o = t !== v && (i === v || r);
    r && this.element.removeEventListener(this.name, this, i),
      o && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var e, s;
    typeof this._$AH == "function"
      ? this._$AH.call(
          (s =
            (e = this.options) === null || e === void 0 ? void 0 : e.host) !==
            null && s !== void 0
            ? s
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
class Ve {
  constructor(t, e, s) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = e),
      (this.options = s);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    K(this, t);
  }
}
const te = window.litHtmlPolyfillSupport;
te == null || te(nt, st),
  ((At = globalThis.litHtmlVersions) !== null && At !== void 0
    ? At
    : (globalThis.litHtmlVersions = [])
  ).push("2.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var wt, _t;
class ut extends j {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var t, e;
    const s = super.createRenderRoot();
    return (
      ((t = (e = this.renderOptions).renderBefore) !== null && t !== void 0) ||
        (e.renderBefore = s.firstChild),
      s
    );
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Dt = ke(e, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      (t = this._$Dt) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      (t = this._$Dt) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return M;
  }
}
(ut.finalized = !0),
  (ut._$litElement$ = !0),
  (wt = globalThis.litElementHydrateSupport) === null ||
    wt === void 0 ||
    wt.call(globalThis, { LitElement: ut });
const ee = globalThis.litElementPolyfillSupport;
ee == null || ee({ LitElement: ut });
((_t = globalThis.litElementVersions) !== null && _t !== void 0
  ? _t
  : (globalThis.litElementVersions = [])
).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ts = (n) => (t) =>
  typeof t == "function"
    ? ((e, s) => (window.customElements.define(e, s), s))(n, t)
    : ((e, s) => {
        const { kind: i, elements: r } = s;
        return {
          kind: i,
          elements: r,
          finisher(o) {
            window.customElements.define(e, o);
          },
        };
      })(n, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ke = (n, t) =>
  t.kind === "method" && t.descriptor && !("value" in t.descriptor)
    ? {
        ...t,
        finisher(e) {
          e.createProperty(t.key, n);
        },
      }
    : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: t.key,
        initializer() {
          typeof t.initializer == "function" &&
            (this[t.key] = t.initializer.call(this));
        },
        finisher(e) {
          e.createProperty(t.key, n);
        },
      };
function es(n) {
  return (t, e) =>
    e !== void 0
      ? ((s, i, r) => {
          i.constructor.createProperty(r, s);
        })(n, t, e)
      : Ke(n, t);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var bt;
((bt = window.HTMLSlotElement) === null || bt === void 0
  ? void 0
  : bt.prototype.assignedElements) != null;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const qe = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  We =
    (n) =>
    (...t) => ({ _$litDirective$: n, values: t });
class Fe {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    (this._$Ct = t), (this._$AM = e), (this._$Ci = s);
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class Ct extends Fe {
  constructor(t) {
    if ((super(t), (this.it = v), t.type !== qe.CHILD))
      throw Error(
        this.constructor.directiveName + "() can only be used in child bindings"
      );
  }
  render(t) {
    if (t === v || t == null) return (this.ft = void 0), (this.it = t);
    if (t === M) return t;
    if (typeof t != "string")
      throw Error(
        this.constructor.directiveName + "() called with a non-string value"
      );
    if (t === this.it) return this.ft;
    this.it = t;
    const e = [t];
    return (
      (e.raw = e),
      (this.ft = {
        _$litType$: this.constructor.resultType,
        strings: e,
        values: [],
      })
    );
  }
}
(Ct.directiveName = "unsafeHTML"), (Ct.resultType = 1);
const ns = We(Ct),
  Je = (n, t) => n === t,
  Xe = Symbol("solid-proxy"),
  ft = { equals: Je };
let de = ve;
const q = {},
  R = 1,
  Lt = 2,
  pe = { owned: null, cleanups: null, context: null, owner: null },
  [Ge, ss] = N(!1);
var y = null;
let it = null,
  m = null,
  Y = null,
  b = null,
  x = null,
  Ut = 0;
function ge(n, t) {
  const e = m,
    s = y,
    i =
      n.length === 0
        ? pe
        : { owned: null, cleanups: null, context: null, owner: t || s };
  (y = i), (m = null);
  try {
    return $t(() => n(() => It(i)), !0);
  } finally {
    (m = e), (y = s);
  }
}
function N(n, t) {
  t = t ? Object.assign({}, ft, t) : ft;
  const e = {
      value: n,
      observers: null,
      observerSlots: null,
      pending: q,
      comparator: t.equals || void 0,
    },
    s = (i) => (
      typeof i == "function" && (i = i(e.pending !== q ? e.pending : e.value)),
      Mt(e, i)
    );
  return [me.bind(e), s];
}
function Pt(n, t, e) {
  const s = gt(n, t, !0, R);
  F(s);
}
function U(n, t, e) {
  const s = gt(n, t, !1, R);
  F(s);
}
function is(n, t, e) {
  de = ln;
  const s = gt(n, t, !1, R);
  (s.user = !0), x ? x.push(s) : queueMicrotask(() => F(s));
}
function w(n, t, e) {
  e = e ? Object.assign({}, ft, e) : ft;
  const s = gt(n, t, !0, 0);
  return (
    (s.pending = q),
    (s.observers = null),
    (s.observerSlots = null),
    (s.comparator = e.equals || void 0),
    F(s),
    me.bind(s)
  );
}
function Ye(n, t, e) {
  arguments.length === 2
    ? typeof t == "object" && ((e = t), (t = n), (n = !0))
    : arguments.length === 1 && ((t = n), (n = !0)),
    e || (e = {}),
    e.globalRefetch !== !1 &&
      (at || (at = new Set()), at.add(H), y && Ht(() => at.delete(H)));
  const s = new Set(),
    [i, r] = N(e.initialValue),
    [o, l] = N(void 0, { equals: !1 }),
    [a, c] = N(!1),
    [h, u] = N();
  let f,
    d = null,
    A = null,
    _ = !1,
    P = typeof n == "function";
  function E(g, p, $, S) {
    return (
      d === g &&
        ((d = null),
        A && g === A && e.onHydrated && e.onHydrated(S, { value: p }),
        (A = null),
        u((f = $)),
        rt(p)),
      p
    );
  }
  function rt(g) {
    dt(() => {
      r(() => g), c(!1);
      for (const p of s.keys()) p.decrement();
      s.clear();
    });
  }
  function J() {
    const g = sn,
      p = i();
    if (f) throw f;
    return (
      m &&
        !m.user &&
        g &&
        Pt(() => {
          o(), d && (g.resolved || s.has(g) || (g.increment(), s.add(g)));
        }),
      p
    );
  }
  function H(g = !0) {
    if (g && _) return;
    (_ = !1), u((f = void 0));
    const p = P ? n() : n;
    if (p == null || p === !1) {
      E(d, T(i));
      return;
    }
    const $ = A || T(() => t(p, { value: i(), refetching: g }));
    return typeof $ != "object" || !("then" in $)
      ? (E(d, $), $)
      : ((d = $),
        (_ = !0),
        queueMicrotask(() => (_ = !1)),
        dt(() => {
          c(!0), l();
        }),
        $.then(
          (S) => E($, S, void 0, p),
          (S) => E($, S, S)
        ));
  }
  return (
    Object.defineProperties(J, {
      loading: {
        get() {
          return a();
        },
      },
      error: {
        get() {
          return h();
        },
      },
    }),
    P ? Pt(() => H(!1)) : H(!1),
    [J, { refetch: H, mutate: r }]
  );
}
let at;
function dt(n) {
  if (Y) return n();
  let t;
  const e = (Y = []);
  try {
    t = n();
  } finally {
    Y = null;
  }
  return (
    $t(() => {
      for (let s = 0; s < e.length; s += 1) {
        const i = e[s];
        if (i.pending !== q) {
          const r = i.pending;
          (i.pending = q), Mt(i, r);
        }
      }
    }, !1),
    t
  );
}
function T(n) {
  let t,
    e = m;
  return (m = null), (t = n()), (m = e), t;
}
function $e(n, t, e) {
  const s = Array.isArray(n);
  let i,
    r = e && e.defer;
  return (o) => {
    let l;
    if (s) {
      l = [];
      for (let c = 0; c < n.length; c++) l.push(n[c]());
    } else l = n();
    if (r) {
      r = !1;
      return;
    }
    const a = T(() => t(l, i, o));
    return (i = l), a;
  };
}
function Ht(n) {
  return (
    y === null ||
      (y.cleanups === null ? (y.cleanups = [n]) : y.cleanups.push(n)),
    n
  );
}
function Ze() {
  return y;
}
function Qe(n, t) {
  const e = y;
  y = n;
  try {
    return $t(t, !0);
  } finally {
    y = e;
  }
}
function tn(n) {
  const t = m,
    e = y;
  return Promise.resolve().then(() => {
    (m = t), (y = e);
    let s;
    return dt(n), s ? s.done : void 0;
  });
}
function en() {
  return [Ge, tn];
}
function ye(n) {
  const t = Symbol("context");
  return { id: t, Provider: an(t), defaultValue: n };
}
function kt(n) {
  return _e(y, n.id) || n.defaultValue;
}
function nn(n) {
  const t = w(n);
  return w(() => xt(t()));
}
let sn;
function me() {
  const n = it;
  if (this.sources && (this.state || n)) {
    const t = b;
    (b = null), this.state === R || n ? F(this) : Bt(this), (b = t);
  }
  if (m) {
    const t = this.observers ? this.observers.length : 0;
    m.sources
      ? (m.sources.push(this), m.sourceSlots.push(t))
      : ((m.sources = [this]), (m.sourceSlots = [t])),
      this.observers
        ? (this.observers.push(m),
          this.observerSlots.push(m.sources.length - 1))
        : ((this.observers = [m]),
          (this.observerSlots = [m.sources.length - 1]));
  }
  return this.value;
}
function Mt(n, t, e) {
  if (n.comparator && n.comparator(n.value, t)) return t;
  if (Y) return n.pending === q && Y.push(n), (n.pending = t), t;
  let s = !1;
  return (
    (n.value = t),
    n.observers &&
      n.observers.length &&
      $t(() => {
        for (let i = 0; i < n.observers.length; i += 1) {
          const r = n.observers[i];
          s && it.disposed.has(r),
            r.pure ? b.push(r) : x.push(r),
            r.observers && ((s && !r.tState) || (!s && !r.state)) && Ae(r),
            s || (r.state = R);
        }
        if (b.length > 1e6) throw ((b = []), new Error());
      }, !1),
    t
  );
}
function F(n) {
  if (!n.fn) return;
  It(n);
  const t = y,
    e = m,
    s = Ut;
  (m = y = n), rn(n, n.value, s), (m = e), (y = t);
}
function rn(n, t, e) {
  let s;
  try {
    s = n.fn(t);
  } catch (i) {
    we(i);
  }
  (!n.updatedAt || n.updatedAt <= e) &&
    (n.observers && n.observers.length ? Mt(n, s) : (n.value = s),
    (n.updatedAt = e));
}
function gt(n, t, e, s = R, i) {
  const r = {
    fn: n,
    state: s,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: y,
    context: null,
    pure: e,
  };
  return (
    y === null || (y !== pe && (y.owned ? y.owned.push(r) : (y.owned = [r]))), r
  );
}
function Z(n) {
  const t = it;
  if (n.state !== R) return (n.state = 0);
  if (n.suspense && T(n.suspense.inFallback)) return n.suspense.effects.push(n);
  const e = [n];
  for (; (n = n.owner) && (!n.updatedAt || n.updatedAt < Ut); )
    (n.state || t) && e.push(n);
  for (let s = e.length - 1; s >= 0; s--)
    if (((n = e[s]), n.state === R || t)) F(n);
    else if (n.state === Lt || t) {
      const i = b;
      (b = null), Bt(n, e[0]), (b = i);
    }
}
function $t(n, t) {
  if (b) return n();
  let e = !1;
  t || (b = []), x ? (e = !0) : (x = []), Ut++;
  try {
    return n();
  } catch (s) {
    we(s);
  } finally {
    on(e);
  }
}
function on(n) {
  b && (ve(b), (b = null)),
    !n &&
      (x.length
        ? dt(() => {
            de(x), (x = null);
          })
        : (x = null));
}
function ve(n) {
  for (let t = 0; t < n.length; t++) Z(n[t]);
}
function ln(n) {
  let t,
    e = 0;
  for (t = 0; t < n.length; t++) {
    const i = n[t];
    i.user ? (n[e++] = i) : Z(i);
  }
  const s = n.length;
  for (t = 0; t < e; t++) Z(n[t]);
  for (t = s; t < n.length; t++) Z(n[t]);
}
function Bt(n, t) {
  n.state = 0;
  const e = it;
  for (let s = 0; s < n.sources.length; s += 1) {
    const i = n.sources[s];
    i.sources &&
      (i.state === R || e
        ? i !== t && Z(i)
        : (i.state === Lt || e) && Bt(i, t));
  }
}
function Ae(n) {
  const t = it;
  for (let e = 0; e < n.observers.length; e += 1) {
    const s = n.observers[e];
    (!s.state || t) &&
      ((s.state = Lt), s.pure ? b.push(s) : x.push(s), s.observers && Ae(s));
  }
}
function It(n) {
  let t;
  if (n.sources)
    for (; n.sources.length; ) {
      const e = n.sources.pop(),
        s = n.sourceSlots.pop(),
        i = e.observers;
      if (i && i.length) {
        const r = i.pop(),
          o = e.observerSlots.pop();
        s < i.length &&
          ((r.sourceSlots[o] = s), (i[s] = r), (e.observerSlots[s] = o));
      }
    }
  if (n.owned) {
    for (t = 0; t < n.owned.length; t++) It(n.owned[t]);
    n.owned = null;
  }
  if (n.cleanups) {
    for (t = 0; t < n.cleanups.length; t++) n.cleanups[t]();
    n.cleanups = null;
  }
  (n.state = 0), (n.context = null);
}
function we(n) {
  throw n;
}
function _e(n, t) {
  return (
    n &&
    (n.context && n.context[t] !== void 0
      ? n.context[t]
      : n.owner && _e(n.owner, t))
  );
}
function xt(n) {
  if (typeof n == "function" && !n.length) return xt(n());
  if (Array.isArray(n)) {
    const t = [];
    for (let e = 0; e < n.length; e++) {
      const s = xt(n[e]);
      Array.isArray(s) ? t.push.apply(t, s) : t.push(s);
    }
    return t;
  }
  return n;
}
function an(n) {
  return function (e) {
    let s;
    return (
      Pt(
        () =>
          (s = T(() => ((y.context = { [n]: e.value }), nn(() => e.children))))
      ),
      s
    );
  };
}
function O(n, t) {
  return T(() => n(t));
}
function ct() {
  return !0;
}
const be = {
  get(n, t, e) {
    return t === Xe ? e : n.get(t);
  },
  has(n, t) {
    return n.has(t);
  },
  set: ct,
  deleteProperty: ct,
  getOwnPropertyDescriptor(n, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return n.get(t);
      },
      set: ct,
      deleteProperty: ct,
    };
  },
  ownKeys(n) {
    return n.keys();
  },
};
function Et(n) {
  return typeof n == "function" ? n() : n;
}
function cn(...n) {
  return new Proxy(
    {
      get(t) {
        for (let e = n.length - 1; e >= 0; e--) {
          const s = Et(n[e])[t];
          if (s !== void 0) return s;
        }
      },
      has(t) {
        for (let e = n.length - 1; e >= 0; e--) if (t in Et(n[e])) return !0;
        return !1;
      },
      keys() {
        const t = [];
        for (let e = 0; e < n.length; e++) t.push(...Object.keys(Et(n[e])));
        return [...new Set(t)];
      },
    },
    be
  );
}
function un(n, ...t) {
  const e = new Set(t.flat()),
    s = Object.getOwnPropertyDescriptors(n),
    i = t.map((r) => {
      const o = {};
      for (let l = 0; l < r.length; l++) {
        const a = r[l];
        Object.defineProperty(
          o,
          a,
          s[a]
            ? s[a]
            : {
                get() {
                  return n[a];
                },
                set() {
                  return !0;
                },
              }
        );
      }
      return o;
    });
  return (
    i.push(
      new Proxy(
        {
          get(r) {
            return e.has(r) ? void 0 : n[r];
          },
          has(r) {
            return e.has(r) ? !1 : r in n;
          },
          keys() {
            return Object.keys(n).filter((r) => !e.has(r));
          },
        },
        be
      )
    ),
    i
  );
}
function rs(n) {
  let t, e;
  const s = (i) => {
    if (t) {
      const o = t();
      if (o) return o(i);
    } else {
      const [o] = Ye(() => (e || (e = n())).then((l) => l.default), {
        globalRefetch: !1,
      });
      t = o;
    }
    let r;
    return w(() => (r = t()) && T(() => r(i)));
  };
  return (
    (s.preload = () => e || ((e = n()).then((i) => (t = () => i.default)), e)),
    s
  );
}
function Ee(n) {
  let t = !1;
  const e = w(() => n.when, void 0, {
    equals: (s, i) => (t ? s === i : !s == !i),
  });
  return w(() => {
    const s = e();
    if (s) {
      const i = n.children;
      return (t = typeof i == "function" && i.length > 0) ? T(() => i(s)) : i;
    }
    return n.fallback;
  });
}
const hn = [
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "disabled",
    "formnovalidate",
    "hidden",
    "indeterminate",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "seamless",
    "selected",
  ],
  fn = new Set([
    "className",
    "value",
    "readOnly",
    "formNoValidate",
    "isMap",
    "noModule",
    "playsInline",
    ...hn,
  ]),
  dn = new Set(["innerHTML", "textContent", "innerText", "children"]),
  pn = { className: "class", htmlFor: "for" },
  ne = {
    class: "className",
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
  },
  gn = new Set([
    "beforeinput",
    "click",
    "dblclick",
    "focusin",
    "focusout",
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "pointerdown",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "touchend",
    "touchmove",
    "touchstart",
  ]),
  $n = {
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
  };
function yn(n, t, e) {
  let s = e.length,
    i = t.length,
    r = s,
    o = 0,
    l = 0,
    a = t[i - 1].nextSibling,
    c = null;
  for (; o < i || l < r; ) {
    if (t[o] === e[l]) {
      o++, l++;
      continue;
    }
    for (; t[i - 1] === e[r - 1]; ) i--, r--;
    if (i === o) {
      const h = r < s ? (l ? e[l - 1].nextSibling : e[r - l]) : a;
      for (; l < r; ) n.insertBefore(e[l++], h);
    } else if (r === l)
      for (; o < i; ) (!c || !c.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === e[r - 1] && e[l] === t[i - 1]) {
      const h = t[--i].nextSibling;
      n.insertBefore(e[l++], t[o++].nextSibling),
        n.insertBefore(e[--r], h),
        (t[i] = e[r]);
    } else {
      if (!c) {
        c = new Map();
        let u = l;
        for (; u < r; ) c.set(e[u], u++);
      }
      const h = c.get(t[o]);
      if (h != null)
        if (l < h && h < r) {
          let u = o,
            f = 1,
            d;
          for (
            ;
            ++u < i && u < r && !((d = c.get(t[u])) == null || d !== h + f);

          )
            f++;
          if (f > h - l) {
            const A = t[o];
            for (; l < h; ) n.insertBefore(e[l++], A);
          } else n.replaceChild(e[l++], t[o++]);
        } else o++;
      else t[o++].remove();
    }
  }
}
const se = "_$DX_DELEGATE";
function os(n, t, e) {
  let s;
  return (
    ge((i) => {
      (s = i),
        t === document ? n() : Se(t, n(), t.firstChild ? null : void 0, e);
    }),
    () => {
      s(), (t.textContent = "");
    }
  );
}
function mn(n, t, e) {
  const s = document.createElement("template");
  s.innerHTML = n;
  let i = s.content.firstChild;
  return e && (i = i.firstChild), i;
}
function vn(n, t = window.document) {
  const e = t[se] || (t[se] = new Set());
  for (let s = 0, i = n.length; s < i; s++) {
    const r = n[s];
    e.has(r) || (e.add(r), t.addEventListener(r, Pn));
  }
}
function Tt(n, t, e) {
  e == null ? n.removeAttribute(t) : n.setAttribute(t, e);
}
function An(n, t, e, s) {
  s == null ? n.removeAttributeNS(t, e) : n.setAttributeNS(t, e, s);
}
function wn(n, t, e, s) {
  s
    ? Array.isArray(e)
      ? ((n[`$$${t}`] = e[0]), (n[`$$${t}Data`] = e[1]))
      : (n[`$$${t}`] = e)
    : Array.isArray(e)
    ? n.addEventListener(t, (i) => e[0](e[1], i))
    : n.addEventListener(t, e);
}
function _n(n, t, e = {}) {
  const s = Object.keys(t || {}),
    i = Object.keys(e);
  let r, o;
  for (r = 0, o = i.length; r < o; r++) {
    const l = i[r];
    !l || l === "undefined" || t[l] || (ie(n, l, !1), delete e[l]);
  }
  for (r = 0, o = s.length; r < o; r++) {
    const l = s[r],
      a = !!t[l];
    !l || l === "undefined" || e[l] === a || !a || (ie(n, l, !0), (e[l] = a));
  }
  return e;
}
function bn(n, t, e = {}) {
  const s = n.style;
  if (t == null || typeof t == "string") return (s.cssText = t);
  typeof e == "string" && (e = {});
  let i, r;
  for (r in e) t[r] == null && s.removeProperty(r), delete e[r];
  for (r in t) (i = t[r]), i !== e[r] && (s.setProperty(r, i), (e[r] = i));
  return e;
}
function En(n, t, e, s) {
  typeof t == "function"
    ? U((i) => oe(n, t(), i, e, s))
    : oe(n, t, void 0, e, s);
}
function Se(n, t, e, s) {
  if ((e !== void 0 && !s && (s = []), typeof t != "function"))
    return W(n, t, s, e);
  U((i) => W(n, t(), i, e), s);
}
function Sn(n, t, e, s, i = {}) {
  for (const r in i)
    if (!(r in t)) {
      if (r === "children") continue;
      re(n, r, null, i[r], e);
    }
  for (const r in t) {
    if (r === "children") {
      s || W(n, t.children);
      continue;
    }
    const o = t[r];
    i[r] = re(n, r, o, i[r], e);
  }
}
function Cn(n) {
  return n.toLowerCase().replace(/-([a-z])/g, (t, e) => e.toUpperCase());
}
function ie(n, t, e) {
  const s = t.trim().split(/\s+/);
  for (let i = 0, r = s.length; i < r; i++) n.classList.toggle(s[i], e);
}
function re(n, t, e, s, i) {
  let r, o, l;
  if (t === "style") return bn(n, e, s);
  if (t === "classList") return _n(n, e, s);
  if (e === s) return s;
  if (t === "ref") e(n);
  else if (t.slice(0, 3) === "on:") n.addEventListener(t.slice(3), e);
  else if (t.slice(0, 10) === "oncapture:")
    n.addEventListener(t.slice(10), e, !0);
  else if (t.slice(0, 2) === "on") {
    const a = t.slice(2).toLowerCase(),
      c = gn.has(a);
    wn(n, a, e, c), c && vn([a]);
  } else if (
    (l = dn.has(t)) ||
    (!i && (ne[t] || (o = fn.has(t)))) ||
    (r = n.nodeName.includes("-"))
  )
    r && !o && !l ? (n[Cn(t)] = e) : (n[ne[t] || t] = e);
  else {
    const a = i && t.indexOf(":") > -1 && $n[t.split(":")[0]];
    a ? An(n, a, t, e) : Tt(n, pn[t] || t, e);
  }
  return e;
}
function Pn(n) {
  const t = `$$${n.type}`;
  let e = (n.composedPath && n.composedPath()[0]) || n.target;
  for (
    n.target !== e &&
      Object.defineProperty(n, "target", { configurable: !0, value: e }),
      Object.defineProperty(n, "currentTarget", {
        configurable: !0,
        get() {
          return e || document;
        },
      });
    e !== null;

  ) {
    const s = e[t];
    if (s && !e.disabled) {
      const i = e[`${t}Data`];
      if ((i !== void 0 ? s(i, n) : s(n), n.cancelBubble)) return;
    }
    e =
      e.host && e.host !== e && e.host instanceof Node ? e.host : e.parentNode;
  }
}
function oe(n, t, e = {}, s, i) {
  return (
    !i &&
      "children" in t &&
      U(() => (e.children = W(n, t.children, e.children))),
    U(() => Sn(n, t, s, !0, e)),
    e
  );
}
function W(n, t, e, s, i) {
  for (; typeof e == "function"; ) e = e();
  if (t === e) return e;
  const r = typeof t,
    o = s !== void 0;
  if (
    ((n = (o && e[0] && e[0].parentNode) || n),
    r === "string" || r === "number")
  )
    if ((r === "number" && (t = t.toString()), o)) {
      let l = e[0];
      l && l.nodeType === 3 ? (l.data = t) : (l = document.createTextNode(t)),
        (e = I(n, e, s, l));
    } else
      e !== "" && typeof e == "string"
        ? (e = n.firstChild.data = t)
        : (e = n.textContent = t);
  else if (t == null || r === "boolean") e = I(n, e, s);
  else {
    if (r === "function")
      return (
        U(() => {
          let l = t();
          for (; typeof l == "function"; ) l = l();
          e = W(n, l, e, s);
        }),
        () => e
      );
    if (Array.isArray(t)) {
      const l = [];
      if (Nt(l, t, i)) return U(() => (e = W(n, l, e, s, !0))), () => e;
      if (l.length === 0) {
        if (((e = I(n, e, s)), o)) return e;
      } else
        Array.isArray(e)
          ? e.length === 0
            ? le(n, l, s)
            : yn(n, e, l)
          : (e && I(n), le(n, l));
      e = l;
    } else if (t instanceof Node) {
      if (Array.isArray(e)) {
        if (o) return (e = I(n, e, s, t));
        I(n, e, null, t);
      } else
        e == null || e === "" || !n.firstChild
          ? n.appendChild(t)
          : n.replaceChild(t, n.firstChild);
      e = t;
    }
  }
  return e;
}
function Nt(n, t, e) {
  let s = !1;
  for (let i = 0, r = t.length; i < r; i++) {
    let o = t[i],
      l;
    if (o instanceof Node) n.push(o);
    else if (!(o == null || o === !0 || o === !1))
      if (Array.isArray(o)) s = Nt(n, o) || s;
      else if ((l = typeof o) == "string") n.push(document.createTextNode(o));
      else if (l === "function")
        if (e) {
          for (; typeof o == "function"; ) o = o();
          s = Nt(n, Array.isArray(o) ? o : [o]) || s;
        } else n.push(o), (s = !0);
      else n.push(document.createTextNode(o.toString()));
  }
  return s;
}
function le(n, t, e) {
  for (let s = 0, i = t.length; s < i; s++) n.insertBefore(t[s], e);
}
function I(n, t, e, s) {
  if (e === void 0) return (n.textContent = "");
  const i = s || document.createTextNode("");
  if (t.length) {
    let r = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const l = t[o];
      if (i !== l) {
        const a = l.parentNode === n;
        !r && !o
          ? a
            ? n.replaceChild(i, l)
            : n.insertBefore(i, e)
          : a && l.remove();
      } else r = !0;
    }
  } else n.insertBefore(i, e);
  return [i];
}
function xn(n, t, e) {
  return n.addEventListener(t, e), () => n.removeEventListener(t, e);
}
function Tn([n, t], e, s) {
  return [e ? () => e(n()) : n, s ? (i) => t(s(i)) : t];
}
function Nn(n, t, e, s) {
  let i = !1;
  const r = (l) => (typeof l == "string" ? { value: l } : l),
    o = Tn(
      N(r(n()), { equals: (l, a) => l.value === a.value }),
      void 0,
      (l) => (!i && t(l), l)
    );
  return (
    e &&
      Ht(
        e((l = n()) => {
          (i = !0), o[1](r(l)), (i = !1);
        })
      ),
    { signal: o, utils: s }
  );
}
function Rn(n) {
  if (n) {
    if (Array.isArray(n)) return { signal: n };
  } else return { signal: N({ value: "" }) };
  return n;
}
function On() {
  return Nn(
    () => ({
      value:
        window.location.pathname +
        window.location.search +
        window.location.hash,
      state: history.state,
    }),
    ({ value: n, replace: t, scroll: e, state: s }) => {
      t
        ? window.history.replaceState(s, "", n)
        : window.history.pushState(s, "", n),
        e && window.scrollTo(0, 0);
    },
    (n) => xn(window, "popstate", () => n()),
    { go: (n) => window.history.go(n) }
  );
}
const Ln = /^(?:[a-z0-9]+:)?\/\//i,
  Un = /^\/+|\/+$|\s+/g;
function Q(n) {
  const t = n.replace(Un, "");
  return t ? (t.startsWith("?") ? t : "/" + t) : "";
}
function ht(n, t, e) {
  if (Ln.test(t)) return;
  const s = Q(n),
    i = e && Q(e);
  let r = "";
  return (
    !i || t.charAt(0) === "/"
      ? (r = s)
      : i.toLowerCase().indexOf(s.toLowerCase()) !== 0
      ? (r = s + i)
      : (r = i),
    r + Q(t) || "/"
  );
}
function Hn(n, t) {
  if (n == null) throw new Error(t);
  return n;
}
function Ce(n, t) {
  return Q(n).replace(/\/*(\*.*)?$/g, "") + Q(t);
}
function kn(n) {
  const t = {};
  return (
    n.searchParams.forEach((e, s) => {
      t[s] = e;
    }),
    t
  );
}
function Mn(n, t) {
  const [e, s] = n.split("/*", 2),
    i = e.split("/").filter(Boolean),
    r = i.length;
  return (o) => {
    const l = o.split("/").filter(Boolean),
      a = l.length - r;
    if (a < 0 || (a > 0 && s === void 0 && !t)) return null;
    const c = { path: r ? "" : "/", params: {} };
    for (let h = 0; h < r; h++) {
      const u = i[h],
        f = l[h];
      if (u[0] === ":") c.params[u.slice(1)] = f;
      else if (u.localeCompare(f, void 0, { sensitivity: "base" }) !== 0)
        return null;
      c.path += `/${f}`;
    }
    return s && (c.params[s] = a ? l.slice(-a).join("/") : ""), c;
  };
}
function Bn(n) {
  const [t, e] = n.pattern.split("/*", 2),
    s = t.split("/").filter(Boolean);
  return s.reduce(
    (i, r) => i + (r.startsWith(":") ? 2 : 3),
    s.length - (e === void 0 ? 0 : 1)
  );
}
function Pe(n) {
  const t = new Map(),
    e = Ze();
  return new Proxy(
    {},
    {
      get(s, i) {
        return (
          t.has(i) ||
            Qe(e, () =>
              t.set(
                i,
                w(() => n()[i])
              )
            ),
          t.get(i)()
        );
      },
      getOwnPropertyDescriptor() {
        return { enumerable: !0, configurable: !0 };
      },
      ownKeys() {
        return Reflect.ownKeys(n());
      },
    }
  );
}
const In = 100,
  xe = ye(),
  yt = ye(),
  jt = () => Hn(kt(xe), "Make sure your app is wrapped in a <Router />"),
  Dt = () => kt(yt) || jt().base,
  jn = (n) => {
    const t = Dt();
    return w(() => t.resolvePath(n()));
  },
  Dn = (n) => {
    const t = jt();
    return w(() => {
      const e = n();
      return e !== void 0 ? t.renderPath(e) : e;
    });
  };
function zn(n, t = "", e) {
  const { path: s, component: i, data: r, children: o } = n,
    l = !o || (Array.isArray(o) && !o.length),
    a = Ce(t, s),
    c = l ? a : a.split("/*", 1)[0];
  return {
    originalPath: s,
    pattern: c,
    element: i
      ? () => O(i, {})
      : () => {
          const { element: h } = n;
          return h === void 0 && e ? O(e, {}) : h;
        },
    preload: n.component ? i.preload : n.preload,
    data: r,
    matcher: Mn(c, !l),
  };
}
function Vn(n, t = 0) {
  return {
    routes: n,
    score: Bn(n[n.length - 1]) * 1e4 - t,
    matcher(e) {
      const s = [];
      for (let i = n.length - 1; i >= 0; i--) {
        const r = n[i],
          o = r.matcher(e);
        if (!o) return null;
        s.unshift({ ...o, route: r });
      }
      return s;
    },
  };
}
function Te(n, t = "", e, s = [], i = []) {
  const r = Array.isArray(n) ? n : [n];
  for (let o = 0, l = r.length; o < l; o++) {
    const a = r[o];
    if (a && typeof a == "object" && a.hasOwnProperty("path")) {
      const c = zn(a, t, e);
      if ((s.push(c), a.children)) Te(a.children, c.pattern, e, s, i);
      else {
        const h = Vn([...s], i.length);
        i.push(h);
      }
      s.pop();
    }
  }
  return s.length ? i : i.sort((o, l) => l.score - o.score);
}
function Kn(n, t) {
  for (let e = 0, s = n.length; e < s; e++) {
    const i = n[e].matcher(t);
    if (i) return i;
  }
  return [];
}
function qn(n, t) {
  const e = new URL("http://sar"),
    s = w(
      (a) => {
        const c = n();
        try {
          return new URL(c, e);
        } catch {
          return console.error(`Invalid path ${c}`), a;
        }
      },
      e,
      { equals: (a, c) => a.href === c.href }
    ),
    i = w(() => s().pathname),
    r = w(() => s().search.slice(1)),
    o = w(() => s().hash.slice(1)),
    l = w(() => "");
  return {
    get pathname() {
      return i();
    },
    get search() {
      return r();
    },
    get hash() {
      return o();
    },
    get state() {
      return t();
    },
    get key() {
      return l();
    },
    query: Pe($e(r, () => kn(s()))),
  };
}
function Wn(n, t = "", e, s) {
  const {
      signal: [i, r],
      utils: o = {},
    } = Rn(n),
    l = ht("", t),
    a = void 0;
  if (l === void 0) throw new Error(`${l} is not a valid base path`);
  l && !i().value && r({ value: l, replace: !0, scroll: !1 });
  const [c, h] = en(),
    [u, f] = N(i().value),
    [d, A] = N(i().state),
    _ = qn(u, d),
    P = [],
    E = {
      pattern: l,
      params: {},
      path: () => l,
      outlet: () => null,
      resolvePath(g) {
        return ht(l, g);
      },
    };
  E.data = e && e({ data: void 0, params: {}, location: _, navigate: J(E) });
  function rt(g, p, $) {
    T(() => {
      if (typeof p == "number") {
        p &&
          (o.go
            ? o.go(p)
            : console.warn(
                "Router integration does not support relative routing"
              ));
        return;
      }
      const {
          replace: S,
          resolve: X,
          scroll: zt,
          state: B,
        } = { replace: !1, resolve: !0, scroll: !0, ...$ },
        C = X ? g.resolvePath(p) : ht("", p);
      if (C === void 0) throw new Error(`Path '${p}' is not a routable path`);
      if (P.length >= In) throw new Error("Too many redirects");
      const ot = u();
      if (C !== ot || B !== d()) {
        const lt = P.push({ value: ot, replace: S, scroll: zt, state: d });
        h(() => {
          f(C), A(B);
        }).then(() => {
          P.length === lt && H({ value: C, state: B });
        });
      }
    });
  }
  function J(g) {
    return (g = g || kt(yt) || E), (p, $) => rt(g, p, $);
  }
  function H(g) {
    const p = P[0];
    p &&
      ((g.value !== p.value || g.state !== p.state) &&
        r({ ...g, replace: p.replace, scroll: p.scroll }),
      (P.length = 0));
  }
  U(() => {
    const { value: g, state: p } = i();
    g !== T(u) &&
      h(() => {
        f(g), A(p);
      });
  });
  {
    let g = function (p) {
      if (
        p.defaultPrevented ||
        p.button !== 0 ||
        p.metaKey ||
        p.altKey ||
        p.ctrlKey ||
        p.shiftKey
      )
        return;
      const $ = p
        .composedPath()
        .find((Vt) => Vt instanceof Node && Vt.nodeName.toUpperCase() === "A");
      if (!$) return;
      const S = $ instanceof SVGAElement,
        X = S ? $.href.baseVal : $.href;
      if ((S ? $.target.baseVal : $.target) || (!X && !$.hasAttribute("state")))
        return;
      const B = ($.getAttribute("rel") || "").split(/\s+/);
      if ($.hasAttribute("download") || (B && B.includes("external"))) return;
      const C = S ? new URL(X, document.baseURI) : new URL(X);
      if (
        C.origin !== window.location.origin ||
        (l &&
          C.pathname &&
          !C.pathname.toLowerCase().startsWith(l.toLowerCase()))
      )
        return;
      const ot = C.pathname + C.search + C.hash,
        lt = $.getAttribute("state");
      p.preventDefault(),
        rt(E, ot, {
          resolve: !1,
          replace: $.hasAttribute("replace"),
          scroll: !$.hasAttribute("noscroll"),
          state: lt && JSON.parse(lt),
        });
    };
    document.addEventListener("click", g),
      Ht(() => document.removeEventListener("click", g));
  }
  return {
    base: E,
    out: a,
    location: _,
    isRouting: c,
    renderPath: o.renderPath || ((g) => g),
    navigatorFactory: J,
  };
}
function Fn(n, t, e, s) {
  const { base: i, location: r, navigatorFactory: o } = n,
    { pattern: l, element: a, preload: c, data: h } = s().route,
    u = w(() => s().path),
    f = Pe(() => s().params);
  c && c();
  const d = {
    parent: t,
    pattern: l,
    get child() {
      return e();
    },
    path: u,
    params: f,
    outlet: a,
    resolvePath(A) {
      return ht(i.path(), A, u());
    },
  };
  return (
    (d.data = h
      ? h({ data: t.data, params: f, location: r, navigate: o(d) })
      : t.data),
    d
  );
}
const Jn = mn("<a></a>"),
  ls = (n) => {
    const { source: t, url: e, base: s, data: i, out: r } = n,
      o = t || On(),
      l = Wn(o, s, i);
    return O(xe.Provider, {
      value: l,
      get children() {
        return n.children;
      },
    });
  },
  Xn = (n) => {
    const t = jt(),
      e = Dt(),
      s = w(() => Te(n.children, Ce(e.pattern, n.base || ""), Gn)),
      i = w(() => Kn(s(), t.location.pathname));
    t.out &&
      t.out.matches.push(
        i().map(({ route: a, path: c, params: h }) => ({
          originalPath: a.originalPath,
          pattern: a.pattern,
          path: c,
          params: h,
        }))
      );
    const r = [];
    let o;
    const l = w(
      $e(i, (a, c, h) => {
        let u = c && a.length === c.length;
        const f = [];
        for (let d = 0, A = a.length; d < A; d++) {
          const _ = c && c[d],
            P = a[d];
          h && _ && P.route.pattern === _.route.pattern
            ? (f[d] = h[d])
            : ((u = !1),
              r[d] && r[d](),
              ge((E) => {
                (r[d] = E),
                  (f[d] = Fn(
                    t,
                    f[d - 1] || e,
                    () => l()[d + 1],
                    () => i()[d]
                  ));
              }));
        }
        return (
          r.splice(a.length).forEach((d) => d()), h && u ? h : ((o = f[0]), f)
        );
      })
    );
    return O(Ee, {
      get when() {
        return l() && o;
      },
      children: (a) =>
        O(yt.Provider, {
          value: a,
          get children() {
            return a.outlet();
          },
        }),
    });
  },
  as = (n, t) => () => O(Xn, { base: t, children: n }),
  Gn = () => {
    const n = Dt();
    return O(Ee, {
      get when() {
        return n.child;
      },
      children: (t) =>
        O(yt.Provider, {
          value: t,
          get children() {
            return t.outlet();
          },
        }),
    });
  };
function Yn(n) {
  const [, t] = un(n, ["children", "to", "href", "state"]),
    e = Dn(() => n.to);
  return (() => {
    const s = Jn.cloneNode(!0);
    return (
      En(s, t, !1, !0),
      Se(s, () => n.children),
      U(
        (i) => {
          const r = e() || n.href,
            o = JSON.stringify(n.state);
          return (
            r !== i._v$ && Tt(s, "href", (i._v$ = r)),
            o !== i._v$2 && Tt(s, "state", (i._v$2 = o)),
            i
          );
        },
        { _v$: void 0, _v$2: void 0 }
      ),
      s
    );
  })();
}
function cs(n) {
  const t = jn(() => n.href);
  return O(
    Yn,
    cn(n, {
      get to() {
        return t();
      },
    })
  );
}
export {
  Qn as $,
  cs as L,
  Gn as O,
  ls as R,
  Ye as a,
  os as b,
  O as c,
  N as d,
  es as e,
  vn as f,
  is as g,
  Se as i,
  rs as l,
  ts as n,
  ns as o,
  Zn as r,
  ut as s,
  mn as t,
  as as u,
};
