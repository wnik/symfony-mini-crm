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
        $(newForm).unwrap();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJ1bndyYXAiLCIkbmV3Um93Iiwib25BZGRJdGVtQ2xpY2siLCJvbiIsImUiLCJkb2N1bWVudCIsInJlYWR5IiwiZmluZCIsImxlbmd0aCIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsb0JBQVEsd0JBREQ7QUFFUEMsd0JBQVksY0FGTDtBQUdQQyxpQkFBSztBQUhFLFNBREE7QUFNWEEsYUFBSztBQU5NLEtBQWI7O0FBU0EsYUFBU04sT0FBVCxHQUFtQjtBQUNmLGFBQUtPLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixZQUFJQyxPQUFPVCxFQUFFQyxPQUFPSSxHQUFULENBQVg7O0FBRUFMLFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQW5CLEVBQTJCTyxNQUEzQixDQUFrQ0QsSUFBbEM7QUFDSDs7QUFFRCxhQUFTRSxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDakNiLGdCQUFRTyxpQkFBUixHQUE0Qk0sTUFBNUI7QUFDSDs7QUFFRCxhQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDL0JmLGdCQUFRTyxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELEtBQXhDO0FBQ0g7O0FBRUQsYUFBU0UsV0FBVCxHQUF1QjtBQUNuQixZQUFJQyxZQUFZbEIsUUFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLFdBQS9CLENBQWhCOztBQUVBLFlBQUlELFFBQVFmLFFBQVFPLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixPQUEvQixDQUFaOztBQUVBLFlBQUlHLFVBQVVELFNBQWQ7O0FBRUFDLGtCQUFVQSxRQUFRQyxPQUFSLENBQWdCLFdBQWhCLEVBQTZCTCxLQUE3QixDQUFWO0FBQ0FkLFVBQUVrQixPQUFGLEVBQVdFLE1BQVg7O0FBRUFyQixnQkFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxRQUFRLENBQWhEOztBQUVBLFlBQUlPLFVBQVVyQixFQUFFLDRCQUFGLEVBQWdDVSxNQUFoQyxDQUF1Q1EsT0FBdkMsQ0FBZDs7QUFFQW5CLGdCQUFRTyxpQkFBUixDQUEwQkksTUFBMUIsQ0FBaUNXLE9BQWpDO0FBRUg7O0FBRUQsYUFBU0MsY0FBVCxHQUEwQjtBQUN0QnRCLFVBQUUsTUFBRixFQUFVdUIsRUFBVixDQUFhLE9BQWIsRUFBc0J0QixPQUFPQyxTQUFQLENBQWlCRyxHQUF2QyxFQUE0QyxVQUFVbUIsQ0FBVixFQUFhO0FBQ3JEUjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTVCxHQUFULEdBQWU7QUFDWFAsVUFBRXlCLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUUxQmYsZ0NBQW9CWCxFQUFFQyxPQUFPQyxTQUFQLENBQWlCRSxVQUFuQixDQUFwQjs7QUFFQSxnQkFBSVUsUUFBUWYsUUFBUU8saUJBQVIsQ0FBMEJxQixJQUExQixDQUErQixJQUEvQixFQUFxQ0MsTUFBakQ7O0FBRUFmLCtCQUFtQkMsS0FBbkI7O0FBRUFOO0FBQ0FjO0FBQ0gsU0FWRDtBQVdIOztBQUVELFdBQU92QixPQUFQO0FBRUgsQ0F0RWMsQ0FzRWJDLENBdEVhLENBQWY7O0FBd0VBLElBQUk2QixVQUFVLElBQUk5QixPQUFKLEVBQWQ7QUFDQThCLFFBQVF0QixHQUFSLEciLCJmaWxlIjoiaW52b2ljZS45OTBjNTUzYi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJbnZvaWNlID0gKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICBoZWFkZXI6ICcuaW52b2ljZS1pdGVtcyAuaGVhZGVyJyxcclxuICAgICAgICAgIGNvbGxlY3Rpb246ICcudGFibGUtaXRlbXMnLFxyXG4gICAgICAgICAgYnRuOiAnLmFkZC1pdGVtJ1xyXG4gICAgICB9LFxyXG4gICAgICBidG46ICc8YnV0dG9uIGNsYXNzPVwiYWRkLWl0ZW1cIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPkFkZCBpdGVtPC9idXR0b24+J1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBJbnZvaWNlKCkge1xyXG4gICAgICAgIHRoaXMuJGNvbGxlY3Rpb25Ib2xkZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucnVuID0gcnVuO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1CdXR0b24oKSB7XHJcbiAgICAgICAgdmFyICRidG4gPSAkKGNvbmZpZy5idG4pO1xyXG5cclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMuaGVhZGVyKS5hcHBlbmQoJGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkhvbGRlcihob2xkZXIpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyID0gaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25JbmRleChpbmRleCkge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUZvcm0oKSB7XHJcbiAgICAgICAgdmFyIHByb3RvdHlwZSA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XHJcblxyXG4gICAgICAgIHZhciBpbmRleCA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgdmFyIG5ld0Zvcm0gPSBwcm90b3R5cGU7XHJcblxyXG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcclxuICAgICAgICAkKG5ld0Zvcm0pLnVud3JhcCgpO1xyXG5cclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgdmFyICRuZXdSb3cgPSAkKCc8dHIgY2xhc3M9XCJpdGVtLXJvd1wiPjwvdHI+JykuYXBwZW5kKG5ld0Zvcm0pO1xyXG5cclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZCgkbmV3Um93KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25BZGRJdGVtQ2xpY2soKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGNvbmZpZy5zZWxlY3RvcnMuYnRuLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBhZGRJdGVtRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSG9sZGVyKCQoY29uZmlnLnNlbGVjdG9ycy5jb2xsZWN0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmZpbmQoJ3RyJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1CdXR0b24oKTtcclxuICAgICAgICAgICAgb25BZGRJdGVtQ2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW52b2ljZTtcclxuXHJcbn0oJCkpO1xyXG5cclxudmFyIGludm9pY2UgPSBuZXcgSW52b2ljZSgpO1xyXG5pbnZvaWNlLnJ1bigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbnZvaWNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==