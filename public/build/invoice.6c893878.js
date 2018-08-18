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

        var $newRow = $('<tr class="item-row"></tr>').append(newForm);
        $newRow.find('td').eq(1).add;
        $newRow.append('<td width="7%">' + config.btnRemove + '</td>');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCJidG5SZW1vdmUiLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJodG1sIiwiJG5ld1JvdyIsImZpbmQiLCJlcSIsImFkZCIsIm9uQWRkSXRlbUNsaWNrIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJvblJlbW92ZUl0ZW1DbGljayIsInBhcmVudHMiLCJyZW1vdmUiLCJkb2N1bWVudCIsInJlYWR5IiwibGVuZ3RoIiwiaW52b2ljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUFJQSxVQUFXLFVBQVVDLENBQVYsRUFBYTs7QUFFeEIsUUFBSUMsU0FBUztBQUNYQyxtQkFBVztBQUNQQyxvQkFBUSx3QkFERDtBQUVQQyx3QkFBWSxjQUZMO0FBR1BDLGlCQUFLLFdBSEU7QUFJUEMsdUJBQVc7QUFKSixTQURBO0FBT1hELGFBQUssb0ZBUE07QUFRWEMsbUJBQVcsK0dBQ1AsNkJBRE8sR0FFUDtBQVZPLEtBQWI7O0FBYUEsYUFBU1AsT0FBVCxHQUFtQjtBQUNmLGFBQUtRLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixZQUFJQyxPQUFPVixFQUFFQyxPQUFPSSxHQUFULENBQVg7O0FBRUFMLFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQW5CLEVBQTJCUSxNQUEzQixDQUFrQ0QsSUFBbEM7QUFDSDs7QUFFRCxhQUFTRSxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDakNkLGdCQUFRUSxpQkFBUixHQUE0Qk0sTUFBNUI7QUFDSDs7QUFFRCxhQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDL0JoQixnQkFBUVEsaUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxLQUF4QztBQUNIOztBQUVELGFBQVNFLFdBQVQsR0FBdUI7QUFDbkIsWUFBSUMsWUFBWW5CLFFBQVFRLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixXQUEvQixDQUFoQjs7QUFFQSxZQUFJRCxRQUFRaEIsUUFBUVEsaUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLENBQVo7O0FBRUEsWUFBSUcsVUFBVUQsU0FBZDs7QUFFQUMsa0JBQVVBLFFBQVFDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJMLEtBQTdCLENBQVY7QUFDQUksa0JBQVVuQixFQUFFbUIsT0FBRixFQUFXRSxJQUFYLEdBQWtCRCxPQUFsQixDQUEwQixRQUExQixFQUFvQyxNQUFwQyxFQUE0Q0EsT0FBNUMsQ0FBb0QsVUFBcEQsRUFBZ0UsT0FBaEUsQ0FBVjs7QUFFQXJCLGdCQUFRUSxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELFFBQVEsQ0FBaEQ7O0FBRUEsWUFBSU8sVUFBVXRCLEVBQUUsNEJBQUYsRUFBZ0NXLE1BQWhDLENBQXVDUSxPQUF2QyxDQUFkO0FBQ0FHLGdCQUFRQyxJQUFSLENBQWEsSUFBYixFQUFtQkMsRUFBbkIsQ0FBc0IsQ0FBdEIsRUFBeUJDLEdBQXpCO0FBQ0FILGdCQUFRWCxNQUFSLENBQWUsb0JBQW9CVixPQUFPSyxTQUEzQixHQUF1QyxPQUF0RDs7QUFFQVAsZ0JBQVFRLGlCQUFSLENBQTBCSSxNQUExQixDQUFpQ1csT0FBakM7QUFFSDs7QUFFRCxhQUFTSSxjQUFULEdBQTBCO0FBQ3RCMUIsVUFBRSxNQUFGLEVBQVUyQixFQUFWLENBQWEsT0FBYixFQUFzQjFCLE9BQU9DLFNBQVAsQ0FBaUJHLEdBQXZDLEVBQTRDLFVBQVV1QixDQUFWLEVBQWE7QUFDckRBLGNBQUVDLGNBQUY7O0FBRUFaO0FBQ0gsU0FKRDtBQUtIOztBQUVELGFBQVNhLGlCQUFULEdBQTZCO0FBQ3pCOUIsVUFBRSxNQUFGLEVBQVUyQixFQUFWLENBQWEsT0FBYixFQUFzQjFCLE9BQU9DLFNBQVAsQ0FBaUJJLFNBQXZDLEVBQWtELFVBQVVzQixDQUFWLEVBQWE7QUFDM0RBLGNBQUVDLGNBQUY7O0FBRUE3QixjQUFFLElBQUYsRUFBUStCLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJDLE1BQTdCO0FBQ0gsU0FKRDtBQUtIOztBQUVELGFBQVN4QixHQUFULEdBQWU7QUFDWFIsVUFBRWlDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUUxQnRCLGdDQUFvQlosRUFBRUMsT0FBT0MsU0FBUCxDQUFpQkUsVUFBbkIsQ0FBcEI7O0FBRUEsZ0JBQUlXLFFBQVFoQixRQUFRUSxpQkFBUixDQUEwQmdCLElBQTFCLENBQStCLElBQS9CLEVBQXFDWSxNQUFqRDs7QUFFQXJCLCtCQUFtQkMsS0FBbkI7O0FBRUFOO0FBQ0FpQjtBQUNBSTtBQUNILFNBWEQ7QUFZSDs7QUFFRCxXQUFPL0IsT0FBUDtBQUVILENBdkZjLENBdUZiQyxDQXZGYSxDQUFmOztBQXlGQSxJQUFJb0MsVUFBVSxJQUFJckMsT0FBSixFQUFkO0FBQ0FxQyxRQUFRNUIsR0FBUixHIiwiZmlsZSI6Imludm9pY2UuNmM4OTM4NzguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW52b2ljZSA9IChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgICAgaGVhZGVyOiAnLmludm9pY2UtaXRlbXMgLmhlYWRlcicsXHJcbiAgICAgICAgICBjb2xsZWN0aW9uOiAnLnRhYmxlLWl0ZW1zJyxcclxuICAgICAgICAgIGJ0bjogJy5hZGQtaXRlbScsXHJcbiAgICAgICAgICBidG5SZW1vdmU6ICcuYnRuLXJlbW92ZSdcclxuICAgICAgfSxcclxuICAgICAgYnRuOiAnPGJ1dHRvbiBjbGFzcz1cImFkZC1pdGVtXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5BZGQgaXRlbTwvYnV0dG9uPicsXHJcbiAgICAgIGJ0blJlbW92ZTogJzxhIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXJlbW92ZVwiIGhyZWY9XCIjXCIgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgZGF0YS1wbGFjZW1lbnQ9XCJyaWdodFwiIHRpdGxlPVwiRGVsZXRlXCI+JyArXHJcbiAgICAgICAgICAnPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT4nICtcclxuICAgICAgICAgICc8L2E+J1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBJbnZvaWNlKCkge1xyXG4gICAgICAgIHRoaXMuJGNvbGxlY3Rpb25Ib2xkZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucnVuID0gcnVuO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1CdXR0b24oKSB7XHJcbiAgICAgICAgdmFyICRidG4gPSAkKGNvbmZpZy5idG4pO1xyXG5cclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMuaGVhZGVyKS5hcHBlbmQoJGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkhvbGRlcihob2xkZXIpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyID0gaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25JbmRleChpbmRleCkge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUZvcm0oKSB7XHJcbiAgICAgICAgdmFyIHByb3RvdHlwZSA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XHJcblxyXG4gICAgICAgIHZhciBpbmRleCA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgdmFyIG5ld0Zvcm0gPSBwcm90b3R5cGU7XHJcblxyXG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcclxuICAgICAgICBuZXdGb3JtID0gJChuZXdGb3JtKS5odG1sKCkucmVwbGFjZSgvPGRpdj4vZywgJzx0ZD4nKS5yZXBsYWNlKC88XFwvZGl2Pi9nLCAnPC90ZD4nKTtcclxuXHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgIHZhciAkbmV3Um93ID0gJCgnPHRyIGNsYXNzPVwiaXRlbS1yb3dcIj48L3RyPicpLmFwcGVuZChuZXdGb3JtKTtcclxuICAgICAgICAkbmV3Um93LmZpbmQoJ3RkJykuZXEoMSkuYWRkXHJcbiAgICAgICAgJG5ld1Jvdy5hcHBlbmQoJzx0ZCB3aWR0aD1cIjclXCI+JyArIGNvbmZpZy5idG5SZW1vdmUgKyAnPC90ZD4nKTtcclxuXHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJG5ld1Jvdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQWRkSXRlbUNsaWNrKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBjb25maWcuc2VsZWN0b3JzLmJ0biwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblJlbW92ZUl0ZW1DbGljaygpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgY29uZmlnLnNlbGVjdG9ycy5idG5SZW1vdmUsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykucGFyZW50cygnLml0ZW0tcm93JykucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25Ib2xkZXIoJChjb25maWcuc2VsZWN0b3JzLmNvbGxlY3Rpb24pKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZmluZCgndHInKS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgYWRkSXRlbUJ1dHRvbigpO1xyXG4gICAgICAgICAgICBvbkFkZEl0ZW1DbGljaygpO1xyXG4gICAgICAgICAgICBvblJlbW92ZUl0ZW1DbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBJbnZvaWNlO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgaW52b2ljZSA9IG5ldyBJbnZvaWNlKCk7XHJcbmludm9pY2UucnVuKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2ludm9pY2UuanMiXSwic291cmNlUm9vdCI6IiJ9