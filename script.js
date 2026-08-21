// ===== 字体列表 =====
const FONT_LIST = [
  { label: 'Accanthis ADF Std', family: 'AccanthisADFStd' },
  { label: 'Amatic SC', family: 'AmaticSC' },
  { label: 'Arimo', family: 'Arimo' },
  { label: 'Balthazar', family: 'Balthazar' },
  { label: 'Bangers', family: 'Bangers' },
  { label: 'Builder Extended', family: 'BuilderExtended' },
  { label: 'Builder Mono', family: 'BuilderMono' },
  { label: 'Builder Sans', family: 'BuilderSans' },
  { label: 'Comic Neue Angular', family: 'ComicNeueAngular' },
  { label: 'Creepster', family: 'Creepster' },
  { label: 'Denk One', family: 'DenkOne' },
  { label: 'Fondamento', family: 'Fondamento' },
  { label: 'Fredoka One', family: 'FredokaOne' },
  { label: 'Grenze Gotisch', family: 'GrenzeGotisch' },
  { label: 'Guru', family: 'Guru' },
  { label: 'Highway Gothic', family: 'HighwayGothic' },
  { label: 'Inconsolata', family: 'Inconsolata' },
  { label: 'Indie Flower', family: 'IndieFlower' },
  { label: 'Josefin Sans', family: 'JosefinSans' },
  { label: 'Jura', family: 'Jura' },
  { label: 'Kalam', family: 'Kalam' },
  { label: 'Luckiest Guy', family: 'LuckiestGuy' },
  { label: 'Merriweather', family: 'Merriweather' },
  { label: 'Michroma', family: 'Michroma' },
  { label: 'Montserrat', family: 'Montserrat' },
  { label: 'Nunito', family: 'Nunito' },
  { label: 'Oswald', family: 'Oswald' },
  { label: 'Patrick Hand', family: 'PatrickHand' },
  { label: 'Permanent Marker', family: 'PermanentMarker' },
  { label: 'Press Start 2P', family: 'PressStart2P' },
  { label: 'Roboto', family: 'Roboto' },
  { label: 'Roboto Condensed', family: 'RobotoCondensed' },
  { label: 'Roboto Mono', family: 'RobotoMono' },
  { label: 'Roman Antique', family: 'RomanAntique' },
  { label: 'Sarpanch', family: 'Sarpanch' },
  { label: 'Source Sans Pro', family: 'SourceSansPro' },
  { label: 'Special Elite', family: 'SpecialElite' },
  { label: 'Titillium Web', family: 'TitilliumWeb' },
  { label: 'Ubuntu', family: 'Ubuntu' },
  { label: 'Zekton', family: 'Zekton' }
];

// ===== 多语言字典 =====
const I18N = {
  zh: {
    brandTitle: 'Nullscape Lobby Title Generator',
    brandSub: '为 Nullscaper 生成更好的大厅标题',
    textLabel: '文本内容',
    textPlaceholder: '输入标题，用 || 分隔分段...',
    textHint: '使用 || 分隔多个分段，每个分段可单独设置样式（单个 | 不会分段）',
    segmentLabel: '分段',
    textColorLabel: '文本颜色',
    startColorLabel: '起始色',
    midColorLabel: '中间色',
    endColorLabel: '结束色',
    edgeStartColorLabel: '两边色',
    centerColorLabel: '中间色',
    solid: '纯色',
    gradient: '渐变',
    three: '三色渐变',
    rainbow: '🌈 彩虹',
    edge: '两边→中间',
    strokeSettings: '描边设置',
    enable: '启用',
    thickness: '厚度',
    opacity: '透明度',
    fontLabel: '字体',
    textStyleLabel: '文本样式',
    bold: '粗体',
    italic: '斜体',
    underline: '下划线',
    strikethrough: '删除线',
    previewTitle: '预览',
    codeTitle: '生成的 Rich Text 代码',
    copyBtn: '📋 复制',
    resetBtn: '↺ 重置',
    presetTitle: '预设示例',
    presetBadge: '点击加载',
    langLabel: '中文'
  },
  en: {
    brandTitle: 'Nullscape Lobby Title Generator',
    brandSub: 'Generate better lobby titles for Nullscaper',
    textLabel: 'Text',
    textPlaceholder: 'Enter title, use || to split segments...',
    textHint: 'Use || to split segments; each segment can be styled independently (single | is not a separator)',
    segmentLabel: 'Segment',
    textColorLabel: 'Text Color',
    startColorLabel: 'Start Color',
    midColorLabel: 'Mid Color',
    endColorLabel: 'End Color',
    edgeStartColorLabel: 'Edge Color',
    centerColorLabel: 'Center Color',
    solid: 'Solid',
    gradient: 'Gradient',
    three: '3-Color',
    rainbow: '🌈 Rainbow',
    edge: 'Edges→Mid',
    strokeSettings: 'Stroke Settings',
    enable: 'Enable',
    thickness: 'Thickness',
    opacity: 'Opacity',
    fontLabel: 'Font',
    textStyleLabel: 'Text Style',
    bold: 'Bold',
    italic: 'Italic',
    underline: 'Underline',
    strikethrough: 'Strikethrough',
    previewTitle: 'Preview',
    codeTitle: 'Generated Rich Text Code',
    copyBtn: '📋 Copy',
    resetBtn: '↺ Reset',
    presetTitle: 'Presets',
    presetBadge: 'Click to load',
    langLabel: 'English'
  }
};

let currentLang = 'zh';

// ===== DOM 引用 =====
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const segmentTabs = document.getElementById('segmentTabs');

const textModeGroup = document.getElementById('textModeGroup');
const textStartColor = document.getElementById('textStartColor');
const textMidColor = document.getElementById('textMidColor');
const textEndColor = document.getElementById('textEndColor');
const textStartColorHex = document.getElementById('textStartColorHex');
const textMidColorHex = document.getElementById('textMidColorHex');
const textEndColorHex = document.getElementById('textEndColorHex');
const textGradientPreview = document.getElementById('textGradientPreview');

const strokeModeGroup = document.getElementById('strokeModeGroup');
const strokeStartColor = document.getElementById('strokeStartColor');
const strokeMidColor = document.getElementById('strokeMidColor');
const strokeEndColor = document.getElementById('strokeEndColor');
const strokeStartColorHex = document.getElementById('strokeStartColorHex');
const strokeMidColorHex = document.getElementById('strokeMidColorHex');
const strokeEndColorHex = document.getElementById('strokeEndColorHex');
const strokeGradientPreview = document.getElementById('strokeGradientPreview');
const optStroke = document.getElementById('optStroke');
const strokeColorArea = document.getElementById('strokeColorArea');
const strokeThickness = document.getElementById('strokeThickness');
const strokeTransparency = document.getElementById('strokeTransparency');
const strokeThicknessVal = document.getElementById('strokeThicknessVal');
const strokeTransparencyVal = document.getElementById('strokeTransparencyVal');

const fontSelect = document.getElementById('fontSelect');
const optBold = document.getElementById('optBold');
const optItalic = document.getElementById('optItalic');
const optUnderline = document.getElementById('optUnderline');
const optStrikethrough = document.getElementById('optStrikethrough');

const previewRender = document.getElementById('previewRender');
const codeContent = document.getElementById('codeContent');
const copyBtn = document.getElementById('copyBtn');
const resetBtn = document.getElementById('resetBtn');

const langToggle = document.getElementById('langToggle');
const langLabel = document.getElementById('langLabel');

// ===== 预设数据 =====
const PRESETS = {
  endurance: {
    text: 'ENDURANCE',
    textMode: 'gradient', textStart: '#87292B', textMid: '#B03A40', textEnd: '#F54B4E',
    strokeEnabled: false, strokeMode: 'solid', strokeStart: '#87292B', strokeMid: '#B03A40', strokeEnd: '#F54B4E',
    strokeThick: 2, strokeTrans: 0,
    bold: false, italic: false, underline: false, strike: false, font: 'BuilderSans'
  },
  celestial: {
    text: 'CELESTIAL',
    textMode: 'gradient', textStart: '#9E3862', textMid: '#C9467C', textEnd: '#F25597',
    strokeEnabled: false, strokeMode: 'solid', strokeStart: '#9E3862', strokeMid: '#C9467C', strokeEnd: '#F25597',
    strokeThick: 2, strokeTrans: 0,
    bold: false, italic: false, underline: false, strike: false, font: 'BuilderSans'
  },
  gliders: {
    text: '20 Gliders VS CELESTIAL',
    textMode: 'solid', textStart: '#96CBFF', textMid: '#96CBFF', textEnd: '#96CBFF',
    strokeEnabled: true, strokeMode: 'solid', strokeStart: '#692B64', strokeMid: '#692B64', strokeEnd: '#692B64',
    strokeThick: 2, strokeTrans: 0,
    bold: true, italic: false, underline: false, strike: false, font: 'BuilderSans'
  },
  vbs: {
    text: 'VOIDBOUND SCARF',
    textMode: 'gradient', textStart: '#8481A6', textMid: '#A7A3C7', textEnd: '#CBC6FF',
    strokeEnabled: false, strokeMode: 'solid', strokeStart: '#8481A6', strokeMid: '#A7A3C7', strokeEnd: '#CBC6FF',
    strokeThick: 2, strokeTrans: 0,
    bold: true, italic: false, underline: false, strike: false, font: 'BuilderSans'
  }
};

// ===== 默认分段样式 =====
function defaultSegment() {
  return {
    text: '',
    textMode: 'gradient', textStart: '#87292B', textMid: '#B03A40', textEnd: '#F54B4E',
    strokeEnabled: false, strokeMode: 'solid', strokeStart: '#87292B', strokeMid: '#B03A40', strokeEnd: '#F54B4E',
    strokeThick: 2, strokeTrans: 0,
    bold: false, italic: false, underline: false, strike: false, font: 'BuilderSans'
  };
}

// ===== 状态 =====
let segments = [];
let activeSegment = 0;

// ===== 模式按钮组辅助 =====
function getModeFromGroup(group) {
  const active = group.querySelector('.mode-btn.active');
  return active ? active.dataset.mode : 'gradient';
}

function setModeOnGroup(group, mode) {
  group.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
}

// ===== 初始化字体下拉 =====
FONT_LIST.forEach(f => {
  const opt = document.createElement('option');
  opt.value = f.family;
  opt.textContent = f.label;
  // 下拉选项内直接用真实字体预览（仅影响网页 UI，不改变生成的 Rich Text）
  opt.style.fontFamily = `'${f.family}', 'Segoe UI', sans-serif`;
  fontSelect.appendChild(opt);
});
fontSelect.value = 'BuilderSans';

// 让下拉框本身及选中项跟随当前字体显示
function applyFontSelectPreview() {
  const family = fontSelect.value;
  fontSelect.style.fontFamily = `'${family}', 'Segoe UI', sans-serif`;
  preloadFontFamily(family);
}

// ===== 颜色辅助函数 =====
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

function rgbToHex(r, g, b) {
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function lerpColor(c1, c2, t) {
  const r = Math.round(c1.r + (c2.r - c1.r) * t);
  const g = Math.round(c1.g + (c2.g - c1.g) * t);
  const b = Math.round(c1.b + (c2.b - c1.b) * t);
  return rgbToHex(r, g, b);
}

function hslToHex(h, s, l) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r, g, b;
  if (h < 60) { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else { r = c; g = 0; b = x; }
  return rgbToHex(Math.round((r + m) * 255), Math.round((g + m) * 255), Math.round((b + m) * 255));
}

// ===== 计算每个字符的颜色 =====
// mode: solid / gradient / three / rainbow / edge
function getCharacterColors(text, start, mid, end, mode) {
  const len = text.length;
  if (len === 0) return [];

  if (mode === 'rainbow') {
    const colors = [];
    for (let i = 0; i < len; i++) {
      const hue = (i / len) * 300;
      colors.push(hslToHex(hue, 1, 0.55));
    }
    return colors;
  }

  const startRgb = hexToRgb(start);
  const midRgb = hexToRgb(mid);
  const endRgb = hexToRgb(end);
  const colors = [];

  for (let i = 0; i < len; i++) {
    const t = len === 1 ? 0 : i / (len - 1);
    let color;
    switch (mode) {
      case 'gradient':
        color = lerpColor(startRgb, endRgb, t);
        break;
      case 'three':
        color = t < 0.5
          ? lerpColor(startRgb, midRgb, t * 2)
          : lerpColor(midRgb, endRgb, (t - 0.5) * 2);
        break;
      case 'edge': {
        const d = Math.abs(2 * t - 1); // 0 = 中间，1 = 两边
        color = lerpColor(endRgb, startRgb, d); // 两边=起始色，中间=结束色
        break;
      }
      case 'solid':
      default:
        color = start;
        break;
    }
    colors.push(color);
  }
  return colors;
}

// ===== 生成单个分段的 Rich Text =====
function buildSegmentHtml(seg) {
  const text = seg.text;
  if (!text) return '';

  const textSolid = seg.textMode === 'solid';
  const strokeOn = seg.strokeEnabled;
  const strokeSolid = seg.strokeMode === 'solid';
  const fontAttr = seg.font ? ` family="rbxasset://fonts/families/${seg.font}.json"` : '';
  const tColors = getCharacterColors(text, seg.textStart, seg.textMid, seg.textEnd, seg.textMode);
  const sColors = getCharacterColors(text, seg.strokeStart, seg.strokeMid, seg.strokeEnd, seg.strokeMode);
  const thick = seg.strokeThick;
  const trans = seg.strokeTrans;

  let html = '';

  if (textSolid && (!strokeOn || strokeSolid)) {
    // 纯色文本（且描边关闭或纯色描边）：单个 font 标签包裹整段
    let inner = text;
    if (strokeOn) {
      inner = `<stroke color="${seg.strokeStart}" thickness="${thick}" transparency="${trans}">${inner}</stroke>`;
    }
    html = `<font color="${seg.textStart}"${fontAttr}>${inner}</font>`;
  } else if (textSolid && strokeOn && !strokeSolid) {
    // 纯色文本 + 渐变描边：单个 font 包裹，内部逐字 stroke（保留描边渐变）
    let strokes = '';
    for (let i = 0; i < text.length; i++) {
      const sc = sColors[i] || seg.strokeStart;
      strokes += `<stroke color="${sc}" thickness="${thick}" transparency="${trans}">${text[i]}</stroke>`;
    }
    html = `<font color="${seg.textStart}"${fontAttr}>${strokes}</font>`;
  } else if (!textSolid && (!strokeOn || strokeSolid)) {
    // 渐变文本 + 纯色/无描边：逐字 font，可选单个 stroke 包裹
    let fonts = '';
    for (let i = 0; i < text.length; i++) {
      const tc = tColors[i] || seg.textStart;
      fonts += `<font color="${tc}"${fontAttr}>${text[i]}</font>`;
    }
    if (strokeOn && strokeSolid) {
      html = `<stroke color="${seg.strokeStart}" thickness="${thick}" transparency="${trans}">${fonts}</stroke>`;
    } else {
      html = fonts;
    }
  } else {
    // 渐变文本 + 渐变描边：逐字 font 包裹逐字 stroke
    for (let i = 0; i < text.length; i++) {
      const tc = tColors[i] || seg.textStart;
      const sc = sColors[i] || seg.strokeStart;
      html += `<font color="${tc}"${fontAttr}><stroke color="${sc}" thickness="${thick}" transparency="${trans}">${text[i]}</stroke></font>`;
    }
  }

  if (seg.bold) html = `<b>${html}</b>`;
  if (seg.italic) html = `<i>${html}</i>`;
  if (seg.underline) html = `<u>${html}</u>`;
  if (seg.strike) html = `<s>${html}</s>`;

  return html;
}

// ===== HTML 文本转义（仅用于预览层） =====
function escapeHtmlText(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ===== 生成分段预览用的 HTML（CSS 模拟 Roblox Rich Text 渲染） =====
// 仅用于网页预览；生成的 Rich Text 代码仍由 buildSegmentHtml 负责，
// <font> 标签内的 family 属性保持官方 rbxasset://fonts/families/<Family>.json 格式不变。
// 说明：
// 1. 下划线/删除线不再依赖 <u>/<s> 标签，而是直接画在每个字符 span 上，
//    装饰线颜色 = 该字符颜色（与渐变文本逐字同步）。
// 2. 开启描边时，<u>/<s> 的装饰线会被 -webkit-text-stroke 盖住，且装饰无法
//    传播进 display:inline-block 的描边层，因此采用双层结构：
//    底层 = 描边层（2× 厚度，外层一半可见），上层 = 绝对定位的填充 + 装饰线层。
function buildSegmentPreviewHtml(seg) {
  const text = seg.text;
  if (!text) return '';

  const fontFamily = seg.font || '';
  const textSolid = seg.textMode === 'solid';
  const strokeOn = seg.strokeEnabled;
  const strokeSolid = seg.strokeMode === 'solid';
  const tColors = getCharacterColors(text, seg.textStart, seg.textMid, seg.textEnd, seg.textMode);
  const sColors = getCharacterColors(text, seg.strokeStart, seg.strokeMid, seg.strokeEnd, seg.strokeMode);
  const thick = seg.strokeThick;
  const trans = seg.strokeTrans;

  const decos = [];
  if (seg.underline) decos.push('underline');
  if (seg.strike) decos.push('line-through');
  const decoStr = decos.join(' ');
  const needDeco = decos.length > 0;

  const fontStyle = (color) => `color:${color}; font-family:'${fontFamily}';`;
  const strokeRgba = (sc) => {
    const rgb = hexToRgb(sc);
    const alpha = 1 - trans;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  };

  let inner = '';

  if (textSolid && (!strokeOn || strokeSolid) && !needDeco) {
    // 纯色文本 + 单色描边/无描边：整段一个 span（保留字距与连字）
    let style = fontStyle(seg.textStart);
    if (strokeOn) {
      style += ` -webkit-text-stroke:${thick}px ${strokeRgba(seg.strokeStart)}; display:inline-block;`;
    }
    inner = `<span style="${style}">${escapeHtmlText(text)}</span>`;
  } else if (needDeco && !strokeOn && textSolid) {
    // 纯色文本 + 装饰线（无描边）：整段一个 span，装饰线颜色跟随文字色
    inner = `<span style="${fontStyle(seg.textStart)} text-decoration:${decoStr};">${escapeHtmlText(text)}</span>`;
  } else if (!needDeco) {
    // 渐变文本 / 渐变描边：逐字 span
    for (let i = 0; i < text.length; i++) {
      const tc = tColors[i] || seg.textStart;
      let style = fontStyle(tc);
      if (strokeOn) {
        const sc = sColors[i] || seg.strokeStart;
        style += ` -webkit-text-stroke:${thick}px ${strokeRgba(sc)}; display:inline-block;`;
      }
      inner += `<span style="${style}">${escapeHtmlText(text[i])}</span>`;
    }
  } else if (needDeco && strokeOn) {
    // 描边 + 装饰线：双层结构，装饰线画在上层（描边之上），颜色逐字同步
    let strokeLayer = '';
    let fillLayer = '';
    for (let i = 0; i < text.length; i++) {
      const tc = tColors[i] || seg.textStart;
      const sc = sColors[i] || seg.strokeStart;
      const ch = escapeHtmlText(text[i]);
      // 底层：描边层，厚度 ×2（内半被上层填充覆盖，外半 = 视觉厚度 thick）
      strokeLayer += `<span style="${fontStyle(tc)} -webkit-text-stroke:${thick * 2}px ${strokeRgba(sc)};">${ch}</span>`;
      // 上层：填充 + 装饰线，描边清零，装饰线颜色 = 字符颜色
      fillLayer += `<span style="${fontStyle(tc)} -webkit-text-stroke:0; text-decoration:${decoStr};">${ch}</span>`;
    }
    inner = `<span style="position:relative; display:inline-block; text-align:center;">` +
      `<span style="display:inline-block;">${strokeLayer}</span>` +
      `<span style="position:absolute; top:0; left:0; width:100%;">${fillLayer}</span>` +
      `</span>`;
  } else {
    // 渐变文本 + 装饰线（无描边）：逐字 span，装饰线颜色逐字同步
    for (let i = 0; i < text.length; i++) {
      const tc = tColors[i] || seg.textStart;
      inner += `<span style="${fontStyle(tc)} text-decoration:${decoStr};">${escapeHtmlText(text[i])}</span>`;
    }
  }

  if (seg.bold) inner = `<b>${inner}</b>`;
  if (seg.italic) inner = `<i>${inner}</i>`;

  return inner;
}

// ===== 分段拆分（仅 || 触发分段，单个 | 不拆分） =====
function splitText(raw) {
  return raw.split('||');
}

function reconcileSegments(parts) {
  const prev = segments;
  segments = parts.map((text, i) => {
    if (prev[i]) return Object.assign({}, prev[i], { text });
    return Object.assign({}, defaultSegment(), { text });
  });
}

// ===== 控件 <-> 分段状态同步 =====
function readControlsToSegment(i) {
  const s = segments[i];
  if (!s) return;
  s.textMode = getModeFromGroup(textModeGroup);
  s.textStart = textStartColor.value;
  s.textMid = textMidColor.value;
  s.textEnd = textEndColor.value;
  s.strokeEnabled = optStroke.checked;
  s.strokeMode = getModeFromGroup(strokeModeGroup);
  s.strokeStart = strokeStartColor.value;
  s.strokeMid = strokeMidColor.value;
  s.strokeEnd = strokeEndColor.value;
  s.strokeThick = parseFloat(strokeThickness.value) || 1;
  s.strokeTrans = parseFloat(strokeTransparency.value) || 0;
  s.bold = optBold.checked;
  s.italic = optItalic.checked;
  s.underline = optUnderline.checked;
  s.strike = optStrikethrough.checked;
  s.font = fontSelect.value;
}

function setStrokeAreaEnabled(enabled) {
  strokeColorArea.style.opacity = enabled ? '1' : '0.4';
  strokeColorArea.style.pointerEvents = enabled ? 'auto' : 'none';
}

function loadSegmentToControls(i) {
  const s = segments[i] || defaultSegment();

  setModeOnGroup(textModeGroup, s.textMode);
  textStartColor.value = s.textStart;
  textStartColorHex.value = s.textStart;
  textMidColor.value = s.textMid;
  textMidColorHex.value = s.textMid;
  textEndColor.value = s.textEnd;
  textEndColorHex.value = s.textEnd;

  setModeOnGroup(strokeModeGroup, s.strokeMode);
  strokeStartColor.value = s.strokeStart;
  strokeStartColorHex.value = s.strokeStart;
  strokeMidColor.value = s.strokeMid;
  strokeMidColorHex.value = s.strokeMid;
  strokeEndColor.value = s.strokeEnd;
  strokeEndColorHex.value = s.strokeEnd;

  optStroke.checked = s.strokeEnabled;
  setStrokeAreaEnabled(s.strokeEnabled);

  strokeThickness.value = s.strokeThick;
  strokeThicknessVal.textContent = s.strokeThick;
  strokeTransparency.value = s.strokeTrans;
  strokeTransparencyVal.textContent = s.strokeTrans;

  fontSelect.value = s.font || 'BuilderSans';
  applyFontSelectPreview();
  optBold.checked = s.bold;
  optItalic.checked = s.italic;
  optUnderline.checked = s.underline;
  optStrikethrough.checked = s.strike;

  refreshColorModeUI('text');
  refreshColorModeUI('stroke');
}

// ===== 颜色模式 UI：显隐 + 标签 + 预览条 =====
function refreshColorModeUI(prefix) {
  const group = document.getElementById(prefix + 'ModeGroup');
  const mode = getModeFromGroup(group);
  const showStart = mode !== 'rainbow';
  const showMid = mode === 'three';
  const showEnd = mode === 'gradient' || mode === 'three' || mode === 'edge';

  document.getElementById(prefix + 'StartColorGroup').style.display = showStart ? '' : 'none';
  document.getElementById(prefix + 'MidColorGroup').style.display = showMid ? '' : 'none';
  document.getElementById(prefix + 'EndColorGroup').style.display = showEnd ? '' : 'none';

  const dict = I18N[currentLang];
  document.getElementById(prefix + 'StartColorLabel').textContent =
    mode === 'edge' ? dict.edgeStartColorLabel : dict.startColorLabel;
  document.getElementById(prefix + 'MidColorLabel').textContent = dict.midColorLabel;
  document.getElementById(prefix + 'EndColorLabel').textContent =
    mode === 'edge' ? dict.centerColorLabel : dict.endColorLabel;

  updateGradientPreview(prefix);
}

function updateGradientPreview(prefix) {
  const group = document.getElementById(prefix + 'ModeGroup');
  const mode = getModeFromGroup(group);
  const start = document.getElementById(prefix + 'StartColor').value;
  const mid = document.getElementById(prefix + 'MidColor').value;
  const end = document.getElementById(prefix + 'EndColor').value;
  const el = document.getElementById(prefix + 'GradientPreview');

  let bg;
  switch (mode) {
    case 'solid':
      bg = start;
      break;
    case 'three':
      bg = `linear-gradient(90deg, ${start}, ${mid}, ${end})`;
      break;
    case 'edge':
      bg = `linear-gradient(90deg, ${start}, ${end}, ${start})`;
      break;
    case 'rainbow':
      bg = 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)';
      break;
    case 'gradient':
    default:
      bg = `linear-gradient(90deg, ${start}, ${end})`;
      break;
  }
  el.style.background = bg;
}

// ===== 分段标签渲染 =====
function renderSegmentTabs() {
  segmentTabs.innerHTML = '';
  const dict = I18N[currentLang];
  segments.forEach((seg, i) => {
    const btn = document.createElement('button');
    btn.className = 'segment-tab' + (i === activeSegment ? ' active' : '');
    btn.dataset.index = i;
    btn.type = 'button';

    const dot = document.createElement('span');
    dot.className = 'segment-dot';
    dot.style.background = seg.textMode === 'rainbow'
      ? 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)'
      : seg.textStart;
    btn.appendChild(dot);

    const label = document.createElement('span');
    label.textContent = `${dict.segmentLabel} ${i + 1}`;
    btn.appendChild(label);

    if (seg.text) {
      const text = document.createElement('span');
      text.className = 'segment-text';
      text.textContent = seg.text.length > 12 ? seg.text.slice(0, 12) + '…' : seg.text;
      btn.appendChild(text);
    }

    btn.title = seg.text;
    btn.addEventListener('click', () => selectSegment(i));
    segmentTabs.appendChild(btn);
  });
}

function selectSegment(i) {
  if (i === activeSegment || i < 0 || i >= segments.length) return;
  readControlsToSegment(activeSegment);
  activeSegment = i;
  loadSegmentToControls(i);
  updateOutput();
}

// ===== 输出渲染 =====
function renderOutput() {
  const full = segments.map(buildSegmentHtml).join('');
  const previewHtml = segments.map(buildSegmentPreviewHtml).join('');
  previewRender.innerHTML = previewHtml || '&nbsp;';
  codeContent.textContent = full;
}

function updateOutput() {
  const parts = splitText(textInput.value);
  reconcileSegments(parts);

  if (activeSegment >= segments.length) {
    activeSegment = segments.length - 1;
    loadSegmentToControls(activeSegment);
  }

  renderSegmentTabs();
  renderOutput();
  updateGradientPreview('text');
  updateGradientPreview('stroke');
  charCount.textContent = textInput.value.length;
}

// ===== 应用预设 =====
function applyPreset(name) {
  const p = PRESETS[name];
  if (!p) return;
  textInput.value = p.text;
  segments = [Object.assign({}, defaultSegment(), p, { text: p.text })];
  activeSegment = 0;
  loadSegmentToControls(0);
  updateOutput();
}

// ===== 复制 =====
function copyCode() {
  const code = codeContent.textContent;
  const dict = I18N[currentLang];
  const okMsg = currentLang === 'zh' ? '✅ 已复制' : '✅ Copied';
  navigator.clipboard.writeText(code).then(() => {
    copyBtn.innerHTML = okMsg;
    setTimeout(() => {
      copyBtn.innerHTML = dict.copyBtn;
    }, 1500);
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(okMsg);
  });
}

// ===== 重置 =====
function resetAll() {
  textInput.value = 'ENDURANCE';
  segments = [Object.assign({}, defaultSegment(), { text: 'ENDURANCE' })];
  activeSegment = 0;
  loadSegmentToControls(0);
  updateOutput();
}

// ===== 语言切换 =====
function setLanguage(lang) {
  currentLang = lang;
  const dict = I18N[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  if (langLabel) {
    langLabel.textContent = dict.langLabel || (lang === 'zh' ? '中文' : 'English');
  }

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  try {
    localStorage.setItem('preferredLang', lang);
  } catch (e) {}

  refreshColorModeUI('text');
  refreshColorModeUI('stroke');
  renderSegmentTabs();
}

function toggleLanguage() {
  const nextLang = currentLang === 'zh' ? 'en' : 'zh';
  if (langToggle) {
    langToggle.style.transition = 'transform 0.15s cubic-bezier(0.2, 0, 0, 1)';
    langToggle.style.transform = 'scale(0.92)';
    setTimeout(() => {
      langToggle.style.transform = 'scale(1)';
    }, 150);
  }
  setLanguage(nextLang);
}

// ===== 事件绑定 =====

// 文本输入（含字数限制）
textInput.addEventListener('input', () => {
  if (textInput.value.length > 50) {
    textInput.value = textInput.value.slice(0, 50);
  }
  updateOutput();
});

// 颜色选择器与 HEX 输入同步
function bindColorPair(pickerId, hexId) {
  const picker = document.getElementById(pickerId);
  const hex = document.getElementById(hexId);
  picker.addEventListener('input', () => {
    hex.value = picker.value;
    readControlsToSegment(activeSegment);
    updateOutput();
  });
  hex.addEventListener('input', () => {
    if (/^#[0-9a-f]{6}$/i.test(hex.value)) {
      picker.value = hex.value;
      readControlsToSegment(activeSegment);
      updateOutput();
    }
  });
}
bindColorPair('textStartColor', 'textStartColorHex');
bindColorPair('textMidColor', 'textMidColorHex');
bindColorPair('textEndColor', 'textEndColorHex');
bindColorPair('strokeStartColor', 'strokeStartColorHex');
bindColorPair('strokeMidColor', 'strokeMidColorHex');
bindColorPair('strokeEndColor', 'strokeEndColorHex');

// 模式按钮组
function setupModeGroup(groupId, prefix) {
  const group = document.getElementById(groupId);
  group.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      group.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      readControlsToSegment(activeSegment);
      refreshColorModeUI(prefix);
      updateOutput();
    });
  });
}
setupModeGroup('textModeGroup', 'text');
setupModeGroup('strokeModeGroup', 'stroke');

// 字体
fontSelect.addEventListener('change', () => {
  readControlsToSegment(activeSegment);
  applyFontSelectPreview();
  updateOutput();
});

// 样式开关
[optBold, optItalic, optUnderline, optStrikethrough].forEach(el => {
  el.addEventListener('change', () => {
    readControlsToSegment(activeSegment);
    updateOutput();
  });
});

// 描边启用
optStroke.addEventListener('change', () => {
  readControlsToSegment(activeSegment);
  setStrokeAreaEnabled(optStroke.checked);
  updateOutput();
});

// 描边参数
strokeThickness.addEventListener('input', () => {
  strokeThicknessVal.textContent = strokeThickness.value;
  readControlsToSegment(activeSegment);
  updateOutput();
});
strokeTransparency.addEventListener('input', () => {
  strokeTransparencyVal.textContent = strokeTransparency.value;
  readControlsToSegment(activeSegment);
  updateOutput();
});

// 预设按钮
document.querySelectorAll('.preset-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    applyPreset(this.dataset.preset);
  });
});

// 复制 / 重置
copyBtn.addEventListener('click', copyCode);
resetBtn.addEventListener('click', resetAll);

// 语言切换
if (langToggle) {
  langToggle.addEventListener('click', toggleLanguage);
}

// ===== 初始化 =====
(function init() {
  let savedLang = 'zh';
  try {
    const stored = localStorage.getItem('preferredLang');
    if (stored === 'en' || stored === 'zh') {
      savedLang = stored;
    }
  } catch (e) {}

  segments = [Object.assign({}, defaultSegment(), { text: textInput.value || 'ENDURANCE' })];
  activeSegment = 0;

  setLanguage(savedLang);
  loadSegmentToControls(0);
  updateOutput();
})();
