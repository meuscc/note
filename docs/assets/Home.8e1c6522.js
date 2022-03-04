import { d as c, i as u, t as b, f as p } from "./vendor.665b1433.js";
const x = b(
  '<section class="card"><h1 class="text-2xl font-bold">Home</h1><p class="mt-4">This is the home page.</p><div class="flex items-center space-x-2"><button class="border rounded-lg px-2 border-gray-900">-</button><div class="i-mdi-alarm text-orange-400"></div><output class="p-10px"></output><button class="border rounded-lg px-2 border-gray-900">+ddddsddsd\u58EB\u5927\u592B\u901F\u5EA6\u53D1\u58EB\u5927\u592B\u5341\u5206\u58EB\u5927\u592B</button></div></section>'
);
function $() {
  const [e, t] = c(0);
  return (() => {
    const l = x.cloneNode(!0),
      i = l.firstChild,
      o = i.nextSibling,
      d = o.nextSibling,
      s = d.firstChild,
      r = s.nextSibling,
      n = r.nextSibling,
      a = n.nextSibling;
    return (
      (s.$$click = () => t(e() - 1)), u(n, e), (a.$$click = () => t(e() + 1)), l
    );
  })();
}
p(["click"]);
export { $ as default };
