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

        var index = Invoice.$collectionHolder.data('index');

        var newForm = prototype;

        newForm = newForm.replace(/__name__/g, index);

        Invoice.$collectionHolder.data('index', index + 1);

        var $newRow = $('<tr></tr>').append(newForm);
    }

    function onAddItemClick() {
        $('body').on('click', config.selectors.btn, function (e) {
            addItemForm();
        });
    }

    function run() {
        $(document).ready(function () {

            setCollectionHolder($(config.selectors.collection));

            var index = Invoice.$collectionHolder.find('tr').length;

            setCollectionIndex(index);

            addItemButton();
            onAddItemClick();
        });
    }

    return Invoice;
}($);

var invoice = new Invoice();
invoice.run();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/invoice.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCIkbmV3Um93Iiwib25BZGRJdGVtQ2xpY2siLCJvbiIsImUiLCJkb2N1bWVudCIsInJlYWR5IiwiZmluZCIsImxlbmd0aCIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsb0JBQVEsd0JBREQ7QUFFUEMsd0JBQVksY0FGTDtBQUdQQyxpQkFBSztBQUhFLFNBREE7QUFNWEEsYUFBSztBQU5NLEtBQWI7O0FBU0EsYUFBU04sT0FBVCxHQUFtQjtBQUNmLGFBQUtPLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixZQUFJQyxPQUFPVCxFQUFFQyxPQUFPSSxHQUFULENBQVg7O0FBRUFMLFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQW5CLEVBQTJCTyxNQUEzQixDQUFrQ0QsSUFBbEM7QUFDSDs7QUFFRCxhQUFTRSxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDakNiLGdCQUFRTyxpQkFBUixHQUE0Qk0sTUFBNUI7QUFDSDs7QUFFRCxhQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDL0JmLGdCQUFRTyxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELEtBQXhDO0FBQ0g7O0FBRUQsYUFBU0UsV0FBVCxHQUF1QjtBQUNuQixZQUFJQyxZQUFZbEIsUUFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLFdBQS9CLENBQWhCOztBQUVBLFlBQUlELFFBQVFmLFFBQVFPLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixPQUEvQixDQUFaOztBQUVBLFlBQUlHLFVBQVVELFNBQWQ7O0FBRUFDLGtCQUFVQSxRQUFRQyxPQUFSLENBQWdCLFdBQWhCLEVBQTZCTCxLQUE3QixDQUFWOztBQUVBZixnQkFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxRQUFRLENBQWhEOztBQUVBLFlBQUlNLFVBQVVwQixFQUFFLFdBQUYsRUFBZVUsTUFBZixDQUFzQlEsT0FBdEIsQ0FBZDtBQUVIOztBQUVELGFBQVNHLGNBQVQsR0FBMEI7QUFDdEJyQixVQUFFLE1BQUYsRUFBVXNCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCckIsT0FBT0MsU0FBUCxDQUFpQkcsR0FBdkMsRUFBNEMsVUFBVWtCLENBQVYsRUFBYTtBQUNyRFA7QUFDSCxTQUZEO0FBR0g7O0FBRUQsYUFBU1QsR0FBVCxHQUFlO0FBQ1hQLFVBQUV3QixRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFMUJkLGdDQUFvQlgsRUFBRUMsT0FBT0MsU0FBUCxDQUFpQkUsVUFBbkIsQ0FBcEI7O0FBRUEsZ0JBQUlVLFFBQVFmLFFBQVFPLGlCQUFSLENBQTBCb0IsSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUNDLE1BQWpEOztBQUVBZCwrQkFBbUJDLEtBQW5COztBQUVBTjtBQUNBYTtBQUNILFNBVkQ7QUFXSDs7QUFFRCxXQUFPdEIsT0FBUDtBQUVILENBbkVjLENBbUViQyxDQW5FYSxDQUFmOztBQXFFQSxJQUFJNEIsVUFBVSxJQUFJN0IsT0FBSixFQUFkO0FBQ0E2QixRQUFRckIsR0FBUixHIiwiZmlsZSI6Imludm9pY2UuYTk0NGNiNDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW52b2ljZSA9IChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgICAgaGVhZGVyOiAnLmludm9pY2UtaXRlbXMgLmhlYWRlcicsXHJcbiAgICAgICAgICBjb2xsZWN0aW9uOiAnLnRhYmxlLWl0ZW1zJyxcclxuICAgICAgICAgIGJ0bjogJy5hZGQtaXRlbSdcclxuICAgICAgfSxcclxuICAgICAgYnRuOiAnPGJ1dHRvbiBjbGFzcz1cImFkZC1pdGVtXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5BZGQgaXRlbTwvYnV0dG9uPidcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gSW52b2ljZSgpIHtcclxuICAgICAgICB0aGlzLiRjb2xsZWN0aW9uSG9sZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJ1biA9IHJ1bjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtQnV0dG9uKCkge1xyXG4gICAgICAgIHZhciAkYnRuID0gJChjb25maWcuYnRuKTtcclxuXHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLmhlYWRlcikuYXBwZW5kKCRidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25Ib2xkZXIoaG9sZGVyKSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlciA9IGhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1Gb3JtKCkge1xyXG4gICAgICAgIHZhciBwcm90b3R5cGUgPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XHJcblxyXG4gICAgICAgIHZhciBuZXdGb3JtID0gcHJvdG90eXBlO1xyXG5cclxuICAgICAgICBuZXdGb3JtID0gbmV3Rm9ybS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcblxyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCArIDEpO1xyXG5cclxuICAgICAgICB2YXIgJG5ld1JvdyA9ICQoJzx0cj48L3RyPicpLmFwcGVuZChuZXdGb3JtKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25BZGRJdGVtQ2xpY2soKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGNvbmZpZy5zZWxlY3RvcnMuYnRuLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBhZGRJdGVtRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSG9sZGVyKCQoY29uZmlnLnNlbGVjdG9ycy5jb2xsZWN0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmZpbmQoJ3RyJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1CdXR0b24oKTtcclxuICAgICAgICAgICAgb25BZGRJdGVtQ2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW52b2ljZTtcclxuXHJcbn0oJCkpO1xyXG5cclxudmFyIGludm9pY2UgPSBuZXcgSW52b2ljZSgpO1xyXG5pbnZvaWNlLnJ1bigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbnZvaWNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==