// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create public/build/app.js and public/build/app.css
    // .addEntry('app', './assets/js/app.js')
    .addEntry('app', [
        './assets/js/app.js',
        './assets/css/app.scss',
        './assets/css/mobile.scss'
    ])
    .createSharedEntry('vendor', ['jquery', 'bootstrap-sass'])
    // .addEntry('app_css', './assets/css/app.scss')
    // .addEntry('mobile_css', './assets/css/mobile.scss')
    .addEntry('branches', './assets/js/branches.js')
    .addEntry('table', './assets/js/table.js')
    .addEntry('folder-manager', './assets/js/folder-manager.js')
    .addEntry('invoice', './assets/js/invoice.js')
    .addEntry('meeting', './assets/js/meeting.js')

    // allow sass/scss files to be processed
    .enableSassLoader(function (sassOptions) {}, {
        resolveUrlLoader: false
    })

    // .enableVersioning()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

// create hashed filenames (e.g. app.abc123.css)
.enableVersioning()
;

var config = Encore.getWebpackConfig();

config.watchOptions = {
  poll: true,
};

// export the final configuration
module.exports = config;