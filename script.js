'use strict';
/* ====== ustawienia strony – zmień tutaj ====== */
const CFG = {
  download: 'https://github.com/TWOJ-LOGIN/cw-el-client/releases/latest',   // link do instalatora (np. wydanie na GitHubie)
  discord: 'https://dsc.gg/cw-elclient',
};

/* ====== tłumaczenia ====== */
const T = {
  pl: {
    skip: 'Przejdź do treści', navLauncher: 'Launcher', navMods: 'W grze', navCommunity: 'Społeczność', navFaq: 'FAQ',
    h1: 'Minecraft w twoim stylu, od ekranu startowego.',
    lead: 'Cw-El Client to launcher z własnym ekranem startowym w grze, modami z Modrinth i logowaniem Microsoft. Java pobiera się sama, a mod Cw-El buduje się przy pierwszym starcie.',
    download: 'Pobierz launcher', seeGame: 'Zobacz, jak wygląda w grze', fine: 'Windows 10 i nowszy. Działa z kontami Microsoft i offline.',
    cap: 'Tak wygląda ekran startowy z moda. Najedź na menu, a logo kliknij pięć razy.',
    launcherT: 'Launcher, który robi robotę za ciebie', launcherP: 'Wszystko, czego potrzebujesz przed kliknięciem „Graj”, jest w jednym oknie. Resztą zajmuje się launcher.',
    f1t: 'Logowanie Microsoft', f1d: 'Logujesz się w oknie launchera. Token jest zapisany zaszyfrowany przez system, a hasła nikt nie widzi. Konta offline też działają.',
    f2t: 'Instancje', f2d: 'Osobne światy, mody i ustawienia dla każdej wersji. Duplikujesz, zmieniasz ikonę i kolor, ustawiasz serwer do automatycznego dołączania.',
    f3t: 'Fabric, Forge i NeoForge', f3d: 'Loader instaluje się sam. Fabric API dochodzi automatycznie, a jak plik gry się uszkodzi, launcher go naprawi.',
    f4t: 'Mody z Modrinth', f4d: 'Popularne mody na stronach, bez szukania na ślepo. Szukajka jest obok, gdy wiesz, czego chcesz.',
    f5t: 'Java bez zachodu', f5d: 'Wersja Javy dobiera się do Minecrafta i pobiera sama. Własną ścieżkę możesz wskazać w ustawieniach.',
    f6t: 'Skin w 3D i ustawienia pod ciebie', f6d: 'Obracasz swoją postać na stronie głównej. Wybierasz kolor akcentu, RAM, argumenty JVM i rozmiar okna.',
    modsT: 'Mod Cw-El w grze', modsP: 'Menu otwierasz prawym Shiftem. Każdy moduł włączasz i wyłączasz osobno. Spróbuj tutaj, po prawej widać efekt.',
    comT: 'Gracze z Cw-El widzą się nawzajem', comP: 'Jeśli ktoś gra przez Cw-El Launcher, ma gwiazdkę przy nicku nad głową i na liście graczy. Nie trzeba niczego ustawiać.',
    tabH: 'Lista graczy',
    c1: 'Konto Discord łączysz w ustawieniach launchera. Launcher dostaje tylko twój nick i ID.',
    c2: 'Ogłoszenia z serwera Discord pojawiają się jako pasek u góry launchera.',
    c3: 'Aktualizację instalujesz kodem z Discorda. Wpisujesz go raz, a launcher sprawdza nowe wydania sam.',
    c4: 'Mod buduje się sam dla wersji 1.19.4, 1.20.1, 1.20.4, 1.21.1, 1.21.4 i 1.21.8.',
    dlT: 'Zagraj w trzy kroki',
    s1t: 'Pobierz i zainstaluj', s1d: 'Uruchom instalator. Launcher sam zaktualizuje się, gdy pojawi się nowa wersja.',
    s2t: 'Zaloguj się', s2d: 'Konto Microsoft albo offline. Pierwsze logowanie otwiera okno w launcherze.',
    s3t: 'Wybierz instancję i kliknij Graj', s3d: 'Przy pierwszym starcie Fabric i mod Cw-El budują się kilka minut, a potem już nie.',
    faqT: 'Pytania, które padają najczęściej',
    q1: 'Czy logowanie jest bezpieczne?', a1: 'Logujesz się na stronie Microsoft w oknie launchera. Launcher nie widzi twojego hasła, a token odświeżania zapisuje zaszyfrowany przez system.',
    q2: 'Czy muszę mieć kupionego Minecrafta?', a2: 'Konta offline pozwalają grać w singlu, w LAN i na serwerach z wyłączonym trybem online. Serwery premium wymagają konta Microsoft z Minecraftem.',
    q3: 'Dlaczego pierwszy start moda trwa długo?', a3: 'Mod Cw-El jest budowany pod twoją wersję gry. Dzieje się to raz, potem launcher bierze gotowy plik.',
    q4: 'Gdzie zgłosić błąd albo pomysł?', a4: 'Na serwerze Discord. Dołącz i napisz, co się dzieje. Pomaga zrzut z zakładki Konsola w launcherze.',
    legal: 'Cw-El Client nie jest produktem Mojang Studios ani Microsoft i nie jest z nimi powiązany. Minecraft jest znakiem towarowym Mojang Studios.',
    m_fps: ['FPS', 'Liczba klatek na sekundę'], m_cps: ['CPS', 'Kliknięcia lewym i prawym na sekundę'], m_coords: ['Koordynaty', 'Pozycja XYZ'],
    m_keys: ['Klawisze', 'WASD i spacja na ekranie'], m_clock: ['Zegar', 'Aktualna godzina'], m_lyrics: ['Teksty piosenek', 'Tekst utworu ze Spotify'],
    m_sprint: ['Toggle Sprint', 'Sprint bez trzymania klawisza'], m_full: ['Fullbright', 'Pełna jasność w ciemności'], m_badges: ['Plakietki Cw-El', 'Gwiazdki przy graczach z launcherem'],
    sprintOn: '[Sprint: włączony]', playersH: 'Cw-El',
    ly: ['Zgasły światła nad miastem', 'a my jeszcze gramy', 'do rana nikt nie wraca'],
    soon: 'wkrótce', menu: ['Jeden gracz', 'Wielu graczy', 'Opcje', 'Cw-El Moduły', 'Wyjdź z gry'],
  },
  en: {
    skip: 'Skip to content', navLauncher: 'Launcher', navMods: 'In game', navCommunity: 'Community', navFaq: 'FAQ',
    h1: 'Minecraft your way, starting from the title screen.',
    lead: 'Cw-El Client is a launcher with its own in-game title screen, Modrinth mods and Microsoft sign-in. Java downloads itself, and the Cw-El mod builds on first launch.',
    download: 'Download the launcher', seeGame: 'See it in game', fine: 'Windows 10 or newer. Works with Microsoft and offline accounts.',
    cap: 'This is the title screen from the mod. Hover the menu and click the logo five times.',
    launcherT: 'A launcher that does the busywork', launcherP: 'Everything you need before pressing Play lives in one window. The launcher handles the rest.',
    f1t: 'Microsoft sign-in', f1d: 'You sign in inside the launcher window. The token is stored encrypted by your system and nobody sees your password. Offline accounts work too.',
    f2t: 'Instances', f2d: 'Separate worlds, mods and settings for every version. Duplicate them, change the icon and colour, set a server to join automatically.',
    f3t: 'Fabric, Forge and NeoForge', f3d: 'The loader installs itself. Fabric API arrives automatically, and if a game file gets corrupted the launcher repairs it.',
    f4t: 'Mods from Modrinth', f4d: 'Popular mods in pages, no blind searching. Search sits right next to them for when you know what you want.',
    f5t: 'Java without the hassle', f5d: 'The right Java for your Minecraft version is picked and downloaded for you. You can point to your own in settings.',
    f6t: '3D skin and settings your way', f6d: 'Spin your character on the home page. Pick an accent colour, RAM, JVM arguments and window size.',
    modsT: 'The Cw-El mod in game', modsP: 'Open the menu with Right Shift. Every module switches on and off on its own. Try it here and watch the preview on the right.',
    comT: 'Cw-El players can see each other', comP: 'Anyone playing through Cw-El Launcher gets a star by their name above their head and in the player list. No setup needed.',
    tabH: 'Player list',
    c1: 'You link your Discord account in launcher settings. The launcher only receives your name and ID.',
    c2: 'Announcements from the Discord server show up as a bar at the top of the launcher.',
    c3: 'You install updates with a code from Discord. Enter it once and the launcher checks for new releases on its own.',
    c4: 'The mod builds itself for versions 1.19.4, 1.20.1, 1.20.4, 1.21.1, 1.21.4 and 1.21.8.',
    dlT: 'Play in three steps',
    s1t: 'Download and install', s1d: 'Run the installer. The launcher updates itself when a new version appears.',
    s2t: 'Sign in', s2d: 'A Microsoft or an offline account. The first sign-in opens a window inside the launcher.',
    s3t: 'Pick an instance and press Play', s3d: 'On the first start Fabric and the Cw-El mod take a few minutes to build, and after that they do not.',
    faqT: 'Questions people ask most',
    q1: 'Is signing in safe?', a1: 'You sign in on the Microsoft page inside the launcher window. The launcher never sees your password and stores the refresh token encrypted by your system.',
    q2: 'Do I need to own Minecraft?', a2: 'Offline accounts let you play singleplayer, LAN and servers with online mode off. Premium servers need a Microsoft account that owns Minecraft.',
    q3: 'Why does the first launch of the mod take so long?', a3: 'The Cw-El mod is built for your game version. It happens once, then the launcher reuses the finished file.',
    q4: 'Where do I report a bug or an idea?', a4: 'On the Discord server. Join and tell us what happens. A copy of the Console tab from the launcher helps a lot.',
    legal: 'Cw-El Client is not a Mojang Studios or Microsoft product and is not affiliated with them. Minecraft is a trademark of Mojang Studios.',
    m_fps: ['FPS', 'Frames per second'], m_cps: ['CPS', 'Left and right clicks per second'], m_coords: ['Coordinates', 'XYZ position'],
    m_keys: ['Keystrokes', 'WASD and space on screen'], m_clock: ['Clock', 'Current time'], m_lyrics: ['Song lyrics', 'Lyrics from Spotify'],
    m_sprint: ['Toggle Sprint', 'Sprint without holding the key'], m_full: ['Fullbright', 'Full brightness in the dark'], m_badges: ['Cw-El badges', 'Stars next to launcher players'],
    sprintOn: '[Sprint: on]', playersH: 'Cw-El',
    ly: ['The lights went out over the city', 'and we are still playing', 'nobody comes home till dawn'],
    soon: 'soon', menu: ['Singleplayer', 'Multiplayer', 'Options', 'Cw-El Modules', 'Quit Game'],
  },
};
let lang = (() => { try { return localStorage.getItem('lang') || (navigator.language || 'pl').slice(0, 2); } catch { return 'pl'; } })();
if (!T[lang]) lang = 'pl';
const t = (k) => T[lang][k];
const $ = (s) => document.querySelector(s);

/* ====== sezon Halloween (jak w launcherze: 20 X – 2 XI, albo ?halloween) ====== */
const d0 = new Date();
const HW = /[?&]halloween\b/.test(location.search) || (d0.getMonth() === 9 && d0.getDate() >= 20) || (d0.getMonth() === 10 && d0.getDate() <= 2);
if (HW) document.body.classList.add('hw');

/* ====== linki ====== */
const dlOk = !/TWOJ-LOGIN/.test(CFG.download);
for (const id of ['dl', 'dl2']) $('#' + id).href = dlOk ? CFG.download : CFG.discord;
for (const id of ['dc-top', 'dc-foot']) $('#' + id).href = CFG.discord;

/* ====== moduły (podgląd HUD) ====== */
const MODS = [['fps', 1], ['cps', 1], ['coords', 1], ['keys', 0], ['clock', 0], ['lyrics', 1], ['sprint', 0], ['full', 0], ['badges', 1]];
const state = Object.fromEntries(MODS.map(([k, on]) => [k, !!on]));
function buildMods() {
  const ul = $('#mods'); ul.replaceChildren();
  for (const [k] of MODS) {
    const [name, desc] = t('m_' + k);
    const li = document.createElement('li');
    const sp = document.createElement('span');
    const b = document.createElement('b'); b.textContent = name; const sm = document.createElement('small'); sm.textContent = desc; sp.append(b, sm);
    const sw = document.createElement('button');
    sw.type = 'button'; sw.className = 'sw'; sw.setAttribute('role', 'switch'); sw.setAttribute('aria-checked', String(state[k])); sw.setAttribute('aria-label', name);
    sw.addEventListener('click', () => { state[k] = !state[k]; sw.setAttribute('aria-checked', String(state[k])); renderHud(); });
    li.append(sp, sw); ul.append(li);
  }
}
let fpsVal = 144, lyI = 0;
function renderHud() {
  const L = $('#hud-l'); L.replaceChildren();
  const line = (s) => { const e = document.createElement('span'); e.textContent = s; L.append(e); };
  if (state.fps) line('FPS: ' + fpsVal);
  if (state.cps) line('CPS: ' + (4 + (fpsVal % 5)) + ' | 3');
  if (state.coords) line('XYZ: 128.4 71.0 -302.7');
  if (state.clock) line(new Date().toLocaleTimeString('pl-PL', { hour12: false }));
  if (state.sprint) line(t('sprintOn'));
  $('#hud-keys').hidden = !state.keys;
  $('#hud').style.setProperty('--bright', state.full ? 1 : .62);
  const r = $('#hud-r'); r.hidden = !state.badges;
  if (state.badges) {
    r.replaceChildren(); const b = document.createElement('b'); b.textContent = '★ ' + t('playersH'); r.append(b);
    for (const n of ['Eksii_YT', 'nyxden_ofc']) { const s = document.createElement('span'); const st = document.createElement('s'); st.textContent = '★'; s.append(st, ' ' + n); r.append(s); }
  }
  const ly = $('#hud-ly'); ly.hidden = !state.lyrics;
  if (state.lyrics) {
    const a = t('ly'); ly.replaceChildren();
    const p = document.createElement('em'); p.textContent = a[(lyI + 2) % 3];
    const c = document.createElement('div'); c.textContent = a[lyI % 3];
    const n = document.createElement('em'); n.textContent = a[(lyI + 1) % 3];
    ly.append(p, c, n);
  }
}
setInterval(() => { fpsVal = 138 + Math.floor(Math.random() * 12); renderHud(); }, 1000);
setInterval(() => { lyI++; renderHud(); }, 3500);

/* ====== tłumaczenie strony ====== */
function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i]').forEach((e) => { const v = t(e.dataset.i); if (typeof v === 'string') e.textContent = v; });
  document.querySelectorAll('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  document.title = lang === 'en' ? 'Cw-El Client – Minecraft launcher' : 'Cw-El Client – launcher Minecrafta';
  $('#title').setAttribute('aria-label', lang === 'en' ? 'Cw-El in-game title screen' : 'Ekran startowy Cw-El w grze');
  buildMods(); renderHud(); if (typeof drawNow === 'function') drawNow();
}
document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => { lang = b.dataset.lang; try { localStorage.setItem('lang', lang); } catch { /* brak storage */ } applyLang(); }));

/* ====== ekran startowy z moda (canvas 320x200, ta sama logika co CwelUi.java) ====== */
const LOGO = [
  '...........##...........', '...........##...........', '..........####..........', '..........####..........',
  '.........##..##.........', '.........#...###........', '..............##........', '#############.###.######',
  '#############..##..#####', '.##.............##...##.', '.###.###........##..###.', '..##.##..........#..##..',
  '....###............##...', '....##.............##...', '...###............##....', '...##............###....',
  '..##..#..........##.##..', '.###.###........###.###.', '.##...##.............##.', '###.#..##............###',
  '######.##..#############', '#....#..##..#..........#', '........###.............', '.........##..##.........',
  '.........#####..........', '..........####..........', '...........##...........', '...........##..........'];
const GLYPH = {
  C: ['01111', '10000', '10000', '10000', '10000', '10000', '01111'], W: ['10001', '10001', '10001', '10101', '10101', '11011', '10001'],
  '-': ['00000', '00000', '00000', '11111', '00000', '00000', '00000'], E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  L: ['10000', '10000', '10000', '10000', '10000', '10000', '11111'], I: ['01110', '00100', '00100', '00100', '00100', '00100', '01110'],
  N: ['10001', '11001', '10101', '10011', '10001', '10001', '10001'], T: ['11111', '00100', '00100', '00100', '00100', '00100', '00100'],
};
const cv = $('#title'), cx = cv.getContext('2d'), W = cv.width, H = cv.height;
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const rnd = (() => { let s = 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; })();
const STARS = Array.from({ length: 70 }, () => ({ x: rnd(), y: rnd(), p: rnd() }));
const C = () => HW
  ? { a: '#ff7518', v: '#8a2be2', top: '#0b0510', mid: '#2a1033', hor: '#1e0a24', bot: '#070309' }
  : { a: '#f5b82e', v: '#7c5cff', top: '#070816', mid: '#1b1245', hor: '#120c2e', bot: '#05050c' };
let hover = -1, partyUntil = 0, clicks = 0, lastClick = 0, toast = '', toastUntil = 0;
const hue = (x) => `hsl(${Math.round((((x % 1) + 1) % 1) * 360)} 90% 62%)`;
const fillRect = (x, y, w, h, c) => { cx.fillStyle = c; cx.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h)); };
function grad(y0, y1, c0, c1) { const g = cx.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, c0); g.addColorStop(1, c1); cx.fillStyle = g; cx.fillRect(0, y0, W, y1 - y0); }
const P = { w: 150, h: 136, x: Math.round((W - 150) / 2), y: 22 };
const ROW = (i) => ({ x: P.x + 10, y: P.y + 52 + i * 14, w: P.w - 20, h: 12 });

function draw(ts) {
  const c = C(), party = ts < partyUntil, hy = Math.round(H * .68);
  grad(0, hy, c.top, c.mid); grad(hy, H, c.hor, c.bot);
  for (const s of STARS) { cx.globalAlpha = Math.max(0, .25 + .3 * Math.sin(ts / 600 + s.p * 6.28)); fillRect(s.x * W, s.y * (hy - 4), s.p > .88 ? 2 : 1, s.p > .88 ? 2 : 1, party ? hue(ts / 1500 + s.p) : '#fff'); }
  cx.globalAlpha = 1;
  if (HW) { // księżyc i dynie, jak w modzie
    for (let dy = -14; dy <= 14; dy++) { const hw = Math.sqrt(196 - dy * dy); fillRect(W * .82 - hw, hy * .3 + dy, hw * 2, 1, '#ffe6a8'); }
    for (const px of [W * .08, W * .93]) { fillRect(px - 6, hy - 14, 12, 12, '#ff7518'); fillRect(px - 1, hy - 17, 2, 3, '#3d7a1e'); fillRect(px - 4, hy - 10, 2, 2, '#ffe066'); fillRect(px + 2, hy - 10, 2, 2, '#ffe066'); }
  }
  const line = party ? hue(ts / 1200) : c.a;
  for (let k = 0; k < 6; k++) { cx.globalAlpha = Math.max(0, .19 - k * .035); fillRect(0, hy - k, W, 1, line); }
  cx.globalAlpha = .7; fillRect(0, hy, W, 1, line); cx.globalAlpha = .25; fillRect(0, hy + 1, W, 1, line); cx.globalAlpha = 1;
  fillRect(((ts % 5000) / 5000) * (W * 1.33) - W / 6, hy, W / 6, 1, '#fff0c0');
  const ph = (ts % 2400) / 2400;
  for (let k = 0; k < 10; k++) { const d = (k + ph) / 10, y = hy + 3 + d * d * (H - hy - 3); cx.globalAlpha = .06 + .22 * d; fillRect(0, y, W, 1, c.v); }
  cx.globalAlpha = 1;
  // panel
  fillRect(P.x - 1, P.y - 1, P.w + 2, P.h + 2, 'rgba(255,255,255,.22)'); fillRect(P.x, P.y, P.w, P.h, '#0b0c1a');
  fillRect(P.x + 8, P.y, P.w - 16, 1, party ? hue(ts / 700) : c.a);
  const logoCol = party ? hue(ts / 600) : (hover === 99 ? c.a : '#fff');
  LOGO.forEach((row, r) => { for (let q = 0; q < row.length; q++) if (row[q] === '#') fillRect(P.x + 10 + q * .9, P.y + 8 + r * .9, 1, 1, logoCol); });
  const word = (s, x, y, cell, col) => { let px = x; for (const ch of s) { const g = GLYPH[ch]; g.forEach((row, ry) => { for (let rx = 0; rx < 5; rx++) if (row[rx] === '1') fillRect(px + rx * cell, y + ry * cell, cell, cell, col); }); px += 6 * cell; } };
  word('CW-EL', P.x + 42, P.y + 8, 2, '#fff'); word('CLIENT', P.x + 43, P.y + 25, 1, party ? hue(ts / 500) : c.a);
  fillRect(P.x + 10, P.y + 42, P.w - 20, 1, 'rgba(255,255,255,.14)');
  cx.font = '9px "Pixelify Sans", monospace'; cx.textBaseline = 'middle'; cx.textAlign = 'left';
  t('menu').forEach((label, i) => {
    const r = ROW(i), on = hover === i;
    fillRect(r.x, r.y, r.w, r.h, on ? 'rgba(255,255,255,.14)' : 'rgba(255,255,255,.05)');
    fillRect(r.x, r.y + 1, 2, r.h - 2, on ? (party ? hue(ts / 500 + i * .1) : c.a) : 'rgba(245,184,46,.4)');
    cx.fillStyle = on ? '#fff' : '#cfd2ff'; cx.fillText(label, r.x + 8, r.y + r.h / 2 + 1);
  });
  cx.fillStyle = '#8b8fa3'; cx.font = '7px "Pixelify Sans", monospace'; cx.fillText('v1.11', P.x + P.w - 26, P.y + 13);
  if (party) { cx.fillStyle = hue(ts / 400); cx.textAlign = 'center'; cx.font = '8px "Pixelify Sans", monospace'; cx.fillText('★ CW-EL PARTY ★', W / 2, P.y + P.h + 12); cx.textAlign = 'left'; }
  if (toast && ts < toastUntil) { cx.font = '8px "Pixelify Sans", monospace'; const w = cx.measureText(toast).width + 12; fillRect(W / 2 - w / 2, H - 22, w, 14, 'rgba(0,0,0,.7)'); cx.fillStyle = '#fff'; cx.textAlign = 'center'; cx.fillText(toast, W / 2, H - 14); cx.textAlign = 'left'; }
}
let raf = 0;
function loop(ts) { draw(ts); raf = requestAnimationFrame(loop); }
function drawNow() { draw(performance.now()); }
function at(e) { const r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width * W, y: (e.clientY - r.top) / r.height * H }; }
function hit(p) {
  if (p.x > P.x + 8 && p.x < P.x + 38 && p.y > P.y + 6 && p.y < P.y + 36) return 99;
  for (let i = 0; i < 5; i++) { const r = ROW(i); if (p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h) return i; }
  return -1;
}
cv.addEventListener('mousemove', (e) => { hover = hit(at(e)); cv.style.cursor = hover >= 0 ? 'pointer' : 'default'; if (RM) drawNow(); });
cv.addEventListener('mouseleave', () => { hover = -1; if (RM) drawNow(); });
cv.addEventListener('click', (e) => {
  const h = hit(at(e)), ts = performance.now();
  if (h === 99) { if (ts - lastClick > 2000) clicks = 0; lastClick = ts; if (++clicks >= 5) { clicks = 0; partyUntil = ts + 9000; } }
  else if (h === 3) $('#moduly').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' });
  else if (h >= 0) { toast = t('menu')[h] + ' – ' + t('soon'); toastUntil = ts + 1800; }
  if (RM) drawNow();
});

applyLang();
(document.fonts && document.fonts.load ? document.fonts.load('9px "Pixelify Sans"') : Promise.resolve()).catch(() => {}).finally(() => { if (RM) drawNow(); else raf = requestAnimationFrame(loop); });
