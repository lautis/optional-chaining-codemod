const foo1 = a && a.b && a.b.c && a.b.c.d;
const foo2 = a || a.b;
const foo3 = a?.b.c.d;
const foo4 = a && a.b.c.d;
const foo5 = a && a.b && a.b.c.d;
const foo6 = a && a.b && a.d.c.d;
const foo7 = a && a.b.c && a.b.c.d;
const foo8 = a.b && a.b.c;
const foo9 = a.b && a.b.b.b;
const foo10 = a.b && a.b.b.b.b.b;
const foo11 = a && a.b.b.b.b.b;
const foo12 = a && a.b && a.b.c || a.b.c.d;
const foo13 = a && a[j.k];
const foo14 = a.b && a.b[c.d];
const foo15 = foo[bar] && foo[bar].baz;
const foo16 = foo[0] && foo[0].bar;
const foo17 = a && b.c && b.c.d;
const foo18 = a && b.c && b.c.d.e;
this.a.b && this.b.c;
this.a.b && this.a.b.c;
this.a && this.a.b && this.a.b.c;
x.a.b && this.a.b.c;
this.a.b && x.a.b.c;
