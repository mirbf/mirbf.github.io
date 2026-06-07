// Content page iframe communication + scroll position + floating buttons

function hasParentNavigator() {
    return window.parent && window.parent !== window;
}

// --- Link interception: tell parent sidebar to navigate ---
document.addEventListener('click', function(e) {
    var link = e.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    if (href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
        e.preventDefault();

        var pathToId = {
            'china.html': 'china-overview',
            'guangdong/guangdong.html': 'guangdong-overview',
            'guangdong.html': 'guangdong-overview',
            'guangdong/guangzhou.html': 'guangzhou',
            'guangdong/shenzhen.html': 'shenzhen',
            'guangdong/foshan.html': 'foshan',
            'guangdong/dongguan.html': 'dongguan',
            'guangdong/zhuhai.html': 'zhuhai',
            'guangzhou.html': 'guangzhou',
            'shenzhen.html': 'shenzhen',
            'foshan.html': 'foshan',
            'dongguan.html': 'dongguan',
            'zhuhai.html': 'zhuhai',
                'shanghai/shanghai.html': 'shanghai-overview',
                'shanghai.html': 'shanghai-overview',
                'shanghai/yangpu.html': 'yangpu',
                'shanghai/jingan.html': 'jingan',
                'shanghai/xuhui.html': 'xuhui',
                'yangpu.html': 'yangpu',
                'jingan.html': 'jingan',
                'xuhui.html': 'xuhui',
                'beijing/beijing.html': 'beijing-overview',
                'beijing.html': 'beijing-overview',
                'beijing/haidian.html': 'haidian',
                'beijing/yizhuang.html': 'yizhuang',
                'haidian.html': 'haidian',
                'yizhuang.html': 'yizhuang',
                'jiangsu/jiangsu.html': 'jiangsu-overview',
                'jiangsu.html': 'jiangsu-overview',
                'jiangsu/nanjing.html': 'nanjing',
                'jiangsu/suzhou.html': 'suzhou',
                'jiangsu/wuxi.html': 'wuxi',
                'jiangsu/changzhou.html': 'changzhou',
                'jiangsu/nantong.html': 'nantong',
                'nanjing.html': 'nanjing',
                'suzhou.html': 'suzhou',
                'wuxi.html': 'wuxi',
                'changzhou.html': 'changzhou',
                'nantong.html': 'nantong',
                'jiangsu/yangzhou.html': 'yangzhou',
                'jiangsu/xuzhou.html': 'xuzhou',
                'jiangsu/taizhou-js.html': 'taizhou-js',
                'yangzhou.html': 'yangzhou',
                'xuzhou.html': 'xuzhou',
                'taizhou-js.html': 'taizhou-js',
                'zhejiang/zhejiang.html': 'zhejiang-overview',
                'zhejiang.html': 'zhejiang-overview',
                'zhejiang/hangzhou.html': 'hangzhou',
                'zhejiang/ningbo.html': 'ningbo',
                'zhejiang/taizhou.html': 'taizhou',
                'hangzhou.html': 'hangzhou',
                'ningbo.html': 'ningbo',
                'taizhou.html': 'taizhou',
                'zhejiang/wenzhou.html': 'wenzhou',
                'zhejiang/shaoxing.html': 'shaoxing',
                'wenzhou.html': 'wenzhou',
                'shaoxing.html': 'shaoxing',
                'hubei/hubei.html': 'hubei-overview',
                'hubei.html': 'hubei-overview',
                'hubei/wuhan.html': 'wuhan',
                'wuhan.html': 'wuhan',
                'hubei/yichang.html': 'yichang',
                'yichang.html': 'yichang',
                'sichuan/sichuan.html': 'sichuan-overview',
                'sichuan.html': 'sichuan-overview',
                'sichuan/chengdu.html': 'chengdu',
                'chengdu.html': 'chengdu',
                'anhui/anhui.html': 'anhui-overview',
                'anhui.html': 'anhui-overview',
                'anhui/hefei.html': 'hefei',
                'hefei.html': 'hefei',
                'anhui/maanshan.html': 'maanshan',
                'maanshan.html': 'maanshan',
                'shandong/shandong.html': 'shandong-overview',
                'shandong.html': 'shandong-overview',
                'shandong/jinan.html': 'jinan',
                'shandong/qingdao.html': 'qingdao',
                'jinan.html': 'jinan',
                'qingdao.html': 'qingdao',
                'hunan/hunan.html': 'hunan-overview',
                'hunan.html': 'hunan-overview',
                'hunan/changsha.html': 'changsha',
                'changsha.html': 'changsha',
                'fujian/fujian.html': 'fujian-overview',
                'fujian.html': 'fujian-overview',
                'fujian/xiamen.html': 'xiamen',
                'fujian/fuzhou.html': 'fuzhou',
                'fujian/quanzhou.html': 'quanzhou',
                'xiamen.html': 'xiamen',
                'fuzhou.html': 'fuzhou',
                'quanzhou.html': 'quanzhou',
                'jiangxi/jiangxi.html': 'jiangxi-overview',
                'jiangxi.html': 'jiangxi-overview',
                'jiangxi/nanchang.html': 'nanchang',
                'nanchang.html': 'nanchang',
                'guangxi/guangxi.html': 'guangxi-overview',
                'guangxi.html': 'guangxi-overview',
                'guangxi/nanning.html': 'nanning',
                'guangxi/yulin.html': 'yulin',
                'nanning.html': 'nanning',
                'yulin.html': 'yulin',
                'shaanxi/shaanxi.html': 'shaanxi-overview',
                'shaanxi.html': 'shaanxi-overview',
                'shaanxi/xian.html': 'xian',
                'xian.html': 'xian',
                'henan/henan.html': 'henan-overview',
                'henan.html': 'henan-overview',
                'henan/zhengzhou.html': 'zhengzhou',
                'zhengzhou.html': 'zhengzhou',
                'shanxi/shanxi.html': 'shanxi-overview',
                'shanxi.html': 'shanxi-overview',
                'shanxi/taiyuan.html': 'taiyuan',
                'shanxi/datong.html': 'datong',
                'taiyuan.html': 'taiyuan',
                'datong.html': 'datong',
                'hebei/hebei.html': 'hebei-overview',
                'hebei.html': 'hebei-overview',
                'hebei/shijiazhuang.html': 'shijiazhuang',
                'hebei/baoding.html': 'baoding',
                'shijiazhuang.html': 'shijiazhuang',
                'baoding.html': 'baoding',
                'neimenggu/neimenggu.html': 'neimenggu',
                'neimenggu.html': 'neimenggu',
                'liaoning/liaoning.html': 'liaoning-overview',
                'liaoning.html': 'liaoning-overview',
                'liaoning/shenyang.html': 'shenyang',
                'liaoning/dalian.html': 'dalian',
                'liaoning/fushun.html': 'fushun',
                'shenyang.html': 'shenyang',
                'dalian.html': 'dalian',
                'fushun.html': 'fushun',
                'jilin/jilin.html': 'jilin',
                'jilin.html': 'jilin',
                'heilongjiang/heilongjiang.html': 'heilongjiang',
                'heilongjiang.html': 'heilongjiang',
                'yunnan/yunnan.html': 'yunnan-overview',
                'yunnan.html': 'yunnan-overview',
                'yunnan/kunming.html': 'kunming',
                'kunming.html': 'kunming',
                'guizhou/guizhou.html': 'guizhou',
                'guizhou.html': 'guizhou',
                'xinjiang/xinjiang.html': 'xinjiang-overview',
                'xinjiang.html': 'xinjiang-overview',
                'xinjiang/hami.html': 'hami',
                'hami.html': 'hami',
                'qinghai/qinghai.html': 'qinghai',
                'qinghai.html': 'qinghai',
                'ningxia/ningxia.html': 'ningxia',
                'ningxia.html': 'ningxia',
                'hongkong/hongkong.html': 'hongkong',
                'hongkong.html': 'hongkong',
                'taiwan/taiwan.html': 'taiwan',
                'taiwan.html': 'taiwan',
                'macau/macau.html': 'macau',
                'macau.html': 'macau',
                'hainan/hainan.html': 'hainan-overview',
                'hainan.html': 'hainan-overview',
                'hainan/haikou.html': 'haikou',
                'haikou.html': 'haikou',
                'xizang/xizang.html': 'xizang',
                'xizang.html': 'xizang',
                'chongqing/chongqing.html': 'chongqing',
                'chongqing.html': 'chongqing'
        };

        var navId = pathToId[href];
        if (navId && hasParentNavigator()) {
            saveScroll();
            window.parent.postMessage({ type: 'opc-navigate', navId: navId }, '*');
        } else {
            window.location.href = href;
        }
    }
});

// --- Scroll position save/restore ---
function getPageKey() {
    return 'opc-scroll-' + window.location.pathname;
}

function saveScroll() {
    sessionStorage.setItem(getPageKey(), String(window.scrollY));
}

function restoreScroll() {
    var saved = sessionStorage.getItem(getPageKey());
    if (saved) {
        var y = parseInt(saved, 10);
        if (!isNaN(y) && y > 0) {
            window.scrollTo(0, y);
        }
    }
}

window.addEventListener('beforeunload', saveScroll);

// --- History state from parent ---
var canBack = false;
var canForward = false;

// --- Floating buttons ---
function createFloatingButtons() {
    // Remove existing buttons if any
    var old = document.querySelector('.float-btns');
    if (old) old.remove();

    var wrap = document.createElement('div');
    wrap.className = 'float-btns';

    if (hasParentNavigator()) {
        // 上一页 button
        var backBtn = document.createElement('button');
        backBtn.className = 'float-btn nav-back-btn';
        backBtn.innerHTML = '← 上一页';
        backBtn.title = '上一页';
        if (!canBack) backBtn.classList.add('disabled');
        backBtn.addEventListener('click', function() {
            if (canBack) {
                saveScroll();
                window.parent.postMessage({ type: 'opc-go-back' }, '*');
            }
        });
        wrap.appendChild(backBtn);

        // 下一页 button
        var forwardBtn = document.createElement('button');
        forwardBtn.className = 'float-btn nav-forward-btn';
        forwardBtn.innerHTML = '下一页 →';
        forwardBtn.title = '下一页';
        if (!canForward) forwardBtn.classList.add('disabled');
        forwardBtn.addEventListener('click', function() {
            if (canForward) {
                saveScroll();
                window.parent.postMessage({ type: 'opc-go-forward' }, '*');
            }
        });
        wrap.appendChild(forwardBtn);
    }

    // 页首 button
    var topBtn = document.createElement('button');
    topBtn.className = 'float-btn top-btn';
    topBtn.innerHTML = '⬆ 页首';
    topBtn.title = '回到页首';
    topBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    wrap.appendChild(topBtn);

    document.body.appendChild(wrap);
}

// Listen for messages from parent
window.addEventListener('message', function(e) {
    if (!e.data || !e.data.type) return;

    if (e.data.type === 'opc-history-state') {
        canBack = e.data.canBack;
        canForward = e.data.canForward;
        createFloatingButtons();
    } else if (e.data.type === 'opc-save-scroll') {
        saveScroll();
    }
});

// --- Init on DOM ready ---
document.addEventListener('DOMContentLoaded', function() {
    restoreScroll();
    createFloatingButtons();
});
