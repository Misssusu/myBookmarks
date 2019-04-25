
//获取keys和hash
var  obj = init();
var keys = obj.keys;
var hash = obj.hash;
var contener = document.getElementById('contener');
//生成键盘
for (var index = 0; index < keys['length']; index++) {
    var divBox = tag('div');
    contener.appendChild(divBox);
    for (var num = 0; num < keys[index]['length']; num++) {
        var kbd = tag('span');
        kbd.textContent = keys[index][num];
        divBox.appendChild(kbd);
        //添加编辑按钮
        createButton(keys[index][num]);
    }
}
// 按下键盘
document.onkeypress = function (evt) {
    var link = hash[evt.key];
    window.open('http://' + link, '_blank');
}
//工具函数
function tag(tags) {
    return document.createElement(tags);
}
function createButton(id) {
    var button = tag('button');
    button.textContent = '编辑';
    button.id = id;
    kbd.appendChild(button);
    button.onclick = function (evt) {
        var newLink = prompt('请输入一个网址');
        hash[evt.target.id] = newLink;
        //存储编辑后的hash
        localStorage.setItem('newHash', JSON.stringify(hash));
    }
}
function init() {
    var keys = {
        '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
        '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
        '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
        'length': 3
    };
    var hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'renren.com',
        't': 'tianya.com',
        'y': 'youtube.com',
        'u': 'uc.com',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': undefined,
        'a': 'acfun.tv',
        's': 'souhu.com',
        'z': 'zhihu.com'
    }
    //start 获取localStorage中的hash
    var localHash = JSON.parse(localStorage.getItem('newHash') || null);
    if (localHash) {
        hash = localHash;
    }
    return {
        'keys': keys,
        'hash': hash
    }
}
