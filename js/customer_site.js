const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    360: {
        api: 'https://360zyzz.com/api.php/provide/vod',
        name: '360资源',
    },
    ikresource: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'IK资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
