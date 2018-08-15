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
        btn: '<button class="add-item" type="button"><i class="fa fa-plus"></i>Add item</button>',
        btnRemove: '<a class="btn btn-danger btn-remove" href="#" data-toggle="tooltip" data-placement="right" title="Delete">' + '<i class="fa fa-trash"></i>' + '</a>'
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

        console.log(newForm);

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

            $(this).parents('.item-row').remove();
        });
    }

    function run() {
        $(document).ready(function () {

            setCollectionHolder($(config.selectors.collection));

            var index = Invoice.$collectionHolder.find('tr').length;

            setCollectionIndex(index);

            addItemButton();
            onAddItemClick();
            onRemoveItemClick();
        });
    }

    return Invoice;
}($);

var invoice = new Invoice();
invoice.run();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/invoice.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCJidG5SZW1vdmUiLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJodG1sIiwiY29uc29sZSIsImxvZyIsIiRuZXdSb3ciLCJvbkFkZEl0ZW1DbGljayIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25SZW1vdmVJdGVtQ2xpY2siLCJwYXJlbnRzIiwicmVtb3ZlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpbmQiLCJsZW5ndGgiLCJpbnZvaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQUlBLFVBQVcsVUFBVUMsQ0FBVixFQUFhOztBQUV4QixRQUFJQyxTQUFTO0FBQ1hDLG1CQUFXO0FBQ1BDLG9CQUFRLHdCQUREO0FBRVBDLHdCQUFZLGNBRkw7QUFHUEMsaUJBQUssV0FIRTtBQUlQQyx1QkFBVztBQUpKLFNBREE7QUFPWEQsYUFBSyxvRkFQTTtBQVFYQyxtQkFBVywrR0FDUCw2QkFETyxHQUVQO0FBVk8sS0FBYjs7QUFhQSxhQUFTUCxPQUFULEdBQW1CO0FBQ2YsYUFBS1EsaUJBQUwsR0FBeUIsSUFBekI7QUFDQSxhQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7QUFFRCxhQUFTQyxhQUFULEdBQXlCO0FBQ3JCLFlBQUlDLE9BQU9WLEVBQUVDLE9BQU9JLEdBQVQsQ0FBWDs7QUFFQUwsVUFBRUMsT0FBT0MsU0FBUCxDQUFpQkMsTUFBbkIsRUFBMkJRLE1BQTNCLENBQWtDRCxJQUFsQztBQUNIOztBQUVELGFBQVNFLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztBQUNqQ2QsZ0JBQVFRLGlCQUFSLEdBQTRCTSxNQUE1QjtBQUNIOztBQUVELGFBQVNDLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQztBQUMvQmhCLGdCQUFRUSxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELEtBQXhDO0FBQ0g7O0FBRUQsYUFBU0UsV0FBVCxHQUF1QjtBQUNuQixZQUFJQyxZQUFZbkIsUUFBUVEsaUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLFdBQS9CLENBQWhCOztBQUVBLFlBQUlELFFBQVFoQixRQUFRUSxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsQ0FBWjs7QUFFQSxZQUFJRyxVQUFVRCxTQUFkOztBQUVBQyxrQkFBVUEsUUFBUUMsT0FBUixDQUFnQixXQUFoQixFQUE2QkwsS0FBN0IsQ0FBVjtBQUNBSSxrQkFBVW5CLEVBQUVtQixPQUFGLEVBQVdFLElBQVgsR0FBa0JELE9BQWxCLENBQTBCLFFBQTFCLEVBQW9DLE1BQXBDLEVBQTRDQSxPQUE1QyxDQUFvRCxVQUFwRCxFQUFnRSxPQUFoRSxDQUFWOztBQUVBckIsZ0JBQVFRLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixPQUEvQixFQUF3Q0QsUUFBUSxDQUFoRDs7QUFFQU8sZ0JBQVFDLEdBQVIsQ0FBWUosT0FBWjs7QUFFQSxZQUFJSyxVQUFVeEIsRUFBRSw0QkFBRixFQUFnQ1csTUFBaEMsQ0FBdUNRLE9BQXZDLENBQWQ7O0FBRUFwQixnQkFBUVEsaUJBQVIsQ0FBMEJJLE1BQTFCLENBQWlDYSxPQUFqQztBQUVIOztBQUVELGFBQVNDLGNBQVQsR0FBMEI7QUFDdEJ6QixVQUFFLE1BQUYsRUFBVTBCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCekIsT0FBT0MsU0FBUCxDQUFpQkcsR0FBdkMsRUFBNEMsVUFBVXNCLENBQVYsRUFBYTtBQUNyREEsY0FBRUMsY0FBRjs7QUFFQVg7QUFDSCxTQUpEO0FBS0g7O0FBRUQsYUFBU1ksaUJBQVQsR0FBNkI7QUFDekI3QixVQUFFLE1BQUYsRUFBVTBCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCekIsT0FBT0MsU0FBUCxDQUFpQkksU0FBdkMsRUFBa0QsVUFBVXFCLENBQVYsRUFBYTtBQUMzREEsY0FBRUMsY0FBRjs7QUFFQTVCLGNBQUUsSUFBRixFQUFROEIsT0FBUixDQUFnQixXQUFoQixFQUE2QkMsTUFBN0I7QUFDSCxTQUpEO0FBS0g7O0FBRUQsYUFBU3ZCLEdBQVQsR0FBZTtBQUNYUixVQUFFZ0MsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7O0FBRTFCckIsZ0NBQW9CWixFQUFFQyxPQUFPQyxTQUFQLENBQWlCRSxVQUFuQixDQUFwQjs7QUFFQSxnQkFBSVcsUUFBUWhCLFFBQVFRLGlCQUFSLENBQTBCMkIsSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUNDLE1BQWpEOztBQUVBckIsK0JBQW1CQyxLQUFuQjs7QUFFQU47QUFDQWdCO0FBQ0FJO0FBQ0gsU0FYRDtBQVlIOztBQUVELFdBQU85QixPQUFQO0FBRUgsQ0F2RmMsQ0F1RmJDLENBdkZhLENBQWY7O0FBeUZBLElBQUlvQyxVQUFVLElBQUlyQyxPQUFKLEVBQWQ7QUFDQXFDLFFBQVE1QixHQUFSLEciLCJmaWxlIjoiaW52b2ljZS5mOTllZGQ4OC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJbnZvaWNlID0gKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICBoZWFkZXI6ICcuaW52b2ljZS1pdGVtcyAuaGVhZGVyJyxcclxuICAgICAgICAgIGNvbGxlY3Rpb246ICcudGFibGUtaXRlbXMnLFxyXG4gICAgICAgICAgYnRuOiAnLmFkZC1pdGVtJyxcclxuICAgICAgICAgIGJ0blJlbW92ZTogJy5idG4tcmVtb3ZlJ1xyXG4gICAgICB9LFxyXG4gICAgICBidG46ICc8YnV0dG9uIGNsYXNzPVwiYWRkLWl0ZW1cIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPkFkZCBpdGVtPC9idXR0b24+JyxcclxuICAgICAgYnRuUmVtb3ZlOiAnPGEgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tcmVtb3ZlXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiBkYXRhLXBsYWNlbWVudD1cInJpZ2h0XCIgdGl0bGU9XCJEZWxldGVcIj4nICtcclxuICAgICAgICAgICc8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPicgK1xyXG4gICAgICAgICAgJzwvYT4nXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIEludm9pY2UoKSB7XHJcbiAgICAgICAgdGhpcy4kY29sbGVjdGlvbkhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBydW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbigpIHtcclxuICAgICAgICB2YXIgJGJ0biA9ICQoY29uZmlnLmJ0bik7XHJcblxyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5oZWFkZXIpLmFwcGVuZCgkYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSG9sZGVyKGhvbGRlcikge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIgPSBob2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtRm9ybSgpIHtcclxuICAgICAgICB2YXIgcHJvdG90eXBlID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdwcm90b3R5cGUnKTtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcpO1xyXG5cclxuICAgICAgICB2YXIgbmV3Rm9ybSA9IHByb3RvdHlwZTtcclxuXHJcbiAgICAgICAgbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xyXG4gICAgICAgIG5ld0Zvcm0gPSAkKG5ld0Zvcm0pLmh0bWwoKS5yZXBsYWNlKC88ZGl2Pi9nLCAnPHRkPicpLnJlcGxhY2UoLzxcXC9kaXY+L2csICc8L3RkPicpO1xyXG5cclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3Rm9ybSk7XHJcblxyXG4gICAgICAgIHZhciAkbmV3Um93ID0gJCgnPHRyIGNsYXNzPVwiaXRlbS1yb3dcIj48L3RyPicpLmFwcGVuZChuZXdGb3JtKTtcclxuXHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJG5ld1Jvdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQWRkSXRlbUNsaWNrKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBjb25maWcuc2VsZWN0b3JzLmJ0biwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblJlbW92ZUl0ZW1DbGljaygpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgY29uZmlnLnNlbGVjdG9ycy5idG5SZW1vdmUsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLml0ZW0tcm93JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25Ib2xkZXIoJChjb25maWcuc2VsZWN0b3JzLmNvbGxlY3Rpb24pKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgndHInKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgICAgICBvbkFkZEl0ZW1DbGljaygpO1xyXG4gICAgICAgICAgICBvblJlbW92ZUl0ZW1DbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9