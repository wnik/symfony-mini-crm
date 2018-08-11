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
        // console.log($(newForm).find('div').unwrap('div[id*='));
        $(newForm).find('div').unwrap('div[id*="invoice_items"]');

        Invoice.$collectionHolder.data('index', index + 1);

        var $newRow = $('<tr class="item-row"></tr>').append(newForm);

        Invoice.$collectionHolder.append($newRow);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJmaW5kIiwidW53cmFwIiwiJG5ld1JvdyIsIm9uQWRkSXRlbUNsaWNrIiwib24iLCJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxlbmd0aCIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsb0JBQVEsd0JBREQ7QUFFUEMsd0JBQVksY0FGTDtBQUdQQyxpQkFBSztBQUhFLFNBREE7QUFNWEEsYUFBSztBQU5NLEtBQWI7O0FBU0EsYUFBU04sT0FBVCxHQUFtQjtBQUNmLGFBQUtPLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixZQUFJQyxPQUFPVCxFQUFFQyxPQUFPSSxHQUFULENBQVg7O0FBRUFMLFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQW5CLEVBQTJCTyxNQUEzQixDQUFrQ0QsSUFBbEM7QUFDSDs7QUFFRCxhQUFTRSxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDakNiLGdCQUFRTyxpQkFBUixHQUE0Qk0sTUFBNUI7QUFDSDs7QUFFRCxhQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDL0JmLGdCQUFRTyxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELEtBQXhDO0FBQ0g7O0FBRUQsYUFBU0UsV0FBVCxHQUF1QjtBQUNuQixZQUFJQyxZQUFZbEIsUUFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLFdBQS9CLENBQWhCOztBQUVBLFlBQUlELFFBQVFmLFFBQVFPLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixPQUEvQixDQUFaOztBQUVBLFlBQUlHLFVBQVVELFNBQWQ7O0FBRUFDLGtCQUFVQSxRQUFRQyxPQUFSLENBQWdCLFdBQWhCLEVBQTZCTCxLQUE3QixDQUFWO0FBQ0E7QUFDQWQsVUFBRWtCLE9BQUYsRUFBV0UsSUFBWCxDQUFnQixLQUFoQixFQUF1QkMsTUFBdkIsQ0FBOEIsMEJBQTlCOztBQUVBdEIsZ0JBQVFPLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixPQUEvQixFQUF3Q0QsUUFBUSxDQUFoRDs7QUFFQSxZQUFJUSxVQUFVdEIsRUFBRSw0QkFBRixFQUFnQ1UsTUFBaEMsQ0FBdUNRLE9BQXZDLENBQWQ7O0FBRUFuQixnQkFBUU8saUJBQVIsQ0FBMEJJLE1BQTFCLENBQWlDWSxPQUFqQztBQUVIOztBQUVELGFBQVNDLGNBQVQsR0FBMEI7QUFDdEJ2QixVQUFFLE1BQUYsRUFBVXdCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCdkIsT0FBT0MsU0FBUCxDQUFpQkcsR0FBdkMsRUFBNEMsVUFBVW9CLENBQVYsRUFBYTtBQUNyRFQ7QUFDSCxTQUZEO0FBR0g7O0FBRUQsYUFBU1QsR0FBVCxHQUFlO0FBQ1hQLFVBQUUwQixRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFMUJoQixnQ0FBb0JYLEVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJFLFVBQW5CLENBQXBCOztBQUVBLGdCQUFJVSxRQUFRZixRQUFRTyxpQkFBUixDQUEwQmMsSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUNRLE1BQWpEOztBQUVBZiwrQkFBbUJDLEtBQW5COztBQUVBTjtBQUNBZTtBQUNILFNBVkQ7QUFXSDs7QUFFRCxXQUFPeEIsT0FBUDtBQUVILENBdkVjLENBdUViQyxDQXZFYSxDQUFmOztBQXlFQSxJQUFJNkIsVUFBVSxJQUFJOUIsT0FBSixFQUFkO0FBQ0E4QixRQUFRdEIsR0FBUixHIiwiZmlsZSI6Imludm9pY2UuNDA1MDZiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW52b2ljZSA9IChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgICAgaGVhZGVyOiAnLmludm9pY2UtaXRlbXMgLmhlYWRlcicsXHJcbiAgICAgICAgICBjb2xsZWN0aW9uOiAnLnRhYmxlLWl0ZW1zJyxcclxuICAgICAgICAgIGJ0bjogJy5hZGQtaXRlbSdcclxuICAgICAgfSxcclxuICAgICAgYnRuOiAnPGJ1dHRvbiBjbGFzcz1cImFkZC1pdGVtXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5BZGQgaXRlbTwvYnV0dG9uPidcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gSW52b2ljZSgpIHtcclxuICAgICAgICB0aGlzLiRjb2xsZWN0aW9uSG9sZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJ1biA9IHJ1bjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtQnV0dG9uKCkge1xyXG4gICAgICAgIHZhciAkYnRuID0gJChjb25maWcuYnRuKTtcclxuXHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLmhlYWRlcikuYXBwZW5kKCRidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25Ib2xkZXIoaG9sZGVyKSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlciA9IGhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1Gb3JtKCkge1xyXG4gICAgICAgIHZhciBwcm90b3R5cGUgPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XHJcblxyXG4gICAgICAgIHZhciBuZXdGb3JtID0gcHJvdG90eXBlO1xyXG5cclxuICAgICAgICBuZXdGb3JtID0gbmV3Rm9ybS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJChuZXdGb3JtKS5maW5kKCdkaXYnKS51bndyYXAoJ2RpdltpZCo9JykpO1xyXG4gICAgICAgICQobmV3Rm9ybSkuZmluZCgnZGl2JykudW53cmFwKCdkaXZbaWQqPVwiaW52b2ljZV9pdGVtc1wiXScpO1xyXG5cclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgdmFyICRuZXdSb3cgPSAkKCc8dHIgY2xhc3M9XCJpdGVtLXJvd1wiPjwvdHI+JykuYXBwZW5kKG5ld0Zvcm0pO1xyXG5cclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZCgkbmV3Um93KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25BZGRJdGVtQ2xpY2soKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGNvbmZpZy5zZWxlY3RvcnMuYnRuLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBhZGRJdGVtRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSG9sZGVyKCQoY29uZmlnLnNlbGVjdG9ycy5jb2xsZWN0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmZpbmQoJ3RyJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1CdXR0b24oKTtcclxuICAgICAgICAgICAgb25BZGRJdGVtQ2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW52b2ljZTtcclxuXHJcbn0oJCkpO1xyXG5cclxudmFyIGludm9pY2UgPSBuZXcgSW52b2ljZSgpO1xyXG5pbnZvaWNlLnJ1bigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbnZvaWNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==