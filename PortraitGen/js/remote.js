(function (g) {
    var window = this; 'use strict'; var wgb = function (a) { return a }, xgb = function (a, b) {
        this.u = a >>> 0;
        this.j = b >>> 0
    }, zgb = function (a) {
        if (!a) return ygb || (ygb = new xgb(0, 0));
        if (!/^\d+$/.test(a)) return null; g.Lba(a); return new xgb(g.ae, g.be)
    }, Agb = function (a, b, c) { null != c && ("string" === typeof c && zgb(c), g.De(a, b, 1), "number" === typeof c ? (a = a.j, b = c >>> 0, c = Math.floor((c - b) / 4294967296) >>> 0, g.ae = b, g.be = c, g.Be(a, g.ae), g.Be(a, g.be)) : (c = zgb(c), a = a.j, b = c.j, g.Be(a, c.u), g.Be(a, b))) }, Bgb = function (a, b, c) {
        b = g.uba(b, c);
        null != b && (g.De(a, c, 0), a.j.j.push(b ? 1 : 0))
    }, Dgb = function (a) { g.H.call(this, a, -1, Cgb) }, Egb = function (a) { g.H.call(this, a) }, Fgb = function (a) { g.H.call(this, a) }, Ggb = function (a) { g.H.call(this, a) }, Hgb = function (a) { g.H.call(this, a) }, Z7 = function (a) {
        g.Mj(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.Ta()).toString(36));
        return a
    }, $7 = function (a, b, c) {
        Array.isArray(c) || (c = [String(c)]);
        g.qga(a.u, b, c)
    }, Igb = function (a) {
        if (a instanceof g.Am) return a;
        if ("function" == typeof a.uj) return a.uj(!1); if (g.Ma(a)) {
            var b = 0, c = new g.Am; c.next = function () { for (; ;) { if (b >= a.length) return g.F2; if (b in a) return g.Bm(a[b++]); b++ } };
            return c
        } throw Error("Not implemented");
    }, Jgb = function (a, b, c) {
        if (g.Ma(a)) g.sc(a, b, c);
        else for (a = Igb(a); ;) { var d = a.next(); if (d.done) break; b.call(c, d.value, void 0, a) }
    }, Kgb = function (a, b) {
        var c = [];
        Jgb(b, function (d) { try { var e = g.To.prototype.u.call(this, d, !0) } catch (f) { if ("Storage: Invalid value was encountered" == f) return; throw f; } void 0 === e ? c.push(d) : g.ala(e) && c.push(d) }, a);
        return c
    }, Lgb = function (a, b) { Kgb(a, b).forEach(function (c) { g.To.prototype.remove.call(this, c) }, a) }, Mgb = function (a) {
        if (a.oa) {
            if (a.oa.locationOverrideToken) return { locationOverrideToken: a.oa.locationOverrideToken };
            if (null != a.oa.latitudeE7 && null != a.oa.longitudeE7) return { latitudeE7: a.oa.latitudeE7, longitudeE7: a.oa.longitudeE7 }
        } return null
    }, Ngb = function (a, b) { g.Tb(a, b) || a.push(b) }, Ogb = function (a) {
        var b = 0, c;
        for (c in a) b++; return b
    }, Pgb = function (a, b) { return g.rf(a, b) }, Qgb = function (a) {
        try { return g.Da.JSON.parse(a) } catch (b) { } a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try { return eval("(" + a + ")") } catch (b) { } throw Error("Invalid JSON string: " + a);
    }, a8 = function (a) { if (g.Da.JSON) try { return g.Da.JSON.parse(a) } catch (b) { } return Qgb(a) }, Rgb = function (a, b, c, d) {
        var e = new g.Ej(null);
        a && g.Fj(e, a); b && g.Gj(e, b); c && g.Hj(e, c); d && (e.B = d); return e
    }, b8 = function (a, b) {
        g.ny[a] = !0;
        var c = g.ly(); c && c.publish.apply(c, arguments); g.ny[a] = !1
    }, c8 = function (a) {
        this.name = this.id = "";
        this.clientName = "UNKNOWN_INTERFACE"; this.app = ""; this.type = "REMOTE_CONTROL"; this.obfuscatedGaiaId = this.avatar = this.username = ""; this.capabilities = new Set; this.compatibleSenderThemes = new Set; this.experiments = new Set; this.theme = "u"; new g.Co; this.model = this.brand = ""; this.year = 0; this.chipset = this.osVersion = this.os = ""; this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN"; a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
            a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", Sgb(this, a.capabilities || ""), Tgb(this, a.compatibleSenderThemes || ""), Ugb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
    }, Sgb = function (a, b) {
        a.capabilities.clear();
        g.Hm(b.split(","), g.Sa(Pgb, Vgb)).forEach(function (c) { a.capabilities.add(c) })
    }, Tgb = function (a, b) {
        a.compatibleSenderThemes.clear();
        g.Hm(b.split(","), g.Sa(Pgb, Wgb)).forEach(function (c) { a.compatibleSenderThemes.add(c) })
    }, Ugb = function (a, b) {
        a.experiments.clear();
        b.split(",").forEach(function (c) { a.experiments.add(c) })
    }, d8 = function (a) {
        a = a || {};
        this.name = a.name || ""; this.id = a.id || a.screenId || ""; this.token = a.token || a.loungeToken || ""; this.uuid = a.uuid || a.dialId || ""; this.idType = a.screenIdType || "normal"
    }, e8 = function (a, b) { return !!b && (a.id == b || a.uuid == b) }, Xgb = function (a) {
        return {
            name: a.name,
            screenId: a.id, loungeToken: a.token, dialId: a.uuid, screenIdType: a.idType
        }
    }, Ygb = function (a) { return new d8(a) }, Zgb = function (a) { return Array.isArray(a) ? g.Wd(a, Ygb) : [] }, f8 = function (a) { return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null" }, $gb = function (a) { return Array.isArray(a) ? "[" + g.Wd(a, f8).join(",") + "]" : "null" }, ahb = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
            function (a) {
                var b = 16 * Math.random() | 0;
                return ("x" == a ? b : b & 3 | 8).toString(16)
            })
    }, bhb = function (a) {
        return g.Wd(a, function (b) {
            return {
                key: b.id,
                name: b.name
            }
        })
    }, chb = function (a, b) { return g.Rb(a, function (c) { return c || b ? !c != !b ? !1 : c.id == b.id : !0 }) }, g8 = function (a, b) { return g.Rb(a, function (c) { return e8(c, b) }) }, dhb = function () {
        var a = (0, g.EA)();
        a && Lgb(a, a.j.uj(!0))
    }, h8 = function () {
        var a = g.HA("yt-remote-connected-devices") || [];
        g.pc(a); return a
    }, ehb = function (a) {
        if (g.Vb(a)) return [];
        var b = a[0].indexOf("#"), c = -1 == b ? a[0] : a[0].substring(0, b); return g.Wd(a, function (d, e) { return 0 == e ? d : d.substring(c.length) })
    }, fhb = function (a) { g.GA("yt-remote-connected-devices", a, 86400) }, i8 = function () {
        if (ghb) return ghb;
        var a = g.HA("yt-remote-device-id"); a || (a = ahb(), g.GA("yt-remote-device-id", a, 31536E3)); for (var b = h8(), c = 1, d = a; g.Tb(b, d);)c++, d = a + "#" + c; return ghb = d
    }, hhb = function () {
        var a = h8(), b = i8();
        g.JA() && g.rc(a, b); a = ehb(a); if (g.Vb(a)) try { g.hv("remote_sid") } catch (c) { } else try { g.fv("remote_sid", a.join(","), -1) } catch (c) { }
    }, ihb = function () { return g.HA("yt-remote-session-browser-channel") }, jhb = function () { return g.HA("yt-remote-local-screens") || [] }, khb = function () { g.GA("yt-remote-lounge-token-expiration", !0, 86400) }, lhb = function (a) {
        5 < a.length && (a = a.slice(a.length - 5));
        var b = g.Wd(jhb(), function (d) { return d.loungeToken }), c = g.Wd(a, function (d) { return d.loungeToken });
        g.Tk(c, function (d) { return !g.Tb(b, d) }) && khb();
        g.GA("yt-remote-local-screens", a, 31536E3)
    }, j8 = function (a) {
        a || (g.IA("yt-remote-session-screen-id"), g.IA("yt-remote-session-video-id"));
        hhb(); a = h8(); g.bc(a, i8()); fhb(a)
    }, mhb = function () {
        if (!k8) {
            var a = g.bp();
            a && (k8 = new g.Qo(a))
        }
    }, nhb = function () {
        mhb();
        return k8 ? !!k8.get("yt-remote-use-staging-server") : !1
    }, ohb = function () {
        var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
        return a ? parseInt(a[1], 10) : 0
    }, phb = function (a) { return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a)) }, qhb = function () { return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null }, l8 = function (a) { a.length ? rhb(a.shift(), function () { l8(a) }) : shb() }, thb = function (a) { return "chrome-extension://" + a + "/cast_sender.js" }, rhb = function (a, b, c) {
        var d = document.createElement("script");
        d.onerror = b; c && (d.onload = c); g.dj(d, g.gg(a)); (document.head || document.documentElement).appendChild(d)
    }, uhb = function () {
        var a = ohb(), b = [];
        if (1 < a) { var c = a - 1; b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js"); b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js") } return b
    }, shb = function () {
        var a = qhb();
        a && a(!1, "No cast extension found")
    }, whb = function () {
        if (vhb) {
            var a = 2, b = qhb(), c = function () {
                a--;
                0 == a && b && b(!0)
            };
            window.__onGCastApiAvailable = c; rhb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", shb, c)
        }
    }, xhb = function () {
        whb();
        var a = uhb(); a.push("//www.gstatic.com/eureka/clank/cast_sender.js"); l8(a)
    }, zhb = function () {
        whb();
        var a = uhb(); a.push.apply(a, g.u(yhb.map(thb))); a.push("//www.gstatic.com/eureka/clank/cast_sender.js"); l8(a)
    }, Ahb = function () {
        this.j = m8();
        this.j.Vm("/client_streamz/youtube/living_room/mdx/channel/opened", { Cg: 3, Bg: "channel_type" })
    }, Bhb = function (a, b) { a.j.Do("/client_streamz/youtube/living_room/mdx/channel/opened", b) }, Chb = function () {
        this.j = m8();
        this.j.Vm("/client_streamz/youtube/living_room/mdx/channel/closed", { Cg: 3, Bg: "channel_type" })
    }, Dhb = function (a, b) { a.j.Do("/client_streamz/youtube/living_room/mdx/channel/closed", b) }, Ehb = function () {
        this.j = m8();
        this.j.Vm("/client_streamz/youtube/living_room/mdx/channel/message_received", { Cg: 3, Bg: "channel_type" })
    }, Fhb = function (a, b) { a.j.Do("/client_streamz/youtube/living_room/mdx/channel/message_received", b) }, Ghb = function () {
        this.j = m8();
        this.j.Vm("/client_streamz/youtube/living_room/mdx/channel/error", { Cg: 3, Bg: "channel_type" })
    }, Hhb = function (a, b) { a.j.Do("/client_streamz/youtube/living_room/mdx/channel/error", b) }, Ihb = function () {
        this.j = m8();
        this.j.Vm("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    }, Jhb = function () {
        this.j = m8();
        this.j.Vm("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    }, n8 = function (a, b, c) {
        g.I.call(this);
        this.I = null != c ? (0, g.Qa)(a, c) : a; this.Nh = b; this.D = (0, g.Qa)(this.qW, this); this.j = !1; this.u = 0; this.B = this.yc = null; this.C = []
    }, o8 = function (a, b, c) {
        g.I.call(this);
        this.C = null != c ? a.bind(c) : a; this.Nh = b; this.B = null; this.j = !1; this.u = 0; this.yc = null
    }, Khb = function (a) {
        a.yc = g.Fh(function () {
            a.yc = null;
            a.j && !a.u && (a.j = !1, Khb(a))
        }, a.Nh);
        var b = a.B; a.B = null; a.C.apply(null, b)
    }, p8 = function () { }, Lhb = function () { g.cf.call(this, "p") }, Mhb = function () { g.cf.call(this, "o") }, Ohb = function () { return Nhb = Nhb || new g.Nf }, Phb = function (a) { g.cf.call(this, "serverreachability", a) }, q8 = function (a) {
        var b = Ohb();
        b.dispatchEvent(new Phb(b, a))
    }, Qhb = function (a) { g.cf.call(this, "statevent", a) }, r8 = function (a) {
        var b = Ohb();
        b.dispatchEvent(new Qhb(b, a))
    }, Rhb = function (a, b, c, d) {
        g.cf.call(this, "timingevent", a);
        this.size = b; this.qx = d
    }, s8 = function (a, b) {
        if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
        return g.Da.setTimeout(function () { a() }, b)
    }, Shb = function () { }, t8 = function (a, b, c, d) {
        this.D = a;
        this.C = b; this.Dc = c; this.Ac = d || 1; this.ib = new g.Rj(this); this.yb = 45E3; a = g.zH ? 125 : void 0; this.kb = new g.Eh(a); this.Ma = null; this.B = !1; this.T = this.Xa = this.J = this.Oa = this.ya = this.Mb = this.Z = null; this.oa = []; this.j = null; this.ea = 0; this.I = this.Aa = null; this.Vb = -1; this.Ka = !1; this.qb = 0; this.Wa = null; this.wc = this.Sa = this.pc = this.Ba = !1; this.u = new Thb
    }, Thb = function () {
        this.B = null;
        this.j = ""; this.u = !1
    }, Vhb = function (a, b, c) {
        a.Oa = 1;
        a.J = Z7(b.clone()); a.T = c; a.Ba = !0; Uhb(a, null)
    }, Uhb = function (a, b) {
        a.ya = Date.now();
        u8(a); a.Xa = a.J.clone(); $7(a.Xa, "t", a.Ac); a.ea = 0; var c = a.D.Oa; a.u = new Thb; a.j = Whb(a.D, c ? b : null, !a.T); 0 < a.qb && (a.Wa = new o8((0, g.Qa)(a.CN, a, a.j), a.qb)); a.ib.Pa(a.j, "readystatechange", a.tW); b = a.Ma ? g.xf(a.Ma) : {}; a.T ? (a.Aa || (a.Aa = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Xa, a.Aa, a.T, b)) : (a.Aa = "GET", a.j.send(a.Xa, a.Aa, null, b)); q8(1)
    }, Xhb = function (a) { return a.j ? "GET" == a.Aa && 2 != a.Oa && a.D.le : !1 }, aib = function (a, b, c) {
        for (var d = !0, e; !a.Ka && a.ea < c.length;)if (e = Yhb(a, c), e == v8) {
            4 ==
            b && (a.I = 4, r8(14), d = !1);
            break
        } else if (e == Zhb) { a.I = 4; r8(15); d = !1; break } else $hb(a, e); Xhb(a) && e != v8 && e != Zhb && (a.u.j = "", a.ea = 0); 4 != b || 0 != c.length || a.u.u || (a.I = 1, r8(16), d = !1); a.B = a.B && d; d ? 0 < c.length && !a.wc && (a.wc = !0, a.D.EK(a)) : (w8(a), x8(a))
    }, Yhb = function (a, b) {
        var c = a.ea, d = b.indexOf("\n", c);
        if (-1 == d) return v8; c = Number(b.substring(c, d)); if (isNaN(c)) return Zhb; d += 1; if (d + c > b.length) return v8; b = b.slice(d, d + c); a.ea = d + c; return b
    }, u8 = function (a) {
        a.Mb = Date.now() + a.yb;
        bib(a, a.yb)
    }, bib = function (a, b) {
        if (null != a.Z) throw Error("WatchDog timer not null");
        a.Z = s8((0, g.Qa)(a.rW, a), b)
    }, y8 = function (a) { a.Z && (g.Da.clearTimeout(a.Z), a.Z = null) }, x8 = function (a) { a.D.og() || a.Ka || cib(a.D, a) }, w8 = function (a) {
        y8(a);
        g.$e(a.Wa); a.Wa = null; a.kb.stop(); a.ib.cg(); if (a.j) { var b = a.j; a.j = null; b.abort(); b.dispose() }
    }, $hb = function (a, b) {
        try {
            var c = a.D;
            if (0 != c.Lg && (c.j == a || dib(c.u, a))) if (!a.Sa && dib(c.u, a) && 3 == c.Lg) { try { var d = c.Me.j.parse(b) } catch (z) { d = null } if (Array.isArray(d) && 3 == d.length) { var e = d; if (0 == e[0]) a: { if (!c.T) { if (c.j) if (c.j.ya + 3E3 < a.ya) z8(c), A8(c); else break a; eib(c); r8(18) } } else c.Gd = e[1], 0 < c.Gd - c.Sa && 37500 > e[2] && c.kb && 0 == c.oa && !c.ea && (c.ea = s8((0, g.Qa)(c.uW, c), 6E3)); if (1 >= fib(c.u) && c.Yc) { try { c.Yc() } catch (z) { } c.Yc = void 0 } } else B8(c, 11) } else if ((a.Sa || c.j == a) && z8(c), !g.fb(b)) for (e = c.Me.j.parse(b), b = 0; b < e.length; b++) {
                var f = e[b]; c.Sa = f[0];
                f = f[1]; if (2 == c.Lg) if ("c" == f[0]) {
                    c.C = f[1]; c.wc = f[2]; var h = f[3]; null != h && (c.DN = h); var l = f[5]; null != l && "number" === typeof l && 0 < l && (c.Xa = 1.5 * l); d = c; var m = a.hJ(); if (m) { var n = g.Gi(m, "X-Client-Wire-Protocol"); if (n) { var p = d.u; !p.j && (g.jb(n, "spdy") || g.jb(n, "quic") || g.jb(n, "h2")) && (p.C = p.D, p.j = new Set, p.u && (gib(p, p.u), p.u = null)) } if (d.Ba) { var q = g.Gi(m, "X-HTTP-Session-Id"); q && (d.Od = q, g.Mj(d.Ma, d.Ba, q)) } } c.Lg = 3; c.D && c.D.JN(); c.td && (c.pd = Date.now() - a.ya); d = c; var r = a; d.Ad = hib(d, d.Oa ? d.wc : null, d.Ac); if (r.Sa) {
                        iib(d.u,
                            r); var w = r, y = d.Xa; y && w.setTimeout(y); w.Z && (y8(w), u8(w)); d.j = r
                    } else jib(d); 0 < c.B.length && C8(c)
                } else "stop" != f[0] && "close" != f[0] || B8(c, 7); else 3 == c.Lg && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? B8(c, 7) : c.disconnect() : "noop" != f[0] && c.D && c.D.IN(f), c.oa = 0)
            } q8(4)
        } catch (z) { }
    }, kib = function (a, b) {
        this.j = a;
        this.map = b; this.context = null
    }, lib = function (a) {
        this.D = a || 10;
        g.Da.PerformanceNavigationTiming ? (a = g.Da.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Da.chrome && g.Da.chrome.loadTimes && g.Da.chrome.loadTimes() && g.Da.chrome.loadTimes().wasFetchedViaSpdy); this.C = a ? this.D : 1; this.j = null; 1 < this.C && (this.j = new Set); this.u = null; this.B = []
    }, mib = function (a) { return a.u ? !0 : a.j ? a.j.size >= a.C : !1 }, fib = function (a) { return a.u ? 1 : a.j ? a.j.size : 0 }, dib = function (a, b) { return a.u ? a.u == b : a.j ? a.j.has(b) : !1 }, gib =
            function (a, b) { a.j ? a.j.add(b) : a.u = b }, iib = function (a, b) { a.u && a.u == b ? a.u = null : a.j && a.j.has(b) && a.j.delete(b) }, nib = function (a) {
                if (null != a.u) return a.B.concat(a.u.oa);
                if (null != a.j && 0 !== a.j.size) { var b = a.B; a = g.t(a.j.values()); for (var c = a.next(); !c.done; c = a.next())b = b.concat(c.value.oa); return b } return g.fc(a.B)
            }, oib = function (a, b) {
                var c = new Shb;
                if (g.Da.Image) {
                    var d = new Image; d.onload = g.Sa(D8, c, d, "TestLoadImage: loaded", !0, b); d.onerror = g.Sa(D8, c, d, "TestLoadImage: error", !1, b); d.onabort = g.Sa(D8, c, d, "TestLoadImage: abort", !1, b); d.ontimeout = g.Sa(D8, c, d, "TestLoadImage: timeout", !1, b); g.Da.setTimeout(function () { if (d.ontimeout) d.ontimeout() }, 1E4);
                    d.src = a
                } else b(!1)
            }, D8 = function (a, b, c, d, e) { try { b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d) } catch (f) { } }, pib = function () { this.j = new p8 }, qib = function (a, b, c) {
                var d = c || "";
                try { g.Dj(a, function (e, f) { var h = e; g.Na(e) && (h = g.Zh(e)); b.push(d + f + "=" + encodeURIComponent(h)) }) } catch (e) {
                    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
                }
            }, E8 = function (a, b, c) { return c && c.U_ ? c.U_[a] || b : b }, rib = function (a) {
                this.B = [];
                this.wc = this.Ad = this.Ma = this.Ac = this.j = this.Od = this.Ba = this.Ka = this.J = this.Mb = this.Z = null; this.Ze = this.Wa = 0; this.Xe = E8("failFast", !1, a); this.kb = this.ea = this.T = this.I = this.D = null; this.Dc = !0; this.Gd = this.Sa = -1; this.pc = this.oa = this.ya = 0; this.We = E8("baseRetryDelayMs", 5E3, a); this.Uf = E8("retryDelaySeedMs", 1E4, a); this.Ye = E8("forwardChannelMaxRetries", 2, a); this.Fd = E8("forwardChannelRequestTimeoutMs", 2E4, a); this.ke = a && a.k8a || void 0; this.le = a && a.i8a || !1; this.Xa = void 0; this.Oa = a && a.c5 || !1; this.C = ""; this.u = new lib(a &&
                    a.g6a); this.Me = new pib; this.yb = a && a.u6a || !1; this.qb = a && a.m6a || !1; this.yb && this.qb && (this.qb = !1); this.Vf = a && a.Z5a || !1; a && a.w6a && (this.Dc = !1); this.td = !this.yb && this.Dc && a && a.k6a || !1; this.Yc = void 0; this.pd = 0; this.ib = !1; this.Vb = this.Aa = null
            }, A8 = function (a) { a.j && (sib(a), a.j.cancel(), a.j = null) }, tib = function (a) {
                A8(a);
                a.T && (g.Da.clearTimeout(a.T), a.T = null); z8(a); a.u.cancel(); a.I && ("number" === typeof a.I && g.Da.clearTimeout(a.I), a.I = null)
            }, C8 = function (a) { mib(a.u) || a.I || (a.I = !0, g.vh(a.FN, a), a.ya = 0) }, vib = function (a, b) {
                if (fib(a.u) >= a.u.C - (a.I ? 1 : 0)) return !1;
                if (a.I) return a.B = b.oa.concat(a.B), !0; if (1 == a.Lg || 2 == a.Lg || a.ya >= (a.Xe ? 0 : a.Ye)) return !1; a.I = s8((0, g.Qa)(a.FN, a, b), uib(a, a.ya)); a.ya++; return !0
            }, xib = function (a, b) {
                var c;
                b ? c = b.Dc : c = a.Wa++; var d = a.Ma.clone(); g.Mj(d, "SID", a.C); g.Mj(d, "RID", c); g.Mj(d, "AID", a.Sa); F8(a, d); a.J && a.Z && g.Qj(d, a.J, a.Z); c = new t8(a, a.C, c, a.ya + 1); null === a.J && (c.Ma = a.Z); b && (a.B = b.oa.concat(a.B)); b = wib(a, c, 1E3); c.setTimeout(Math.round(.5 * a.Fd) + Math.round(.5 * a.Fd * Math.random())); gib(a.u, c); Vhb(c, d, b)
            }, F8 = function (a, b) {
                a.Ka && g.jf(a.Ka, function (c, d) { g.Mj(b, d, c) });
                a.D && g.Dj({}, function (c, d) { g.Mj(b, d, c) })
            }, wib = function (a, b, c) {
                c = Math.min(a.B.length, c);
                var d = a.D ? (0, g.Qa)(a.D.vW, a.D, a) : null; a: for (var e = a.B, f = -1; ;) { var h = ["count=" + c]; -1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f); for (var l = !0, m = 0; m < c; m++) { var n = e[m].j, p = e[m].map; n -= f; if (0 > n) f = Math.max(0, e[m].j - 100), l = !1; else try { qib(p, h, "req" + n + "_") } catch (q) { d && d(p) } } if (l) { d = h.join("&"); break a } } a = a.B.splice(0, c); b.oa = a; return d
            }, jib = function (a) { a.j || a.T || (a.pc = 1, g.vh(a.EN, a), a.oa = 0) }, eib = function (a) {
                if (a.j || a.T || 3 <= a.oa) return !1;
                a.pc++; a.T = s8((0, g.Qa)(a.EN, a), uib(a, a.oa)); a.oa++; return !0
            }, sib = function (a) { null != a.Aa && (g.Da.clearTimeout(a.Aa), a.Aa = null) }, yib = function (a) {
                a.j = new t8(a, a.C, "rpc", a.pc);
                null === a.J && (a.j.Ma = a.Z); a.j.qb = 0; var b = a.Ad.clone(); g.Mj(b, "RID", "rpc"); g.Mj(b, "SID", a.C); g.Mj(b, "CI", a.kb ? "0" : "1"); g.Mj(b, "AID", a.Sa); g.Mj(b, "TYPE", "xmlhttp"); F8(a, b); a.J && a.Z && g.Qj(b, a.J, a.Z); a.Xa && a.j.setTimeout(a.Xa); var c = a.j; a = a.wc; c.Oa = 1; c.J = Z7(b.clone()); c.T = null; c.Ba = !0; Uhb(c, a)
            }, z8 = function (a) { null != a.ea && (g.Da.clearTimeout(a.ea), a.ea = null) }, cib = function (a, b) {
                var c = null;
                if (a.j == b) { z8(a); sib(a); a.j = null; var d = 2 } else if (dib(a.u, b)) c = b.oa, iib(a.u, b), d = 1; else return; if (0 != a.Lg) if (b.B) if (1 == d) { c = b.T ? b.T.length : 0; b = Date.now() - b.ya; var e = a.ya; d = Ohb(); d.dispatchEvent(new Rhb(d, c, b, e)); C8(a) } else jib(a); else { var f = b.Vb; e = b.getLastError(); if (3 == e || 0 == e && 0 < f || !(1 == d && vib(a, b) || 2 == d && eib(a))) switch (c && 0 < c.length && (b = a.u, b.B = b.B.concat(c)), e) { case 1: B8(a, 5); break; case 4: B8(a, 10); break; case 3: B8(a, 6); break; default: B8(a, 2) } }
            }, uib = function (a, b) {
                var c = a.We + Math.floor(Math.random() *
                    a.Uf);
                a.isActive() || (c *= 2); return c * b
            }, B8 = function (a, b) {
                if (2 == b) {
                    var c = null;
                    a.D && (c = null); var d = (0, g.Qa)(a.i5, a); c || (c = new g.Ej("//www.google.com/images/cleardot.gif"), g.Da.location && "http" == g.Da.location.protocol || g.Fj(c, "https"), Z7(c)); oib(c.toString(), d)
                } else r8(2); a.Lg = 0; a.D && a.D.HN(b); zib(a); tib(a)
            }, zib = function (a) {
                a.Lg = 0;
                a.Vb = []; if (a.D) { var b = nib(a.u); if (0 != b.length || 0 != a.B.length) g.gc(a.Vb, b), g.gc(a.Vb, a.B), a.u.B.length = 0, g.fc(a.B), a.B.length = 0; a.D.GN() }
            }, Aib = function (a) {
                if (0 == a.Lg) return a.Vb;
                var b = []; g.gc(b, nib(a.u)); g.gc(b, a.B); return b
            }, hib = function (a, b, c) {
                var d = g.Nj(c);
                "" != d.j ? (b && g.Gj(d, b + "." + d.j), g.Hj(d, d.C)) : (d = g.Da.location, d = Rgb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c)); b = a.Ba; c = a.Od; b && c && g.Mj(d, b, c); g.Mj(d, "VER", a.DN); F8(a, d); return d
            }, Whb = function (a, b, c) {
                if (b && !a.Oa) throw Error("Can't create secondary domain capable XhrIo object.");
                b = c && a.le && !a.ke ? new g.zi(new g.zj({ kU: !0 })) : new g.zi(a.ke); b.J = a.Oa; return b
            }, Bib = function () { }, Cib = function () {
                if (g.Zg && !g.Bc(10)) throw Error("Environmental error: no available transport.");
            }, H8 = function (a, b) {
                g.Nf.call(this);
                this.j = new rib(b); this.I = a; this.u = b && b.A0 || null; a = b && b.z0 || null; b && b.f6a && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" }); this.j.Z = a; a = b && b.c7a || null; b && b.PR && (a ? a["X-WebChannel-Content-Type"] = b.PR : a = { "X-WebChannel-Content-Type": b.PR }); b && b.GP && (a ? a["X-WebChannel-Client-Profile"] = b.GP : a = { "X-WebChannel-Client-Profile": b.GP }); this.j.Mb = a; (a = b && b.a7a) && !g.fb(a) && (this.j.J = a); this.J = b && b.c5 || !1; this.D = b && b.M7a || !1; (b = b && b.Q_) && !g.fb(b) && (this.j.Ba = b, g.qf(this.u, b) && g.uf(this.u,
                    b)); this.C = new G8(this)
            }, Dib = function (a) {
                Lhb.call(this);
                a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__); var b = a.__sm__; b ? this.data = (this.metadataKey = g.nf(b)) ? g.vf(b, this.metadataKey) : b : this.data = a
            }, Eib = function (a) {
                Mhb.call(this);
                this.status = 1; this.errorCode = a
            }, G8 = function (a) { this.j = a }, Fib = function (a, b) {
                this.u = a;
                this.j = b
            }, Gib = function (a) {
                return Aib(a.j).map(function (b) {
                    b = b.map;
                    "__data__" in b && (b = b.__data__, b = a.u.D ? Qgb(b) : b); return b
                })
            }, I8 = function (a, b) {
                if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
                return g.Da.setTimeout(function () { a() }, b)
            }, K8 = function (a) { J8.dispatchEvent(new Hib(J8, a)) }, Hib = function (a) { g.cf.call(this, "statevent", a) }, L8 = function (a, b, c, d) {
                this.j = a;
                this.C = b; this.J = c; this.I = d || 1; this.u = 45E3; this.B = new g.Rj(this); this.D = new g.Eh; this.D.setInterval(250)
            }, Jib = function (a, b, c) {
                a.Wu = 1;
                a.Pp = Z7(b.clone()); a.ls = c; a.Ba = !0; Iib(a, null)
            }, Kib = function (a, b, c, d, e) {
                a.Wu = 1;
                a.Pp = Z7(b.clone()); a.ls = null; a.Ba = c; e && (a.RT = !1); Iib(a, d)
            }, Iib = function (a, b) {
                a.Vu = Date.now();
                M8(a); a.Rp = a.Pp.clone(); $7(a.Rp, "t", a.I); a.XB = 0; a.Yh = a.j.yG(a.j.uy() ? b : null); 0 < a.wG && (a.VB = new o8((0, g.Qa)(a.KN, a, a.Yh), a.wG)); a.B.Pa(a.Yh, "readystatechange", a.xW); b = a.hs ? g.xf(a.hs) : {}; a.ls ? (a.WB = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.Yh.send(a.Rp, a.WB, a.ls, b)) : (a.WB = "GET", a.RT && !g.ef && (b.Connection = "close"), a.Yh.send(a.Rp, a.WB, null, b)); a.j.Wl(1)
            }, Nib = function (a, b) {
                var c = a.XB, d = b.indexOf("\n", c);
                if (-1 == d) return Lib; c = Number(b.substring(c, d)); if (isNaN(c)) return Mib; d += 1; if (d + c > b.length) return Lib; b = b.slice(d, d + c); a.XB = d + c; return b
            }, Pib = function (a, b) {
                a.Vu = Date.now();
                M8(a); var c = b ? window.location.hostname : ""; a.Rp = a.Pp.clone(); g.Mj(a.Rp, "DOMAIN", c); g.Mj(a.Rp, "t", a.I); try { a.qm = new ActiveXObject("htmlfile") } catch (m) { N8(a); a.Qp = 7; K8(22); O8(a); return } var d = "<html><body>"; if (b) {
                    var e = ""; for (b = 0; b < c.length; b++) {
                        var f = c.charAt(b); if ("<" == f) f = e + "\\x3c"; else if (">" == f) f = e + "\\x3e"; else {
                            if (f in P8) f = P8[f]; else if (f in Oib) f = P8[f] = Oib[f]; else {
                                var h = f.charCodeAt(0); if (31 < h && 127 > h) var l = f; else { if (256 > h) { if (l = "\\x", 16 > h || 256 < h) l += "0" } else l = "\\u", 4096 > h && (l += "0"); l += h.toString(16).toUpperCase() } f =
                                    P8[f] = l
                            } f = e + f
                        } e = f
                    } d += '<script>document.domain="' + e + '"\x3c/script>'
                } d += "</body></html>"; c = g.xg(g.dg("b/12014412"), d); a.qm.open(); a.qm.write(g.vg(c)); a.qm.close(); a.qm.parentWindow.m = (0, g.Qa)(a.O3, a); a.qm.parentWindow.d = (0, g.Qa)(a.WS, a, !0); a.qm.parentWindow.rpcClose = (0, g.Qa)(a.WS, a, !1); c = a.qm.createElement("DIV"); a.qm.parentWindow.document.body.appendChild(c); d = g.kg(a.Rp.toString()); d = g.Mg(g.ig(d)); d = g.xg(g.dg("b/12014412"), '<iframe src="' + d + '"></iframe>'); g.Ada(c, d); a.j.Wl(1)
            }, M8 = function (a) {
                a.xG =
                Date.now() + a.u;
                Qib(a, a.u)
            }, Qib = function (a, b) {
                if (null != a.Xu) throw Error("WatchDog timer not null");
                a.Xu = I8((0, g.Qa)(a.wW, a), b)
            }, Rib = function (a) { a.Xu && (g.Da.clearTimeout(a.Xu), a.Xu = null) }, O8 = function (a) { a.j.og() || a.gs || a.j.YB(a) }, N8 = function (a) {
                Rib(a);
                g.$e(a.VB); a.VB = null; a.D.stop(); a.B.cg(); if (a.Yh) { var b = a.Yh; a.Yh = null; b.abort(); b.dispose() } a.qm && (a.qm = null)
            }, Sib = function (a, b) { try { a.j.LN(a, b), a.j.Wl(4) } catch (c) { } }, Uib = function (a, b, c, d, e) {
                if (0 == d) c(!1);
                else { var f = e || 0; d--; Tib(a, b, function (h) { h ? c(!0) : g.Da.setTimeout(function () { Uib(a, b, c, d, f) }, f) }) }
            }, Tib = function (a, b, c) {
                var d = new Image;
                d.onload = function () { try { Q8(d), c(!0) } catch (e) { } };
                d.onerror = function () { try { Q8(d), c(!1) } catch (e) { } };
                d.onabort = function () { try { Q8(d), c(!1) } catch (e) { } };
                d.ontimeout = function () { try { Q8(d), c(!1) } catch (e) { } };
                g.Da.setTimeout(function () { if (d.ontimeout) d.ontimeout() }, b);
                d.src = a
            }, Q8 = function (a) {
                a.onload = null;
                a.onerror = null; a.onabort = null; a.ontimeout = null
            }, Vib = function (a) {
                this.j = a;
                this.u = new p8
            }, Wib = function (a) {
                var b = R8(a.j, a.Ry, "/mail/images/cleardot.gif");
                Z7(b); Uib(b.toString(), 5E3, (0, g.Qa)(a.oZ, a), 3, 2E3); a.Wl(1)
            }, Xib = function (a) {
                var b = a.j.Z;
                if (null != b) K8(5), b ? (K8(11), S8(a.j, a, !1)) : (K8(12), S8(a.j, a, !0)); else if (a.Ki = new L8(a), a.Ki.hs = a.zG, b = a.j, b = R8(b, b.uy() ? a.sy : null, a.AG), K8(5), !g.Zg || g.Bc(10)) $7(b, "TYPE", "xmlhttp"), Kib(a.Ki, b, !1, a.sy, !1); else { $7(b, "TYPE", "html"); var c = a.Ki; a = !!a.sy; c.Wu = 3; c.Pp = Z7(b.clone()); Pib(c, a) }
            }, Yib = function (a, b, c) {
                this.j = 1;
                this.u = []; this.B = []; this.D = new p8; this.T = a || null; this.Z = null != b ? b : null; this.J = c || !1
            }, Zib = function (a, b) {
                this.j = a;
                this.map = b; this.context = null
            }, $ib = function (a, b, c, d) {
                g.cf.call(this, "timingevent", a);
                this.size = b; this.qx = d
            }, ajb = function (a) { g.cf.call(this, "serverreachability", a) }, cjb = function (a) {
                a.yW(1, 0);
                a.ZB = R8(a, null, a.BG); bjb(a)
            }, djb = function (a) {
                a.hq && (a.hq.abort(), a.hq = null);
                a.Tf && (a.Tf.cancel(), a.Tf = null); a.Bo && (g.Da.clearTimeout(a.Bo), a.Bo = null); T8(a); a.Ti && (a.Ti.cancel(), a.Ti = null); a.Sp && (g.Da.clearTimeout(a.Sp), a.Sp = null)
            }, ejb = function (a, b) {
                if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
                a.u.push(new Zib(a.zW++, b)); 2 != a.j && 3 != a.j || bjb(a)
            }, fjb = function (a) {
                var b = 0;
                a.Tf && b++; a.Ti && b++; return b
            }, bjb = function (a) { a.Ti || a.Sp || (a.Sp = I8((0, g.Qa)(a.PN, a), 0), a.Zu = 0) }, ijb = function (a, b) {
                if (1 == a.j) {
                    if (!b) {
                        a.wy = Math.floor(1E5 * Math.random());
                        b = a.wy++; var c = new L8(a, "", b); c.hs = a.zm; var d = gjb(a), e = a.ZB.clone(); g.Mj(e, "RID", b); g.Mj(e, "CVER", "1"); U8(a, e); Jib(c, e, d); a.Ti = c; a.j = 2
                    }
                } else 3 == a.j && (b ? hjb(a, b) : 0 == a.u.length || a.Ti || hjb(a))
            }, hjb = function (a, b) {
                if (b) if (6 < a.qs) {
                    a.u = a.B.concat(a.u);
                    a.B.length = 0; var c = a.wy - 1; b = gjb(a)
                } else c = b.J, b = b.ls; else c = a.wy++, b = gjb(a); var d = a.ZB.clone(); g.Mj(d, "SID", a.C); g.Mj(d, "RID", c); g.Mj(d, "AID", a.bv); U8(a, d); c = new L8(a, a.C, c, a.Zu + 1); c.hs = a.zm; c.setTimeout(1E4 + Math.round(1E4 * Math.random())); a.Ti = c; Jib(c, d, b)
            }, U8 = function (a, b) { a.Fh && (a = a.Fh.TN()) && g.jf(a, function (c, d) { g.Mj(b, d, c) }) }, gjb = function (a) {
                var b = Math.min(a.u.length, 1E3), c = ["count=" + b];
                if (6 < a.qs && 0 < b) { var d = a.u[0].j; c.push("ofs=" + d) } else d = 0; for (var e = {}, f = 0; f < b; e = { Hu: e.Hu }, f++) { e.Hu = a.u[f].j; var h = a.u[f].map; e.Hu = 6 >= a.qs ? f : e.Hu - d; try { g.jf(h, function (l) { return function (m, n) { c.push("req" + l.Hu + "_" + n + "=" + encodeURIComponent(m)) } }(e)) } catch (l) { c.push("req" + e.Hu + "_type=" + encodeURIComponent("_badmap")) } } a.B = a.B.concat(a.u.splice(0, b));
                return c.join("&")
            }, jjb = function (a) { a.Tf || a.Bo || (a.I = 1, a.Bo = I8((0, g.Qa)(a.ON, a), 0), a.Yu = 0) }, ljb = function (a) {
                if (a.Tf || a.Bo || 3 <= a.Yu) return !1;
                a.I++; a.Bo = I8((0, g.Qa)(a.ON, a), kjb(a, a.Yu)); a.Yu++; return !0
            }, S8 = function (a, b, c) {
                a.JF = c;
                a.Am = b.Ao; a.J || cjb(a)
            }, T8 = function (a) { null != a.rs && (g.Da.clearTimeout(a.rs), a.rs = null) }, kjb = function (a, b) {
                var c = 5E3 + Math.floor(1E4 * Math.random());
                a.isActive() || (c *= 2); return c * b
            }, V8 = function (a, b) {
                if (2 == b || 9 == b) {
                    var c = null;
                    a.Fh && (c = null); var d = (0, g.Qa)(a.h5, a); c || (c = new g.Ej("//www.google.com/images/cleardot.gif"), Z7(c)); Tib(c.toString(), 1E4, d)
                } else K8(2); mjb(a, b)
            }, mjb = function (a, b) {
                a.j = 0;
                a.Fh && a.Fh.QN(b); njb(a); djb(a)
            }, njb = function (a) {
                a.j = 0;
                a.Am = -1; if (a.Fh) if (0 == a.B.length && 0 == a.u.length) a.Fh.CG(); else { var b = g.fc(a.B), c = g.fc(a.u); a.B.length = 0; a.u.length = 0; a.Fh.CG(b, c) }
            }, R8 = function (a, b, c) {
                var d = g.Nj(c);
                if ("" != d.j) b && g.Gj(d, b + "." + d.j), g.Hj(d, d.C); else { var e = window.location; d = Rgb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c) } a.vy && g.jf(a.vy, function (f, h) { g.Mj(d, h, f) });
                g.Mj(d, "VER", a.qs); U8(a, d); return d
            }, ojb = function () { }, pjb = function () {
                this.j = [];
                this.u = []
            }, qjb = function (a) {
                g.cf.call(this, "channelMessage");
                this.message = a
            }, rjb = function (a) {
                g.cf.call(this, "channelError");
                this.error = a
            }, sjb = function (a, b) {
                this.action = a;
                this.params = b || {}
            }, W8 = function (a, b) {
                g.I.call(this);
                this.j = new g.jo(this.G3, 0, this); g.K(this, this.j); this.Nh = 5E3; this.u = 0; if ("function" === typeof a) b && (a = (0, g.Qa)(a, b)); else if (a && "function" === typeof a.handleEvent) a = (0, g.Qa)(a.handleEvent, a); else throw Error("Invalid listener argument"); this.B = a
            }, tjb = function () { }, m8 = function () {
                if (!X8) {
                    X8 = new g.Hh(new tjb);
                    var a = g.yu("client_streamz_web_flush_count", -1); -1 !== a && (X8.C = a)
                } return X8
            }, ujb = function (a, b, c, d, e) {
                c = void 0 === c ? !1 : c;
                d = void 0 === d ? function () { return "" } : d;
                e = void 0 === e ? !1 : e; this.ya = a; this.J = b; this.B = new g.Po; this.u = new W8(this.G4, this); this.j = null; this.ea = !1; this.I = null; this.Z = ""; this.T = this.D = 0; this.C = []; this.Oa = c; this.oa = d; this.Sa = e; this.Ma = new Ahb; this.Aa = new Chb; this.Ka = new Ehb; this.Ba = new Ghb; this.Wa = new Ihb; this.Xa = new Jhb
            }, vjb = function (a) {
                if (a.j) {
                    var b = a.oa(), c = a.j.zm || {};
                    b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"]; a.j.zm = c
                }
            }, Y8 = function (a) {
                this.port = this.domain = "";
                this.j = "/api/lounge"; this.u = !0; a = a || document.location.href; var b = Number(g.fi(4, a)) || ""; b && (this.port = ":" + b); this.domain = g.gi(a) || ""; a = g.tb(); 0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.sb(a, "10.0") && (this.u = !1))
            }, Z8 = function (a, b) {
                var c = a.j;
                a.u && (c = "https://" + a.domain + a.port + a.j); return g.ui(c + b, {})
            }, wjb = function (a, b, c, d, e) {
                a = {
                    format: "JSON",
                    method: "POST", context: a, timeout: 5E3, withCredentials: !1, onSuccess: g.Sa(a.C, d, !0), onError: g.Sa(a.B, e), onTimeout: g.Sa(a.D, e)
                }; c && (a.postParams = c, a.headers = { "Content-Type": "application/x-www-form-urlencoded" }); return g.Xu(b, a)
            }, xjb = function (a, b) {
                g.Nf.call(this);
                var c = this; this.Zc = a(); this.Zc.subscribe("handlerOpened", this.FW, this); this.Zc.subscribe("handlerClosed", this.DW, this); this.Zc.subscribe("handlerError", function (d, e) { c.onError(e) });
                this.Zc.subscribe("handlerMessage", this.EW, this); this.j = b
            }, yjb = function (a, b, c) {
                var d = this;
                c = void 0 === c ? function () { return "" } : c;
                var e = void 0 === e ? new Cib : e; var f = void 0 === f ? new g.Po : f; this.pathPrefix = a; this.j = b; this.ya = c; this.D = f; this.T = null; this.Z = this.J = 0; this.channel = null; this.I = 0; this.B = new W8(function () { d.B.isActive(); var h; 0 === (null == (h = d.channel) ? void 0 : fib((new Fib(h, h.j)).j.u)) && d.connect(d.T, d.J) });
                this.C = {}; this.u = {}; this.ea = !1; this.logger = null; this.oa = []; this.Fg = void 0; this.Ma = new Ahb; this.Aa = new Chb; this.Ka = new Ehb; this.Ba = new Ghb
            }, zjb = function (a) {
                g.Gf(a.channel, "m", function () {
                    a.I = 3;
                    a.B.reset(); a.T = null; a.J = 0; for (var b = g.t(a.oa), c = b.next(); !c.done; c = b.next())c = c.value, a.channel && a.channel.send(c); a.oa = []; a.ma("webChannelOpened"); Bhb(a.Ma, "WEB_CHANNEL")
                });
                g.Gf(a.channel, "n", function () { a.I = 0; a.B.isActive() || a.ma("webChannelClosed"); var b, c = null == (b = a.channel) ? void 0 : Gib(new Fib(b, b.j)); c && (a.oa = [].concat(g.u(c))); Dhb(a.Aa, "WEB_CHANNEL") });
                g.Gf(a.channel, "p", function (b) { var c = b.data; "gracefulReconnect" === c[0] ? (a.B.start(), a.channel && a.channel.close()) : a.ma("webChannelMessage", new sjb(c[0], c[1])); a.Fg = b.statusCode; Fhb(a.Ka, "WEB_CHANNEL") });
                g.Gf(a.channel, "o", function () { 401 === a.Fg || a.B.start(); a.ma("webChannelError"); Hhb(a.Ba, "WEB_CHANNEL") })
            }, Ajb = function (a) {
                var b = a.ya();
                b ? a.C["x-youtube-lounge-xsrf-token"] = b : delete a.C["x-youtube-lounge-xsrf-token"]
            }, Bjb = function (a) {
                g.Nf.call(this);
                this.j = a(); this.j.subscribe("webChannelOpened", this.IW, this); this.j.subscribe("webChannelClosed", this.GW, this); this.j.subscribe("webChannelError", this.onError, this); this.j.subscribe("webChannelMessage", this.HW, this)
            }, Cjb = function (a, b, c, d, e) {
                function f() { return new ujb(Z8(a, "/bc"), b, !1, c, d) }
                c = void 0 === c ? function () { return "" } : c;
                return g.xu("enable_mdx_web_channel_desktop") ? new Bjb(function () { return new yjb(Z8(a, "/wc"), b, c) }) : new xjb(f, e)
            }, Gjb = function () {
                var a = Djb;
                Ejb(); $8.push(a); Fjb()
            }, a9 = function (a, b) {
                Ejb();
                var c = Hjb(a, String(b)); g.Vb($8) ? Ijb(c) : (Fjb(), g.sc($8, function (d) { d(c) }))
            }, b9 = function (a) { a9("CP", a) }, Ejb = function () { $8 || ($8 = g.Ia("yt.mdx.remote.debug.handlers_") || [], g.Fa("yt.mdx.remote.debug.handlers_", $8)) }, Ijb = function (a) {
                var b = (c9 + 1) % 50;
                c9 = b; d9[b] = a; e9 || (e9 = 49 == b)
            }, Fjb = function () {
                var a = $8;
                if (d9[0]) {
                    var b = e9 ? c9 : -1; do { b = (b + 1) % 50; var c = d9[b]; g.sc(a, function (d) { d(c) }) } while (b != c9);
                    d9 = Array(50); c9 = -1; e9 = !1
                }
            }, Hjb = function (a, b) {
                var c = (Date.now() - Jjb) / 1E3;
                c.toFixed && (c = c.toFixed(3)); var d = []; d.push("[", c + "s", "] "); d.push("[", "yt.mdx.remote", "] "); d.push(a + ": " + b, "\n"); return d.join("")
            }, f9 = function (a) {
                g.Tz.call(this);
                this.I = a; this.screens = []
            }, Kjb = function (a, b) {
                var c = a.get(b.uuid) || a.get(b.id);
                if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a; a.screens.push(b); return !0
            }, Ljb = function (a, b) {
                var c = a.screens.length != b.length;
                a.screens = g.Hm(a.screens, function (f) { return !!chb(b, f) });
                for (var d = 0, e = b.length; d < e; d++)c = Kjb(a, b[d]) || c; return c
            }, Mjb = function (a, b) {
                var c = a.screens.length;
                a.screens = g.Hm(a.screens, function (d) { return !(d || b ? !d != !b ? 0 : d.id == b.id : 1) });
                return a.screens.length < c
            }, Njb = function (a, b, c, d, e) {
                g.Tz.call(this);
                this.B = a; this.J = b; this.C = c; this.I = d; this.D = e; this.u = 0; this.j = null; this.yc = NaN
            }, h9 = function (a) {
                f9.call(this, "LocalScreenService");
                this.u = a; this.j = NaN; g9(this); this.info("Initializing with " + $gb(this.screens))
            }, Ojb = function (a) {
                if (a.screens.length) {
                    var b = g.Wd(a.screens, function (d) { return d.id }), c = Z8(a.u, "/pairing/get_lounge_token_batch");
                    wjb(a.u, c, { screen_ids: b.join(",") }, (0, g.Qa)(a.t_, a), (0, g.Qa)(a.s_, a))
                }
            }, g9 = function (a) {
                if (g.xu("deprecate_pair_servlet_enabled")) return Ljb(a, []);
                var b = Zgb(jhb()); b = g.Hm(b, function (c) { return !c.uuid });
                return Ljb(a, b)
            }, i9 = function (a, b) {
                lhb(g.Wd(a.screens, Xgb));
                b && khb()
            }, Qjb = function (a, b) {
                g.Tz.call(this);
                this.I = b; b = (b = g.HA("yt-remote-online-screen-ids") || "") ? b.split(",") : []; for (var c = {}, d = this.I(), e = d.length, f = 0; f < e; ++f) { var h = d[f].id; c[h] = g.Tb(b, h) } this.j = c; this.D = a; this.B = this.C = NaN; this.u = null; Pjb("Initialized with " + g.Zh(this.j))
            }, Rjb = function (a, b, c) {
                var d = Z8(a.D, "/pairing/get_screen_availability");
                wjb(a.D, d, { lounge_token: b.token }, (0, g.Qa)(function (e) { e = e.screens || []; for (var f = e.length, h = 0; h < f; ++h)if (e[h].loungeToken == b.token) { c("online" == e[h].status); return } c(!1) }, a), (0, g.Qa)(function () { c(!1) }, a))
            }, Tjb = function (a, b) {
                a: if (Ogb(b) != Ogb(a.j)) var c = !1;
                else { c = g.pf(b); for (var d = c.length, e = 0; e < d; ++e)if (!a.j[c[e]]) { c = !1; break a } c = !0 } c || (Pjb("Updated online screens: " + g.Zh(a.j)), a.j = b, a.ma("screenChange")); Sjb(a)
            }, j9 = function (a) {
                isNaN(a.B) || g.Uu(a.B);
                a.B = g.Su((0, g.Qa)(a.DL, a), 0 < a.C && a.C < g.Ta() ? 2E4 : 1E4)
            }, Pjb = function (a) { a9("OnlineScreenService", a) }, Ujb = function (a) {
                var b = {};
                g.sc(a.I(), function (c) { c.token ? b[c.token] = c.id : this.xf("Requesting availability of screen w/o lounge token.") });
                return b
            }, Sjb = function (a) {
                a = g.pf(g.kf(a.j, function (b) { return b }));
                g.pc(a); a.length ? g.GA("yt-remote-online-screen-ids", a.join(","), 60) : g.IA("yt-remote-online-screen-ids")
            }, k9 = function (a, b) {
                b = void 0 === b ? !1 : b;
                f9.call(this, "ScreenService"); this.C = a; this.J = b; this.j = this.u = null; this.B = []; this.D = {}; Vjb(this)
            }, Xjb = function (a, b, c, d, e, f) {
                a.info("getAutomaticScreenByIds " + c + " / " + b);
                c || (c = a.D[b]); var h = a.Aj(), l = c ? g8(h, c) : null; c && (a.J || l) || (l = g8(h, b)); if (l) { l.uuid = b; var m = l9(a, l); Rjb(a.j, m, function (n) { e(n ? m : null) }) } else c ? Wjb(a, c, (0, g.Qa)(function (n) {
                    var p = l9(this, new d8({
                        name: d,
                        screenId: c, loungeToken: n, dialId: b || ""
                    })); Rjb(this.j, p, function (q) { e(q ? p : null) })
                }, a), f) : e(null)
            }, Yjb = function (a, b) {
                for (var c = a.screens.length, d = 0; d < c; ++d)if (a.screens[d].name == b) return a.screens[d];
                return null
            }, Zjb = function (a, b, c) { Rjb(a.j, b, c) }, Wjb = function (a, b, c, d) {
                a.info("requestLoungeToken_ for " + b);
                var e = {
                    postParams: { screen_ids: b }, method: "POST", context: a, onSuccess: function (f, h) { f = h && h.screens || []; f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response")) },
                    onError: function () { d(Error("Request screen lounge token failed")) }
                };
                g.Xu(Z8(a.C, "/pairing/get_lounge_token_batch"), e)
            }, $jb = function (a) {
                a.screens = a.u.Aj();
                var b = a.D, c = {}, d; for (d in b) c[b[d]] = d; b = a.screens.length; for (d = 0; d < b; ++d) { var e = a.screens[d]; e.uuid = c[e.id] || "" } a.info("Updated manual screens: " + $gb(a.screens))
            }, Vjb = function (a) {
                akb(a);
                a.u = new h9(a.C); a.u.subscribe("screenChange", (0, g.Qa)(a.C_, a)); $jb(a); a.J || (a.B = Zgb(g.HA("yt-remote-automatic-screen-cache") || [])); akb(a); a.info("Initializing automatic screens: " + $gb(a.B)); a.j = new Qjb(a.C, (0, g.Qa)(a.Aj, a, !0)); a.j.subscribe("screenChange", (0, g.Qa)(function () { this.ma("onlineScreenChange") }, a))
            }, l9 = function (a, b) {
                var c = a.get(b.id);
                c ? (c.uuid = b.uuid, b = c) : ((c = g8(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), a.J || bkb(a)); akb(a); a.D[b.uuid] = b.id; g.GA("yt-remote-device-id-map", a.D, 31536E3); return b
            }, bkb = function (a) {
                a = g.Hm(a.B, function (b) { return "shortLived" != b.idType });
                g.GA("yt-remote-automatic-screen-cache", g.Wd(a, Xgb))
            }, akb = function (a) { a.D = g.HA("yt-remote-device-id-map") || {} }, m9 = function (a, b, c) {
                g.Tz.call(this);
                this.Ba = c; this.B = a; this.j = b; this.C = null
            }, n9 = function (a, b) {
                a.C = b;
                a.ma("sessionScreen", a.C)
            }, ckb = function (a, b) {
                a.C && (a.C.token = b, l9(a.B, a.C));
                a.ma("sessionScreen", a.C)
            }, o9 = function (a, b) { a9(a.Ba, b) }, p9 = function (a, b, c) {
                m9.call(this, a, b, "CastSession");
                var d = this; this.config_ = c; this.u = null; this.oa = (0, g.Qa)(this.NW, this); this.Aa = (0, g.Qa)(this.Y3, this); this.ea = g.Su(function () { dkb(d, null) }, 12E4);
                this.J = this.D = this.I = this.T = 0; this.ya = !1; this.Z = "unknown"
            }, fkb = function (a, b) {
                g.Uu(a.J);
                a.J = 0; 0 == b ? ekb(a) : a.J = g.Su(function () { ekb(a) }, b)
            }, ekb = function (a) {
                gkb(a, "getLoungeToken");
                g.Uu(a.D); a.D = g.Su(function () { hkb(a, null) }, 3E4)
            }, gkb = function (a, b) {
                a.info("sendYoutubeMessage_: " + b + " " + g.Zh());
                var c = {}; c.type = b; a.u ? a.u.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function () { }, (0, g.Qa)(function () { o9(this, "Failed to send message: " + b + ".") }, a)) : o9(a, "Sending yt message without session: " + g.Zh(c))
            }, ikb = function (a, b) { b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.getScreen() && a.getScreen().id == b || a.EQ(b, function (c) { n9(a, c) }, function () { return a.Ai() }, 5)) : a.Ai(Error("Waiting for session status timed out.")) }, kkb = function (a, b, c) {
                a.info("onConnectedScreenData_: Received screenData: " +
                    JSON.stringify(b));
                var d = new d8(b); jkb(a, d, function (e) { e ? (a.ya = !0, l9(a.B, d), n9(a, d), a.Z = "unknown", fkb(a, c)) : (g.Cu(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Ai()) }, 5)
            }, dkb = function (a, b) {
                g.Uu(a.ea);
                a.ea = 0; b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.getScreen() && a.getScreen().uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? kkb(a, { name: a.j.friendlyName, screenId: b.screenId, loungeToken: b.loungeToken, dialId: b.deviceId, screenIdType: "shortLived" }, b.loungeTokenRefreshIntervalMs) : (g.Cu(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), ikb(a, b.screenId))) : (g.Cu(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) +
                    ".")), ikb(a, b.screenId)) : ikb(a, b.screenId) : a.Ai(Error("Waiting for session status timed out."))
            }, hkb = function (a, b) {
                g.Uu(a.D);
                a.D = 0; var c = null; if (b) if (b.loungeToken) { var d; (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken") } else c = "missingLoungeToken"; else c = "noLoungeTokenResponse"; c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.Z = c, fkb(a, 3E4)) : (ckb(a, b.loungeToken), a.ya = !1, a.Z = "unknown", fkb(a, b.loungeTokenRefreshIntervalMs))
            }, jkb = function (a, b, c, d) {
                g.Uu(a.I);
                a.I = 0; Zjb(a.B, b, function (e) { e || 0 > d ? c(e) : a.I = g.Su(function () { jkb(a, b, c, d - 1) }, 300) })
            }, lkb = function (a) {
                g.Uu(a.T);
                a.T = 0; g.Uu(a.I); a.I = 0; g.Uu(a.ea); a.ea = 0; g.Uu(a.D); a.D = 0; g.Uu(a.J); a.J = 0
            }, q9 = function (a, b, c, d) {
                m9.call(this, a, b, "DialSession");
                this.config_ = d; this.u = this.T = null; this.Aa = ""; this.Oa = c; this.Ma = null; this.ea = function () { };
                this.Z = NaN; this.Ka = (0, g.Qa)(this.OW, this); this.D = function () { };
                this.J = this.I = 0; this.oa = !1; this.ya = "unknown"
            }, r9 = function (a) {
                var b;
                return !!(a.config_.enableDialLoungeToken && (null == (b = a.u) ? 0 : b.getDialAppInfo))
            }, mkb = function (a) {
                a.D = a.B.VN(a.Aa, a.j.label, a.j.friendlyName, r9(a), function (b, c) {
                    a.D = function () { };
                    a.oa = !0; n9(a, b); "shortLived" == b.idType && 0 < c && s9(a, c)
                }, function (b) {
                    a.D = function () { };
                    a.Ai(b)
                })
            }, nkb = function (a) {
                var b = {};
                b.pairingCode = a.Aa; b.theme = a.Oa; nhb() && (b.env_useStageMdx = 1); return g.ki(b)
            }, okb = function (a) {
                return new Promise(function (b) {
                    a.Aa = ahb();
                    if (a.Ma) { var c = new chrome.cast.DialLaunchResponse(!0, nkb(a)); b(c); mkb(a) } else a.ea = function () {
                        g.Uu(a.Z); a.ea = function () { };
                        a.Z = NaN; var d = new chrome.cast.DialLaunchResponse(!0, nkb(a)); b(d); mkb(a)
                    }, a.Z = g.Su(function () { a.ea() }, 100)
                })
            }, qkb = function (a, b, c) {
                a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
                var d = new d8(b); return (new Promise(function (e) { pkb(a, d, function (f) { f ? (a.oa = !0, l9(a.B, d), n9(a, d), s9(a, c)) : g.Cu(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")); e(f) }, 5) })).then(function (e) { return e ? new chrome.cast.DialLaunchResponse(!1) : okb(a) })
            }, rkb = function (a, b) {
                var c = a.T.receiver.label, d = a.j.friendlyName;
                return (new Promise(function (e) {
                    Xjb(a.B, c, b, d, function (f) { f && f.token && n9(a, f); e(f) }, function (f) {
                        o9(a, "Failed to get DIAL screen: " + f);
                        e(null)
                    })
                })).then(function (e) { return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : okb(a) })
            }, pkb = function (a, b, c, d) {
                g.Uu(a.I);
                a.I = 0; Zjb(a.B, b, function (e) { e || 0 > d ? c(e) : a.I = g.Su(function () { pkb(a, b, c, d - 1) }, 300) })
            }, s9 = function (a, b) {
                a.info("getDialAppInfoWithTimeout_ " + b);
                r9(a) && (g.Uu(a.J), a.J = 0, 0 == b ? skb(a) : a.J = g.Su(function () { skb(a) }, b))
            }, skb = function (a) {
                r9(a) && a.u.getDialAppInfo(function (b) {
                    a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                    b = b.extraData || {}; var c = null; if (b.loungeToken) { var d; (null == (d = a.getScreen()) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken") } else c = "missingLoungeToken"; c ? (a.ya = c, s9(a, 3E4)) : (a.oa = !1, a.ya = "unknown", ckb(a, b.loungeToken), s9(a, b.loungeTokenRefreshIntervalMs))
                }, function (b) {
                    a.info("getDialAppInfo error: " + b);
                    a.ya = "noLoungeTokenResponse"; s9(a, 3E4)
                })
            }, tkb = function (a) {
                g.Uu(a.I);
                a.I = 0; g.Uu(a.J); a.J = 0; a.D(); a.D = function () { };
                g.Uu(a.Z)
            }, t9 = function (a, b) {
                m9.call(this, a, b, "ManualSession");
                this.u = g.Su((0, g.Qa)(this.Rw, this, null), 150)
            }, u9 = function (a, b) {
                g.Tz.call(this);
                this.config_ = b; this.u = a; this.T = b.appId || "233637DE"; this.C = b.theme || "cl"; this.Z = b.disableCastApi || !1; this.I = b.forceMirroring || !1; this.j = null; this.J = !1; this.B = []; this.D = (0, g.Qa)(this.P2, this)
            }, ukb = function (a, b) { return b ? g.Rb(a.B, function (c) { return e8(b, c.label) }, a) : null }, v9 = function (a) { a9("Controller", a) }, Djb = function (a) { window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a) }, w9 = function (a) { return a.J || !!a.B.length || !!a.j }, x9 = function (a, b, c) {
                b != a.j && (g.$e(a.j), (a.j = b) ? (c ? a.ma("yt-remote-cast2-receiver-resumed",
                    b.j) : a.ma("yt-remote-cast2-receiver-selected", b.j), b.subscribe("sessionScreen", (0, g.Qa)(a.US, a, b)), b.subscribe("sessionFailed", function () { return vkb(a, b) }), b.getScreen() ? a.ma("yt-remote-cast2-session-change", b.getScreen()) : c && a.j.Rw(null)) : a.ma("yt-remote-cast2-session-change", null))
            }, vkb = function (a, b) { a.j == b && a.ma("yt-remote-cast2-session-failed") }, wkb = function (a) {
                var b = a.u.UN(), c = a.j && a.j.j;
                a = g.Wd(b, function (d) { c && e8(d, c.label) && (c = null); var e = d.uuid ? d.uuid : d.id, f = ukb(this, d); f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM); return f }, a);
                c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c)); return a
            }, Dkb = function (a, b, c, d) {
                d.disableCastApi ? y9("Cannot initialize because disabled by Mdx config.") : xkb() ? ykb(b, d) && (zkb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? Akb(a, c) : (window.__onGCastApiAvailable = function (e, f) {
                    e ? Akb(a, c) : (z9("Failed to load cast API: " + f), Bkb(!1), zkb(!1), g.IA("yt-remote-cast-available"), g.IA("yt-remote-cast-receiver"),
                        Ckb(), c(!1))
                }, d.loadCastApiSetupScript ? g.KA("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= ohb() && xhb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? shb() : 89 <= ohb() ? zhb() : (whb(), l8(yhb.map(thb))))) : y9("Cannot initialize because not running Chrome")
            }, Ckb = function () {
                y9("dispose");
                var a = A9(); a && a.dispose(); g.Fa("yt.mdx.remote.cloudview.instance_", null); Ekb(!1); g.qy(Fkb); Fkb.length = 0
            }, B9 = function () { return !!g.HA("yt-remote-cast-installed") }, Gkb = function () {
                var a = g.HA("yt-remote-cast-receiver");
                return a ? a.friendlyName : null
            }, Hkb = function () {
                y9("clearCurrentReceiver");
                g.IA("yt-remote-cast-receiver")
            }, Ikb = function () { return B9() ? A9() ? A9().getCastSession() : (z9("getCastSelector: Cast is not initialized."), null) : (z9("getCastSelector: Cast API is not installed!"), null) }, Jkb = function () { B9() ? A9() ? C9() ? (y9("Requesting cast selector."), A9().requestSession()) : (y9("Wait for cast API to be ready to request the session."), Fkb.push(g.py("yt-remote-cast2-api-ready", Jkb))) : z9("requestCastSelector: Cast is not initialized.") : z9("requestCastSelector: Cast API is not installed!") },
        D9 = function (a, b) { C9() ? A9().setConnectedScreenStatus(a, b) : z9("setConnectedScreenStatus called before ready.") }, xkb = function () {
            var a = 0 <= g.tb().search(/ (CrMo|Chrome|CriOS)\//);
            return g.eF || a
        }, Kkb = function (a, b) { A9().init(a, b) }, ykb = function (a, b) {
            var c = !1;
            A9() || (a = new u9(a, b), a.subscribe("yt-remote-cast2-availability-change", function (d) { g.GA("yt-remote-cast-available", d); b8("yt-remote-cast2-availability-change", d) }), a.subscribe("yt-remote-cast2-receiver-selected", function (d) {
                y9("onReceiverSelected: " + d.friendlyName);
                g.GA("yt-remote-cast-receiver", d); b8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function (d) {
                y9("onReceiverResumed: " + d.friendlyName);
                g.GA("yt-remote-cast-receiver", d); b8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function (d) {
                y9("onSessionChange: " + f8(d));
                d || g.IA("yt-remote-cast-receiver"); b8("yt-remote-cast2-session-change", d)
            }), g.Fa("yt.mdx.remote.cloudview.instance_", a), c = !0);
            y9("cloudview.createSingleton_: " + c); return c
        }, A9 = function () { return g.Ia("yt.mdx.remote.cloudview.instance_") }, Akb = function (a, b) {
            Bkb(!0);
            zkb(!1); Kkb(a, function (c) { c ? (Ekb(!0), g.ry("yt-remote-cast2-api-ready")) : (z9("Failed to initialize cast API."), Bkb(!1), g.IA("yt-remote-cast-available"), g.IA("yt-remote-cast-receiver"), Ckb()); b(c) })
        }, y9 = function (a) { a9("cloudview", a) }, z9 = function (a) { a9("cloudview", a) }, Bkb = function (a) {
            y9("setCastInstalled_ " + a);
            g.GA("yt-remote-cast-installed", a)
        }, C9 = function () { return !!g.Ia("yt.mdx.remote.cloudview.apiReady_") }, Ekb = function (a) {
            y9("setApiReady_ " + a);
            g.Fa("yt.mdx.remote.cloudview.apiReady_", a)
        }, zkb = function (a) { g.Fa("yt.mdx.remote.cloudview.initializing_", a) }, E9 = function (a) {
            this.index = -1;
            this.videoId = this.listId = ""; this.volume = this.playerState = -1; this.muted = !1; this.audioTrackId = null; this.I = this.J = 0; this.trackData = null; this.hasNext = this.Cn = !1; this.T = this.D = this.j = this.C = 0; this.B = NaN; this.u = !1; this.reset(a)
        }, Lkb = function (a) {
            a.audioTrackId = null;
            a.trackData = null; a.playerState = -1; a.Cn = !1; a.hasNext = !1; a.J = 0; a.I = g.Ta(); a.C = 0; a.j = 0; a.D = 0; a.T = 0; a.B = NaN; a.u = !1
        }, F9 = function (a) { return a.Rc() ? (g.Ta() - a.I) / 1E3 : 0 }, G9 = function (a, b) {
            a.J = b;
            a.I = g.Ta()
        }, H9 = function (a) {
            switch (a.playerState) {
                case 1: case 1081: return (g.Ta() - a.I) / 1E3 + a.J;
                case -1E3: return 0
            }return a.J
        }, I9 = function (a, b, c) {
            var d = a.videoId;
            a.videoId = b; a.index = c; b != d && Lkb(a)
        }, Mkb = function (a) {
            var b = {};
            b.index = a.index; b.listId = a.listId; b.videoId = a.videoId; b.playerState = a.playerState; b.volume = a.volume; b.muted = a.muted; b.audioTrackId = a.audioTrackId; b.trackData = g.zf(a.trackData); b.hasPrevious = a.Cn; b.hasNext = a.hasNext; b.playerTime = a.J; b.playerTimeAt = a.I; b.seekableStart = a.C; b.seekableEnd = a.j; b.duration = a.D; b.loadedTime = a.T; b.liveIngestionTime = a.B; return b
        }, K9 = function (a, b) {
            g.Tz.call(this);
            this.B = 0; this.C = a; this.I = []; this.D = new pjb; this.u = this.j = null; this.Z = (0, g.Qa)(this.A1, this); this.J = (0, g.Qa)(this.DA, this); this.T = (0, g.Qa)(this.z1, this); this.ea = (0, g.Qa)(this.B1, this); var c = 0; a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.YL, this), Nkb(this))) : c = 3; 0 != c && (b ? this.YL(c) : g.Su((0, g.Qa)(function () { this.YL(c) }, this), 0));
            (a = Ikb()) && J9(this, a); this.subscribe("yt-remote-cast2-session-change", this.ea)
        }, L9 = function (a) { return new E9(a.C.getPlayerContextData()) }, Nkb = function (a) { g.sc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function (b) { this.I.push(this.C.subscribe(b, g.Sa(this.N2, b), this)) }, a) }, Okb = function (a) {
            g.sc(a.I, function (b) { this.C.unsubscribeByKey(b) }, a);
            a.I.length = 0
        }, M9 = function (a) { return 1 == a.getState() }, N9 = function (a, b) {
            var c = a.D;
            50 > c.j.length + c.u.length && a.D.u.push(b)
        }, Pkb = function (a, b, c) {
            var d = L9(a);
            G9(d, c); -1E3 != d.playerState && (d.playerState = b); O9(a, d)
        }, P9 = function (a, b, c) { a.C.sendMessage(b, c) }, O9 = function (a, b) {
            Okb(a);
            a.C.setPlayerContextData(Mkb(b)); Nkb(a)
        }, J9 = function (a, b) {
            a.u && (a.u.removeUpdateListener(a.Z), a.u.removeMediaListener(a.J), a.DA(null));
            a.u = b; a.u && (b9("Setting cast session: " + a.u.sessionId), a.u.addUpdateListener(a.Z), a.u.addMediaListener(a.J), a.u.media.length && a.DA(a.u.media[0]))
        }, Qkb = function (a) {
            var b = a.j.media, c = a.j.customData;
            if (b && c) { var d = L9(a); b.contentId != d.videoId && b9("Cast changing video to: " + b.contentId); d.videoId = b.contentId; d.playerState = c.playerState; G9(d, a.j.getEstimatedTime()); O9(a, d) } else b9("No cast media video. Ignoring state update.")
        }, Q9 = function (a, b, c) {
            return (0, g.Qa)(function (d) {
                this.xf("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.xf("Retrying " + b + " using MDx browser channel."), P9(this, b, c))
            }, a)
        }, T9 = function (a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.Tz.call(this); var e = this; this.I = NaN; this.Aa = !1; this.Z = this.T = this.oa = this.ya = NaN; this.ea = []; this.D = this.J = this.C = this.j = this.u = null; this.Ma = a; this.Ka = d; this.ea.push(g.Lx(window, "beforeunload", function () { e.lw(2) }));
            this.B = []; this.j = new E9; this.Oa = b.id; this.Ba = b.idType; this.u = Cjb(this.Ma, c, this.ZN, "shortLived" == this.Ba, this.Oa); this.u.Pa("channelOpened", function () { Rkb(e) });
            this.u.Pa("channelClosed", function () { R9("Channel closed"); isNaN(e.I) ? j8(!0) : j8(); e.dispose() });
            this.u.Pa("channelError", function (f) { j8(); isNaN(e.Lz()) ? (1 == f && "shortLived" == e.Ba && e.ma("browserChannelAuthError", f), R9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Aa = !0, R9("Channel error: " + f + " with reconnection in " + e.Lz() + " ms"), S9(e, 2)) });
            this.u.Pa("channelMessage", function (f) { Skb(e, f) });
            this.u.Gp(b.token); this.subscribe("remoteQueueChange", function () { var f = e.j.videoId; g.JA() && g.GA("yt-remote-session-video-id", f) })
        }, Tkb = function (a) { return g.Rb(a.B, function (b) { return "LOUNGE_SCREEN" == b.type }) }, R9 = function (a) { a9("conn", a) }, S9 = function (a, b) { a.ma("proxyStateChange", b) }, Ukb = function (a) {
            a.I = g.Su(function () {
                R9("Connecting timeout");
                a.lw(1)
            }, 2E4)
        }, Vkb = function (a) {
            g.Uu(a.I);
            a.I = NaN
        }, Wkb = function (a) {
            g.Uu(a.ya);
            a.ya = NaN
        }, Ykb = function (a) {
            Xkb(a);
            a.oa = g.Su(function () { U9(a, "getNowPlaying") }, 2E4)
        }, Xkb = function (a) {
            g.Uu(a.oa);
            a.oa = NaN
        }, Rkb = function (a) {
            R9("Channel opened");
            a.Aa && (a.Aa = !1, Wkb(a), a.ya = g.Su(function () { R9("Timing out waiting for a screen."); a.lw(1) }, 15E3))
        }, $kb = function (a, b) {
            var c = null;
            if (b) { var d = Tkb(a); d && (c = { clientName: d.clientName, deviceMake: d.brand, deviceModel: d.model, osVersion: d.osVersion }) } g.Fa("yt.mdx.remote.remoteClient_", c); b && (Vkb(a), Wkb(a)); c = a.u.Iw() && isNaN(a.I); b == c ? b && (S9(a, 1), U9(a, "getSubtitlesTrack")) : b ? (a.CQ() && a.j.reset(), S9(a, 1), U9(a, "getNowPlaying"), Zkb(a)) : a.lw(1)
        }, alb = function (a, b) {
            var c = b.params.videoId;
            delete b.params.videoId; c == a.j.videoId && (g.tf(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.ma("remotePlayerChange"))
        }, blb = function (a, b, c) {
            var d = b.params.videoId || b.params.video_id, e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId; I9(a.j, d, e); a.ma("remoteQueueChange", c)
        }, dlb = function (a, b) {
            b.params = b.params || {};
            blb(a, b, "NOW_PLAYING_MAY_CHANGE"); clb(a, b); a.ma("autoplayDismissed")
        }, clb = function (a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            G9(a.j, isNaN(c) ? 0 : c); c = parseInt(b.params.state, 10); c = isNaN(c) ? -1 : c; -1 == c && -1E3 == a.j.playerState && (c = -1E3); a.j.playerState = c; c = Number(b.params.loadedTime); a.j.T = isNaN(c) ? 0 : c; a.j.Tj(Number(b.params.duration)); c = a.j; var d = Number(b.params.liveIngestionTime); c.B = d; c.u = isNaN(d) ? !1 : !0; c = a.j; d = Number(b.params.seekableStartTime); b = Number(b.params.seekableEndTime); c.C = isNaN(d) ? 0 : d; c.j = isNaN(b) ? 0 : b; 1 == a.j.playerState ? Ykb(a) : Xkb(a); a.ma("remotePlayerChange")
        }, elb = function (a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) { case 1: c = 1081; break; case 2: c = 1084; break; case 0: c = 1083 }a.j.playerState = c; b = parseInt(b.params.currentTime, 10); G9(a.j, isNaN(b) ? 0 : b); a.ma("remotePlayerChange")
            }
        }, flb = function (a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10); a.j.muted = c; a.ma("remotePlayerChange")
        }, glb = function (a, b) {
            a.J = b.params.videoId;
            a.ma("nowAutoplaying", parseInt(b.params.timeout, 10))
        }, hlb = function (a, b) {
            a.J = b.params.videoId || null;
            a.ma("autoplayUpNext", a.J)
        }, ilb = function (a, b) {
            a.D = b.params.autoplayMode;
            a.ma("autoplayModeChange", a.D); "DISABLED" == a.D && a.ma("autoplayDismissed")
        }, jlb = function (a, b) {
            var c = "true" == b.params.hasNext;
            a.j.Cn = "true" == b.params.hasPrevious; a.j.hasNext = c; a.ma("previousNextChange")
        }, Skb = function (a, b) {
            b = b.message;
            b.params ? R9("Received: action=" + b.action + ", params=" + g.Zh(b.params)) : R9("Received: action=" + b.action + " {}"); switch (b.action) {
                case "loungeStatus": b = a8(b.params.devices); a.B = g.Wd(b, function (d) { return new c8(d) });
                    b = !!g.Rb(a.B, function (d) { return "LOUNGE_SCREEN" == d.type });
                    $kb(a, b); b = a.pR("mlm"); a.ma("multiStateLoopEnabled", b); break; case "loungeScreenDisconnected": g.dc(a.B, function (d) { return "LOUNGE_SCREEN" == d.type });
                    $kb(a, !1); break; case "remoteConnected": var c = new c8(a8(b.params.device)); g.Rb(a.B, function (d) { return d.equals(c) }) || Ngb(a.B, c);
                    break; case "remoteDisconnected": c = new c8(a8(b.params.device)); g.dc(a.B, function (d) { return d.equals(c) });
                    break; case "gracefulDisconnect": break; case "playlistModified": blb(a, b, "QUEUE_MODIFIED"); break; case "nowPlaying": dlb(a, b); break; case "onStateChange": clb(a, b); break; case "onAdStateChange": elb(a, b); break; case "onVolumeChanged": flb(a, b); break; case "onSubtitlesTrackChanged": alb(a, b); break; case "nowAutoplaying": glb(a, b); break; case "autoplayDismissed": a.ma("autoplayDismissed"); break; case "autoplayUpNext": hlb(a, b); break; case "onAutoplayModeChanged": ilb(a, b); break; case "onHasPreviousNextChanged": jlb(a, b);
                    break; case "requestAssistedSignIn": a.ma("assistedSignInRequested", b.params.authCode); break; case "onLoopModeChanged": a.ma("loopModeChange", b.params.loopMode); break; default: R9("Unrecognized action: " + b.action)
            }
        }, Zkb = function (a) {
            g.Uu(a.Z);
            a.Z = g.Su(function () { a.lw(1) }, 864E5)
        }, U9 = function (a, b, c) {
            c ? R9("Sending: action=" + b + ", params=" + g.Zh(c)) : R9("Sending: action=" + b);
            a.u.sendMessage(b, c)
        }, klb = function (a) {
            f9.call(this, "ScreenServiceProxy");
            this.jg = a; this.j = []; this.j.push(this.jg.$_s("screenChange", (0, g.Qa)(this.SW, this))); this.j.push(this.jg.$_s("onlineScreenChange", (0, g.Qa)(this.t2, this)))
        }, plb = function (a, b) {
            mhb();
            if (!k8 || !k8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.L("MDX_CONFIG") || b; dhb(); hhb(); V9 || (V9 = new Y8(b ? b.loungeApiHost : void 0), nhb() && (V9.j = "/api/loungedev")); W9 || (W9 = g.Ia("yt.mdx.remote.deferredProxies_") || [], g.Fa("yt.mdx.remote.deferredProxies_", W9)); llb(); var c = X9(); if (!c) {
                    var d = new k9(V9, b ? b.disableAutomaticScreenCache || !1 : !1); g.Fa("yt.mdx.remote.screenService_", d); c = X9(); var e = {}; b && (e = {
                        appId: b.appId, disableDial: b.disableDial, theme: b.theme, loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi, enableDialLoungeToken: b.enableDialLoungeToken, enableCastLoungeToken: b.enableCastLoungeToken, forceMirroring: b.forceMirroring
                    }); g.Fa("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1); Dkb(a, d, function (f) { f ? Y9() && D9(Y9(), "YouTube TV") : d.subscribe("onlineScreenChange", function () { b8("yt-remote-receiver-availability-change") }) }, e)
                } b && !g.Ia("yt.mdx.remote.initialized_") && (g.Fa("yt.mdx.remote.initialized_", !0), Z9("Initializing: " + g.Zh(b)),
                    $9.push(g.py("yt-remote-cast2-api-ready", function () { b8("yt-remote-api-ready") })), $9.push(g.py("yt-remote-cast2-availability-change", function () { b8("yt-remote-receiver-availability-change") })), $9.push(g.py("yt-remote-cast2-receiver-selected", function () {
                        a$(null);
                        b8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), $9.push(g.py("yt-remote-cast2-receiver-resumed", function () { b8("yt-remote-receiver-resumed", "cast-selector-receiver") })), $9.push(g.py("yt-remote-cast2-session-change", mlb)), $9.push(g.py("yt-remote-connection-change", function (f) { f ? D9(Y9(), "YouTube TV") : b$() || (D9(null, null), Hkb()) })), $9.push(g.py("yt-remote-cast2-session-failed", function () { b8("yt-remote-connection-failed") })), a = nlb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.xu("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), Z9(" -- with channel params: " + g.Zh(a)), a ? (g.GA("yt-remote-session-app", a.app), g.GA("yt-remote-session-name", a.name)) : (g.IA("yt-remote-session-app"), g.IA("yt-remote-session-name")), g.Fa("yt.mdx.remote.channelParams_", a), c.start(), Y9() || olb())
            }
        }, qlb = function () {
            var a = X9().jg.$_gos();
            var b = c$(); b && d$() && (chb(a, b) || a.push(b)); return bhb(a)
        }, slb = function () {
            var a = rlb();
            !a && B9() && Gkb() && (a = { key: "cast-selector-receiver", name: Gkb() }); return a
        }, rlb = function () {
            var a = qlb(), b = c$();
            b || (b = b$()); return g.Rb(a, function (c) { return b && e8(b, c.key) ? !0 : !1 })
        }, c$ = function () {
            var a = Y9();
            if (!a) return null; var b = X9().Aj(); return g8(b, a)
        }, mlb = function (a) {
            Z9("remote.onCastSessionChange_: " + f8(a));
            if (a) { var b = c$(); if (b && b.id == a.id) { if (D9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) e$ && (e$.token = a), (b = d$()) && b.Gp(a) } else b && f$(), g$(a, 1) } else d$() && f$()
        }, f$ = function () {
            C9() ? A9().stopSession() : z9("stopSession called before API ready.");
            var a = d$(); a && (a.disconnect(1), tlb(null))
        }, ulb = function () {
            var a = d$();
            return !!a && 3 != a.getProxyState()
        }, Z9 = function (a) { a9("remote", a) }, X9 = function () {
            if (!vlb) {
                var a = g.Ia("yt.mdx.remote.screenService_");
                vlb = a ? new klb(a) : null
            } return vlb
        }, Y9 = function () { return g.Ia("yt.mdx.remote.currentScreenId_") }, wlb = function (a) { g.Fa("yt.mdx.remote.currentScreenId_", a) }, xlb = function () { return g.Ia("yt.mdx.remote.connectData_") }, a$ = function (a) { g.Fa("yt.mdx.remote.connectData_", a) }, d$ = function () { return g.Ia("yt.mdx.remote.connection_") }, tlb = function (a) {
            var b = d$();
            a$(null); a || wlb(""); g.Fa("yt.mdx.remote.connection_", a); W9 && (g.sc(W9, function (c) { c(a) }), W9.length = 0);
            b && !a ? b8("yt-remote-connection-change", !1) : !b && a && b8("yt-remote-connection-change", !0)
        }, b$ = function () {
            var a = g.JA();
            if (!a) return null; var b = X9(); if (!b) return null; b = b.Aj(); return g8(b, a)
        }, g$ = function (a, b) {
            Y9();
            c$() && c$(); if (h$) e$ = a; else {
                wlb(a.id); var c = g.Ia("yt.mdx.remote.enableConnectWithInitialState_") || !1; a = new T9(V9, a, nlb(), c); a.connect(b, xlb()); a.subscribe("beforeDisconnect", function (d) { b8("yt-remote-before-disconnect", d) });
                a.subscribe("beforeDispose", function () { d$() && (d$(), tlb(null)) });
                a.subscribe("browserChannelAuthError", function () { var d = c$(); d && "shortLived" == d.idType && (C9() ? A9().handleBrowserChannelAuthError() : z9("refreshLoungeToken called before API ready.")) });
                tlb(a)
            }
        }, olb = function () {
            var a = b$();
            a ? (Z9("Resume connection to: " + f8(a)), g$(a, 0)) : (j8(), Hkb(), Z9("Skipping connecting because no session screen found."))
        }, llb = function () {
            var a = nlb();
            if (g.tf(a)) { a = i8(); var b = g.HA("yt-remote-session-name") || "", c = g.HA("yt-remote-session-app") || ""; a = { device: "REMOTE_CONTROL", id: a, name: b, app: c, mdxVersion: 3 }; g.Fa("yt.mdx.remote.channelParams_", a) }
        }, nlb = function () { return g.Ia("yt.mdx.remote.channelParams_") || {} }, Alb = function (a, b, c) {
            g.I.call(this);
            var d = this; this.module = a; this.G = b; this.uc = c; this.events = new g.bF(this); this.Z = this.events.S(this.G, "onVolumeChange", function (e) { ylb(d, e) });
            this.C = !1; this.D = new g.iL(64); this.j = new g.jo(this.hU, 500, this); this.u = new g.jo(this.iU, 1E3, this); this.J = new n8(this.C5, 0, this); this.B = {}; this.T = new g.jo(this.VU, 1E3, this); this.I = new o8(this.seekTo, 1E3, this); g.K(this, this.events); this.events.S(b, "onCaptionsTrackListChanged", this.Y1); this.events.S(b, "captionschanged", this.v1); this.events.S(b, "captionssettingschanged", this.qU); this.events.S(b, "videoplayerreset", this.DE); this.events.S(b, "mdxautoplaycancel", function () { d.uc.UP() });
            b.N("enable_mdx_video_play_directly") && this.events.S(b, "videodatachange", function () { zlb(d.module) || i$(d) || j$(d, 0) });
            a = this.uc; a.isDisposed(); a.subscribe("proxyStateChange", this.QS, this); a.subscribe("remotePlayerChange", this.IA, this); a.subscribe("remoteQueueChange", this.DE, this); a.subscribe("previousNextChange", this.NS, this); a.subscribe("nowAutoplaying", this.HS, this); a.subscribe("autoplayDismissed", this.kS, this); g.K(this, this.j); g.K(this, this.u); g.K(this, this.J); g.K(this, this.T); g.K(this, this.I); this.qU(); this.DE(); this.IA()
        }, ylb = function (a, b) {
            if (i$(a)) {
                a.uc.unsubscribe("remotePlayerChange", a.IA, a);
                var c = Math.round(b.volume); b = !!b.muted; var d = L9(a.uc); if (c !== d.volume || b !== d.muted) a.uc.setVolume(c, b), a.T.start(); a.uc.subscribe("remotePlayerChange", a.IA, a)
            }
        }, Blb = function (a) {
            a.jc(0);
            a.j.stop(); a.Zb(new g.iL(64))
        }, Clb = function (a, b) {
            if (i$(a) && !a.C) {
                var c = null;
                b && (c = { style: a.G.getSubtitlesUserSettings() }, g.Bf(c, b)); a.uc.YN(a.G.getVideoData(1).videoId, c); a.B = L9(a.uc).trackData
            }
        }, j$ = function (a, b) {
            var c = a.G.getPlaylist();
            if (null == c ? 0 : c.listId) { var d = c.index; var e = c.listId.toString() } c = a.G.getVideoData(1); a.uc.playVideo(c.videoId, b, d, e, c.playerParams, c.ya, Mgb(c)); a.Zb(new g.iL(1))
        }, Dlb = function (a, b) {
            if (b) {
                var c = a.G.getOption("captions", "tracklist", { gR: 1 });
                c && c.length ? (a.G.setOption("captions", "track", b), a.C = !1) : (a.G.loadModule("captions"), a.C = !0)
            } else a.G.setOption("captions", "track", {})
        }, i$ = function (a) { return L9(a.uc).videoId === a.G.getVideoData(1).videoId }, k$ = function () {
            g.V.call(this, {
                F: "div",
                K: "ytp-mdx-popup-dialog", X: { role: "dialog" }, W: [{
                    F: "div", K: "ytp-mdx-popup-dialog-inner-content", W: [{ F: "div", K: "ytp-mdx-popup-title", qa: "\u60a8\u5df2\u9000\u51fa\u5e10\u53f7" }, { F: "div", K: "ytp-mdx-popup-description", qa: "\u60a8\u89c2\u770b\u7684\u89c6\u9891\u53ef\u80fd\u4f1a\u6dfb\u52a0\u5230\u7535\u89c6\u7684\u89c2\u770b\u8bb0\u5f55\u4e2d\uff0c\u5e76\u5f71\u54cd\u7535\u89c6\u4e0a\u7684\u63a8\u8350\u5185\u5bb9\u3002\u4e3a\u907f\u514d\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u53d6\u6d88\u5e76\u5728\u8ba1\u7b97\u673a\u4e0a\u767b\u5f55 YouTube\u3002" },
                    { F: "div", K: "ytp-mdx-privacy-popup-buttons", W: [{ F: "button", Ga: ["ytp-button", "ytp-mdx-privacy-popup-cancel"], qa: "\u53d6\u6d88" }, { F: "button", Ga: ["ytp-button", "ytp-mdx-privacy-popup-confirm"], qa: "\u786e\u8ba4" }] }]
                }]
            }); this.j = new g.dN(this, 250); this.cancelButton = this.Da("ytp-mdx-privacy-popup-cancel"); this.confirmButton = this.Da("ytp-mdx-privacy-popup-confirm"); g.K(this, this.j); this.S(this.cancelButton, "click", this.u); this.S(this.confirmButton, "click", this.B)
        }, l$ = function (a) {
            g.V.call(this, {
                F: "div",
                K: "ytp-remote", W: [{ F: "div", K: "ytp-remote-display-status", W: [{ F: "div", K: "ytp-remote-display-status-icon", W: [g.XGa()] }, { F: "div", K: "ytp-remote-display-status-text", qa: "{{statustext}}" }] }]
            }); this.api = a; this.j = new g.dN(this, 250); g.K(this, this.j); this.S(a, "presentingplayerstatechange", this.onStateChange); this.Gc(a.Db())
        }, m$ = function (a, b) {
            g.US.call(this, "\u64ad\u653e\u8bbe\u5907", 1, a, b);
            this.G = a; this.Hr = {}; this.S(a, "onMdxReceiversChange", this.u); this.S(a, "presentingplayerstatechange", this.u); this.u()
        }, Elb = function (a) {
            g.IP.call(this, a);
            this.Mn = { key: ahb(), name: "\u6b64\u8ba1\u7b97\u673a" }; this.rk = null; this.subscriptions = []; this.mL = this.uc = null; this.Hr = [this.Mn]; this.lq = this.Mn; this.Jd = new g.iL(64); this.zR = 0; this.Xg = -1; this.SA = !1; this.QA = this.kx = null; if (!g.eH(this.player.V()) && !g.fH(this.player.V())) { a = this.player; var b = g.yO(a); b && (b = b.Ll()) && (b = new m$(a, b), g.K(this, b)); b = new l$(a); g.K(this, b); g.aP(a, b.element, 4); this.kx = new k$; g.K(this, this.kx); g.aP(a, this.kx.element, 4); this.SA = !!b$() }
        }, n$ = function (a) {
            a.QA && (a.player.removeEventListener("presentingplayerstatechange",
                a.QA), a.QA = null)
        }, Flb = function (a, b, c) {
            a.Jd = c;
            a.player.ma("presentingplayerstatechange", new g.BK(c, b))
        }, o$ = function (a, b) {
            if (b.key !== a.lq.key) if (b.key === a.Mn.key) f$();
            else if (zlb(a) && Glb(a), a.lq = b, !a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web") || !g.fH(a.player.V())) {
                var c = a.player.getPlaylistId(); var d = a.player.getVideoData(1); var e = d.videoId; if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.V().N("should_clear_video_data_on_player_cued_unstarted")) d = null; else {
                    var f = a.player.getPlaylist(); if (f) { var h = []; for (var l = 0; l < f.length; l++)h[l] = g.DP(f, l).videoId } else h = [e]; f = a.player.getCurrentTime(1); a = {
                        videoIds: h, listId: c,
                        videoId: e, playerParams: d.playerParams, clickTrackingParams: d.ya, index: Math.max(a.player.getPlaylistIndex(), 0), currentTime: 0 === f ? void 0 : f
                    }; (d = Mgb(d)) && (a.locationInfo = d); d = a
                } Z9("Connecting to: " + g.Zh(b)); "cast-selector-receiver" == b.key ? (a$(d || null), b = d || null, C9() ? A9().setLaunchParams(b) : z9("setLaunchParams called before ready.")) : !d && ulb() && Y9() == b.key ? b8("yt-remote-connection-change", !0) : (f$(), a$(d || null), d = X9().Aj(), (b = g8(d, b.key)) && g$(b, 1))
            }
        }, zlb = function (a) {
            var b;
            (b = !a.player.V().N("mdx_enable_privacy_disclosure_ui")) || (b = ((b = g.L("PLAYER_CONFIG")) && b.args && void 0 !== b.args.authuser ? !0 : !(!g.L("SESSION_INDEX") && !g.L("LOGGED_IN"))) || a.SA || !a.kx); return b ? !1 : g.vH(a.player.V()) || g.yH(a.player.V())
        }, Glb = function (a) {
            a.player.Db().Rc() ? a.player.pauseVideo() : (a.QA = function (b) { !a.SA && g.DK(b, 8) && (a.player.pauseVideo(), n$(a)) }, a.player.addEventListener("presentingplayerstatechange", a.QA));
            a.kx && a.kx.Lc(); d$() || (h$ = !0)
        };
    g.tq.prototype.Bq = g.ba(1, function () { return g.pd(this, 6) });
    g.de.prototype.cC = g.ba(0, function () { var a = g.he(this); return 4294967296 * g.he(this) + (a >>> 0) });
    var ygb, Hlb = g.Oe(function (a, b, c) { if (1 !== a.u) return !1; g.C(b, c, g.ie(a.j)); return !0 }, g.Pe), Ilb = g.Oe(function (a, b, c, d) {
        if (1 !== a.u) return !1;
        g.Id(b, c, d, g.ie(a.j)); return !0
    }, g.Pe), Jlb = g.Oe(function (a, b, c) {
        if (0 !== a.u) return !1;
        g.C(b, c, g.fe(a.j)); return !0
    }, g.Qe), Klb = g.Oe(function (a, b, c, d) {
        if (0 !== a.u) return !1;
        g.Id(b, c, d, g.fe(a.j)); return !0
    }, g.Qe), Llb = g.Oe(function (a, b, c) {
        if (0 !== a.u) return !1;
        g.C(b, c, g.ge(a.j)); return !0
    }, g.Re), Mlb = g.Oe(function (a, b, c, d) {
        if (0 !== a.u) return !1;
        g.Id(b, c, d, g.ge(a.j)); return !0
    }, g.Re), Nlb = g.Oe(function (a, b, c) {
        if (1 !== a.u) return !1;
        g.C(b, c, a.j.cC()); return !0
    }, function (a, b, c) { Agb(a, c, g.pd(b, c)) }), Olb = g.Oe(function (a, b, c) {
        if (1 !== a.u && 2 !== a.u) return !1;
        b = g.wd(b, c, 0, !1, g.Zc(b.Ce)); if (2 == a.u) { c = g.de.prototype.cC; var d = g.ge(a.j) >>> 0; for (d = a.j.j + d; a.j.j < d;)b.push(c.call(a.j)) } else b.push(a.j.cC()); return !0
    }, function (a, b, c) {
        b = g.wd(b, c, 0, !1, g.Zc(b.Ce));
        if (null != b) for (var d = 0; d < b.length; d++)Agb(a, c, b[d])
    }), Plb = g.Oe(function (a, b, c) {
        if (0 !== a.u) return !1;
        g.C(b, c, g.je(a.j)); return !0
    }, Bgb), Qlb = g.Oe(function (a, b, c, d) {
        if (0 !== a.u) return !1;
        g.Id(b, c, d, g.je(a.j)); return !0
    }, Bgb), Rlb = g.Oe(function (a, b, c) {
        if (2 !== a.u) return !1;
        a = g.se(a); g.Gd(b, c, a); return !0
    }, function (a, b, c) {
        b = g.zd(b, c, wgb, !1);
        if (null != b) for (var d = 0; d < b.length; d++) { var e = b[d]; null != e && g.Ee(a, c, g.uaa(e)) }
    }), Slb = g.Oe(function (a, b, c, d) {
        if (2 !== a.u) return !1;
        g.Id(b, c, d, g.se(a)); return !0
    }, g.tca), Tlb = g.Oe(function (a, b, c, d, e) {
        if (2 !== a.u) return !1;
        g.pe(a, g.wba(b, d, c), e); return !0
    }, g.uca), Cgb = [1];
    g.v(Dgb, g.H); g.v(Egb, g.H); var Ulb = [Dgb, 1, g.x2, [Egb, 1, Hlb, 2, Jlb]]; g.v(Fgb, g.H); g.v(Ggb, g.H); g.v(Hgb, g.H);
    var Vlb = [1, 2], Wlb = [g.Ih, 1, g.w2, 5, Nlb, 2, Tlb, [Fgb, 1, g.y2, [Ggb, 1, g.w2, 2, g.w2, 3, Plb], Vlb, 2, g.y2, [Hgb, 1, g.w2, 2, g.w2, 3, Llb, 4, Plb], Vlb], 3, Rlb, 6, Olb, 4, g.x2, [g.Mh, 1, g.x2, [g.Nh, 1, Slb, g.Qh, 2, Mlb, g.Qh, 3, Qlb, g.Qh], 2, Tlb, [g.Oh, 1, Klb, g.Ph, 2, Ilb, g.Ph, 3, g.y2, Ulb, g.Ph]]], Oib = { "\x00": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" }, P8 = { "'": "\\'" }, Vgb = {
        Yda: "atp", GTa: "ska", bQa: "que", qHa: "mus", FTa: "sus", Uua: "dsp", yRa: "seq", FGa: "mic", Mna: "dpa", Uea: "cds", fHa: "mlm",
        Hna: "dsdtr", qIa: "ntb"
    }, Wgb = { HY: "u", CLASSIC: "cl", VX: "k", RV: "i", AV: "cr", cY: "m", NV: "g", TO: "up" }; c8.prototype.equals = function (a) { return a ? this.id == a.id : !1 };
    var k8, ghb = "", vhb = phb("loadCastFramework") || phb("loadCastApplicationFramework"), yhb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"]; g.Ua(n8, g.I); g.k = n8.prototype; g.k.pW = function (a) { this.C = arguments; this.j = !1; this.yc ? this.B = g.Ta() + this.Nh : this.yc = g.Fh(this.D, this.Nh) };
    g.k.stop = function () { this.yc && (g.Da.clearTimeout(this.yc), this.yc = null); this.B = null; this.j = !1; this.C = [] };
    g.k.pause = function () { ++this.u };
    g.k.resume = function () { this.u && (--this.u, !this.u && this.j && (this.j = !1, this.I.apply(null, this.C))) };
    g.k.ra = function () { this.stop(); n8.kf.ra.call(this) };
    g.k.qW = function () { this.yc && (g.Da.clearTimeout(this.yc), this.yc = null); this.B ? (this.yc = g.Fh(this.D, this.B - g.Ta()), this.B = null) : this.u ? this.j = !0 : (this.j = !1, this.I.apply(null, this.C)) }; g.v(o8, g.I); g.k = o8.prototype; g.k.vG = function (a) { this.B = arguments; this.yc || this.u ? this.j = !0 : Khb(this) };
    g.k.stop = function () { this.yc && (g.Da.clearTimeout(this.yc), this.yc = null, this.j = !1, this.B = null) };
    g.k.pause = function () { this.u++ };
    g.k.resume = function () { this.u--; this.u || !this.j || this.yc || (this.j = !1, Khb(this)) };
    g.k.ra = function () { g.I.prototype.ra.call(this); this.stop() }; p8.prototype.stringify = function (a) { return g.Da.JSON.stringify(a, void 0) };
    p8.prototype.parse = function (a) { return g.Da.JSON.parse(a, void 0) }; g.Ua(Lhb, g.cf); g.Ua(Mhb, g.cf); var Nhb = null; g.Ua(Phb, g.cf); g.Ua(Qhb, g.cf); g.Ua(Rhb, g.cf); Shb.prototype.info = function () { };
    Shb.prototype.warning = function () { }; var Zhb = {}, v8 = {}; g.k = t8.prototype; g.k.setTimeout = function (a) { this.yb = a };
    g.k.tW = function (a) { a = a.target; var b = this.Wa; b && 3 == g.Ci(a) ? b.vG() : this.CN(a) };
    g.k.CN = function (a) {
        try {
            if (a == this.j) a: {
                var b = g.Ci(this.j), c = this.j.u, d = this.j.getStatus(); if (!(3 > b) && (3 != b || g.zH || this.j && (this.u.u || g.Ei(this.j) || g.Fi(this.j)))) {
                    this.Ka || 4 != b || 7 == c || (8 == c || 0 >= d ? q8(3) : q8(2)); y8(this); var e = this.j.getStatus(); this.Vb = e; b: if (Xhb(this)) {
                        var f = g.Fi(this.j); a = ""; var h = f.length, l = 4 == g.Ci(this.j); if (!this.u.B) { if ("undefined" === typeof TextDecoder) { w8(this); x8(this); var m = ""; break b } this.u.B = new g.Da.TextDecoder } for (c = 0; c < h; c++)this.u.u = !0, a += this.u.B.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        }); f.splice(0, h); this.u.j += a; this.ea = 0; m = this.u.j
                    } else m = g.Ei(this.j); if (this.B = 200 == e) { if (this.pc && !this.Sa) { b: { if (this.j) { var n = g.Gi(this.j, "X-HTTP-Initial-Response"); if (n && !g.fb(n)) { var p = n; break b } } p = null } if (e = p) this.Sa = !0, $hb(this, e); else { this.B = !1; this.I = 3; r8(12); w8(this); x8(this); break a } } this.Ba ? (aib(this, b, m), g.zH && this.B && 3 == b && (this.ib.Pa(this.kb, "tick", this.sW), this.kb.start())) : $hb(this, m); 4 == b && w8(this); this.B && !this.Ka && (4 == b ? cib(this.D, this) : (this.B = !1, u8(this))) } else g.efa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.I = 3, r8(12)) : (this.I = 0, r8(13)), w8(this), x8(this)
                }
            }
        } catch (q) { } finally { }
    };
    g.k.sW = function () { if (this.j) { var a = g.Ci(this.j), b = g.Ei(this.j); this.ea < b.length && (y8(this), aib(this, a, b), this.B && 4 != a && u8(this)) } };
    g.k.cancel = function () { this.Ka = !0; w8(this) };
    g.k.rW = function () { this.Z = null; var a = Date.now(); 0 <= a - this.Mb ? (2 != this.Oa && (q8(3), r8(17)), w8(this), this.I = 2, x8(this)) : bib(this, this.Mb - a) };
    g.k.getLastError = function () { return this.I };
    g.k.hJ = function () { return this.j }; lib.prototype.cancel = function () { this.B = nib(this); if (this.u) this.u.cancel(), this.u = null; else if (this.j && 0 !== this.j.size) { for (var a = g.t(this.j.values()), b = a.next(); !b.done; b = a.next())b.value.cancel(); this.j.clear() } }; g.k = rib.prototype; g.k.DN = 8; g.k.Lg = 1; g.k.connect = function (a, b, c, d) { r8(0); this.Ac = a; this.Ka = b || {}; c && void 0 !== d && (this.Ka.OSID = c, this.Ka.OAID = d); this.kb = this.Dc; this.Ma = hib(this, null, this.Ac); C8(this) };
    g.k.disconnect = function () { tib(this); if (3 == this.Lg) { var a = this.Wa++, b = this.Ma.clone(); g.Mj(b, "SID", this.C); g.Mj(b, "RID", a); g.Mj(b, "TYPE", "terminate"); F8(this, b); a = new t8(this, this.C, a); a.Oa = 2; a.J = Z7(b.clone()); b = !1; g.Da.navigator && g.Da.navigator.sendBeacon && (b = g.Da.navigator.sendBeacon(a.J.toString(), "")); !b && g.Da.Image && ((new Image).src = a.J, b = !0); b || (a.j = Whb(a.D, null), a.j.send(a.J)); a.ya = Date.now(); u8(a) } zib(this) };
    g.k.og = function () { return 0 == this.Lg };
    g.k.getState = function () { return this.Lg };
    g.k.FN = function (a) {
        if (this.I) if (this.I = null, 1 == this.Lg) {
            if (!a) {
                this.Wa = Math.floor(1E5 * Math.random()); a = this.Wa++; var b = new t8(this, "", a), c = this.Z; this.Mb && (c ? (c = g.xf(c), g.Bf(c, this.Mb)) : c = this.Mb); null !== this.J || this.qb || (b.Ma = c, c = null); var d; if (this.yb) a: {
                    for (var e = d = 0; e < this.B.length; e++) { b: { var f = this.B[e]; if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) { f = f.length; break b } f = void 0 } if (void 0 === f) break; d += f; if (4096 < d) { d = e; break a } if (4096 === d || e === this.B.length - 1) { d = e + 1; break a } } d =
                        1E3
                } else d = 1E3; d = wib(this, b, d); e = this.Ma.clone(); g.Mj(e, "RID", a); g.Mj(e, "CVER", 22); this.Ba && g.Mj(e, "X-HTTP-Session-Id", this.Ba); F8(this, e); c && (this.qb ? d = "headers=" + g.Kg(g.rga(c)) + "&" + d : this.J && g.Qj(e, this.J, c)); gib(this.u, b); this.Vf && g.Mj(e, "TYPE", "init"); this.yb ? (g.Mj(e, "$req", d), g.Mj(e, "SID", "null"), b.pc = !0, Vhb(b, e, null)) : Vhb(b, e, d); this.Lg = 2
            }
        } else 3 == this.Lg && (a ? xib(this, a) : 0 == this.B.length || mib(this.u) || xib(this))
    };
    g.k.EN = function () { this.T = null; yib(this); if (this.td && !(this.ib || null == this.j || 0 >= this.pd)) { var a = 2 * this.pd; this.Aa = s8((0, g.Qa)(this.u1, this), a) } };
    g.k.u1 = function () { this.Aa && (this.Aa = null, this.kb = !1, this.ib = !0, r8(10), A8(this), yib(this)) };
    g.k.EK = function (a) { this.j == a && this.td && !this.ib && (sib(this), this.ib = !0, r8(11)) };
    g.k.uW = function () { null != this.ea && (this.ea = null, A8(this), eib(this), r8(19)) };
    g.k.i5 = function (a) { a ? r8(2) : r8(1) };
    g.k.isActive = function () { return !!this.D && this.D.isActive(this) };
    g.k = Bib.prototype; g.k.JN = function () { };
    g.k.IN = function () { };
    g.k.HN = function () { };
    g.k.GN = function () { };
    g.k.isActive = function () { return !0 };
    g.k.vW = function () { }; g.Ua(H8, g.Nf); H8.prototype.open = function () { this.j.D = this.C; this.J && (this.j.Oa = !0); this.j.connect(this.I, this.u || void 0) };
    H8.prototype.close = function () { this.j.disconnect() };
    H8.prototype.send = function (a) { var b = this.j; if ("string" === typeof a) { var c = {}; c.__data__ = a; a = c } else this.D && (c = {}, c.__data__ = g.Zh(a), a = c); b.B.push(new kib(b.Ze++, a)); 3 == b.Lg && C8(b) };
    H8.prototype.ra = function () { this.j.D = null; delete this.C; this.j.disconnect(); delete this.j; H8.kf.ra.call(this) };
    g.Ua(Dib, Lhb); g.Ua(Eib, Mhb); g.Ua(G8, Bib); G8.prototype.JN = function () { this.j.dispatchEvent("m") };
    G8.prototype.IN = function (a) { this.j.dispatchEvent(new Dib(a)) };
    G8.prototype.HN = function (a) { this.j.dispatchEvent(new Eib(a)) };
    G8.prototype.GN = function () { this.j.dispatchEvent("n") }; var J8 = new g.Nf; g.v(Hib, g.cf); g.k = L8.prototype; g.k.hs = null; g.k.zo = !1; g.k.Xu = null; g.k.xG = null; g.k.Vu = null; g.k.Wu = null; g.k.Pp = null; g.k.Rp = null; g.k.ls = null; g.k.Yh = null; g.k.XB = 0; g.k.qm = null; g.k.WB = null; g.k.Qp = null; g.k.qy = -1; g.k.RT = !0; g.k.gs = !1; g.k.wG = 0; g.k.VB = null; var Mib = {}, Lib = {}; g.k = L8.prototype; g.k.setTimeout = function (a) { this.u = a };
    g.k.xW = function (a) { a = a.target; var b = this.VB; b && 3 == g.Ci(a) ? b.vG() : this.KN(a) };
    g.k.KN = function (a) {
        try {
            if (a == this.Yh) a: {
                var b = g.Ci(this.Yh), c = this.Yh.u, d = this.Yh.getStatus(); if (g.Zg && !g.Bc(10) || g.ef && !g.Ac("420+")) { if (4 > b) break a } else if (3 > b || 3 == b && !g.Ei(this.Yh)) break a; this.gs || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Wl(3) : this.j.Wl(2)); Rib(this); var e = this.Yh.getStatus(); this.qy = e; var f = g.Ei(this.Yh); if (this.zo = 200 == e) {
                    4 == b && N8(this); if (this.Ba) {
                        for (a = !0; !this.gs && this.XB < f.length;) {
                            var h = Nib(this, f); if (h == Lib) { 4 == b && (this.Qp = 4, K8(15), a = !1); break } else if (h == Mib) {
                                this.Qp = 4; K8(16); a =
                                    !1; break
                            } else Sib(this, h)
                        } 4 == b && 0 == f.length && (this.Qp = 1, K8(17), a = !1); this.zo = this.zo && a; a || (N8(this), O8(this))
                    } else Sib(this, f); this.zo && !this.gs && (4 == b ? this.j.YB(this) : (this.zo = !1, M8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Qp = 3, K8(13)) : (this.Qp = 0, K8(14)), N8(this), O8(this)
            }
        } catch (l) { } finally { }
    };
    g.k.O3 = function (a) { I8((0, g.Qa)(this.N3, this, a), 0) };
    g.k.N3 = function (a) { this.gs || (Rib(this), Sib(this, a), M8(this)) };
    g.k.WS = function (a) { I8((0, g.Qa)(this.M3, this, a), 0) };
    g.k.M3 = function (a) { this.gs || (N8(this), this.zo = a, this.j.YB(this), this.j.Wl(4)) };
    g.k.cancel = function () { this.gs = !0; N8(this) };
    g.k.wW = function () { this.Xu = null; var a = Date.now(); 0 <= a - this.xG ? (2 != this.Wu && this.j.Wl(3), N8(this), this.Qp = 2, K8(18), O8(this)) : Qib(this, this.xG - a) };
    g.k.getLastError = function () { return this.Qp }; g.k = Vib.prototype; g.k.zG = null; g.k.Ki = null; g.k.ZE = !1; g.k.jU = null; g.k.ZC = null; g.k.WJ = null; g.k.AG = null; g.k.nk = null; g.k.Ao = -1; g.k.sy = null; g.k.Ry = null; g.k.connect = function (a) { this.AG = a; a = R8(this.j, null, this.AG); K8(3); this.jU = Date.now(); var b = this.j.T; null != b ? (this.sy = b[0], (this.Ry = b[1]) ? (this.nk = 1, Wib(this)) : (this.nk = 2, Xib(this))) : ($7(a, "MODE", "init"), this.Ki = new L8(this), this.Ki.hs = this.zG, Kib(this.Ki, a, !1, null, !0), this.nk = 0) };
    g.k.oZ = function (a) { if (a) this.nk = 2, Xib(this); else { K8(4); var b = this.j; b.Am = b.hq.Ao; V8(b, 9) } a && this.Wl(2) };
    g.k.yG = function (a) { return this.j.yG(a) };
    g.k.abort = function () { this.Ki && (this.Ki.cancel(), this.Ki = null); this.Ao = -1 };
    g.k.og = function () { return !1 };
    g.k.LN = function (a, b) { this.Ao = a.qy; if (0 == this.nk) if (b) { try { var c = this.u.parse(b) } catch (d) { a = this.j; a.Am = this.Ao; V8(a, 2); return } this.sy = c[0]; this.Ry = c[1] } else a = this.j, a.Am = this.Ao, V8(a, 2); else if (2 == this.nk) if (this.ZE) K8(7), this.WJ = Date.now(); else if ("11111" == b) { if (K8(6), this.ZE = !0, this.ZC = Date.now(), a = this.ZC - this.jU, !g.Zg || g.Bc(10) || 500 > a) this.Ao = 200, this.Ki.cancel(), K8(12), S8(this.j, this, !0) } else K8(8), this.ZC = this.WJ = Date.now(), this.ZE = !1 };
    g.k.YB = function () { this.Ao = this.Ki.qy; if (this.Ki.zo) 0 == this.nk ? this.Ry ? (this.nk = 1, Wib(this)) : (this.nk = 2, Xib(this)) : 2 == this.nk && ((!g.Zg || g.Bc(10) ? !this.ZE : 200 > this.WJ - this.ZC) ? (K8(11), S8(this.j, this, !1)) : (K8(12), S8(this.j, this, !0))); else { 0 == this.nk ? K8(9) : 2 == this.nk && K8(10); var a = this.j; this.Ki.getLastError(); a.Am = this.Ao; V8(a, 2) } };
    g.k.uy = function () { return this.j.uy() };
    g.k.isActive = function () { return this.j.isActive() };
    g.k.Wl = function (a) { this.j.Wl(a) }; g.k = Yib.prototype; g.k.zm = null; g.k.vy = null; g.k.Ti = null; g.k.Tf = null; g.k.BG = null; g.k.ZB = null; g.k.MN = null; g.k.aC = null; g.k.wy = 0; g.k.zW = 0; g.k.Fh = null; g.k.Sp = null; g.k.Bo = null; g.k.rs = null; g.k.hq = null; g.k.JF = null; g.k.bv = -1; g.k.NN = -1; g.k.Am = -1; g.k.Zu = 0; g.k.Yu = 0; g.k.qs = 8; g.Ua($ib, g.cf); g.Ua(ajb, g.cf); g.k = Yib.prototype; g.k.connect = function (a, b, c, d, e) { K8(0); this.BG = b; this.vy = c || {}; d && void 0 !== e && (this.vy.OSID = d, this.vy.OAID = e); this.J ? (I8((0, g.Qa)(this.HP, this, a), 100), cjb(this)) : this.HP(a) };
    g.k.disconnect = function () { djb(this); if (3 == this.j) { var a = this.wy++, b = this.ZB.clone(); g.Mj(b, "SID", this.C); g.Mj(b, "RID", a); g.Mj(b, "TYPE", "terminate"); U8(this, b); a = new L8(this, this.C, a); a.Wu = 2; a.Pp = Z7(b.clone()); (new Image).src = a.Pp.toString(); a.Vu = Date.now(); M8(a) } njb(this) };
    g.k.HP = function (a) { this.hq = new Vib(this); this.hq.zG = this.zm; this.hq.u = this.D; this.hq.connect(a) };
    g.k.og = function () { return 0 == this.j };
    g.k.getState = function () { return this.j };
    g.k.PN = function (a) { this.Sp = null; ijb(this, a) };
    g.k.ON = function () { this.Bo = null; this.Tf = new L8(this, this.C, "rpc", this.I); this.Tf.hs = this.zm; this.Tf.wG = 0; var a = this.MN.clone(); g.Mj(a, "RID", "rpc"); g.Mj(a, "SID", this.C); g.Mj(a, "CI", this.JF ? "0" : "1"); g.Mj(a, "AID", this.bv); U8(this, a); if (!g.Zg || g.Bc(10)) g.Mj(a, "TYPE", "xmlhttp"), Kib(this.Tf, a, !0, this.aC, !1); else { g.Mj(a, "TYPE", "html"); var b = this.Tf, c = !!this.aC; b.Wu = 3; b.Pp = Z7(a.clone()); Pib(b, c) } };
    g.k.LN = function (a, b) {
        if (0 != this.j && (this.Tf == a || this.Ti == a)) if (this.Am = a.qy, this.Ti == a && 3 == this.j) if (7 < this.qs) { try { var c = this.D.parse(b) } catch (d) { c = null } if (Array.isArray(c) && 3 == c.length) if (a = c, 0 == a[0]) a: { if (!this.Bo) { if (this.Tf) if (this.Tf.Vu + 3E3 < this.Ti.Vu) T8(this), this.Tf.cancel(), this.Tf = null; else break a; ljb(this); K8(19) } } else this.NN = a[1], 0 < this.NN - this.bv && 37500 > a[2] && this.JF && 0 == this.Yu && !this.rs && (this.rs = I8((0, g.Qa)(this.BW, this), 6E3)); else V8(this, 11) } else null != b && V8(this, 11); else if (this.Tf ==
            a && T8(this), !g.fb(b)) for (a = this.D.parse(b), b = 0; b < a.length; b++)c = a[b], this.bv = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.C = c[1], this.aC = c[2], c = c[3], null != c ? this.qs = c : this.qs = 6, this.j = 3, this.Fh && this.Fh.SN(), this.MN = R8(this, this.uy() ? this.aC : null, this.BG), jjb(this)) : "stop" == c[0] && V8(this, 7) : 3 == this.j && ("stop" == c[0] ? V8(this, 7) : "noop" != c[0] && this.Fh && this.Fh.RN(c), this.Yu = 0)
    };
    g.k.BW = function () { null != this.rs && (this.rs = null, this.Tf.cancel(), this.Tf = null, ljb(this), K8(20)) };
    g.k.YB = function (a) {
        if (this.Tf == a) { T8(this); this.Tf = null; var b = 2 } else if (this.Ti == a) this.Ti = null, b = 1; else return; this.Am = a.qy; if (0 != this.j) if (a.zo) if (1 == b) { b = Date.now() - a.Vu; var c = J8; c.dispatchEvent(new $ib(c, a.ls ? a.ls.length : 0, b, this.Zu)); bjb(this); this.B.length = 0 } else jjb(this); else {
            c = a.getLastError(); var d; if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Am)) { if (d = 1 == b) this.Ti || this.Sp || 1 == this.j || 2 <= this.Zu ? d = !1 : (this.Sp = I8((0, g.Qa)(this.PN, this, a), kjb(this, this.Zu)), this.Zu++, d = !0); d = !(d || 2 == b && ljb(this)) } if (d) switch (c) {
                case 1: V8(this,
                    5); break; case 4: V8(this, 10); break; case 3: V8(this, 6); break; case 7: V8(this, 12); break; default: V8(this, 2)
            }
        }
    };
    g.k.yW = function (a) { if (!g.Tb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j); };
    g.k.h5 = function (a) { a ? K8(2) : (K8(1), mjb(this, 8)) };
    g.k.yG = function (a) { if (a) throw Error("Can't create secondary domain capable XhrIo object."); a = new g.zi; a.J = !1; return a };
    g.k.isActive = function () { return !!this.Fh && this.Fh.isActive(this) };
    g.k.Wl = function (a) { var b = J8; b.dispatchEvent(new ajb(b, a)) };
    g.k.uy = function () { return !(!g.Zg || g.Bc(10)) };
    g.k = ojb.prototype; g.k.SN = function () { };
    g.k.RN = function () { };
    g.k.QN = function () { };
    g.k.CG = function () { };
    g.k.TN = function () { return {} };
    g.k.isActive = function () { return !0 }; g.k = pjb.prototype; g.k.isEmpty = function () { return 0 === this.j.length && 0 === this.u.length };
    g.k.clear = function () { this.j = []; this.u = [] };
    g.k.contains = function (a) { return g.Tb(this.j, a) || g.Tb(this.u, a) };
    g.k.remove = function (a) { var b = this.j; var c = (0, g.l2a)(b, a); 0 <= c ? (g.Wb(b, c), b = !0) : b = !1; return b || g.bc(this.u, a) };
    g.k.Ek = function () { for (var a = [], b = this.j.length - 1; 0 <= b; --b)a.push(this.j[b]); var c = this.u.length; for (b = 0; b < c; ++b)a.push(this.u[b]); return a }; g.v(qjb, g.cf); g.v(rjb, g.cf); g.Ua(W8, g.I); g.k = W8.prototype; g.k.G3 = function () { this.Nh = Math.min(3E5, 2 * this.Nh); this.B(); this.u && this.start() };
    g.k.start = function () { var a = this.Nh + 15E3 * Math.random(); g.ko(this.j, a); this.u = Date.now() + a };
    g.k.stop = function () { this.j.stop(); this.u = 0 };
    g.k.isActive = function () { return this.j.isActive() };
    g.k.reset = function () { this.j.stop(); this.Nh = 5E3 }; tjb.prototype.flush = function (a, b) { a = void 0 === a ? [] : a; b = void 0 === b ? !1 : b; if (g.xu("enable_client_streamz_web")) { a = g.t(a); for (var c = a.next(); !c.done; c = a.next())c = g.wea(c.value), c = { serializedIncrementBatch: g.Cc(g.Ne(c, Wlb)) }, g.dz("streamzIncremented", c, { RL: b }) } }; var X8; g.Ua(ujb, ojb); g.k = ujb.prototype; g.k.subscribe = function (a, b, c) { return this.B.subscribe(a, b, c) };
    g.k.unsubscribe = function (a, b, c) { return this.B.unsubscribe(a, b, c) };
    g.k.dh = function (a) { return this.B.dh(a) };
    g.k.ma = function (a, b) { return this.B.ma.apply(this.B, arguments) };
    g.k.dispose = function () { this.ea || (this.ea = !0, g.$e(this.B), this.disconnect(), g.$e(this.u), this.u = null, this.oa = function () { return "" }) };
    g.k.isDisposed = function () { return this.ea };
    g.k.connect = function (a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.Z = ""; this.u.stop(); this.I = a || null; this.D = b || 0; a = this.ya + "/test"; b = this.ya + "/bind"; var d = new Yib(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Oa), e = this.j; e && (e.Fh = null); d.Fh = this; this.j = d; vjb(this); if (this.j) { d = g.L("ID_TOKEN"); var f = this.j.zm || {}; d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"]; this.j.zm = f } e ? (3 != e.getState() && 0 == fjb(e) || e.getState(), this.j.connect(a, b, this.J, e.C, e.bv)) : c ? this.j.connect(a,
                b, this.J, c.sessionId, c.arrayId) : this.j.connect(a, b, this.J)
        }
    };
    g.k.disconnect = function (a) { this.T = a || 0; this.u.stop(); vjb(this); this.j && (3 == this.j.getState() && ijb(this.j), this.j.disconnect()); this.T = 0 };
    g.k.sendMessage = function (a, b) { a = { _sc: a }; b && g.Bf(a, b); this.u.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.C.push(a) : this.Iw() && (vjb(this), ejb(this.j, a)) };
    g.k.SN = function () { this.u.reset(); this.I = null; this.D = 0; if (this.C.length) { var a = this.C; this.C = []; for (var b = 0, c = a.length; b < c; ++b)ejb(this.j, a[b]) } this.ma("handlerOpened"); Bhb(this.Ma, "BROWSER_CHANNEL") };
    g.k.QN = function (a) { var b = 2 == a && 401 == this.j.Am; 4 == a || b || this.u.start(); this.ma("handlerError", a, b); Hhb(this.Ba, "BROWSER_CHANNEL") };
    g.k.CG = function (a, b) { if (!this.u.isActive()) this.ma("handlerClosed"); else if (b) for (var c = 0, d = b.length; c < d; ++c) { var e = b[c].map; e && this.C.push(e) } Dhb(this.Aa, "BROWSER_CHANNEL"); a && this.Wa.j.FG("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length); b && this.Xa.j.FG("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length) };
    g.k.TN = function () { var a = { v: 2 }; this.Z && (a.gsessionid = this.Z); 0 != this.D && (a.ui = "" + this.D); 0 != this.T && (a.ui = "" + this.T); this.I && g.Bf(a, this.I); return a };
    g.k.RN = function (a) { "S" == a[0] ? this.Z = a[1] : "gracefulReconnect" == a[0] ? (this.u.start(), this.j.disconnect()) : this.ma("handlerMessage", new sjb(a[0], a[1])); Fhb(this.Ka, "BROWSER_CHANNEL") };
    g.k.Iw = function () { return !!this.j && 3 == this.j.getState() };
    g.k.Gp = function (a) { (this.J.loungeIdToken = a) || this.u.stop(); if (this.Sa && this.j) { var b = this.j.zm || {}; a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"]; this.j.zm = b } };
    g.k.Bq = function () { return this.J.id };
    g.k.Kq = function () { return this.u.isActive() ? this.u.u - Date.now() : NaN };
    g.k.Zt = function () { var a = this.u; g.lo(a.j); a.start() };
    g.k.G4 = function () { this.u.isActive(); 0 == fjb(this.j) && this.connect(this.I, this.D) }; Y8.prototype.C = function (a, b, c, d) { b ? a(d) : a({ text: c.responseText }) };
    Y8.prototype.B = function (a, b) { a(Error("Request error: " + b.status)) };
    Y8.prototype.D = function (a) { a(Error("request timed out")) }; g.v(xjb, g.Nf); g.k = xjb.prototype; g.k.connect = function (a, b, c) { this.Zc.connect(a, b, c) };
    g.k.disconnect = function (a) { this.Zc.disconnect(a) };
    g.k.Zt = function () { this.Zc.Zt() };
    g.k.Bq = function () { return this.Zc.Bq() };
    g.k.Kq = function () { return this.Zc.Kq() };
    g.k.Iw = function () { return this.Zc.Iw() };
    g.k.FW = function () { this.dispatchEvent("channelOpened"); var a = this.Zc, b = this.j; g.GA("yt-remote-session-browser-channel", { firstTestResults: [""], secondTestResults: !a.j.JF, sessionId: a.j.C, arrayId: a.j.bv }); g.GA("yt-remote-session-screen-id", b); a = h8(); b = i8(); g.Tb(a, b) || a.push(b); fhb(a); hhb() };
    g.k.DW = function () { this.dispatchEvent("channelClosed") };
    g.k.EW = function (a) { this.dispatchEvent(new qjb(a)) };
    g.k.onError = function (a) { this.dispatchEvent(new rjb(a ? 1 : 0)) };
    g.k.sendMessage = function (a, b) { this.Zc.sendMessage(a, b) };
    g.k.Gp = function (a) { this.Zc.Gp(a) };
    g.k.dispose = function () { this.Zc.dispose() }; g.k = yjb.prototype;
    g.k.connect = function (a, b) {
        a = void 0 === a ? {} : a; b = void 0 === b ? 0 : b; 2 !== this.I && (this.B.stop(), this.T = a, this.J = b, Ajb(this), (a = g.L("ID_TOKEN")) ? this.C["x-youtube-identity-token"] = a : delete this.C["x-youtube-identity-token"], this.j && (this.u.device = this.j.device, this.u.name = this.j.name, this.u.app = this.j.app, this.u.id = this.j.id, this.j.w0 && (this.u.mdxVersion = "" + this.j.w0), this.j.theme && (this.u.theme = this.j.theme), this.j.capabilities && (this.u.capabilities = this.j.capabilities)), 0 !== this.J ? this.u.ui = "" + this.J : delete this.u.ui,
            Object.assign(this.u, this.T), this.channel = new H8(this.pathPrefix, { Q_: "gsessionid", z0: this.C, A0: this.u }), this.channel.open(), this.I = 2, zjb(this))
    };
    g.k.disconnect = function (a) { this.Z = void 0 === a ? 0 : a; this.B.stop(); Ajb(this); this.channel && (0 !== this.Z ? this.u.ui = "" + this.Z : delete this.u.ui, this.channel.close()); this.Z = 0 };
    g.k.Kq = function () { return this.B.isActive() ? this.B.u - Date.now() : NaN };
    g.k.Zt = function () { var a = this.B; g.lo(a.j); a.start() };
    g.k.sendMessage = function (a, b) { this.channel && (Ajb(this), a = Object.assign({}, { _sc: a }, b), this.channel.send(a)) };
    g.k.Gp = function (a) { a || this.B.stop(); a ? this.C["X-YouTube-LoungeId-Token"] = a : delete this.C["X-YouTube-LoungeId-Token"] };
    g.k.Bq = function () { return this.j ? this.j.id : "" };
    g.k.ma = function (a) { return this.D.ma.apply(this.D, [a].concat(g.u(g.ya.apply(1, arguments)))) };
    g.k.subscribe = function (a, b, c) { return this.D.subscribe(a, b, c) };
    g.k.unsubscribe = function (a, b, c) { return this.D.unsubscribe(a, b, c) };
    g.k.dh = function (a) { return this.D.dh(a) };
    g.k.dispose = function () { this.ea || (this.ea = !0, g.$e(this.D), this.disconnect(), g.$e(this.B), this.ya = function () { return "" }) };
    g.k.isDisposed = function () { return this.ea }; g.v(Bjb, g.Nf); g.k = Bjb.prototype; g.k.connect = function (a, b) { this.j.connect(a, b) };
    g.k.disconnect = function (a) { this.j.disconnect(a) };
    g.k.Zt = function () { this.j.Zt() };
    g.k.Bq = function () { return this.j.Bq() };
    g.k.Kq = function () { return this.j.Kq() };
    g.k.Iw = function () { return 3 === this.j.I };
    g.k.IW = function () { this.dispatchEvent("channelOpened") };
    g.k.GW = function () { this.dispatchEvent("channelClosed") };
    g.k.HW = function (a) { this.dispatchEvent(new qjb(a)) };
    g.k.onError = function () { this.dispatchEvent(new rjb(401 === this.j.Fg ? 1 : 0)) };
    g.k.sendMessage = function (a, b) { this.j.sendMessage(a, b) };
    g.k.Gp = function (a) { this.j.Gp(a) };
    g.k.dispose = function () { this.j.dispose() }; var Jjb = Date.now(), $8 = null, d9 = Array(50), c9 = -1, e9 = !1; g.Ua(f9, g.Tz); f9.prototype.Aj = function () { return this.screens };
    f9.prototype.contains = function (a) { return !!chb(this.screens, a) };
    f9.prototype.get = function (a) { return a ? g8(this.screens, a) : null };
    f9.prototype.info = function (a) { a9(this.I, a) }; g.v(Njb, g.Tz); g.k = Njb.prototype; g.k.start = function () { !this.j && isNaN(this.yc) && this.jT() };
    g.k.stop = function () { this.j && (this.j.abort(), this.j = null); isNaN(this.yc) || (g.Uu(this.yc), this.yc = NaN) };
    g.k.ra = function () { this.stop(); g.Tz.prototype.ra.call(this) };
    g.k.jT = function () { this.yc = NaN; this.j = g.Xu(Z8(this.B, "/pairing/get_screen"), { method: "POST", postParams: { pairing_code: this.J }, timeout: 5E3, onSuccess: (0, g.Qa)(this.KW, this), onError: (0, g.Qa)(this.JW, this), onTimeout: (0, g.Qa)(this.LW, this) }) };
    g.k.KW = function (a, b) { this.j = null; a = b.screen || {}; a.dialId = this.C; a.name = this.I; b = -1; this.D && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs); this.ma("pairingComplete", new d8(a), b) };
    g.k.JW = function (a) { this.j = null; a.status && 404 == a.status ? this.u >= Xlb.length ? this.ma("pairingFailed", Error("DIAL polling timed out")) : (a = Xlb[this.u], this.yc = g.Su((0, g.Qa)(this.jT, this), a), this.u++) : this.ma("pairingFailed", Error("Server error " + a.status)) };
    g.k.LW = function () { this.j = null; this.ma("pairingFailed", Error("Server not responding")) };
    var Xlb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4]; g.Ua(h9, f9); g.k = h9.prototype; g.k.start = function () { g9(this) && this.ma("screenChange"); !g.HA("yt-remote-lounge-token-expiration") && Ojb(this); g.Uu(this.j); this.j = g.Su((0, g.Qa)(this.start, this), 1E4) };
    g.k.add = function (a, b) { g9(this); Kjb(this, a); i9(this, !1); this.ma("screenChange"); b(a); a.token || Ojb(this) };
    g.k.remove = function (a, b) { var c = g9(this); Mjb(this, a) && (i9(this, !1), c = !0); b(a); c && this.ma("screenChange") };
    g.k.IF = function (a, b, c, d) { var e = g9(this), f = this.get(a.id); f ? (f.name != b && (f.name = b, i9(this, !1), e = !0), c(a)) : d(Error("no such local screen.")); e && this.ma("screenChange") };
    g.k.ra = function () { g.Uu(this.j); h9.kf.ra.call(this) };
    g.k.t_ = function (a) { g9(this); var b = this.screens.length; a = a && a.screens || []; for (var c = 0, d = a.length; c < d; ++c) { var e = a[c], f = this.get(e.screenId); f && (f.token = e.loungeToken, --b) } i9(this, !b); b && a9(this.I, "Missed " + b + " lounge tokens.") };
    g.k.s_ = function (a) { a9(this.I, "Requesting lounge tokens failed: " + a) }; g.v(Qjb, g.Tz); g.k = Qjb.prototype; g.k.start = function () { var a = parseInt(g.HA("yt-remote-fast-check-period") || "0", 10); (this.C = g.Ta() - 144E5 < a ? 0 : a) ? j9(this) : (this.C = g.Ta() + 3E5, g.GA("yt-remote-fast-check-period", this.C), this.DL()) };
    g.k.isEmpty = function () { return g.tf(this.j) };
    g.k.update = function () {
        Pjb("Updating availability on schedule."); var a = this.I(), b = g.kf(this.j, function (c, d) { return c && !!g8(a, d) }, this);
        Tjb(this, b)
    };
    g.k.ra = function () { g.Uu(this.B); this.B = NaN; this.u && (this.u.abort(), this.u = null); g.Tz.prototype.ra.call(this) };
    g.k.DL = function () { g.Uu(this.B); this.B = NaN; this.u && this.u.abort(); var a = Ujb(this); if (Ogb(a)) { var b = Z8(this.D, "/pairing/get_screen_availability"); this.u = wjb(this.D, b, { lounge_token: g.pf(a).join(",") }, (0, g.Qa)(this.l3, this, a), (0, g.Qa)(this.j3, this)) } else Tjb(this, {}), j9(this) };
    g.k.l3 = function (a, b) { this.u = null; var c = g.pf(Ujb(this)); if (g.qc(c, g.pf(a))) { b = b.screens || []; c = {}; for (var d = b.length, e = 0; e < d; ++e)c[a[b[e].loungeToken]] = "online" == b[e].status; Tjb(this, c); j9(this) } else this.xf("Changing Screen set during request."), this.DL() };
    g.k.j3 = function (a) { this.xf("Screen availability failed: " + a); this.u = null; j9(this) };
    g.k.xf = function (a) { a9("OnlineScreenService", a) }; g.Ua(k9, f9); g.k = k9.prototype; g.k.start = function () { this.u.start(); this.j.start(); this.screens.length && (this.ma("screenChange"), this.j.isEmpty() || this.ma("onlineScreenChange")) };
    g.k.add = function (a, b, c) { this.u.add(a, b, c) };
    g.k.remove = function (a, b, c) { this.u.remove(a, b, c); this.j.update() };
    g.k.IF = function (a, b, c, d) { this.u.contains(a) ? this.u.IF(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, a9(this.I, a), d(Error(a))) };
    g.k.Aj = function (a) { return a ? this.screens : g.ec(this.screens, g.Hm(this.B, function (b) { return !this.contains(b) }, this)) };
    g.k.UN = function () { return g.Hm(this.Aj(!0), function (a) { return !!this.j.j[a.id] }, this) };
    g.k.VN = function (a, b, c, d, e, f) {
        var h = this; this.info("getDialScreenByPairingCode " + a + " / " + b); var l = new Njb(this.C, a, b, c, d); l.subscribe("pairingComplete", function (m, n) { g.$e(l); e(l9(h, m), n) });
        l.subscribe("pairingFailed", function (m) { g.$e(l); f(m) });
        l.start(); return (0, g.Qa)(l.stop, l)
    };
    g.k.MW = function (a, b, c, d) {
        g.Xu(Z8(this.C, "/pairing/get_screen"), {
            method: "POST", postParams: { pairing_code: a }, timeout: 5E3, onSuccess: (0, g.Qa)(function (e, f) { e = new d8(f.screen || {}); if (!e.name || Yjb(this, e.name)) { a: { f = e.name; for (var h = 2, l = b(f, h); Yjb(this, l);) { h++; if (20 < h) break a; l = b(f, h) } f = l } e.name = f } c(l9(this, e)) }, this),
            onError: (0, g.Qa)(function (e) { d(Error("pairing request failed: " + e.status)) }, this),
            onTimeout: (0, g.Qa)(function () { d(Error("pairing request timed out.")) }, this)
        })
    };
    g.k.ra = function () { g.$e(this.u); g.$e(this.j); k9.kf.ra.call(this) };
    g.k.C_ = function () { $jb(this); this.ma("screenChange"); this.j.update() };
    k9.prototype.dispose = k9.prototype.dispose; g.Ua(m9, g.Tz); g.k = m9.prototype; g.k.getScreen = function () { return this.C };
    g.k.Ai = function (a) { this.isDisposed() || (a && (o9(this, "" + a), this.ma("sessionFailed")), this.C = null, this.ma("sessionScreen", null)) };
    g.k.info = function (a) { a9(this.Ba, a) };
    g.k.WN = function () { return null };
    g.k.WL = function (a) { var b = this.j; a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null; chrome.cast.setReceiverDisplayStatus(b, (0, g.Qa)(function () { this.info("Updated receiver status for " + b.friendlyName + ": " + a) }, this), (0, g.Qa)(function () { o9(this, "Failed to update receiver status for: " + b.friendlyName) }, this)) };
    g.k.ra = function () { this.WL(""); m9.kf.ra.call(this) }; g.v(p9, m9); g.k = p9.prototype; g.k.VL = function (a) { if (this.u) { if (this.u == a) return; o9(this, "Overriding cast session with new session object"); lkb(this); this.ya = !1; this.Z = "unknown"; this.u.removeUpdateListener(this.oa); this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa) } this.u = a; this.u.addUpdateListener(this.oa); this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa); gkb(this, "getMdxSessionStatus") };
    g.k.Rw = function (a) { this.info("launchWithParams no-op for Cast: " + g.Zh(a)) };
    g.k.stop = function () { this.u ? this.u.stop((0, g.Qa)(function () { this.Ai() }, this), (0, g.Qa)(function () { this.Ai(Error("Failed to stop receiver app.")) }, this)) : this.Ai(Error("Stopping cast device without session.")) };
    g.k.WL = function () { };
    g.k.ra = function () { this.info("disposeInternal"); lkb(this); this.u && (this.u.removeUpdateListener(this.oa), this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Aa)); this.u = null; m9.prototype.ra.call(this) };
    g.k.Y3 = function (a, b) { if (!this.isDisposed()) if (b) if (b = a8(b), g.Na(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Zh(b)), a) { case "mdxSessionStatus": dkb(this, b); break; case "loungeToken": hkb(this, b); break; default: o9(this, "Unknown youtube message: " + a) } else o9(this, "Unable to parse message."); else o9(this, "No data in message.") };
    g.k.EQ = function (a, b, c, d) { g.Uu(this.T); this.T = 0; Xjb(this.B, this.j.label, a, this.j.friendlyName, (0, g.Qa)(function (e) { e ? b(e) : 0 <= d ? (o9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.T = g.Su((0, g.Qa)(this.EQ, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen.")) }, this), c) };
    g.k.WN = function () { return this.u };
    g.k.NW = function (a) { this.isDisposed() || a || (o9(this, "Cast session died."), this.Ai()) }; g.v(q9, m9); g.k = q9.prototype; g.k.VL = function (a) { this.u = a; this.u.addUpdateListener(this.Ka) };
    g.k.Rw = function (a) { this.Ma = a; this.ea() };
    g.k.stop = function () { tkb(this); this.u ? this.u.stop((0, g.Qa)(this.Ai, this, null), (0, g.Qa)(this.Ai, this, "Failed to stop DIAL device.")) : this.Ai() };
    g.k.ra = function () { tkb(this); this.u && this.u.removeUpdateListener(this.Ka); this.u = null; m9.prototype.ra.call(this) };
    g.k.OW = function (a) { this.isDisposed() || a || (o9(this, "DIAL session died."), this.D(), this.D = function () { }, this.Ai()) }; g.v(t9, m9); t9.prototype.stop = function () { this.Ai() };
    t9.prototype.VL = function () { };
    t9.prototype.Rw = function () { g.Uu(this.u); this.u = NaN; var a = g8(this.B.Aj(), this.j.label); a ? n9(this, a) : this.Ai(Error("No such screen")) };
    t9.prototype.ra = function () { g.Uu(this.u); this.u = NaN; m9.prototype.ra.call(this) }; g.v(u9, g.Tz); g.k = u9.prototype;
    g.k.init = function (a, b) {
        chrome.cast.timeout.requestSession = 3E4; var c = new chrome.cast.SessionRequest(this.T, [chrome.cast.Capability.AUDIO_OUT]); this.Z || (c.dialRequest = new chrome.cast.DialRequest("YouTube")); var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED; a = a || this.I ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION; var e = (0, g.Qa)(this.S2, this); c = new chrome.cast.ApiConfig(c, (0, g.Qa)(this.RS, this), e, d, a); c.customDialLaunchCallback = (0, g.Qa)(this.J1, this);
        chrome.cast.initialize(c, (0, g.Qa)(function () { this.isDisposed() || (chrome.cast.addReceiverActionListener(this.D), Gjb(), this.u.subscribe("onlineScreenChange", (0, g.Qa)(this.XN, this)), this.B = wkb(this), chrome.cast.setCustomReceivers(this.B, function () { }, (0, g.Qa)(function (f) { this.xf("Failed to set initial custom receivers: " + g.Zh(f)) }, this)), this.ma("yt-remote-cast2-availability-change", w9(this)), b(!0)) }, this), (0, g.Qa)(function (f) {
            this.xf("Failed to initialize API: " + g.Zh(f));
            b(!1)
        }, this))
    };
    g.k.L4 = function (a, b) {
        v9("Setting connected screen ID: " + a + " -> " + b); if (this.j) { var c = this.j.getScreen(); if (!a || c && c.id != a) v9("Unsetting old screen status: " + this.j.j.friendlyName), x9(this, null) } if (a && b) {
            if (!this.j) {
                c = g8(this.u.Aj(), a); if (!c) { v9("setConnectedScreenStatus: Unknown screen."); return } if ("shortLived" == c.idType) { v9("setConnectedScreenStatus: Screen with id type to be short lived."); return } a = ukb(this, c); a || (v9("setConnectedScreenStatus: Connected receiver not custom..."), a = new chrome.cast.Receiver(c.uuid ?
                    c.uuid : c.id, c.name), a.receiverType = chrome.cast.ReceiverType.CUSTOM, this.B.push(a), chrome.cast.setCustomReceivers(this.B, function () { }, (0, g.Qa)(function (d) { this.xf("Failed to set initial custom receivers: " + g.Zh(d)) }, this)));
                v9("setConnectedScreenStatus: new active receiver: " + a.friendlyName); x9(this, new t9(this.u, a), !0)
            } this.j.WL(b)
        } else v9("setConnectedScreenStatus: no screen.")
    };
    g.k.M4 = function (a) { this.isDisposed() ? this.xf("Setting connection data on disposed cast v2") : this.j ? this.j.Rw(a) : this.xf("Setting connection data without a session") };
    g.k.QW = function () { this.isDisposed() ? this.xf("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), x9(this, null)) : v9("Stopping non-existing session") };
    g.k.requestSession = function () { chrome.cast.requestSession((0, g.Qa)(this.RS, this), (0, g.Qa)(this.o3, this)) };
    g.k.ra = function () { this.u.unsubscribe("onlineScreenChange", (0, g.Qa)(this.XN, this)); window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.D); var a = Djb, b = g.Ia("yt.mdx.remote.debug.handlers_"); g.bc(b || [], a); g.$e(this.j); g.Tz.prototype.ra.call(this) };
    g.k.xf = function (a) { a9("Controller", a) };
    g.k.US = function (a, b) { this.j == a && (b || x9(this, null), this.ma("yt-remote-cast2-session-change", b)) };
    g.k.P2 = function (a, b) {
        if (!this.isDisposed()) if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), v9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
            case chrome.cast.ReceiverAction.CAST: if (this.j) if (this.j.j.label != a.label) v9("onReceiverAction_: Stopping active receiver: " + this.j.j.friendlyName), this.j.stop(); else { v9("onReceiverAction_: Casting to active receiver."); this.j.getScreen() && this.ma("yt-remote-cast2-session-change", this.j.getScreen()); break } switch (a.receiverType) {
                case chrome.cast.ReceiverType.CUSTOM: x9(this,
                    new t9(this.u, a)); break; case chrome.cast.ReceiverType.DIAL: x9(this, new q9(this.u, a, this.C, this.config_)); break; case chrome.cast.ReceiverType.CAST: x9(this, new p9(this.u, a, this.config_)); break; default: this.xf("Unknown receiver type: " + a.receiverType)
            }break; case chrome.cast.ReceiverAction.STOP: this.j && this.j.j.label == a.label ? this.j.stop() : this.xf("Stopping receiver w/o session: " + a.friendlyName)
        } else this.xf("onReceiverAction_ called without receiver.")
    };
    g.k.J1 = function (a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed")); var b = a.receiver; b.receiverType != chrome.cast.ReceiverType.DIAL && (this.xf("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL); var c = this.j ? this.j.j : null; if (!c || c.label != b.label) return this.xf("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch")); if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.getScreen()) return v9("Reselecting dial screen."),
                this.ma("yt-remote-cast2-session-change", this.j.getScreen()), Promise.resolve(new chrome.cast.DialLaunchResponse(!1)); this.xf('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName); x9(this, new q9(this.u, b, this.C, this.config_))
        } b = this.j; b.T = a; b.T.appState == chrome.cast.DialAppState.RUNNING ? (a = b.T.extraData || {}, c = a.screenId || null, r9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = qkb(b, {
            name: b.j.friendlyName, screenId: a.screenId, loungeToken: a.loungeToken, dialId: b.T.receiver.label,
            screenIdType: "shortLived"
        }, a.loungeTokenRefreshIntervalMs) : (g.Cu(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = rkb(b, c)) : a = rkb(b, c)) : a = okb(b); return a
    };
    g.k.RS = function (a) {
        var b = this; if (!this.isDisposed() && !this.I) {
            v9("New cast session ID: " + a.sessionId); var c = a.receiver; if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j) if (c.receiverType == chrome.cast.ReceiverType.CAST) v9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), x9(this, new p9(this.u, c, this.config_), !0); else { this.xf("Got non-cast session without previous mdx receiver event, or mdx resume."); return } var d = this.j.j, e = g8(this.u.Aj(),
                    d.label); e && e8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (v9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.$e(this.j), this.j = new p9(this.u, c, this.config_), this.j.subscribe("sessionScreen", (0, g.Qa)(this.US, this, this.j)), this.j.subscribe("sessionFailed", function () { return vkb(b, b.j) }), this.j.Rw(null));
                this.j.VL(a)
            }
        }
    };
    g.k.PW = function () { return this.j ? this.j.WN() : null };
    g.k.o3 = function (a) { this.isDisposed() || (this.xf("Failed to estabilish a session: " + g.Zh(a)), a.code != chrome.cast.ErrorCode.CANCEL && x9(this, null), this.ma("yt-remote-cast2-session-failed")) };
    g.k.S2 = function (a) { v9("Receiver availability updated: " + a); if (!this.isDisposed()) { var b = w9(this); this.J = a == chrome.cast.ReceiverAvailability.AVAILABLE; w9(this) != b && this.ma("yt-remote-cast2-availability-change", w9(this)) } };
    g.k.XN = function () { this.isDisposed() || (this.B = wkb(this), v9("Updating custom receivers: " + g.Zh(this.B)), chrome.cast.setCustomReceivers(this.B, function () { }, (0, g.Qa)(function () { this.xf("Failed to set custom receivers.") }, this)), this.ma("yt-remote-cast2-availability-change", w9(this))) };
    u9.prototype.setLaunchParams = u9.prototype.M4; u9.prototype.setConnectedScreenStatus = u9.prototype.L4; u9.prototype.stopSession = u9.prototype.QW; u9.prototype.getCastSession = u9.prototype.PW; u9.prototype.requestSession = u9.prototype.requestSession; u9.prototype.init = u9.prototype.init; u9.prototype.dispose = u9.prototype.dispose; var Fkb = []; g.k = E9.prototype;
    g.k.reset = function (a) {
        this.listId = ""; this.index = -1; this.videoId = ""; Lkb(this); this.volume = -1; this.muted = !1; a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.Cn = a.hasPrevious, this.hasNext = a.hasNext, this.J = a.playerTime, this.I = a.playerTimeAt, this.C = a.seekableStart, this.j = a.seekableEnd, this.D = a.duration, this.T = a.loadedTime, this.B = a.liveIngestionTime, this.u =
            !isNaN(this.B))
    };
    g.k.Rc = function () { return 1 == this.playerState };
    g.k.isAdPlaying = function () { return 1081 == this.playerState };
    g.k.Tj = function (a) { this.D = isNaN(a) ? 0 : a };
    g.k.getDuration = function () { return this.u ? this.D + F9(this) : this.D };
    g.k.clone = function () { return new E9(Mkb(this)) }; g.v(K9, g.Tz); g.k = K9.prototype; g.k.getState = function () { return this.B };
    g.k.Kq = function () { return this.C.getReconnectTimeout() };
    g.k.Zt = function () { this.C.reconnect() };
    g.k.play = function () { M9(this) ? (this.j ? this.j.play(null, g.Rf, Q9(this, "play")) : P9(this, "play"), Pkb(this, 1, H9(L9(this))), this.ma("remotePlayerChange")) : N9(this, this.play) };
    g.k.pause = function () { M9(this) ? (this.j ? this.j.pause(null, g.Rf, Q9(this, "pause")) : P9(this, "pause"), Pkb(this, 2, H9(L9(this))), this.ma("remotePlayerChange")) : N9(this, this.pause) };
    g.k.seekTo = function (a) { if (M9(this)) { if (this.j) { var b = L9(this), c = new chrome.cast.media.SeekRequest; c.currentTime = a; b.Rc() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE; this.j.seek(c, g.Rf, Q9(this, "seekTo", { newTime: a })) } else P9(this, "seekTo", { newTime: a }); Pkb(this, 3, a); this.ma("remotePlayerChange") } else N9(this, g.Sa(this.seekTo, a)) };
    g.k.stop = function () { if (M9(this)) { this.j ? this.j.stop(null, g.Rf, Q9(this, "stopVideo")) : P9(this, "stopVideo"); var a = L9(this); a.index = -1; a.videoId = ""; Lkb(a); O9(this, a); this.ma("remotePlayerChange") } else N9(this, this.stop) };
    g.k.setVolume = function (a, b) {
        if (M9(this)) {
            var c = L9(this); if (this.u) { if (c.volume != a) { var d = Math.round(a) / 100; this.u.setReceiverVolumeLevel(d, (0, g.Qa)(function () { b9("set receiver volume: " + d) }, this), (0, g.Qa)(function () { this.xf("failed to set receiver volume.") }, this)) } c.muted != b && this.u.setReceiverMuted(b, (0, g.Qa)(function () { b9("set receiver muted: " + b) }, this), (0, g.Qa)(function () { this.xf("failed to set receiver muted.") }, this)) } else {
                var e = {
                    volume: a,
                    muted: b
                }; -1 != c.volume && (e.delta = a - c.volume); P9(this, "setVolume", e)
            } c.muted = b; c.volume = a; O9(this, c)
        } else N9(this, g.Sa(this.setVolume, a, b))
    };
    g.k.YN = function (a, b) { if (M9(this)) { var c = L9(this); a = { videoId: a }; b && (c.trackData = { trackName: b.name, languageCode: b.languageCode, sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "", languageName: b.languageName, kind: b.kind }, a.style = g.Zh(b.style), g.Bf(a, c.trackData)); P9(this, "setSubtitlesTrack", a); O9(this, c) } else N9(this, g.Sa(this.YN, a, b)) };
    g.k.setAudioTrack = function (a, b) { M9(this) ? (b = b.getLanguageInfo().getId(), P9(this, "setAudioTrack", { videoId: a, audioTrackId: b }), a = L9(this), a.audioTrackId = b, O9(this, a)) : N9(this, g.Sa(this.setAudioTrack, a, b)) };
    g.k.playVideo = function (a, b, c, d, e, f, h) { d = void 0 === d ? null : d; e = void 0 === e ? null : e; f = void 0 === f ? null : f; h = void 0 === h ? null : h; var l = L9(this), m = { videoId: a }; void 0 !== c && (m.currentIndex = c); I9(l, a, c || 0); void 0 !== b && (G9(l, b), m.currentTime = b); d && (m.listId = d); e && (m.playerParams = e); f && (m.clickTrackingParams = f); h && (m.locationInfo = g.Zh(h)); P9(this, "setPlaylist", m); d || O9(this, l) };
    g.k.SE = function (a, b) { if (M9(this)) { if (a && b) { var c = L9(this); I9(c, a, b); O9(this, c) } P9(this, "previous") } else N9(this, g.Sa(this.SE, a, b)) };
    g.k.nextVideo = function (a, b) { if (M9(this)) { if (a && b) { var c = L9(this); I9(c, a, b); O9(this, c) } P9(this, "next") } else N9(this, g.Sa(this.nextVideo, a, b)) };
    g.k.Sv = function () { if (M9(this)) { P9(this, "clearPlaylist"); var a = L9(this); a.reset(); O9(this, a); this.ma("remotePlayerChange") } else N9(this, this.Sv) };
    g.k.UP = function () { M9(this) ? P9(this, "dismissAutoplay") : N9(this, this.UP) };
    g.k.dispose = function () { if (3 != this.B) { var a = this.B; this.B = 3; this.ma("proxyStateChange", a, this.B) } g.Tz.prototype.dispose.call(this) };
    g.k.ra = function () { Okb(this); this.C = null; this.D.clear(); J9(this, null); g.Tz.prototype.ra.call(this) };
    g.k.YL = function (a) { if ((a != this.B || 2 == a) && 3 != this.B && 0 != a) { var b = this.B; this.B = a; this.ma("proxyStateChange", b, a); if (1 == a) for (; !this.D.isEmpty();)b = a = this.D, 0 === b.j.length && (b.j = b.u, b.j.reverse(), b.u = []), a.j.pop().apply(this); else 3 == a && this.dispose() } };
    g.k.N2 = function (a, b) { this.ma(a, b) };
    g.k.A1 = function (a) { if (!a) this.DA(null), J9(this, null); else if (this.u.receiver.volume) { a = this.u.receiver.volume; var b = L9(this), c = Math.round(100 * a.level || 0); if (b.volume != c || b.muted != a.muted) b9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, O9(this, b) } };
    g.k.DA = function (a) { b9("Cast media: " + !!a); this.j && this.j.removeUpdateListener(this.T); if (this.j = a) this.j.addUpdateListener(this.T), Qkb(this), this.ma("remotePlayerChange") };
    g.k.z1 = function (a) { a ? (Qkb(this), this.ma("remotePlayerChange")) : this.DA(null) };
    g.k.xM = function () { P9(this, "sendDebugCommand", { debugCommand: "stats4nerds " }) };
    g.k.B1 = function () { var a = Ikb(); a && J9(this, a) };
    g.k.xf = function (a) { a9("CP", a) }; g.v(T9, g.Tz); g.k = T9.prototype;
    g.k.connect = function (a, b) {
        if (b) {
            var c = b.listId, d = b.videoId, e = b.videoIds, f = b.playerParams, h = b.clickTrackingParams, l = b.index, m = { videoId: d }, n = b.currentTime, p = b.locationInfo; b = b.loopMode; void 0 !== n && (m.currentTime = 5 >= n ? 0 : n); f && (m.playerParams = f); p && (m.locationInfo = p); h && (m.clickTrackingParams = h); c && (m.listId = c); e && 0 < e.length && (m.videoIds = e.join(",")); void 0 !== l && (m.currentIndex = l); this.Ka && (m.loopMode = b || "LOOP_MODE_OFF"); c && (this.j.listId = c); this.j.videoId = d; this.j.index = l || 0; this.j.state = 3; G9(this.j,
                n); this.D = "UNSUPPORTED"; c = this.Ka ? "setInitialState" : "setPlaylist"; R9("Connecting with " + c + " and params: " + g.Zh(m)); this.u.connect({ method: c, params: g.Zh(m) }, a, ihb())
        } else R9("Connecting without params"), this.u.connect({}, a, ihb()); Ukb(this)
    };
    g.k.Gp = function (a) { this.u.Gp(a) };
    g.k.dispose = function () { this.isDisposed() || (g.Fa("yt.mdx.remote.remoteClient_", null), this.ma("beforeDispose"), S9(this, 3)); g.Tz.prototype.dispose.call(this) };
    g.k.ra = function () { Vkb(this); Xkb(this); Wkb(this); g.Uu(this.T); this.T = NaN; g.Uu(this.Z); this.Z = NaN; this.C = null; g.Mx(this.ea); this.ea.length = 0; this.u.dispose(); g.Tz.prototype.ra.call(this); this.D = this.J = this.B = this.j = this.u = null };
    g.k.pR = function (a) { if (!this.B || 0 === this.B.length) return !1; for (var b = g.t(this.B), c = b.next(); !c.done; c = b.next())if (!c.value.capabilities.has(a)) return !1; return !0 };
    g.k.k_ = function () { var a = 3; this.isDisposed() || (a = 0, isNaN(this.Lz()) ? this.u.Iw() && isNaN(this.I) && (a = 1) : a = 2); return a };
    g.k.lw = function (a) { R9("Disconnecting with " + a); g.Fa("yt.mdx.remote.remoteClient_", null); Vkb(this); this.ma("beforeDisconnect", a); 1 == a && j8(); this.u.disconnect(a); this.dispose() };
    g.k.i_ = function () { var a = this.j; this.C && (a = this.j.clone(), I9(a, this.C, a.index)); return Mkb(a) };
    g.k.N4 = function (a) {
        var b = this, c = new E9(a); c.videoId && c.videoId != this.j.videoId && (this.C = c.videoId, g.Uu(this.T), this.T = g.Su(function () { if (b.C) { var e = b.C; b.C = null; b.j.videoId != e && U9(b, "getNowPlaying") } }, 5E3));
        var d = []; this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange"); this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && H9(this.j) == H9(c) && g.Zh(this.j.trackData) == g.Zh(c.trackData) || d.push("remotePlayerChange"); this.j.reset(a); g.sc(d, function (e) { this.ma(e) }, this)
    };
    g.k.CQ = function () {
        var a = this.u.Bq(), b = g.Rb(this.B, function (c) { return "REMOTE_CONTROL" == c.type && c.id != a });
        return b ? b.id : ""
    };
    g.k.Lz = function () { return this.u.Kq() };
    g.k.e_ = function () { return this.D || "UNSUPPORTED" };
    g.k.f_ = function () { return this.J || "" };
    g.k.RW = function () { !isNaN(this.Lz()) && this.u.Zt() };
    g.k.J4 = function (a, b) { U9(this, a, b); Zkb(this) };
    g.k.ZN = function () { var a = g.gv("SID", "") || "", b = g.gv("SAPISID", "") || "", c = g.gv("__Secure-3PAPISID", "") || ""; if (!a && !b && !c) return ""; a = g.Cc(g.bb(a), 2); b = g.Cc(g.bb(b), 2); c = g.Cc(g.bb(c), 2); return g.Cc(g.bb(a + "," + b + "," + c), 2) };
    T9.prototype.subscribe = T9.prototype.subscribe; T9.prototype.unsubscribeByKey = T9.prototype.dh; T9.prototype.getProxyState = T9.prototype.k_; T9.prototype.disconnect = T9.prototype.lw; T9.prototype.getPlayerContextData = T9.prototype.i_; T9.prototype.setPlayerContextData = T9.prototype.N4; T9.prototype.getOtherConnectedRemoteId = T9.prototype.CQ; T9.prototype.getReconnectTimeout = T9.prototype.Lz; T9.prototype.getAutoplayMode = T9.prototype.e_; T9.prototype.getAutoplayVideoId = T9.prototype.f_; T9.prototype.reconnect = T9.prototype.RW;
    T9.prototype.sendMessage = T9.prototype.J4; T9.prototype.getXsrfToken = T9.prototype.ZN; T9.prototype.isCapabilitySupportedOnConnectedDevices = T9.prototype.pR; g.v(klb, f9); g.k = klb.prototype; g.k.Aj = function (a) { return this.jg.$_gs(a) };
    g.k.contains = function (a) { return !!this.jg.$_c(a) };
    g.k.get = function (a) { return this.jg.$_g(a) };
    g.k.start = function () { this.jg.$_st() };
    g.k.add = function (a, b, c) { this.jg.$_a(a, b, c) };
    g.k.remove = function (a, b, c) { this.jg.$_r(a, b, c) };
    g.k.IF = function (a, b, c, d) { this.jg.$_un(a, b, c, d) };
    g.k.ra = function () { for (var a = 0, b = this.j.length; a < b; ++a)this.jg.$_ubk(this.j[a]); this.j.length = 0; this.jg = null; f9.prototype.ra.call(this) };
    g.k.SW = function () { this.ma("screenChange") };
    g.k.t2 = function () { this.ma("onlineScreenChange") };
    k9.prototype.$_st = k9.prototype.start; k9.prototype.$_gspc = k9.prototype.MW; k9.prototype.$_gsppc = k9.prototype.VN; k9.prototype.$_c = k9.prototype.contains; k9.prototype.$_g = k9.prototype.get; k9.prototype.$_a = k9.prototype.add; k9.prototype.$_un = k9.prototype.IF; k9.prototype.$_r = k9.prototype.remove; k9.prototype.$_gs = k9.prototype.Aj; k9.prototype.$_gos = k9.prototype.UN; k9.prototype.$_s = k9.prototype.subscribe; k9.prototype.$_ubk = k9.prototype.dh; var e$ = null, h$ = !1, V9 = null, W9 = null, vlb = null, $9 = []; g.v(Alb, g.I); g.k = Alb.prototype; g.k.ra = function () { g.I.prototype.ra.call(this); this.j.stop(); this.u.stop(); this.J.stop(); var a = this.uc; a.unsubscribe("proxyStateChange", this.QS, this); a.unsubscribe("remotePlayerChange", this.IA, this); a.unsubscribe("remoteQueueChange", this.DE, this); a.unsubscribe("previousNextChange", this.NS, this); a.unsubscribe("nowAutoplaying", this.HS, this); a.unsubscribe("autoplayDismissed", this.kS, this); this.uc = this.module = null };
    g.k.Cj = function (a) {
        var b = g.ya.apply(1, arguments); if (2 != this.uc.B) if (i$(this)) { if (!L9(this.uc).isAdPlaying() || "control_seek" !== a) switch (a) { case "control_toggle_play_pause": L9(this.uc).Rc() ? this.uc.pause() : this.uc.play(); break; case "control_play": this.uc.play(); break; case "control_pause": this.uc.pause(); break; case "control_seek": this.I.vG(b[0], b[1]); break; case "control_subtitles_set_track": Clb(this, b[0]); break; case "control_set_audio_track": this.setAudioTrack(b[0]) } } else switch (a) {
            case "control_toggle_play_pause": case "control_play": case "control_pause": b =
                this.G.getCurrentTime(); j$(this, 0 === b ? void 0 : b); break; case "control_seek": j$(this, b[0]); break; case "control_subtitles_set_track": Clb(this, b[0]); break; case "control_set_audio_track": this.setAudioTrack(b[0])
        }
    };
    g.k.v1 = function (a) { this.J.pW(a) };
    g.k.C5 = function (a) { this.Cj("control_subtitles_set_track", g.tf(a) ? null : a) };
    g.k.qU = function () { var a = this.G.getOption("captions", "track"); g.tf(a) || Clb(this, a) };
    g.k.jc = function (a) { this.module.jc(a, this.G.getVideoData().lengthSeconds) };
    g.k.Y1 = function () { g.tf(this.B) || Dlb(this, this.B); this.C = !1 };
    g.k.QS = function (a, b) { this.u.stop(); 2 === b && this.iU() };
    g.k.IA = function () {
        if (i$(this)) {
            this.j.stop(); var a = L9(this.uc); switch (a.playerState) { case 1080: case 1081: case 1084: case 1085: this.module.Xg = 1; break; case 1082: case 1083: this.module.Xg = 0; break; default: this.module.Xg = -1 }switch (a.playerState) {
                case 1081: case 1: this.Zb(new g.iL(8)); this.hU(); break; case 1085: case 3: this.Zb(new g.iL(9)); break; case 1083: case 0: this.Zb(new g.iL(2)); this.I.stop(); this.jc(this.G.getVideoData().lengthSeconds); break; case 1084: this.Zb(new g.iL(4)); break; case 2: this.Zb(new g.iL(4));
                    this.jc(H9(a)); break; case -1: this.Zb(new g.iL(64)); break; case -1E3: this.Zb(new g.iL(128, { errorCode: "mdx.remoteerror", errorMessage: "\u6b64\u89c6\u9891\u65e0\u6cd5\u8fdc\u7a0b\u64ad\u653e\u3002", UC: 2 }))
            }a = L9(this.uc).trackData; var b = this.B; (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.B = a, Dlb(this, a)); a = L9(this.uc); -1 === a.volume || Math.round(this.G.getVolume()) === a.volume && this.G.isMuted() === a.muted || this.T.isActive() ||
                this.VU()
        } else Blb(this)
    };
    g.k.NS = function () { this.G.ma("mdxpreviousnextchange") };
    g.k.DE = function () { i$(this) || Blb(this) };
    g.k.HS = function (a) { isNaN(a) || this.G.ma("mdxnowautoplaying", a) };
    g.k.kS = function () { this.G.ma("mdxautoplaycanceled") };
    g.k.setAudioTrack = function (a) { i$(this) && this.uc.setAudioTrack(this.G.getVideoData(1).videoId, a) };
    g.k.seekTo = function (a, b) { -1 === L9(this.uc).playerState ? j$(this, a) : b && this.uc.seekTo(a) };
    g.k.VU = function () { var a = this; if (i$(this)) { var b = L9(this.uc); this.events.zc(this.Z); b.muted ? this.G.mute() : this.G.unMute(); this.G.setVolume(b.volume); this.Z = this.events.S(this.G, "onVolumeChange", function (c) { ylb(a, c) }) } };
    g.k.hU = function () { this.j.stop(); if (!this.uc.isDisposed()) { var a = L9(this.uc); a.Rc() && this.Zb(new g.iL(8)); this.jc(H9(a)); this.j.start() } };
    g.k.iU = function () { this.u.stop(); this.j.stop(); var a = this.uc.Kq(); 2 == this.uc.B && !isNaN(a) && this.u.start() };
    g.k.Zb = function (a) { this.u.stop(); var b = this.D; if (!g.nL(b, a)) { var c = g.U(a, 2); c !== g.U(this.D, 2) && this.G.yx(c); this.D = a; Flb(this.module, b, a) } }; g.v(k$, g.V); k$.prototype.Lc = function () { this.j.show() };
    k$.prototype.wb = function () { this.j.hide() };
    k$.prototype.u = function () { b8("mdx-privacy-popup-cancel"); this.wb() };
    k$.prototype.B = function () { b8("mdx-privacy-popup-confirm"); this.wb() }; g.v(l$, g.V); l$.prototype.onStateChange = function (a) { this.Gc(a.state) };
    l$.prototype.Gc = function (a) { if (3 === this.api.getPresentingPlayerType()) { var b = { RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name }; a = g.U(a, 128) ? g.RK("\u5728$RECEIVER_NAME\u4e0a\u51fa\u73b0\u9519\u8bef", b) : a.Rc() || g.oL(a) ? g.RK("\u6b63\u5728$RECEIVER_NAME\u4e0a\u64ad\u653e", b) : g.RK("\u5df2\u8fde\u63a5\u5230$RECEIVER_NAME", b); this.updateValue("statustext", a); this.j.show() } else this.j.hide() }; g.v(m$, g.US); m$.prototype.u = function () { var a = this.G.getOption("remote", "receivers"); a && 1 < a.length && !this.G.getOption("remote", "quickCast") ? (this.Hr = g.tc(a, this.j, this), g.VS(this, g.Wd(a, this.j)), a = this.G.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Li(a), this.enable(!0)) : this.enable(!1) };
    m$.prototype.j = function (a) { return a.key };
    m$.prototype.qk = function (a) { return "cast-selector-receiver" === a ? "\u6295\u653e\u2026" : this.Hr[a].name };
    m$.prototype.eh = function (a) { g.US.prototype.eh.call(this, a); this.G.setOption("remote", "currentReceiver", this.Hr[a]); this.ob.wb() }; g.v(Elb, g.IP); g.k = Elb.prototype;
    g.k.create = function () {
        var a = this.player.V(), b = g.cH(a); a = { device: "Desktop", app: "youtube-desktop", loadCastApiSetupScript: a.N("mdx_load_cast_api_bootstrap_script"), enableDialLoungeToken: a.N("enable_dial_short_lived_lounge_token"), enableCastLoungeToken: a.N("enable_cast_short_lived_lounge_token") }; plb(b, a); this.subscriptions.push(g.py("yt-remote-before-disconnect", this.t1, this)); this.subscriptions.push(g.py("yt-remote-connection-change", this.T2, this)); this.subscriptions.push(g.py("yt-remote-receiver-availability-change", this.PS,
            this)); this.subscriptions.push(g.py("yt-remote-auto-connect", this.R2, this)); this.subscriptions.push(g.py("yt-remote-receiver-resumed", this.Q2, this)); this.subscriptions.push(g.py("mdx-privacy-popup-confirm", this.n4, this)); this.subscriptions.push(g.py("mdx-privacy-popup-cancel", this.m4, this)); this.PS()
    };
    g.k.load = function () { this.player.cancelPlayback(); g.IP.prototype.load.call(this); this.rk = new Alb(this, this.player, this.uc); var a = (a = xlb()) ? a.currentTime : 0; var b = ulb() ? new K9(d$(), void 0) : null; 0 == a && b && (a = H9(L9(b))); 0 !== a && this.jc(a); Flb(this, this.Jd, this.Jd); this.player.Vn(6) };
    g.k.unload = function () { this.player.ma("mdxautoplaycanceled"); this.lq = this.Mn; g.af(this.rk, this.uc); this.uc = this.rk = null; g.IP.prototype.unload.call(this); this.player.Vn(5); n$(this) };
    g.k.ra = function () { g.qy(this.subscriptions); g.IP.prototype.ra.call(this) };
    g.k.On = function (a) { var b = g.ya.apply(1, arguments); this.loaded && this.rk.Cj.apply(this.rk, [a].concat(g.u(b))) };
    g.k.getAdState = function () { return this.Xg };
    g.k.Cn = function () { return this.uc ? L9(this.uc).Cn : !1 };
    g.k.hasNext = function () { return this.uc ? L9(this.uc).hasNext : !1 };
    g.k.jc = function (a, b) { this.zR = a || 0; this.player.ma("progresssync", a, b); this.player.Qa("onVideoProgress", a || 0) };
    g.k.getCurrentTime = function () { return this.zR };
    g.k.getProgressState = function () { var a = L9(this.uc), b = this.player.getVideoData(); return { airingStart: 0, airingEnd: 0, allowSeeking: !a.isAdPlaying() && this.player.Vg(), clipEnd: b.clipEnd, clipStart: b.clipStart, current: this.getCurrentTime(), displayedStart: -1, duration: a.getDuration(), ingestionTime: a.u ? a.B + F9(a) : a.B, isAtLiveHead: 1 >= (a.u ? a.j + F9(a) : a.j) - this.getCurrentTime(), loaded: a.T, seekableEnd: a.u ? a.j + F9(a) : a.j, seekableStart: 0 < a.C ? a.C + F9(a) : a.C, offset: 0 } };
    g.k.nextVideo = function () { this.uc && this.uc.nextVideo() };
    g.k.SE = function () { this.uc && this.uc.SE() };
    g.k.t1 = function (a) { 1 === a && (this.mL = this.uc ? L9(this.uc) : null) };
    g.k.T2 = function () { var a = ulb() ? new K9(d$(), void 0) : null; if (a) { var b = this.lq; this.loaded && this.unload(); this.uc = a; this.mL = null; b.key !== this.Mn.key && (this.lq = b, this.load()) } else g.$e(this.uc), this.uc = null, this.loaded && (this.unload(), (a = this.mL) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, H9(a))); this.player.ma("videodatachange", "newdata", this.player.getVideoData(), 3) };
    g.k.PS = function () { var a = [this.Mn], b = a.concat, c = qlb(); B9() && g.HA("yt-remote-cast-available") && c.push({ key: "cast-selector-receiver", name: "Cast..." }); this.Hr = b.call(a, c); a = slb() || this.Mn; o$(this, a); this.player.Qa("onMdxReceiversChange") };
    g.k.R2 = function () { var a = slb(); o$(this, a) };
    g.k.Q2 = function () { this.lq = slb() };
    g.k.n4 = function () { this.SA = !0; n$(this); h$ = !1; e$ && g$(e$, 1); e$ = null };
    g.k.m4 = function () { this.SA = !1; n$(this); o$(this, this.Mn); this.lq = this.Mn; h$ = !1; e$ = null; this.player.playVideo() };
    g.k.Sg = function (a, b) { switch (a) { case "casting": return this.loaded; case "receivers": return this.Hr; case "currentReceiver": return b && ("cast-selector-receiver" === b.key ? Jkb() : o$(this, b)), this.loaded ? this.lq : this.Mn; case "quickCast": return 2 === this.Hr.length && "cast-selector-receiver" === this.Hr[1].key ? (b && Jkb(), !0) : !1 } };
    g.k.xM = function () { this.uc.xM() };
    g.k.Uj = function () { return !1 };
    g.k.getOptions = function () { return ["casting", "receivers", "currentReceiver", "quickCast"] }; g.HP("remote", Elb);
})(_yt_player);
