UserModule.UserInformation = (function () {
    var init = function () {
         ko.applyBindings(UserModule.UserInformationViewModel);
    };

    var resetViewModel = function () {
        UserModule.UserInformationViewModel.Information(undefined);
        UserModule.UserInformationViewModel.Repository.removeAll();
    };

    var getUserDataCallback = function (data) {
        UserModule.UserInformationViewModel.Information(ko.mapping.fromJS(data));
    };

    var sortingArray = function (array, prop) {
        var data = _(array).sortBy(prop).reverse();
        return data;
    };

    var getReposCallback = function (data) {
        var sorteddata = sortingArray(data, 'stargazers_count');
        ko.mapping.fromJS(sorteddata, {}, UserModule.UserInformationViewModel.Repository);
    };

    var getData = function () {
        resetViewModel();
        var url = 'https://api.github.com/users/' + UserModule.UserInformationViewModel.UserName();

        UserModule.Service.GetRequest(url, function (data) {
            getUserDataCallback(data);
            if (data.repos_url) {
                UserModule.Service.GetRequest(data.repos_url, function (repos) {
                    getReposCallback(repos);
                });
            }
        });
    };


    return {
        Init: init,
        GetData: getData

    };
})();