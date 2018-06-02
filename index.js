
const any = function() {
    return this.some(function(x) { return x; });
}

if (Array.prototype.any === undefined) {
    Array.prototype.any	= any;
}

module.exports = any;
