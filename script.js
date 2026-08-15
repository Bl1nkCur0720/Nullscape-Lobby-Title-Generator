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

// ===== DOM 引用 =====
const textInput = document.getElementById('textInput');
const textStartColor = document.getElementById('textStartColor');
const textEndColor = document.getElementById('textEndColor');
const textStartColorHex = document.getElementById('textStartColorHex');
const textEndColorHex = document.getElementById('textEndColorHex');
const textGradientPreview = document.getElementById('textGradientPreview');
const textModeGroup = document.getElementById('textModeGroup');

const strokeStartColor = document.getElementById('strokeStartColor');
const strokeEndColor = document.getElementById('strokeEndColor');
const strokeStartColorHex = document.getElementById('strokeStartColorHex');
const strokeEndColorHex = document.getElementById('strokeEndColorHex');
const strokeGradientPreview = document.getElementById('strokeGradientPreview');
const strokeModeGroup = document.getElementById('strokeModeGroup');

const fontSelect = document.getElementById('fontSelect');
const optBold = document.getElementById('optBold');
const optItalic = document.getElementById('optItalic');
const optUnderline = document.getElementById('optUnderline');
const optStrikethrough = document.getElementById('optStrikethrough');
const optStroke = document.getElementById('optStroke');
const strokeThickness = document.getElementById('strokeThickness');
const strokeTransparency = document.getElementById('strokeTransparency');
const strokeThicknessVal = document.getElementById('strokeThicknessVal');
const strokeTransparencyVal = document.getElementById('strokeTransparencyVal');
const strokeColorArea = document.getElementById('strokeColorArea');
const previewRender = document.getElementById('previewRender');
const codeContent = document.getElementById('codeContent');
const copyBtn = document.getElementById('copyBtn');
const resetBtn = document.getElementById('resetBtn');
const charCount = document.getElementById('charCount');

// ===== 预设数据 =====
const PRESETS = {
  endurance: {
    text: 'ENDURANCE',
    textMode: 'gradient',
    textStart: '#87292B',
    textEnd: '#F54B4E',
    strokeEnabled: false,
    strokeMode: 'solid',
    strokeStart: '#87292B',
    strokeEnd: '#F54B4E',
    strokeThick: 2,
    strokeTrans: 0,
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    font: 'BuilderSans'
  },
  celestial: {
    text: 'CELESTIAL',
    textMode: 'gradient',
    textStart: '#9E3862',
    textEnd: '#F25597',
    strokeEnabled: false,
    strokeMode: 'solid',
    strokeStart: '#9E3862',
    strokeEnd: '#F25597',
    strokeThick: 2,
    strokeTrans: 0,
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    font: 'BuilderSans'
  },
  gliders: {
    text: '20 Gliders VS CELESTIAL',
    textMode: 'solid',
    textStart: '#96CBFF',
    textEnd: '#96CBFF',
    strokeEnabled: true,
    strokeMode: 'solid',
    strokeStart: '#692B64',
    strokeEnd: '#692B64',
    strokeThick: 2,
    strokeTrans: 0,
    bold: true,
    italic: false,
    underline: false,
    strike: false,
    font: 'BuilderSans'
  },
  vbs: {
    text: 'VOIDBOUND SCARF',
    textMode: 'gradient',
    textStart: '#8481A6',
    textEnd: '#CBC6FF',
    strokeEnabled: false,
    strokeMode: 'solid',
    strokeStart: '#8481A6',
    strokeEnd: '#CBC6FF',
    strokeThick: 2,
    strokeTrans: 0,
    bold: true,
    italic: false,
    underline: false,
    strike: false,
    font: 'BuilderSans'
  }
};

// ===== 获取/设置模式 =====
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
  fontSelect.appendChild(opt);
});
fontSelect.value = 'BuilderSans';

// ===== 辅助函数 =====
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}

function rgbToHex(r, g, b) {
  return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`;
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

function getCharacterColors(text, start, end, mode) {
  const len = text.length;
  if (len === 0) return [];
  if (mode === 'rainbow') {
    const colors = [];
    for (let i = 0; i < len; i++) {
      const hue = (i / len) * 300;
      colors.push(hslToHex(hue, 1, 0.55));
    }
    return colors;
  } else if (mode === 'gradient') {
    const startRgb = hexToRgb(start);
    const endRgb = hexToRgb(end);
    const colors = [];
    for (let i = 0; i < len; i++) {
      const t = len === 1 ? 0 : i / (len - 1);
      colors.push(lerpColor(startRgb, endRgb, t));
    }
    return colors;
  } else { // solid
    const colors = [];
    for (let i = 0; i < len; i++) {
      colors.push(start);
    }
    return colors;
  }
}

// ===== 生成 Rich Text =====
function generateRichText() {
  const text = textInput.value || ' ';
  const fontFamily = fontSelect.value;

  const textMode = getModeFromGroup(textModeGroup);
  const textColors = getCharacterColors(text, textStartColor.value, textEndColor.value, textMode);

  const strokeMode = getModeFromGroup(strokeModeGroup);
  const strokeColors = getCharacterColors(text, strokeStartColor.value, strokeEndColor.value, strokeMode);

  const bold = optBold.checked;
  const italic = optItalic.checked;
  const underline = optUnderline.checked;
  const strike = optStrikethrough.checked;
  const strokeEnabled = optStroke.checked;
  const strokeThick = parseFloat(strokeThickness.value) || 1;
  const strokeTrans = parseFloat(strokeTransparency.value) || 0;

  let result = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const charColor = textColors[i] || textStartColor.value;
    const strokeColor = strokeColors[i] || strokeStartColor.value;
    let charTag = `<font color="${charColor}"`;
    if (fontFamily) {
      charTag += ` family="rbxasset://fonts/families/${fontFamily}.json"`;
    }
    charTag += `>${char}</font>`;

    if (strokeEnabled) {
      charTag = `<stroke color="${strokeColor}" thickness="${strokeThick}" transparency="${strokeTrans}">${charTag}</stroke>`;
    }
    result += charTag;
  }

  let final = result;
  if (bold) final = `<b>${final}</b>`;
  if (italic) final = `<i>${final}</i>`;
  if (underline) final = `<u>${final}</u>`;
  if (strike) final = `<s>${final}</s>`;

  return final;
}

// ===== 将 stroke 标签转换为 CSS 描边（用于预览） =====
function convertStrokeForPreview(html) {
  return html.replace(/<stroke\s+color="([^"]*)"\s+thickness="([^"]*)"\s+transparency="([^"]*)"\s*>(.*?)<\/stroke>/gi, (match, color, thick, transp, inner) => {
    const alpha = 1 - parseFloat(transp);
    const rgb = hexToRgb(color);
    const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    return `<span style="-webkit-text-stroke: ${thick}px ${rgba}; -webkit-text-stroke-color: ${rgba}; display:inline-block;">${inner}</span>`;
  });
}

// ===== 更新预览和代码 =====
function updateOutput() {
  const rawText = textInput.value || ' ';
  const rich = generateRichText();
  const previewHtml = convertStrokeForPreview(rich);
  previewRender.innerHTML = previewHtml;
  codeContent.textContent = rich;
  charCount.textContent = rawText.length;

  // 更新渐变预览条（文本）
  const textMode = getModeFromGroup(textModeGroup);
  if (textMode === 'rainbow') {
    textGradientPreview.style.background = 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)';
  } else {
    textGradientPreview.style.background = `linear-gradient(90deg, ${textStartColor.value}, ${textEndColor.value})`;
  }

  // 更新渐变预览条（描边）
  const strokeMode = getModeFromGroup(strokeModeGroup);
  if (strokeMode === 'rainbow') {
    strokeGradientPreview.style.background = 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #8b00ff)';
  } else {
    strokeGradientPreview.style.background = `linear-gradient(90deg, ${strokeStartColor.value}, ${strokeEndColor.value})`;
  }
}

// ===== 应用预设 =====
function applyPreset(name) {
  const p = PRESETS[name];
  if (!p) return;
  textInput.value = p.text;
  textStartColor.value = p.textStart;
  textEndColor.value = p.textEnd;
  textStartColorHex.value = p.textStart;
  textEndColorHex.value = p.textEnd;
  setModeOnGroup(textModeGroup, p.textMode);

  strokeStartColor.value = p.strokeStart;
  strokeEndColor.value = p.strokeEnd;
  strokeStartColorHex.value = p.strokeStart;
  strokeEndColorHex.value = p.strokeEnd;
  setModeOnGroup(strokeModeGroup, p.strokeMode);

  optStroke.checked = p.strokeEnabled;
  strokeThickness.value = p.strokeThick;
  strokeThicknessVal.textContent = p.strokeThick;
  strokeTransparency.value = p.strokeTrans;
  strokeTransparencyVal.textContent = p.strokeTrans;
  // 更新描边区域可用状态
  strokeColorArea.style.opacity = p.strokeEnabled ? '1' : '0.4';
  strokeColorArea.style.pointerEvents = p.strokeEnabled ? 'auto' : 'none';

  optBold.checked = p.bold;
  optItalic.checked = p.italic;
  optUnderline.checked = p.underline;
  optStrikethrough.checked = p.strike;

  if (p.font) {
    fontSelect.value = p.font;
  }

  updateOutput();
}

// ===== 事件绑定 =====
textInput.addEventListener('input', updateOutput);

// 文本颜色
[textStartColor, textEndColor].forEach(el => el.addEventListener('input', updateOutput));
textStartColorHex.addEventListener('input', () => {
  if (/^#[0-9a-f]{6}$/i.test(textStartColorHex.value)) {
    textStartColor.value = textStartColorHex.value;
    updateOutput();
  }
});
textEndColorHex.addEventListener('input', () => {
  if (/^#[0-9a-f]{6}$/i.test(textEndColorHex.value)) {
    textEndColor.value = textEndColorHex.value;
    updateOutput();
  }
});

// 描边颜色
[strokeStartColor, strokeEndColor].forEach(el => el.addEventListener('input', updateOutput));
strokeStartColorHex.addEventListener('input', () => {
  if (/^#[0-9a-f]{6}$/i.test(strokeStartColorHex.value)) {
    strokeStartColor.value = strokeStartColorHex.value;
    updateOutput();
  }
});
strokeEndColorHex.addEventListener('input', () => {
  if (/^#[0-9a-f]{6}$/i.test(strokeEndColorHex.value)) {
    strokeEndColor.value = strokeEndColorHex.value;
    updateOutput();
  }
});

// 模式按钮组
function setupModeGroup(group, updateFn) {
  group.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      group.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      if (updateFn) updateFn();
    });
  });
}
setupModeGroup(textModeGroup, updateOutput);
setupModeGroup(strokeModeGroup, updateOutput);

// 字体
fontSelect.addEventListener('change', updateOutput);

// 样式
optBold.addEventListener('change', updateOutput);
optItalic.addEventListener('change', updateOutput);
optUnderline.addEventListener('change', updateOutput);
optStrikethrough.addEventListener('change', updateOutput);

// 描边启用
optStroke.addEventListener('change', () => {
  const enabled = optStroke.checked;
  strokeColorArea.style.opacity = enabled ? '1' : '0.4';
  strokeColorArea.style.pointerEvents = enabled ? 'auto' : 'none';
  updateOutput();
});
strokeThickness.addEventListener('input', () => {
  strokeThicknessVal.textContent = strokeThickness.value;
  updateOutput();
});
strokeTransparency.addEventListener('input', () => {
  strokeTransparencyVal.textContent = strokeTransparency.value;
  updateOutput();
});

// 预设按钮
document.querySelectorAll('.preset-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    applyPreset(this.dataset.preset);
  });
});

// 复制（仅保留一个复制按钮）
function copyCode() {
  const code = codeContent.textContent;
  navigator.clipboard.writeText(code).then(() => {
    const msg = '✅ 已复制';
    copyBtn.innerHTML = msg;
    setTimeout(() => {
      copyBtn.innerHTML = '📋 复制 Rich Text';
    }, 1500);
  }).catch(() => {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('代码已复制到剪贴板');
  });
}
copyBtn.addEventListener('click', copyCode);

// 重置
resetBtn.addEventListener('click', () => {
  textInput.value = 'ENDURANCE';
  textStartColor.value = '#87292B';
  textEndColor.value = '#F54B4E';
  textStartColorHex.value = '#87292B';
  textEndColorHex.value = '#F54B4E';
  strokeStartColor.value = '#87292B';
  strokeEndColor.value = '#F54B4E';
  strokeStartColorHex.value = '#87292B';
  strokeEndColorHex.value = '#F54B4E';
  fontSelect.value = 'BuilderSans';
  optBold.checked = false;
  optItalic.checked = false;
  optUnderline.checked = false;
  optStrikethrough.checked = false;
  optStroke.checked = false;
  strokeThickness.value = '2';
  strokeTransparency.value = '0';
  strokeThicknessVal.textContent = '2';
  strokeTransparencyVal.textContent = '0';
  strokeColorArea.style.opacity = '0.4';
  strokeColorArea.style.pointerEvents = 'none';
  setModeOnGroup(textModeGroup, 'gradient');
  setModeOnGroup(strokeModeGroup, 'gradient');
  updateOutput();
});

// 字数限制
textInput.addEventListener('input', function() {
  if (this.value.length > 50) {
    this.value = this.value.slice(0, 50);
  }
  charCount.textContent = this.value.length;
});

// ===== 初始化 =====
updateOutput();