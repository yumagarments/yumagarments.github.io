/* ---------- 錯視アート（白黒＋アクセント1色。色は CSS 変数に追従） ---------- */
const F = c => `style="fill:var(--${c})"`;
const S = (c, w = 4) => `style="fill:none;stroke:var(--${c});stroke-width:${w}"`;
const R = (n, f) => Array.from({ length: n }, (_, k) => f(k)).join("");
function art(i) {
  const v = [
    // 0 カフェウォール錯視
    () => `<rect width="400" height="400" ${F("bg")}/>` + R(8, r => R(6, c => `<rect x="${c * 80 - [0, 14, 28, 14][r % 4]}" y="${r * 50}" width="40" height="50" ${F("ink")}/>`) + `<line x1="0" y1="${r * 50}" x2="400" y2="${r * 50}" ${S("muted", 3)}/>`),
    // 1 透視の床
    () => `<rect width="400" height="400" ${F("bg")}/><circle cx="200" cy="140" r="56" ${F("accent")}/><rect y="160" width="400" height="240" ${F("bg")}/>`
        + R(17, k => `<line x1="200" y1="160" x2="${-600 + k * 75}" y2="400" ${S("ink", 2)}/>`)
        + R(9, k => { const y = 160 + 240 * Math.pow(k / 8, 2); return `<line x1="0" y1="${y}" x2="400" y2="${y}" ${S("ink", 2)}/>`; }),
    // 2 消失点トンネル
    () => R(14, k => { const t = Math.pow(0.8, k); return `<rect x="${250 - 250 * t}" y="${170 - 170 * t}" width="${400 * t}" height="${400 * t}" ${F(k % 2 ? "bg" : "ink")}/>`; })
        + [[0, 0], [400, 0], [0, 400], [400, 400]].map(([x, y]) => `<line x1="${x}" y1="${y}" x2="250" y2="170" ${S("accent", 2)}/>`).join(""),
    // 3 カニッツァの三角形
    () => `<rect width="400" height="400" ${F("bg")}/><polygon points="200,345 85,150 315,150" ${S("ink", 5)}/>`
        + [[200, 70], [70, 300], [330, 300]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="52" ${F("ink")}/>`).join("")
        + `<polygon points="200,70 70,300 330,300" ${F("bg")}/>`,
    // 4 同心円
    () => `<rect width="400" height="400" ${F("bg")}/>` + R(16, k => `<circle cx="${200 + k * 4}" cy="${200 - k * 2}" r="${300 - k * 18}" ${F(k % 2 ? "bg" : "ink")}/>`) + `<circle cx="264" cy="168" r="18" ${F("accent")}/>`,
    // 5 ミュラー・リヤー錯視
    () => `<rect width="400" height="400" ${F("bg")}/>`
        + `<line x1="110" y1="140" x2="290" y2="140" ${S("ink", 8)}/><polyline points="140,100 110,140 140,180" ${S("ink", 8)}/><polyline points="260,100 290,140 260,180" ${S("ink", 8)}/>`
        + `<line x1="110" y1="270" x2="290" y2="270" ${S("ink", 8)}/><polyline points="80,230 110,270 80,310" ${S("accent", 8)}/><polyline points="320,230 290,270 320,310" ${S("accent", 8)}/>`,
    // 6 タンブリング・ブロック
    () => { const s = 46, w = s * 0.866; let o = `<rect width="400" height="400" ${F("muted")}/>`;
        for (let r = -1; r < 7; r++) for (let c = -1; c < 7; c++) { const x = c * 2 * w + (r % 2 ? w : 0), y = r * 1.5 * s;
          o += `<polygon points="${x},${y - s} ${x + w},${y - s / 2} ${x},${y} ${x - w},${y - s / 2}" ${F("bg")}/><polygon points="${x - w},${y - s / 2} ${x},${y} ${x},${y + s} ${x - w},${y + s / 2}" ${F("ink")}/>`; }
        return o; },
    // 7 グリッド構成
    () => `<rect width="400" height="400" ${F("bg")}/><rect x="0" y="200" width="100" height="200" ${F("accent")}/>` + R(5, k => `<line x1="${k * 100}" y1="0" x2="${k * 100}" y2="400" ${S("ink", 2)}/><line x1="0" y1="${k * 100}" x2="400" y2="${k * 100}" ${S("ink", 2)}/>`),
    // 8 ヘルマン格子（交差点に灰色の点が見える）
    () => `<rect width="400" height="400" ${F("bg")}/>` + R(25, k => `<rect x="${12 + (k % 5) * 78}" y="${12 + Math.floor(k / 5) * 78}" width="64" height="64" ${F("ink")}/>`),
    // 9 エビングハウス錯視
    () => `<rect width="400" height="400" ${F("bg")}/><circle cx="110" cy="200" r="22" ${F("accent")}/>` + R(6, k => `<circle cx="${110 + 80 * Math.cos(k * Math.PI / 3)}" cy="${200 + 80 * Math.sin(k * Math.PI / 3)}" r="40" ${F("ink")}/>`)
        + `<circle cx="300" cy="200" r="22" ${F("accent")}/>` + R(8, k => `<circle cx="${300 + 40 * Math.cos(k * Math.PI / 4)}" cy="${200 + 40 * Math.sin(k * Math.PI / 4)}" r="9" ${F("ink")}/>`),
    // 10 ワイヤーフレーム（透視の製図）
    () => `<rect width="400" height="400" ${F("ink")}/><g style="fill:none;stroke:var(--bg);stroke-width:1.6">`
        + `<polygon points="50,235 200,150 350,235 200,320"/><polygon points="50,175 200,90 350,175 200,260"/>`
        + `<line x1="50" y1="175" x2="50" y2="235"/><line x1="200" y1="260" x2="200" y2="320"/><line x1="350" y1="175" x2="350" y2="235"/><line x1="200" y1="90" x2="200" y2="150" stroke-dasharray="3 6"/>`
        + `<ellipse cx="200" cy="175" rx="52" ry="30"/><line x1="200" y1="175" x2="200" y2="120"/><ellipse cx="200" cy="115" rx="26" ry="15"/>`
        + `<line x1="-20" y1="390" x2="420" y2="110" stroke-dasharray="2 10"/><line x1="20" y1="60" x2="390" y2="300" stroke-dasharray="1 8"/>`
        + `<path d="M -40 300 A 260 260 0 0 1 300 -20"/>`
        + [[50, 175], [200, 90], [350, 175], [200, 260], [50, 235], [350, 235], [200, 320]].map(([x, y]) => `<ellipse cx="${x}" cy="${y}" rx="9" ry="5"/>`).join("")
        + `<line x1="120" y1="285" x2="185" y2="250" style="stroke-width:1"/></g>`,
  ];
  return `<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${v[i % v.length]()}</svg>`;
}



/* 画像がないカードに錯視アートを描く */
document.querySelectorAll("[data-art]").forEach(el => { el.innerHTML = art(Number(el.dataset.art) || 0); });

/* 2 行に収まらないタイトルに印を付ける（ホバーで流す用） */
function markLongTitles() {
  document.querySelectorAll(".card h3").forEach(h => {
    const t = h.querySelector(".t"); if (!t) return;
    const long = t.scrollHeight > t.clientHeight + 1;
    h.closest(".card").classList.toggle("long", long);
    if (long) h.style.setProperty("--dur", Math.max(5, t.textContent.length * 0.32) + "s");
  });
}
markLongTitles();
document.fonts?.ready.then(markLongTitles);
addEventListener("resize", markLongTitles);

/* トップの絞り込み（#f=works など） */
const cards = document.querySelector("[data-filterable]");
function applyFilter() {
  const f = decodeURIComponent((location.hash.match(/^#f=(.+)$/) || [])[1] || "all");
  document.querySelectorAll(".filters [data-f]").forEach(a => a.classList.toggle("on", a.dataset.f === f));
  if (!cards) return;
  cards.querySelectorAll(".card").forEach(c => {
    c.hidden = !(f === "all" || c.dataset.kind === f || (c.dataset.tags || "").split(" ").includes(f));
  });
}
addEventListener("hashchange", applyFilter);
applyFilter();
