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

        console.log(newForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJuYW1lcyI6WyJJbnZvaWNlIiwiJCIsImNvbmZpZyIsInNlbGVjdG9ycyIsImhlYWRlciIsImNvbGxlY3Rpb24iLCJidG4iLCIkY29sbGVjdGlvbkhvbGRlciIsInJ1biIsImFkZEl0ZW1CdXR0b24iLCIkYnRuIiwiYXBwZW5kIiwic2V0Q29sbGVjdGlvbkhvbGRlciIsImhvbGRlciIsInNldENvbGxlY3Rpb25JbmRleCIsImluZGV4IiwiZGF0YSIsImFkZEl0ZW1Gb3JtIiwicHJvdG90eXBlIiwibmV3Rm9ybSIsInJlcGxhY2UiLCJmaW5kIiwidW53cmFwIiwiY29uc29sZSIsImxvZyIsIiRuZXdSb3ciLCJvbkFkZEl0ZW1DbGljayIsIm9uIiwiZSIsImRvY3VtZW50IiwicmVhZHkiLCJsZW5ndGgiLCJpbnZvaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQUlBLFVBQVcsVUFBVUMsQ0FBVixFQUFhOztBQUV4QixRQUFJQyxTQUFTO0FBQ1hDLG1CQUFXO0FBQ1BDLG9CQUFRLHdCQUREO0FBRVBDLHdCQUFZLGNBRkw7QUFHUEMsaUJBQUs7QUFIRSxTQURBO0FBTVhBLGFBQUs7QUFOTSxLQUFiOztBQVNBLGFBQVNOLE9BQVQsR0FBbUI7QUFDZixhQUFLTyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLGFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVELGFBQVNDLGFBQVQsR0FBeUI7QUFDckIsWUFBSUMsT0FBT1QsRUFBRUMsT0FBT0ksR0FBVCxDQUFYOztBQUVBTCxVQUFFQyxPQUFPQyxTQUFQLENBQWlCQyxNQUFuQixFQUEyQk8sTUFBM0IsQ0FBa0NELElBQWxDO0FBQ0g7O0FBRUQsYUFBU0UsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ2pDYixnQkFBUU8saUJBQVIsR0FBNEJNLE1BQTVCO0FBQ0g7O0FBRUQsYUFBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBQy9CZixnQkFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxLQUF4QztBQUNIOztBQUVELGFBQVNFLFdBQVQsR0FBdUI7QUFDbkIsWUFBSUMsWUFBWWxCLFFBQVFPLGlCQUFSLENBQTBCUyxJQUExQixDQUErQixXQUEvQixDQUFoQjs7QUFFQSxZQUFJRCxRQUFRZixRQUFRTyxpQkFBUixDQUEwQlMsSUFBMUIsQ0FBK0IsT0FBL0IsQ0FBWjs7QUFFQSxZQUFJRyxVQUFVRCxTQUFkOztBQUVBQyxrQkFBVUEsUUFBUUMsT0FBUixDQUFnQixXQUFoQixFQUE2QkwsS0FBN0IsQ0FBVjtBQUNBSSxrQkFBVWxCLEVBQUVrQixPQUFGLEVBQVdFLElBQVgsQ0FBZ0IsS0FBaEIsRUFBdUJDLE1BQXZCLEVBQVY7O0FBRUFDLGdCQUFRQyxHQUFSLENBQVlMLE9BQVo7O0FBRUFuQixnQkFBUU8saUJBQVIsQ0FBMEJTLElBQTFCLENBQStCLE9BQS9CLEVBQXdDRCxRQUFRLENBQWhEOztBQUVBLFlBQUlVLFVBQVV4QixFQUFFLDRCQUFGLEVBQWdDVSxNQUFoQyxDQUF1Q1EsT0FBdkMsQ0FBZDs7QUFFQW5CLGdCQUFRTyxpQkFBUixDQUEwQkksTUFBMUIsQ0FBaUNjLE9BQWpDO0FBRUg7O0FBRUQsYUFBU0MsY0FBVCxHQUEwQjtBQUN0QnpCLFVBQUUsTUFBRixFQUFVMEIsRUFBVixDQUFhLE9BQWIsRUFBc0J6QixPQUFPQyxTQUFQLENBQWlCRyxHQUF2QyxFQUE0QyxVQUFVc0IsQ0FBVixFQUFhO0FBQ3JEWDtBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTVCxHQUFULEdBQWU7QUFDWFAsVUFBRTRCLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZOztBQUUxQmxCLGdDQUFvQlgsRUFBRUMsT0FBT0MsU0FBUCxDQUFpQkUsVUFBbkIsQ0FBcEI7O0FBRUEsZ0JBQUlVLFFBQVFmLFFBQVFPLGlCQUFSLENBQTBCYyxJQUExQixDQUErQixJQUEvQixFQUFxQ1UsTUFBakQ7O0FBRUFqQiwrQkFBbUJDLEtBQW5COztBQUVBTjtBQUNBaUI7QUFDSCxTQVZEO0FBV0g7O0FBRUQsV0FBTzFCLE9BQVA7QUFFSCxDQXhFYyxDQXdFYkMsQ0F4RWEsQ0FBZjs7QUEwRUEsSUFBSStCLFVBQVUsSUFBSWhDLE9BQUosRUFBZDtBQUNBZ0MsUUFBUXhCLEdBQVIsRyIsImZpbGUiOiJpbnZvaWNlLjMzN2ViNTU1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEludm9pY2UgPSAoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICAgIGhlYWRlcjogJy5pbnZvaWNlLWl0ZW1zIC5oZWFkZXInLFxyXG4gICAgICAgICAgY29sbGVjdGlvbjogJy50YWJsZS1pdGVtcycsXHJcbiAgICAgICAgICBidG46ICcuYWRkLWl0ZW0nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJ0bjogJzxidXR0b24gY2xhc3M9XCJhZGQtaXRlbVwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+QWRkIGl0ZW08L2J1dHRvbj4nXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIEludm9pY2UoKSB7XHJcbiAgICAgICAgdGhpcy4kY29sbGVjdGlvbkhvbGRlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBydW47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkSXRlbUJ1dHRvbigpIHtcclxuICAgICAgICB2YXIgJGJ0biA9ICQoY29uZmlnLmJ0bik7XHJcblxyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5oZWFkZXIpLmFwcGVuZCgkYnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDb2xsZWN0aW9uSG9sZGVyKGhvbGRlcikge1xyXG4gICAgICAgIEludm9pY2UuJGNvbGxlY3Rpb25Ib2xkZXIgPSBob2xkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29sbGVjdGlvbkluZGV4KGluZGV4KSB7XHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJdGVtRm9ybSgpIHtcclxuICAgICAgICB2YXIgcHJvdG90eXBlID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdwcm90b3R5cGUnKTtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcpO1xyXG5cclxuICAgICAgICB2YXIgbmV3Rm9ybSA9IHByb3RvdHlwZTtcclxuXHJcbiAgICAgICAgbmV3Rm9ybSA9IG5ld0Zvcm0ucmVwbGFjZSgvX19uYW1lX18vZywgaW5kZXgpO1xyXG4gICAgICAgIG5ld0Zvcm0gPSAkKG5ld0Zvcm0pLmZpbmQoJ2RpdicpLnVud3JhcCgpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdGb3JtKTtcclxuXHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5kYXRhKCdpbmRleCcsIGluZGV4ICsgMSk7XHJcblxyXG4gICAgICAgIHZhciAkbmV3Um93ID0gJCgnPHRyIGNsYXNzPVwiaXRlbS1yb3dcIj48L3RyPicpLmFwcGVuZChuZXdGb3JtKTtcclxuXHJcbiAgICAgICAgSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5hcHBlbmQoJG5ld1Jvdyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQWRkSXRlbUNsaWNrKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBjb25maWcuc2VsZWN0b3JzLmJ0biwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgYWRkSXRlbUZvcm0oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q29sbGVjdGlvbkhvbGRlcigkKGNvbmZpZy5zZWxlY3RvcnMuY29sbGVjdGlvbikpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gSW52b2ljZS4kY29sbGVjdGlvbkhvbGRlci5maW5kKCd0cicpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHNldENvbGxlY3Rpb25JbmRleChpbmRleCk7XHJcblxyXG4gICAgICAgICAgICBhZGRJdGVtQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIG9uQWRkSXRlbUNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIEludm9pY2U7XHJcblxyXG59KCQpKTtcclxuXHJcbnZhciBpbnZvaWNlID0gbmV3IEludm9pY2UoKTtcclxuaW52b2ljZS5ydW4oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvaW52b2ljZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=