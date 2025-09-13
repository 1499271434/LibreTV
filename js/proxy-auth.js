/**
 * 代理请求鉴权模块
 * 为代理请求添加基于 PASSWORD 的鉴权机制
 */

/**
 * 为代理请求URL添加鉴权参数
 * 现在直接返回原始URL，不需要鉴权
 */
async function addAuthToProxyUrl(url) {
    return url;
}

/**
 * 验证代理请求的鉴权
 * 现在直接返回true，不需要验证
 */
function validateProxyAuth(authHash, serverPasswordHash, timestamp) {
    return true;
}

/**
 * 清除缓存的鉴权信息
 * 现在不需要做任何事情
 */
function clearAuthCache() {
    // 不需要做任何事情
}

// 导出函数
window.ProxyAuth = {
    addAuthToProxyUrl,
    validateProxyAuth,
    clearAuthCache
};
