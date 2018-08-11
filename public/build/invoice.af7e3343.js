webpackJsonp([3],{

/***/ "./assets/js/invoice.js":
/*!******************************!*\
  !*** ./assets/js/invoice.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var Invoice = function ($) {

    var config = {
        selectors: {
            header: '.invoice-items .header',
            collection: '.table-items'
        },
        btn: '<button class="add-item" type="button"><i class="fa fa-plus"></i>Add item</button>'
    };

    function Invoice() {
        this.$collectionHolder = null;
        this.run = run;
    }

    function addItemButton() {
        var $btn = $(config.btn);

        $(config.selectors.header).append($btn);
    }

    function setCollectionHolder(holder) {
        Invoice.$collectionHolder = holder;
    }

    function setCollectionIndex(index) {}

    function run() {
        $(document).ready(function () {
            $;

            addItemButton();
        });
    }

    return Invoice;
}($);

var invoice = new Invoice();
invoice.run();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/invoice.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZG9jdW1lbnQiLCJyZWFkeSIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsb0JBQVEsd0JBREQ7QUFFUEMsd0JBQVk7QUFGTCxTQURBO0FBS1hDLGFBQUs7QUFMTSxLQUFiOztBQVFBLGFBQVNOLE9BQVQsR0FBbUI7QUFDZixhQUFLTyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLGFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVELGFBQVNDLGFBQVQsR0FBeUI7QUFDckIsWUFBSUMsT0FBT1QsRUFBRUMsT0FBT0ksR0FBVCxDQUFYOztBQUVBTCxVQUFFQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFuQixFQUEyQk8sTUFBM0IsQ0FBa0NELElBQWxDO0FBQ0g7O0FBRUQsYUFBU0UsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDYixnQkFBUU8saUJBQVIsR0FBNEJNLE1BQTVCO0FBQ0g7O0FBRUQsYUFBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DLENBRWxDOztBQUVELGFBQVNQLEdBQVQsR0FBZTtBQUNYUCxVQUFFZSxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQmhCOztBQUVBUTtBQUNILFNBSkQ7QUFLSDs7QUFFRCxXQUFPVCxPQUFQO0FBRUgsQ0F2Q2MsQ0F1Q2JDLENBdkNhLENBQWY7O0FBeUNBLElBQUlpQixVQUFVLElBQUlsQixPQUFKLEVBQWQ7QUFDQWtCLFFBQVFWLEdBQVIsRyIsImZpbGUiOiJpbnZvaWNlLmFmN2UzMzQzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEludm9pY2UgPSAoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICAgIGhlYWRlcjogJy5pbnZvaWNlLWl0ZW1zIC5oZWFkZXInLFxyXG4gICAgICAgICAgY29sbGVjdGlvbjogJy50YWJsZS1pdGVtcydcclxuICAgICAgfSxcclxuICAgICAgYnRuOiAnPGJ1dHRvbiBjbGFzcz1cImFkZC1pdGVtXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5BZGQgaXRlbTwvYnV0dG9uPidcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gSW52b2ljZSgpIHtcclxuICAgICAgICB0aGlzLiRjb2xsZWN0aW9uSG9sZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJ1biA9IHJ1bjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtQnV0dG9uKCkge1xyXG4gICAgICAgIHZhciAkYnRuID0gJChjb25maWcuYnRuKTtcclxuXHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLmhlYWRlcikuYXBwZW5kKCRidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25Ib2xkZXIoaG9sZGVyKSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlciA9IGhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJFxyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9