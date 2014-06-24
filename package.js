Package.describe({
  summary: "Expose environment variables to the client."
});

Package.on_use(function (api, where) {
  api.use('inject-initial', ['client', 'server']);
  api.use('underscore', ['server']);
  api.add_files('allow-env-client.js', ['client']);
  api.add_files('allow-env-server.js', ['server']);
  api.export('allowEnv', ['server']);
  api.export('process', ['client']);
});

Package.on_test(function (api) {
  api.use('allow-env');
  api.add_files('allow-env_tests.js', ['client', 'server']);
});
