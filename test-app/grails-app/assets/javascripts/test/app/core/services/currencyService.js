//= wrapped

angular
    .module("test.app.core")
    .service("currencyService", currencyService);

function currencyService() {
    this.get = function () {
        return [
    "EUR",
    "XCD",
    "USD",
    "XOF",
    "NOK",
    "AUD",
    "XAF",
    "NZD",
    "MAD",
    "DKK",
    "GBP",
    "CHF",
    "XPF",
    "ILS",
    "ROL",
    "TRL"
];
    }
}