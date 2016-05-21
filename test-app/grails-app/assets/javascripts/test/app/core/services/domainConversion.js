//= wrapped

angular
    .module("test.app.core")
    .factory("domainConversion", domainConversion);

function domainConversion($injector) {
    var domainCache = {};
    return function(domainClass, property) {
        return function(domain) {
            var Domain;
            if (!domainCache[domainClass]) { 
                domainCache[domainClass] = $injector.get(domainClass); console.log('executing the injector ' + domainClass);
            }
            Domain = domainCache[domainClass];
            domain[property] = new Domain(domain[property]);
            return domain;
        };
    };
}