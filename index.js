module.exports = function(timer) {
    return Math.ceil(timer._idleStart + timer._idleTimeout - Date.now());
};