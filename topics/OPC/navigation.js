// OPC Navigation System — iframe 架构

// 导航数据：新增页面只需在此添加一条记录
const NAV_DATA = [
    { id: 'china', name: '中国', path: '', parentId: null, order: 1 },
    { id: 'china-overview', name: '📋 国家总览', path: 'china/china.html', parentId: 'china', order: 0 },
    { id: 'guangdong', name: '广东省', path: '', parentId: 'china', order: 1 },
    { id: 'guangdong-overview', name: '📋 省总览', path: 'china/guangdong/guangdong.html', parentId: 'guangdong', order: 0 },
    { id: 'guangzhou', name: '广州市', path: 'china/guangdong/guangzhou.html', parentId: 'guangdong', order: 1 },
    { id: 'shenzhen', name: '深圳市', path: 'china/guangdong/shenzhen.html', parentId: 'guangdong', order: 2 },
    { id: 'foshan', name: '佛山市', path: 'china/guangdong/foshan.html', parentId: 'guangdong', order: 3 },
    { id: 'dongguan', name: '东莞市', path: 'china/guangdong/dongguan.html', parentId: 'guangdong', order: 4 },
    { id: 'zhuhai', name: '珠海市', path: 'china/guangdong/zhuhai.html', parentId: 'guangdong', order: 5 },
    { id: 'shanghai', name: '上海市', path: '', parentId: 'china', order: 2 },
    { id: 'shanghai-overview', name: '📋 市总览', path: 'china/shanghai/shanghai.html', parentId: 'shanghai', order: 0 },
    { id: 'yangpu', name: '杨浦区', path: 'china/shanghai/yangpu.html', parentId: 'shanghai', order: 1 },
    { id: 'jingan', name: '静安区', path: 'china/shanghai/jingan.html', parentId: 'shanghai', order: 2 },
    { id: 'xuhui', name: '徐汇区', path: 'china/shanghai/xuhui.html', parentId: 'shanghai', order: 3 },
    { id: 'beijing', name: '北京市', path: '', parentId: 'china', order: 3 },
    { id: 'beijing-overview', name: '📋 市总览', path: 'china/beijing/beijing.html', parentId: 'beijing', order: 0 },
    { id: 'haidian', name: '海淀区', path: 'china/beijing/haidian.html', parentId: 'beijing', order: 1 },
    { id: 'yizhuang', name: '亦庄（经开区）', path: 'china/beijing/yizhuang.html', parentId: 'beijing', order: 2 },
    { id: 'jiangsu', name: '江苏省', path: '', parentId: 'china', order: 4 },
    { id: 'jiangsu-overview', name: '📋 省总览', path: 'china/jiangsu/jiangsu.html', parentId: 'jiangsu', order: 0 },
    { id: 'nanjing', name: '南京市', path: 'china/jiangsu/nanjing.html', parentId: 'jiangsu', order: 1 },
    { id: 'suzhou', name: '苏州市', path: 'china/jiangsu/suzhou.html', parentId: 'jiangsu', order: 2 },
    { id: 'wuxi', name: '无锡市', path: 'china/jiangsu/wuxi.html', parentId: 'jiangsu', order: 3 },
    { id: 'changzhou', name: '常州市', path: 'china/jiangsu/changzhou.html', parentId: 'jiangsu', order: 4 },
    { id: 'nantong', name: '南通市', path: 'china/jiangsu/nantong.html', parentId: 'jiangsu', order: 5 },
    { id: 'yangzhou', name: '扬州市', path: 'china/jiangsu/yangzhou.html', parentId: 'jiangsu', order: 6 },
    { id: 'xuzhou', name: '徐州市', path: 'china/jiangsu/xuzhou.html', parentId: 'jiangsu', order: 7 },
    { id: 'taizhou-js', name: '泰州市', path: 'china/jiangsu/taizhou-js.html', parentId: 'jiangsu', order: 8 },
    { id: 'zhejiang', name: '浙江省', path: '', parentId: 'china', order: 5 },
    { id: 'zhejiang-overview', name: '📋 省总览', path: 'china/zhejiang/zhejiang.html', parentId: 'zhejiang', order: 0 },
    { id: 'hangzhou', name: '杭州市', path: 'china/zhejiang/hangzhou.html', parentId: 'zhejiang', order: 1 },
    { id: 'ningbo', name: '宁波市', path: 'china/zhejiang/ningbo.html', parentId: 'zhejiang', order: 2 },
    { id: 'taizhou', name: '台州市', path: 'china/zhejiang/taizhou.html', parentId: 'zhejiang', order: 3 },
    { id: 'wenzhou', name: '温州市', path: 'china/zhejiang/wenzhou.html', parentId: 'zhejiang', order: 4 },
    { id: 'shaoxing', name: '绍兴市', path: 'china/zhejiang/shaoxing.html', parentId: 'zhejiang', order: 5 },
    { id: 'hubei', name: '湖北省', path: '', parentId: 'china', order: 6 },
    { id: 'hubei-overview', name: '📋 省总览', path: 'china/hubei/hubei.html', parentId: 'hubei', order: 0 },
    { id: 'wuhan', name: '武汉市', path: 'china/hubei/wuhan.html', parentId: 'hubei', order: 1 },
    { id: 'yichang', name: '宜昌市', path: 'china/hubei/yichang.html', parentId: 'hubei', order: 2 },
    { id: 'sichuan', name: '四川省', path: '', parentId: 'china', order: 7 },
    { id: 'sichuan-overview', name: '📋 省总览', path: 'china/sichuan/sichuan.html', parentId: 'sichuan', order: 0 },
    { id: 'chengdu', name: '成都市', path: 'china/sichuan/chengdu.html', parentId: 'sichuan', order: 1 },
    { id: 'anhui', name: '安徽省', path: '', parentId: 'china', order: 8 },
    { id: 'anhui-overview', name: '📋 省总览', path: 'china/anhui/anhui.html', parentId: 'anhui', order: 0 },
    { id: 'hefei', name: '合肥市', path: 'china/anhui/hefei.html', parentId: 'anhui', order: 1 },
    { id: 'maanshan', name: '马鞍山市', path: 'china/anhui/maanshan.html', parentId: 'anhui', order: 2 },
    { id: 'shandong', name: '山东省', path: '', parentId: 'china', order: 9 },
    { id: 'shandong-overview', name: '📋 省总览', path: 'china/shandong/shandong.html', parentId: 'shandong', order: 0 },
    { id: 'jinan', name: '济南市', path: 'china/shandong/jinan.html', parentId: 'shandong', order: 1 },
    { id: 'qingdao', name: '青岛市', path: 'china/shandong/qingdao.html', parentId: 'shandong', order: 2 },
    { id: 'hunan', name: '湖南省', path: '', parentId: 'china', order: 10 },
    { id: 'hunan-overview', name: '📋 省总览', path: 'china/hunan/hunan.html', parentId: 'hunan', order: 0 },
    { id: 'changsha', name: '长沙市', path: 'china/hunan/changsha.html', parentId: 'hunan', order: 1 },
    { id: 'fujian', name: '福建省', path: '', parentId: 'china', order: 11 },
    { id: 'fujian-overview', name: '📋 省总览', path: 'china/fujian/fujian.html', parentId: 'fujian', order: 0 },
    { id: 'xiamen', name: '厦门市', path: 'china/fujian/xiamen.html', parentId: 'fujian', order: 1 },
    { id: 'fuzhou', name: '福州市', path: 'china/fujian/fuzhou.html', parentId: 'fujian', order: 2 },
    { id: 'quanzhou', name: '泉州市', path: 'china/fujian/quanzhou.html', parentId: 'fujian', order: 3 },
    { id: 'jiangxi', name: '江西省', path: '', parentId: 'china', order: 12 },
    { id: 'jiangxi-overview', name: '📋 省总览', path: 'china/jiangxi/jiangxi.html', parentId: 'jiangxi', order: 0 },
    { id: 'nanchang', name: '南昌市', path: 'china/jiangxi/nanchang.html', parentId: 'jiangxi', order: 1 },
    { id: 'guangxi', name: '广西壮族自治区', path: '', parentId: 'china', order: 13 },
    { id: 'guangxi-overview', name: '📋 区总览', path: 'china/guangxi/guangxi.html', parentId: 'guangxi', order: 0 },
    { id: 'nanning', name: '南宁市', path: 'china/guangxi/nanning.html', parentId: 'guangxi', order: 1 },
    { id: 'yulin', name: '玉林市', path: 'china/guangxi/yulin.html', parentId: 'guangxi', order: 2 },
    { id: 'shaanxi', name: '陕西省', path: '', parentId: 'china', order: 14 },
    { id: 'shaanxi-overview', name: '📋 省总览', path: 'china/shaanxi/shaanxi.html', parentId: 'shaanxi', order: 0 },
    { id: 'xian', name: '西安市', path: 'china/shaanxi/xian.html', parentId: 'shaanxi', order: 1 },
    { id: 'henan', name: '河南省', path: '', parentId: 'china', order: 15 },
    { id: 'henan-overview', name: '📋 省总览', path: 'china/henan/henan.html', parentId: 'henan', order: 0 },
    { id: 'zhengzhou', name: '郑州市', path: 'china/henan/zhengzhou.html', parentId: 'henan', order: 1 },
    { id: 'shanxi', name: '山西省', path: '', parentId: 'china', order: 16 },
    { id: 'shanxi-overview', name: '📋 省总览', path: 'china/shanxi/shanxi.html', parentId: 'shanxi', order: 0 },
    { id: 'taiyuan', name: '太原市', path: 'china/shanxi/taiyuan.html', parentId: 'shanxi', order: 1 },
    { id: 'datong', name: '大同市', path: 'china/shanxi/datong.html', parentId: 'shanxi', order: 2 },
    { id: 'hebei', name: '河北省', path: '', parentId: 'china', order: 17 },
    { id: 'hebei-overview', name: '📋 省总览', path: 'china/hebei/hebei.html', parentId: 'hebei', order: 0 },
    { id: 'shijiazhuang', name: '石家庄市', path: 'china/hebei/shijiazhuang.html', parentId: 'hebei', order: 1 },
    { id: 'baoding', name: '保定市', path: 'china/hebei/baoding.html', parentId: 'hebei', order: 2 },
    { id: 'neimenggu', name: '内蒙古自治区', path: 'china/neimenggu/neimenggu.html', parentId: 'china', order: 18 },
    { id: 'liaoning', name: '辽宁省', path: '', parentId: 'china', order: 19 },
    { id: 'liaoning-overview', name: '📋 省总览', path: 'china/liaoning/liaoning.html', parentId: 'liaoning', order: 0 },
    { id: 'shenyang', name: '沈阳市', path: 'china/liaoning/shenyang.html', parentId: 'liaoning', order: 1 },
    { id: 'dalian', name: '大连市', path: 'china/liaoning/dalian.html', parentId: 'liaoning', order: 2 },
    { id: 'fushun', name: '抚顺市', path: 'china/liaoning/fushun.html', parentId: 'liaoning', order: 3 },
    { id: 'jilin', name: '吉林省', path: 'china/jilin/jilin.html', parentId: 'china', order: 20 },
    { id: 'heilongjiang', name: '黑龙江省', path: 'china/heilongjiang/heilongjiang.html', parentId: 'china', order: 21 },
    { id: 'yunnan', name: '云南省', path: '', parentId: 'china', order: 22 },
    { id: 'yunnan-overview', name: '📋 省总览', path: 'china/yunnan/yunnan.html', parentId: 'yunnan', order: 0 },
    { id: 'kunming', name: '昆明市', path: 'china/yunnan/kunming.html', parentId: 'yunnan', order: 1 },
    { id: 'guizhou', name: '贵州省', path: 'china/guizhou/guizhou.html', parentId: 'china', order: 23 },
    { id: 'xinjiang', name: '新疆维吾尔自治区', path: '', parentId: 'china', order: 24 },
    { id: 'xinjiang-overview', name: '📋 区总览', path: 'china/xinjiang/xinjiang.html', parentId: 'xinjiang', order: 0 },
    { id: 'hami', name: '哈密市', path: 'china/xinjiang/hami.html', parentId: 'xinjiang', order: 1 },
    { id: 'qinghai', name: '青海省', path: 'china/qinghai/qinghai.html', parentId: 'china', order: 25 },
    { id: 'ningxia', name: '宁夏回族自治区', path: 'china/ningxia/ningxia.html', parentId: 'china', order: 26 },
    { id: 'hongkong', name: '香港特别行政区', path: 'china/hongkong/hongkong.html', parentId: 'china', order: 27 },
    { id: 'taiwan', name: '台湾地区', path: 'china/taiwan/taiwan.html', parentId: 'china', order: 28 },
    { id: 'macau', name: '澳门特别行政区', path: 'china/macau/macau.html', parentId: 'china', order: 29 },
    { id: 'hainan', name: '海南省', path: '', parentId: 'china', order: 30 },
    { id: 'hainan-overview', name: '📋 省总览', path: 'china/hainan/hainan.html', parentId: 'hainan', order: 0 },
    { id: 'haikou', name: '海口市', path: 'china/hainan/haikou.html', parentId: 'hainan', order: 1 },
    { id: 'xizang', name: '西藏自治区', path: 'china/xizang/xizang.html', parentId: 'china', order: 31 },
    { id: 'chongqing', name: '重庆市', path: 'china/chongqing/chongqing.html', parentId: 'china', order: 32 }
];

// --- Utility ---

function getChildren(parentId) {
    return NAV_DATA.filter(item => item.parentId === parentId)
        .sort((a, b) => a.order - b.order);
}

function getAncestors(id) {
    const ancestors = [];
    let current = NAV_DATA.find(item => item.id === id);
    while (current && current.parentId) {
        current = NAV_DATA.find(item => item.id === current.parentId);
        if (current) ancestors.unshift(current.id);
    }
    return ancestors;
}

// --- Rendering ---

function buildNavTree(parentId, activeId) {
    const children = getChildren(parentId);
    if (children.length === 0) return '';

    let html = '<ul>';
    children.forEach(item => {
        const hasChildren = getChildren(item.id).length > 0;
        const isActive = item.id === activeId;
        const isAncestor = activeId ? getAncestors(activeId).includes(item.id) : false;

        if (hasChildren) {
            html += '<li class="nav-group">';
            html += `<a class="nav-link ${isActive ? 'active' : ''} ${isAncestor ? 'ancestor' : ''}" data-nav-id="${item.id}">`;
            html += `<span class="nav-name">${item.name}</span>`;
            html += `<span class="nav-arrow ${isAncestor || isActive ? 'open' : ''}">▶</span>`;
            html += '</a>';
            html += `<div class="nav-sub ${isAncestor || isActive ? 'open' : ''}">`;
            html += buildNavTree(item.id, activeId);
            html += '</div>';
            html += '</li>';
        } else {
            html += '<li>';
            html += `<a class="nav-link ${isActive ? 'active' : ''}" data-nav-id="${item.id}">${item.name}</a>`;
            html += '</li>';
        }
    });
    html += '</ul>';
    return html;
}

// --- History ---

let history = [];
let historyIndex = -1;

function saveHistory() {
    sessionStorage.setItem('opc-history', JSON.stringify(history));
    sessionStorage.setItem('opc-history-index', String(historyIndex));
}

function pushHistory(navId) {
    // Remove any forward history when navigating to a new page
    history = history.slice(0, historyIndex + 1);
    history.push(navId);
    historyIndex = history.length - 1;
    saveHistory();
    notifyHistoryState();
}

function historyGoBack() {
    if (historyIndex <= 0) return;
    historyIndex--;
    const navId = history[historyIndex];
    saveHistory();
    loadPage(navId);
    notifyHistoryState();
}

function historyGoForward() {
    if (historyIndex >= history.length - 1) return;
    historyIndex++;
    const navId = history[historyIndex];
    saveHistory();
    loadPage(navId);
    notifyHistoryState();
}

function notifyHistoryState() {
    const frame = document.getElementById('contentFrame');
    if (frame && frame.contentWindow) {
        frame.contentWindow.postMessage({
            type: 'opc-history-state',
            canBack: historyIndex > 0,
            canForward: historyIndex < history.length - 1
        }, '*');
    }
}

// --- Navigation ---

let currentActiveId = null;

function loadPage(navId) {
    const item = NAV_DATA.find(d => d.id === navId);
    if (!item || !item.path) return;

    currentActiveId = navId;
    updateActiveHighlight(navId);
    sessionStorage.setItem('opc-active', navId);

    const frame = document.getElementById('contentFrame');
    if (frame) frame.src = item.path;
}

function navigateTo(navId) {
    const item = NAV_DATA.find(d => d.id === navId);
    if (!item || !item.path) return;

    if (navId === currentActiveId) return;

    // Save scroll position of current iframe page before switching
    const frame = document.getElementById('contentFrame');
    if (frame && frame.contentWindow) {
        frame.contentWindow.postMessage({ type: 'opc-save-scroll' }, '*');
    }

    pushHistory(navId);
    loadPage(navId);
}

function updateActiveHighlight(activeId) {
    const container = document.getElementById('navContainer');
    if (!container) return;

    // Only update active/ancestor classes, never touch expand/collapse state
    container.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active', 'ancestor');
    });

    const ancestors = getAncestors(activeId);
    container.querySelectorAll('.nav-link').forEach(link => {
        const id = link.getAttribute('data-nav-id');
        if (id === activeId) {
            link.classList.add('active');
        } else if (ancestors.includes(id)) {
            link.classList.add('ancestor');
        }
    });
}

// --- Init ---

function saveExpandedState() {
    const expanded = [];
    document.querySelectorAll('.nav-sub.open').forEach(sub => {
        const link = sub.parentElement.querySelector('.nav-link');
        if (link) expanded.push(link.getAttribute('data-nav-id'));
    });
    sessionStorage.setItem('opc-expanded', JSON.stringify(expanded));
}

function restoreExpandedState() {
    const stored = sessionStorage.getItem('opc-expanded');
    if (!stored) return;
    let ids;
    try { ids = JSON.parse(stored); } catch { return; }
    ids.forEach(id => {
        const link = document.querySelector(`[data-nav-id="${id}"]`);
        if (link) {
            const arrow = link.querySelector('.nav-arrow');
            const sub = link.parentElement.querySelector('.nav-sub');
            if (arrow) arrow.classList.add('open');
            if (sub) sub.classList.add('open');
        }
    });
}

function initNavigation() {
    const container = document.getElementById('navContainer');
    if (!container) return;

    currentActiveId = sessionStorage.getItem('opc-active') || 'china-overview';
    container.innerHTML = buildNavTree(null, currentActiveId);

    restoreExpandedState();

    // Restore or init history
    const storedHistory = sessionStorage.getItem('opc-history');
    const storedIndex = sessionStorage.getItem('opc-history-index');
    if (storedHistory) {
        try {
            history = JSON.parse(storedHistory);
            historyIndex = storedIndex ? parseInt(storedIndex, 10) : history.length - 1;
        } catch {
            history = [currentActiveId];
            historyIndex = 0;
        }
    } else {
        history = [currentActiveId];
        historyIndex = 0;
    }

    container.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const navId = this.getAttribute('data-nav-id');
            const arrow = this.querySelector('.nav-arrow');
            const sub = this.parentElement.querySelector('.nav-sub');

            if (arrow && sub) {
                sub.classList.toggle('open');
                arrow.classList.toggle('open');
                saveExpandedState();
                return;
            }

            if (navId && navId !== currentActiveId) {
                navigateTo(navId);
            }
        });
    });

    const item = NAV_DATA.find(d => d.id === currentActiveId);
    const frame = document.getElementById('contentFrame');
    if (item && item.path && frame) frame.src = item.path;
}

// --- Sidebar toggle ---

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const btn = document.getElementById('toggleBtn');
    const mainContent = document.querySelector('.main-content');

    if (!sidebar || !btn) return;

    const isCollapsed = sidebar.classList.toggle('collapsed');

    if (isCollapsed) {
        btn.classList.add('collapsed');
        document.body.appendChild(btn);
        if (mainContent) mainContent.classList.add('expanded');
    } else {
        btn.classList.remove('collapsed');
        sidebar.querySelector('.sidebar-header').appendChild(btn);
        if (mainContent) mainContent.classList.remove('expanded');
    }
}

// --- Init on DOM ready ---
document.addEventListener('DOMContentLoaded', initNavigation);

// Listen for messages from iframe
window.addEventListener('message', function(e) {
    if (!e.data || !e.data.type) return;

    if (e.data.type === 'opc-navigate') {
        if (e.data.navId) navigateTo(e.data.navId);
    } else if (e.data.type === 'opc-go-back') {
        historyGoBack();
    } else if (e.data.type === 'opc-go-forward') {
        historyGoForward();
    }
});

// Notify history state when iframe finishes loading
document.addEventListener('DOMContentLoaded', function() {
    var frame = document.getElementById('contentFrame');
    if (frame) {
        frame.addEventListener('load', function() {
            notifyHistoryState();
        });
    }
});
