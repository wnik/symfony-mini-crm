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
        console.log($(newForm));
        $(newForm).find('div').unwrap();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsInVud3JhcCIsIiRuZXdSb3ciLCJvbkFkZEl0ZW1DbGljayIsIm9uIiwiZSIsImRvY3VtZW50IiwicmVhZHkiLCJsZW5ndGgiLCJpbnZvaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQUlBLFVBQVcsVUFBVUMsQ0FBVixFQUFhOztBQUV4QixRQUFJQyxTQUFTO0FBQ1hDLG1CQUFXO0FBQ1BDLG9CQUFRLHdCQUREO0FBRVBDLHdCQUFZLGNBRkw7QUFHUEMsaUJBQUs7QUFIRSxTQURBO0FBTVhBLGFBQUs7QUFOTSxLQUFiOztBQVNBLGFBQVNOLE9BQVQsR0FBbUI7QUFDZixhQUFLTyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLGFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVELGFBQVNDLGFBQVQsR0FBeUI7QUFDckIsWUFBSUMsT0FBT1QsRUFBRUMsT0FBT0ksR0FBVCxDQUFYOztBQUVBTCxVQUFFQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFuQixFQUEyQk8sTUFBM0IsQ0FBa0NELElBQWxDO0FBQ0g7O0FBRUQsYUFBU0UsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDYixnQkFBUU8saUJBQVIsR0FBNEJNLE1BQTVCO0FBQ0g7O0FBRUQsYUFBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQy9CZixnQkFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxLQUF4QztBQUNIOztBQUVELGFBQVNFLFdBQVQsR0FBdUI7QUFDbkIsWUFBSUMsWUFBWWxCLFFBQVFPLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixXQUEvQixDQUFoQjs7QUFFQSxZQUFJRCxRQUFRZixRQUFRTyxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsQ0FBWjs7QUFFQSxZQUFJRyxVQUFVRCxTQUFkOztBQUVBQyxrQkFBVUEsUUFBUUMsT0FBUixDQUFnQixXQUFoQixFQUE2QkwsS0FBN0IsQ0FBVjtBQUNBTSxnQkFBUUMsR0FBUixDQUFZckIsRUFBRWtCLE9BQUYsQ0FBWjtBQUNBbEIsVUFBRWtCLE9BQUYsRUFBV0ksSUFBWCxDQUFnQixLQUFoQixFQUF1QkMsTUFBdkI7O0FBRUF4QixnQkFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxRQUFRLENBQWhEOztBQUVBLFlBQUlVLFVBQVV4QixFQUFFLDRCQUFGLEVBQWdDVSxNQUFoQyxDQUF1Q1EsT0FBdkMsQ0FBZDs7QUFFQW5CLGdCQUFRTyxpQkFBUixDQUEwQkksTUFBMUIsQ0FBaUNjLE9BQWpDO0FBRUg7O0FBRUQsYUFBU0MsY0FBVCxHQUEwQjtBQUN0QnpCLFVBQUUsTUFBRixFQUFVMEIsRUFBVixDQUFhLE9BQWIsRUFBc0J6QixPQUFPQyxTQUFQLENBQWlCRyxHQUF2QyxFQUE0QyxVQUFVc0IsQ0FBVixFQUFhO0FBQ3JEWDtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTVCxHQUFULEdBQWU7QUFDWFAsVUFBRTRCLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUUxQmxCLGdDQUFvQlgsRUFBRUMsT0FBT0MsU0FBUCxDQUFpQkUsVUFBbkIsQ0FBcEI7O0FBRUEsZ0JBQUlVLFFBQVFmLFFBQVFPLGlCQUFSLENBQTBCZ0IsSUFBMUIsQ0FBK0IsSUFBL0IsRUFBcUNRLE1BQWpEOztBQUVBakIsK0JBQW1CQyxLQUFuQjs7QUFFQU47QUFDQWlCO0FBQ0gsU0FWRDtBQVdIOztBQUVELFdBQU8xQixPQUFQO0FBRUgsQ0F2RWMsQ0F1RWJDLENBdkVhLENBQWY7O0FBeUVBLElBQUkrQixVQUFVLElBQUloQyxPQUFKLEVBQWQ7QUFDQWdDLFFBQVF4QixHQUFSLEciLCJmaWxlIjoiaW52b2ljZS5iYTJlMWEzZC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBJbnZvaWNlID0gKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICBoZWFkZXI6ICcuaW52b2ljZS1pdGVtcyAuaGVhZGVyJyxcclxuICAgICAgICAgIGNvbGxlY3Rpb246ICcudGFibGUtaXRlbXMnLFxyXG4gICAgICAgICAgYnRuOiAnLmFkZC1pdGVtJ1xyXG4gICAgICB9LFxyXG4gICAgICBidG46ICc8YnV0dG9uIGNsYXNzPVwiYWRkLWl0ZW1cIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPkFkZCBpdGVtPC9idXR0b24+J1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBJbnZvaWNlKCkge1xyXG4gICAgICAgIHRoaXMuJGNvbGxlY3Rpb25Ib2xkZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucnVuID0gcnVuO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1CdXR0b24oKSB7XHJcbiAgICAgICAgdmFyICRidG4gPSAkKGNvbmZpZy5idG4pO1xyXG5cclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMuaGVhZGVyKS5hcHBlbmQoJGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkhvbGRlcihob2xkZXIpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyID0gaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25JbmRleChpbmRleCkge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnLCBpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUZvcm0oKSB7XHJcbiAgICAgICAgdmFyIHByb3RvdHlwZSA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgncHJvdG90eXBlJyk7XHJcblxyXG4gICAgICAgIHZhciBpbmRleCA9IEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIuZGF0YSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgdmFyIG5ld0Zvcm0gPSBwcm90b3R5cGU7XHJcblxyXG4gICAgICAgIG5ld0Zvcm0gPSBuZXdGb3JtLnJlcGxhY2UoL19fbmFtZV9fL2csIGluZGV4KTtcclxuICAgICAgICBjb25zb2xlLmxvZygkKG5ld0Zvcm0pKTtcclxuICAgICAgICAkKG5ld0Zvcm0pLmZpbmQoJ2RpdicpLnVud3JhcCgpO1xyXG5cclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmRhdGEoJ2luZGV4JywgaW5kZXggKyAxKTtcclxuXHJcbiAgICAgICAgdmFyICRuZXdSb3cgPSAkKCc8dHIgY2xhc3M9XCJpdGVtLXJvd1wiPjwvdHI+JykuYXBwZW5kKG5ld0Zvcm0pO1xyXG5cclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZCgkbmV3Um93KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25BZGRJdGVtQ2xpY2soKSB7XHJcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsIGNvbmZpZy5zZWxlY3RvcnMuYnRuLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBhZGRJdGVtRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJ1bigpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSG9sZGVyKCQoY29uZmlnLnNlbGVjdG9ycy5jb2xsZWN0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyLmZpbmQoJ3RyJykubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1CdXR0b24oKTtcclxuICAgICAgICAgICAgb25BZGRJdGVtQ2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW52b2ljZTtcclxuXHJcbn0oJCkpO1xyXG5cclxudmFyIGludm9pY2UgPSBuZXcgSW52b2ljZSgpO1xyXG5pbnZvaWNlLnJ1bigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbnZvaWNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==