module.exports = function(timer) {
    return Math.ceil(timer._idleStart.getTime() + timer._idleTimeout - Date.now());
};