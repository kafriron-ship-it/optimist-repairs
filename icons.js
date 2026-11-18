// (רון) סמלים במקום אימוג'י — שכבת תצוגה בלבד.
// כל אימוג'י שמופיע בטקסט של הדף מוחלף בסמל קו (SVG בצבע הטקסט). הנתונים עצמם (גיליונות, ערכי שדות) לא משתנים.
// סמלים בסגנון Lucide (ISC). ✓ ✕ ✗ ✎ נשארים — הם תווים טיפוגרפיים, לא אימוג'י.
(function(){
  var P = {
    cal:   '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    plus:  '<path d="M5 12h14M12 5v14"/>',
    swap:  '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    cake:  '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20M7 8v3M12 8v3M17 8v3M7 4h.01M12 4h.01M17 4h.01"/>',
    clip:  '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    sun:   '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    csun:  '<path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M19.07 4.93l-1.41 1.41"/><path d="M15.95 12.65a4 4 0 0 0-5.93-4.13"/><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>',
    pen:   '<path d="M21.17 6.81a1 1 0 0 0-3.99-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/><path d="m15 5 4 4"/>',
    boat:  '<path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"/><path d="M21 14 10 2 3 14h18Z"/><path d="M10 2v16"/>',
    pin:   '<path d="M20 10c0 5-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    trash: '<path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    grid:  '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
    alarm: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3 2 6M22 6l-3-3M6.38 18.7 4 21M17.64 18.67 20 21"/>',
    warn:  '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
    help:  '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"/>',
    bell:  '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    link:  '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    timer: '<path d="M10 2h4M12 14l3-3"/><circle cx="12" cy="14" r="8"/>',
    star:  '<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>',
    hour:  '<path d="M5 22h14M5 2h14M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    note:  '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4M16 13H8M16 17H8M10 9H8"/>',
    okc:   '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    tool:  '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    down:  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    chat:  '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    up:    '<path d="m5 12 7-7 7 7M12 19V5"/>'
  };
  var E = {
    "📅":"cal","🗓":"cal","➕":"plus","🔄":"swap","🎂":"cake","📋":"clip","☀":"sun","🌤":"csun","✏":"pen","⛵":"boat",
    "📍":"pin","🕐":"clock","🗑":"trash","📊":"grid","⏰":"alarm","⚠":"warn","❓":"help","🔔":"bell","📥":"inbox","🔗":"link",
    "⏱":"timer","⭐":"star","⏳":"hour","📞":"phone","📝":"note","✅":"okc","🧰":"tool","⬇":"down","💬":"chat","⬆":"up",
    "🔴":"dot:#ef4444","🟠":"dot:#f59e0b","🟡":"dot:#eab308","🟢":"dot:#22c55e","🙋":"", "👥":"", "🙂":""
  };
  var RE = new RegExp("(" + Object.keys(E).join("|") + ")\\uFE0F?( ?)", "g");
  function has(t){ RE.lastIndex = 0; return RE.test(t); }
  function svg(k, end){   // end = הסמל בסוף הטקסט (בלי רווח אחריו)
    var c = end ? " siend" : "";
    if(k.indexOf("dot:") === 0) return '<svg class="si sidot' + c + '" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="6" fill="' + k.slice(4) + '"/></svg>';
    return '<svg class="si' + c + '" viewBox="0 0 24 24" aria-hidden="true">' + P[k] + '</svg>';
  }
  function escH(s){ return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  var SKIP = /^(SCRIPT|STYLE|TEXTAREA|TITLE|SELECT|OPTION|svg)$/;
  function fix(root){
    if(!root) return;
    var list = [];
    if(root.nodeType === 3){ if(has(root.nodeValue)) list.push(root); }
    else if(root.nodeType === 1 && !SKIP.test(root.nodeName)){
      var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
      while((n = w.nextNode())) if(has(n.nodeValue)) list.push(n);
    }
    list.forEach(function(t){
      var p = t.parentNode; if(!p || SKIP.test(p.nodeName)) return;
      var html = escH(t.nodeValue).replace(RE, function(m, e, sp, off, str){ var k = E[e]; return k ? svg(k, off + m.length === str.length) : ""; });
      var box = document.createElement("span"); box.innerHTML = html;
      var frag = document.createDocumentFragment(); while(box.firstChild) frag.appendChild(box.firstChild);
      p.replaceChild(frag, t);
    });
  }
  new MutationObserver(function(ms){
    ms.forEach(function(m){
      if(m.type === "characterData") fix(m.target);
      else for(var i = 0; i < m.addedNodes.length; i++) fix(m.addedNodes[i]);
    });
  }).observe(document.documentElement, {childList:true, subtree:true, characterData:true});
  var css = document.createElement("style");
  css.textContent = ".si{display:inline-block;width:1.1em;height:1.1em;vertical-align:-.18em;margin-inline-end:.32em;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}" +
    ".sidot{width:.75em;height:.75em;vertical-align:-.02em;margin-inline-end:.3em}.si.siend{margin-inline-end:0}";
  (document.head || document.documentElement).appendChild(css);
  window.deEmoji = fix;
})();
