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

    function addItemForm() {
        var prototype = Invoice.$collectionHolder.data('prototype');

        var index = $collectionHolder.data('index');

        console.log(prototype, index);
    }

    function onAddItemClick() {
        $('body').on('click', config.selectors.btn, function (e) {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwiY29uc29sZSIsImxvZyIsIm9uQWRkSXRlbUNsaWNrIiwib24iLCJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpbmQiLCJsZW5ndGgiLCJpbnZvaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQUlBLFVBQVcsVUFBVUMsQ0FBVixFQUFhOztBQUV4QixRQUFJQyxTQUFTO0FBQ1hDLG1CQUFXO0FBQ1BDLG9CQUFRLHdCQUREO0FBRVBDLHdCQUFZLGNBRkw7QUFHUEMsaUJBQUs7QUFIRSxTQURBO0FBTVhBLGFBQUs7QUFOTSxLQUFiOztBQVNBLGFBQVNOLE9BQVQsR0FBbUI7QUFDZixhQUFLTyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLGFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVELGFBQVNDLGFBQVQsR0FBeUI7QUFDckIsWUFBSUMsT0FBT1QsRUFBRUMsT0FBT0ksR0FBVCxDQUFYOztBQUVBTCxVQUFFQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFuQixFQUEyQk8sTUFBM0IsQ0FBa0NELElBQWxDO0FBQ0g7O0FBRUQsYUFBU0UsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDYixnQkFBUU8saUJBQVIsR0FBNEJNLE1BQTVCO0FBQ0g7O0FBRUQsYUFBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQy9CZixnQkFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxLQUF4QztBQUNIOztBQUVELGFBQVNFLFdBQVQsR0FBdUI7QUFDbkIsWUFBSUMsWUFBWWxCLFFBQVFPLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixXQUEvQixDQUFoQjs7QUFFQSxZQUFJRCxRQUFRUixrQkFBa0JTLElBQWxCLENBQXVCLE9BQXZCLENBQVo7O0FBRUFHLGdCQUFRQyxHQUFSLENBQVlGLFNBQVosRUFBdUJILEtBQXZCO0FBQ0g7O0FBRUQsYUFBU00sY0FBVCxHQUEwQjtBQUN0QnBCLFVBQUUsTUFBRixFQUFVcUIsRUFBVixDQUFhLE9BQWIsRUFBc0JwQixPQUFPQyxTQUFQLENBQWlCRyxHQUF2QyxFQUE0QyxVQUFVaUIsQ0FBVixFQUFhLENBRXhELENBRkQ7QUFHSDs7QUFFRCxhQUFTZixHQUFULEdBQWU7QUFDWFAsVUFBRXVCLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUUxQixnQkFBSVYsUUFBUWYsUUFBUU8saUJBQVIsQ0FBMEJtQixJQUExQixDQUErQixJQUEvQixFQUFxQ0MsTUFBakQ7O0FBRUFmLGdDQUFvQlgsRUFBRUMsT0FBT0MsU0FBUCxDQUFpQkUsVUFBbkIsQ0FBcEI7QUFDQVMsK0JBQW1CQyxLQUFuQjs7QUFFQU47QUFDSCxTQVJEO0FBU0g7O0FBRUQsV0FBT1QsT0FBUDtBQUVILENBMURjLENBMERiQyxDQTFEYSxDQUFmOztBQTREQSxJQUFJMkIsVUFBVSxJQUFJNUIsT0FBSixFQUFkO0FBQ0E0QixRQUFRcEIsR0FBUixHIiwiZmlsZSI6Imludm9pY2UuMjZjN2MzMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW52b2ljZSA9IChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgICAgaGVhZGVyOiAnLmludm9pY2UtaXRlbXMgLmhlYWRlcicsXHJcbiAgICAgICAgICBjb2xsZWN0aW9uOiAnLnRhYmxlLWl0ZW1zJyxcclxuICAgICAgICAgIGJ0bjogJy5hZGQtaXRlbSdcclxuICAgICAgfSxcclxuICAgICAgYnRuOiAnPGJ1dHRvbiBjbGFzcz1cImFkZC1pdGVtXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5BZGQgaXRlbTwvYnV0dG9uPidcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gSW52b2ljZSgpIHtcclxuICAgICAgICB0aGlzLiRjb2xsZWN0aW9uSG9sZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJ1biA9IHJ1bjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtQnV0dG9uKCkge1xyXG4gICAgICAgIHZhciAkYnRuID0gJChjb25maWcuYnRuKTtcclxuXHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLmhlYWRlcikuYXBwZW5kKCRidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25Ib2xkZXIoaG9sZGVyKSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlciA9IGhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1Gb3JtKCkge1xyXG4gICAgICAgIHZhciBwcm90b3R5cGUgPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSAkY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm90b3R5cGUsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkFkZEl0ZW1DbGljaygpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgY29uZmlnLnNlbGVjdG9ycy5idG4sIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmZpbmQoJ3RyJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkhvbGRlcigkKGNvbmZpZy5zZWxlY3RvcnMuY29sbGVjdGlvbikpO1xyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9