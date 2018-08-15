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

            console.log($(this).parents('.item-row'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCJidG5SZW1vdmUiLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJodG1sIiwiJG5ld1JvdyIsIm9uQWRkSXRlbUNsaWNrIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJvblJlbW92ZUl0ZW1DbGljayIsImNvbnNvbGUiLCJsb2ciLCJwYXJlbnRzIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpbmQiLCJsZW5ndGgiLCJpbnZvaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQUlBLFVBQVcsVUFBVUMsQ0FBVixFQUFhOztBQUV4QixRQUFJQyxTQUFTO0FBQ1hDLG1CQUFXO0FBQ1BDLG9CQUFRLHdCQUREO0FBRVBDLHdCQUFZLGNBRkw7QUFHUEMsaUJBQUssV0FIRTtBQUlQQyx1QkFBVztBQUpKLFNBREE7QUFPWEQsYUFBSztBQVBNLEtBQWI7O0FBVUEsYUFBU04sT0FBVCxHQUFtQjtBQUNmLGFBQUtRLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixZQUFJQyxPQUFPVixFQUFFQyxPQUFPSSxHQUFULENBQVg7O0FBRUFMLFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQW5CLEVBQTJCUSxNQUEzQixDQUFrQ0QsSUFBbEM7QUFDSDs7QUFFRCxhQUFTRSxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDakNkLGdCQUFRUSxpQkFBUixHQUE0Qk0sTUFBNUI7QUFDSDs7QUFFRCxhQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDL0JoQixnQkFBUVEsaUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxLQUF4QztBQUNIOztBQUVELGFBQVNFLFdBQVQsR0FBdUI7QUFDbkIsWUFBSUMsWUFBWW5CLFFBQVFRLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixXQUEvQixDQUFoQjs7QUFFQSxZQUFJRCxRQUFRaEIsUUFBUVEsaUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLENBQVo7O0FBRUEsWUFBSUcsVUFBVUQsU0FBZDs7QUFFQUMsa0JBQVVBLFFBQVFDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJMLEtBQTdCLENBQVY7QUFDQUksa0JBQVVuQixFQUFFbUIsT0FBRixFQUFXRSxJQUFYLEdBQWtCRCxPQUFsQixDQUEwQixRQUExQixFQUFvQyxNQUFwQyxFQUE0Q0EsT0FBNUMsQ0FBb0QsVUFBcEQsRUFBZ0UsT0FBaEUsQ0FBVjs7QUFFQXJCLGdCQUFRUSxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELFFBQVEsQ0FBaEQ7O0FBRUEsWUFBSU8sVUFBVXRCLEVBQUUsNEJBQUYsRUFBZ0NXLE1BQWhDLENBQXVDUSxPQUF2QyxDQUFkOztBQUVBcEIsZ0JBQVFRLGlCQUFSLENBQTBCSSxNQUExQixDQUFpQ1csT0FBakM7QUFFSDs7QUFFRCxhQUFTQyxjQUFULEdBQTBCO0FBQ3RCdkIsVUFBRSxNQUFGLEVBQVV3QixFQUFWLENBQWEsT0FBYixFQUFzQnZCLE9BQU9DLFNBQVAsQ0FBaUJHLEdBQXZDLEVBQTRDLFVBQVVvQixDQUFWLEVBQWE7QUFDckRBLGNBQUVDLGNBQUY7O0FBRUFUO0FBQ0gsU0FKRDtBQUtIOztBQUVELGFBQVNVLGlCQUFULEdBQTZCO0FBQ3pCM0IsVUFBRSxNQUFGLEVBQVV3QixFQUFWLENBQWEsT0FBYixFQUFzQnZCLE9BQU9DLFNBQVAsQ0FBaUJJLFNBQXZDLEVBQWtELFVBQVVtQixDQUFWLEVBQWE7QUFDM0RBLGNBQUVDLGNBQUY7O0FBRUFFLG9CQUFRQyxHQUFSLENBQVk3QixFQUFFLElBQUYsRUFBUThCLE9BQVIsQ0FBZ0IsV0FBaEIsQ0FBWjtBQUNILFNBSkQ7QUFLSDs7QUFFRCxhQUFTdEIsR0FBVCxHQUFlO0FBQ1hSLFVBQUUrQixRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTs7QUFFMUJwQixnQ0FBb0JaLEVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJFLFVBQW5CLENBQXBCOztBQUVBLGdCQUFJVyxRQUFRaEIsUUFBUVEsaUJBQVIsQ0FBMEIwQixJQUExQixDQUErQixJQUEvQixFQUFxQ0MsTUFBakQ7O0FBRUFwQiwrQkFBbUJDLEtBQW5COztBQUVBTjtBQUNBYztBQUNBSTtBQUNILFNBWEQ7QUFZSDs7QUFFRCxXQUFPNUIsT0FBUDtBQUVILENBbEZjLENBa0ZiQyxDQWxGYSxDQUFmOztBQW9GQSxJQUFJbUMsVUFBVSxJQUFJcEMsT0FBSixFQUFkO0FBQ0FvQyxRQUFRM0IsR0FBUixHIiwiZmlsZSI6Imludm9pY2UuYzM5YWQxMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW52b2ljZSA9IChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgICAgaGVhZGVyOiAnLmludm9pY2UtaXRlbXMgLmhlYWRlcicsXHJcbiAgICAgICAgICBjb2xsZWN0aW9uOiAnLnRhYmxlLWl0ZW1zJyxcclxuICAgICAgICAgIGJ0bjogJy5hZGQtaXRlbScsXHJcbiAgICAgICAgICBidG5SZW1vdmU6ICcuYnRuLXJlbW92ZSdcclxuICAgICAgfSxcclxuICAgICAgYnRuOiAnPGJ1dHRvbiBjbGFzcz1cImFkZC1pdGVtXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT5BZGQgaXRlbTwvYnV0dG9uPidcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gSW52b2ljZSgpIHtcclxuICAgICAgICB0aGlzLiRjb2xsZWN0aW9uSG9sZGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJ1biA9IHJ1bjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtQnV0dG9uKCkge1xyXG4gICAgICAgIHZhciAkYnRuID0gJChjb25maWcuYnRuKTtcclxuXHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLmhlYWRlcikuYXBwZW5kKCRidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25Ib2xkZXIoaG9sZGVyKSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlciA9IGhvbGRlcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1Gb3JtKCkge1xyXG4gICAgICAgIHZhciBwcm90b3R5cGUgPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ3Byb3RvdHlwZScpO1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4Jyk7XHJcblxyXG4gICAgICAgIHZhciBuZXdGb3JtID0gcHJvdG90eXBlO1xyXG5cclxuICAgICAgICBuZXdGb3JtID0gbmV3Rm9ybS5yZXBsYWNlKC9fX25hbWVfXy9nLCBpbmRleCk7XHJcbiAgICAgICAgbmV3Rm9ybSA9ICQobmV3Rm9ybSkuaHRtbCgpLnJlcGxhY2UoLzxkaXY+L2csICc8dGQ+JykucmVwbGFjZSgvPFxcL2Rpdj4vZywgJzwvdGQ+Jyk7XHJcblxyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCArIDEpO1xyXG5cclxuICAgICAgICB2YXIgJG5ld1JvdyA9ICQoJzx0ciBjbGFzcz1cIml0ZW0tcm93XCI+PC90cj4nKS5hcHBlbmQobmV3Rm9ybSk7XHJcblxyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kKCRuZXdSb3cpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkFkZEl0ZW1DbGljaygpIHtcclxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgY29uZmlnLnNlbGVjdG9ycy5idG4sIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1Gb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25SZW1vdmVJdGVtQ2xpY2soKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGNvbmZpZy5zZWxlY3RvcnMuYnRuUmVtb3ZlLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkKHRoaXMpLnBhcmVudHMoJy5pdGVtLXJvdycpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkhvbGRlcigkKGNvbmZpZy5zZWxlY3RvcnMuY29sbGVjdGlvbikpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5maW5kKCd0cicpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25JbmRleChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBhZGRJdGVtQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIG9uQWRkSXRlbUNsaWNrKCk7XHJcbiAgICAgICAgICAgIG9uUmVtb3ZlSXRlbUNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEludm9pY2U7XHJcblxyXG59KCQpKTtcclxuXHJcbnZhciBpbnZvaWNlID0gbmV3IEludm9pY2UoKTtcclxuaW52b2ljZS5ydW4oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=