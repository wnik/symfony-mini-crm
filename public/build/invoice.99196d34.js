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
        $newRow.find('td').eq(1).attr('width', '25%');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCJidG5SZW1vdmUiLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJodG1sIiwiJG5ld1JvdyIsImZpbmQiLCJlcSIsImF0dHIiLCJvbkFkZEl0ZW1DbGljayIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25SZW1vdmVJdGVtQ2xpY2siLCJwYXJlbnRzIiwicmVtb3ZlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxlbmd0aCIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsb0JBQVEsd0JBREQ7QUFFUEMsd0JBQVksY0FGTDtBQUdQQyxpQkFBSyxXQUhFO0FBSVBDLHVCQUFXO0FBSkosU0FEQTtBQU9YRCxhQUFLLG9GQVBNO0FBUVhDLG1CQUFXLCtHQUNQLDZCQURPLEdBRVA7QUFWTyxLQUFiOztBQWFBLGFBQVNQLE9BQVQsR0FBbUI7QUFDZixhQUFLUSxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLGFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVELGFBQVNDLGFBQVQsR0FBeUI7QUFDckIsWUFBSUMsT0FBT1YsRUFBRUMsT0FBT0ksR0FBVCxDQUFYOztBQUVBTCxVQUFFQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFuQixFQUEyQlEsTUFBM0IsQ0FBa0NELElBQWxDO0FBQ0g7O0FBRUQsYUFBU0UsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDZCxnQkFBUVEsaUJBQVIsR0FBNEJNLE1BQTVCO0FBQ0g7O0FBRUQsYUFBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQy9CaEIsZ0JBQVFRLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixPQUEvQixFQUF3Q0QsS0FBeEM7QUFDSDs7QUFFRCxhQUFTRSxXQUFULEdBQXVCO0FBQ25CLFlBQUlDLFlBQVluQixRQUFRUSxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsV0FBL0IsQ0FBaEI7O0FBRUEsWUFBSUQsUUFBUWhCLFFBQVFRLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixPQUEvQixDQUFaOztBQUVBLFlBQUlHLFVBQVVELFNBQWQ7O0FBRUFDLGtCQUFVQSxRQUFRQyxPQUFSLENBQWdCLFdBQWhCLEVBQTZCTCxLQUE3QixDQUFWO0FBQ0FJLGtCQUFVbkIsRUFBRW1CLE9BQUYsRUFBV0UsSUFBWCxHQUFrQkQsT0FBbEIsQ0FBMEIsUUFBMUIsRUFBb0MsTUFBcEMsRUFBNENBLE9BQTVDLENBQW9ELFVBQXBELEVBQWdFLE9BQWhFLENBQVY7O0FBRUFyQixnQkFBUVEsaUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxRQUFRLENBQWhEOztBQUVBLFlBQUlPLFVBQVV0QixFQUFFLDRCQUFGLEVBQWdDVyxNQUFoQyxDQUF1Q1EsT0FBdkMsQ0FBZDtBQUNBRyxnQkFBUUMsSUFBUixDQUFhLElBQWIsRUFBbUJDLEVBQW5CLENBQXNCLENBQXRCLEVBQXlCQyxJQUF6QixDQUE4QixPQUE5QixFQUF1QyxLQUF2QztBQUNBSCxnQkFBUVgsTUFBUixDQUFlLG9CQUFvQlYsT0FBT0ssU0FBM0IsR0FBdUMsT0FBdEQ7O0FBRUFQLGdCQUFRUSxpQkFBUixDQUEwQkksTUFBMUIsQ0FBaUNXLE9BQWpDO0FBRUg7O0FBRUQsYUFBU0ksY0FBVCxHQUEwQjtBQUN0QjFCLFVBQUUsTUFBRixFQUFVMkIsRUFBVixDQUFhLE9BQWIsRUFBc0IxQixPQUFPQyxTQUFQLENBQWlCRyxHQUF2QyxFQUE0QyxVQUFVdUIsQ0FBVixFQUFhO0FBQ3JEQSxjQUFFQyxjQUFGOztBQUVBWjtBQUNILFNBSkQ7QUFLSDs7QUFFRCxhQUFTYSxpQkFBVCxHQUE2QjtBQUN6QjlCLFVBQUUsTUFBRixFQUFVMkIsRUFBVixDQUFhLE9BQWIsRUFBc0IxQixPQUFPQyxTQUFQLENBQWlCSSxTQUF2QyxFQUFrRCxVQUFVc0IsQ0FBVixFQUFhO0FBQzNEQSxjQUFFQyxjQUFGOztBQUVBN0IsY0FBRSxJQUFGLEVBQVErQixPQUFSLENBQWdCLFdBQWhCLEVBQTZCQyxNQUE3QjtBQUNILFNBSkQ7QUFLSDs7QUFFRCxhQUFTeEIsR0FBVCxHQUFlO0FBQ1hSLFVBQUVpQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFMUJ0QixnQ0FBb0JaLEVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJFLFVBQW5CLENBQXBCOztBQUVBLGdCQUFJVyxRQUFRaEIsUUFBUVEsaUJBQVIsQ0FBMEJnQixJQUExQixDQUErQixJQUEvQixFQUFxQ1ksTUFBakQ7O0FBRUFyQiwrQkFBbUJDLEtBQW5COztBQUVBTjtBQUNBaUI7QUFDQUk7QUFDSCxTQVhEO0FBWUg7O0FBRUQsV0FBTy9CLE9BQVA7QUFFSCxDQXZGYyxDQXVGYkMsQ0F2RmEsQ0FBZjs7QUF5RkEsSUFBSW9DLFVBQVUsSUFBSXJDLE9BQUosRUFBZDtBQUNBcUMsUUFBUTVCLEdBQVIsRyIsImZpbGUiOiJpbnZvaWNlLjk5MTk2ZDM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEludm9pY2UgPSAoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICAgIGhlYWRlcjogJy5pbnZvaWNlLWl0ZW1zIC5oZWFkZXInLFxyXG4gICAgICAgICAgY29sbGVjdGlvbjogJy50YWJsZS1pdGVtcycsXHJcbiAgICAgICAgICBidG46ICcuYWRkLWl0ZW0nLFxyXG4gICAgICAgICAgYnRuUmVtb3ZlOiAnLmJ0bi1yZW1vdmUnXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0bjogJzxidXR0b24gY2xhc3M9XCJhZGQtaXRlbVwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+QWRkIGl0ZW08L2J1dHRvbj4nLFxyXG4gICAgICBidG5SZW1vdmU6ICc8YSBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1yZW1vdmVcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIGRhdGEtcGxhY2VtZW50PVwicmlnaHRcIiB0aXRsZT1cIkRlbGV0ZVwiPicgK1xyXG4gICAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+JyArXHJcbiAgICAgICAgICAnPC9hPidcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gSW52b2ljZSgpIHtcclxuICAgICAgICB0aGlzLiRjb2xsZWN0aW9uSG9sZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJ1biA9IHJ1bjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtQnV0dG9uKCkge1xyXG4gICAgICAgIHZhciAkYnRuID0gJChjb25maWcuYnRuKTtcclxuXHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLmhlYWRlcikuYXBwZW5kKCRidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25Ib2xkZXIoaG9sZGVyKSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlciA9IGhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1Gb3JtKCkge1xyXG4gICAgICAgIHZhciBwcm90b3R5cGUgPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XHJcblxyXG4gICAgICAgIHZhciBuZXdGb3JtID0gcHJvdG90eXBlO1xyXG5cclxuICAgICAgICBuZXdGb3JtID0gbmV3Rm9ybS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAgICAgbmV3Rm9ybSA9ICQobmV3Rm9ybSkuaHRtbCgpLnJlcGxhY2UoLzxkaXY+L2csICc8dGQ+JykucmVwbGFjZSgvPFxcL2Rpdj4vZywgJzwvdGQ+Jyk7XHJcblxyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCArIDEpO1xyXG5cclxuICAgICAgICB2YXIgJG5ld1JvdyA9ICQoJzx0ciBjbGFzcz1cIml0ZW0tcm93XCI+PC90cj4nKS5hcHBlbmQobmV3Rm9ybSk7XHJcbiAgICAgICAgJG5ld1Jvdy5maW5kKCd0ZCcpLmVxKDEpLmF0dHIoJ3dpZHRoJywgJzI1JScpO1xyXG4gICAgICAgICRuZXdSb3cuYXBwZW5kKCc8dGQgd2lkdGg9XCI3JVwiPicgKyBjb25maWcuYnRuUmVtb3ZlICsgJzwvdGQ+Jyk7XHJcblxyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kKCRuZXdSb3cpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkFkZEl0ZW1DbGljaygpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgY29uZmlnLnNlbGVjdG9ycy5idG4sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1Gb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25SZW1vdmVJdGVtQ2xpY2soKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGNvbmZpZy5zZWxlY3RvcnMuYnRuUmVtb3ZlLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudHMoJy5pdGVtLXJvdycpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSG9sZGVyKCQoY29uZmlnLnNlbGVjdG9ycy5jb2xsZWN0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmZpbmQoJ3RyJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1CdXR0b24oKTtcclxuICAgICAgICAgICAgb25BZGRJdGVtQ2xpY2soKTtcclxuICAgICAgICAgICAgb25SZW1vdmVJdGVtQ2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW52b2ljZTtcclxuXHJcbn0oJCkpO1xyXG5cclxudmFyIGludm9pY2UgPSBuZXcgSW52b2ljZSgpO1xyXG5pbnZvaWNlLnJ1bigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbnZvaWNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==