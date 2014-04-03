(function(window, Models) {

  function Browser() {
    var self = this;

    self._isMobileSafari = function() {
      return /Mobile\/\w+ Safari\//.test(window.navigator.userAgent);
    };

    self._isMobileSafariStandalone = function() {
      return self.isMobileSafari && window.navigator.standalone;
    };

  };

  Browser.prototype.canScanCode = function() {
    return this._isMobileSafari() && !this._isMobileSafariStandalone();
  };

  Browser.prototype.hasCryptoGetRandomValues = function() {
    var crypto = window.crypto || window.msCrypto;

    if (crypto && crypto.getRandomValues) {
      return true;
    } else {
      return false;
    }
  };

  Models.browser = new Browser();
})(window, CoinPocketApp.Models);
