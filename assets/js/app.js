var $ = require('jquery');
global.$ = global.jQuery = $;

require('bootstrap-sass');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});