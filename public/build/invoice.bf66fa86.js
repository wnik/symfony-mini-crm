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

    function setCollectionIndex(index) {
        Invoice.$collectionHolder.data('index', index);
    }

    function run() {
        $(document).ready(function () {

            setCollectionHolder($(config.selectors.collection));

            var index = Invoice.$collectionHolder.find('tr').length;

            console.log(index);

            setCollectionIndex();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImRvY3VtZW50IiwicmVhZHkiLCJmaW5kIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsb0JBQVEsd0JBREQ7QUFFUEMsd0JBQVk7QUFGTCxTQURBO0FBS1hDLGFBQUs7QUFMTSxLQUFiOztBQVFBLGFBQVNOLE9BQVQsR0FBbUI7QUFDZixhQUFLTyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLGFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVELGFBQVNDLGFBQVQsR0FBeUI7QUFDckIsWUFBSUMsT0FBT1QsRUFBRUMsT0FBT0ksR0FBVCxDQUFYOztBQUVBTCxVQUFFQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFuQixFQUEyQk8sTUFBM0IsQ0FBa0NELElBQWxDO0FBQ0g7O0FBRUQsYUFBU0UsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDYixnQkFBUU8saUJBQVIsR0FBNEJNLE1BQTVCO0FBQ0g7O0FBRUQsYUFBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQy9CZixnQkFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxLQUF4QztBQUNIOztBQUVELGFBQVNQLEdBQVQsR0FBZTtBQUNYUCxVQUFFZ0IsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7O0FBRTFCTixnQ0FBb0JYLEVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJFLFVBQW5CLENBQXBCOztBQUVBLGdCQUFJVSxRQUFRZixRQUFRTyxpQkFBUixDQUEwQlksSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUNDLE1BQWpEOztBQUVBQyxvQkFBUUMsR0FBUixDQUFZUCxLQUFaOztBQUVBRDs7QUFFQUw7QUFDSCxTQVhEO0FBWUg7O0FBRUQsV0FBT1QsT0FBUDtBQUVILENBOUNjLENBOENiQyxDQTlDYSxDQUFmOztBQWdEQSxJQUFJc0IsVUFBVSxJQUFJdkIsT0FBSixFQUFkO0FBQ0F1QixRQUFRZixHQUFSLEciLCJmaWxlIjoiaW52b2ljZS5iZjY2ZmE4Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJbnZvaWNlID0gKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICBoZWFkZXI6ICcuaW52b2ljZS1pdGVtcyAuaGVhZGVyJyxcclxuICAgICAgICAgIGNvbGxlY3Rpb246ICcudGFibGUtaXRlbXMnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0bjogJzxidXR0b24gY2xhc3M9XCJhZGQtaXRlbVwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+QWRkIGl0ZW08L2J1dHRvbj4nXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIEludm9pY2UoKSB7XHJcbiAgICAgICAgdGhpcy4kY29sbGVjdGlvbkhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBydW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbigpIHtcclxuICAgICAgICB2YXIgJGJ0biA9ICQoY29uZmlnLmJ0bik7XHJcblxyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5oZWFkZXIpLmFwcGVuZCgkYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSG9sZGVyKGhvbGRlcikge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIgPSBob2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkhvbGRlcigkKGNvbmZpZy5zZWxlY3RvcnMuY29sbGVjdGlvbikpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5maW5kKCd0cicpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25JbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9