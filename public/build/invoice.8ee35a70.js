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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImRvY3VtZW50IiwicmVhZHkiLCJmaW5kIiwibGVuZ3RoIiwiaW52b2ljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUFJQSxVQUFXLFVBQVVDLENBQVYsRUFBYTs7QUFFeEIsUUFBSUMsU0FBUztBQUNYQyxtQkFBVztBQUNQQyxvQkFBUSx3QkFERDtBQUVQQyx3QkFBWTtBQUZMLFNBREE7QUFLWEMsYUFBSztBQUxNLEtBQWI7O0FBUUEsYUFBU04sT0FBVCxHQUFtQjtBQUNmLGFBQUtPLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixZQUFJQyxPQUFPVCxFQUFFQyxPQUFPSSxHQUFULENBQVg7O0FBRUFMLFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQW5CLEVBQTJCTyxNQUEzQixDQUFrQ0QsSUFBbEM7QUFDSDs7QUFFRCxhQUFTRSxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDakNiLGdCQUFRTyxpQkFBUixHQUE0Qk0sTUFBNUI7QUFDSDs7QUFFRCxhQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDL0JmLGdCQUFRTyxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELEtBQXhDO0FBQ0g7O0FBRUQsYUFBU1AsR0FBVCxHQUFlO0FBQ1hQLFVBQUVnQixRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFMUIsZ0JBQUlILFFBQVFmLFFBQVFPLGlCQUFSLENBQTBCWSxJQUExQixDQUErQixJQUEvQixFQUFxQ0MsTUFBakQ7O0FBRUFSLGdDQUFvQlgsRUFBRUMsT0FBT0MsU0FBUCxDQUFpQkUsVUFBbkIsQ0FBcEI7QUFDQVMsK0JBQW1CQyxLQUFuQjs7QUFFQU47QUFDSCxTQVJEO0FBU0g7O0FBRUQsV0FBT1QsT0FBUDtBQUVILENBM0NjLENBMkNiQyxDQTNDYSxDQUFmOztBQTZDQSxJQUFJb0IsVUFBVSxJQUFJckIsT0FBSixFQUFkO0FBQ0FxQixRQUFRYixHQUFSLEciLCJmaWxlIjoiaW52b2ljZS44ZWUzNWE3MC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJbnZvaWNlID0gKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICBoZWFkZXI6ICcuaW52b2ljZS1pdGVtcyAuaGVhZGVyJyxcclxuICAgICAgICAgIGNvbGxlY3Rpb246ICcudGFibGUtaXRlbXMnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0bjogJzxidXR0b24gY2xhc3M9XCJhZGQtaXRlbVwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+QWRkIGl0ZW08L2J1dHRvbj4nXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIEludm9pY2UoKSB7XHJcbiAgICAgICAgdGhpcy4kY29sbGVjdGlvbkhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBydW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbigpIHtcclxuICAgICAgICB2YXIgJGJ0biA9ICQoY29uZmlnLmJ0bik7XHJcblxyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5oZWFkZXIpLmFwcGVuZCgkYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSG9sZGVyKGhvbGRlcikge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIgPSBob2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5maW5kKCd0cicpLmxlbmd0aDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25Ib2xkZXIoJChjb25maWcuc2VsZWN0b3JzLmNvbGxlY3Rpb24pKTtcclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1CdXR0b24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW52b2ljZTtcclxuXHJcbn0oJCkpO1xyXG5cclxudmFyIGludm9pY2UgPSBuZXcgSW52b2ljZSgpO1xyXG5pbnZvaWNlLnJ1bigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbnZvaWNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==