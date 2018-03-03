(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('objRemoveQuote', function () {
    /**
     * @description 对象移除引用
     * @param {Object} obj - 参数需要是一个对象或者是一个数组,这里一定不能给默认值,否则undefined就没了
     * */
    function objRemoveQuote(obj) {
        const objType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
        if (objType !== 'object' && objType !== 'array') {
            return obj;
        }
        let newObj = {};
        if (objType === 'array') {
            newObj = [];
        }
        Object.keys(obj).forEach(function (attr) {
            newObj[attr] = objRemoveQuote(obj[attr]);
        });
        return newObj;
    }

    return objRemoveQuote;
});
