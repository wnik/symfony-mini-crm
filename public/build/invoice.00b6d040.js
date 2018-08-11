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
        newForm = $(newForm).find('div').unwrap();

        console.log(newForm.html().replace(/<div>/g, '<td>').replace(/<\/div>/g, '</td>'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJmaW5kIiwidW53cmFwIiwiY29uc29sZSIsImxvZyIsImh0bWwiLCIkbmV3Um93Iiwib25BZGRJdGVtQ2xpY2siLCJvbiIsImUiLCJkb2N1bWVudCIsInJlYWR5IiwibGVuZ3RoIiwiaW52b2ljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUFJQSxVQUFXLFVBQVVDLENBQVYsRUFBYTs7QUFFeEIsUUFBSUMsU0FBUztBQUNYQyxtQkFBVztBQUNQQyxvQkFBUSx3QkFERDtBQUVQQyx3QkFBWSxjQUZMO0FBR1BDLGlCQUFLO0FBSEUsU0FEQTtBQU1YQSxhQUFLO0FBTk0sS0FBYjs7QUFTQSxhQUFTTixPQUFULEdBQW1CO0FBQ2YsYUFBS08saUJBQUwsR0FBeUIsSUFBekI7QUFDQSxhQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7QUFFRCxhQUFTQyxhQUFULEdBQXlCO0FBQ3JCLFlBQUlDLE9BQU9ULEVBQUVDLE9BQU9JLEdBQVQsQ0FBWDs7QUFFQUwsVUFBRUMsT0FBT0MsU0FBUCxDQUFpQkMsTUFBbkIsRUFBMkJPLE1BQTNCLENBQWtDRCxJQUFsQztBQUNIOztBQUVELGFBQVNFLG1CQUFULENBQTZCQyxNQUE3QixFQUFxQztBQUNqQ2IsZ0JBQVFPLGlCQUFSLEdBQTRCTSxNQUE1QjtBQUNIOztBQUVELGFBQVNDLGtCQUFULENBQTRCQyxLQUE1QixFQUFtQztBQUMvQmYsZ0JBQVFPLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixPQUEvQixFQUF3Q0QsS0FBeEM7QUFDSDs7QUFFRCxhQUFTRSxXQUFULEdBQXVCO0FBQ25CLFlBQUlDLFlBQVlsQixRQUFRTyxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsV0FBL0IsQ0FBaEI7O0FBRUEsWUFBSUQsUUFBUWYsUUFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLENBQVo7O0FBRUEsWUFBSUcsVUFBVUQsU0FBZDs7QUFFQUMsa0JBQVVBLFFBQVFDLE9BQVIsQ0FBZ0IsV0FBaEIsRUFBNkJMLEtBQTdCLENBQVY7QUFDQUksa0JBQVVsQixFQUFFa0IsT0FBRixFQUFXRSxJQUFYLENBQWdCLEtBQWhCLEVBQXVCQyxNQUF2QixFQUFWOztBQUVBQyxnQkFBUUMsR0FBUixDQUFZTCxRQUFRTSxJQUFSLEdBQWVMLE9BQWYsQ0FBdUIsUUFBdkIsRUFBaUMsTUFBakMsRUFBeUNBLE9BQXpDLENBQWlELFVBQWpELEVBQTZELE9BQTdELENBQVo7O0FBRUFwQixnQkFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxRQUFRLENBQWhEOztBQUVBLFlBQUlXLFVBQVV6QixFQUFFLDRCQUFGLEVBQWdDVSxNQUFoQyxDQUF1Q1EsT0FBdkMsQ0FBZDs7QUFFQW5CLGdCQUFRTyxpQkFBUixDQUEwQkksTUFBMUIsQ0FBaUNlLE9BQWpDO0FBRUg7O0FBRUQsYUFBU0MsY0FBVCxHQUEwQjtBQUN0QjFCLFVBQUUsTUFBRixFQUFVMkIsRUFBVixDQUFhLE9BQWIsRUFBc0IxQixPQUFPQyxTQUFQLENBQWlCRyxHQUF2QyxFQUE0QyxVQUFVdUIsQ0FBVixFQUFhO0FBQ3JEWjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTVCxHQUFULEdBQWU7QUFDWFAsVUFBRTZCLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUUxQm5CLGdDQUFvQlgsRUFBRUMsT0FBT0MsU0FBUCxDQUFpQkUsVUFBbkIsQ0FBcEI7O0FBRUEsZ0JBQUlVLFFBQVFmLFFBQVFPLGlCQUFSLENBQTBCYyxJQUExQixDQUErQixJQUEvQixFQUFxQ1csTUFBakQ7O0FBRUFsQiwrQkFBbUJDLEtBQW5COztBQUVBTjtBQUNBa0I7QUFDSCxTQVZEO0FBV0g7O0FBRUQsV0FBTzNCLE9BQVA7QUFFSCxDQXhFYyxDQXdFYkMsQ0F4RWEsQ0FBZjs7QUEwRUEsSUFBSWdDLFVBQVUsSUFBSWpDLE9BQUosRUFBZDtBQUNBaUMsUUFBUXpCLEdBQVIsRyIsImZpbGUiOiJpbnZvaWNlLjAwYjZkMDQwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEludm9pY2UgPSAoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICAgIGhlYWRlcjogJy5pbnZvaWNlLWl0ZW1zIC5oZWFkZXInLFxyXG4gICAgICAgICAgY29sbGVjdGlvbjogJy50YWJsZS1pdGVtcycsXHJcbiAgICAgICAgICBidG46ICcuYWRkLWl0ZW0nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0bjogJzxidXR0b24gY2xhc3M9XCJhZGQtaXRlbVwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+QWRkIGl0ZW08L2J1dHRvbj4nXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIEludm9pY2UoKSB7XHJcbiAgICAgICAgdGhpcy4kY29sbGVjdGlvbkhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBydW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbigpIHtcclxuICAgICAgICB2YXIgJGJ0biA9ICQoY29uZmlnLmJ0bik7XHJcblxyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5oZWFkZXIpLmFwcGVuZCgkYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSG9sZGVyKGhvbGRlcikge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIgPSBob2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtRm9ybSgpIHtcclxuICAgICAgICB2YXIgcHJvdG90eXBlID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdwcm90b3R5cGUnKTtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcpO1xyXG5cclxuICAgICAgICB2YXIgbmV3Rm9ybSA9IHByb3RvdHlwZTtcclxuXHJcbiAgICAgICAgbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xyXG4gICAgICAgIG5ld0Zvcm0gPSAkKG5ld0Zvcm0pLmZpbmQoJ2RpdicpLnVud3JhcCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdGb3JtLmh0bWwoKS5yZXBsYWNlKC88ZGl2Pi9nLCAnPHRkPicpLnJlcGxhY2UoLzxcXC9kaXY+L2csICc8L3RkPicpKTtcclxuXHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgIHZhciAkbmV3Um93ID0gJCgnPHRyIGNsYXNzPVwiaXRlbS1yb3dcIj48L3RyPicpLmFwcGVuZChuZXdGb3JtKTtcclxuXHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJG5ld1Jvdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQWRkSXRlbUNsaWNrKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBjb25maWcuc2VsZWN0b3JzLmJ0biwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgYWRkSXRlbUZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkhvbGRlcigkKGNvbmZpZy5zZWxlY3RvcnMuY29sbGVjdGlvbikpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5maW5kKCd0cicpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25JbmRleChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBhZGRJdGVtQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIG9uQWRkSXRlbUNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEludm9pY2U7XHJcblxyXG59KCQpKTtcclxuXHJcbnZhciBpbnZvaWNlID0gbmV3IEludm9pY2UoKTtcclxuaW52b2ljZS5ydW4oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=