var $ = require('jquery');
global.$ = global.jQuery = $;

require('bootstrap-sass');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('a[data-toggle="collapse"]').click(function (e) {
       e.preventDefault();
    });
});