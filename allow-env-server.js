var obj = {};
allowEnv = function (variables) {
    _.each(variables, function (value, key) {
        obj[key] = value ? process.env[key] : undefined;
    });
    Inject.obj('env', obj);
};