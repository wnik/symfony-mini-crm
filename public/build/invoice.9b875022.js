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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCJidG5SZW1vdmUiLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJodG1sIiwiJG5ld1JvdyIsIm9uQWRkSXRlbUNsaWNrIiwib24iLCJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZpbmQiLCJsZW5ndGgiLCJpbnZvaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQUlBLFVBQVcsVUFBVUMsQ0FBVixFQUFhOztBQUV4QixRQUFJQyxTQUFTO0FBQ1hDLG1CQUFXO0FBQ1BDLG9CQUFRLHdCQUREO0FBRVBDLHdCQUFZLGNBRkw7QUFHUEMsaUJBQUssV0FIRTtBQUlQQyx1QkFBVztBQUpKLFNBREE7QUFPWEQsYUFBSztBQVBNLEtBQWI7O0FBVUEsYUFBU04sT0FBVCxHQUFtQjtBQUNmLGFBQUtRLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0EsYUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0g7O0FBRUQsYUFBU0MsYUFBVCxHQUF5QjtBQUNyQixZQUFJQyxPQUFPVixFQUFFQyxPQUFPSSxHQUFULENBQVg7O0FBRUFMLFVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJDLE1BQW5CLEVBQTJCUSxNQUEzQixDQUFrQ0QsSUFBbEM7QUFDSDs7QUFFRCxhQUFTRSxtQkFBVCxDQUE2QkMsTUFBN0IsRUFBcUM7QUFDakNkLGdCQUFRUSxpQkFBUixHQUE0Qk0sTUFBNUI7QUFDSDs7QUFFRCxhQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFDL0JoQixnQkFBUVEsaUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxLQUF4QztBQUNIOztBQUVELGFBQVNFLFdBQVQsR0FBdUI7QUFDbkIsWUFBSUMsWUFBWW5CLFFBQVFRLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixXQUEvQixDQUFoQjs7QUFFQSxZQUFJRCxRQUFRaEIsUUFBUVEsaUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLENBQVo7O0FBRUEsWUFBSUcsVUFBVUQsU0FBZDs7QUFFQUMsa0JBQVVBLFFBQVFDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJMLEtBQTdCLENBQVY7QUFDQUksa0JBQVVuQixFQUFFbUIsT0FBRixFQUFXRSxJQUFYLEdBQWtCRCxPQUFsQixDQUEwQixRQUExQixFQUFvQyxNQUFwQyxFQUE0Q0EsT0FBNUMsQ0FBb0QsVUFBcEQsRUFBZ0UsT0FBaEUsQ0FBVjs7QUFFQXJCLGdCQUFRUSxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsRUFBd0NELFFBQVEsQ0FBaEQ7O0FBRUEsWUFBSU8sVUFBVXRCLEVBQUUsNEJBQUYsRUFBZ0NXLE1BQWhDLENBQXVDUSxPQUF2QyxDQUFkOztBQUVBcEIsZ0JBQVFRLGlCQUFSLENBQTBCSSxNQUExQixDQUFpQ1csT0FBakM7QUFFSDs7QUFFRCxhQUFTQyxjQUFULEdBQTBCO0FBQ3RCdkIsVUFBRSxNQUFGLEVBQVV3QixFQUFWLENBQWEsT0FBYixFQUFzQnZCLE9BQU9DLFNBQVAsQ0FBaUJHLEdBQXZDLEVBQTRDLFVBQVVvQixDQUFWLEVBQWE7QUFDckRSO0FBQ0gsU0FGRDtBQUdIOztBQUVELGFBQVNULEdBQVQsR0FBZTtBQUNYUixVQUFFMEIsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7O0FBRTFCZixnQ0FBb0JaLEVBQUVDLE9BQU9DLFNBQVAsQ0FBaUJFLFVBQW5CLENBQXBCOztBQUVBLGdCQUFJVyxRQUFRaEIsUUFBUVEsaUJBQVIsQ0FBMEJxQixJQUExQixDQUErQixJQUEvQixFQUFxQ0MsTUFBakQ7O0FBRUFmLCtCQUFtQkMsS0FBbkI7O0FBRUFOO0FBQ0FjO0FBQ0gsU0FWRDtBQVdIOztBQUVELFdBQU94QixPQUFQO0FBRUgsQ0F2RWMsQ0F1RWJDLENBdkVhLENBQWY7O0FBeUVBLElBQUk4QixVQUFVLElBQUkvQixPQUFKLEVBQWQ7QUFDQStCLFFBQVF0QixHQUFSLEciLCJmaWxlIjoiaW52b2ljZS45Yjg3NTAyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJbnZvaWNlID0gKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICBoZWFkZXI6ICcuaW52b2ljZS1pdGVtcyAuaGVhZGVyJyxcclxuICAgICAgICAgIGNvbGxlY3Rpb246ICcudGFibGUtaXRlbXMnLFxyXG4gICAgICAgICAgYnRuOiAnLmFkZC1pdGVtJyxcclxuICAgICAgICAgIGJ0blJlbW92ZTogJy5idG4tcmVtb3ZlJ1xyXG4gICAgICB9LFxyXG4gICAgICBidG46ICc8YnV0dG9uIGNsYXNzPVwiYWRkLWl0ZW1cIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPkFkZCBpdGVtPC9idXR0b24+J1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBJbnZvaWNlKCkge1xyXG4gICAgICAgIHRoaXMuJGNvbGxlY3Rpb25Ib2xkZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucnVuID0gcnVuO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1CdXR0b24oKSB7XHJcbiAgICAgICAgdmFyICRidG4gPSAkKGNvbmZpZy5idG4pO1xyXG5cclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMuaGVhZGVyKS5hcHBlbmQoJGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkhvbGRlcihob2xkZXIpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyID0gaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25JbmRleChpbmRleCkge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUZvcm0oKSB7XHJcbiAgICAgICAgdmFyIHByb3RvdHlwZSA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XHJcblxyXG4gICAgICAgIHZhciBpbmRleCA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgdmFyIG5ld0Zvcm0gPSBwcm90b3R5cGU7XHJcblxyXG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcclxuICAgICAgICBuZXdGb3JtID0gJChuZXdGb3JtKS5odG1sKCkucmVwbGFjZSgvPGRpdj4vZywgJzx0ZD4nKS5yZXBsYWNlKC88XFwvZGl2Pi9nLCAnPC90ZD4nKTtcclxuXHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgIHZhciAkbmV3Um93ID0gJCgnPHRyIGNsYXNzPVwiaXRlbS1yb3dcIj48L3RyPicpLmFwcGVuZChuZXdGb3JtKTtcclxuXHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJG5ld1Jvdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQWRkSXRlbUNsaWNrKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBjb25maWcuc2VsZWN0b3JzLmJ0biwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgYWRkSXRlbUZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkhvbGRlcigkKGNvbmZpZy5zZWxlY3RvcnMuY29sbGVjdGlvbikpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5maW5kKCd0cicpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25JbmRleChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBhZGRJdGVtQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIG9uQWRkSXRlbUNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEludm9pY2U7XHJcblxyXG59KCQpKTtcclxuXHJcbnZhciBpbnZvaWNlID0gbmV3IEludm9pY2UoKTtcclxuaW52b2ljZS5ydW4oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=