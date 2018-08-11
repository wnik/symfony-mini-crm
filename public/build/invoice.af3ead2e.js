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
            collection: '.table-items'
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

    function setCollectionIndex(index) {}

    function run() {
        $(document).ready(function () {
            setCollectionHolder();

            addItemButton();
        });
    }

    return Invoice;
}($);

var invoice = new Invoice();
invoice.run();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/invoice.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZG9jdW1lbnQiLCJyZWFkeSIsImludm9pY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDWEMsbUJBQVc7QUFDUEMsb0JBQVEsd0JBREQ7QUFFUEMsd0JBQVk7QUFGTCxTQURBO0FBS1hDLGFBQUs7QUFMTSxLQUFiOztBQVFBLGFBQVNOLE9BQVQsR0FBbUI7QUFDZixhQUFLTyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLGFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVELGFBQVNDLGFBQVQsR0FBeUI7QUFDckIsWUFBSUMsT0FBT1QsRUFBRUMsT0FBT0ksR0FBVCxDQUFYOztBQUVBTCxVQUFFQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFuQixFQUEyQk8sTUFBM0IsQ0FBa0NELElBQWxDO0FBQ0g7O0FBRUQsYUFBU0UsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDYixnQkFBUU8saUJBQVIsR0FBNEJNLE1BQTVCO0FBQ0g7O0FBRUQsYUFBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DLENBRWxDOztBQUVELGFBQVNQLEdBQVQsR0FBZTtBQUNYUCxVQUFFZSxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQkw7O0FBRUFIO0FBQ0gsU0FKRDtBQUtIOztBQUVELFdBQU9ULE9BQVA7QUFFSCxDQXZDYyxDQXVDYkMsQ0F2Q2EsQ0FBZjs7QUF5Q0EsSUFBSWlCLFVBQVUsSUFBSWxCLE9BQUosRUFBZDtBQUNBa0IsUUFBUVYsR0FBUixHIiwiZmlsZSI6Imludm9pY2UuYWYzZWFkMmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSW52b2ljZSA9IChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgIHNlbGVjdG9yczoge1xyXG4gICAgICAgICAgaGVhZGVyOiAnLmludm9pY2UtaXRlbXMgLmhlYWRlcicsXHJcbiAgICAgICAgICBjb2xsZWN0aW9uOiAnLnRhYmxlLWl0ZW1zJ1xyXG4gICAgICB9LFxyXG4gICAgICBidG46ICc8YnV0dG9uIGNsYXNzPVwiYWRkLWl0ZW1cIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPkFkZCBpdGVtPC9idXR0b24+J1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBJbnZvaWNlKCkge1xyXG4gICAgICAgIHRoaXMuJGNvbGxlY3Rpb25Ib2xkZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucnVuID0gcnVuO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1CdXR0b24oKSB7XHJcbiAgICAgICAgdmFyICRidG4gPSAkKGNvbmZpZy5idG4pO1xyXG5cclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMuaGVhZGVyKS5hcHBlbmQoJGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkhvbGRlcihob2xkZXIpIHtcclxuICAgICAgICBJbnZvaWNlLiRjb2xsZWN0aW9uSG9sZGVyID0gaG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvbGxlY3Rpb25JbmRleChpbmRleCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXRDb2xsZWN0aW9uSG9sZGVyKClcclxuXHJcbiAgICAgICAgICAgIGFkZEl0ZW1CdXR0b24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSW52b2ljZTtcclxuXHJcbn0oJCkpO1xyXG5cclxudmFyIGludm9pY2UgPSBuZXcgSW52b2ljZSgpO1xyXG5pbnZvaWNlLnJ1bigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9pbnZvaWNlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==