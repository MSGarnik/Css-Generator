//change generator
let btnBox = document.getElementById('box');
let btnText = document.getElementById('text');
let btnFont = document.getElementById('font');
btnBox.onclick = function () {
    document.querySelector('.textShadow').style.display = 'none';
    document.querySelector('.font').style.display = 'none';
    document.querySelector('.boxShadow').style.display = 'flex';
}
btnText.onclick = function () {
    document.querySelector('.boxShadow').style.display = 'none';
    document.querySelector('.font').style.display = 'none';
    document.querySelector('.textShadow').style.display = 'flex';
}
btnFont.onclick = function () {
    document.querySelector('.boxShadow').style.display = 'none';
    document.querySelector('.textShadow').style.display = 'none';
    document.querySelector('.font').style.display = 'Flex';
}
// box shadow
let inline = document.getElementById('inline');
let y = document.querySelector('.inline');
let block = document.getElementById('block');
let x = document.querySelector('.block');
let spread = document.getElementById('spread');
let spr = document.querySelector('.spread');
let bl = document.getElementById('blur');
let b = document.querySelector('.blur');
let opa = document.getElementById('opacity');
let o = document.querySelector('.opacity');
let ins = document.getElementById('inset');
let btnIn = document.getElementById('btnInline');
let btnBl = document.getElementById('btnBlock');
let btnSp = document.getElementById('btnSpread');
let btnBlur = document.getElementById('btnBlur');
let btnOp = document.getElementById('btnOpacity');

btnIn.onclick = function () {
    inline.value = 0;
    document.querySelector('.inline').innerHTML = inline.value;
    val();
}
btnBl.onclick = function () {
    block.value = 0;
    document.querySelector('.block').innerHTML = block.value;
    val();
}
btnSp.onclick = function () {
    spread.value = 0;
    document.querySelector('.spread').innerHTML = spread.value;
    val();
}
btnBlur.onclick = function () {
    bl.value = 0;
    document.querySelector('.blur').innerHTML = bl.value;
    val();
}
btnOp.onclick = function () {
    opa.value = 100;
    document.querySelector('.opacity').innerHTML = opa.value;
    val();
}

function rgba(c) {
    let r = parseInt(c.slice(1, 3), 16)
    let g = parseInt(c.slice(3, 5), 16)
    let b = parseInt(c.slice(5, 7), 16)
    return 'rgba(' + r + ',' + '' + g + ',' + '' + b + ',';
}

function val() {
    let box = document.querySelector('.box');
    let myY = y.innerHTML = inline.value;
    let myX = x.innerHTML = block.value;
    let myS = spr.innerHTML = spread.value;
    let myB = b.innerHTML = bl.value;
    let opacity = o.innerHTML = opa.value
    let color = document.getElementById('color').value;

    box.style.boxShadow = (ins.checked ? 'inset' : "") + ' ' + myY + 'px' + ' ' + myX + 'px' + ' ' + myB + 'px' + ' ' + myS + 'px' + ' ' + (opacity.value == 1 ? color : rgba(color) + opa.value + ')');
    document.querySelector('.code').innerHTML = (ins.checked ? 'inset' : "") + ' ' + myY + 'px' + ' ' + myX + 'px' + ' ' + myB + 'px' + ' ' + myS + 'px' + '  ' + (opacity.value == 1 ? color : rgba(color) + opa.value + ')');
    document.querySelector('.code').style.boxShadow = (ins.checked ? 'inset' : "") + ' ' + myY + 'px' + ' ' + myX + 'px' + ' ' + myB + 'px' + ' ' + myS + 'px' + ' ' + (opacity.value == 1 ? color : rgba(color) + opa.value + ')');

    document.querySelector('.cssCode').innerHTML = '-webkit-box-shadow ' + ':' + (ins.checked ? 'inset' : "") + ' ' + myY + 'px' + ' ' + myX + 'px' + ' ' + myB + 'px' + ' ' + myS + 'px' + ' ' + (opacity.value == 1 ? color : rgba(color) + opa.value + ')') + ';' + " <br>"
        + 'box-shadow ' + ':' + (ins.checked ? 'inset' : "") + ' ' + myY + 'px' + ' ' + myX + 'px' + ' ' + myB + 'px' + ' ' + myS + 'px' + ' ' + (opacity.value == 1 ? color : rgba(color)) + ';';

}


//text shadow
let iT = document.getElementById('inlineText');
let iTi = document.querySelector('.inlineText');
let bT = document.getElementById('blockText');
let bTi = document.querySelector('.blockText');
let blT = document.getElementById('blurText');
let blTi = document.querySelector('.blurText');
let oT = document.getElementById('opacityText');
let oTi = document.querySelector('.opacityText');
let colorT = document.getElementById('colorText').value;
let inT = document.getElementById('btnInlineText');
let blTe = document.getElementById('btnBlockText');
let blrT = document.getElementById('btnBlurText');
let opT = document.getElementById('btnOpacityText');
inT.onclick = function () {
    iT.value = 0;
    iTi.innerHTML = 0;
    shad();
}
blTe.onclick = function () {
    bT.value = 0;
    bTi.innerHTML = 0
    shad();
}
blrT.onclick = function () {
    blT.value = 0;
    blTi.innerHTML = 0;
    shad();
}
opT.onclick = function () {
    oT.value = 1;
    oTi.innerHTML = 1;
    shad();
}
function shad() {
    let text = document.querySelector('.outputText');
    let shadowY = iTi.innerHTML = iT.value;
    let shadowX = bTi.innerHTML = bT.value;
    let shadowBl = blTi.innerHTML = blT.value;
    let opacityT = oTi.innerHTML = oT.value;
    colorT = document.getElementById('colorText').value;

    text.style.textShadow = shadowY + 'px' + ' ' + shadowX + 'px' + ' ' + shadowBl + 'px' + ' ' + (oT.value == 1 ? colorT : rgba(colorT) + opacityT + ')');
    document.querySelector('.textCodeShadow').innerHTML = shadowY + 'px' + ' ' + shadowX + 'px' + ' ' + shadowBl + 'px' + ' ' + (oT.value == 1 ? colorT : rgba(colorT) + opacityT + ')') + ';';
    document.querySelector('.cssCodeText').innerHTML = 'text-shadow:' + ' ' + shadowY + 'px' + ' ' + shadowX + 'px' + ' ' + shadowBl + 'px' + ' ' + (oT.value == 1 ? colorT : rgba(colorT) + opacityT + ')') + ';';
}

//font
let textCode = document.querySelector('.textCode');
let fontFam = document.getElementById('fontFam');
let text = document.getElementById('h1');
let fSize = document.getElementById('fontSize');
let s = document.querySelector('.fontSize');
let lSp = document.getElementById('lSp');
let ltSp = document.querySelector('.ltSp');
let wSp = document.getElementById('wordSp');
let woSp = document.querySelector('.woSp');
let color = document.getElementById('textColor');
let weightN = document.querySelector('.weightNormal');
let weightB = document.querySelector('.weightBold');
let decN = document.querySelector('.decNone');
let decU = document.querySelector('.decUnder');
let decO = document.querySelector('.decOver');
let decL = document.querySelector('.decLine');
let styN = document.querySelector('.styleNormal');
let styU = document.querySelector('.styleUnset');
let styI = document.querySelector('.styleItalic');
let styO = document.querySelector('.styleOblique');
let varN = document.querySelector('.varNormal');
let varS = document.querySelector('.varSmall');
let trN = document.querySelector('.trNone');
let trU = document.querySelector('.trUpper');
let trL = document.querySelector('.trLower');
let trC = document.querySelector('.trCapitalize');
let clL = document.getElementById('clearLS');
let clW = document.getElementById('clearWS');
let fW = 'normal';
let tD = 'none';
let fS = 'normal';
let fV = 'normal';
let tT = 'none';

clL.onclick = function(){
    lSp.value = 0;
    ltSp.innerHTML = 0;
    font();
}
clW.onclick = function(){
    wSp.value = 0;
    woSp.innerHTML = 0;
    font();
}

//font weight
weightN.onclick = function () {
    weightN.style.backgroundColor = '#D0E4F5';
    weightB.style.backgroundColor = '#faebd7';
    text.classList.add('weightNormal');
    text.classList.remove('weightBold');
    fW = 'normal';
    font();
}
weightB.onclick = function () {
    weightB.style.backgroundColor = '#D0E4F5';
    weightN.style.backgroundColor = '#faebd7';
    text.classList.remove('weightNormal');
    text.classList.add('weightBold');
    fW = 'bold';
    font();
}

//text decoration
decN.onclick = function () {
    decN.style.backgroundColor = '#D0E4F5';
    decU.style.backgroundColor = '#faebd7';
    decO.style.backgroundColor = '#faebd7';
    decL.style.backgroundColor = '#faebd7';
    text.classList.add('decNone');
    text.classList.remove('decUnder');
    text.classList.remove('decOver');
    text.classList.remove('decLine');
    tD = 'none;';
    font();
}
decU.onclick = function () {
    decN.style.backgroundColor = '#faebd7';
    decU.style.backgroundColor = '#D0E4F5';
    decO.style.backgroundColor = '#faebd7';
    decL.style.backgroundColor = '#faebd7';
    text.classList.remove('decNone');
    text.classList.add('decUnder');
    text.classList.remove('decOver');
    text.classList.remove('decLine');
    tD = 'underline solid rgb(68, 68, 68);';
    font();
}
decO.onclick = function () {
    decN.style.backgroundColor = '#faebd7';
    decU.style.backgroundColor = '#faebd7';
    decO.style.backgroundColor = '#D0E4F5';
    decL.style.backgroundColor = '#faebd7';
    text.classList.remove('decNone');
    text.classList.remove('decUnder');
    text.classList.add('decOver');
    text.classList.remove('decLine');
    tD = ' overline solid rgb(68, 68, 68);';
    font();
}
decL.onclick = function () {
    decN.style.backgroundColor = '#faebd7';
    decU.style.backgroundColor = '#faebd7';
    decO.style.backgroundColor = '#faebd7';
    decL.style.backgroundColor = '#D0E4F5';
    text.classList.remove('decNone');
    text.classList.remove('decUnder');
    text.classList.remove('decOver');
    text.classList.add('decLine');
    tD = ' line-through solid rgb(68, 68, 68);';
    font();
}

//font style
styN.onclick = function () {
    styN.style.backgroundColor = '#D0E4F5';
    styU.style.backgroundColor = '#faebd7';
    styI.style.backgroundColor = '#faebd7';
    styO.style.backgroundColor = '#faebd7';
    text.classList.add('styleNormal');
    text.classList.remove('styleUnset');
    text.classList.remove('styleItalic');
    text.classList.remove('styleOblique');
    fS = 'normal;';
    font();
}
styU.onclick = function () {
    styN.style.backgroundColor = '#faebd7';
    styU.style.backgroundColor = '#D0E4F5';
    styI.style.backgroundColor = '#faebd7';
    styO.style.backgroundColor = '#faebd7';
    text.classList.remove('styleNormal');
    text.classList.add('styleUnset');
    text.classList.remove('styleItalic');
    text.classList.remove('styleOblique');
    fS = 'normal;';
    font();
}
styI.onclick = function () {
    styN.style.backgroundColor = '#faebd7';
    styU.style.backgroundColor = '#faebd7';
    styI.style.backgroundColor = '#D0E4F5';
    styO.style.backgroundColor = '#faebd7';
    text.classList.remove('styleNormal');
    text.classList.remove('styleUnset');
    text.classList.add('styleItalic');
    text.classList.remove('styleOblique');
    fS = 'italic;';
    font();
}
styO.onclick = function () {
    styN.style.backgroundColor = '#faebd7';
    styU.style.backgroundColor = '#faebd7';
    styI.style.backgroundColor = '#faebd7';
    styO.style.backgroundColor = '#D0E4F5';
    text.classList.remove('styleNormal');
    text.classList.remove('styleUnset');
    text.classList.remove('styleItalic');
    text.classList.add('styleOblique');
    fS = 'italic;';
    font();
}

//font variant
varN.onclick = function () {
    varN.style.backgroundColor = '#D0E4F5';
    varS.style.backgroundColor = '#faebd7';
    text.classList.add('varNormal');
    text.classList.remove('varSmall')
    fV = 'normal;';
    font();
}
varS.onclick = function () {
    varN.style.backgroundColor = '#faebd7';
    varS.style.backgroundColor = '#D0E4F5';
    text.classList.remove('varNormal');
    text.classList.add('varSmall');
    fV = 'small-caps;';
    font();
}

// text transform
trN.onclick = function () {
    trN.style.backgroundColor = '#D0E4F5';
    trU.style.backgroundColor = '#faebd7';
    trL.style.backgroundColor = '#faebd7';
    trC.style.backgroundColor = '#faebd7';
    text.classList.add('trNone');
    text.classList.remove('trUpper');
    text.classList.remove('trLower');
    text.classList.remove('trCapitalize');
    tT = 'none;';
    font();
}
trU.onclick = function () {
    trN.style.backgroundColor = '#faebd7';
    trU.style.backgroundColor = '#D0E4F5';
    trL.style.backgroundColor = '#faebd7';
    trC.style.backgroundColor = '#faebd7';
    text.classList.remove('trNone');
    text.classList.add('trUpper');
    text.classList.remove('trLower');
    text.classList.remove('trCapitalize');
    tT = 'uppercase;';
    font();
}
trL.onclick = function () {
    trN.style.backgroundColor = '#faebd7';
    trU.style.backgroundColor = '#faebd7';
    trL.style.backgroundColor = '#D0E4F5';
    trC.style.backgroundColor = '#faebd7';
    text.classList.remove('trNone');
    text.classList.remove('trUpper');
    text.classList.add('trLower');
    text.classList.remove('trCapitalize');
    tT = ' lowercase;';
    font();
}
trC.onclick = function () {
    trN.style.backgroundColor = '#faebd7';
    trU.style.backgroundColor = '#faebd7';
    trL.style.backgroundColor = '#faebd7';
    trC.style.backgroundColor = '#D0E4F5';
    text.classList.remove('trNone');
    text.classList.remove('trUpper');
    text.classList.remove('trLower');
    text.classList.add('trCapitalize');
    tT = 'capitalize;';
    font();
}


function font() {
    let family = fontFam.value;
    text.style.fontFamily = family + ' ' + ',' + 'serif';
    let size = fSize.value;
    text.style.fontSize = size + 'px';
    s.innerHTML = size;
    let lS = lSp.value;
    text.style.letterSpacing = lS + 'px';
    ltSp.innerHTML = lS;
    let wS = wSp.value;
    text.style.wordSpacing = wS + 'px';
    woSp.innerHTML = wS;
    tC = color.value;
    text.style.color = tC;
    tW = text.style.fontWeight.innerHTML;
    textCode.innerHTML = 'font-family:' + family + ',' + ' ' + ' serif; <br>  font-size:' + size + 'px;<br> letter-spacing:' + lS + 'px; <br> word-spacing:' + wS + 'px; <br> color:' + tC + '; <br> font-weight:  ' + fW + '; <br> text-decoration: ' + tD + ' <br> font-style: ' + fS + ' <br> font-variant: ' + fV + ' <br> text-transform: ' + tT + '';
}

