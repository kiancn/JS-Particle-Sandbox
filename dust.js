/*
 Copyright (C) 2007 ha55ii, http://dan-ball.jp/
 The games source code use is prohibition.
*/
var aa = 0, ba = window, h = 416, ca = 464, da = 0, ea = 40, fa = !1, ga = 2, ha = 0, ia = [2E4, 3E4, 4E4], ja = 0,
    ka = 2, la = 0, ma = 0, na = 0, oa = 0, qa = 8, ra = 8, sa = 8, ta = 8, ua = [], va = [], wa = -1, xa = 0, ya = 0,
    za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ia = new Ha, Ja = "", Ma = "", Na = 0, Oa = 0,
    Pa = 0, Qa = ["sans-serif", "serif", "monospace", "setFont ->"], Ra = ["PLAIN", "BOLD", "ITALIC", "BOLD&ITALIC"],
    Sa = [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72], Ua = Array(309 * h), Va = Array(309 * h), Wa = Array(309 * h),
    Xa = new Ha, Ya = new Ha, Za, $a, bb = [], cb = [], db = "", eb = !1, fb = "", gb, hb, ib, jb = 0, kb = 0, lb = 0,
    mb = 0, nb = 0;
window.GameSave = ob;

function ob(a) {
    if (0 == a.length || 0 != fb.length) return "";
    pb();
    qb();
    var d = 0;
    for (a = 0; a < gb.length; a++) d += gb.charCodeAt(a) * ((a & 255) + 1);
    a = gb;
    a += rb(97 + (d & 15));
    a += rb(65 + ((d & 240) >> 4));
    return a += rb(48 + ((d & 1792) >> 8))
}

var sb = "";
window.GameLoad = tb;

function tb(a) {
    if (3 < a.length) {
        for (var d = 0, b = 0; b < a.length - 3; b++) d += a.charCodeAt(b) * ((b & 255) + 1);
        if ((d & 15) != a.charCodeAt(a.length - 3) - 97 || (d & 240) >> 4 != a.charCodeAt(a.length - 2) - 65 || (d & 1792) >> 8 != a.charCodeAt(a.length - 1) - 48) return -1;
        sb = a.substring(0, a.length - 3);
        return 0
    }
    0 == a.length && 0 != sb.length && (gb = sb, sb = "", ub(), vb());
    return -1
}

var wb = 0;

function xb(a, d, b) {
    0 == wb && (a && (db = a), "0" == d && (eb = !0), b && (fb = b), yb(), k.e("font.gif", 8, 12), zb.e("wheel.gif"), Ab() ? wb-- : wb++);
    1 == wb && (Bb(k.o), Bb(zb), 0 != Cb ? Db(xb, Eb()) : wb++);
    if (2 == wb) {
        0 == db.length && (jb = 2, lb = 1);
        0 != fb.length && (jb = 2, lb = 3);
        Fb.e(0);
        ua = Array(12E4);
        va = Array(12E4);
        bb = Array(12E4);
        cb = Array(12E4);
        pb();
        0 < fb.length && (gb = Gb(fb, ""), 1 == Hb ? (ub(), vb(), ya = kb = 1) : kb = 2);
        pb();
        qb();
        for (a = 0; a < Ib.length; a++) d = l((2989 * (Ib[a][0] >> 16 & 255) + 5866 * (Ib[a][0] >> 8 & 255) + 1145 * (Ib[a][0] & 255)) / 1E4), Jb[a] = d << 16 | d << 8 | d;
        Kb(0, 0,
            h, ca, 4210752);
        m(211, 451, Lb, -1, 0, -1);
        k.a(16, 311, "POWDER", 15908203, 0);
        k.a(16, 325, "WATER", 4210943, 0);
        k.a(16, 339, "FIRE", 16728128, 0);
        k.a(16, 353, "SEED", 9486400, 0);
        m(16, 367, "G-POWDER", -1, 0, -2);
        m(16, 367, "G-POWDER", 11567184, -1, -2);
        k.a(16, 381, "FAN", 8421631, 0);
        k.a(16, 395, "ICE", 13684991, 0);
        k.a(16, 409, "S-BALL", 16728224, 0);
        k.a(16, 423, "CLONE", 9465872, 0);
        m(16, 437, "F-WORKS", 16750950, 0, -1);
        k.a(72, 311, "OIL", 8400928, 0);
        k.a(72, 325, "C-4", 16777164, 0);
        k.a(72, 339, "STONE", 8421504, 0);
        k.a(72, 353, "MAGMA", 16737843, 0);
        k.a(72, 367,
            "VIRUS", 8388736, 0);
        k.a(72, 381, "NITRO", 4486912, 0);
        k.a(72, 395, "ANT", 12615872, 0);
        k.a(72, 409, "TORCH", 16752672, 0);
        k.a(72, 423, "GAS", 13408665, 0);
        k.a(72, 437, "SOAPY", 14737632, 0);
        m(128, 311, "THUNDER", 16776992, 0, -1);
        k.a(128, 325, "METAL", 4210752, 0);
        k.a(128, 339, "BOMB", 6710784, 0);
        k.a(128, 353, "LASER", 13369344, 0);
        k.a(128, 367, "ACID", 13434624, 0);
        k.a(128, 381, "VINE", 47872, 0);
        k.a(128, 395, "SALT", 16777215, 0);
        k.a(128, 409, "GLASS", 4210752, 0);
        k.a(128, 423, "BIRD", 8417360, 0);
        m(128, 437, "MERCURY", 11184810, 0, -1);
        k.a(184, 311, "SPARK",
            16763955, 0);
        k.a(184, 325, "FUSE", 4469538, 0);
        k.a(184, 339, "CLOUD", 13421772, 0);
        k.a(184, 353, "PUMP", 13107, 0);
        k.a(240, 311, "WIND", 8421631, 0);
        k.a(240, 325, "AIR", 8421631, 0);
        k.a(240, 339, "DRAG", 16777215, 0);
        k.a(240, 353, "B", 16769248, 0);
        k.a(240, 353, " U", 16777184, 0);
        k.a(240, 353, "  B", 14745568, 0);
        k.a(240, 353, "   B", 14745599, 0);
        k.a(240, 353, "    L", 14737663, 0);
        k.a(240, 353, "     E", 16769279, 0);
        k.a(240, 367, "WHEEL", 11575440, 0);
        k.a(240, 381, "PLAYER", 15908203, 0);
        m(240, 395, "FIGHTER", 15908203, 0, -1);
        k.a(240, 409, "BOX", 15908203,
            0);
        k.a(240, 423, "BALL", 15908203, 0);
        k.a(240, 437, "CREATE", 9465872, 0);
        k.a(296, 311, "BLOCK", 8421504, 0);
        k.a(296, 325, "ERASE", 8421504, 0);
        k.a(296, 339, "CLEAR", 16777215, 0);
        m(295, 353, "Copy", -1, 0, -2);
        m(295, 353, "Copy", 16777215, -1, -2);
        m(319, 353, "Paste", -1, 0, -3);
        m(319, 353, "Paste", 16777215, -1, -3);
        k.a(296, 367, "TEXT", 16777215, 0);
        m(296, 381, "PEN", -1, 0, -1);
        m(296, 381, "PEN", 16777215, -1, -1);
        m(296, 395, "PEN-S ", 16777215, 0, -1);
        m(296, 409, "SCALE", 16777215, 0, -1);
        m(296, 423, "SPEEDx", 16777215, 0, -1);
        m(295, 437, "Start", -1, 0, -3);
        m(295,
            437, "Start", 16777215, -1, -3);
        m(321, 437, "Stop", -1, 0, -2);
        m(321, 437, "Stop", 16777215, -1, -2);
        k.a(352, 311, "UPLOAD", 16752800, 0);
        k.a(352, 325, "SAVE", 16752800, 0);
        k.a(352, 339, "LOAD", 16752800, 0);
        m(352, 353, "MiniMap", 16752800, 0, -1);
        m(352, 367, "MENU-", -1, 0, -2);
        m(352, 367, "MENU-", 16777215, -1, -2);
        m(352, 381, "SIDE-", -1, 0, -3);
        m(352, 381, "SIDE-", 16777215, -1, -3);
        k.a(352, 395, "GRID", 8388608, 0);
        m(352, 409, "BG-", -1, 0, -2);
        m(352, 409, "BG-", 16777215, -1, -2);
        k.a(352, 423, "DOT ", 16777215, 0);
        k.a(352, 437, "RESET", 16777215, 0);
        m(64, 451, "x    y",
            -1, 0, -1);
        m(141, 451, "dot", -1, 0, -1);
        Mb(Xa, h, ca);
        for (a = 0; a < h * ca; a++) Xa.b[a] = p[a];
        for (a = h * ca - 1; 0 <= a; a--) p[a] = 0;
        Nb()
    }
}

ba.fff = Ob;

function Ob() {
    if (0 < Pb) Pb++; else {
        ob("");
        tb("");
        var a, d, b, c, e, f;
        d = Qb;
        b = Rb;
        300 <= b && (Sb || Tb) && !1 == fa ? fa = !0 : 300 > b && !0 == fa && (fa = !1);
        Fb.move();
        Fb.a();
        c = 12;
        e = 311;
        a = 308 * h;
        for (f = h * ca; a < f; a++) p[a] = Xa.b[a];
        if (1 == Fa) {
            Kb(c + 4 + 0 + 8, e + 0, 48, 137, 4210752);
            Kb(c + 4 + 56 + 8, e + 0, 48, 137, 4210752);
            Kb(c + 4 + 112 + 8, e + 0, 48, 137, 4210752);
            Kb(c + 4 + 168 + 8, e + 0, 48, 53, 4210752);
            Kb(c + 4 + 224 + 8, e + 42, 47, 53, 4210752);
            Kb(c + 4 + 224 + 16, e + 98, 39, 25, 4210752);
            Kb(c + 4 + 224 + 8, e + 126, 47, 11, 4210752);
            Kb(c + 4 + 112 + 8 - 1, e + 0 + 4, 1, 7, 4210752);
            f = Array(48);
            for (a = 0; a < f.length; a++) f[a] =
                0;
            for (a = 0; a < s; a++) f[t[a]]++;
            m(c + 4 + 0, e + 0, "  " + f[Ub], 15908203, 0, -1);
            m(c + 4 + 0, e + 14, "  " + f[u], 4210943, 0, -1);
            m(c + 4 + 0, e + 28, "  " + f[x], 16728128, 0, -1);
            m(c + 4 + 0, e + 42, "  " + f[Vb], 9486400, 0, -1);
            m(c + 4 + 0, e + 56, "  " + f[Wb], 11567184, 0, -1);
            m(c + 4 + 0, e + 70, "  " + f[Xb], 8421631, 0, -1);
            m(c + 4 + 0, e + 84, "  " + f[Yb], 13684991, 0, -1);
            m(c + 4 + 0, e + 98, "  " + f[Zb], 16728224, 0, -1);
            m(c + 4 + 0, e + 112, "  " + f[$b], 9465872, 0, -1);
            m(c + 4 + 0, e + 126, "  " + f[ac], 16750950, 0, -1);
            m(c + 4 + 56, e + 0, "  " + f[bc], 8400928, 0, -1);
            m(c + 4 + 56, e + 14, "  " + f[cc], 16777164, 0, -1);
            m(c + 4 + 56, e +
                28, "  " + f[dc], 8421504, 0, -1);
            m(c + 4 + 56, e + 42, "  " + f[ec], 16737843, 0, -1);
            m(c + 4 + 56, e + 56, "  " + f[fc], 8388736, 0, -1);
            m(c + 4 + 56, e + 70, "  " + f[gc], 4486912, 0, -1);
            m(c + 4 + 56, e + 84, "  " + f[hc], 12615872, 0, -1);
            m(c + 4 + 56, e + 98, "  " + f[ic], 16752672, 0, -1);
            m(c + 4 + 56, e + 112, "  " + f[jc], 13408665, 0, -1);
            m(c + 4 + 56, e + 126, "  " + f[kc], 14737632, 0, -1);
            m(c + 4 + 112, e + 0, "  " + f[lc], 16776992, 0, -1);
            m(c + 4 + 112, e + 14, "  " + f[mc], 4210752, 0, -1);
            m(c + 4 + 112, e + 28, "  " + f[nc], 6710784, 0, -1);
            m(c + 4 + 112, e + 42, "  " + f[oc], 13369344, 0, -1);
            m(c + 4 + 112, e + 56, "  " + f[pc], 13434624,
                0, -1);
            m(c + 4 + 112, e + 70, "  " + f[qc], 47872, 0, -1);
            m(c + 4 + 112, e + 84, "  " + f[rc], 16777215, 0, -1);
            m(c + 4 + 112, e + 98, "  " + f[sc], 4210752, 0, -1);
            m(c + 4 + 112, e + 112, "  " + f[tc], 8417360, 0, -1);
            m(c + 4 + 112, e + 126, "  " + f[uc], 11184810, 0, -1);
            m(c + 4 + 168, e + 0, "  " + f[vc], 16763955, 0, -1);
            m(c + 4 + 168, e + 14, "  " + f[wc], 4469538, 0, -1);
            m(c + 4 + 168, e + 28, "  " + f[xc], 13421772, 0, -1);
            m(c + 4 + 168, e + 42, "  " + f[yc], 13107, 0, -1);
            m(c + 4 + 224, e + 42, "  " + f[zc], 16769248, 0, -1);
            m(c + 4 + 224, e + 56, "  " + Ac, 11575440, 0, -1);
            for (a = 0; 5 > a; a++) f[a] = 0;
            for (a = 0; a < Bc; a++) A[a] >= Cc ? f[4]++ :
                A[a] >= Dc ? f[2]++ : A[a] >= Ec ? f[1]++ : A[a] >= Fc && f[0]++;
            m(c + 4 + 224, e + 70, "  " + f[2], 15908203, 0, -1);
            m(c + 4 + 224, e + 84, "  " + f[0], 15908203, 0, -1);
            m(c + 4 + 224, e + 98, "   " + f[1], 15908203, 0, -1);
            for (a = 0; a < Gc; a++) 0 != Hc[a] && f[3]++;
            m(c + 4 + 224, e + 112, "   " + f[3], 15908203, 0, -1);
            m(c + 4 + 224, e + 126, "  " + f[4], 9465872, 0, -1)
        }
        Sb && 0 == wa && (Ic["0"] ? ga = 0 : Ic["1"] ? ga = 1 : Ic["2"] ? ga = 2 : Ic["3"] ? ga = 3 : Ic["4"] ? ga = 4 : Ic["5"] ? ga = 5 : Ic["6"] ? ga = 6 : Ic["7"] ? ga = 7 : Ic["8"] ? ga = 8 : Ic["9"] ? ga = 9 : Ic[32] ? ya = Jc(ya + 1, 1) : Ic[10] || Ic[13] ? ya = 1 : Ic.l && (ub(), vb(), ja = -10));
        if (Kc(c -
            8, e - 8, 391, 139) && fa && 0 == wa) {
            d = l((d - (c - 8)) / 56);
            b = l((b - (e - 8)) / 14);
            a = Lc(10 * d + b, 0, 69);
            if (34 != a && 35 != a && 36 != a && 37 != a && 38 != a && 39 != a) if (53 == a) Tb && (53 == da && (oa = 1 - oa), da = a), Mc && (53 == ea && (oa = 1 - oa), ea = a); else if (55 == a) Ba = Jc(Ba + Nc, 3); else if (56 == a) ga = Jc(ga + Nc, 9); else if (57 == a) Tb ? (57 == da && 4 > la ? (la++, ma += 400 >> la >> 1, na += 300 >> la >> 1) : 57 == da && (la = 0), da = a) : Mc && (57 == ea && 0 < la ? (ma -= 400 >> la >> 1, na -= 300 >> la >> 1, la--) : 57 == ea && (la = 4, ma += 200 - (400 >> la >> 1), na += 150 - (300 >> la >> 1)), ea = a), ma = Lc(ma, 0, 400 - (400 >> la)), na = Lc(na, 0, 300 - [300,
                150, 75, 38, 19][la]); else if (58 == a) za = Jc(za + Nc, 3); else if (59 == a) ya = Jc(ya + Nc, 1); else if (60 == a) 0 != Nc && (wa = 1); else if (61 == a) {
                if (Tb || Mc) pb(), qb(), ja = 10
            } else if (62 == a) 0 != Nc && (ub(), vb(), ja = -10); else if (63 == a) Ga = Jc(Ga + Nc, 1); else if (64 == a) Fa = Jc(Fa + Nc, 1); else if (65 == a) Aa = Jc(Aa + Nc, 1); else if (66 == a) xa = Jc(xa + Nc, 7); else if (67 == a) {
                if (ka = Jc(ka + Nc, 13), 0 != Nc) for (a = 309 * h - 1; 0 <= a; a--) Ua[a] = 0, Va[a] = 0, Wa[a] = 0
            } else 68 == a ? ha = Jc(ha + Nc, 2) : 69 == a ? 0 != Nc && Fb.e(0) : Tb ? da = a : Mc && (ea = a);
            a = c + 0 + 56 * d;
            d = e - 1 + 14 * b;
            b = 56;
            f = 13;
            var g, q, n;
            b = a +
            b > h ? h : l(a + b);
            f = d + f > ca ? ca : l(d + f);
            a = 0 > a ? 0 : l(a);
            d = 0 > d ? 0 : l(d);
            q = d * h + a;
            for (n = h - (b - a); d < f; d++, q += n) for (g = a; g < b; g++, q++) 4210752 == p[q] >>> 0 && (p[q] = 4194304)
        }
        fa && B(8, 308, 408, 308, 6684672);
        0 == oa ? m(c + 4 + 280 - 1, e + 42, "Copy", 16728128, -1, -2) : m(c + 4 + 280 + 23, e + 42, "Paste", 16728128, -1, -3);
        a = ["free", "line", "lock", "paint"];
        m(c + 4 + 280, e + 70, "    " + a[Ba], -1, 0, -2);
        m(c + 4 + 280, e + 70, "    " + a[Ba], 16777215, -1, -2);
        m(c + 4 + 280 - 1, e + 84, "      " + ga, 16777215, 0, -1);
        m(c + 4 + 280, e + 98, "      " + ["x1", "x2", "x4", "x8", "16"][la], 16777215, 0, -2);
        m(c + 4 + 280,
            e + 112, "       " + (1 << za), 16777215, 0, -2);
        0 == ya ? m(c + 4 + 280 - 1, e + 126, "Start", 16728128, -1, -3) : m(c + 4 + 280 + 25, e + 126, "Stop", 16728128, -1, -2);
        0 < ja && (ja--, 1 < ja && k.a(c + 4 + 336, e + 14, "SAVE", 16777215, 16711680));
        0 > ja && (ja++, -1 > ja && k.a(c + 4 + 336, e + 28, "LOAD", 16777215, 16711680));
        1 == Ga && m(c + 4 + 336, e + 42, "MiniMap", 16777215, 16711680, -1);
        a = ["str", "num"];
        m(c + 4 + 336, e + 56, "     " + a[Fa], -1, 0, -2);
        m(c + 4 + 336, e + 56, "     " + a[Fa], 16777215, -1, -2);
        a = ["OFF", "LOOP"];
        m(c + 4 + 336 + 25, e + 70, a[Aa], -1, 0, -2);
        m(c + 4 + 336 + 25, e + 70, a[Aa], 16777215, -1, -2);
        k.a(c +
            4 + 336, e + 84, "     " + xa, 8388608, 0);
        a = "non air line blur shade aura light toon mesh gray track dark TG siluet".split(" ");
        m(c + 4 + 336, e + 98, "   " + a[ka], -1, 0, -2);
        m(c + 4 + 336, e + 98, "   " + a[ka], 16777215, -1, -2);
        k.a(c + 4 + 336, e + 112, "    " + ["S", "M", "L"][ha], 16777215, 0);
        Kb(c + 0 + 56 * l(da / 10), e + 1 + da % 10 * 14, 3, 4, 16711680);
        Kb(c + 0 + 56 * l(ea / 10), e + 6 + ea % 10 * 14, 3, 4, 255);
        m(64, 451, " " + (Oc - 8), -1, 0, -1);
        m(64, 451, "      " + (Pc - 8), -1, 0, -1);
        m(141, 451, "   " + (ia[ha] - s), -1, 0, -1);
        k.a(16, 451, Qc + Rc, -1, 0);
        1 == aa && k.a(64, 451, Sc + "sl", 16777215, 0);
        if (1 ==
            Ga) for (c = 15, e = 314, 116 > Qb && fa && (c = 127), Kb(c - 3, e - 3, 106, 81, 8421504), pb(), a = 0, c = h * e + c, b = 0; 300 > b; b += 4, c += h - 100) for (d = 0; 400 > d; d += 4, c++) e = 400 * b + d, 0 == bb[e] && (e += 401), a = 11 == ka ? bb[e] == x || bb[e] == ec || bb[e] == ic || bb[e] == lc || bb[e] == oc || bb[e] == vc ? bb[e] : 0 : 13 == ka ? 0 == bb[e] ? 0 : 1 : bb[e], p[c] = 9 == ka ? Jb[a] : 13 == ka ? 0 == a ? 16777215 : 0 : Ib[a][0];
        -1 == wa && wa++;
        1 == kb ? (eb ? Tc(Ia, "\u30af\u30ea\u30c3\u30af\u3067\u518d\u751f\u3001\uff2c\uff2f\uff21\uff24\u3067\u518d\u30b9\u30bf\u30fc\u30c8") : Tc(Ia, "Click to play, LOAD to restart."), kb = 0,
            wa = 10) : 2 == kb && (eb ? Tc(Ia, "\u30a8\u30e9\u30fc") : Tc(Ia, "Error"), kb = 0, wa = 10);
        1 == wa && (la = 0, 0 == jb && (c = rb(47, 115, 99, 111, 114, 101, 47, 100, 117, 115, 116, 49, 46, 112, 104, 112, 63, 97, 61), c += db, c += Uc + (eb ? "0" : "1"), Gb(c, ""), 1 == Hb && "ok" == Vc[0] ? jb = 1 : (jb = 2, lb = "err1" == Vc[0] ? 1 : "err2" == Vc[0] ? 2 : "err3" == Vc[0] ? 3 : "err4" == Vc[0] ? 4 : "err5" == Vc[0] ? 5 : 0)), wa++);
        if (2 == wa) {
            if (1 == jb) {
                if (50 > mb) {
                    wa = 3;
                    eb ? Tc(Ia, "\u3082\u3046\u5c11\u3057\u4f5c\u308a\u8fbc\u3093\u3067\u4e0b\u3055\u3044\u3002") : Tc(Ia, "Please carefully created.");
                    return
                }
                eb ? Tc(Ia,
                    "\u30bf\u30a4\u30c8\u30eb\u3092\u8a18\u5165\u3057\u3066\uff2f\uff2b\u3092\u62bc\u3057\u3066\u4e0b\u3055\u3044") : Tc(Ia, "Enter the title and click OK.");
                Ja = ""
            } else 2 == jb && (eb ? 1 == lb ? Tc(Ia, "\u30e6\u30fc\u30b6\u30fc\u767b\u9332\u304c\u5fc5\u8981\u3067\u3059") : 2 == lb ? Tc(Ia, "1\u65e5\u306b1\u56de\u306e\u307f\u3067\u3059") : 3 == lb ? Tc(Ia, "\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u30c7\u30fc\u30bf") : 4 == lb ? Tc(Ia, "\u904e\u53bb12\u6642\u9593\u306e\u4f5c\u54c1\u6570\u304c50\u4ef6\u306b\u9054\u3057\u305f\u70ba\uff71\uff6f\uff8c\uff9f\u51fa\u6765\u307e\u305b\u3093") :
                5 == lb ? Tc(Ia, "\u8a00\u8a9e\u30a8\u30e9\u30fc") : Tc(Ia, "\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u51fa\u6765\u307e\u305b\u3093") : 1 == lb ? Tc(Ia, "User registration is required.") : 2 == lb ? Tc(Ia, "1 time in 1 days only.") : 3 == lb ? Tc(Ia, "Download data.") : 4 == lb ? Tc(Ia, "Reached 50 posts in 12 hours. Cannot upload.") : 5 == lb ? Tc(Ia, "Language error.") : Tc(Ia, "Cannot upload."));
            wa++
        } else if (3 == wa) {
            Kb(48, 100, 320, 100, 8421504);
            Wc(208, 110, "UPLOAD", 16752800);
            Xc(135);
            if (1 == jb && 50 <= mb && (Kb(92, 150, 232, 16, 16777215), Yc(91, 149, 234, 18, 0),
            Kc(84, 142, 232, 16) && (Yc(91, 149, 234, 18, 16711680), Zc && (c = $c("Text", Ja), null != c && (Ja = c))), Tc(Ya, Ja), ad(Ya, 93, 150, 230, 16, 230, 16, 4278190080), c = Kc(150, 172, 16, 12), k.a(158, 180, "OK", c ? 16711680 : 16777215, 0), c && Zc)) if (2 > Ja.length) eb ? Tc(Ia, "\u30bf\u30a4\u30c8\u30eb\u3092\uff12\u6587\u5b57\u4ee5\u4e0a\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") : Tc(Ia, "The title must be longer than 2 characters."); else {
                c = Ja;
                e = 0;
                a = c.length;
                for (d = 0; d < a; d++) b = c.charCodeAt(d), e = 0 <= b && 128 >= b || 65377 <= b && 65439 >= b ? e + 1 : e + 2;
                20 < e ? eb ? Tc(Ia,
                    "\u30bf\u30a4\u30c8\u30eb\u3092\uff11\uff10\u6587\u5b57\u4ee5\u4e0b\u3067\u8a18\u5165\u3057\u3066\u4e0b\u3055\u3044") : Tc(Ia, "The title must be shorter than 10 characters.") : wa++
            }
            c = Kc(200, 172, 48, 12);
            k.a(208, 180, "CANCEL", c ? 16711680 : 16777215, 0);
            c && Zc && (wa = 5)
        } else if (4 == wa) Ja = encodeURIComponent(Ja), 0 == Ja.length ? (wa = 3, eb ? Tc(Ia, "\u30a8\u30e9\u30fc") : Tc(Ia, "Error")) : (pb(), qb(), 605 == gb.length ? (wa = 3, eb ? Tc(Ia, "\u30a8\u30e9\u30fc") : Tc(Ia, "Error")) : (c = rb(47, 115, 99, 111, 114, 101, 47, 100, 117, 115, 116, 49, 46, 112, 104,
            112, 63, 97, 61), c += db, c += Uc + (eb ? "0" : "1"), c += bd + Ja, e = "d=" + gb, e += cd + hb, e += dd + ib, e += ed + nb, Gb(c, e), jb = 2, wa++)); else if (5 == wa) wa = 0; else if (10 == wa) if (Kb(82, 308, 252, 70, 6291456), Kb(86, 312, 244, 62, 6316128), Wc(208, 322, "DOWNLOAD", 16752800), Xc(343), 200 > Qb ? (Wc(178, 365, "START", 16711680), Wc(238, 365, "STOP", 16777215)) : (Wc(178, 365, "START", 16777215), Wc(238, 365, "STOP", 16711680)), Zc) wa = 0, ya = 200 > Qb ? 0 : 1; else {
            if (fd[37] || fd[39]) wa = 0, ya = fd[37] ? 0 : 1
        } else if (20 == wa) Ja = "", wa++; else if (21 == wa) Kb(88, 309, 240, 99, 8421504), Kb(92, 317, 232,
            16, 16777215), Yc(91, 316, 234, 18, 0), Kc(84, 309, 232, 16) && (Yc(91, 316, 234, 18, 16711680), Zc && (c = $c("Text", Ja), null != c && (Ja = c))), k.a(93, 320, Ja.substr(0, 28), 16777215, 0), 3 == Na && (Kb(240, 340, 84, 16, 16777215), Yc(239, 339, 86, 18, 0), Kc(232, 332, 84, 16) && (Yc(239, 339, 86, 18, 16711680), Zc && (c = $c("setFont", Ma), null != c && (Ma = c))), k.a(241, 343, Ma.substr(0, 10), 16777215, 0)), a = -1, 80 <= Qb && 220 > Qb && 334 <= Rb && 382 > Rb && (a = l((Rb - 334) / 16), 0 == a && 0 != Nc && (Na = Jc(Na + Nc, 3)), 1 == a && 0 != Nc && (Oa = Jc(Oa + Nc, 3)), 2 == a && 0 != Nc && (Pa = Jc(Pa + Nc, 10))), k.a(92, 342,
            "font :" + Qa[Na], 0 == a ? 16711680 : 16777215, 0), k.a(92, 358, "style:" + Ra[Oa], 1 == a ? 16711680 : 16777215, 0), k.a(92, 374, "size :" + Sa[Pa], 2 == a ? 16711680 : 16777215, 0), a = -1, 80 <= Qb && 320 > Qb && 382 <= Rb && 400 > Rb && (a = 200 > Qb ? 0 : 1, Zc && (0 == a ? wa++ : wa = 23)), k.a(158, 392, "OK", 0 == a ? 16711680 : 16777215, 0), k.a(208, 392, "CANCEL", 1 == a ? 16711680 : 16777215, 0), c = Qa[Na], 3 == Na && (c = Ma), gd(Ya, Ja, c, Oa, Sa[Pa]), c = Ub, 0 != hd[da] ? c = hd[da] : 0 != hd[ea] && (c = hd[ea]), c == sc && (c = Ub), ad(Ya, Za, $a, Ya.g, 128, Ya.g, 128, Ib[c][0]); else if (22 == wa) {
            c = "sex gay fuck suck crap shit dick penis bitch ** \u30bb\u30c3\u30af\u30b9 \u30a8\u30c3\u30c1 \u3061\u3093\u3053 \u30c1\u30f3\u30b3 \u307e\u3093\u3053 \u30de\u30f3\u30b3 \u539f\u7206 \u539f\u5b50\u7206 \u6838 \u88ab\u7206 \u6b7b \u6bba \u7968 \u8a55 \u62cd\u624b \u4eba\u6c17 \u53c2\u52a0 \u30a2\u30f3\u30b1\u30fc\u30c8 \u524a\u9664 \u6d88\u53bb ttp www. .com .jp".split(" ");
            e = "";
            for (a = 0; a < Ja.length; a++) d = Ja[a], " " != d && "\u3000" != d && (e += d);
            e = e.toLowerCase();
            for (a = 0; a < c.length && !(0 <= e.indexOf(c[a])); a++) ;
            if (a != c.length) wa = 23; else {
                c = Qa[Na];
                3 == Na && (c = Ma);
                gd(Ya, Ja, c, Oa, Sa[Pa]);
                c = Ub;
                0 != hd[da] ? c = hd[da] : 0 != hd[ea] && (c = hd[ea]);
                c == sc && (c = Ub);
                for (b = 0; 128 > b && !(308 <= $a + b); b++) for (d = 0; 400 > d && !(408 <= Za + d); d++) -1 != Ya.b[b * Ya.c + d] && C[($a + b) * h + (Za + d)] == D && (e = id(Za + d, $a + b, c), 0 <= e && c == Xb && (E[e].x = 0.1 * jd.x, E[e].y = 0.1 * jd.y, C[($a + b) * h + (Za + d)] = F));
                wa++
            }
        } else 23 == wa && (wa = 0)
    }
}

var G, kd, H, ld = 8216, I = Array(ld), md = Array(ld), J = new Float32Array(ld), nd = new Float32Array(ld);
for (H = 0; H < ld; H++) I[H] = new od;
for (H = 0; H < ld; H++) md[H] = new od;
var pd, qd = new Int32Array(ld), rd = new Int32Array(ld), K = new Int32Array(ld), Oc, Pc, sd, td, jd = new od, Ub = 2,
    u = 3, x = 4, Vb = 5, Wb = 7, Xb = 8, Yb = 10, zc = 12, Zb = 13, $b = 14, ac = 15, bc = 16, cc = 17, dc = 19,
    ec = 20, fc = 21, gc = 23, hc = 24, ic = 25, jc = 26, kc = 27, lc = 28, mc = 29, nc = 31, oc = 33, pc = 34, qc = 35,
    rc = 36, sc = 38, tc = 39, uc = 41, vc = 42, wc = 43, xc = 44, yc = 45,
    hd = [2, 3, 4, 5, 7, 8, 10, 13, 14, 15, 16, 17, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 31, 33, 34, 35, 36, 38, 39, 41, 42, 43, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ud = [2, 3, 4, 5, 7, 0, 11, 13, 0, 0, 16, 0,
        19, 20, 21, 23, 24, 4, 26, 12, 0, 0, 31, 33, 34, 0, 36, 0, 39, 41, 42, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    vd = [2, 3, 4, 5, 7, 8, 11, 13, 0, 15, 16, 0, 19, 20, 21, 23, 24, 0, 26, 27, 0, 0, 31, 33, 34, 0, 36, 0, 39, 41, 42, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    wd = [2, 3, 4, 5, 7, 8, 10, 0, 14, 0, 16, 17, 19, 20, 21, 23, 0, 25, 26, 27, 28, 29, 31, 0, 34, 0, 36, 38, 39, 0, 0, 43, 44, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    Ib = [[0], [6316128], [15908203], [4210943],
        [16728128], [9486400], [8409120], [11567184], [8421631], [11575440], [13684991], [16777215], [14737632], [16728224], [9465872], [16750950], [8400928], [16777164], [16769198], [8421504], [16737843], [8388736], [16769198], [4486912], [12615872], [16752672], [13408665], [14737632], [16776992], [4210752], [16769198], [6710784], [16769198], [13369344], [13434624], [47872], [16777215], [3381759], [65793], [8417360], [16769198], [11184810], [16763955], [4469538], [13421772], [13107, 0, 15908203, 4210943, 16728128, 9486400, 8409120, 11567184, 8421631, 0,
            13684991, 16777215, 14737632, 16728224, 9465872, 16750950, 8400928, 16777164, 0, 8421504, 16737843, 8388736, 0, 4486912, 12615872, 16752672, 13408665, 14737632, 16776992, 4210752, 0, 6710784, 0, 13369344, 13434624, 47872, 16777215, 3381759, 65793, 8417360, 0, 11184810, 16763955, 4469538, 13421772, 0]],
    Jb = Array(Ib.length),
    xd = [0, 0, 0, 0, 5E3, 500, 500, 0, 0, 0, -1E3, -500, 0, 0, 0, 0, 0, 0, 0, 0, 1E4, 0, 0, 0, 1500, 4E3, 500, 0, 2E3, 0, 0, 0, 0, 5500, 0, 500, 0, 0, 0, 2E3, 0, 0, 3E3, 0, 0, 0],
    D = -5, F = -4, Fb = new yd;

function yd() {
}

function pb() {
    var a, d, b, c;
    for (a = 0; 12E4 > a; a++) bb[a] = 0, cb[a] = 0;
    for (b = 0; 300 > b; b++) for (d = 0; 400 > d; d++) c = ((b >> 2) + 2) * G + ((d >> 2) + 2), 1 == K[c] && (bb[400 * b + d] = 1);
    for (a = 0; a < s; a++) d = l(L[a].x), b = l(L[a].y), 8 > d || 408 <= d || 8 > b || 308 <= b || (d -= 8, b -= 8, c = 400 * b + d, bb[c] = t[a], t[a] == Xb ? cb[c] = Jc(l(64 * zd(E[a]) / Ad), 63) : t[a] == ac && (cb[c] = M[a] % 100));
    for (a = 0; a < Ac; a++) c = 400 * (Bd[a] - 8) + (Cd[a] - 8), bb[c] = 9, cb[c] = 0;
    for (a = 0; a < Bc; a++) c = a * Dd, A[a] == Fc || A[a] == Fc + 1 ? (d = l(N[c + 4].x), b = l(N[c + 4].y), 8 > d || h - 8 <= d || 8 > b || 308 <= b || (d = d >> 2 << 2, b = b >> 2 << 2, c = 400 * (b -
        8) + (d - 8), bb[c] = 18, cb[c] = 0)) : A[a] == Ec ? (d = l(N[c].x), b = l(N[c].y), 8 > d || h - 8 <= d || 8 > b || 308 <= b || (d = d >> 2 << 2, b = b >> 2 << 2, c = 400 * (b - 8) + (d - 8), bb[c] = 22, cb[c] = Ed[a])) : A[a] == Dc ? (d = l(N[c + 4].x), b = l(N[c + 4].y), 8 > d || h - 8 <= d || 8 > b || 308 <= b || (d = d >> 2 << 2, b = b >> 2 << 2, c = 400 * (b - 8) + (d - 8), bb[c] = 30, cb[c] = Ed[a])) : A[a] == Cc && (d = l(N[c].x), b = l(N[c].y), 8 > d || h - 8 <= d || 8 > b || 308 <= b || (d = d >> 2 << 2, b = b >> 2 << 2, c = 400 * (b - 8) + (d - 8), bb[c] = 22, cb[c] = 10));
    for (a = 0; a < Gc; a++) 0 != Hc[a] && (d = l(O[a].x), b = l(O[a].y), 8 > d || h - 8 <= d || 8 > b || 308 <= b || (c = 400 * (b - 8) + (d - 8), 0 == bb[c] &&
    (bb[c] = 40, cb[c] = P[a])));
    nb = mb
}

function qb() {
    var a, d, b, c;
    d = Array(12E4);
    b = 0;
    var e;
    for (a = 0; 12E4 > a; a++) if (c = bb[a], e = 1, c == Xb || c == ac || 22 == c || 40 == c) d[b++] = c, d[b++] = cb[a]; else if (30 == c) d[b++] = 32, d[b++] = cb[a]; else {
        for (; 119999 > a && c == bb[a + 1]; a++) if (e++, 255 == e) {
            a++;
            break
        }
        d[b++] = c;
        1 != e && (16 > e ? d[b++] = 48 + e : (d[b++] = 48 + (e & 15), d[b++] = 48 + (e >> 4)))
    }
    e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.*".split("");
    var f = Array(2 * b), g = 0;
    f[g++] = "1";
    f[g++] = "0";
    f[g++] = "0123456789:;ABCDEF".split("")[ka + 1];
    f[g++] = "" + ha;
    f[g++] = "" + xa;
    f[g++] = "" +
        za;
    f[g++] = "" + Aa;
    f[g++] = "0";
    f[g++] = e[nb & 63];
    f[g++] = e[nb >> 6];
    f[g++] = "0";
    f[g++] = "0";
    f[g++] = "0";
    f[g++] = "0";
    f[g++] = "0";
    f[g++] = "0";
    var q = Array(4096);
    for (a = 0; 4096 > a; a++) q[a] = [];
    var n = 1;
    for (a = 0; a < b;) {
        for (var r = 0, w = 1, y = 1; y < n; y++) if (q[y].length == w) {
            for (c = 0; c < w && q[y][c] == d[a + c]; c++) ;
            if (c == w && (r = y, w++, a + w >= b)) break
        }
        f[g++] = e[r >> 6];
        f[g++] = e[r & 63];
        f[g++] = e[d[a + w - 1]];
        if (4096 > n) {
            q[n] = Array(w);
            for (c = 0; c < w; c++) q[n][c] = d[a + c];
            n++
        }
        a += w
    }
    f[g - 1] || (f[g - 1] = e[0]);
    gb = "";
    for (a = 0; a < g; a++) gb += f[a];
    f = Array(7500);
    for (b = a = 0; 300 > b; b +=
        4) for (d = 0; 400 > d; d += 4) c = 400 * b + d, 0 == bb[c] && (c += 401), 11 == ka ? bb[c] == x || bb[c] == ec || bb[c] == ic || bb[c] == lc || bb[c] == oc || bb[c] == vc ? f[a++] = e[bb[c]] : f[a++] = "0" : 13 == ka ? f[a++] = 0 == bb[c] ? "0" : "1" : f[a++] = e[bb[c]];
    hb = "";
    for (a = 0; 7500 > a; a++) hb += f[a];
    c = "0123456789abcdef".split("");
    if (9 == ka) e = Jb; else if (13 == ka) e = [16777215, 0]; else for (e = Array(Ib.length), a = 0; a < Ib.length; a++) e[a] = Ib[a][0];
    ib = "";
    for (a = 0; a < e.length; a++) ib += c[e[a] >> 20 & 15], ib += c[e[a] >> 16 & 15], ib += c[e[a] >> 12 & 15], ib += c[e[a] >> 8 & 15], ib += c[e[a] >> 4 & 15], ib += c[e[a] & 15]
}

function ub() {
    var a, d, b = Array(24E4), c = gb.length, e = Array(12E4), f = 0;
    for (a = 0; a < gb.length; a++) b[a] = gb[a];
    var g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0, 0, 62, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 0, 0, 0, 0, 0, 0, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0];
    d = ~~b[0];
    var q = "0123456789:;ABCDEF".split("");
    for (a = 0; a < q.length && b[2] != q[a]; a++) ;
    ka = a - 1;
    -1 == ka && (ka = 2);
    ha = ~~b[3];
    xa = ~~b[4];
    za = ~~b[5];
    Aa = ~~b[6];
    0 == d && (nb = 100);
    1 <= d && (nb = g[b[8].charCodeAt(0)], nb += g[b[9].charCodeAt(0)] << 6);
    q = Array(4096);
    for (a = 0; 4096 > a; a++) q[a] = [];
    var n = 1;
    for (a = 0 == d ? 8 : 16; a < c;) {
        var r = 0, w = 1, r = g[b[a].charCodeAt(0)] << 6;
        a++;
        r += g[b[a].charCodeAt(0)];
        a++;
        d = a < c ? g[b[a].charCodeAt(0)] : 0;
        a++;
        if (0 < r) {
            for (var y = 0; y < q[r].length; y++) e[f++] = q[r][y];
            w = 1 + q[r].length
        }
        e[f++] = d;
        if (4096 > n) {
            q[n] = Array(w);
            for (d = 0; d < w; d++) q[n][d] = e[f - w + d];
            n++
        }
    }
    e[f++] = 0;
    for (a = d = e[f++] = 0; 12E4 > d;) if (b = e[a++],
    b == Xb || b == ac || 22 == b || 40 == b) bb[d] = b, cb[d] = e[a++], d++; else if (32 == b) bb[d] = 30, cb[d] = e[a++], d++; else if (48 > e[a]) bb[d] = b, d++; else for (48 > e[a + 1] ? w = e[a++] - 48 : (w = e[a++] - 48, w += e[a++] - 48 << 4), y = 0; y < w; y++) bb[d++] = b
}

function vb() {
    var a, d, b, c, e = 0;
    Fb.e(1);
    for (b = 0; 300 > b; b++) for (d = 0; 400 > d; d++) c = 400 * b + d, 0 == bb[c] ? (c = (b + 8) * h + (d + 8), C[c] = D) : 1 == bb[c] ? (c = ((b >> 2) + 2) * G + ((d >> 2) + 2), K[c] = 1, c = (b + 8) * h + (d + 8), C[c] = -1) : 9 == bb[c] ? Fd(d + 8, b + 8) : 18 == bb[c] ? Gd(d + 8, b + 8, 0, 0) : 22 == bb[c] ? Gd(d + 8, b + 8, 22, cb[c]) : 30 == bb[c] ? Gd(d + 8, b + 8, 32, cb[c]) : 40 == bb[c] ? Hd(d + 8, b + 8, cb[c]) : (e++, 0 >= ha && e > ia[0] && (ha = 1), 1 >= ha && e > ia[1] && (ha = 2), a = id(d + 8, b + 8, bb[c]), bb[c] == Xb ? (E[a].x = 0.1 * Math.cos(cb[c] * Id / 32), E[a].y = 0.1 * -Math.sin(cb[c] * Id / 32), C[(b + 8) * h + (d + 8)] = F) : bb[c] == ac &&
        (M[a] = cb[c]));
    d = new od;
    for (a = 0; a < s; a++) c = l(Math.random() * s), d.set(L[a]), L[a].set(L[c]), L[c].set(d), d.set(E[a]), E[a].set(E[c]), E[c].set(d), b = t[a], t[a] = t[c], t[c] = b, b = M[a], M[a] = M[c], M[c] = b, b = Jd[a], Jd[a] = Jd[c], Jd[c] = b, b = Q[a], Q[a] = Q[c], Q[c] = b, C[Q[a]] = t[a] == Xb ? F : a, C[Q[c]] = t[c] == Xb ? F : c;
    mb = nb
}

yd.prototype.e = function (a) {
    var d, b, c;
    G = 104;
    kd = 79;
    H = 4;
    ld = G * kd;
    for (d = 0; d < ld; d++) Kd(I[d], 0, 0);
    for (d = 0; d < ld; d++) Kd(md[d], 0, 0);
    for (d = 0; d < ld; d++) J[d] = 0;
    for (d = 0; d < ld; d++) nd[d] = 0;
    for (c = b = pd = 0; c < kd; c++) for (d = 0; d < G; d++, b++) qd[b] = d * H, rd[b] = c * H;
    for (d = 0; d < ld; d++) K[d] = 0;
    if (0 == a) {
        d = 0;
        for (b = 2 * G + 2; d < G - 4; d++, b++) K[b] = 1;
        d = 0;
        for (b = G * (kd - 3) + 2; d < G - 4; d++, b++) K[b] = 1;
        d = 0;
        for (b = 2 * G + 2; d < kd - 4; d++, b += G) K[b] = 1;
        d = 0;
        for (b = 3 * G - 3; d < kd - 4; d++, b += G) K[b] = 1
    }
    d = 0;
    for (b = G + 1; d < G - 2; d++, b++) K[b] = -1;
    d = 0;
    for (b = G * (kd - 2) + 1; d < G - 2; d++, b++) K[b] = -1;
    d = 0;
    for (b = G + 1; d < kd - 2; d++, b += G) K[b] = -1;
    d = 0;
    for (b = 2 * G - 2; d < kd - 2; d++, b += G) K[b] = -1;
    for (b = d = 0; d < G; d++, b++) K[b] = -1;
    d = 0;
    for (b = G * (kd - 1); d < G; d++, b++) K[b] = -1;
    for (b = d = 0; d < kd; d++, b += G) K[b] = -1;
    d = 0;
    for (b = G - 1; d < kd; d++, b += G) K[b] = -1;
    Oc = 2 * H;
    Pc = 2 * H;
    sd = Oc;
    td = Pc;
    Kd(jd, 0, 0);
    s = 0;
    Ld = 4E4;
    for (b = 0; b < 316 * h; b++) C[b] = D;
    for (b = 0; b < Ld; b++) Md[b] = 0;
    Ac = 0;
    Nd = 100;
    Od = 0;
    Pd = 2E3;
    Qd = 0;
    Rd = 5;
    Sd = Rd / (Id + Id) * 2;
    Bc = 0;
    Td = 50;
    Dd = 28;
    for (b = 0; b < Td * Dd; b++) Ud[b] = 0;
    for (b = 0; b < Td; b++) A[b] = 0;
    for (b = 0; b < Td; b++) Vd[b] = 0;
    for (b = 0; b < Td; b++) Wd[b] = 0;
    for (b = 0; b < Td; b++) Ed[b] =
        0;
    for (b = 0; b < Td; b++) Xd[b] = 0;
    Gc = 50;
    for (b = 0; b < Gc; b++) Hc[b] = 0;
    for (b = 0; b < Gc; b++) R[b] = 0;
    for (b = 0; b < Gc; b++) Yd[b] = 0;
    for (b = 0; b < Gc; b++) P[b] = 0;
    if (0 == a) for (b = 8 * h + 8, c = 8; 308 > c; c++, b += 16) for (d = 8; 408 > d; d++, b++) a = (c >> 2) * G + (d >> 2), 1 == K[a] && (C[b] = -1);
    for (d = 309 * h - 1; 0 <= d; d--) Ua[d] = 0, Va[d] = 0, Wa[d] = 0;
    mb = 0
};

function Zd(a, d, b, c, e) {
    for (var f = d; ;) if (0 <= C[f] && t[C[f]] == b) t[C[f]] = c, M[C[f]] = e, Jd[C[f]] = 0, f--; else break;
    f++;
    for (var g = d + 1; ;) if (0 <= C[g] && t[C[g]] == b) t[C[g]] = c, M[C[g]] = e, Jd[C[g]] = 0, g++; else break;
    g--;
    for (d = f; d <= g; d++) 0 <= C[d - h] && t[C[d - h]] == b && Zd(a, d - h, b, c, e), 0 <= C[d + h] && t[C[d + h]] == b && Zd(a, d + h, b, c, e)
}

ba.fff = yd.prototype.move;
yd.prototype.move = function () {
    var a, d, b, c = new od, e = new od, f = new od;
    if (!fa && 0 == wa) {
        sd = Oc;
        td = Pc;
        Oc = Lc(Qb + 2 * H, 2 * H, H * (G - 2) - 1);
        Pc = Lc(Rb + 2 * H, 2 * H, H * (kd - 2) - 1);
        0 < la && (Oc = 2 * H + l(ma) + (Qb >> la), Pc = 2 * H + l(na) + (Rb >> la), Oc = Lc(Oc, 2 * H, H * (G - 2) - 1), Pc = Lc(Pc, 2 * H, H * (kd - 2) - 1));
        Tb && (sd = Oc, td = Pc);
        if (1 == Ba) if (Tb || Mc) Da = Oc, Ea = Pc; else {
            if (Zc || $d) sd = Da, td = Ea
        } else if (2 == Ba) {
            if (Tb || Mc) Ca = 0; else if (ae || be) 0 == Ca && (ce(Oc - sd) > ce(Pc - td) ? Ca = 1 : ce(Oc - sd) < ce(Pc - td) && (Ca = 2)); else if (Zc || $d) Ca = 0;
            1 == Ca ? Pc = td : 2 == Ca && (Oc = sd)
        }
        Kd(c, Oc, Pc);
        Kd(jd, sd -
            5 * jd.x, td - 5 * jd.y);
        var g = jd, q = 5;
        d = a = 0.5;
        de(ee, c, g);
        q -= fe(ee);
        a *= q;
        d *= q;
        c.x += ee.x * a;
        c.y += ee.y * a;
        g.x -= ee.x * d;
        g.y -= ee.y * d;
        de(jd, c, jd);
        fe(jd);
        ge(this, 0);
        ge(this, 1);
        if (Tb || Mc) mb = Lc(mb + 1, 0, 4095)
    }
    g = [1, 2, 4, 8];
    for (q = 0; q < g[za]; q++) {
        for (a = d = 0; a < ld; a++) 0 == K[a] && d++;
        if (0 < d) {
            pd /= d;
            for (a = 0; a < ld; a++) 0 == K[a] && (J[a] += pd);
            pd = 0
        }
        if (1 == ya && !(Sb && 0 == wa && Ic[10] | Ic[13])) break;
        for (a = 0; a < ld; a++) md[a].set(I[a]);
        a = 2 * G + 2;
        for (b = 2; b < kd - 2; b++, a += 4) for (d = 2; d < G - 2; d++, a++) if (1 != K[a]) {
            c.set(I[a]);
            var n = fe(c);
            if (0 != n) {
                var r = ce(c.x), w =
                    ce(c.y), y = r / (r + w) * n * 0.5, n = w / (r + w) * n * 0.5;
                he(e, c, y);
                he(f, c, n);
                var z = 0 > c.x ? -1 : 1, v = 0 > c.y ? -G : G;
                r > w ? (0 >= K[a + z] ? (md[a].sub(e), md[a + z].add(e), J[a + z] += y, J[a] -= y) : (md[a].sub(e), md[a].sub(e)), 0 >= K[a + z + v] ? (md[a].sub(f), md[a + z + v].add(f), J[a] -= n, J[a + z + v] += n) : (md[a].sub(f), md[a].sub(f))) : (0 >= K[a + v] ? (md[a].sub(f), md[a + v].add(f), J[a] -= n, J[a + v] += n) : (md[a].sub(f), md[a].sub(f)), 0 >= K[a + v + z] ? (md[a].sub(e), md[a + v + z].add(e), J[a] -= y, J[a + v + z] += y) : (md[a].sub(e), md[a].sub(e)))
            }
        }
        for (a = 0; a < ld; a++) nd[a] = J[a];
        a = 2 * G + 2;
        r = -1 - G;
        w = 1 -
            G;
        y = -1 + G;
        n = 1 + G;
        for (b = 2; b < kd - 2; b++, a += 4) for (d = 2; d < G - 2; d++, a++) 1 != K[a] && (0 >= K[a - 1] && (md[a].x -= 0.0625 * (J[a] - J[a - 1]), nd[a] -= 0.0625 * (J[a] - J[a - 1])), 0 >= K[a + 1] && (md[a].x += 0.0625 * (J[a] - J[a + 1]), nd[a] -= 0.0625 * (J[a] - J[a + 1])), 0 >= K[a - G] && (md[a].y -= 0.0625 * (J[a] - J[a - G]), nd[a] -= 0.0625 * (J[a] - J[a - G])), 0 >= K[a + G] && (md[a].y += 0.0625 * (J[a] - J[a + G]), nd[a] -= 0.0625 * (J[a] - J[a + G])), 0 >= K[a + r] && (md[a].x -= 0.044194173 * (J[a] - J[a + r]), md[a].y -= 0.044194173 * (J[a] - J[a + r]), nd[a] -= 0.044194173 * (J[a] - J[a + r])), 0 >= K[a + w] && (md[a].x += 0.044194173 *
            (J[a] - J[a + w]), md[a].y -= 0.044194173 * (J[a] - J[a + w]), nd[a] -= 0.044194173 * (J[a] - J[a + w])), 0 >= K[a + y] && (md[a].x -= 0.044194173 * (J[a] - J[a + y]), md[a].y += 0.044194173 * (J[a] - J[a + y]), nd[a] -= 0.044194173 * (J[a] - J[a + y])), 0 >= K[a + n] && (md[a].x += 0.044194173 * (J[a] - J[a + n]), md[a].y += 0.044194173 * (J[a] - J[a + n]), nd[a] -= 0.044194173 * (J[a] - J[a + n])));
        for (a = 0; a < ld; a++) -1 != K[a] ? (I[a].set(md[a]), J[a] = nd[a]) : (J[a] = 0, Kd(I[a], 0, 0));
        this.B();
        this.I();
        this.r();
        this.w();
        this.t()
    }
};

function ge(a, d) {
    var b, c, e, f, g;
    b = new od;
    var q = 0 == d ? da : ea, n = 0 == d ? Tb : Mc;
    f = 0 == d ? Zc : $d;
    var r = 0 == d ? ae : be;
    if (34 > q) {
        if (1 == Ba && (r = 0 == d ? Zc : $d), r && (n = Oc - sd, r = Pc - td, !(1 >= ga && 1 == ya && 1 >= la && 0 == n && 0 == r && 3 != Ba))) {
            var w = ie(ie(ce(n), ce(r)), 1), n = l((n << 8) / w), r = l((r << 8) / w), y = (sd << 8) + 127,
                z = (td << 8) + 127;
            for (c = 0; c <= w; c++, y += n, z += r) {
                var v = ga + 0, Y = (y >> 8) - v;
                f = (z >> 8) - v;
                var Ka = Y + 2 * v, ab = f + 2 * v;
                8 > Y && (Y = 8);
                8 > f && (f = 8);
                Ka > h - 8 - 1 && (Ka = h - 8 - 1);
                307 < ab && (ab = 307);
                var La = f * h + Y, Ta = h - (Ka - Y + 1);
                for (g = f; g <= ab; g++, La += Ta) for (f = Y; f <= Ka; f++, La++) if (!(v *
                    v + 1 < (f - (y >> 8)) * (f - (y >> 8)) + (g - (z >> 8)) * (g - (z >> 8)))) if (3 == Ba) {
                    e = 0 != hd[q] ? hd[q] : Ub;
                    var pa = 0;
                    e != Xb && (e == ac ? pa = 0 != ud[da] ? ud[da] : 0 != ud[ea] ? ud[ea] : Ub : e == oc && (pa = 8 * zd(jd) / Ad + 0.5, 8 <= pa && (pa = 0), pa = l(pa) + 1), 0 <= C[La] && t[C[La]] != e && Zd(a, La, t[C[La]], e, pa))
                } else C[La] == D && (pa = hd[q], (0 == d && be && 34 > ea || 1 == d && ae && 34 > da) && 50 > S(100) && (pa = hd[0 == d ? ea : da]), e = id(f, g, pa), 0 > e || (pa == Xb ? (he(b, jd, 0.1), E[e].set(b), C[La] = F) : pa == ac ? M[e] = 0 != ud[da] ? ud[da] : 0 != ud[ea] ? ud[ea] : Ub : pa == oc && (pa = 8 * zd(jd) / Ad + 0.5, 8 <= pa && (pa = 0), M[e] = l(pa) + 1)))
            }
        }
    } else if (40 ==
        q) e = (Pc >> 2) * G + (Oc >> 2), he(b, jd, 10), r && 0 == K[e] && (I[e].add(b), 10 < je(I[e]) && 1 == ya && (fe(I[e]), T(I[e], 10))); else if (41 == q) e = (Pc >> 2) * G + (Oc >> 2), r && (v = (ga + 1) * (ga + 1) * 0.25, v = 0 == d ? v : -v, 0 == K[e] && (J[e] += v, pd -= v), 0 == K[e - 1] && (J[e - 1] += v, pd -= v), 0 == K[e - G] && (J[e - G] += v, pd -= v), 0 == K[e - G - 1] && (J[e - G - 1] += v, pd -= v)); else if (43 == q) {
        if (!(Od > Pd - 5)) if (f = Oc >> 2 << 2, g = Pc >> 2 << 2, e = (Pc >> 2) * G + (Oc >> 2), 0 != K[e]) Qd++; else if (n && Qd++, r) {
            q = 0;
            for (n = Od - 1; 0 <= n && ke[n] == Qd; n--) q++;
            5 > q && (Qd++, le(f + l(S(H)), g + l(S(H))), le(f + l(S(H)), g + l(S(H))), le(f + l(S(H)),
                g + l(S(H))), le(f + l(S(H)), g + l(S(H))));
            le(f + l(S(H)), g + l(S(H)))
        }
    } else if (44 == q) {
        if (n) {
            f = Lc(Oc, 24, 391);
            g = Lc(Pc, 24, 291);
            for (b = q = 0; b < Ac; b++) if (f == Cd[b] && g == Bd[b]) {
                q = 1;
                break
            }
            0 == q && Fd(f, g)
        }
    } else if (45 == q || 46 == q || 47 == q || 49 == q) f = Oc >> 2 << 2, g = Pc >> 2 << 2, e = (Pc >> 2) * G + (Oc >> 2), 0 == K[e] && (n && 46 == q ? Gd(f, g, 0, 0) : n && 47 == q ? Gd(f, g, 22, ga) : n && 45 == q ? (b = 0 != vd[da] ? vd[da] : 0 != vd[ea] ? vd[ea] : 0, Gd(f, g, 30, b)) : n && 49 == q && Gd(f, g, 22, 10)); else if (48 == q) e = (Pc >> 2) * G + (Oc >> 2), 0 == K[e] && n && 48 == q && (b = 0 != wd[da] ? wd[da] : 0 != wd[ea] ? wd[ea] : Ub, Hd(Oc, Pc,
        b)); else if (54 == q) Za = Oc, $a = Pc - 14, n && (wa = 20); else if (50 == q || 51 == q || 52 == q) {
        if (1 == Ba && (r = 0 == d ? Zc : $d), r) {
            n = l(Oc / H) - l(sd / H);
            r = l(Pc / H) - l(td / H);
            w = ie(ie(ce(n), ce(r)), 1);
            n = l((n << 8) / w);
            r = l((r << 8) / w);
            y = (l(sd / H) << 8) - 127;
            z = (l(td / H) << 8) - 127;
            for (b = 0; b <= w; b++, y += n, z += r) for (c = (y >> 8) - l(ga / 2), v = (z >> 8) - l(ga / 2), Y = c + ga / 2 + 0.5, Ka = v + ga / 2 + 0.5, g = v; g <= v + ga; g++) for (f = c; f <= c + ga; f++) (f - Y) * (f - Y) + (g - Ka) * (g - Ka) > ga * ga / 4 || (e = Lc(g, 2, kd - 3) * G + Lc(f, 2, G - 3), 50 == q ? (K[e] = 1, Kd(I[e], 0, 0), pd += J[e], J[e] = 0) : 51 == q ? K[e] = -2 : 52 == q && 0 == K[e] && (K[e] = -2,
                Kd(I[e], 0, 0), pd += J[e], J[e] = 0));
            if (52 == q && 0 == ga) for (n = Oc - sd, r = Pc - td, w = ie(ie(ce(n), ce(r)), 1), n = l((n << 8) / w), r = l((r << 8) / w), y = (sd << 8) + 127, z = (td << 8) + 127, b = 0; b <= w; b++, y += n, z += r) for (e = 0; e < s; e++) y >> 8 == l(L[e].x) && z >> 8 == l(L[e].y) && U(e--);
            if (50 == q || 52 == q) for (b = 0; b < s; b++) e = (l(L[b].y) >> 2) * G + (l(L[b].x) >> 2), 0 != K[e] && U(b--);
            if (51 == q) for (b = 0; b < Ac; b++) if (e = (l(Bd[b]) >> 2) * G + (l(Cd[b]) >> 2), -2 == K[e] && (f = b--, 0 != Ac)) {
                r = n = g = void 0;
                g = (Bd[f] - 16) * h + (Cd[f] - 16);
                for (r = 0; 32 > r; r++, g += h - 32) for (n = 0; 32 > n; n++, g++) -3 == C[g] && (C[g] = D);
                Cd[f] =
                    Cd[Ac - 1];
                Bd[f] = Bd[Ac - 1];
                me[f] = me[Ac - 1];
                ne[f] = ne[Ac - 1];
                Ac--
            }
            if (50 == q || 51 == q) {
                for (b = 0; b < Bc; b++) if (A[b] == Fc || A[b] == Fc + 1 || A[b] == Dc || A[b] == Cc) for (c = 4; 6 > c; c++) {
                    if (e = (l(N[b * Dd + c].y) >> 2) * G + (l(N[b * Dd + c].x) >> 2), 0 != K[e]) {
                        oe(b--);
                        break
                    }
                } else if (A[b] == Ec) for (c = 0; 4 > c; c++) if (e = (l(N[b * Dd + c].y) >> 2) * G + (l(N[b * Dd + c].x) >> 2), 0 != K[e]) {
                    oe(b--);
                    break
                }
                for (b = 0; b < Gc; b++) if (0 != Hc[b] && (e = (l(O[b].y) >> 2) * G + (l(O[b].x) >> 2), 0 != K[e])) {
                    e = l(O[b].y) * h + l(O[b].x);
                    for (c = 0; 21 > c; c++) -2 == C[e + pe[c]] && (C[e + pe[c]] = D);
                    Hc[b] = 0
                }
            }
            if (51 == q || 52 == q) for (b =
                                             0; b < ld; b++) -2 == K[b] && (K[b] = 0);
            e = 8 * h + 8;
            for (g = 8; 308 > g; g++, e += 16) for (f = 8; 408 > f; f++, e++) La = (g >> 2) * G + (f >> 2), 0 == K[La] && -1 == C[e] ? C[e] = D : 1 == K[La] && -1 > C[e] && (C[e] = -1)
        }
    } else if (53 == q) if (n) if (0 == oa) qa = sa = Oc, ra = ta = Pc; else {
        if (!(1 == ya && 1 >= la && qa == sa && ra == ta)) for (qa > sa && (f = qa, qa = sa, sa = f), ra > ta && (g = ra, ra = ta, ta = g), r = Oc - l((sa - qa) / 2) - qa, w = Pc - l((ta - ra) / 2) - ra, g = ra - 8; g <= ta - 8; g++) if (!(0 > g + w || 300 <= g + w)) for (f = qa - 8; f <= sa - 8; f++) 0 > f + r || 400 <= f + r || (n = 400 * g + f, 0 != ua[n] && C[(w + g + 8) * h + (r + f + 8)] == D && (q = id(r + f + 8, w + g + 8, ua[n]), 0 <= q && (ua[n] ==
        Xb ? (E[q].x = 0.1 * Math.cos(va[n] * Id / 32), E[q].y = 0.1 * -Math.sin(va[n] * Id / 32), C[(w + g + 8) * h + (r + f + 8)] = F) : ua[n] == ac && (M[q] = va[n]))))
    } else if (f && 0 == oa) {
        for (q = 0; 12E4 > q; q++) ua[q] = 0, va[q] = 0;
        for (q = 0; q < s; q++) f = l(L[q].x), g = l(L[q].y), 8 > f || 408 <= f || 8 > g || 308 <= g || (f -= 8, g -= 8, f = 400 * g + f, ua[f] = t[q], t[q] == Xb ? va[f] = Jc(l(64 * zd(E[q]) / Ad), 63) : t[q] == ac && (va[f] = M[q] % 100))
    } else r && 0 == oa && (sa = Oc, ta = Pc); else 57 == q && 0 != la && r && (ma -= (Qb - qe) / (1 << la), na -= (Rb - re) / (1 << la), ma = Lc(ma, 0, 400 - (400 >> la)), na = Lc(na, 0, 300 - [300, 150, 75, 38, 19][la]))
}

ba.fff = yd.prototype.a;
yd.prototype.a = function () {
    var a, d, b, c, e, f, g, q, n;
    e = new od;
    if (0 == ka) for (a = 308 * h; 0 <= a; a--) p[a] = -1 == C[a] ? 6316128 : 0; else if (1 == ka || 2 == ka) {
        a = 2 * G + 2;
        for (c = 2; 77 > c; c++, a += 4) for (b = 2; 102 > b; b++, a++) 1 == K[a] ? Kb(qd[a], rd[a], H, H, 6316128) : (q = g = 0, 0 < J[a] && (g = l(se(48 * J[a], 96))), 0 > J[a] && (q = l(se(48 * -J[a], 96))), Kb(qd[a], rd[a], H, H, g << 8 | q));
        if (2 == ka) {
            var r;
            for (a = 0; a < ld; a++) 0 == K[a] && (e.set(I[a]), r = fe(e), 0.2 > r || (d = qd[a] + 2, n = rd[a] + 2, 8 < r && (r = 8), f = l(se(48 * r, 96)), B(d + e.x * r * 10, n + e.y * r * 10, d, n, f << 16)))
        }
    } else if (3 == ka) for (a = 308 * h; 3328 <=
    a; a--) -1 == C[a] ? p[a] = 6316128 : (f = 230 * (p[a] >> 16 & 255) >> 8, g = 230 * (p[a] >> 8 & 255) >> 8, q = 230 * (p[a] & 255) >> 8, p[a] = f << 16 | g << 8 | q); else if (4 == ka) {
        for (c = 8; 308 > c; c++) {
            e = c * h + 8;
            for (b = 8; 407 > b; b++, e++) f = (p[e] >> 16 & 255) + (p[e + 1] >> 16 & 255) >> 1, g = (p[e] >> 8 & 255) + (p[e + 1] >> 8 & 255) >> 1, q = (p[e] & 255) + (p[e + 1] & 255) >> 1, p[e] = f << 16 | g << 8 | q;
            e = c * h + 407;
            for (b = 407; 8 < b; b--, e--) f = (p[e] >> 16 & 255) + (p[e - 1] >> 16 & 255) >> 1, g = (p[e] >> 8 & 255) + (p[e - 1] >> 8 & 255) >> 1, q = (p[e] & 255) + (p[e - 1] & 255) >> 1, p[e] = f << 16 | g << 8 | q
        }
        for (b = 8; 408 > b; b++) {
            e = 8 * h + b;
            for (c = 8; 307 > c; c++, e += h) f =
                (p[e] >> 16 & 255) + (p[e + h] >> 16 & 255) >> 1, g = (p[e] >> 8 & 255) + (p[e + h] >> 8 & 255) >> 1, q = (p[e] & 255) + (p[e + h] & 255) >> 1, p[e] = f << 16 | g << 8 | q;
            e = 307 * h + b;
            for (c = 307; 8 < c; c--, e -= h) f = (p[e] >> 16 & 255) + (p[e - h] >> 16 & 255) >> 1, g = (p[e] >> 8 & 255) + (p[e - h] >> 8 & 255) >> 1, q = (p[e] & 255) + (p[e - h] & 255) >> 1, p[e] = f << 16 | g << 8 | q
        }
        for (a = 308 * h; 0 <= a; a--) -1 == C[a] && (p[a] = 6316128)
    } else if (5 == ka) {
        b = 309 * h;
        for (a = 0; a < b; a++) Ua[a] = Va[a] = Wa[a] = 0;
        f = [1, 1, 1, h - 3, 1, 1, 1, h - 3, 1, 1, 1, h - 3, 1, 1, 1, h - 3];
        var w;
        e = 2 * G + 2;
        for (c = 2; c < kd - 2; c++, e += 4) for (b = 2; b < G - 2; b++, e++) if (g = ce(I[e].x), a = ce(I[e].y),
        0 != g || 0 != a) for (q = 1 / (g + a), g = l(g * q * 65535), q = l(a * q * 65535), n = d = 0, 0 > I[e].x ? d = -1 : 0 < I[e].x && (d = 1), 0 > I[e].y ? n = -h : 0 < I[e].y && (n = h), r = (c << 2) * h + (b << 2), a = 0; 16 > a; a++) w = p[r] >> 16 & 255, Ua[r + d] += w * g, Ua[r + n] += w * q, w = p[r] >> 8 & 255, Va[r + d] += w * g, Va[r + n] += w * q, w = p[r] & 255, Wa[r + d] += w * g, Wa[r + n] += w * q, r += f[a];
        e = 8 * h + 8;
        for (c = 8; 308 > c; c++, e += 16) for (b = 8; 408 > b; b++, e++) p[e] = -1 == C[e] ? 6316128 : se(Ua[e] >> 16, 255) << 16 | se(Va[e] >> 16, 255) << 8 | se(Wa[e] >> 16, 255)
    } else if (6 == ka) for (a = 308 * h; 3328 <= a; a--) -1 == C[a] ? p[a] = 6316128 : (f = 220 * (p[a] >> 16 & 255) >> 8, g =
        220 * (p[a] >> 8 & 255) >> 8, q = 220 * (p[a] & 255) >> 8, p[a] = f << 16 | g << 8 | q); else if (7 == ka) {
        for (a = 308 * h; 2912 <= a; a--) -1 == C[a] ? p[a] = 6316128 : -2 == C[a] ? p[a] = 0 : C[a] == F ? p[a] = 8421631 : C[a] == D ? p[a] = 0 <= C[a + 1] ? Ib[t[C[a + 1]]][0] : 0 <= C[a - 1] ? Ib[t[C[a - 1]]][0] : 0 <= C[a + h] ? Ib[t[C[a + h]]][0] : 0 <= C[a - h] ? Ib[t[C[a - h]]][0] : 0 <= C[a + h + 1] ? Ib[t[C[a + h + 1]]][0] : 0 <= C[a + h - 1] ? Ib[t[C[a + h - 1]]][0] : 0 <= C[a - h + 1] ? Ib[t[C[a - h + 1]]][0] : 0 <= C[a - h - 1] ? Ib[t[C[a - h - 1]]][0] : 0 : 0 <= C[a] && (p[a] = Ib[t[C[a]]][0]);
        for (a = 308 * h; 3328 <= a; a--) 0 == p[a] >>> 0 && (0 != p[a + 1] >>> 0 && 15658734 != p[a +
        1] >>> 0 ? p[a] = 15658734 : 0 != p[a - 1] >>> 0 && 15658734 != p[a - 1] >>> 0 ? p[a] = 15658734 : 0 != p[a + h] >>> 0 && 15658734 != p[a + h] >>> 0 ? p[a] = 15658734 : 0 != p[a - h] >>> 0 && 15658734 != p[a - h] >>> 0 && (p[a] = 15658734))
    } else if (8 == ka) {
        for (a = 308 * h; 0 <= a; a--) p[a] = -1 == C[a] ? 6316128 : 0;
        a = 2 * G + 2;
        for (c = 2; 77 > c; c++, a += 4) for (b = 2; 102 > b; b++, a++) 0 == K[a] && (e.set(I[a]), r = je(e), 0.2 > r || (2 < r && (r = 2), g = l(se(48 * r, 96)), f = 0, 0 < J[a] && (f = l(se(48 * J[a] * r, 96))), q = 0, 0 > J[a] && (q = l(se(48 * -J[a] * r, 96))), d = qd[a] + 5 * I[a].x, n = rd[a] + 5 * I[a].y, r = qd[a + 1] + 5 * I[a + 1].x, w = rd[a + 1] + 5 * I[a + 1].y,
            B(d, n, r, w, f << 16 | g << 8 | q), r = qd[a + G] + 5 * I[a + G].x, w = rd[a + G] + 5 * I[a + G].y, B(d, n, r, w, f << 16 | g << 8 | q)))
    } else if (9 == ka) for (a = 2 * G + 2, c = 2; 77 > c; c++, a += 4) for (b = 2; 102 > b; b++, a++) 1 == K[a] ? Kb(qd[a], rd[a], H, H, 6316128) : (f = 0, 0 < J[a] && (f = l(se(48 * J[a], 72))), 0 > J[a] && (f = l(se(48 * -J[a], 24))), Kb(qd[a], rd[a], H, H, f << 16 | f << 8 | f)); else if (10 == ka) for (r = [0, 1, 2, 3, h + 0, h + 1, h + 2, h + 3, 2 * h + 0, 2 * h + 1, 2 * h + 2, 2 * h + 3, 3 * h + 0, 3 * h + 1, 3 * h + 2, 3 * h + 3], a = 2 * G + 2, c = 2; 77 > c; c++, a += 4) for (b = 2; 102 > b; b++, a++) if (1 == K[a]) Kb(qd[a], rd[a], H, H, 6316128); else {
        if (n = 256 - l(se(ce(12 *
            J[a]), 32)), 256 != n) for (e = (c << 2) * h + (b << 2), d = 0; 16 > d; d++) f = (p[e + r[d]] >> 16 & 255) * n >> 8, g = (p[e + r[d]] >> 8 & 255) * n >> 8, q = (p[e + r[d]] & 255) * n >> 8, p[e + r[d]] = f << 16 | g << 8 | q
    } else if (11 == ka) {
        for (a = 308 * h; 0 <= a; a--) Ua[a] = 0 > C[a] ? l(8 * Ua[a] / 9) : t[C[a]] == x ? 25500 : t[C[a]] == ec ? 25500 : t[C[a]] == ic ? 255E3 : t[C[a]] == lc ? 255E3 : t[C[a]] == oc ? 25500 : t[C[a]] == vc ? 25500 : l(8 * Ua[a] / 9);
        for (a = 308 * h; 0 <= a; a--) p[a] = -1 == C[a] ? 6316128 : 0
    } else if (12 == ka) {
        for (a = 0; a < s; a++) Ua[Q[a]] = xd[t[a]];
        for (c = 8; 308 > c; c++) {
            e = c * h + 8;
            for (b = 8; 407 > b; b++, e++) Ua[e] = Ua[e + 1] = l((Ua[e] +
                Ua[e + 1]) / 2);
            for (b = 407; 8 < b; b--, e--) Ua[e] = Ua[e - 1] = l((Ua[e] + Ua[e - 1]) / 2)
        }
        for (b = 8; 408 > b; b++) {
            e = 8 * h + b;
            for (c = 8; 307 > c; c++, e += h) Ua[e] = Ua[e + h] = l((Ua[e] + Ua[e + h]) / 2);
            for (c = 307; 8 < c; c--, e -= h) Ua[e] = Ua[e - h] = l((Ua[e] + Ua[e - h]) / 2)
        }
        for (a = 308 * h; 0 <= a; a--) b = Ua[a], 0 > b ? (f = 128 * -b >> 10, 255 < f && (f = 255), g = 0, q = 255 * -b >> 10, 255 < q && (q = 255)) : 1024 > b ? (g = f = 0, q = 255 * b >> 10) : 2048 > b ? (f = 0, g = 255 * (b - 1024) >> 10, q = 255) : 3072 > b ? (f = 0, g = 255, q = 255 - (255 * (b - 2048) >> 10)) : 4096 > b ? (f = 255 * (b - 3072) >> 10, g = 255, q = 0) : 6144 > b ? (f = 255, g = 255 - (255 * (b - 4096) >> 11), q = 0) : (f =
            255, g = 255 * (b - 6144) >> 11, 255 < g && (g = 255), q = 255 * (b - 6144) >> 11, 255 < q && (q = 255)), p[a] = f << 16 | g << 8 | q;
        for (a = 308 * h; 0 <= a; a--) -1 == C[a] && (p[a] = 6316128)
    } else if (13 == ka) for (a = 308 * h; 3328 <= a; a--) -1 == C[a] ? p[a] = 0 : C[a] == D && (f = 255 - (255 - (p[a] >> 16 & 255) >> 1), g = 255 - (255 - (p[a] >> 8 & 255) >> 1), q = 255 - (255 - (p[a] & 255) >> 1), p[a] = f << 16 | g << 8 | q);
    if (1 < xa) {
        f = [0, 0, 100, 50, 25, 16, 8, 4];
        for (a = 0; 400 > a; a += f[xa]) for (c = 0, e = 8 * h + a + 8; 300 > c; c++, e += h) 6316128 != p[e] && (p[e] = 4210752);
        for (a = 0; 300 > a; a += f[xa]) for (b = 0, e = (a + 8) * h + 8; 400 > b; b++, e++) 6316128 != p[e] && (p[e] =
            4210752)
    }
    if (0 < xa) {
        c = 0;
        for (e = 8 * h + 208; 300 > c; c++, e += h) 6316128 != p[e] && (p[e] = 4194304);
        b = 0;
        for (e = 158 * h + 8; 400 > b; b++, e++) 6316128 != p[e] && (p[e] = 4194304)
    }
    this.A();
    this.H();
    this.q();
    this.v();
    this.s();
    if (11 == ka) {
        for (c = 8; 308 > c; c++) {
            e = c * h + 8;
            for (b = 8; 407 > b; b++, e++) Ua[e] = Ua[e] + Ua[e + 1] >> 1;
            for (b = 407; 8 < b; b--, e--) Ua[e] = Ua[e] + Ua[e - 1] >> 1
        }
        for (b = 8; 408 > b; b++) {
            e = 8 * h + b;
            for (c = 8; 307 > c; c++, e += h) Ua[e] = Ua[e] + Ua[e + h] >> 1;
            for (c = 307; 8 < c; c--, e -= h) Ua[e] = Ua[e] + Ua[e - h] >> 1
        }
        for (a = 308 * h; 0 <= a; a--) 1 > Ua[a] ? p[a] = 0 : (n = se(Ua[a], 255), f = (p[a] >> 16 & 255) *
            n >> 8, g = (p[a] >> 8 & 255) * n >> 8, q = (p[a] & 255) * n >> 8, p[a] = f << 16 | g << 8 | q)
    }
    a = new od;
    if (!fa && 0 == wa) {
        if (50 == da || 51 == da || 52 == da || 50 == ea || 51 == ea || 52 == ea) for (c = (td >> 2) - 1 - l(ga / 2), e = [[], [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4,
            1, 1, 1, 1, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4]], f = ga, b = ((sd >> 2) - 1 - l(ga / 2) + [0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4][f]) * H, c = (c + [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1][f]) * H, g = 0; g < e[f].length; g++) q = Lc(c, 0, 308) * h + Lc(b, 0, h - 1),
            p[q] = 12582912, 1 == e[f][g] && b++, 2 == e[f][g] && c++, 3 == e[f][g] && b--, 4 == e[f][g] && c--;
        if (5 == da || 5 == ea || 40 == da || 40 == ea || 23 == da || 23 == ea) he(a, jd, 30), B(Oc + a.x, Pc + a.y, Oc, Pc, 16711680);
        if (53 == da || 53 == ea) if (0 == oa) {
            if (53 == da && ae || 53 == ea && be) B(qa, ra, sa, ra, 16761024), B(qa, ta, sa, ta, 16761024), B(qa, ra, qa, ta, 16761024), B(sa, ra, sa, ta, 16761024)
        } else b = Oc - l((sa - qa) / 2), c = Pc - l((ta - ra) / 2), a = sa - qa, e = ta - ra, B(b, c, b + a, c, 12632319), B(b, c + e, b + a, c + e, 12632319), B(b, c, b, c + e, 12632319), B(b + a, c, b + a, c + e, 12632319);
        if (54 == da || 54 == ea) B(Za, $a, Za,
            $a + 13, 12582912), B(Za, $a, Za + 200, $a, 12582912), B(Za, $a + 13, Za + 200, $a + 13, 12582912);
        1 == Ba && (ae && (34 > da || 50 == da || 51 == da || 52 == da) || be && (34 > ea || 50 == ea || 51 == ea || 52 == ea)) && B(Da, Ea, Oc, Pc, 16711680)
    }
};
for (var s = 0, Ld = 4E4, L = Array(Ld), E = Array(Ld), t = new Int32Array(Ld), M = new Int32Array(Ld), Jd = new Uint32Array(Ld), C = new Int32Array(316 * h), Q = new Int32Array(Ld), Md = new Int32Array(Ld), s = 0; s < Ld; s++) L[s] = new od;
for (s = 0; s < Ld; s++) E[s] = new od;
var te = [1, -1, h, -h, h + 1, h - 1, -h + 1, -h - 1], ue = [1, 1, 0, -1, -1, -1, 0, 1],
    ve = [0, -1, -1, -1, 0, 1, 1, 1], we = [1, -h + 1, -h, -h - 1, -1, h - 1, h, h + 1];

function id(a, d, b) {
    if (s >= ia[ha] || 7 > a || 409 <= a || 7 > d || 309 <= d) return -1;
    Kd(L[s], a, d);
    Kd(E[s], 0, 0);
    t[s] = b;
    M[s] = 0;
    Jd[s] = 0;
    Md[s] = 0;
    Q[s] = ~~d * h + ~~a;
    C[Q[s]] = s;
    s++;
    return s - 1
}

function U(a) {
    0 != s && (C[Q[a]] = D, s--, s != a && (L[a].set(L[s]), E[a].set(E[s]), t[a] = t[s], M[a] = M[s], Jd[a] = Jd[s], Md[a] = Md[s], Q[a] = Q[s], C[Q[a]] = t[a] == Xb ? F : a))
}

function xe(a, d, b, c) {
    var e;
    e = L[a].x;
    L[a].x = L[d].x;
    L[d].x = e;
    e = L[a].y;
    L[a].y = L[d].y;
    L[d].y = e;
    e = C[b];
    C[b] = C[c];
    C[c] = e;
    e = Q[a];
    Q[a] = Q[d];
    Q[d] = e
}

function ye(a, d) {
    T(d, 3.8 / (je(d) + 1));
    var b = (L[a].y >> 0) * h + (L[a].x + d.x >> 0);
    C[b] <= F && (L[a].x += d.x);
    b = (L[a].y + d.y >> 0) * h + (L[a].x >> 0);
    C[b] <= F && (L[a].y += d.y);
    Q[a] = (L[a].y >> 0) * h + (L[a].x >> 0);
    C[Q[a]] = a;
    return Q[a]
}

var ze = [0, 0, 0.2, 0, 0, 0.2, 0.7, 0.2, 0, 0, 0.8, 0.2, 0.2, 0, 0.2, 0.5, 0, 0.5, 0, 0.9, 0.2, 0, 0, 0, 0.3, 0, 0, 0, 0, 0.9, 0, 0.9, 0, 0, 0, 0.8, 0.2, 0, 0.9, 0.1, 0, 0.9, 0.9, 0.5, 0, 0.9],
    Ae = [0, 0, 0.2, 0, 0, 0.2, 0.7, 0.2, 0, 0, 1, 0.2, 0.2, 0, 0.2, 0.5, 0, 0.5, 0, 0.9, 0.2, 0, 0, 0, 0.3, 0, 0, 1, 0, 0.9, 0, 0.9, 0, 0, 0, 0.2, 0.2, 0, 0.5, 0.1, 0, 0.9, 0.9, 0.5, 0, 0.9],
    Be = [0, 0, 5, 40, 10, 5, 10, 10, 0, 0, 40, 10, 30, 10, 0, 10, 30, 100, 0, 20, 50, 10, 0, 100, 5, 10, 5, 30, 0, 10, 0, 10, 0, 5, 0, 10, 5, 40, 0, 10, 0, 20, 5, 50, 5, 0],
    V = [0, 0, 1, 2, 3, 1, 4, 1, 0, 0, 4, 1, 0, 1, 4, 1, 2, 4, 0, 1, 3, 1, 0, 2, 1, 3, 5, 2, 3, 4, 0, 1, 0, 3, 2, 4, 1, 2, 4, 5, 0, 2, 3, 4,
        5, 4];
ba.fff = yd.prototype.B;
yd.prototype.B = function () {
    var a, d = new od, b, c, e, f;
    for (a = 0; a < Ac; a++) for (b = (Bd[a] - 16) * h + (Cd[a] - 16), f = 0; 32 > f; f++, b += h - 32) for (e = 0; 32 > e; e++, b++) -3 == C[b] && (C[b] = D);
    for (a = 0; a < Ac; a++) for (b = (Bd[a] - 16) * h + (Cd[a] - 16), c = 32 * l(me[a]) * zb.c, f = 0; 32 > f; f++, b += h - 32) for (e = 0; 32 > e; e++, b++, c++) 0 == zb.b[c] && C[b] <= F && (C[b] = -3);
    b = !0;
    if (fa || 0 != wa) b = !1;
    c = 42 == da && Tb || 42 == ea && Mc ? !0 : !1;
    e = 42 == da && ae || 42 == ea && be ? !0 : !1;
    for (a = 0; a < s; a++) {
        if (b) if (0 == Md[a]) {
            if (c) {
                if (t[a] == Xb) continue;
                d.x = Oc - L[a].x;
                d.y = Pc - L[a].y;
                je(d) < 4 * ga && (Md[a] = 1)
            }
        } else e ?
            (E[a].x += 0.1 * (Oc - L[a].x), E[a].y += 0.1 * (Pc - L[a].y)) : Md[a] = 0;
        a = t[a] <= cc ? a - this.C(a, d) : t[a] <= mc ? a - this.D(a, d) : t[a] <= uc ? a - this.F(a, d) : a - this.G(a, d)
    }
    if (0 == Aa) for (a = 0; a < s; a++) 8 > L[a].x ? U(a--) : 408 <= L[a].x ? U(a--) : 8 > L[a].y ? U(a--) : 308 <= L[a].y && U(a--); else if (1 == Aa) for (a = 0; a < s; a++) 8 > L[a].x ? (d = Q[a] + 400, C[d] <= F && !(8 > L[a].y || 308 <= L[a].y) ? (C[Q[a]] = D, L[a].x += 400, C[d] = a, Q[a] = d) : U(a--)) : 408 <= L[a].x ? (d = Q[a] - 400, C[d] <= F && !(8 > L[a].y || 308 <= L[a].y) ? (C[Q[a]] = D, L[a].x -= 400, C[d] = a, Q[a] = d) : U(a--)) : 8 > L[a].y ? (d = Q[a] + 300 * h, C[d] <=
    F ? (C[Q[a]] = D, L[a].y += 300, C[d] = a, Q[a] = d) : U(a--)) : 308 <= L[a].y && (d = Q[a] - 300 * h, C[d] <= F ? (C[Q[a]] = D, L[a].y -= 300, C[d] = a, Q[a] = d) : U(a--))
};
ba.fff = yd.prototype.C;
yd.prototype.C = function (a, d) {
    var b, c, e;
    c = (L[a].y >> 2) * G + (L[a].x >> 2);
    e = Q[a];
    t[a] != Xb && (C[e] = D);
    d.set(I[c]);
    if (t[a] == Ub) d.y += W(0.01, 0.1), d.add(E[a]), T(E[a], 0.7), ye(a, d); else if (t[a] == u) {
        E[a].x += 0.2 * I[c].x;
        E[a].y += 0.2 * I[c].y;
        C[e + h] != D && (C[e - 1] == D && (E[a].x -= W(0.1, 0.2)), C[e + 1] == D && (E[a].x += W(0.1, 0.2)));
        E[a].x += W(-0.01, 0.01);
        E[a].y += W(0.01, 0.05);
        T(E[a], 0.9);
        d.add(E[a]);
        e = ye(a, d);
        c = X(8);
        var f;
        f = 5 > c ? e - h : 6 > c ? e - 1 : 7 > c ? e + 1 : e + h;
        var g = C[f];
        if (0 <= g) if (7 > c && (1 == V[t[g]] && t[g] != dc || t[g] == gc || t[g] == kc || 37 == t[g])) 10 >
        S(100) && xe(a, g, e, f); else if (t[g] == Yb) 50 > S(100) && (t[a] = Yb); else if (t[g] == yc && 0 == Jd[g]) return M[g] = 4 | (5 > c ? 2 : 6 > c ? 1 : 7 > c ? 3 : 0), Jd[g] = u, U(a), 1
    } else if (t[a] == x) {
        2 == M[a] && (T(E[a], 0.8), d.add(E[a]));
        T(d, 0.2);
        if (0 == M[a] || 2 == M[a]) {
            var q = W(-0.01, -0.05);
            I[c].x += W(-0.02, 0.02);
            I[c].y += q;
            J[c] += -q;
            pd -= -q
        } else 1 == M[a] && (q = W(-0.01, -0.05), J[c] += -q, pd -= -q);
        e = ye(a, d);
        e += X(5) - 2;
        e += (X(5) - 2) * h;
        g = C[e - h];
        if (0 <= g) if (t[g] == Ub) t[g] = x; else {
            if (t[g] == u || 37 == t[g]) return U(a), 1;
            t[g] == Vb ? 50 > S(100) && (t[g] = x) : 11 == t[g] ? t[g] = u : t[g] == hc ? t[g] =
                x : t[g] == qc && (t[g] = x)
        }
        c = 5;
        1 == M[a] && (c = 20);
        if (S(100) < c) return U(a), 1
    } else if (t[a] == Vb) {
        0 == M[a] ? (d.y += W(0.01, 0.09), d.add(E[a]), T(E[a], 0.8)) : Kd(d, 0, 0);
        e = ye(a, d);
        if (0 == M[a] && (g = C[e + h], 0 > g || t[g] != Ub && 6 != t[g] && t[g] != qc || 1E3 > ia[ha] - s)) return 0;
        M[a] = 1;
        c = ~~L[a].x + X(3) - 1;
        q = ~~L[a].y - X(1.5);
        f = q * h + c;
        if (C[f] <= F && (C[f + h] <= F && (e = c, f = q, C[Q[a]] = D, Kd(L[a], e, f), Q[a] = ~~f * h + ~~e, C[Q[a]] = a, id(c, q + 1, 6)), 5 > S(100))) return U(a), 1
    } else if (6 == t[a]) if (d.set(E[a]), T(E[a], 0.3), e = ye(a, d), 0 == M[a]) {
        if (e += X(5) - 2, e += (X(7) - 3) * h, g = C[e],
        0 <= g) if (t[g] == x || t[g] == ec) 50 > S(100) && (M[a] = 1); else if (t[g] == u) {
            if (1E3 > ia[ha] - s) return 0;
            c = ~~L[a].x + X(3) - 1;
            q = ~~L[a].y + X(3) - 1;
            e = q * h + c;
            C[e] <= F && 10 > S(100) && id(c, q, Vb)
        }
    } else 1 == M[a] && (c = ~~L[a].x + X(3) - 1, q = ~~L[a].y + X(3) - 1, e = q * h + c, g = C[e], C[e] <= F ? 30 > S(100) && (e = id(c, q, x), 0 <= e && (M[e] = 1)) : 0 <= g && t[g] == u && (M[a] = 0, t[a] = Ub), 5 > S(1E3) && (t[a] = Ub)); else if (t[a] == Wb) {
        d.y += W(0.01, 0.2);
        d.add(E[a]);
        T(E[a], 0.8);
        e = ye(a, d);
        e += X(5) - 2;
        e += (X(5) - 2) * h;
        g = C[e];
        if (0 > g || 3 != V[t[g]]) return 0;
        b = 10;
        var n = L[a].x & 65524, r = L[a].y & 65524, w = ie(n -
            b, H);
        c = ie(r - b, H);
        for (var y = se(n + b, h - H - 1), z = se(r + b, (kd - 1) * H - 1), q = c; q <= z; q++) for (c = w; c <= y; c++) e = (c - n) * (c - n) + (q - r) * (q - r), e > b * b || (e = q * h + c, g = C[e], 0 <= g && t[g] != Wb && (E[g].x += 10 * (c - n), E[g].y += 10 * (q - r)), 0 == (q & 3) + (c & 3) && (e = (q >> 2) * G + (c >> 2), 0 >= K[e] && (1 <= ce(c - n) && (I[e].x += 10 / (c - n)), 1 <= ce(q - r) && (I[e].y += 10 / (q - r)))));
        t[a] = x
    } else if (t[a] == Xb) I[c].add(E[a]), C[e] == D && (C[e] = F); else if (t[a] == Yb) 1 < je(d) && 50 > S(100) && (t[a] = 11), Kd(d, 0, 0), e = ye(a, d), e += X(9) - 4, e += (X(9) - 4) * h, g = C[e], 0 <= g && 3 == V[t[g]] && (t[a] = u); else if (11 == t[a]) d.y +=
        W(0.01, 0.08), d.add(E[a]), T(E[a], 0.7), e = ye(a, d), e += X(3) - 1, e += (X(3) - 1) * h, g = C[e], 0 <= g && 6 != t[g] && 9 != t[g] && 11 != t[g] && t[g] != $b && t[g] != qc && t[g] != xc && (t[a] = t[g] == Yb ? Yb : u); else if (t[a] == zc) {
        if (d.add(E[a]), T(E[a], 0.7), ye(a, d), 10 > S(100)) return U(a), 1
    } else if (t[a] == Zb) T(d, 0.05), E[a].add(d), E[a].y += 0.01, T(E[a], 0.999), d.set(E[a]), T(d, 3.8 / (je(d) + 1)), f = ~~L[a].y * h + ~~(L[a].x + d.x), C[f] <= F ? L[a].x += d.x : -1 >= C[f] ? (E[a].x *= -0.9, E[a].y *= 0.9) : 0 <= C[f] && (2 == V[t[C[f]]] && t[C[f]] != uc ? (E[C[f]].x -= E[a].x, E[a].x *= 0.5, c = L[a].x, L[a].x =
        L[C[f]].x, L[C[f]].x = c, Q[C[f]] = e, C[e] = C[f]) : t[C[f]] == x ? (c = L[a].x, L[a].x = L[C[f]].x, L[C[f]].x = c, Q[C[f]] = e, C[e] = C[f]) : t[C[f]] == Zb ? (c = 0.9 * E[a].x, E[a].x = 0.9 * E[C[f]].x, E[C[f]].x = c) : (E[a].x *= -ze[t[C[f]]], E[a].y *= Ae[t[C[f]]])), e = ~~L[a].y * h + ~~L[a].x, C[e] = D, f = ~~(L[a].y + d.y) * h + ~~L[a].x, C[f] <= F ? L[a].y += d.y : -1 >= C[f] ? (E[a].y *= -0.9, E[a].x *= 0.9) : 0 <= C[f] && (2 == V[t[C[f]]] && t[C[f]] != uc ? (E[C[f]].y -= E[a].y, E[a].y *= 0.5, q = L[a].y, L[a].y = L[C[f]].y, L[C[f]].y = q, Q[C[f]] = e, C[e] = C[f]) : t[C[f]] == x ? (q = L[a].y, L[a].y = L[C[f]].y, L[C[f]].y =
        q, Q[C[f]] = e, C[e] = C[f]) : t[C[f]] == Zb ? 0 < E[a].y ? (c = 0.45 * E[a].y, E[a].y *= -0.45, E[a].y += E[C[f]].y, E[C[f]].y = c) : (c = 0.45 * E[C[f]].y, E[C[f]].y *= -0.45, E[C[f]].y += E[a].y, E[a].y = c) : (E[a].y *= -ze[t[C[f]]], E[a].x *= Ae[t[C[f]]])), Q[a] = ~~L[a].y * h + ~~L[a].x, C[Q[a]] = a; else if (t[a] == $b) if (Kd(d, 0, 0), e = ye(a, d), 0 == M[a]) e += X(5) - 1, e += (X(5) - 1) * h, g = C[e], 0 <= g && (M[a] = t[g] == $b ? M[g] : t[g]); else {
        if (1E3 > ia[ha] - s) return 0;
        c = ~~L[a].x + X(3) - 1;
        q = ~~L[a].y + X(3) - 1;
        e = q * h + c;
        C[e] <= F && 10 > S(100) && id(c, q, M[a])
    } else if (t[a] == ac) if (E[a].x += 0.1 * I[c].x,
        E[a].y += 0.1 * I[c].y, d.y += W(0.1, 0.2), T(E[a], 0.9), d.add(E[a]), e = ye(a, d), 0 == M[a]) M[a] = 0 != ud[da] ? ud[da] : 0 != ud[ea] ? ud[ea] : Ub; else if (100 > M[a]) e += X(3) - 1, e += (X(3) - 1) * h, 0 <= C[e] && 3 == V[t[C[e]]] && (E[a].y -= 0.1, fe(E[a]), T(E[a], 50), M[a] += 100); else {
        if (5E3 > M[a]) return M[a] += 100, 0;
        if (5 < S(100)) return 0;
        if (1E3 > ia[ha] - s) return U(a), 1;
        for (b = 0; 512 > b; b += 32) c = ~~(L[a].x + 2 * Ce[b][0]), q = ~~(L[a].y + 2 * Ce[b][1]), c = Lc(c, 8, 408), q = Lc(q, 8, 308), e = q * h + c, C[e] <= F && (e = id(c, q, M[a] % 100), 0 <= e && (E[e].x += 20 * Ce[b][0], E[e].y += 20 * Ce[b][1]));
        U(a);
        return 1
    } else if (t[a] == bc) {
        E[a].x += 0.2 * I[c].x;
        E[a].y += 0.2 * I[c].y;
        C[e + h] != D && (C[e - 1] == D && (E[a].x -= W(0.1, 0.2)), C[e + 1] == D && (E[a].x += W(0.1, 0.2)));
        E[a].x += W(-0.01, 0.01);
        E[a].y += W(0.01, 0.05);
        T(E[a], 0.9);
        d.add(E[a]);
        e = ye(a, d);
        c = X(8);
        f = 5 > c ? e - h : 6 > c ? e - 1 : 7 > c ? e + 1 : e + h;
        g = C[f];
        if (0 <= g) if (7 > c && (1 == V[t[g]] && t[g] != dc || t[g] == u || t[g] == gc || 37 == t[g])) 10 > S(100) && xe(a, g, e, f); else if (3 == V[t[g]]) M[a] = 1; else {
            if (t[g] == wc && 256 > M[g]) return M[g] = bc, U(a), 1;
            if (t[g] == yc && 0 == Jd[g]) return M[g] = 4 | (5 > c ? 2 : 6 > c ? 1 : 7 > c ? 3 : 0), Jd[g] = bc, U(a),
                1
        }
        if (1 == M[a] && (c = ~~L[a].x + X(3) - 1, q = ~~L[a].y + X(3) - 1, f = q * h + c, C[f] <= F && id(c, q, x), 10 > S(100))) return U(a), 1
    } else if (t[a] == cc) if (Kd(d, 0, 0), e = ye(a, d), 0 == M[a]) e += X(3) - 1, e += (X(3) - 1) * h, g = C[e], 0 <= g && 3 == V[t[g]] && (M[a] = 1); else {
        for (b = 0; 8 > b; b++) f = e + te[b], g = C[f], 0 <= g && t[g] == cc && (M[g] = 1);
        b = 10;
        n = L[a].x & 65524;
        r = L[a].y & 65524;
        w = ie(n - b, H);
        c = ie(r - b, H);
        y = se(n + b, h - H - 1);
        z = se(r + b, (kd - 1) * H - 1);
        for (q = c; q <= z; q++) for (c = w; c <= y; c++) e = (c - n) * (c - n) + (q - r) * (q - r), e > b * b || (f = q * h + c, g = C[f], 0 <= g && (E[g].x += 10 * (c - n), E[g].y += 10 * (q - r)), 0 == (q & 3) +
        (c & 3) && (f = (q >> 2) * G + (c >> 2), 0 >= K[f] && (1 <= ce(c - n) && (I[f].x += 1 / (c - n)), 1 <= ce(q - r) && (I[f].y += 1 / (q - r)))));
        U(a);
        return 1
    }
    return 0
};
ba.fff = yd.prototype.D;
yd.prototype.D = function (a, d) {
    var b, c, e, f;
    c = (L[a].y >> 2) * G + (L[a].x >> 2);
    e = Q[a];
    C[e] = D;
    d.set(I[c]);
    if (t[a] == dc) {
        E[a].x += 0.05 * I[c].x;
        E[a].y += 0.05 * I[c].y;
        E[a].y += W(0.01, 0.05);
        T(E[a], 0.95);
        d.set(E[a]);
        10 < je(d) && 50 > S(100) && (t[a] = Ub);
        T(d, 3.8 / (je(d) + 1));
        f = ~~L[a].y * h + ~~(L[a].x + d.x);
        if (C[f] <= F) L[a].x += d.x; else {
            if (0 <= C[f]) if (2 == V[t[C[f]]] && t[C[f]] != uc || t[C[f]] == ec) {
                E[C[f]].x -= E[a].x;
                var g = L[a].x;
                L[a].x = L[C[f]].x;
                L[C[f]].x = g;
                Q[C[f]] = e;
                C[e] = C[f]
            } else if (t[C[f]] == Ub || t[C[f]] == Vb || t[C[f]] == Wb || t[C[f]] == ac || t[C[f]] ==
                hc) E[C[f]].x += S(E[a].x);
            E[a].x *= 0.5
        }
        e = ~~L[a].y * h + ~~L[a].x;
        C[e] = D;
        f = ~~(L[a].y + d.y) * h + ~~L[a].x;
        if (C[f] <= F) L[a].y += d.y; else {
            if (0 <= C[f]) if (2 == V[t[C[f]]] && t[C[f]] != uc || t[C[f]] == ec) {
                E[C[f]].y -= E[a].y;
                var q = L[a].y;
                L[a].y = L[C[f]].y;
                L[C[f]].y = q;
                Q[C[f]] = e;
                C[e] = C[f]
            } else if (t[C[f]] == Ub || t[C[f]] == Vb || t[C[f]] == Wb || t[C[f]] == ac || t[C[f]] == hc) E[C[f]].y += S(E[a].y);
            E[a].y *= 0.5
        }
        Q[a] = ~~L[a].y * h + ~~L[a].x;
        C[Q[a]] = a
    } else if (t[a] == ec) {
        E[a].x += 0.1 * I[c].x;
        E[a].y += 0.1 * I[c].y;
        C[e + h] != D && (C[e - 1] == D && (E[a].x -= W(0, 0.1)), C[e + 1] ==
        D && (E[a].x += W(0, 0.1)));
        E[a].x += W(-0.01, 0.01);
        E[a].y += W(0.01, 0.1);
        T(E[a], 0.9);
        d.add(E[a]);
        e = ye(a, d);
        e += X(5) - 2;
        e += (X(5) - 2) * h;
        var n = C[e - h];
        if (0 <= n) if (t[n] == Ub) t[n] = x; else if (t[n] == u || t[n] == kc) {
            if (t[a] = dc, t[n] = zc, 50 > S(100)) return U(a), 1
        } else if (t[n] == Vb) t[n] = x; else if (t[n] == Zb) t[n] = x; else if (t[n] == dc) E[n].x += W(-0.1, 0.1), 5 > S(100) && (t[n] = ec); else if (t[n] == hc) t[n] = x; else if (t[n] == qc) t[n] = x; else if (37 == t[n]) {
            if (t[a] = dc, t[n] = rc, 50 > S(100)) return U(a), 1
        } else t[n] == sc ? 50 > S(100) && (t[n] = ec) : t[n] == uc && 1 > S(100) &&
            (t[n] = ec);
        g = X(4);
        f = 1 > g ? e - h : 2 > g ? e - 1 : 3 > g ? e + 1 : e + h;
        n = C[f];
        if (0 <= n && t[n] == yc && 0 == Jd[n]) return M[n] = 4 | (1 > g ? 2 : 2 > g ? 1 : 3 > g ? 3 : 0), Jd[n] = ec, U(a), 1
    } else if (t[a] == fc) d.y += W(0, 0.1), d.add(E[a]), T(E[a], 0.7), e = ye(a, d), 0 == M[a] ? (f = e + (X(3) - 1), f += (X(3) - 1) * h, 0 <= C[f] && t[C[f]] != fc && (M[a] = t[C[f]])) : 2048 >= M[a] ? (f = e + (X(3) - 1), f += (X(3) - 1) * h, e != f && 0 <= C[f] && (t[C[f]] != fc || 0 == M[C[f]]) && (t[C[f]] = fc, M[C[f]] = M[a] & 255, Jd[C[f]] = 0), M[a] += 256) : (M[a] += 256, 32768 <= M[a] && (t[a] = M[a] & 255, M[a] = 0, Kd(E[a], 0, 0))); else if (t[a] == gc) {
        E[a].x += 0.2 * I[c].x;
        E[a].y += 0.2 * I[c].y;
        C[e + h] != D && (C[e - 1] == D && (E[a].x -= W(0.1, 0.2)), C[e + 1] == D && (E[a].x += W(0.1, 0.2)));
        E[a].x += W(-0.01, 0.01);
        E[a].y += W(0.01, 0.05);
        T(E[a], 0.9);
        d.add(E[a]);
        e = ye(a, d);
        g = X(8);
        f = 5 > g ? e - h : 6 > g ? e - 1 : 7 > g ? e + 1 : e + h;
        n = C[f];
        if (0 <= n) if (7 > g && 1 == V[t[n]] && t[n] != dc) 10 > S(100) && xe(a, n, e, f); else {
            if (t[n] == wc && 256 > M[n]) return M[n] = gc, U(a), 1;
            if (t[n] == yc && 0 == Jd[n]) return M[n] = 4 | (5 > g ? 2 : 6 > g ? 1 : 7 > g ? 3 : 0), Jd[n] = gc, U(a), 1
        }
        if (10 > je(E[a]) && (f = e + (X(5) - 2), f += (X(5) - 2) * h, 0 > C[f] || 3 != V[t[C[f]]])) return 0;
        e = 10;
        b = L[a].x & 65532;
        for (var r =
            L[a].y & 65532, w = ie(b - e, H), n = ie(r - e, H), y = se(b + e, h - H - 1), z = se(r + e, (kd - 1) * H - 1), q = n; q <= z; q++) for (g = w; g <= y; g++) f = (g - b) * (g - b) + (q - r) * (q - r), f > e * e || (f = q * h + g, 0 <= C[f] && (E[C[f]].x += 10 * (g - L[a].x), E[C[f]].y += 10 * (q - L[a].y)), 0 == (q & 3) + (g & 3) && (f = (q >> 2) * G + (g >> 2), 0 >= K[f] && (1 <= ce(g - b) && (I[f].x += 10 / (g - b)), 1 <= ce(q - r) && (I[f].y += 10 / (q - r)))));
        t[a] = x
    } else if (t[a] == hc) {
        n = C[e + h];
        0 == M[a] && 0 <= n && (6 == t[n] || t[n] == Yb || t[n] == cc || t[n] == mc || t[n] == qc || t[n] == sc || t[n] == wc || t[n] == yc) && (M[a] = t[n] << 2);
        0 == M[a] ? (d.y += W(0.01, 0.2), n != D && (C[e - 1] ==
        D && (E[a].x -= W(0, 0.1)), C[e + 1] == D && (E[a].x += W(0, 0.1)))) : Kd(d, 0, 0);
        d.add(E[a]);
        T(E[a], 0.85);
        e = ye(a, d);
        if (0 == M[a] || 1E3 > ia[ha] - s) return 0;
        g = M[a] & 3;
        f = e + [1, h, -1, -h][g];
        n = C[f];
        if (n <= F) M[a] = M[a] & 16777212 | g + 1 & 3, f = id(f % h, ~~(f / h), hc), 0 < f && (M[f] = M[a]), t[a] = M[a] >> 2, M[a] = 0; else {
            if (0 <= n) return t[n] == M[a] >> 2 && (M[a] = M[a] & 16777212 | g - 1 & 3), t[n] = t[a], M[n] = M[a], Jd[n] = 0, U(a), 1;
            M[a] = M[a] & 16777212 | g + 1 & 3
        }
    } else if (t[a] == ic) {
        if (Kd(d, 0, 0), e = ye(a, d), e += X(5) - 2, e += (X(5) - 2) * h, n = C[e], 0 <= n) if (t[n] == Ub) t[n] = x; else {
            if (t[n] == u || t[n] ==
                kc || 37 == t[n]) return U(a), 1;
            t[n] == Vb ? t[n] = x : 6 == t[n] ? t[n] = ic : 11 == t[n] ? t[n] = u : t[n] == Zb ? t[n] = x : t[n] == hc ? t[n] = x : t[n] == qc && (t[n] = x)
        }
    } else if (t[a] == jc) {
        d.y += W(0, -0.02);
        d.add(E[a]);
        T(E[a], 0.9);
        e = ye(a, d);
        g = X(4);
        f = 1 > g ? e - h : 2 > g ? e - 1 : 3 > g ? e + 1 : e + h;
        n = C[f];
        if (0 <= n) if (3 > g && (1 == V[t[n]] || 2 == V[t[n]])) xe(a, n, e, f); else if (t[n] == jc) E[a].x += W(-0.2, 0.2), E[a].y += W(-0.2, 0.2); else if (t[n] == yc && 0 == Jd[n]) return M[n] = 4 | (1 > g ? 2 : 2 > g ? 1 : 3 > g ? 3 : 0), Jd[n] = jc, U(a), 1;
        if (0 == M[a]) {
            if (f = e + (X(5) - 2), f += (X(5) - 2) * h, 0 > C[f] || 3 != V[t[C[f]]]) return 0
        } else if (2 >
            M[a]) return M[a]++, 0;
        e = 10;
        b = ~~L[a].x;
        r = ~~L[a].y;
        w = ie(b - e, H);
        n = ie(r - e, H);
        y = se(b + e, h - H - 1);
        z = se(r + e, (kd - 1) * H - 1);
        for (q = n; q <= z; q++) for (g = w; g <= y; g++) f = (g - b) * (g - b) + (q - r) * (q - r), f > e * e || (f = q * h + g, n = C[f], 0 <= n && t[n] == jc && (M[n] = 1), n <= F && 1 > S(100) && id(g, q, x));
        J[c] += 2;
        pd -= 2;
        t[a] = x;
        M[a] = 0
    } else if (t[a] == kc) {
        if (1 == M[a]) return U(a), 1;
        E[a].x += 0.3 * I[c].x;
        E[a].y += 0.3 * I[c].y;
        C[e + h] != D && (C[e - 1] == D && (E[a].x -= W(0.1, 0.2)), C[e + 1] == D && (E[a].x += W(0.1, 0.2)));
        E[a].x += W(-0.01, 0.01);
        E[a].y += W(0.01, 0.05);
        T(E[a], 0.9);
        d.add(E[a]);
        e = ye(a,
            d);
        g = X(8);
        f = 5 > g ? e - h : 6 > g ? e - 1 : 7 > g ? e + 1 : e + h;
        n = C[f];
        if (0 <= n) if (7 > g && (1 == V[t[n]] && t[n] != dc || t[n] == gc || 37 == t[n])) 10 > S(100) && xe(a, n, e, f); else if (t[n] == Yb) 50 > S(100) && (t[a] = Yb); else if (t[n] == bc) t[n] = kc, M[n] = 1, M[a] = 1; else {
            if (t[n] == wc && 256 > M[n]) return M[n] = kc, U(a), 1;
            if (t[n] == yc && 0 == Jd[n]) return M[n] = 4 | (5 > g ? 2 : 6 > g ? 1 : 7 > g ? 3 : 0), Jd[n] = kc, U(a), 1
        }
        if (2 < je(E[a])) {
            f = 0;
            e = 4;
            b = ~~L[a].x;
            r = ~~L[a].y;
            w = ie(b - e, H);
            n = ie(r - e, H);
            y = se(b + e, h - H - 1);
            z = se(r + e, (kd - 1) * H - 1);
            for (q = n; q <= z; q++) for (g = w; g <= y; g++) e * e < (g - b) * (g - b) + (q - r) * (q - r) || (n =
                C[q * h + g], 0 <= n && t[n] == kc && 0 == M[n] && (M[n] = 1, f++));
            f = se(ie(5, f), Pd - Od);
            if (5 > f) return 0;
            g = (l(Lc(L[a].x, 8, 407)) >> 2 << 2) + 2;
            q = (l(Lc(L[a].y, 8, 307)) >> 2 << 2) + 2;
            Qd++;
            for (b = 0; b < f; b++) le(g + 1.9 * Ce[~~(512 * b / f)][0], q + 1.9 * Ce[~~(512 * b / f)][1]);
            Qd++;
            U(a);
            return 1
        }
    } else if (t[a] == lc) if (C[e] = a, Kd(E[a], 0, 0), 4096 > M[a]) if (0 == M[a] && (M[a] = c % 1E3), c = M[a] >> 10, n = M[a] & 1023, n = 73 * n % 955 + 44, 0 == c ? (f = n % 3, 0 == f ? (g = -1, q = 0, c = 1) : 1 == f ? (g = 1, q = 0, c = 3) : (g = 0, q = 1, c = 0)) : 1 == c ? 0 >= n % 2 ? (g = -1, q = 0, c = 1) : (g = 0, q = 1, c = 0) : 0 >= n % 2 ? (g = 1, q = 0, c = 3) : (g = 0, q = 1, c = 0), f = ~~(L[a].y +
        q) * h + ~~(L[a].x + g), b = c << 10 | n, n = C[f], n <= F) C[e] = D, L[a].x += g, L[a].y += q, C[f] = a, M[a] = b, Q[a] = f; else if (0 <= n) {
        if (t[n] != lc || M[n] != b) {
            if (t[n] == lc) return U(a), 1;
            if (t[n] == mc || t[n] == uc) return t[n] == mc ? M[n] = 6E3 + c : t[n] == uc && (M[n] = 6100 + c), t[n] = lc, U(a), 1;
            if (1 == V[t[n]] || 2 == V[t[n]] || t[n] == ec || 6 == t[n] || t[n] == Yb || t[n] == qc || t[n] == sc) M[a] = 5E3; else if (t[n] == xc) xe(a, n, e, f); else return U(a), 1
        }
    } else {
        if (F < n) return U(a), 1
    } else {
        if (5E3 == M[a]) {
            e = 6;
            b = ~~L[a].x;
            r = ~~L[a].y;
            w = ie(b - e, H);
            n = ie(r - e, H);
            y = se(b + e, h - H - 1);
            z = se(r + e, (kd - 1) * H - 1);
            for (q = n; q <= z; q++) for (g = w; g <= y; g++) f = (g - b) * (g - b) + (q - r) * (q - r), f > e * e || (f = q * h + g, n = C[f], 0 <= n && t[n] != lc && (t[n] == Yb ? t[n] = 11 : t[n] == ac && 0 < M[n] && 5E3 > M[n] && (M[n] += 100), E[n].x -= 3 * (g - L[a].x), E[n].y -= 3 * (q - L[a].y)));
            U(a);
            return 1
        }
        if (7E3 <= M[a]) {
            if (7E3 == M[a]) for (g = [h, -1, -h, 1], b = 0; 4 > b; b++) n = C[e + g[b]], 0 <= n && t[n] == sc && (t[n] = lc, M[n] = 7E3);
            M[a]++;
            7020 < M[a] && (t[a] = sc, M[a] = 0)
        } else if (6E3 <= M[a]) {
            c = M[a] & 3;
            r = 6E3 == (M[a] & 65532) ? mc : uc;
            g = [h, -1, -h, 1];
            for (b = 0; 4 > b; b++) if (2 != b && (f = e + g[c + b & 3], n = C[f], 0 <= n)) if (t[n] == mc || t[n] == uc) {
                xe(a,
                    n, e, f);
                t[n] == mc ? M[a] = 6E3 + (c + b & 3) : t[n] == uc && (M[a] = 6100 + (c + b & 3));
                t[n] = r;
                M[n] = 0;
                break
            } else if (t[n] == lc && 6E3 <= M[n] && 7E3 > M[n]) {
                t[a] = r;
                M[a] = 0;
                break
            } else t[n] == sc && (t[n] = lc, M[n] = 7E3);
            4 == b && (C[e + g[c]] <= F && (g = ~~L[a].x, q = ~~L[a].y, 0 == c ? id(g, q + 1, lc) : 1 == c ? id(g - 1, q, lc) : 2 == c ? id(g, q - 1, lc) : 3 == c && id(g + 1, q, lc)), t[a] = r, M[a] = 0)
        }
    } else t[a] == mc && (C[e] = a, Kd(E[a], 0, 0), e += X(5) - 2, e += (X(5) - 2) * h, n = C[e], 0 <= n && (t[n] == u ? 2 > S(100) && (t[a] = Ub) : t[n] == ec && 2 > S(100) && (t[a] = ec)));
    return 0
};
ba.fff = yd.prototype.F;
yd.prototype.F = function (a, d) {
    var b, c, e, f;
    c = (L[a].y >> 2) * G + (L[a].x >> 2);
    e = Q[a];
    C[e] = D;
    d.set(I[c]);
    if (t[a] == nc) {
        E[a].y += 0.03;
        T(E[a], 0.92);
        d.add(E[a]);
        e = ye(a, d);
        if (0 != M[a]) {
            if (M[a] == nc) return U(a), 1;
            if (5 < S(100)) return 0;
            if (M[a] == Yb) t[a] = 11, M[a] = 0; else if (6 == M[a] || M[a] == dc || M[a] == qc) t[a] = Ub, M[a] = 0; else if (M[a] == gc || M[a] == ic) t[a] = x, M[a] = 1; else if (M[a] == kc) t[a] = zc, M[a] = 0; else if (M[a] == mc) t[a] = mc, M[a] = 0; else if (M[a] == sc) t[a] = dc, M[a] = 0; else if (M[a] == yc) t[a] = vc, M[a] = 0; else return U(a), 1;
            return 0
        }
        f = e + (X(3) - 1);
        f += (X(3) - 1) * h;
        c = C[f];
        if (0 > c || t[c] == nc || t[c] == $b) return 0;
        e = 4;
        b = ~~L[a].x;
        var g = ~~L[a].y, q = ie(b - e, H), n = ie(g - e, H), r = se(b + e, h - H - 1), w = se(g + e, (kd - 1) * H - 1);
        Kd(d, 0, 0);
        for (var y = n; y <= w; y++) for (var z = q; z <= r; z++) {
            var v = (z - b) * (z - b) + (y - g) * (y - g);
            v > e * e || (f = y * h + z, c = C[f], 0 <= c && t[c] != nc && (d.x += L[a].x - z, d.y += L[a].y - y))
        }
        fe(d);
        for (y = n; y <= w; y++) for (z = q; z <= r; z++) if (v = (z - b) * (z - b) + (y - g) * (y - g), !(v > e * e) && (f = y * h + z, c = C[f], 0 <= c && t[c] != $b && (E[c].x += d.x + 1 * (L[a].x - z), E[c].y += d.y + 1 * (L[a].y - y), t[c] != nc || 0 == M[c]))) Jd[c] = 0, M[c] = t[c],
            t[c] = nc;
        U(a);
        return 1
    }
    if (t[a] == oc) {
        C[e] = a;
        Kd(E[a], 0, 0);
        v = M[a] & 15;
        y = M[a] >> 4 & 15;
        z = M[a] >> 8 & 255;
        y++;
        if (1 == y) return M[a] = z << 8 | y << 4 | v, 0;
        if (12 < y) return z == sc ? (t[a] = sc, M[a] = 0) : U(a), 1;
        if (8 < y) return M[a] = z << 8 | y << 4 | v, 0;
        if (0 == v) if (w = C[e + we[0]], 0 <= w && t[w] == oc && (w = -1), c = C[e + we[1]], 0 <= c && t[c] == oc && (c = -1), f = C[e + we[2]], 0 <= f && t[f] == oc && (f = -1), b = C[e + we[3]], 0 <= b && t[b] == oc && (b = -1), g = C[e + we[4]], 0 <= g && t[g] == oc && (g = -1), q = C[e + we[5]], 0 <= q && t[q] == oc && (q = -1), n = C[e + we[6]], 0 <= n && t[n] == oc && (n = -1), r = C[e + we[7]], 0 <= r && t[r] == oc && (r =
            -1), 0 <= b && 0 <= g && 0 <= q) v = 1; else if (0 <= q && 0 <= n && 0 <= r) v = 3; else if (0 <= r && 0 <= w && 0 <= c) v = 5; else if (0 <= c && 0 <= f && 0 <= b) v = 7; else if (0 <= q) v = 2; else if (0 <= r) v = 4; else if (0 <= c) v = 6; else if (0 <= b) v = 8; else return M[a] = 160 | v, 0;
        v -= 1;
        c = C[e + we[v]];
        if (0 <= c) if (t[c] == oc) for (b = 2; 4 >= b; b++) if (c = C[e + we[v] * b], 0 <= c) {
            if (t[c] != oc) break
        } else {
            if (c <= F) {
                if (1E3 > ia[ha] - s) break;
                f = id(~~L[a].x + ue[v] * b, ~~L[a].y + ve[v] * b, oc);
                0 < f && (M[f] = v + 1)
            }
            break
        } else if (t[c] == mc || t[c] == uc) {
            c = C[e + we[v + 1 & 7]];
            0 <= c && t[c] != mc && t[c] != uc && (c = -1);
            f = C[e + we[v + 2 & 7]];
            0 <=
            f && t[f] != mc && t[f] != uc && (f = -1);
            b = C[e + we[v + 3 & 7]];
            0 <= b && t[b] != mc && t[b] != uc && (b = -1);
            g = C[e + we[v + 4 & 7]];
            0 <= g && t[g] != mc && t[g] != uc && (g = -1);
            q = C[e + we[v + 5 & 7]];
            0 <= q && t[q] != mc && t[q] != uc && (q = -1);
            n = C[e + we[v + 6 & 7]];
            0 <= n && t[n] != mc && t[n] != uc && (n = -1);
            r = C[e + we[v + 7 & 7]];
            0 <= r && t[r] != mc && t[r] != uc && (r = -1);
            w = C[e + we[v] + we[v + 1 & 7]];
            0 <= w && t[w] != mc && t[w] != uc && (w = -1);
            var Y = C[e + we[v] + we[v + 2 & 7]];
            0 <= Y && t[Y] != mc && t[Y] != uc && (Y = -1);
            var Ka = C[e + we[v] + we[v + 3 & 7]];
            0 <= Ka && t[Ka] != mc && t[Ka] != uc && (Ka = -1);
            var ab = C[e + we[v] + we[v + 5 & 7]];
            0 <= ab && t[ab] !=
            mc && t[ab] != uc && (ab = -1);
            var La = C[e + we[v] + we[v + 6 & 7]];
            0 <= La && t[La] != mc && t[La] != uc && (La = -1);
            var Ta = C[e + we[v] + we[v + 7 & 7]];
            0 <= Ta && t[Ta] != mc && t[Ta] != uc && (Ta = -1);
            if (0 == (v & 1)) 0 <= q && 0 <= n && 0 > c && 0 > f ? v = v + 1 & 7 : 0 <= f && 0 <= b && 0 > r && 0 > n ? v = v - 1 & 7 : 0 <= c && 0 <= n && 0 > f && 0 > b && 0 > q ? v = v + 3 & 7 : 0 <= w && 0 <= La && 0 > Y && 0 > Ka && 0 > ab ? v = v + 3 & 7 : 0 <= f && 0 <= r && 0 > b && 0 > q && 0 > n ? v = v - 3 & 7 : 0 <= Y && 0 <= Ta && 0 > Ka && 0 > ab && 0 > La ? v = v - 3 & 7 : 0 <= n && 0 > c && 0 > f && 0 > q ? v = v + 2 & 7 : 0 <= f && 0 > b && 0 > q && 0 > n && (v = v - 2 & 7); else {
                var pa = C[e + we[v] + we[v + 2 & 7] + we[v + 3 & 7]];
                0 <= pa && t[pa] != mc && t[pa] != uc && (pa =
                    -1);
                e = C[e + we[v] + we[v + 6 & 7] + we[v + 5 & 7]];
                0 <= e && t[e] != mc && t[e] != uc && (e = -1);
                0 <= r && 0 <= q && 0 > c && 0 > g ? v = v + 1 & 7 : 0 <= c && 0 <= b && 0 > g && 0 > r ? v = v - 1 & 7 : 0 <= c && 0 <= n && 0 <= r && 0 > f && 0 > q ? v = v + 3 & 7 : 0 <= w && 0 <= La && 0 > Y && 0 > Ka && 0 > ab ? v = v + 3 & 7 : 0 <= Y && 0 <= ab && 0 > Ka && 0 > pa ? v = v + 3 & 7 : 0 <= c && 0 <= f && 0 <= r && 0 > b && 0 > n ? v = v - 3 & 7 : 0 <= Y && 0 <= Ta && 0 > Ka && 0 > ab && 0 > La ? v = v - 3 & 7 : 0 <= Ka && 0 <= La && 0 > ab && 0 > e ? v = v - 3 & 7 : 0 <= r && 0 > c ? v = v + 2 & 7 : 0 <= c && 0 > r && (v = v - 2 & 7)
            }
        } else t[c] == Ub || t[c] == Vb || 6 == t[c] || t[c] == Zb || t[c] == hc || t[c] == qc ? (t[c] = x, M[c] = 0) : t[c] == u || t[c] == bc || t[c] == kc || t[c] == pc || 37 == t[c] ||
        t[c] == xc ? (t[c] = oc, M[c] = v + 1) : t[c] == sc && (t[c] = oc, M[c] = sc << 8 | v + 1); else c <= F && 1E3 <= ia[ha] - s && (f = id(~~L[a].x + ue[v], ~~L[a].y + ve[v], oc), 0 < f && (M[f] = v + 1));
        M[a] = z << 8 | y << 4 | v + 1
    } else if (t[a] == pc) {
        if (100 <= M[a]) return U(a), 1;
        E[a].x += 0.2 * I[c].x;
        E[a].y += 0.2 * I[c].y;
        C[e + h] != D && (C[e - 1] == D && (E[a].x -= W(0, 0.1)), C[e + 1] == D && (E[a].x += W(0, 0.1)));
        E[a].x += W(-0.01, 0.01);
        E[a].y += W(0.02, 0.05);
        T(E[a], 0.9);
        d.add(E[a]);
        e = ye(a, d);
        v = X(8);
        f = 5 > v ? e - h : 6 > v ? e - 1 : 7 > v ? e + 1 : e + h;
        c = C[f];
        if (0 <= c) if (0 != Be[t[c]]) S(200) < 200 - M[a] && (M[a] = Lc(M[a] + Be[t[c]],
            0, 100), t[c] = pc, M[c] = 100); else if (t[c] == yc && 0 == Jd[c]) return M[c] = 4 | (5 > v ? 2 : 6 > v ? 1 : 7 > v ? 3 : 0), Jd[c] = pc, U(a), 1
    } else if (t[a] == qc) {
        d.set(E[a]);
        T(E[a], 0.3);
        e = ye(a, d);
        if (1E3 > ia[ha] - s) return 0;
        if (0 == M[a]) {
            z = ~~L[a].x + X(3) - 1;
            y = ~~L[a].y - X(2);
            f = y * h + z;
            c = C[f];
            if (c <= F) for (b = 0; 8 > b; b++) if (c = C[f + te[b]], 0 <= c && t[c] != qc && t[c] != hc) {
                50 > S(100) && id(z, y, qc);
                break
            }
            C[e + h] <= F && C[e + 2 * h] <= F && C[e + h - 1] <= F && C[e + h + 1] <= F && 8 > S(100) && (f = id(~~L[a].x, ~~L[a].y + 1, qc), 0 < f && (M[f] = 1))
        } else 1 == M[a] && (C[e + h] <= F && C[e + 2 * h] <= F && C[e + h - 1] <= F && C[e + h + 1] <=
        F && 20 > S(100) && (f = id(~~L[a].x, ~~L[a].y + 1, qc), 0 < f && (M[f] = 1)), 4 > S(100) && (M[a] = 2))
    } else if (t[a] == rc) {
        if (d.y += W(0.01, 0.1), d.add(E[a]), T(E[a], 0.75), e = ye(a, d), e += X(3) - 1, e += (X(3) - 1) * h, c = C[e], 0 <= c) {
            if (t[c] == u) return t[c] = 37, M[c] = 0, U(a), 1;
            if (t[c] == ec && 50 > S(100)) return U(a), 1
        }
    } else if (37 == t[a]) {
        if (E[a].x += 0.2 * I[c].x, E[a].y += 0.2 * I[c].y, C[e + h] != D && (C[e - 1] == D && (E[a].x -= W(0.1, 0.2)), C[e + 1] == D && (E[a].x += W(0.1, 0.2))), E[a].x += W(-0.01, 0.01), E[a].y += W(0.01, 0.05), T(E[a], 0.9), d.add(E[a]), e = ye(a, d), f = e + (X(5) - 2), f += (X(5) -
            2) * h, c = C[f], 0 <= c && (t[c] == Vb || 6 == t[c] || t[c] == mc) && (t[c] = Ub, M[c] = 0), v = X(8), f = 5 > v ? e - h : 6 > v ? e - 1 : 7 > v ? e + 1 : e + h, c = C[f], 0 <= c) if (7 > v && (1 == V[t[c]] && t[c] != dc || t[c] == gc)) 10 > S(100) && xe(a, c, e, f); else if (t[c] == qc) t[c] = Ub, M[c] = 0; else if (t[c] == yc && 0 == Jd[c]) return M[c] = 4 | (5 > v ? 2 : 6 > v ? 1 : 7 > v ? 3 : 0), Jd[c] = 37, U(a), 1
    } else if (t[a] == sc) {
        if (0 == M[a]) 1 < je(E[a]) ? M[a] = 1 : Kd(E[a], 0, 0); else if (1 == M[a]) {
            d.set(E[a]);
            v = 0.5 * fe(d);
            1 > v && (v = 1);
            for (b = 1; 6 > b; b++) if (f = ~~(L[a].y + 0.5 + d.y * b) * h + ~~(L[a].x + 0.5 + d.x * b), c = C[f], 0 <= c) if (t[c] == sc) M[c] = 1, E[c].x =
                0.98 * E[a].x, E[c].y = 0.98 * E[a].y; else break; else break;
            for (b = 0; 4 > b; b++) f = e + te[b], c = C[f], 0 <= c && t[c] == sc && 0 == M[c] && (M[c] = 1, y = X(512), E[c].x = Ce[y][0] * v, E[c].y = Ce[y][1] * v);
            t[a] = dc;
            M[a] = 0
        }
        C[e] = a
    } else if (t[a] == tc) {
        if (0 == M[a]) M[a] = 1, E[a].x = W(-1, 1), E[a].y = W(-1, 1); else if (2 == M[a]) if (2 > S(100)) M[a] = 1, T(E[a], -1); else return C[e] = a, 0;
        d.x += 0.5 * E[a].x;
        d.y += 0.5 * E[a].y;
        f = ye(a, d);
        e == f && (50 > S(100) ? Kd(E[a], E[a].y, -E[a].x) : Kd(E[a], -E[a].y, E[a].x));
        e = f;
        f += X(5) - 2;
        v = X(5);
        f += (v - 2) * h;
        c = C[f];
        if (0 <= c) if (3 > v && 2 == V[t[c]]) xe(a, c,
            e, f); else {
            if (t[c] == Vb || t[c] == hc) return t[c] = tc, E[c].set(E[a]), M[c] = 1, U(a), 1;
            6 == t[c] ? M[a] = 2 : 3 == V[t[c]] && (t[a] = x)
        }
        e = 9;
        b = ~~(L[a].x + 4 * E[a].x);
        g = ~~(L[a].y + 4 * E[a].y);
        q = ie(b - e, H);
        n = ie(g - e, H);
        r = se(b + e, h - H - 1);
        w = se(g + e, (kd - 1) * H - 1);
        Kd(d, 0, 0);
        La = ab = Ka = Y = 0;
        for (y = n; y <= w; y++) for (f = y * h, z = q; z <= r; z++) v = (z - b) * (z - b) + (y - g) * (y - g), v > e * e || (c = C[f + z], 0 <= c ? t[c] == tc ? (d.x += E[c].x, d.y += E[c].y, Y++) : t[c] != Vb && t[c] != hc && 6 != t[c] && (Ka += z, ab += y, La++) : F < c && (Ka += z, ab += y, La++));
        0 < Y && T(d, 1 / Y);
        fe(E[a]);
        E[a].x = 0.5 * E[a].x + 0.5 * d.x;
        E[a].y = 0.5 *
            E[a].y + 0.5 * d.y;
        E[a].x += W(-0.1, 0.1);
        E[a].y += W(-0.1, 0.1);
        0 < La && (Ka = ~~(Ka / La) - L[a].x, ab = ~~(ab / La) - L[a].y, 0 > E[a].y * Ka - E[a].x * ab ? Kd(d, E[a].y, -E[a].x) : Kd(d, -E[a].y, E[a].x), E[a].x = 0.9 * E[a].x + 0.1 * d.x, E[a].y = 0.9 * E[a].y + 0.1 * d.y)
    } else if (t[a] == uc && (E[a].x += 0.2 * I[c].x, E[a].y += 0.2 * I[c].y, C[e + h] != D && (C[e - 1] == D && (E[a].x -= W(0.1, 0.2)), C[e + 1] == D && (E[a].x += W(0.1, 0.2))), E[a].x += W(-0.01, 0.01), E[a].y += W(0.01, 0.05), T(E[a], 0.9), d.add(E[a]), e = ye(a, d), v = X(8), f = 1 > v ? e - h : 2 > v ? e - 1 : 3 > v ? e + 1 : e + h, c = C[f], 0 <= c)) if (0 < v && (1 == V[t[c]] ||
        2 == V[t[c]] && t[c] != uc)) xe(a, c, e, f); else if (t[c] == yc && 0 == Jd[c]) return M[c] = 4 | (1 > v ? 2 : 2 > v ? 1 : 3 > v ? 3 : 0), Jd[c] = uc, U(a), 1;
    return 0
};
ba.fff = yd.prototype.G;
yd.prototype.G = function (a, d) {
    var b, c, e;
    c = (L[a].y >> 2) * G + (L[a].x >> 2);
    e = Q[a];
    C[e] = D;
    d.set(I[c]);
    if (t[a] == vc) {
        T(d, 0.05);
        E[a].add(d);
        E[a].y += 0.01;
        -3 <= C[e + 1] && (E[a].x -= S(0.5));
        -3 <= C[e - 1] && (E[a].x += S(0.5));
        -3 <= C[e + h] && (E[a].y -= S(0.5));
        -3 <= C[e + 2 * h] && (E[a].y -= S(0.5));
        -3 <= C[e - h] && (E[a].y += S(0.5));
        T(E[a], 0.98);
        d.set(E[a]);
        e = ye(a, d);
        e += X(5) - 2;
        e += (X(5) - 2) * h;
        var f = C[e - h];
        if (0 <= f) if (t[f] == Ub) t[f] = x; else {
            if (t[f] == u || 37 == t[f] || t[f] == kc) return U(a), 1;
            11 == t[f] ? t[f] = u : t[f] == hc && (t[f] = x)
        }
        if (15 > S(100)) return U(a), 1
    } else if (t[a] ==
        wc) if (Kd(d, 0, 0), e = ye(a, d), 256 > M[a]) e += X(3) - 1, e += (X(3) - 1) * h, f = C[e], 0 <= f && (3 == V[t[f]] && t[f] != vc ? M[a] += 256 : t[f] == u ? t[a] = Wb : 37 == t[f] && (t[a] = Wb)); else {
        if (M[a] += 256, 768 <= M[a]) {
            c = M[a] & 255;
            var g = vc;
            c == bc ? g = x : c == gc ? g = gc : c == kc && (g = zc);
            0 <= C[e + 1] && (C[e - 1] <= F && id(~~L[a].x - 1, ~~L[a].y, g), C[e - 1 - h] <= F && id(~~L[a].x - 1, ~~L[a].y - 1, g), C[e - 1 + h] <= F && id(~~L[a].x - 1, ~~L[a].y + 1, g));
            0 <= C[e - 1] && (C[e + 1] <= F && id(~~L[a].x + 1, ~~L[a].y, g), C[e + 1 - h] <= F && id(~~L[a].x + 1, ~~L[a].y - 1, g), C[e + 1 + h] <= F && id(~~L[a].x + 1, ~~L[a].y + 1, g));
            0 <= C[e + h] && (C[e -
            h] <= F && id(~~L[a].x, ~~L[a].y - 1, g), C[e - 1 - h] <= F && id(~~L[a].x - 1, ~~L[a].y - 1, g), C[e + 1 - h] <= F && id(~~L[a].x + 1, ~~L[a].y - 1, g));
            0 <= C[e - h] && (C[e + h] <= F && id(~~L[a].x, ~~L[a].y + 1, g), C[e - 1 + h] <= F && id(~~L[a].x - 1, ~~L[a].y + 1, g), C[e + 1 + h] <= F && id(~~L[a].x + 1, ~~L[a].y + 1, g));
            for (b = 0; 8 > b; b++) c = e + te[b], f = C[c], 0 <= f && (t[f] == wc && 256 > M[f] ? M[f] += 256 : t[f] == ac ? (E[f].y -= 50, M[f] += 100) : t[f] == bc ? M[f] = 1 : t[f] == cc ? M[f] = 1 : t[f] == gc ? E[f].y -= 20 : t[f] == jc && (M[f] = 1));
            t[a] = g;
            M[a] = 0
        }
    } else if (t[a] == xc) if (d.y += W(-0.01, -0.02), d.add(E[a]), T(E[a], 0.9), e =
        ye(a, d), g = X(4), c = 1 > g ? e - h : 2 > g ? e - 1 : 3 > g ? e + 1 : e + h, f = C[c], 0 <= f) if (3 > g && (1 == V[t[f]] || 2 == V[t[f]])) xe(a, f, e, c); else if (t[f] == xc) E[a].x += W(-0.1, 0.1), E[a].y += W(-0.1, 0.1); else if (6 == t[f]) t[a] = u; else if (t[f] == Yb) t[a] = 11; else if (t[f] == cc) t[a] = u; else if (t[f] == ic) t[a] = u; else if (t[f] == mc) t[a] = lc; else if (t[f] == qc) t[a] = u; else if (t[f] == wc) t[a] = u; else {
        if (t[f] == yc && 0 == Jd[f]) return M[f] = 4 | (1 > g ? 2 : 2 > g ? 1 : 3 > g ? 3 : 0), Jd[f] = u, U(a), 1
    } else -1 == f && (t[a] = u); else if (t[a] == yc) {
        Kd(d, 0, 0);
        e = ye(a, d);
        if (0 == Jd[a]) return 0;
        var g = M[a] & 3, q = M[a] >>
            2, n = [h, -1, -h, 1], r;
        De += Ee;
        De &= 1023;
        r = 0.5 > Fe[De] ? 1 : -1;
        for (b = 0; 4 > b; b++) if (2 != b && (c = e + n[g + b * r & 3], f = C[c], 0 <= f && t[f] == yc)) {
            0 == Jd[f] ? (xe(a, f, e, c), M[a] = q << 2 | g + b * r & 3) : Jd[a] == Jd[f] ? (g = M[f] & 3, q += M[f] >> 2, M[f] = q << 2 | g, M[a] = 0, Jd[a] = 0) : M[a] = q << 2 | g + 2 & 3;
            break
        }
        4 == b && (C[e + 2 * n[g]] <= F && 1E3 <= ia[ha] - s && (e = L[a].x + 0.5, c = L[a].y + 0.5, 0 == g ? id(e, c + 2, Jd[a]) : 1 == g ? id(e - 2, c, Jd[a]) : 2 == g ? id(e, c - 2, Jd[a]) : 3 == g && id(e + 2, c, Jd[a])), 1 >= q ? (M[a] = 0, Jd[a] = 0) : M[a] = q - 1 << 2 | g)
    }
    return 0
};
ba.fff = yd.prototype.A;
yd.prototype.A = function () {
    var a;
    if (6 == ka) for (a = 0; a < s; a++) {
        var d = ((Ib[t[a]][Jd[a]] & 16711680) >> 18) + (p[Q[a]] >> 16 & 255);
        255 < d && (d = 255);
        var b = ((Ib[t[a]][Jd[a]] & 65280) >> 10) + (p[Q[a]] >> 8 & 255);
        255 < b && (b = 255);
        var c = ((Ib[t[a]][Jd[a]] & 255) >> 2) + (p[Q[a]] & 255);
        255 < c && (c = 255);
        p[Q[a]] = d << 16 | b << 8 | c
    } else if (7 != ka) if (9 == ka) for (a = 0; a < s; a++) p[Q[a]] = Jb[t[a]]; else if (13 == ka) for (a = 0; a < s; a++) d = (p[Q[a]] >> 16 & 255) - (255 - (Ib[t[a]][Jd[a]] >> 16 & 255) + 10), 0 > d && (d = 0), b = (p[Q[a]] >> 8 & 255) - (255 - (Ib[t[a]][Jd[a]] >> 8 & 255) + 10), 0 > b && (b = 0), c = (p[Q[a]] &
        255) - (255 - (Ib[t[a]][Jd[a]] & 255) + 10), 0 > c && (c = 0), p[Q[a]] = d << 16 | b << 8 | c; else for (a = 0; a < s; a++) p[Q[a]] = Ib[t[a]][Jd[a]]
};
var zb = new Ha, Ac = 0, Nd = 100, Cd = Array(Nd), Bd = Array(Nd), me = Array(Nd), ne = Array(Nd), Ge = Array(1024),
    He = Array(1024), Ie = Array(1024), Je = 0;

function Fd(a, d) {
    Ac != Nd && (Cd[Ac] = a, Bd[Ac] = d, me[Ac] = 0.5, ne[Ac] = 0, Ac++)
}

ba.fff = yd.prototype.I;
yd.prototype.I = function () {
    var a, d, b, c, e, f, g,
        q = [0, 0, 1, 4, -3, 1, 0, 2, 0, 0, 4, 1, 1, 8, 3, 8, 3, 4, 0, 9, 9, 1, 0, 5, 1, 0, -1, 4, 100, 9, 0, 10, 0, 0, 6, 1, 1, 5, 8, 0, 0, 20, 1, 4, -2, 9];
    if (42 == da && ae || 42 == ea && be) for (d = new od, a = 0; a < Ac; a++) d.x = Oc - Cd[a], d.y = Pc - Bd[a], 16 > je(d) && (ne[a] -= d.x * (Pc - td) - d.y * (Oc - sd));
    for (a = 0; a < Ac; a++) {
        d = (Bd[a] - 16) * h + (Cd[a] - 16);
        b = 32 * l(me[a]) * zb.c;
        for (e = 0; 32 > e; e++, d += h - 32) for (c = 0; 32 > c; c++, d++, b++) 0 == zb.b[b] && (f = (Bd[a] + e - 16 >> 2) * G + (Cd[a] + c - 16 >> 2), g = I[f].x * (e - 15.5) - I[f].y * (c - 15.5), ne[a] += 1E-4 * g), f = C[d], 0 > f || 8421504 != zb.b[b] ||
        0 != zb.b[b + zb.c] || 31 == e || (g = 0 * (e - 15.5) - 1 * (c - 15.5), ne[a] += g * q[t[f]] * 1E-4);
        ne[a] *= 0.99;
        ne[a] = Lc(ne[a], -2, 2);
        g = l(me[a] + 16);
        me[a] += ne[a];
        g = l(me[a] + 16) - g;
        0 > me[a] && (me[a] += 16);
        16 <= me[a] && (me[a] -= 16);
        if (0 != g) {
            Je = 0;
            d = (Bd[a] - 16) * h + (Cd[a] - 16);
            b = 32 * l(me[a]) * zb.c;
            for (e = 0; 32 > e; e++, d += h - 32) for (c = 0; 32 > c; c++, d++, b++) 8421504 == zb.b[b] && (f = C[d], 0 > f || (Ge[Je] = f, He[Je] = (e - 15.5) * g * 0.1, Ie[Je] = -(c - 15.5) * g * 0.1, Je++));
            for (d = 0; d < Je; d++) C[Q[Ge[d]]] = D, f = l(L[Ge[d]].y) * h + l(L[Ge[d]].x + He[d]), -1 > C[f] && (L[Ge[d]].x += He[d]), f = l(L[Ge[d]].y +
                Ie[d]) * h + l(L[Ge[d]].x), -1 > C[f] && (L[Ge[d]].y += Ie[d]), Q[Ge[d]] = l(L[Ge[d]].y) * h + l(L[Ge[d]].x), C[Q[Ge[d]]] = Ge[d], 6 == t[Ge[d]] ? 20 > S(100) && (t[Ge[d]] = Ub) : t[Ge[d]] == Yb ? t[Ge[d]] = 11 : t[Ge[d]] == wc ? t[Ge[d]] = Wb : t[Ge[d]] == yc && 10 > S(100) && (t[Ge[d]] = vc, Jd[Ge[d]] = 0)
        }
    }
};
ba.fff = yd.prototype.H;
yd.prototype.H = function () {
    var a, d, b, c, e, f = 11575440;
    13 == ka && (f = 0);
    for (a = 0; a < Ac; a++) for (d = (Bd[a] - 16) * h + (Cd[a] - 16), b = 32 * l(me[a]) * zb.c, e = 0; 32 > e; e++, d += h - 32) for (c = 0; 32 > c; c++, d++, b++) 0 == zb.b[b] && (p[d] = f)
};
var Od = 0, Pd = 2E3, Ke = Array(Pd), Le = Array(Pd), ke = Array(Pd), Qd, Rd, Sd, Me = Array(Pd);

function le(a, d) {
    Od != Pd && (Ke[Od] = a, Le[Od] = d, ke[Od] = Qd, Me[Od] = 0, Od++)
}

function Ne(a, d) {
    var b = Rd, c = new od;
    c.x = Ke[d] - Ke[a];
    c.y = Le[d] - Le[a];
    var e = fe(c);
    0 != e && (e = b - e, Ke[a] -= c.x * e * 0.5, Le[a] -= c.y * e * 0.5, Ke[d] += c.x * e * 0.5, Le[d] += c.y * e * 0.5)
}

ba.fff = yd.prototype.r;
yd.prototype.r = function () {
    var a, d, b = new od, c;
    for (a = 0; a < Od; a++) d = (l(Le[a]) >> 2) * G + (l(Ke[a]) >> 2), b.set(I[d]), T(b, 3.8 / (je(b) + 1)), Ke[a] += b.x, Le[a] += b.y;
    for (a = 0; a < Od; a++) if (0 == Me[a]) {
        if (42 == da && Tb || 42 == ea && Mc) b.x = Oc - Ke[a], b.y = Pc - Le[a], 10 > je(b) && (Me[a] = 1)
    } else 42 == da && ae || 42 == ea && be ? (Ke[a] += 0.9 * (Oc - Ke[a]), Le[a] += 0.9 * (Pc - Le[a])) : Me[a] = 0;
    for (a = 0; a < Od - 1;) {
        c = ke[a];
        var e = 0;
        for (d = a; d < Od && c == ke[d]; d++, e++) ;
        Kd(b, 0, 0);
        for (d = a; d < a + e; d++) b.x += Ke[d], b.y += Le[d];
        d = b;
        c = e;
        d.x /= c;
        d.y /= c;
        for (d = a; d < a + e; d++) {
            var f = new od;
            f.x =
                b.x - Ke[d];
            f.y = b.y - Le[d];
            c = fe(f);
            0 != c && (c = e * Sd - c, Ke[d] -= f.x * c * 0.1, Le[d] -= f.y * c * 0.1)
        }
        for (d = a; d < a + e - 1; d++) Ne(d, d + 1);
        Ne(d, a);
        a += e
    }
    for (a = 0; a < Od; a++) {
        d = 0;
        if (0 <= Ke[a] && Ke[a] < h && 0 <= Le[a] && 316 > Le[a]) {
            d = l(Le[a]) * h + l(Ke[a]);
            if (C[d] <= F) continue;
            if (0 <= C[d] && t[C[d]] == kc) continue
        }
        c = ke[a];
        for (b = a; 0 < b && c == ke[b - 1]; b--) ;
        for (e = b + 1; e < Od && c == ke[e]; e++) ;
        a = C[d];
        a = 0 <= a ? t[a] : zc;
        for (d = b; d < e - 1; d++) Oe(Ke[d], Le[d], Ke[d + 1], Le[d + 1], a);
        Oe(Ke[d], Le[d], Ke[b], Le[b], a);
        for (a = b - 1; e < Od; b++, e++) Ke[b] = Ke[e], Le[b] = Le[e], ke[b] = ke[e], Me[b] =
            Me[e];
        Od -= e - b
    }
};

function Oe(a, d, b, c, e) {
    b -= a;
    c -= d;
    var f;
    ce(b) >= ce(c) ? (f = l(ce(b)), 0 != b && (c /= ce(b)), b = 0 <= b ? 1 : -1) : (f = l(ce(c)), 0 != c && (b /= ce(c)), c = 0 <= c ? 1 : -1);
    a += 0.5;
    d += 0.5;
    for (var g = 0; g <= f; g++, a += b, d += c) 8 > a || 408 <= a || 8 > d || 308 <= d || C[l(d) * h + l(a)] <= F && id(l(a), l(d), e)
}

ba.fff = yd.prototype.q;
yd.prototype.q = function () {
    var a, d = [16769248, 16773344, 16777184, 14745568, 14745599, 14741759, 14737663, 16769279];
    13 == ka && (d = [0, 0, 0, 0, 0, 0, 0, 0]);
    var b = 0;
    for (a = 0; a < Od - 1; a++) {
        for (var c = a, e = ke[a]; a < Od - 1 && e == ke[a + 1]; a++) B(Ke[a], Le[a], Ke[a + 1], Le[a + 1], d[b]), b++, b &= 7;
        B(Ke[a], Le[a], Ke[c], Le[c], d[b]);
        b++;
        b &= 7
    }
};
for (var Bc = 0, Td = 50, Dd = 28, N = Array(Td * Dd), Z = Array(Td * Dd), Ud = Array(Td * Dd), Pe = Array(Td), A = Array(Td), Vd = Array(Td), Wd = Array(Td), Ed = Array(Td), Xd = Array(Td), Bc = 0; Bc < Td * Dd; Bc++) N[Bc] = new od;
for (Bc = 0; Bc < Td * Dd; Bc++) Z[Bc] = new od;
for (Bc = 0; Bc < Td; Bc++) Pe[Bc] = new od;

function Gd(a, d, b, c) {
    if (Bc != Td) {
        var e, f, g = 0, q = 0, n = 0;
        if (30 == b || 32 == b) {
            for (e = 0; e < Bc; e++) A[e] == Dc && (g++, q = 1 - Xd[e], n = e);
            if (2 <= g || 0 != c && 0 == Qe[c]) return
        }
        f = Bc * Dd;
        for (e = 0; 20 > e; e++) Kd(N[f + e], a + S(4), d + S(4)), Z[f + e].set(N[f + e]);
        for (e = 0; e < Dd; e++) Ud[f + e] = 0;
        Kd(Pe[Bc], 0, 0);
        A[Bc] = Fc;
        Vd[Bc] = 0;
        Wd[Bc] = 0;
        Ed[Bc] = c;
        Xd[Bc] = 0;
        22 == b ? 10 == c ? (A[Bc] = Cc, Ed[Bc] = 0, Kd(N[f + 0], a, d), Z[f + 0].set(N[f + 0])) : A[Bc] = Ec : 30 == b ? (A[Bc] = Dc, Xd[Bc] = q) : 32 == b && (A[Bc] = Dc, 0 == g ? Xd[Bc] = 0 : (b = l(N[n * Dd].x) >> 2 << 2, c = l(N[n * Dd].y) >> 2 << 2, a < b ? (Xd[Bc] = 1, Xd[n] = 0) :
            a > b ? (Xd[Bc] = 0, Xd[n] = 1) : d < c ? (Xd[Bc] = 1, Xd[n] = 0) : (Xd[Bc] = 0, Xd[n] = 1)));
        Bc++
    }
}

function oe(a) {
    if (0 != Bc) {
        var d, b, c;
        b = a * Dd;
        c = (Bc - 1) * Dd;
        for (d = 0; d < Dd; d++, b++, c++) N[b].set(N[c]), Z[b].set(Z[c]), Ud[b] = Ud[c];
        Pe[a].set(Pe[Bc - 1]);
        A[a] = A[Bc - 1];
        Vd[a] = Vd[Bc - 1];
        Wd[a] = Wd[Bc - 1];
        Ed[a] = Ed[Bc - 1];
        Xd[a] = Xd[Bc - 1];
        Bc--
    }
}

function Re(a, d, b) {
    var c = new od;
    de(c, N[a], Z[a]);
    Z[a].set(N[a]);
    c.y += d;
    T(c, b);
    N[a].add(c)
}

function Se(a, d, b, c, e) {
    var f = new od;
    de(f, N[d], N[a]);
    var g = fe(f);
    0 != g && (b -= g, g = new od, he(g, f, b * c), N[a].sub(g), he(g, f, b * e), N[d].add(g))
}

var Te = [0, 0.5, 0.5, 0.8, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 0.5, 1, 0.5, 0.5, 0.5, 0.8, 0.5, 0, 0.5, 0.5, 0.5, 0, 0.8, 0.5, 0, 1, 1, 0, 0.5, 0, 0.5, 0, 0, 0.8, 0.5, 0.5, 0.8, 0.9, 0.1, 0, 1, 0.5, 0.5, 1, 0.5],
    Qe = [0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0];

function Ue(a, d, b, c) {
    var e = new od;
    de(e, N[a], Z[a]);
    N[a].set(Z[a]);
    if (0 != d) {
        var f = (l(N[a].y) >> 2) * G + (l(N[a].x) >> 2);
        e.x += I[f].x * d;
        e.y += I[f].y * d
    }
    0 == c ? (f = je(e) + 1, 8 <= f ? (T(e, 3.8 / f), d = 2) : 4 <= f ? (T(e, 0.5), d = 2) : d = 1) : (d = l(je(e) / 3) + 1, T(e, 1 / d));
    Ud[a] = 0;
    if (1 == b) T(e, d), N[a].add(e), N[a].x = Lc(N[a].x, 4, h - 5), N[a].y = Lc(N[a].y, 4, 311); else for (c = 0; c < d; c++) {
        b = N[a].y + e.y;
        if (4 > b || 312 <= b) {
            Ud[a] = -5;
            break
        }
        f = l(b) * h + l(N[a].x);
        C[f] <= F ? N[a].y = b : -1 >= C[f] ? (e.x *= 0.5, e.y = -e.y, Ud[a] = C[f]) : (e.x *= Te[t[C[f]]], Ud[a] = t[C[f]], 0 > e.y ? N[a].y = b :
            2 == V[t[C[f]]] && t[C[f]] != uc ? N[a].y = b : e.y = -e.y);
        b = N[a].x + e.x;
        if (4 > b || h - 4 <= b) {
            Ud[a] = -5;
            break
        }
        f = l(N[a].y) * h + l(b);
        if (C[f] <= F) N[a].x = b; else if (-1 >= C[f]) e.y *= 0.5, e.x = -e.x, Ud[a] = C[f]; else if (e.y *= Te[t[C[f]]], e.x = -e.x, Ud[a] = t[C[f]], 2 == V[t[C[f]]] || 6 == t[C[f]]) N[a].x = b
    }
}

function Ve(a, d) {
    for (var b = 0, c = a; c < d; c++) {
        if (-5 == Ud[c]) return -5;
        if (0 > Ud[c]) b = 1; else {
            if (3 == V[Ud[c]]) return 3;
            if (Ud[c] == pc) return -5;
            0 != Ud[c] && (b = 1)
        }
    }
    return b
}

function We(a, d, b) {
    var c, e = new od, f, g;
    if (0 == Wd[a]) {
        if (42 == da && Tb || 42 == ea && Mc) for (f = 20, c = d; c < b; c++) e.x = Oc - Z[c].x, e.y = Pc - Z[c].y, g = je(e), 20 > g && g < f && (f = g, Wd[a] = c - d + 1)
    } else 42 == da && ae || 42 == ea && be ? (N[d + Wd[a] - 1].x += 0.2 * (Oc - N[d + Wd[a] - 1].x), N[d + Wd[a] - 1].y += 0.2 * (Pc - N[d + Wd[a] - 1].y)) : Wd[a] = 0
}

var Fc = 10, Ec = 20, Dc = 30, Cc = 40, Xe = [0, 0], Ye = [0, 0], Ze = [0, 0];
ba.fff = yd.prototype.w;
yd.prototype.w = function () {
    for (var a = 0; a < Bc; a++) {
        var d = a, b = void 0, c = void 0, e = new od, c = d * Dd;
        if (A[d] == Dc) {
            var f = 0 == Xd[d] ? fd[37] : fd[65] | fd[97], g = 0 == Xd[d] ? fd[39] : fd[68] | fd[100],
                q = 0 == Xd[d] ? fd[38] : fd[87] | fd[119], n = 0 == Xd[d] ? fd[40] : fd[83] | fd[115],
                r = 0 == Xd[d] ? 0 : 1;
            Vd[d]++;
            var w = C[(l(Z[c + 4].y) + 1) * h + l(Z[c + 4].x)] > F ? 1 : 0,
                y = C[(l(Z[c + 5].y) + 1) * h + l(Z[c + 5].x)] > F ? 1 : 0;
            0 == w && (w = C[l(Z[c + 4].y) * h + l(Z[c + 4].x)] > F ? 1 : 0);
            0 == y && (y = C[l(Z[c + 5].y) * h + l(Z[c + 5].x)] > F ? 1 : 0);
            if (n && Ed[d] == tc) for (b = 0; 6 > b; b++) Re(c + b, 0.01, 0.997); else Re(c + 0, -0.2,
                0.995), Re(c + 1, -0.1, 0.995), Re(c + 2, 0, 0.995), Re(c + 3, 0, 0.995), Re(c + 4, 0.3, 0.995), Re(c + 5, 0.3, 0.995);
            N[c].add(Pe[d]);
            T(Pe[d], 0.5);
            0 != Pe[d].x && (A[d] = Dc + 2);
            0 < Xe[r] && Xe[r]--;
            0 != Xe[r] || 1 != w && 1 != y ? g ? (0 > N[c + 1].x - Z[c + 1].x && (N[c + 1].x += 0.1), Ze[r] = 1) : f && (0 < N[c + 1].x - Z[c + 1].x && (N[c + 1].x -= 0.1), Ze[r] = 0) : (b = 0.8, g ? (Xe[r] = 15, N[c + 4].x < N[c + 5].x ? (N[c + 2].x += 4 * b, N[c + 2].y -= 3 * b) : (N[c + 3].x += 4 * b, N[c + 3].y -= 3 * b), Ze[r] = 1) : f && (Xe[r] = 15, N[c + 4].x > N[c + 5].x ? (N[c + 2].x -= 4 * b, N[c + 2].y -= 3 * b) : (N[c + 3].x -= 4 * b, N[c + 3].y -= 3 * b), Ze[r] = 0));
            1 < Ye[r] && Ye[r]--;
            0 < Ye[r] && (1 == w || 1 == y) && Ye[r]--;
            0 == Ye[r] && q && (Ye[r] = 50, N[c + 4].y -= 6, N[c + 5].y -= 6);
            b = 0.5;
            Se(c + 0, c + 1, 4, b, b);
            Se(c + 1, c + 2, 4, b, b);
            Se(c + 1, c + 3, 4, b, b);
            Se(c + 2, c + 4, 5, b, b);
            Se(c + 3, c + 5, 5, b, b);
            Se(c + 2, c + 3, 5, 0.1, 0.1);
            w = 0.1;
            for (b = 0; 4 > b; b++) Ue(c + b, w, 1, 0 < Wd[d] ? 1 : 0);
            for (b = 4; 6 > b; b++) Ue(c + b, w, 0, 0 < Wd[d] ? 1 : 0);
            for (b = 0; 3 > b; b++) for (w = -1; 2 > w; w++) y = C[(l(Z[c + 0].y) + b) * h + (l(Z[c + 0].x) + w)], y == F ? Ed[d] = Xb : 0 <= y && 1 == Qe[t[y]] && (Ed[d] = t[y]);
            q && (f || g) || !n || 0 == Ed[d] || (w = l(N[c + 0].x), b = l(N[c + 0].y) + 1, Ed[d] == gc && (w += 0 == Ze[r] ? 8 : -8, b += 12), w = Lc(w, 8,
                407), b = Lc(b, 8, 307), Ed[d] == Xb ? (f = (b >> 2) * G + (w >> 2), 0 == K[f] && (I[f].x += 0 == Ze[r] ? -1 : 1)) : Ed[d] != tc && C[b * h + w] == D && (f = id(w, b, Ed[d]), 0 <= f && (0 == Ze[r] ? (E[f].x -= 20, E[f].y += S(3) - 1) : 1 == Ze[r] && (E[f].x += 20, E[f].y += S(3) - 1), Ed[d] == x ? (E[f].x *= 3, E[f].y += 18, M[f] = 2) : Ed[d] == Zb ? E[f].y = 20 : Ed[d] == dc ? (E[f].x *= 0.1, E[f].y *= 0.1) : Ed[d] == oc && (M[f] = 0 == Ze[r] ? 5 : 1))));
            if (3 == Ve(c, c + 6) || -5 == Ve(c, c + 6)) A[d] = Dc + 2;
            if (1 == Aa) for (r = 4; 5 >= r; r++) if (w = b = 0, 8 > N[c + r].x ? (w = 406, b = l(Z[c + r].y)) : h - 8 <= N[c + r].x && (w = 10, b = l(Z[c + r].y)), 0 != w + b) {
                A[d] = Dc;
                f = b * h +
                    w;
                if (!(C[f] <= F)) if (-1 >= C[f]) {
                    N[c + r].set(Z[c + r]);
                    continue
                } else if (2 != V[t[C[f]]]) {
                    N[c + r].set(Z[c + r]);
                    continue
                }
                de(e, N[c + r], Z[c + r]);
                fe(e);
                for (d = 0; 10 >= d; d++) N[c + d].x = w + e.x + W(-0.1, 0.1), N[c + d].y = b + e.y + W(-0.1, 0.1), Kd(Z[c + d], w, b);
                break
            }
        } else if (A[d] == Dc + 2) N[c + 10].set(N[c + 5]), Z[c + 10].set(Z[c + 5]), N[c + 9].set(N[c + 4]), Z[c + 9].set(Z[c + 4]), N[c + 8].set(N[c + 3]), Z[c + 8].set(Z[c + 3]), N[c + 7].set(N[c + 3]), Z[c + 7].set(Z[c + 3]), N[c + 6].set(N[c + 2]), Z[c + 6].set(Z[c + 2]), N[c + 5].set(N[c + 2]), Z[c + 5].set(Z[c + 2]), N[c + 4].set(N[c + 1]), Z[c + 4].set(Z[c +
        1]), N[c + 3].set(N[c + 1]), Z[c + 3].set(Z[c + 1]), N[c + 2].set(N[c + 1]), Z[c + 2].set(Z[c + 1]), N[c + 1].set(N[c + 0]), Z[c + 1].set(Z[c + 0]), N[c + 0].set(N[c + 0]), Z[c + 0].set(Z[c + 0]), Pe[d].y -= 1, Vd[d] = 0, A[d] = Dc + 3; else if (A[d] == Dc + 3) {
            Vd[d]++;
            for (b = 0; 11 > b; b++) Re(c + b, 0.1, 0.999), N[c + b].add(Pe[d]);
            T(Pe[d], 0.5);
            b = 0.5;
            e = (150 - Vd[d]) / 150;
            Se(c + 1, c + 2, 4 * e, b, b);
            Se(c + 3, c + 5, 4 * e, b, b);
            Se(c + 4, c + 7, 4 * e, b, b);
            Se(c + 6, c + 9, 5 * e, b, b);
            Se(c + 8, c + 10, 5 * e, b, b);
            w = 0.1;
            for (b = 0; 11 > b; b++) Ue(c + b, w, 0, 0);
            150 < Vd[d] && oe(d--)
        } else if (A[d] == Fc || A[d] == Fc + 1) {
            Vd[d]++;
            A[d] ==
            Fc ? (Re(c + 0, -0.2, 0.995), Re(c + 1, -0.1, 0.995), Re(c + 2, 0, 0.995), Re(c + 3, 0, 0.995), Re(c + 4, 0.3, 0.995), Re(c + 5, 0.3, 0.995)) : (Re(c + 0, 0.1, 0.995), Re(c + 1, 0.1, 0.995), Re(c + 2, 0.1, 0.995), Re(c + 3, 0.1, 0.995), Re(c + 4, 0.1, 0.995), Re(c + 5, 0.1, 0.995));
            We(d, c, c + 6);
            N[c].add(Pe[d]);
            T(Pe[d], 0.5);
            if (A[d] == Fc) for (0 != Ud[c + 4] && 0 != Ud[c + 5] ? (r = l(S(100)), 5 > r ? N[c + 4].x < N[c + 5].x ? (N[c + 4].x += 4, N[c + 4].y -= 4) : (N[c + 5].x += 4, N[c + 5].y -= 4) : 10 > r && (N[c + 4].x > N[c + 5].x ? (N[c + 4].x -= 4, N[c + 4].y -= 4) : (N[c + 5].x -= 4, N[c + 5].y -= 4))) : 0 != Ud[c + 4] ? 2 > S(100) && (N[c + 4].x += W(-4,
                4), N[c + 4].y -= 4) : 0 != Ud[c + 5] && 2 > S(100) && (N[c + 5].x += W(-4, 4), N[c + 5].y -= 4), r = void 0, r = 0; r < Bc; r++) d == r || A[r] != Fc && A[r] != Fc + 1 && A[r] != Dc || (f = r * Dd, g = ce(N[c + 4].x - N[f].x), q = N[c + 4].y - N[f].y, 2 >= g && 0 <= q && 6 >= q && (Pe[r].x += 1 * (N[c + 4].x - Z[c + 4].x), Pe[r].y += 2 * (N[c + 4].y - Z[c + 4].y), A[r] == Fc && (A[r] = Fc + 1), Vd[r] = 0), g = ce(N[c + 5].x - N[f].x), q = N[c + 5].y - N[f].y, 2 >= g && 0 <= q && 6 >= q && (Pe[r].x += 1 * (N[c + 5].x - Z[c + 5].x), Pe[r].y += 2 * (N[c + 5].y - Z[c + 5].y), A[r] == Fc && (A[r] = Fc + 1), Vd[r] = 0)); else 10 < Vd[d] && (0 != Ud[c + 4] || 0 != Ud[c + 5]) && 10 > S(100) && (A[d] =
                Fc, Vd[d] = 0);
            b = 0.5;
            Se(c + 0, c + 1, 4, b, b);
            Se(c + 1, c + 2, 4, b, b);
            Se(c + 1, c + 3, 4, b, b);
            Se(c + 2, c + 4, 5, b, b);
            Se(c + 3, c + 5, 5, b, b);
            Se(c + 2, c + 3, 5, 0.1, 0.1);
            w = 0.1;
            for (b = 0; 4 > b; b++) Ue(c + b, w, 1, 0 < Wd[d] ? 1 : 0);
            for (b = 4; 6 > b; b++) Ue(c + b, w, 0, 0 < Wd[d] ? 1 : 0);
            if (3 == Ve(c, c + 6) || -5 == Ve(c, c + 6)) A[d] = Fc + 2;
            A[d] == Fc && (0 != Ve(c, c + 6) ? Vd[d] = 0 : 50 < Vd[d] && (A[d] = Fc + 1));
            if (1 == Aa) for (r = 4; 5 >= r; r++) if (w = b = 0, 8 > N[c + r].x ? (w = 406, b = l(Z[c + r].y)) : h - 8 <= N[c + r].x && (w = 10, b = l(Z[c + r].y)), 0 != w + b) {
                A[d] = Fc;
                Vd[d] = 0;
                f = b * h + w;
                if (!(C[f] <= F)) if (-1 >= C[f]) {
                    N[c + r].set(Z[c + r]);
                    continue
                } else if (2 !=
                    V[t[C[f]]]) {
                    N[c + r].set(Z[c + r]);
                    continue
                }
                de(e, N[c + r], Z[c + r]);
                fe(e);
                for (d = 0; 10 >= d; d++) N[c + d].x = w + e.x + W(-0.1, 0.1), N[c + d].y = b + e.y + W(-0.1, 0.1), Kd(Z[c + d], w, b);
                break
            }
        } else if (A[d] == Fc + 2) N[c + 10].set(N[c + 5]), Z[c + 10].set(Z[c + 5]), N[c + 9].set(N[c + 4]), Z[c + 9].set(Z[c + 4]), N[c + 8].set(N[c + 3]), Z[c + 8].set(Z[c + 3]), N[c + 7].set(N[c + 3]), Z[c + 7].set(Z[c + 3]), N[c + 6].set(N[c + 2]), Z[c + 6].set(Z[c + 2]), N[c + 5].set(N[c + 2]), Z[c + 5].set(Z[c + 2]), N[c + 4].set(N[c + 1]), Z[c + 4].set(Z[c + 1]), N[c + 3].set(N[c + 1]), Z[c + 3].set(Z[c + 1]), N[c + 2].set(N[c + 1]),
            Z[c + 2].set(Z[c + 1]), N[c + 1].set(N[c + 0]), Z[c + 1].set(Z[c + 0]), N[c + 0].set(N[c + 0]), Z[c + 0].set(Z[c + 0]), Pe[d].y -= 1, Vd[d] = 0, A[d] = Fc + 3; else if (A[d] == Fc + 3) {
            Vd[d]++;
            for (b = 0; 11 > b; b++) Re(c + b, 0.1, 0.999), N[c + b].add(Pe[d]);
            T(Pe[d], 0.5);
            b = 0.5;
            e = (150 - Vd[d]) / 150;
            Se(c + 1, c + 2, 4 * e, b, b);
            Se(c + 3, c + 5, 4 * e, b, b);
            Se(c + 4, c + 7, 4 * e, b, b);
            Se(c + 6, c + 9, 5 * e, b, b);
            Se(c + 8, c + 10, 5 * e, b, b);
            w = 0.1;
            for (b = 0; 11 > b; b++) Ue(c + b, w, 0, 0);
            150 < Vd[d] && oe(d--)
        } else if (A[d] == Ec) {
            Vd[d]++;
            for (b = 0; 4 > b; b++) Re(c + b, 0.1, 1);
            We(d, c, c + 4);
            for (b = 0; 4 > b; b++) for (r = 0; r < Bc; r++) if (A[r] ==
                Fc || A[r] == Fc + 1 || A[r] == Dc) f = r * Dd, g = ce(N[f + 4].x - N[c + b].x), q = ce(N[f + 4].y - N[c + b].y), 3 >= g && 3 >= q && (N[c + b].x += 1 * (N[f + 4].x - Z[f + 4].x), N[c + b].y += 2 * (N[f + 4].y - Z[f + 4].y)), g = ce(N[f + 5].x - N[c + b].x), q = ce(N[f + 5].y - N[c + b].y), 3 >= g && 3 >= q && (N[c + b].x += 1 * (N[f + 5].x - Z[f + 5].x), N[c + b].y += 2 * (N[f + 5].y - Z[f + 5].y));
            b = 0.5;
            r = 4 * (Ed[d] + 1);
            Se(c + 0, c + 1, r, b, b);
            Se(c + 1, c + 2, r, b, b);
            Se(c + 2, c + 3, r, b, b);
            Se(c + 3, c + 0, r, b, b);
            Se(c + 0, c + 2, 1.4142135 * r, b, b);
            Se(c + 1, c + 3, 1.4142135 * r, b, b);
            w = 0.5;
            for (b = 0; 4 > b; b++) Ue(c + b, w, 0, 1);
            if (3 == Ve(c, c + 6) || -5 == Ve(c, c + 6)) A[d] =
                Ec + 1
        } else if (A[d] == Ec + 1) N[c + 7].set(N[c + 0]), Z[c + 7].set(Z[c + 0]), N[c + 6].set(N[c + 3]), Z[c + 6].set(Z[c + 3]), N[c + 5].set(N[c + 3]), Z[c + 5].set(Z[c + 3]), N[c + 4].set(N[c + 2]), Z[c + 4].set(Z[c + 2]), N[c + 3].set(N[c + 2]), Z[c + 3].set(Z[c + 2]), N[c + 2].set(N[c + 1]), Z[c + 2].set(Z[c + 1]), N[c + 1].set(N[c + 1]), Z[c + 1].set(Z[c + 1]), N[c + 0].set(N[c + 0]), Z[c + 0].set(Z[c + 0]), Wd[d] = 0, Vd[d] = 0, A[d] = -5 == Ve(c, c + 4) ? Ec + 3 : Ec + 2; else if (A[d] == Ec + 2 || A[d] == Ec + 3) {
            Vd[d]++;
            We(d, c, c + 8);
            for (b = 0; 8 > b; b++) Re(c + b, 0.1, 0.999);
            b = 0.5;
            r = (150 - Vd[d]) / 150 * (Ed[d] + 1) * 4;
            Se(c + 0,
                c + 1, r, b, b);
            Se(c + 2, c + 3, r, b, b);
            Se(c + 4, c + 5, r, b, b);
            Se(c + 6, c + 7, r, b, b);
            if (A[d] == Ec + 2 && 1E3 <= ia[ha] - s) for (b = 0; 8 > b; b += 2) de(e, Z[c + b + 1], Z[c + b]), T(e, S(1)), e.add(Z[c + b]), f = l(e.y) * h + l(e.x), C[f] <= F && id(l(e.x), l(e.y), x);
            w = 0.1;
            for (b = 0; 8 > b; b++) Ue(c + b, w, 0, 0);
            150 < Vd[d] && oe(d--)
        } else if (A[d] == Cc) if (0 == Ud[c]) {
            for (r = 0; r < Bc; r++) if (!(N[c].x + 8 < N[r * Dd].x || N[r * Dd].x < N[c].x - 4 || N[c].y + 8 < N[r * Dd].y || N[r * Dd].y < N[c].y - 4)) if (A[r] == Fc || A[r] == Ec) Ud[c] = A[r], Ed[d] = Ed[r]; else if (A[r] == Dc) {
                for (e = 0; e < Bc; e++) A[e] == Cc && Ud[e * Dd] == Dc && (Ud[e *
                Dd] = 0);
                Ud[c] = A[r];
                Ed[d] = Ed[r]
            }
            for (r = 0; r < Gc; r++) 0 == Hc[r] || N[c].x + 8 < O[r].x || O[r].x < N[c].x - 4 || N[c].y + 8 < O[r].y || O[r].y < N[c].y - 4 || (Ud[c] = -2, Ed[d] = P[r])
        } else w = l(N[c + 0].x), b = l(N[c + 0].y), Ud[c] == Dc ? 10 > S(100) && Gd(w, b, 30, Ed[d]) : 1 > S(100) && (Ud[c] == Fc ? Gd(w, b, 0, 0) : Ud[c] == Ec ? Gd(w, b, 22, Ed[d]) : -2 == Ud[c] && Hd(w + 2, b + 2, Ed[d]))
    }
};
ba.fff = yd.prototype.v;
yd.prototype.v = function () {
    var a, d, b, c = 16769198, e = 16777215;
    13 == ka && (e = c = 0);
    for (a = 0; a < Bc; a++) {
        b = a * Dd;
        switch (A[a]) {
            case Fc:
            case Fc + 1:
            case Fc + 2:
                B(N[b + 0].x, N[b + 0].y, N[b + 1].x, N[b + 1].y, c);
                B(N[b + 1].x, N[b + 1].y, N[b + 2].x, N[b + 2].y, e);
                B(N[b + 1].x, N[b + 1].y, N[b + 3].x, N[b + 3].y, e);
                B(N[b + 2].x, N[b + 2].y, N[b + 4].x, N[b + 4].y, e);
                B(N[b + 3].x, N[b + 3].y, N[b + 5].x, N[b + 5].y, e);
                Kb(l(N[b + 0].x) - 1, l(N[b + 0].y) - 1, 3, 3, c);
                break;
            case Fc + 3:
                B(N[b + 1].x, N[b + 1].y, N[b + 2].x, N[b + 2].y, e);
                if (145 < Vd[a]) break;
                B(N[b + 3].x, N[b + 3].y, N[b + 5].x, N[b + 5].y, e);
                if (140 <
                    Vd[a]) break;
                B(N[b + 4].x, N[b + 4].y, N[b + 7].x, N[b + 7].y, e);
                if (135 < Vd[a]) break;
                B(N[b + 6].x, N[b + 6].y, N[b + 9].x, N[b + 9].y, e);
                if (130 < Vd[a]) break;
                B(N[b + 8].x, N[b + 8].y, N[b + 10].x, N[b + 10].y, e);
                if (125 < Vd[a]) break;
                Kb(l(N[b + 0].x) - 1, l(N[b + 0].y) - 1, 2, 2, c);
                break;
            case Ec:
            case Ec + 1:
                B(N[b + 0].x, N[b + 0].y, N[b + 1].x, N[b + 1].y, c);
                B(N[b + 1].x, N[b + 1].y, N[b + 2].x, N[b + 2].y, c);
                B(N[b + 2].x, N[b + 2].y, N[b + 3].x, N[b + 3].y, c);
                B(N[b + 3].x, N[b + 3].y, N[b + 0].x, N[b + 0].y, c);
                break;
            case Ec + 2:
            case Ec + 3:
                B(N[b + 0].x, N[b + 0].y, N[b + 1].x, N[b + 1].y, c);
                if (145 < Vd[a]) break;
                B(N[b + 2].x, N[b + 2].y, N[b + 3].x, N[b + 3].y, c);
                if (140 < Vd[a]) break;
                B(N[b + 4].x, N[b + 4].y, N[b + 5].x, N[b + 5].y, c);
                if (135 < Vd[a]) break;
                B(N[b + 6].x, N[b + 6].y, N[b + 7].x, N[b + 7].y, c);
                if (130 < Vd[a]) break;
                break;
            case Dc:
            case Dc + 2:
            case Dc + 3:
                var f, g, q, n;
                if (A[a] != Dc + 3) B(N[b + 1].x, N[b + 1].y, N[b + 2].x, N[b + 2].y, e), B(N[b + 1].x, N[b + 1].y, N[b + 3].x, N[b + 3].y, e), B(N[b + 2].x, N[b + 2].y, N[b + 4].x, N[b + 4].y, e), B(N[b + 3].x, N[b + 3].y, N[b + 5].x, N[b + 5].y, e), f = -2, g = 2, q = -1, n = 3; else {
                    B(N[b + 3].x, N[b + 3].y, N[b + 5].x, N[b + 5].y, e);
                    if (140 < Vd[a]) break;
                    B(N[b + 4].x, N[b +
                    4].y, N[b + 7].x, N[b + 7].y, e);
                    if (135 < Vd[a]) break;
                    B(N[b + 6].x, N[b + 6].y, N[b + 9].x, N[b + 9].y, e);
                    if (130 < Vd[a]) break;
                    B(N[b + 8].x, N[b + 8].y, N[b + 10].x, N[b + 10].y, e);
                    if (125 < Vd[a]) break;
                    f = -1;
                    g = 1;
                    q = -1;
                    n = 1
                }
                d = 0 == Ib[Ed[a]][0] ? c : Ib[Ed[a]][0];
                13 == ka && (d = 0);
                for (var r = q; r <= n; r++) for (var w = f; w <= g; w++) if (!(f + 1 <= w && w <= g - 1 && q + 1 <= r && r <= n - 1)) {
                    var y = l(N[b].x) + w, z = l(N[b].y) + r;
                    8 > y || 408 <= y || 8 > z || 308 <= z || 1 == Xd[a] && w == f && r == q || 1 == Xd[a] && w == g && r == q || 1 == Xd[a] && w == f && r == n || 1 == Xd[a] && w == g && r == n || (y = z * h + y, p[y] = p[y] == d ? 0 : d)
                }
                if (11 == ka) for (f =
                                       l(Lc(N[b + 0].x, 8, 407)), q = l(Lc(N[b + 0].y, 8, 304)), r = q - 4; r <= q + 4; r += 4) for (w = f - 4; w <= f + 4; w += 4) Ua[r * h + w] = 536870911;
                break;
            case Cc:
                d = 9465872, 13 == ka && (d = 0), Ud[b] == Fc ? (B(N[b].x, N[b].y, N[b].x, N[b].y + 3, d), B(N[b].x, N[b].y, N[b].x + 3, N[b].y, d), B(N[b].x, N[b].y + 2, N[b].x + 2, N[b].y + 2, d)) : Ud[b] == Ec ? Yc(l(N[b].x), l(N[b].y), 3, 3, d) : Ud[b] == Dc ? (B(N[b].x, N[b].y, N[b].x, N[b].y + 3, d), B(N[b].x, N[b].y, N[b].x + 2, N[b].y, d), B(N[b].x, N[b].y + 2, N[b].x + 2, N[b].y + 2, d), B(N[b].x + 3, N[b].y, N[b].x + 3, N[b].y + 2, d)) : -2 == Ud[b] ? (B(N[b].x + 1, N[b].y, N[b].x +
                    2, N[b].y, d), B(N[b].x, N[b].y + 1, N[b].x, N[b].y + 2, d), B(N[b].x + 3, N[b].y + 1, N[b].x + 3, N[b].y + 2, d), B(N[b].x + 1, N[b].y + 3, N[b].x + 2, N[b].y + 3, d)) : Kb(l(N[b].x), l(N[b].y), 4, 4, d)
        }
        switch (A[a]) {
            case Fc:
            case Fc + 1:
            case Fc + 2:
            case Fc + 3:
            case Dc:
            case Dc + 2:
            case Dc + 3:
                if (12 == ka) for (d = 0; 6 > d; d++) f = l(Lc(N[b + d].x, 8, 407)), q = l(Lc(N[b + d].y, 8, 304)), Ua[q * h + f] = 3E3
        }
    }
};
var Gc = 50, O = Array(Gc), $ = Array(Gc), Hc = Array(Gc), R = Array(Gc), Yd = Array(Gc), P = Array(Gc), $e;
for ($e = 0; $e < Gc; $e++) O[$e] = new od;
for ($e = 0; $e < Gc; $e++) $[$e] = new od;

function Hd(a, d, b) {
    var c;
    for (c = 0; c < Gc; c++) if (0 == Hc[c]) {
        Kd(O[c], a + 0.5, d + 0.5);
        Kd($[c], 0, 0);
        Hc[c] = 1;
        R[c] = 0;
        Yd[c] = 0;
        P[c] = b;
        break
    }
}

var pe = [-h - 1, -h, -h + 1, -1, 0, 1, h - 1, h, h + 1, 2 * -h - 1, 2 * -h, 2 * -h + 1, 2 * h - 1, 2 * h, 2 * h + 1, -2 - h, -2, -2 + h, 2 - h, 2, 2 + h, 3 * -h - 1, 3 * -h, 3 * -h + 1, 3 * h - 1, 3 * h, 3 * h + 1, -3 - h, -3, -3 + h, 3 - h, 3, 3 + h, -2 - 2 * h, 2 - 2 * h, -2 + 2 * h, 2 + 2 * h],
    af = [-0.7, 0, 0.7, -1, 0, 1, -0.7, 0, 0.7, -0.44, 0, 0.44, -0.44, 0, 0.44, -0.89, -1, -0.89, 0.89, 1, 0.89, -0.31, 0, 0.31, -0.31, 0, 0.31, -0.94, -1, -0.94, 0.94, 1, 0.94, -0.7, 0.7, -0.7, 0.7],
    bf = [-0.7, -1, -0.7, 0, 0, 0, 0.7, 1, 0.7, -0.89, -1, -0.89, 0.89, 1, 0.89, -0.44, 0, 0.44, -0.44, 0, 0.44, -0.94, -1, -0.94, 0.94, 1, 0.94, -0.31, 0, 0.31, -0.31, 0, 0.31, -0.7, -0.7, 0.7, 0.7],
    cf = [-1,
        0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1, -2, -2, -2, 2, 2, 2, -1, 0, 1, -1, 0, 1, -3, -3, -3, 3, 3, 3, -2, 2, -2, 2],
    df = [-1, -1, -1, 0, 0, 0, 1, 1, 1, -2, -2, -2, 2, 2, 2, -1, 0, 1, -1, 0, 1, -3, -3, -3, 3, 3, 3, -1, 0, 1, -1, 0, 1, -2, -2, 2, 2],
    ef = [0, 0, 0.1, 0.1, -0.03, 0.1, 0.1, 0.1, 0.1, 0, 0.1, 0.02, 0.05, 0.1, 0.1, 0.1, 0.1, 0.1, 0, 0.1, 0.1, 0.1, 0, 0.1, 0.1, 0.1, -0.01, 0.1, 0.1, 0.2, 0, 0.1, 0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.05, 0, 0.2, 0.1, 0.1, -0.02, 0.1],
    ff = [0, 0, 0.5, 0.4, 0.5, 0.5, 0.4, 0.4, 0.9, 0, 0.3, 0.5, 0.5, 0.3, 0.3, 0.3, 0, 0.2, 0, 0.1, 0, 0.5, 0, 0.3, 0.5, 0.3, 0.5, 0.4, 0, 0, 0, 0.1, 0, 0, 0.4, 0.4, 0.5, 0.4, 0.2, 0.5,
        0, 0, 0.5, 0.2, 0.5, 0],
    gf = [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1];
ba.fff = yd.prototype.t;
yd.prototype.t = function () {
    var a, d, b, c = new od;
    for (a = 0; a < Gc; a++) if (0 != Hc[a]) if (0 == gf[P[a]]) Hc[a] = 0; else {
        b = l(O[a].y) * h + l(O[a].x);
        for (d = 0; 21 > d; d++) -2 == C[b + pe[d]] && (C[b + pe[d]] = D);
        var e = ef[P[a]];
        $[a].y += e;
        d = ff[P[a]];
        0 != d && (b = (l(O[a].y) >> 2) * G + (l(O[a].x) >> 2), $[a].x += I[b].x * d, $[a].y += I[b].y * d, 0.3 < je(I[b]) && T($[a], 0.9 + (1 - d) / 10));
        b = a;
        d = new od;
        if (0 == Yd[b]) {
            if (42 == da && Tb || 42 == ea && Mc) d.x = Oc - O[b].x, d.y = Pc - O[b].y, 20 > je(d) && (Yd[b] = 1)
        } else 42 == da && ae || 42 == ea && be ? ($[b].x += 0.05 * (Oc - O[b].x), $[b].y += 0.05 * (Pc - O[b].y), T($[b],
            0.9)) : (T($[b], 0.3), Yd[b] = 0);
        for (d = 0; d < Bc; d++) if (A[d] == Fc || A[d] == Fc + 1 || A[d] == Dc) {
            b = d * Dd;
            for (var f = 4; 5 >= f; f++) {
                var g = ce(N[b + f].y - O[a].y);
                9 >= ce(N[b + f].x - O[a].x) && 9 >= g && ($[a].x += 0.1 * (N[b + f].x - Z[b + f].x), $[a].y += 0.2 * (N[b + f].y - Z[b + f].y))
            }
        }
        f = new od;
        f.set($[a]);
        $e = 0;
        for (var q = l(hf($[a]) / 2) + 1, n = 1 / q, r, w, y = 0, z = new od, v = g = 0; v < q; v++) {
            r = O[a].x + $[a].x * n;
            w = O[a].y + $[a].y * n;
            if (4 > r || h - 4 <= r || 4 > w || 312 <= w) {
                Hc[a] = 0;
                break
            }
            1 == Aa && (8 > r ? (C[l(w) * h + l(r + 400)] <= F ? (O[a].x += 400, $[a].x *= 0.8) : $[a].x *= -0.8, r = O[a].x + $[a].x * n) : 408 <= r &&
                (C[l(w) * h + l(r - 400)] <= F ? (O[a].x -= 400, $[a].x *= 0.8) : $[a].x *= -0.8, r = O[a].x + $[a].x * n), 8 > w ? (C[l(w + 300) * h + l(r)] <= F ? (O[a].y += 300, $[a].y *= 0.8) : $[a].y *= -0.8, w = O[a].y + $[a].y * n) : 308 <= w && (C[l(w - 300) * h + l(r)] <= F ? (O[a].y -= 300, $[a].y *= 0.5) : $[a].y *= -0.8, w = O[a].y + $[a].y * n));
            b = l(w) * h + l(r);
            y = 0;
            Kd(z, 0, 0);
            for (d = 0; 37 > d; d++) {
                var Y = C[b + pe[d]];
                if (!(Y <= F)) {
                    g = Y;
                    if (0 <= Y && (g = t[Y], 1 == jf(a, g, Y))) continue;
                    z.x -= af[d];
                    z.y -= bf[d];
                    y++
                }
            }
            0 == y ? (O[a].x = r, O[a].y = w) : (kf(z), $[a].y -= e, d = 0.999 * hf($[a]), T(z, -(z.x * $[a].x + z.y * $[a].y)), $[a].add(z),
                T($[a], 0.999), T(z, 0.1), $[a].add(z), kf($[a]), T($[a], d), O[a].x += $[a].x * n, O[a].y += $[a].y * n, $[a].y += e);
            b = l(O[a].y) * h + l(O[a].x);
            y = 0;
            Kd(z, 0, 0);
            for (d = 0; 21 > d; d++) if (Y = C[b + pe[d]], !(Y <= F)) {
                if (0 <= Y) {
                    if (2 == V[t[Y]] && 2 == V[P[a]] && P[a] != t[Y]) continue;
                    if (2 == V[t[Y]] && 2 != V[P[a]]) continue;
                    if (5 == V[t[Y]] && 5 != V[P[a]]) continue;
                    if (t[Y] == oc && 2 == V[P[a]]) continue;
                    if (t[Y] == x) continue;
                    if (t[Y] == lc && P[a] == lc) continue
                }
                z.x -= af[d];
                z.y -= bf[d];
                y++
            }
            0 != y && (kf(z), O[a].add(z))
        }
        if (4 > O[a].x || h - 4 <= O[a].x || 4 > O[a].y || 312 <= O[a].y) {
            Hc[a] = 0;
            break
        }
        b =
            l(O[a].y) * h + l(O[a].x);
        e = 0;
        P[a] == Ub && 0 <= g ? 2 == V[g] ? lf(a, b, 0, Ub, 0, 0.5 * $[a].x, 0.5 * $[a].y, 0.5) : 3 == V[g] && lf(a, b, 0, x, 0, 0.5 * $[a].x, 0.5 * $[a].y, 0.5) : P[a] == u ? g != ec && g != lc && g != pc || lf(a, b, 0, u, 0, 0, 0, 0) : P[a] == Yb ? (d = hf(f), (g == lc || g == pc || (-1 == g || -3 == g || g == dc || g == mc || g == nc) && 5 < d) && lf(a, b, 0, 11, 0, f.x, f.y, d)) : 37 == P[a] ? g != lc && g != pc || lf(a, b, 0, 37, 0, 0, 0, 0) : P[a] == rc ? g != ec && g != lc && g != pc || lf(a, b, 0, rc, 0, 0, 0, 0) : P[a] == x && (g != u && g != kc && 37 != g && g != pc || lf(a, b, 0, x, 0, 0, 0, 0));
        P[a] == Vb && 0 <= g && (g == pc ? lf(a, b, 0, Vb, 0, 0.5 * $[a].x, 0.5 * $[a].y,
            0.5) : g != vc && 3 == V[g] && lf(a, b, 0, x, 0, 0.5 * $[a].x, 0.5 * $[a].y, 0.5));
        if (6 == P[a] && 0 <= g) g == ic ? lf(a, b, 0, ic, 0, 0, 0, 0) : g == pc ? lf(a, b, 0, Ub, 0, 0, 0, 0) : g == lc ? lf(a, b, 0, Ub, 0, 0, 0, 1) : g != vc && (3 == V[g] && 1 == R[a] ? lf(a, b, 0, 6, 1, 0, 0, 0) : 3 == V[g] && lf(a, b, 0, x, 0, 0, 0, 0)); else if (P[a] == Wb && 0 <= g) if (3 == V[g] && 0 == R[a]) {
            for (d = 0; 37 > d; d++) Y = C[b + pe[d]], Y <= F && (e = id(l(O[a].x) + cf[d], l(O[a].y) + df[d], x), 0 < e && (f = S(20), E[e].x += $[a].x * f + af[d] * f / 2, E[e].y += $[a].y * f + bf[d] * f / 2, M[e] = 2));
            Hc[a] = 0
        } else g == pc && lf(a, b, 0, Wb, 0, 0, 0, 0); else if (P[a] == bc && 0 <= g) if (3 ==
            V[g]) {
            for (d = 9; 21 > d; d++) Y = C[b + pe[d]], Y <= F && 50 > S(100) && id(l(O[a].x) + cf[d], l(O[a].y) + df[d], x);
            1 > S(100) && lf(a, b, 0, bc, 0, 0, 0, 0)
        } else g == pc && lf(a, b, 0, bc, 0, 0, 0, 0); else if (P[a] == kc) g != ec && g != lc && g != pc || lf(a, b, 0, kc, 0, 0, 0, 0); else if (P[a] == Xb && 0 < g) b = (l(O[a].y) >> 2) * G + (l(O[a].x) >> 2), J[b] += 10, pd -= 10; else if (P[a] == $b) if (0 == R[a] && 0 < g) R[a] = g; else {
            if (0 != R[a] && !(1E3 > ia[ha] - s)) {
                e = l(O[a].x);
                b = l(O[a].y);
                if (1 == V[R[a]] || R[a] == ec || R[a] == vc) b += 4;
                d = b * h + e;
                C[d] <= F && id(e, b, R[a])
            }
        } else if ((P[a] == cc || P[a] == gc) && 0 <= g) if (3 == V[g]) {
            f =
                10;
            g = l(O[a].x) & 65532;
            q = l(O[a].y) & 65532;
            n = ie(g - f, H);
            z = ie(q - f, H);
            v = se(g + f, h - H - 1);
            r = se(q + f, (kd - 1) * H - 1);
            for (b = z; b <= r; b++) for (e = n; e <= v; e++) (e - g) * (e - g) + (b - q) * (b - q) > f * f || (d = b * h + e, 0 <= C[d] && (E[C[d]].x += 10 * (e - g), E[C[d]].y += 10 * (b - q)), C[d] <= F && P[a] == gc && id(e, b, x), 0 == (b & 3) + (e & 3) && (d = (b >> 2) * G + (e >> 2), 0 >= K[d] && (1 <= ce(e - g) && (I[d].x += 100 / (e - g)), 1 <= ce(b - q) && (I[d].y += 100 / (b - q)))));
            Hc[a] = 0
        } else g == pc && lf(a, b, 0, P[a], 0, 0, 0, 0); else if (P[a] == jc && 0 <= g) 3 == V[g] ? (lf(a, b, 0, P[a], 0, 0, 0, 1), 2 > R[a] && (R[a]++, Hc[a] = 1)) : g == pc && lf(a, b,
            0, P[a], 0, 0, 0, 0); else if (P[a] == zc && 0 <= g) 0 < V[g] && lf(a, b, 0, g, 0, 0.5 * $[a].x, 0.5 * $[a].y, 0.5); else if (P[a] == nc && 0 <= g) {
            if (g != nc && g != x && g != jc && g != oc && 0 < V[g]) {
                f = 10;
                g = l(O[a].x);
                q = l(O[a].y);
                n = ie(g - f, H);
                z = ie(q - f, H);
                v = se(g + f, h - H - 1);
                r = se(q + f, (kd - 1) * H - 1);
                Kd(c, 0, 0);
                for (b = z; b <= r; b++) for (e = n; e <= v; e++) (e - g) * (e - g) + (b - q) * (b - q) > f * f || (d = b * h + e, 0 <= C[d] && (c.x += O[a].x - e, c.y += O[a].y - b));
                fe(c);
                for (b = z; b <= r; b++) for (e = n; e <= v; e++) (e - g) * (e - g) + (b - q) * (b - q) > f * f || (d = b * h + e, 0 <= C[d] && (M[C[d]] = t[C[d]], t[C[d]] = nc, Jd[C[d]] = 0, E[C[d]].x += 0.5 *
                    c.x + 0.5 * (g - e), E[C[d]].y += 0.5 * c.y + 0.5 * (q - b)));
                Hc[a] = 0
            }
        } else P[a] == tc && 0 <= g ? 3 == V[g] ? lf(a, b, 0, x, 0, 0.5 * $[a].x, 0.5 * $[a].y, 0.5) : g == pc && lf(a, b, 0, tc, 0, 0, 0, 0) : P[a] == dc ? (d = hf(f), (-1 == g || g == mc || g == nc) && 7 < d ? P[a] = Ub : g == pc && lf(a, b, 0, dc, 0, 0, 0, 0)) : P[a] == mc ? 37 == g ? lf(a, b, 1, Ub, 0, 0, 0, 0) : g == lc ? lf(a, b, 2, mc, 0, 0, 0, 0) : g == oc ? lf(a, b, 1, mc, 0, 0, 0, 0) : g == pc && lf(a, b, 0, mc, 0, 0, 0, 0) : P[a] == sc ? (d = hf(f), (-1 == g || -3 == g || g == dc || g == mc || g == nc) && 5 < d ? lf(a, b, 0, dc, 0, 0, 0, 0.1 * d) : g == lc ? lf(a, b, 1, sc, 0, 0, 0, 0) : g == oc ? lf(a, b, 2, sc, 0, 0, 0, 0) : g == pc && lf(a, b,
            0, sc, 0, 0, 0, 0)) : P[a] == ic ? g == u ? lf(a, b, 0, ic, 0, 0, 0, 0) : g == kc ? lf(a, b, 0, ic, 0, 0, 0, 0) : 37 == g ? lf(a, b, 0, ic, 0, 0, 0, 0) : g == lc ? lf(a, b, 0, x, 0, 0, 0, 0) : g == pc && lf(a, b, 0, ic, 0, 0, 0, 0) : P[a] == wc && 0 <= g ? 3 == V[g] ? R[a] == bc ? lf(a, b, 2, x, 0, 0, 0, 0) : R[a] == gc ? lf(a, b, 0, gc, 0, 0, 0, 1) : R[a] == kc ? lf(a, b, 0, zc, 0, 0, 0, 1) : lf(a, b, 0, vc, 0, 0, 0, 0) : g == u ? lf(a, b, 0, Wb, 0, 0, 0, 0) : 37 == g ? lf(a, b, 0, Wb, 0, 0, 0, 0) : g == pc && lf(a, b, 0, wc, 0, 0, 0, 0) : P[a] == xc ? g == pc && lf(a, b, 0, xc, 0, 0, 0, 0) : P[a] != yc || 0 == R[a] || 1E3 > ia[ha] - s || (c.set($[a]), fe(c), T(c, 4), e = l(O[a].x - c.x), b = l(O[a].y - c.y), d =
            b * h + e, C[d] <= F && (d = R[a] & 255, f = R[a] >> 8, 0 < f && (id(e, b, d), R[a] = f - 1 << 8 | d)));
        0 != $e && (P[a] = $e, R[a] = 0);
        if (0 != Hc[a]) for (b = l(O[a].y) * h + l(O[a].x), d = 0; 21 > d; d++) C[b + pe[d]] <= F && (C[b + pe[d]] = -2)
    }
};

function jf(a, d, b) {
    if (P[a] != Ub) if (P[a] == u) {
        if (d == x) return U(b), 1;
        if (6 == d) t[b] = Vb, M[b] = 0; else if (d == Yb) $e = Yb; else if (11 == d) 20 <= ++R[a] && ($e = Yb); else {
            if (d == ec) return 1;
            if (d == ic) U(b); else {
                if (d == lc) return 1;
                if (d == mc) 10 > S(100) && (t[b] = Ub, M[b] = 0); else {
                    if (d == oc) return 1;
                    d == rc ? (20 <= ++R[a] && ($e = 37), U(b)) : d == wc && (t[b] = Wb, M[b] = 0)
                }
            }
        }
    } else if (P[a] == Yb) if (d == u) t[b] = Yb, M[b] = 0; else if (d == x) 20 <= ++R[a] && ($e = u); else if (d == Yb) R[a] = 0; else if (11 == d) R[a] = 0; else if (d == ec) $e = u; else if (d == ic) 20 <= ++R[a] && ($e = u); else {
        if (d == lc) return 1;
        d == oc ? 20 <= ++R[a] && ($e = u) : d == vc && 20 <= ++R[a] && ($e = u)
    } else if (37 == P[a]) if (d == u) R[a] = 0; else {
        if (d == x) return 20 <= ++R[a] && ($e = rc), U(b), 1;
        if (d == Vb) t[b] = Ub, M[b] = 0; else if (6 == d) t[b] = Ub, M[b] = 0; else if (d == Yb) $e = Yb; else if (11 == d) 20 <= ++R[a] && ($e = Yb); else if (d == ec) $e = rc; else if (d == ic) 20 <= ++R[a] && ($e = rc), U(b); else {
            if (d == lc) return 1;
            if (d == mc) t[b] = Ub, M[b] = 0; else {
                if (d == oc) return 20 <= ++R[a] && ($e = rc), 1;
                d == qc ? (t[b] = Ub, M[b] = 0) : d == rc ? 20 > R[a] && (U(b), R[a]++) : d == vc ? (20 <= ++R[a] && ($e = rc), U(b)) : d == wc && (t[b] = Wb, M[b] = 0)
            }
        }
    } else if (P[a] ==
        rc) if (d == u) $e = 37; else {
        if (d == ec || d == lc) return 1
    } else if (P[a] == x) d == Ub ? (t[b] = x, M[b] = 0) : d == Vb ? (t[b] = x, M[b] = 0) : 6 == d ? (t[b] = x, M[b] = 0) : d == Wb ? (t[b] = x, M[b] = 0) : d == Yb ? (t[b] = u, M[b] = 0) : 11 == d ? (t[b] = u, M[b] = 0) : d == ac ? t[b] == ac && 0 < M[b] && 100 > M[b] && (E[b].y -= 50, M[b] += 100) : d == bc ? (t[b] = x, M[b] = 0) : d == cc ? (t[b] = x, M[b] = 0) : d == gc ? (t[b] = x, M[b] = 0) : d == hc ? (t[b] = x, M[b] = 0) : d == jc ? (t[b] = x, M[b] = 0) : d == qc ? (t[b] = x, M[b] = 0) : d == tc ? (t[b] = x, M[b] = 0) : d == wc && (t[b] = x, M[b] = 0); else if (P[a] == Vb) d == Ub ? 1 == R[a] ? $e = 6 : (t[b] = Vb, M[b] = 0) : d == u ? R[a] = 1 : d == qc && (t[b] =
        6, M[b] = 0); else if (6 == P[a]) d == Vb ? M[b] = 1 : d == bc && (R[a] = 1); else if (P[a] == Wb) d == u ? 20 > R[a] && R[a]++ : d == x ? 0 < R[a] && R[a]-- : d == ec ? 0 < R[a] && R[a]-- : d == ic ? 0 < R[a] && R[a]-- : d == kc ? 20 > R[a] && R[a]++ : d == lc ? 0 < R[a] && R[a]-- : d == oc ? 0 < R[a] && R[a]-- : 37 == d ? 20 > R[a] && R[a]++ : d == vc && 0 < R[a] && R[a]--; else if (P[a] == bc) {
        if (d == ec) return 1;
        if (d == kc) U(b); else {
            if (d == lc || d == oc) return 1;
            d == wc && 256 > M[b] && (M[b] = bc)
        }
    } else if (P[a] == kc) if (d == Yb) $e = Yb; else if (d == bc) U(b); else {
        if (d == ec) return 1;
        if (d == ic) U(b); else {
            if (d == lc || d == oc) return 1;
            d == vc ? U(b) : d ==
                wc && 256 > M[b] && (M[b] = kc)
        }
    } else if (P[a] != Xb) if (P[a] == $b) {
        if (d == lc || d == oc) return 1
    } else if (P[a] == fc) 0 == R[a] && 0 < d ? R[a] = d : 0 != R[a] && 0 < d && (t[b] = R[a], M[b] = 0, Jd[b] = 0); else if (P[a] == gc) d == wc && 256 > M[b] && (M[b] = gc); else if (P[a] == pc) {
        if (0 == Be[d] && d != $b || U(b), d == lc || d == oc) return 1
    } else if (P[a] == tc) d != Vb && d != hc || U(b), 6 == d && T($[a], 0.9); else if (P[a] == lc) {
        if (37 == d) return t[b] = lc, M[b] = 0;
        if (d == lc) return 1;
        if (d == mc) t[b] = lc, M[b] = 6E3; else if (d == uc) return t[b] = lc, M[b] = 6100, 1
    } else if (P[a] == dc) if (d == u) R[a] = 0; else if (d == ec) 20 <=
    ++R[a] && ($e = ec); else if (d == dc) {
        if (!(1E3 > ia[ha] - s) && 10 < $[a].x * $[a].x + $[a].y * $[a].y) {
            b = l(O[a].x) + l(S(5)) - 2;
            var c = l(O[a].y) + l(S(5)) - 2, e = c * h + b;
            C[e] <= F && id(b, c, vc)
        }
    } else {
        if (d == vc) return 1
    } else if (P[a] == ec) d == u ? (20 <= ++R[a] && ($e = mc), t[b] = zc, M[b] = 0) : d == ec ? R[a] = 0 : d == kc ? (20 <= ++R[a] && ($e = sc), t[b] = zc, M[b] = 0) : 37 == d && (20 <= ++R[a] && ($e = dc), t[b] = zc, M[b] = 0), d == Ub ? (t[b] = x, M[b] = 0) : d == Vb ? (t[b] = x, M[b] = 0) : 6 == d ? (t[b] = x, M[b] = 0) : d == Wb ? (t[b] = x, M[b] = 0) : d == Yb ? (t[b] = u, M[b] = 0) : 11 == d ? (t[b] = u, M[b] = 0) : d == Zb ? (t[b] = x, M[b] = 0) : d == ac ?
        t[b] == ac && 0 < M[b] && 100 > M[b] && (E[b].y -= 50, M[b] += 100) : d == bc ? (t[b] = x, M[b] = 0) : d == cc ? (t[b] = x, M[b] = 0) : d != dc && (d == gc ? (t[b] = x, M[b] = 0) : d == hc ? (t[b] = x, M[b] = 0) : d == jc ? (t[b] = x, M[b] = 0) : d != mc && (d == qc ? (t[b] = x, M[b] = 0) : d != sc && (d == tc ? (t[b] = x, M[b] = 0) : d != uc && d == wc && (t[b] = x, M[b] = 0)))); else if (P[a] == mc) if (d == u) R[a] = 0; else if (d == ec) 20 <= ++R[a] && ($e = ec); else if (d == mc) !(1E3 > ia[ha] - s) && 10 < $[a].x * $[a].x + $[a].y * $[a].y && (b = l(O[a].x) + l(S(5)) - 2, c = l(O[a].y) + l(S(5)) - 2, e = c * h + b, C[e] <= F && id(b, c, vc)); else {
        if (d == lc || d == oc || d == vc) return 1
    } else if (P[a] ==
        sc) if (d == u) R[a] = 0; else if (d == ec) 20 <= ++R[a] && ($e = ec); else {
        if (d == lc || d == oc) return 1
    } else if (P[a] == ic) d == Ub ? (t[b] = x, M[b] = 0) : d == Vb ? (t[b] = x, M[b] = 0) : 6 == d ? (t[b] = ic, M[b] = 0) : d == Wb ? (t[b] = x, M[b] = 0) : d == Yb ? (t[b] = u, M[b] = 0) : 11 == d ? (t[b] = u, M[b] = 0) : d == Zb ? (t[b] = x, M[b] = 0) : d == ac ? t[b] == ac && 0 < M[b] && 100 > M[b] && (E[b].y -= 50, M[b] += 100) : d == bc ? (t[b] = x, M[b] = 0) : d == cc ? (t[b] = x, M[b] = 0) : d == gc ? (t[b] = x, M[b] = 0) : d == hc ? (t[b] = x, M[b] = 0) : d == jc ? (t[b] = x, M[b] = 0) : d == qc ? (t[b] = x, M[b] = 0) : d == tc ? (t[b] = x, M[b] = 0) : d == wc ? (t[b] = x, M[b] = 0) : d == xc && (t[b] = u,
        M[b] = 0); else if (P[a] == wc) d == bc ? R[a] = bc : d == gc ? R[a] = gc : d == kc && (R[a] = kc); else if (P[a] == xc) if (6 == d) $e = u; else if (d == Yb) $e = Yb; else if (d == cc) $e = u; else if (d == ic) $e = u; else if (d == mc) $e = lc; else if (d == qc) $e = u; else if (d == wc) $e = u; else {
        if (d == lc || d == oc) return 1
    } else if (P[a] == yc && (0 == R[a] ? d == u ? R[a] = u : d == bc ? R[a] = bc : d == ec ? R[a] = ec : d == gc ? R[a] = gc : d == jc ? R[a] = jc : d == kc ? R[a] = kc : d == pc ? R[a] = pc : 37 == d ? R[a] = 37 : d == uc ? R[a] = uc : d == xc && (R[a] = xc) : (c = R[a] & 255, e = R[a] >> 8, d == c && (R[a] = e + 1 << 8 | c, U(b))), d == ec || d == lc || d == oc)) return 1;
    return 2 ==
    V[d] && 2 == V[P[a]] && P[a] != d || 2 == V[d] && 2 != V[P[a]] || 5 == V[d] && 5 != V[P[a]] || d == x ? 1 : 0
}

function lf(a, d, b, c, e, f, g, q) {
    if (0 == b) {
        for (b = 9; 21 > b; b++) {
            var n = C[d + pe[b]];
            n <= F && (n = id(l(O[a].x) + cf[b], l(O[a].y) + df[b], c), 0 < n && (E[n].x += f + af[b] * q, E[n].y += g + bf[b] * q, M[n] = e))
        }
        Hc[a] = 0
    } else if (1 == b || 2 == b) {
        for (b = 1 == b ? 9 : 0; 21 > b; b++) n = C[d + pe[b]], n <= F ? id(l(O[a].x) + cf[b], l(O[a].y) + df[b], c) : 0 <= n && (t[n] = c, M[n] = 0, Jd[n] = 0);
        Hc[a] = 0
    }
}

ba.fff = yd.prototype.s;
yd.prototype.s = function () {
    var a, d, b, c;
    for (a = 0; a < Gc; a++) if (0 != Hc[a]) {
        b = l(O[a].y) * h + l(O[a].x);
        c = Ib[P[a]][0];
        13 == ka && (c = 0);
        for (d = 9; 21 > d; d++) p[b + pe[d]] = c;
        if (308 > O[a].y) if (11 == ka) {
            if (P[a] == x || P[a] == ec || P[a] == ic || P[a] == lc || P[a] == oc || P[a] == vc) Ua[b] = 255E3
        } else 12 == ka && (Ua[b] = 2 * xd[P[a]])
    }
};
var mf = document, nf = mf.getElementById("cv"), of = nf.getContext("2d"), pf = of.createImageData(h, ca),
    qf = new Uint8Array(pf.data.buffer), rf = ba.console, rb = String.fromCharCode, Db = setTimeout,
    sf = location.hostname;
ba.fff = tf;

function tf(a, d, b, c, e, f, g) {
    try {
        nf = mf.getElementById("cv"), of = nf.getContext("2d"), of.putImageData(a, d, b, c, e, f, g)
    } catch (q) {
    }
}

ba.fff = uf;

function uf(a) {
    try {
        rf.log(a)
    } catch (d) {
    }
}

ba.Init = xb;
var Lb = rb(68, 65, 78, 45, 66, 65, 76, 76, 46, 106, 112, 32, 40, 67, 41, 32, 50, 48, 48, 55, 32, 104, 97, 53, 53, 105, 105),
    vf = rb(46, 47, 100, 97, 116, 97, 47), Rc = rb(102, 112, 115), wf = rb(99, 97, 110, 118, 97, 115), xf = rb(50, 100),
    yf = 0, zf = rb(100, 97, 110, 45, 98, 97, 108, 108, 46, 106, 112), p = new Int32Array(h * ca);
ba.fff = yb;

function yb() {
    var a;
    uf(Lb);
    nf.width = 400;
    nf.height = 456;
    for (a = 0; 513 > a; a++) Ce[a] = Array(2);
    for (a = 0; 512 > a; a++) {
        var d = 360 * a / 512 * Id / 180;
        Ce[a][0] = Math.cos(d);
        Ce[a][1] = Math.sin(d)
    }
    Ce[a][0] = Ce[0][0];
    Ce[a][1] = Ce[0][1];
    for (a = 0; 256 > a; a++) Ic[a] = !1, Af[a] = !1, fd[a] = !1, Bf[a] = 0, Cf[a] = 0;
    for (a = 0; 10 > a; a++) Bf[48 + a] = 48 + a;
    for (a = 0; 9 > a; a++) Cf[49 + a] = 33 + a;
    for (a = 0; 4 > a; a++) Bf[37 + a] = 37 + a;
    for (a = 0; 4 > a; a++) Cf[37 + a] = 37 + a;
    Bf[13] = Cf[13] = 13;
    Bf[16] = Cf[16] = 16;
    Bf[17] = Cf[17] = 17;
    Bf[18] = Cf[18] = 18;
    Bf[32] = Cf[32] = 32;
    Bf[186] = 58;
    Cf[186] = 42;
    Bf[187] =
        59;
    Cf[187] = 43;
    Bf[188] = 44;
    Cf[188] = 60;
    Bf[189] = 45;
    Cf[189] = 61;
    Bf[190] = 46;
    Cf[190] = 62;
    Bf[191] = 47;
    Cf[191] = 63;
    Bf[192] = 64;
    Cf[192] = 96;
    Bf[219] = 91;
    Cf[219] = 123;
    Bf[220] = 92;
    Cf[220] = 124;
    Bf[221] = 93;
    Cf[221] = 125;
    Bf[222] = 94;
    Cf[222] = 126;
    Bf[226] = 92;
    Cf[226] = 95;
    Bf[58] = 58;
    Cf[58] = 42;
    Bf[59] = 59;
    Cf[59] = 43;
    Bf[173] = 45;
    Cf[173] = 61;
    Bf[64] = 64;
    Cf[64] = 96;
    Bf[160] = 94;
    Cf[160] = 126;
    var b;
    for (a = 0; 1024 > a; a++) Fe[a] = a / 1024;
    for (a = 0; 1024 > a; a++) d = l(1024 * Math.random()), b = Fe[a], Fe[a] = Fe[d], Fe[d] = b;
    De = l(1024 * Math.random()) & 1023;
    Ee = l(512 * Math.random()) |
        1;
    for (a = 0; a < h * ca; a++) p[a] = 0;
    for (a = 0; a < h * ca * 4; a++) qf[a] = 255
}

function Nb() {
    if (Df) {
        Df(Nb);
        Ef++;
        Ff = Date.now();
        var a = l(60 * (Ff - Gf) / 1E3 + 0.5);
        if (0 > a || 60 <= a) Ef = 0, Qc = Hf, Hf = 0, Sc = l((2 * Sc + If) / 3), If = 0, Gf = Ff, a = 0; else if (a == Jf) return;
        Hf++;
        Jf = a
    }
    Tb = !1 == ae && !0 == Kf;
    Zc = !0 == ae && !1 == Kf;
    Mc = !1 == be && !0 == Lf;
    $d = !0 == be && !1 == Lf;
    ae = Kf;
    be = Lf;
    Sb = !(Zc | ae | $d | be);
    Nc = Zc ? 1 : $d ? -1 : 0;
    qe = Qb;
    re = Rb;
    Qb = Mf;
    Rb = Nf;
    Tb && (qe = Qb, re = Rb);
    for (a = 0; 256 > a; a++) Ic[a] = Af[a], Af[a] = !1;
    De = De + l(1024 * Math.random()) & 1023;
    Ee = l(512 * Math.random()) | 1;
    Ob();
    var d, b = 11 == yf ? h * ca : 0;
    if (0 == la) d = a = 0; else {
        var c = l(ma) + 8, e = l(na) + 8, f, g,
            q;
        for (g = 0; 300 > g; g++) for (d = 4 * ((g + 8) * h + 8), a = (e + (g >> la)) * h + (c + 0), f = 0; 400 > f; f++) q = a + (f >> la), qf[d++] = p[q] >> 16 & 255, qf[d++] = p[q] >> 8 & 255, qf[d++] = p[q] & 255, d++;
        a = 308 * h;
        d = 4 * a
    }
    for (; a < b; a++) qf[d++] = p[a] >> 16 & 255, qf[d++] = p[a] >> 8 & 255, qf[d++] = p[a] & 255, d++;
    tf(pf, -8, -8, 8, 8, h - 16, ca - 8);
    Df ? If += Date.now() - Ff : Db(Nb, Eb())
}

var Pb = 1;

function Ab() {
    if (sf.length != zf.length) return !0;
    for (Pb = 0; yf < sf.length; yf++) if (sf[yf] != zf[yf]) return !0;
    return !1
}

var Df = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame,
    Ef = 0, Jf = 0, Hf = 0, Qc = 0, If = 0, Sc = 0, Of = 20, Ff = Date.now(), Gf = Ff, Pf = Ff + Of, Qf = Ff, Rf = 0;

function Eb() {
    Ff = Date.now();
    var a = Lc(Pf - Ff, 5, Of);
    Hf++;
    Rf++;
    If += a;
    Pf += Of;
    if (Ff + a >= Qf || Ff < Gf) Sc = Sc + If >> 1, If = 0, Qc = Hf, Hf = 0, Pf = Ff + Of, Qf = Ff + 1E3;
    Gf = Ff;
    return a
}

var Cb = 0;

function Ha() {
    this.d = 0;
    this.file = "";
    this.u = this.f = this.n = this.g = this.k = this.b = this.shift = this.i = this.c = 0
}

function Mb(a, d, b) {
    a.c = d;
    a.i = b;
    for (d = a.shift = 0; 16 > d; d++) 1 << d == a.c && (a.shift = d);
    a.b = new Int32Array(a.c * a.i)
}

Ha.prototype.e = function (a) {
    this.file != a && (Cb++, this.file = a, this.d = new Image, this.d.src = vf + a + "?9.2", delete this.b, this.k = this.b = 0)
};

function Bb(a) {
    if (0 == a.k && a.d.complete) {
        Cb--;
        var d = a.d.width, b = a.d.height;
        if (0 == d || 0 == b) throw delete a.d, a.file = "", Sf;
        var c = mf.createElement(wf);
        c.width = d;
        c.height = b;
        c = c.getContext(xf);
        c.drawImage(a.d, 0, 0);
        c = c.getImageData(0, 0, d, b).data;
        Mb(a, d, b);
        d = 0;
        for (b = c.length; d < b; d += 4) a.b[d >> 2] = 0 == c[d + 3] ? -1 : c[d + 0] << 16 | c[d + 1] << 8 | c[d + 2];
        delete a.d;
        a.k = 1
    }
}

function Tc(a, d) {
    gd(a, d, "sans-serif", 0, 14)
}

function gd(a, d, b, c, e) {
    0 == a.k && (a.k = 1, Mb(a, h, 128), a.n = mf.createElement(wf), a.n.width = a.c, a.n.height = a.i, a.f = a.n.getContext(xf));
    var f = d + b + c + e;
    if (a.u != f) {
        a.u = f;
        a.f.fillStyle = "#000000";
        a.f.fillRect(0, 0, a.c, a.i);
        f = "";
        0 != (c & 2) && (f += "italic ");
        0 != (c & 1) && (f += "bold ");
        f = f + (e + "px ") + b;
        a.f.font = f;
        a.f.fillStyle = "#ffffff";
        a.f.fillText(d, 0, e);
        b = a.f.getImageData(0, 0, a.c, a.i).data;
        d = 0;
        for (c = b.length; d < c; d += 4) a.b[d >> 2] = 1 <= b[d + 0] ? 16777215 : -1;
        for (d = b = a.g = 0; b < a.i; b++) for (c = 0; c < a.c; c++, d++) 16777215 == a.b[d] && a.g <= c &&
        (a.g = c + 1)
    }
}

var Tf = [[0, 2, 0, 0, 1, 0, 0, 2, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 3, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]],
    Uf = [[0, 1, 1, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 1, 0], [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]],
    k = new Vf;

function Vf() {
    this.o = new Ha;
    this.j = this.m = this.p = this.h = 0
}

Vf.prototype.e = function (a, d, b) {
    this.o.e(a);
    this.h = d;
    this.p = b;
    this.j = this.m = 0
};
Vf.prototype.a = function (a, d, b, c, e) {
    var f, g, q, n, r, w, y, z = h - this.h, v = this.o.c - this.h, Y = -1 < c ? 16777215 : 1, Ka = -1 < e ? 0 : 1,
        ab = b.length;
    for (f = 0; f < ab; f++, a += this.h + this.m) if (r = b.charCodeAt(f) - 32, 0 != r) {
        96 <= r && (r = 31);
        0 != this.j && (a -= Tf[this.j - 1][r]);
        w = r * this.h;
        n = d * h + a;
        for (q = 0; q < this.p; q++, n += z, w += v) for (g = 0; g < this.h; g++, n++, w++) y = this.o.b[w], y == Y ? p[n] = c : y == Ka && (p[n] = e);
        0 != this.j && (a -= Uf[this.j - 1][r])
    }
    this.j = 0
};

function Wc(a, d, b, c) {
    var e = k;
    a -= b.length * (e.h + e.m) >> 1;
    d -= e.p >> 1;
    e.a(a, d, b, c, 0)
}

function m(a, d, b, c, e, f) {
    var g = k;
    g.m = f;
    g.a(a, d, b, c, e);
    g.m = 0
}

var Wf = 0;

function Xf(a, d, b) {
    var c = Wf, e = 0, f = 0, g = 0;
    1 == c ? (c = a >> 16 & 255, e = (((d >> 16 & 255) - c) * b >> 8) + c, c = a >> 8 & 255, f = (((d >> 8 & 255) - c) * b >> 8) + c, c = a & 255, g = (((d & 255) - c) * b >> 8) + c) : 2 == c ? (e = ((d >> 16 & 255) * b >> 8) + (a >> 16 & 255), 255 < e && (e = 255), f = ((d >> 8 & 255) * b >> 8) + (a >> 8 & 255), 255 < f && (f = 255), g = ((d & 255) * b >> 8) + (a & 255), 255 < g && (g = 255)) : 3 == c ? (e = (a >> 16 & 255) - ((d >> 16 & 255) * b >> 8), 0 > e && (e = 0), f = (a >> 8 & 255) - ((d >> 8 & 255) * b >> 8), 0 > f && (f = 0), g = (a & 255) - ((d & 255) * b >> 8), 0 > g && (g = 0)) : 4 == c ? (e = (d >> 16 & 255) * (a >> 16 & 255) >> 8, f = (d >> 8 & 255) * (a >> 8 & 255) >> 8, g = (d & 255) * (a & 255) >>
        8) : 5 == c ? (c = a >> 16 & 255, e = c + ((d >> 16 & 255) * c * b >> 16), 255 < e && (e = 255), c = a >> 8 & 255, f = c + ((d >> 8 & 255) * c * b >> 16), 255 < f && (f = 255), c = a & 255, g = c + ((d & 255) * c * b >> 16), 255 < g && (g = 255)) : 6 == c && (c = a >> 16 & 255, e = c + (b - (2 * c * b >> 8)), c = a >> 8 & 255, f = c + (b - (2 * c * b >> 8)), c = a & 255, g = c + (b - (2 * c * b >> 8)));
    return e << 16 | f << 8 | g
}

var Yf = 0;

function B(a, d, b, c, e) {
    b -= a;
    c -= d;
    var f, g;
    ce(b) >= ce(c) ? (g = l(ce(b)), 0 != g && (c = l(65536 * c / g)), b = 0 <= b ? 65536 : -65536) : (g = l(ce(c)), 0 != g && (b = l(65536 * b / g)), c = 0 <= c ? 65536 : -65536);
    a = l(65536 * a) + 32768;
    for (d = l(65536 * d) + 32768; 0 <= g; g--, a += b, d += c) 0 > a || h <= a >> 16 || 0 > d || ca <= d >> 16 || (f = (d >> 16) * h + (a >> 16), p[f] = 0 == Wf ? e : Xf(p[f], e, e >> 24 & 255))
}

function Yc(a, d, b, c, e) {
    b--;
    c--;
    B(a, d, a + b, d, e);
    B(a, d + c, a + b, d + c, e);
    B(a, d, a, d + c, e);
    B(a + b, d, a + b, d + c, e)
}

function Kb(a, d, b, c, e) {
    var f;
    b = a + b > h ? h : ~~(a + b);
    c = d + c > ca ? ca : ~~(d + c);
    a = 0 > a ? 0 : ~~a;
    d = (0 > d ? 0 : ~~d) * h + a;
    f = h - (b - a);
    b = d + b - a;
    c *= h;
    if (0 == Wf) for (; d < c; d += f, b += h) for (; d < b; d++) p[d] = e; else for (; d < c; d += f, b += h) for (; d < b; d++) p[d] = Xf(p[d], e, e >> 24 & 255)
}

function ad(a, d, b, c, e, f, g, q) {
    var n, r, w, y, z, v;
    if (0 != c && 0 != e) {
        f = l((f << 8) / c);
        g = l((g << 8) / e);
        r = n = 0;
        0 > d && (n += f * -d);
        0 > b && (r += g * -b);
        c = d + c > h ? h : l(d + c);
        e = b + e > ca ? ca : l(b + e);
        d = 0 > d ? 0 : l(d);
        b = 0 > b ? 0 : l(b);
        var Y = q >> 24 & 255, Ka = q >> 16 & 255, ab = q >> 8 & 255, La = q & 255, Ta, pa;
        if (0 == Yf) for (; b < e; b++, r += g) for (y = b * h + d, z = ((r >> 8) * a.c << 8) + n, w = d; w < c; w++, y++, z += f) v = a.b[z >> 8], -1 != v && (q = Ka * (v >> 16 & 255) >> 8, Ta = ab * (v >> 8 & 255) >> 8, pa = La * (v & 255) >> 8, 0 == Wf ? p[y] = q << 16 | Ta << 8 | pa : 1 == Wf ? (v = p[y] >> 16 & 255, q = ((q - v) * Y >> 8) + v, v = p[y] >> 8 & 255, Ta = ((Ta - v) * Y >> 8) + v, v = p[y] &
            255, pa = ((pa - v) * Y >> 8) + v, p[y] = q << 16 | Ta << 8 | pa) : 2 == Wf ? (q = (q * Y >> 8) + (p[y] >> 16 & 255), 255 < q && (q = 255), Ta = (Ta * Y >> 8) + (p[y] >> 8 & 255), 255 < Ta && (Ta = 255), pa = (pa * Y >> 8) + (p[y] & 255), 255 < pa && (pa = 255), p[y] = q << 16 | Ta << 8 | pa) : 5 == Wf && (v = p[y] >> 16 & 255, q = v + (q * v * Y >> 16), 255 < q && (q = 255), v = p[y] >> 8 & 255, Ta = v + (Ta * v * Y >> 16), 255 < Ta && (Ta = 255), v = p[y] & 255, pa = v + (pa * v * Y >> 16), 255 < pa && (pa = 255), p[y] = q << 16 | Ta << 8 | pa)); else if (1 == Yf) for (; b < e; b++, r += g) for (y = b * h + d, z = ((r >> 8) * a.c << 8) + n, w = d; w < c; w++, y++, z += f) v = Y * (a.b[z >> 8] & 255) >> 8, 0 != v && (p[y] = Xf(p[y], q, v));
        else if (2 == Yf) for (; b < e; b++, r += g) for (y = b * h + d, z = ((r >> 8) * a.c << 8) + n, w = d; w < c; w++, y++, z += f) v = a.b[z >> 8], 0 != v && (q = v >> 16 & 255, Ta = v >> 8 & 255, pa = v & 255, p[y] = q == Ta && Ta == pa ? Ka * q >> 8 << 16 | ab * Ta >> 8 << 8 | La * pa >> 8 : q << 16 | Ta << 8 | pa)
    }
}

function Xc(a) {
    var d = Ia.g;
    ad(Ia, 208 - (d >> 1), a - 8, d, 16, Ia.g, 16, 4278190080)
}

var ee = new od, Tb = !1, Zc = !1, ae = !1, Kf = !1, Mc = !1, $d = !1, be = !1, Lf = !1, Sb = !1, Nc = 0, Qb = 0,
    Rb = 0, qe = 0, re = 0, Mf = 0, Nf = 0;

function Kc(a, d, b, c) {
    return Qb < a || a + b <= Qb || Rb < d || d + c <= Rb ? !1 : !0
}

function Zf(a) {
    var d = nf.getBoundingClientRect();
    Mf = l(a.clientX - d.left);
    Nf = l(a.clientY - d.top)
}

mf.onmousemove = Zf;
mf.onmousedown = function (a) {
    Zf(a);
    $f = !1;
    if (!(0 > Mf || h <= Mf || 0 > Nf || ca <= Nf) && ($f = !0, 0 == a.button && (Kf = !0), 2 == a.button && (Lf = !0), $f)) return !1
};
mf.onmouseup = function (a) {
    Zf(a);
    0 == a.button && (Kf = !1);
    2 == a.button && (Lf = !1)
};
mf.oncontextmenu = function () {
    if ($f) return !1
};

function ag(a) {
    for (var d = 0, b = 0, c = nf; null !== c; c = c.offsetParent) d += c.offsetLeft, b += c.offsetTop;
    a = a.touches;
    Mf = l(a[0].pageX - d);
    Nf = l(a[0].pageY - b)
}

nf.ontouchstart = function (a) {
    ag(a);
    Kf = !0;
    1 < a.touches.length && (Lf = !0);
    return !1
};
nf.ontouchmove = function (a) {
    ag(a);
    return !1
};
nf.ontouchend = function (a) {
    1 > a.touches.length && (Kf = !1);
    return Lf = !1
};
nf.ontouchcancel = function () {
    Lf = Kf = !1
};
var Ic = Array(256), Af = Array(256), fd = Array(256), Bf = Array(256), Cf = Array(256);
mf.onkeydown = function (a) {
    var d = a.keyCode;
    65 <= d & 90 >= d ? a.shiftKey || (d += 32) : d = a.shiftKey ? Cf[d] : Bf[d];
    0 <= d && 256 > d && (fd[d] = !0, Af[d] = !0);
    if (0 != d && $f) return !1
};
mf.onkeyup = function (a) {
    var d = a.keyCode;
    65 <= d & 90 >= d ? a.shiftKey || (d += 32) : d = a.shiftKey ? Cf[d] : Bf[d];
    0 <= d && 256 > d && (fd[d] = !1);
    if (0 != d && $f) return !1
};
var $f = !1;

function $c(a, d) {
    var b = null;
    try {
        b = prompt(a, d)
    } catch (c) {
    }
    return b
}

var Vc = Array(100), Hb = 0, bg = rb(80, 79, 83, 84), Uc = rb(38, 98, 61), bd = rb(38, 99, 61);
rb(38, 100, 61);
var cd = rb(38, 101, 61), dd = rb(38, 102, 61), ed = rb(38, 103, 61);
rb(38, 104, 61);
rb(38, 105, 61);
rb(38, 106, 61);
rb(38, 107, 61);
rb(111, 107);
var Sf = rb(69, 82, 82, 79, 82), cg = rb(61), dg = rb(10),
    eg = rb(67, 111, 110, 116, 101, 110, 116, 45, 84, 121, 112, 101),
    fg = rb(97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 120, 45, 119, 119, 119, 45, 102, 111, 114, 109, 45, 117, 114, 108, 101, 110, 99, 111, 100, 101, 100);

function Gb(a, d) {
    for (var b = Hb = 0; 100 > b; b++) Vc[b] = "";
    try {
        var c = new XMLHttpRequest;
        c.onreadystatechange = function () {
            if (4 == c.readyState) if (200 == c.status) {
                var a, b, d = 0, e = c.responseText.length;
                for (a = 0; a < e; a++) if (b = c.responseText[a], b == cg) {
                    for (a += 1; a < e; a++) {
                        b = c.responseText[a];
                        if (b == dg) break;
                        Vc[d] += b
                    }
                    d++
                } else for (; a < e && c.responseText[a] != dg; a++) ;
                Hb = 1
            } else Hb = -1
        };
        c.open(bg, a, !1);
        c.setRequestHeader(eg, fg);
        c.send(d);
        return c.responseText
    } catch (e) {
        Hb = -2
    }
    return ""
}

function od() {
    this.y = this.x = 0
}

od.prototype.set = function (a) {
    this.x = a.x;
    this.y = a.y;
    return this
};

function Kd(a, d, b) {
    a.x = d;
    a.y = b
}

od.prototype.add = function (a) {
    this.x += a.x;
    this.y += a.y;
    return this
};
od.prototype.sub = function (a) {
    this.x -= a.x;
    this.y -= a.y;
    return this
};

function de(a, d, b) {
    a.x = d.x - b.x;
    a.y = d.y - b.y
}

function T(a, d) {
    a.x *= d;
    a.y *= d
}

function he(a, d, b) {
    a.x = d.x * b;
    a.y = d.y * b
}

function je(a) {
    return gg(a.x, a.y)
}

function hf(a) {
    return Math.sqrt(a.x * a.x + a.y * a.y)
}

function fe(a) {
    var d = gg(a.x, a.y);
    if (0 == d) return 0;
    a.x /= d;
    a.y /= d;
    return d
}

function kf(a) {
    var d = hf(a);
    0 != d && (a.x /= d, a.y /= d)
}

function zd(a) {
    var d = Math.acos(a.x / Math.sqrt(a.x * a.x + a.y * a.y));
    0 < a.y && (d = Ad - d);
    return d
}

function gg(a, d) {
    0 > a && (a = -a);
    0 > d && (d = -d);
    return a >= d ? 0.9604 * a + 0.3978 * d : 0.9604 * d + 0.3978 * a
}

var Fe = new Float32Array(1024), De = 0, Ee = 0;

function S(a) {
    De += Ee;
    De &= 1023;
    return Fe[De] * a
}

function W(a, d) {
    De += Ee;
    De &= 1023;
    return Fe[De] * (d - a) + a
}

function X(a) {
    De += Ee;
    De &= 1023;
    return ~~(Fe[De] * a)
}

var Ce = Array(513), Id = 3.1415927, Ad = 6.2831855;

function ce(a) {
    return 0 > a ? -a : a
}

function ie(a, d) {
    return a > d ? a : d
}

function se(a, d) {
    return a < d ? a : d
}

function Lc(a, d, b) {
    return a < d ? d : a > b ? b : a
}

function Jc(a, d) {
    return 0 > a ? d : a > d ? 0 : a
}

function l(a) {
    return Math.floor(a)
};
