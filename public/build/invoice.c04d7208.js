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
            items: '.invoice-items',
            collection: '.table-items'
        },
        btn: '<button class="add-item" type="button">Add item</button>'
    };

    function Invoice() {
        this.$collectionHolder = null;
        this.run = run;
    }

    function addItemButton() {
        var $btn = $(config.btn);

        console.log($(config.selectors.items));
        $(config.selectors.items).append($btn);
    }

    function run() {
        $(document).ready(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsIml0ZW1zIiwiY29sbGVjdGlvbiIsImJ0biIsIiRjb2xsZWN0aW9uSG9sZGVyIiwicnVuIiwiYWRkSXRlbUJ1dHRvbiIsIiRidG4iLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kIiwiZG9jdW1lbnQiLCJyZWFkeSIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsbUJBQU8sZ0JBREE7QUFFUEMsd0JBQVk7QUFGTCxTQURBO0FBS1hDLGFBQUs7QUFMTSxLQUFiOztBQVFBLGFBQVNOLE9BQVQsR0FBbUI7QUFDZixhQUFLTyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLGFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVELGFBQVNDLGFBQVQsR0FBeUI7QUFDckIsWUFBSUMsT0FBT1QsRUFBRUMsT0FBT0ksR0FBVCxDQUFYOztBQUVBSyxnQkFBUUMsR0FBUixDQUFZWCxFQUFFQyxPQUFPQyxTQUFQLENBQWlCQyxLQUFuQixDQUFaO0FBQ0FILFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLEtBQW5CLEVBQTBCUyxNQUExQixDQUFpQ0gsSUFBakM7QUFDSDs7QUFFRCxhQUFTRixHQUFULEdBQWU7QUFDWFAsVUFBRWEsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJOO0FBQ0gsU0FGRDtBQUdIOztBQUVELFdBQU9ULE9BQVA7QUFFSCxDQTlCYyxDQThCYkMsQ0E5QmEsQ0FBZjs7QUFnQ0EsSUFBSWUsVUFBVSxJQUFJaEIsT0FBSixFQUFkO0FBQ0FnQixRQUFRUixHQUFSLEciLCJmaWxlIjoiaW52b2ljZS5jMDRkNzIwOC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJbnZvaWNlID0gKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICBpdGVtczogJy5pbnZvaWNlLWl0ZW1zJyxcclxuICAgICAgICAgIGNvbGxlY3Rpb246ICcudGFibGUtaXRlbXMnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0bjogJzxidXR0b24gY2xhc3M9XCJhZGQtaXRlbVwiIHR5cGU9XCJidXR0b25cIj5BZGQgaXRlbTwvYnV0dG9uPidcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gSW52b2ljZSgpIHtcclxuICAgICAgICB0aGlzLiRjb2xsZWN0aW9uSG9sZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJ1biA9IHJ1bjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtQnV0dG9uKCkge1xyXG4gICAgICAgIHZhciAkYnRuID0gJChjb25maWcuYnRuKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJChjb25maWcuc2VsZWN0b3JzLml0ZW1zKSk7XHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLml0ZW1zKS5hcHBlbmQoJGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9