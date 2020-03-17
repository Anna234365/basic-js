module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 1;
        let depth = 0;
        
        arr.forEach(item => Array.isArray(item) ? 
        (count = this.calculateDepth(item), depth < count ? depth = count : false) : false);

        return ++depth;
    };
}

