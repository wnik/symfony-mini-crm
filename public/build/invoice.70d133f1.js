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
            btn: '.add-item',
            btnRemove: '.btn-remove'
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
        newForm = $(newForm).html().replace(/<div>/g, '<td>').replace(/<\/div>/g, '</td>');

        Invoice.$collectionHolder.data('index', index + 1);

        var $newRow = $('<tr class="item-row"></tr>').append(newForm);

        Invoice.$collectionHolder.append($newRow);
    }

    function onAddItemClick() {
        $('body').on('click', config.selectors.btn, function (e) {
            e.preventDefault();

            addItemForm();
        });
    }

    function onRemoveItemClick() {
        $('body').on('click', config.selectors.btnRemove, function (e) {
            e.preventDefault();

            console.log($(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCJidG5SZW1vdmUiLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJodG1sIiwiJG5ld1JvdyIsIm9uQWRkSXRlbUNsaWNrIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJvblJlbW92ZUl0ZW1DbGljayIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInJlYWR5IiwiZmluZCIsImxlbmd0aCIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsb0JBQVEsd0JBREQ7QUFFUEMsd0JBQVksY0FGTDtBQUdQQyxpQkFBSyxXQUhFO0FBSVBDLHVCQUFXO0FBSkosU0FEQTtBQU9YRCxhQUFLO0FBUE0sS0FBYjs7QUFVQSxhQUFTTixPQUFULEdBQW1CO0FBQ2YsYUFBS1EsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxhQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7QUFFRCxhQUFTQyxhQUFULEdBQXlCO0FBQ3JCLFlBQUlDLE9BQU9WLEVBQUVDLE9BQU9JLEdBQVQsQ0FBWDs7QUFFQUwsVUFBRUMsT0FBT0MsU0FBUCxDQUFpQkMsTUFBbkIsRUFBMkJRLE1BQTNCLENBQWtDRCxJQUFsQztBQUNIOztBQUVELGFBQVNFLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztBQUNqQ2QsZ0JBQVFRLGlCQUFSLEdBQTRCTSxNQUE1QjtBQUNIOztBQUVELGFBQVNDLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQztBQUMvQmhCLGdCQUFRUSxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELEtBQXhDO0FBQ0g7O0FBRUQsYUFBU0UsV0FBVCxHQUF1QjtBQUNuQixZQUFJQyxZQUFZbkIsUUFBUVEsaUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLFdBQS9CLENBQWhCOztBQUVBLFlBQUlELFFBQVFoQixRQUFRUSxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsQ0FBWjs7QUFFQSxZQUFJRyxVQUFVRCxTQUFkOztBQUVBQyxrQkFBVUEsUUFBUUMsT0FBUixDQUFnQixXQUFoQixFQUE2QkwsS0FBN0IsQ0FBVjtBQUNBSSxrQkFBVW5CLEVBQUVtQixPQUFGLEVBQVdFLElBQVgsR0FBa0JELE9BQWxCLENBQTBCLFFBQTFCLEVBQW9DLE1BQXBDLEVBQTRDQSxPQUE1QyxDQUFvRCxVQUFwRCxFQUFnRSxPQUFoRSxDQUFWOztBQUVBckIsZ0JBQVFRLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixPQUEvQixFQUF3Q0QsUUFBUSxDQUFoRDs7QUFFQSxZQUFJTyxVQUFVdEIsRUFBRSw0QkFBRixFQUFnQ1csTUFBaEMsQ0FBdUNRLE9BQXZDLENBQWQ7O0FBRUFwQixnQkFBUVEsaUJBQVIsQ0FBMEJJLE1BQTFCLENBQWlDVyxPQUFqQztBQUVIOztBQUVELGFBQVNDLGNBQVQsR0FBMEI7QUFDdEJ2QixVQUFFLE1BQUYsRUFBVXdCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCdkIsT0FBT0MsU0FBUCxDQUFpQkcsR0FBdkMsRUFBNEMsVUFBVW9CLENBQVYsRUFBYTtBQUNyREEsY0FBRUMsY0FBRjs7QUFFQVQ7QUFDSCxTQUpEO0FBS0g7O0FBRUQsYUFBU1UsaUJBQVQsR0FBNkI7QUFDekIzQixVQUFFLE1BQUYsRUFBVXdCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCdkIsT0FBT0MsU0FBUCxDQUFpQkksU0FBdkMsRUFBa0QsVUFBVW1CLENBQVYsRUFBYTtBQUMzREEsY0FBRUMsY0FBRjs7QUFFQUUsb0JBQVFDLEdBQVIsQ0FBWTdCLEVBQUUsSUFBRixDQUFaO0FBQ0gsU0FKRDtBQUtIOztBQUVELGFBQVNRLEdBQVQsR0FBZTtBQUNYUixVQUFFOEIsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7O0FBRTFCbkIsZ0NBQW9CWixFQUFFQyxPQUFPQyxTQUFQLENBQWlCRSxVQUFuQixDQUFwQjs7QUFFQSxnQkFBSVcsUUFBUWhCLFFBQVFRLGlCQUFSLENBQTBCeUIsSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUNDLE1BQWpEOztBQUVBbkIsK0JBQW1CQyxLQUFuQjs7QUFFQU47QUFDQWM7QUFDSCxTQVZEO0FBV0g7O0FBRUQsV0FBT3hCLE9BQVA7QUFFSCxDQWpGYyxDQWlGYkMsQ0FqRmEsQ0FBZjs7QUFtRkEsSUFBSWtDLFVBQVUsSUFBSW5DLE9BQUosRUFBZDtBQUNBbUMsUUFBUTFCLEdBQVIsRyIsImZpbGUiOiJpbnZvaWNlLjcwZDEzM2YxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEludm9pY2UgPSAoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICAgIGhlYWRlcjogJy5pbnZvaWNlLWl0ZW1zIC5oZWFkZXInLFxyXG4gICAgICAgICAgY29sbGVjdGlvbjogJy50YWJsZS1pdGVtcycsXHJcbiAgICAgICAgICBidG46ICcuYWRkLWl0ZW0nLFxyXG4gICAgICAgICAgYnRuUmVtb3ZlOiAnLmJ0bi1yZW1vdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0bjogJzxidXR0b24gY2xhc3M9XCJhZGQtaXRlbVwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+QWRkIGl0ZW08L2J1dHRvbj4nXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIEludm9pY2UoKSB7XHJcbiAgICAgICAgdGhpcy4kY29sbGVjdGlvbkhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBydW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbigpIHtcclxuICAgICAgICB2YXIgJGJ0biA9ICQoY29uZmlnLmJ0bik7XHJcblxyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5oZWFkZXIpLmFwcGVuZCgkYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSG9sZGVyKGhvbGRlcikge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIgPSBob2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtRm9ybSgpIHtcclxuICAgICAgICB2YXIgcHJvdG90eXBlID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdwcm90b3R5cGUnKTtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcpO1xyXG5cclxuICAgICAgICB2YXIgbmV3Rm9ybSA9IHByb3RvdHlwZTtcclxuXHJcbiAgICAgICAgbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xyXG4gICAgICAgIG5ld0Zvcm0gPSAkKG5ld0Zvcm0pLmh0bWwoKS5yZXBsYWNlKC88ZGl2Pi9nLCAnPHRkPicpLnJlcGxhY2UoLzxcXC9kaXY+L2csICc8L3RkPicpO1xyXG5cclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgdmFyICRuZXdSb3cgPSAkKCc8dHIgY2xhc3M9XCJpdGVtLXJvd1wiPjwvdHI+JykuYXBwZW5kKG5ld0Zvcm0pO1xyXG5cclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZCgkbmV3Um93KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25BZGRJdGVtQ2xpY2soKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGNvbmZpZy5zZWxlY3RvcnMuYnRuLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBhZGRJdGVtRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUmVtb3ZlSXRlbUNsaWNrKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBjb25maWcuc2VsZWN0b3JzLmJ0blJlbW92ZSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25Ib2xkZXIoJChjb25maWcuc2VsZWN0b3JzLmNvbGxlY3Rpb24pKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgndHInKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgICAgICBvbkFkZEl0ZW1DbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9