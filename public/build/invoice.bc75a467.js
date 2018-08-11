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

            setCollectionHolder($(config.selectors.collection));

            var index = $(Invoice.$collectionHolder.find('tr').length);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpbmQiLCJsZW5ndGgiLCJpbnZvaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQUlBLFVBQVcsVUFBVUMsQ0FBVixFQUFhOztBQUV4QixRQUFJQyxTQUFTO0FBQ1hDLG1CQUFXO0FBQ1BDLG9CQUFRLHdCQUREO0FBRVBDLHdCQUFZO0FBRkwsU0FEQTtBQUtYQyxhQUFLO0FBTE0sS0FBYjs7QUFRQSxhQUFTTixPQUFULEdBQW1CO0FBQ2YsYUFBS08saUJBQUwsR0FBeUIsSUFBekI7QUFDQSxhQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7QUFFRCxhQUFTQyxhQUFULEdBQXlCO0FBQ3JCLFlBQUlDLE9BQU9ULEVBQUVDLE9BQU9JLEdBQVQsQ0FBWDs7QUFFQUwsVUFBRUMsT0FBT0MsU0FBUCxDQUFpQkMsTUFBbkIsRUFBMkJPLE1BQTNCLENBQWtDRCxJQUFsQztBQUNIOztBQUVELGFBQVNFLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztBQUNqQ2IsZ0JBQVFPLGlCQUFSLEdBQTRCTSxNQUE1QjtBQUNIOztBQUVELGFBQVNDLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQyxDQUVsQzs7QUFFRCxhQUFTUCxHQUFULEdBQWU7QUFDWFAsVUFBRWUsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7O0FBRTFCTCxnQ0FBb0JYLEVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJFLFVBQW5CLENBQXBCOztBQUVBLGdCQUFJVSxRQUFRZCxFQUFFRCxRQUFRTyxpQkFBUixDQUEwQlcsSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUNDLE1BQXZDLENBQVo7O0FBRUFMOztBQUVBTDtBQUNILFNBVEQ7QUFVSDs7QUFFRCxXQUFPVCxPQUFQO0FBRUgsQ0E1Q2MsQ0E0Q2JDLENBNUNhLENBQWY7O0FBOENBLElBQUltQixVQUFVLElBQUlwQixPQUFKLEVBQWQ7QUFDQW9CLFFBQVFaLEdBQVIsRyIsImZpbGUiOiJpbnZvaWNlLmJjNzVhNDY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEludm9pY2UgPSAoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICAgIGhlYWRlcjogJy5pbnZvaWNlLWl0ZW1zIC5oZWFkZXInLFxyXG4gICAgICAgICAgY29sbGVjdGlvbjogJy50YWJsZS1pdGVtcydcclxuICAgICAgfSxcclxuICAgICAgYnRuOiAnPGJ1dHRvbiBjbGFzcz1cImFkZC1pdGVtXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5BZGQgaXRlbTwvYnV0dG9uPidcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gSW52b2ljZSgpIHtcclxuICAgICAgICB0aGlzLiRjb2xsZWN0aW9uSG9sZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJ1biA9IHJ1bjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtQnV0dG9uKCkge1xyXG4gICAgICAgIHZhciAkYnRuID0gJChjb25maWcuYnRuKTtcclxuXHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLmhlYWRlcikuYXBwZW5kKCRidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25Ib2xkZXIoaG9sZGVyKSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlciA9IGhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25Ib2xkZXIoJChjb25maWcuc2VsZWN0b3JzLmNvbGxlY3Rpb24pKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9ICQoSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5maW5kKCd0cicpLmxlbmd0aClcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25JbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9