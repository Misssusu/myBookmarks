var keys = {
    '0': {0:'q',1:'w',2:'e',3:'r',4:'t',5:'y',6:'u',7:'i',8:'o',9:'p',length:10},
    '1': {0:'a',1:'s',2:'d',3:'f',4:'g',5:'h',6:'j',7:'k',8:'l',length:9},
    '2': {0:'z',1:'x',2:'c',3:'v',4:'b',5:'n',6:'m',length:7},
    'length': 3
};
var hash = {
    'q' : 'qq.com',
    'w' : 'weibo.com',
    'e' : 'ele.me',
    'r' : 'renren.com',
    't' : 'tianya.com',
    'y' : 'youtube.com',
    'u' : 'uc.com',
    'i' : 'iqiyi.com',
    'o' : 'opera.com',
    'p' : undefined,
    'a' : 'acfun.tv',
    's' : 'souhu.com',
    'z' : 'zhihu.com'
}
var contener = document.getElementById('contener');
var index = 0;
while (index < keys['length']) {
    var divBox = document.createElement('div');
    contener.appendChild(divBox);
    var num = 0;
    while (num < keys[index]['length']) {
        var kbd = document.createElement('span');
        kbd.textContent = keys[index][num];
        divBox.appendChild(kbd);
        num ++;
    }
    index ++ ;
}
// 按下键盘
document.onkeypress = function(evt) {
    var link = hash[evt.key];
    window.open('http://' + link, '_blank');
}
