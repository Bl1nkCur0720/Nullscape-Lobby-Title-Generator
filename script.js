document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // 1. 字体列表
    // ============================================
    const ROBLOX_FONTS = [
        "Accanthis ADF Std","Amatic SC","Arimo","Balthazar","Bangers",
        "Builder Extended","Builder Mono","Builder Sans","Comic Neue Angular",
        "Creepster","Denk One","Fondamento","Fredoka One","Grenze Gotisch",
        "Guru","Highway Gothic","Inconsolata","Indie Flower","Josefin Sans",
        "Jura","Kalam","Luckiest Guy","Merriweather","Michroma","Montserrat",
        "Nunito","Oswald","Patrick Hand","Permanent Marker","Press Start 2P",
        "Roboto","Roboto Condensed","Roboto Mono","Roman Antique","Sarpanch",
        "Source Sans Pro","Special Elite","Titillium Web","Ubuntu","Zekton"
    ];

    // ============================================
    // 2. DOM refs
    // ============================================
    const inputText = document.getElementById('inputText');
    const previewText = document.getElementById('previewText');
    const outputCode = document.getElementById('outputCode');
    const fontSelect = document.getElementById('fontSelect');
    const segmentSettings = document.getElementById('segmentSettings');
    const styleBold = document.getElementById('styleBold');
    const styleItalic = document.getElementById('styleItalic');
    const styleUnderline = document.getElementById('styleUnderline');
    const styleStrike = document.getElementById('styleStrike');
    const styleStroke = document.getElementById('styleStroke');
    const strokeThickness = document.getElementById('strokeThickness');
    const strokeThicknessVal = document.getElementById('strokeThicknessVal');
    const strokeStartColor = document.getElementById('strokeStartColor');
    const strokeStartText = document.getElementById('strokeStartText');
    const strokeEndColor = document.getElementById('strokeEndColor');
    const strokeEndText = document.getElementById('strokeEndText');
    const textModeGroup = document.getElementById('textModeGroup');
    const strokeModeGroup = document.getElementById('strokeModeGroup');
    const solidColorHint = document.getElementById('solidColorHint');

    let segments = [];
    let textMode = 'gradient';
    let strokeMode = 'gradient';

    // ============================================
    // 3. 工具
    // ============================================
    function hexToRgb(hex) {
        const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return r ? { r: parseInt(r[1],16), g: parseInt(r[2],16), b: parseInt(r[3],16) } : { r:0,g:0,b:0 };
    }
    function rgbToHex(r,g,b) {
        const clamp=(v)=>Math.min(255,Math.max(0,Math.round(v)));
        return '#'+[clamp(r),clamp(g),clamp(b)].map(c=>c.toString(16).padStart(2,'0')).join('');
    }
    function lerpColor(c1,c2,t) {
        return { r:c1.r+(c2.r-c1.r)*t, g:c1.g+(c2.g-c1.g)*t, b:c1.b+(c2.b-c1.b)*t };
    }
    function getGradientColors(startHex,endHex,count) {
        if(count<=0) return [];
        if(count===1) return [startHex];
        const s=hexToRgb(startHex), e=hexToRgb(endHex);
        const arr=[];
        for(let i=0;i<count;i++){ const t=count>1?i/(count-1):0; const c=lerpColor(s,e,t); arr.push(rgbToHex(c.r,c.g,c.b)); }
        return arr;
    }
    const RAINBOW = ['#FF0000','#FF7F00','#FFFF00','#7FFF00','#00FF00','#00FF7F','#00FFFF','#007FFF','#0000FF','#7F00FF','#8B00FF','#FF00FF'];
    function getRainbowColors(count) {
        if(count<=0) return [];
        if(count===1) return [RAINBOW[0]];
        const arr=[];
        for(let i=0;i<count;i++){ const t=count>1?i/(count-1):0; const total=RAINBOW.length-1; const pos=t*total; const idx1=Math.floor(pos); const idx2=Math.min(idx1+1,total); const frac=pos-idx1; if(idx1===idx2) arr.push(RAINBOW[idx1]); else { const c1=hexToRgb(RAINBOW[idx1]), c2=hexToRgb(RAINBOW[idx2]); const c=lerpColor(c1,c2,frac); arr.push(rgbToHex(c.r,c.g,c.b)); } }
        return arr;
    }
    function isRainbowPreset(a,b){ const s=a.toLowerCase(), e=b.toLowerCase(); return (s==='#ff0000'||s==='#ff0000')&&(e==='#8b00ff'||e==='#8b00ff'); }
    function getCharColors(seg,mode,start,end){
        const chars=seg.text.split('');
        if(!chars.length) return [];
        if(mode==='solid') return chars.map(()=>start);
        if(isRainbowPreset(start,end)) return getRainbowColors(chars.length);
        return getGradientColors(start,end,chars.length);
    }
    function sanitizeFontPath(name){ return name ? name.replace(/ /g,'') : ''; }
    function escapeHtml(str){ const d=document.createElement('div'); d.textContent=str; return d.innerHTML; }

    // ============================================
    // 4. 分段解析 & 渲染
    // ============================================
    function parseSegments(text){
        if(!text.trim()) return [{text:text,startColor:'#87292B',endColor:'#F54B4E'}];
        const parts=text.split('|').map(s=>s);
        if(parts.length===1) return [{text:parts[0],startColor:'#87292B',endColor:'#F54B4E'}];
        return parts.map(p=>({text:p,startColor:'#87292B',endColor:'#F54B4E'}));
    }

    function renderSegments(){
        const raw=parseSegments(inputText.value);
        const newSegs=raw.map((s,idx)=>{ const old=segments[idx]||{}; return { text:s.text, startColor:old.startColor||'#87292B', endColor:old.endColor||'#F54B4E' }; });
        segments=newSegs;
        if(segments.length===1 && !inputText.value.includes('|')){
            segmentSettings.innerHTML=`
                <div class="segment-item" style="border-color:#d0d6e0;">
                    <div class="seg-header"><span class="seg-label">⬤ 文字渐变</span><span class="seg-text">${segments[0].text||'(空)'}</span></div>
                    <div class="seg-colors">
                        <div class="color-picker-wrap"><label style="font-size:0.65rem;color:#6b6b7a;min-width:40px;">起始</label><input type="color" class="seg-start-color" value="${segments[0].startColor}"><input type="text" class="seg-start-text" value="${segments[0].startColor}"></div>
                        <div class="color-picker-wrap"><label style="font-size:0.65rem;color:#6b6b7a;min-width:40px;">结束</label><input type="color" class="seg-end-color" value="${segments[0].endColor}"><input type="text" class="seg-end-text" value="${segments[0].endColor}"></div>
                    </div>
                </div>
            `;
        } else {
            let html=`<div class="segment-list">`;
            segments.forEach((seg,idx)=>{
                html+=`
                    <div class="segment-item">
                        <div class="seg-header"><span class="seg-label">段落 ${idx+1}</span><span class="seg-text">${seg.text||'(空)'}</span></div>
                        <div class="seg-colors">
                            <div class="color-picker-wrap"><label style="font-size:0.65rem;color:#6b6b7a;min-width:40px;">起始</label><input type="color" class="seg-start-color" data-idx="${idx}" value="${seg.startColor}"><input type="text" class="seg-start-text" data-idx="${idx}" value="${seg.startColor}"></div>
                            <div class="color-picker-wrap"><label style="font-size:0.65rem;color:#6b6b7a;min-width:40px;">结束</label><input type="color" class="seg-end-color" data-idx="${idx}" value="${seg.endColor}"><input type="text" class="seg-end-text" data-idx="${idx}" value="${seg.endColor}"></div>
                        </div>
                    </div>
                `;
            });
            html+=`</div>`;
            segmentSettings.innerHTML=html;
        }
        // 绑定事件
        segmentSettings.querySelectorAll('.seg-start-color').forEach(el=>{
            el.addEventListener('input',function(){ const idx=this.dataset.idx||0; const txt=this.closest('.segment-item').querySelector('.seg-start-text'); if(txt) txt.value=this.value; segments[idx].startColor=this.value; generateCode(); });
        });
        segmentSettings.querySelectorAll('.seg-start-text').forEach(el=>{
            el.addEventListener('input',function(){ const idx=this.dataset.idx||0; if(/^#[0-9A-F]{6}$/i.test(this.value)){ const col=this.closest('.segment-item').querySelector('.seg-start-color'); if(col) col.value=this.value; segments[idx].startColor=this.value; generateCode(); } });
        });
        segmentSettings.querySelectorAll('.seg-end-color').forEach(el=>{
            el.addEventListener('input',function(){ const idx=this.dataset.idx||0; const txt=this.closest('.segment-item').querySelector('.seg-end-text'); if(txt) txt.value=this.value; segments[idx].endColor=this.value; generateCode(); });
        });
        segmentSettings.querySelectorAll('.seg-end-text').forEach(el=>{
            el.addEventListener('input',function(){ const idx=this.dataset.idx||0; if(/^#[0-9A-F]{6}$/i.test(this.value)){ const col=this.closest('.segment-item').querySelector('.seg-end-color'); if(col) col.value=this.value; segments[idx].endColor=this.value; generateCode(); } });
        });
    }

    // ============================================
    // 5. 生成
    // ============================================
    function generateCode(){
        const raw=parseSegments(inputText.value);
        const newSegs=raw.map((s,idx)=>{ const old=segments[idx]||{}; return { text:s.text, startColor:old.startColor||'#87292B', endColor:old.endColor||'#F54B4E' }; });
        segments=newSegs;
        renderSegments();

        const bold=styleBold.checked, italic=styleItalic.checked, underline=styleUnderline.checked, strike=styleStrike.checked;
        const strokeEnabled=styleStroke.checked, strokeThick=parseFloat(strokeThickness.value)||0;
        const strokeStart=strokeStartColor.value, strokeEnd=strokeEndColor.value;
        const fontName=fontSelect.value;
        let fontFamilyAttr='';
        if(fontName && fontName.trim()!==''){ const s=sanitizeFontPath(fontName); fontFamilyAttr=` family="rbxasset://fonts/families/${s}.json"`; }

        let fullHtml='', fullPlain='';
        segments.forEach(seg=>{
            const chars=seg.text.split('');
            if(!chars.length) return;
            const textColors=getCharColors(seg,textMode,seg.startColor,seg.endColor);
            const strokeColors=getCharColors(seg,strokeMode,strokeStart,strokeEnd);
            chars.forEach((ch,i)=>{
                const tc=textColors[i]||seg.startColor;
                const sc=strokeColors[i]||strokeStart;
                let chHtml=escapeHtml(ch);
                if(strokeEnabled && strokeThick>0){ chHtml=`<stroke color="${sc}" thickness="${strokeThick}" joins="miter">${chHtml}</stroke>`; }
                chHtml=`<font color="${tc}"${fontFamilyAttr}>${chHtml}</font>`;
                fullHtml+=chHtml;
                fullPlain+=ch;
            });
        });
        if(strike) fullHtml=`<s>${fullHtml}</s>`;
        if(underline) fullHtml=`<u>${fullHtml}</u>`;
        if(italic) fullHtml=`<i>${fullHtml}</i>`;
        if(bold) fullHtml=`<b>${fullHtml}</b>`;
        outputCode.textContent=fullHtml;
        updatePreview(fullHtml, fullPlain, fontName);
    }

    function updatePreview(html, plain, fontName){
        let mapped=html;
        mapped=mapped.replace(/<font color="([^"]+)"([^>]*)>/gi, (match,color,attrs)=>{
            let style=`color:${color};`;
            const fm=attrs.match(/family="([^"]+)"/);
            if(fm){ const nameMatch=fm[1].match(/\/families\/(.+)\.json$/); if(nameMatch) style+=` font-family:"${nameMatch[1]}", sans-serif;`; }
            return `<span style="${style}">`;
        });
        mapped=mapped.replace(/<\/font>/gi,'</span>');
        mapped=mapped.replace(/<stroke color="([^"]+)" thickness="([^"]+)"[^>]*>/gi, (match,color,thick)=>{
            const sh=`${thick}px ${thick}px 0 ${color}, -${thick}px -${thick}px 0 ${color}, ${thick}px -${thick}px 0 ${color}, -${thick}px ${thick}px 0 ${color}`;
            return `<span style="text-shadow:${sh};display:inline-block;">`;
        });
        mapped=mapped.replace(/<\/stroke>/gi,'</span>');
        previewText.innerHTML=mapped || plain;
        if(!previewText.innerHTML.trim()){ previewText.textContent='预览'; previewText.style.color='#7b7b8b'; } else { previewText.style.color=''; }
    }

    // ============================================
    // 6. 事件绑定
    // ============================================
    function initFontSelect(){
        fontSelect.innerHTML='<option value="">默认 (无)</option>';
        ROBLOX_FONTS.forEach(f=>{ const o=document.createElement('option'); o.value=f; o.textContent=f; fontSelect.appendChild(o); });
        fontSelect.addEventListener('change', generateCode);
        fontSelect.value='Roboto';
        setTimeout(generateCode, 20);
    }

    document.querySelectorAll('.toggle-item').forEach(item=>{
        const cb=item.querySelector('input[type="checkbox"]');
        if(!cb) return;
        cb.addEventListener('change', function(){ if(this.checked) item.classList.add('active'); else item.classList.remove('active'); generateCode(); });
        if(cb.checked) item.classList.add('active');
    });

    strokeThickness.addEventListener('input',()=>{ strokeThicknessVal.textContent=strokeThickness.value; generateCode(); });
    strokeStartColor.addEventListener('input',()=>{ strokeStartText.value=strokeStartColor.value; generateCode(); });
    strokeStartText.addEventListener('input',()=>{ if(/^#[0-9A-F]{6}$/i.test(strokeStartText.value)){ strokeStartColor.value=strokeStartText.value; generateCode(); } });
    strokeEndColor.addEventListener('input',()=>{ strokeEndText.value=strokeEndColor.value; generateCode(); });
    strokeEndText.addEventListener('input',()=>{ if(/^#[0-9A-F]{6}$/i.test(strokeEndText.value)){ strokeEndColor.value=strokeEndText.value; generateCode(); } });

    textModeGroup.querySelectorAll('.mode-btn').forEach(btn=>{
        btn.addEventListener('click', function(){
            textModeGroup.querySelectorAll('.mode-btn').forEach(b=>b.classList.remove('active'));
            this.classList.add('active'); textMode=this.dataset.mode;
            solidColorHint.textContent = textMode==='solid' ? '纯色模式：使用段落起始颜色' : '渐变模式：使用起始→结束颜色';
            generateCode();
        });
    });
    strokeModeGroup.querySelectorAll('.mode-btn').forEach(btn=>{
        btn.addEventListener('click', function(){
            strokeModeGroup.querySelectorAll('.mode-btn').forEach(b=>b.classList.remove('active'));
            this.classList.add('active'); strokeMode=this.dataset.mode;
            generateCode();
        });
    });

    document.querySelectorAll('#textPresetGrid .preset-btn').forEach(btn=>{
        btn.addEventListener('click', function(){ applyTextPreset(this.dataset.preset); });
    });
    document.querySelectorAll('#strokePresetGrid .preset-btn-stroke').forEach(btn=>{
        btn.addEventListener('click', function(){ applyStrokePreset(this.dataset.stroke); });
    });

    inputText.addEventListener('input', ()=>{
        const raw=parseSegments(inputText.value);
        const newSegs=raw.map((s,idx)=>{ const old=segments[idx]||{}; return { text:s.text, startColor:old.startColor||'#87292B', endColor:old.endColor||'#F54B4E' }; });
        segments=newSegs;
        renderSegments();
        generateCode();
    });

    // ============================================
    // 7. 预设 & 重置
    // ============================================
    const PRESETS = {
        endurance:{start:'#87292B',end:'#F54B4E',text:'ENDURANCE'},
        celestial:{start:'#9E3862',end:'#F25597',text:'CELESTIAL'},
        voidbound:{start:'#8481A6',end:'#CBC6FF',text:'VOIDBOUND SCARF'},
        gold:{start:'#B8860B',end:'#F5D06A',text:'GOLDEN'},
        ocean:{start:'#0066CC',end:'#66CCFF',text:'OCEAN'},
        fire:{start:'#FF4500',end:'#FFD700',text:'FIRE'},
        rainbow:{start:'#FF0000',end:'#8B00FF',text:'RAINBOW'}
    };
    function applyTextPreset(name){
        const p=PRESETS[name]; if(!p) return;
        inputText.value=p.text;
        const raw=parseSegments(p.text);
        segments=raw.map(s=>({ text:s.text, startColor:p.start, endColor:p.end }));
        renderSegments();
        generateCode();
    }
    function applyStrokePreset(name){
        const p=PRESETS[name]; if(!p) return;
        strokeStartColor.value=p.start; strokeStartText.value=p.start;
        strokeEndColor.value=p.end; strokeEndText.value=p.end;
        generateCode();
    }
    function resetAll(){
        inputText.value='ENDURANCE';
        styleBold.checked=false; styleItalic.checked=false; styleUnderline.checked=false; styleStrike.checked=false; styleStroke.checked=false;
        strokeThickness.value=2; strokeThicknessVal.textContent='2';
        strokeStartColor.value='#692B64'; strokeStartText.value='#692B64';
        strokeEndColor.value='#CBC6FF'; strokeEndText.value='#CBC6FF';
        textMode='gradient'; strokeMode='gradient';
        document.querySelectorAll('#textModeGroup .mode-btn').forEach(b=>b.classList.toggle('active',b.dataset.mode==='gradient'));
        document.querySelectorAll('#strokeModeGroup .mode-btn').forEach(b=>b.classList.toggle('active',b.dataset.mode==='gradient'));
        solidColorHint.textContent='渐变模式：使用起始→结束颜色';
        fontSelect.value='Roboto';
        document.querySelectorAll('.toggle-item').forEach(item=>{ const cb=item.querySelector('input[type="checkbox"]'); if(cb){ if(cb.checked) item.classList.add('active'); else item.classList.remove('active'); } });
        const raw=parseSegments('ENDURANCE');
        segments=raw.map(s=>({ text:s.text, startColor:'#87292B', endColor:'#F54B4E' }));
        renderSegments();
        generateCode();
        showToast('↺ 已重置');
    }

    // ============================================
    // 8. 复制
    // ============================================
    function copyCode(){ const c=outputCode.textContent; navigator.clipboard.writeText(c).then(()=>showToast('✅ 代码已复制')).catch(()=>fallbackCopy(c)); }
    function copyPreview(){ const t=inputText.value; navigator.clipboard.writeText(t).then(()=>showToast('✅ 纯文本已复制')).catch(()=>fallbackCopy(t)); }
    function fallbackCopy(t){ const ta=document.createElement('textarea'); ta.value=t; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta); showToast('✅ 已复制'); }
    function showToast(msg){ const old=document.querySelector('.toast-msg'); if(old) old.remove(); const div=document.createElement('div'); div.className='toast-msg'; div.textContent=msg; Object.assign(div.style,{position:'fixed',bottom:'24px',left:'50%',transform:'translateX(-50%)',background:'#1e1e2a',color:'white',padding:'10px 24px',borderRadius:'40px',boxShadow:'0 6px 20px rgba(0,0,0,0.08)',zIndex:'9999',fontWeight:'500',fontSize:'0.9rem',transition:'opacity 0.3s'}); document.body.appendChild(div); setTimeout(()=>{ div.style.opacity='0'; setTimeout(()=>div.remove(),400); },1800); }

    // ============================================
    // 9. 中英切换
    // ============================================
    const i18nMap = {
        zh: {
            settings:'设置', titleText:'📝 标题文本', fontSelect:'🔤 字体', fontHint:'选择后自动添加 <code>family="rbxasset://fonts/families/字体名(无空格).json"</code>',
            presets:'🎨 预设', textMode:'🌈 文字着色', gradient:'渐变', solid:'纯色', gradientHint:'渐变模式：起始→结束',
            textStyle:'✏️ 样式', stroke:'🖊️ 描边', enable:'启用', strokePresets:'描边预设',
            generate:'🔄 生成', reset:'↺ 重置', preview:'预览', codeOutput:'📄 富文本代码',
            copyCode:'📋 复制代码', copyText:'📄 复制纯文本', refresh:'↻',
            footer:'💡 <b>使用说明</b><br>文字和描边颜色独立，支持渐变/纯色。在 Roblox 中启用 <code>RichText</code> 即可。'
        },
        en: {
            settings:'Settings', titleText:'📝 Title text <span style="font-weight:400;color:#7b7b8b;">(use <code>|</code> for segments)</span>', fontSelect:'🔤 Font', fontHint:'Adds <code>family="rbxasset://fonts/families/fontname(no spaces).json"</code>',
            presets:'🎨 Presets', textMode:'🌈 Text color', gradient:'Gradient', solid:'Solid', gradientHint:'Gradient: start → end',
            textStyle:'✏️ Style', stroke:'🖊️ Stroke', enable:'Enable', strokePresets:'Stroke presets',
            generate:'🔄 Generate', reset:'↺ Reset', preview:'Preview', codeOutput:'📄 RichText code',
            copyCode:'📋 Copy code', copyText:'📄 Copy plain', refresh:'↻',
            footer:'💡 <b>How to use</b><br>Text & stroke colors are independent, gradient/solid supported. Enable <code>RichText</code> in Roblox.'
        }
    };

    document.querySelectorAll('#langToggle button').forEach(btn=>{
        btn.addEventListener('click', function(){
            document.querySelectorAll('#langToggle button').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            const lang=this.dataset.lang;
            const dict=i18nMap[lang]||i18nMap.zh;
            document.querySelectorAll('[data-i18n]').forEach(el=>{
                const key=el.dataset.i18n;
                if(dict[key]!==undefined){
                    if(el.tagName==='BUTTON' || el.tagName==='SPAN' || el.tagName==='DIV') el.innerHTML=dict[key];
                    else el.innerHTML=dict[key];
                }
            });
            const hintKey = textMode==='solid' ? 'solid' : 'gradient';
            solidColorHint.textContent = textMode==='solid' ? (lang==='zh'?'纯色模式：使用段落起始颜色':'Solid mode: uses segment start color') : (lang==='zh'?'渐变模式：使用起始→结束颜色':'Gradient mode: start → end');
        });
    });

    // ============================================
    // 10. 初始化
    // ============================================
    let debounce;
    const origGen=generateCode;
    generateCode=function(){ clearTimeout(debounce); debounce=setTimeout(origGen, 40); };
    // 暴露全局函数供HTML onclick调用
    window.generateCode=generateCode;
    window.copyCode=copyCode;
    window.copyPreview=copyPreview;
    window.resetAll=resetAll;
    window.applyTextPreset=applyTextPreset;
    window.applyStrokePreset=applyStrokePreset;

    initFontSelect();
    const raw=parseSegments('ENDURANCE');
    segments=raw.map(s=>({ text:s.text, startColor:'#87292B', endColor:'#F54B4E' }));
    renderSegments();
    generateCode();
    document.querySelectorAll('.toggle-item').forEach(item=>{ const cb=item.querySelector('input[type="checkbox"]'); if(cb && cb.checked) item.classList.add('active'); });
    document.querySelectorAll('#textModeGroup .mode-btn').forEach(b=>b.classList.toggle('active',b.dataset.mode==='gradient'));
    document.querySelectorAll('#strokeModeGroup .mode-btn').forEach(b=>b.classList.toggle('active',b.dataset.mode==='gradient'));
});