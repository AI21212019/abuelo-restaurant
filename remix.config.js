/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'app',
  ignoredRouteFiles: ['**/.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
  assetsBuildDirectory: 'public/build',
  cacheDirectory: './node_modules/.cache/remix'
};
