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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsIml0ZW1zIiwiY29sbGVjdGlvbiIsImJ0biIsIiRjb2xsZWN0aW9uSG9sZGVyIiwicnVuIiwiYWRkSXRlbUJ1dHRvbiIsIiRidG4iLCJhcHBlbmQiLCJkb2N1bWVudCIsInJlYWR5IiwiaW52b2ljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUFJQSxVQUFXLFVBQVVDLENBQVYsRUFBYTs7QUFFeEIsUUFBSUMsU0FBUztBQUNYQyxtQkFBVztBQUNQQyxtQkFBTyxnQkFEQTtBQUVQQyx3QkFBWTtBQUZMLFNBREE7QUFLWEMsYUFBSztBQUxNLEtBQWI7O0FBUUEsYUFBU04sT0FBVCxHQUFtQjtBQUNmLGFBQUtPLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixZQUFJQyxPQUFPVCxFQUFFQyxPQUFPSSxHQUFULENBQVg7O0FBRUFMLFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLEtBQW5CLEVBQTBCTyxNQUExQixDQUFpQ0QsSUFBakM7QUFDSDs7QUFFRCxhQUFTRixHQUFULEdBQWU7QUFDWFAsVUFBRVcsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJKO0FBQ0gsU0FGRDtBQUdIOztBQUVELFdBQU9ULE9BQVA7QUFFSCxDQTdCYyxDQTZCYkMsQ0E3QmEsQ0FBZjs7QUErQkEsSUFBSWEsVUFBVSxJQUFJZCxPQUFKLEVBQWQ7QUFDQWMsUUFBUU4sR0FBUixHIiwiZmlsZSI6Imludm9pY2UuMTMwOGY2YWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW52b2ljZSA9IChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgICAgaXRlbXM6ICcuaW52b2ljZS1pdGVtcycsXHJcbiAgICAgICAgICBjb2xsZWN0aW9uOiAnLnRhYmxlLWl0ZW1zJ1xyXG4gICAgICB9LFxyXG4gICAgICBidG46ICc8YnV0dG9uIGNsYXNzPVwiYWRkLWl0ZW1cIiB0eXBlPVwiYnV0dG9uXCI+QWRkIGl0ZW08L2J1dHRvbj4nXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIEludm9pY2UoKSB7XHJcbiAgICAgICAgdGhpcy4kY29sbGVjdGlvbkhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBydW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbigpIHtcclxuICAgICAgICB2YXIgJGJ0biA9ICQoY29uZmlnLmJ0bik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLml0ZW1zKS5hcHBlbmQoJGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9