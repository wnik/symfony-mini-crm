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
            collection: '.table-items',
            btn: '.add-item'
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

    function setCollectionIndex(index) {
        Invoice.$collectionHolder.data('index', index);
    }

    function onAddItemClick() {
        $('body').on('click');
    }

    function run() {
        $(document).ready(function () {

            var index = Invoice.$collectionHolder.find('tr').length;

            setCollectionHolder($(config.selectors.collection));
            setCollectionIndex(index);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsIm9uQWRkSXRlbUNsaWNrIiwib24iLCJkb2N1bWVudCIsInJlYWR5IiwiZmluZCIsImxlbmd0aCIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsb0JBQVEsd0JBREQ7QUFFUEMsd0JBQVksY0FGTDtBQUdQQyxpQkFBSztBQUhFLFNBREE7QUFNWEEsYUFBSztBQU5NLEtBQWI7O0FBU0EsYUFBU04sT0FBVCxHQUFtQjtBQUNmLGFBQUtPLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixZQUFJQyxPQUFPVCxFQUFFQyxPQUFPSSxHQUFULENBQVg7O0FBRUFMLFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQW5CLEVBQTJCTyxNQUEzQixDQUFrQ0QsSUFBbEM7QUFDSDs7QUFFRCxhQUFTRSxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDakNiLGdCQUFRTyxpQkFBUixHQUE0Qk0sTUFBNUI7QUFDSDs7QUFFRCxhQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDL0JmLGdCQUFRTyxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELEtBQXhDO0FBQ0g7O0FBRUQsYUFBU0UsY0FBVCxHQUEwQjtBQUN0QmhCLFVBQUUsTUFBRixFQUFVaUIsRUFBVixDQUFhLE9BQWI7QUFDSDs7QUFFRCxhQUFTVixHQUFULEdBQWU7QUFDWFAsVUFBRWtCLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUUxQixnQkFBSUwsUUFBUWYsUUFBUU8saUJBQVIsQ0FBMEJjLElBQTFCLENBQStCLElBQS9CLEVBQXFDQyxNQUFqRDs7QUFFQVYsZ0NBQW9CWCxFQUFFQyxPQUFPQyxTQUFQLENBQWlCRSxVQUFuQixDQUFwQjtBQUNBUywrQkFBbUJDLEtBQW5COztBQUVBTjtBQUNILFNBUkQ7QUFTSDs7QUFFRCxXQUFPVCxPQUFQO0FBRUgsQ0FoRGMsQ0FnRGJDLENBaERhLENBQWY7O0FBa0RBLElBQUlzQixVQUFVLElBQUl2QixPQUFKLEVBQWQ7QUFDQXVCLFFBQVFmLEdBQVIsRyIsImZpbGUiOiJpbnZvaWNlLmUxOTFhODIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEludm9pY2UgPSAoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICAgIGhlYWRlcjogJy5pbnZvaWNlLWl0ZW1zIC5oZWFkZXInLFxyXG4gICAgICAgICAgY29sbGVjdGlvbjogJy50YWJsZS1pdGVtcycsXHJcbiAgICAgICAgICBidG46ICcuYWRkLWl0ZW0nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0bjogJzxidXR0b24gY2xhc3M9XCJhZGQtaXRlbVwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+QWRkIGl0ZW08L2J1dHRvbj4nXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIEludm9pY2UoKSB7XHJcbiAgICAgICAgdGhpcy4kY29sbGVjdGlvbkhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBydW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbigpIHtcclxuICAgICAgICB2YXIgJGJ0biA9ICQoY29uZmlnLmJ0bik7XHJcblxyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5oZWFkZXIpLmFwcGVuZCgkYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSG9sZGVyKGhvbGRlcikge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIgPSBob2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkFkZEl0ZW1DbGljaygpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmZpbmQoJ3RyJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkhvbGRlcigkKGNvbmZpZy5zZWxlY3RvcnMuY29sbGVjdGlvbikpO1xyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9