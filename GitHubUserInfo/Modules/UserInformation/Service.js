UserModule.Service = (function () {

    var getRequest = function (url, callback) {
        $.get(url, function (data) {
            callback(data);
        });
    };
    return {
        GetRequest: getRequest

    };
})();