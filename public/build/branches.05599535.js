webpackJsonp([5],{

/***/ "./assets/js/branches.js":
/*!*******************************!*\
  !*** ./assets/js/branches.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var Branches = function ($) {

    var config = {
        id: null,
        route: null,
        selectors: {
            btn: '.btn-branch-remove',
            branch: '.list-row',
            modal: '#deleteModal'
        }
    };

    function handleClickEvent() {
        var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        $(config.selectors.btn).click(function (e) {
            e.preventDefault();

            if (typeof callback === 'function') callback($(this));
        });
    }

    function removeBranch() {
        $(config.selectors.branch + '[data-id="' + config.id + '"]').remove();
    }

    function removeRequest() {
        $.ajax({
            url: config.route,
            method: 'DELETE'
        }).done(function (response) {

            if (response.success) {
                removeBranch();
                closeModal();
            } else {}
        });
    }

    function setId(id) {
        config['id'] = id;
    }

    function setRoute(route) {
        config['route'] = route;
    }

    function remove(btn) {
        setId(btn.attr('data-id'));
        setRoute(btn.attr('data-route'));

        openModal();
    }

    function openModal() {
        $(config.selectors.modal).modal('show');
    }

    function closeModal() {
        $(config.selectors.modal).modal('hide');
    }

    function handleModalDelete() {
        $(config.selectors.modal).find('.btn-delete').click(function () {
            removeRequest();
        });
    }

    function run() {
        $(document).ready(function () {
            handleClickEvent(remove);
            handleModalDelete();
        });
    }

    return {
        run: run
    };
}($);

Branches.run();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/branches.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYnJhbmNoZXMuanMiXSwibmFtZXMiOlsiQnJhbmNoZXMiLCIkIiwiY29uZmlnIiwiaWQiLCJyb3V0ZSIsInNlbGVjdG9ycyIsImJ0biIsImJyYW5jaCIsIm1vZGFsIiwiaGFuZGxlQ2xpY2tFdmVudCIsImNhbGxiYWNrIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVCcmFuY2giLCJyZW1vdmUiLCJyZW1vdmVSZXF1ZXN0IiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRvbmUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJjbG9zZU1vZGFsIiwic2V0SWQiLCJzZXRSb3V0ZSIsImF0dHIiLCJvcGVuTW9kYWwiLCJoYW5kbGVNb2RhbERlbGV0ZSIsImZpbmQiLCJydW4iLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQUlBLFdBQVksVUFBVUMsQ0FBVixFQUFhOztBQUV6QixRQUFJQyxTQUFTO0FBQ1RDLFlBQUksSUFESztBQUVUQyxlQUFPLElBRkU7QUFHVEMsbUJBQVc7QUFDUEMsaUJBQUssb0JBREU7QUFFUEMsb0JBQVEsV0FGRDtBQUdQQyxtQkFBTztBQUhBO0FBSEYsS0FBYjs7QUFVQSxhQUFTQyxnQkFBVCxHQUEyQztBQUFBLFlBQWpCQyxRQUFpQix1RUFBTixJQUFNOztBQUN2Q1QsVUFBRUMsT0FBT0csU0FBUCxDQUFpQkMsR0FBbkIsRUFBd0JLLEtBQXhCLENBQThCLFVBQVVDLENBQVYsRUFBYTtBQUN2Q0EsY0FBRUMsY0FBRjs7QUFFQSxnQkFBSSxPQUFPSCxRQUFQLEtBQW9CLFVBQXhCLEVBQ0lBLFNBQVNULEVBQUUsSUFBRixDQUFUO0FBQ1AsU0FMRDtBQU1IOztBQUVELGFBQVNhLFlBQVQsR0FBd0I7QUFDcEJiLFVBQUVDLE9BQU9HLFNBQVAsQ0FBaUJFLE1BQWpCLEdBQTBCLFlBQTFCLEdBQXlDTCxPQUFPQyxFQUFoRCxHQUFxRCxJQUF2RCxFQUE2RFksTUFBN0Q7QUFDSDs7QUFFRCxhQUFTQyxhQUFULEdBQXlCO0FBQ3JCZixVQUFFZ0IsSUFBRixDQUFPO0FBQ0hDLGlCQUFLaEIsT0FBT0UsS0FEVDtBQUVIZSxvQkFBUTtBQUZMLFNBQVAsRUFHR0MsSUFISCxDQUdRLFVBQVVDLFFBQVYsRUFBb0I7O0FBRXhCLGdCQUFJQSxTQUFTQyxPQUFiLEVBQXNCO0FBQ2xCUjtBQUNBUztBQUNILGFBSEQsTUFHTyxDQUVOO0FBQ0osU0FYRDtBQVlIOztBQUVELGFBQVNDLEtBQVQsQ0FBZXJCLEVBQWYsRUFBbUI7QUFDZkQsZUFBTyxJQUFQLElBQWVDLEVBQWY7QUFDSDs7QUFFRCxhQUFTc0IsUUFBVCxDQUFrQnJCLEtBQWxCLEVBQXlCO0FBQ3JCRixlQUFPLE9BQVAsSUFBa0JFLEtBQWxCO0FBQ0g7O0FBRUQsYUFBU1csTUFBVCxDQUFnQlQsR0FBaEIsRUFBcUI7QUFDakJrQixjQUFNbEIsSUFBSW9CLElBQUosQ0FBUyxTQUFULENBQU47QUFDQUQsaUJBQVNuQixJQUFJb0IsSUFBSixDQUFTLFlBQVQsQ0FBVDs7QUFFQUM7QUFDSDs7QUFFRCxhQUFTQSxTQUFULEdBQXFCO0FBQ2pCMUIsVUFBRUMsT0FBT0csU0FBUCxDQUFpQkcsS0FBbkIsRUFBMEJBLEtBQTFCLENBQWdDLE1BQWhDO0FBQ0g7O0FBRUQsYUFBU2UsVUFBVCxHQUFzQjtBQUNsQnRCLFVBQUVDLE9BQU9HLFNBQVAsQ0FBaUJHLEtBQW5CLEVBQTBCQSxLQUExQixDQUFnQyxNQUFoQztBQUNIOztBQUVELGFBQVNvQixpQkFBVCxHQUE2QjtBQUN6QjNCLFVBQUVDLE9BQU9HLFNBQVAsQ0FBaUJHLEtBQW5CLEVBQTBCcUIsSUFBMUIsQ0FBK0IsYUFBL0IsRUFBOENsQixLQUE5QyxDQUFvRCxZQUFZO0FBQzVESztBQUNILFNBRkQ7QUFHSDs7QUFFRCxhQUFTYyxHQUFULEdBQWU7QUFDWDdCLFVBQUU4QixRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQnZCLDZCQUFpQk0sTUFBakI7QUFDQWE7QUFDSCxTQUhEO0FBSUg7O0FBRUQsV0FBTztBQUNIRSxhQUFLQTtBQURGLEtBQVA7QUFHSCxDQS9FZSxDQStFZDdCLENBL0VjLENBQWhCOztBQWlGQUQsU0FBUzhCLEdBQVQsRyIsImZpbGUiOiJicmFuY2hlcy4wNTU5OTUzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBCcmFuY2hlcyA9IChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcbiAgICAgICAgaWQ6IG51bGwsXHJcbiAgICAgICAgcm91dGU6IG51bGwsXHJcbiAgICAgICAgc2VsZWN0b3JzOiB7XHJcbiAgICAgICAgICAgIGJ0bjogJy5idG4tYnJhbmNoLXJlbW92ZScsXHJcbiAgICAgICAgICAgIGJyYW5jaDogJy5saXN0LXJvdycsXHJcbiAgICAgICAgICAgIG1vZGFsOiAnI2RlbGV0ZU1vZGFsJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tFdmVudChjYWxsYmFjayA9IG51bGwpIHtcclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMuYnRuKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soJCh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQnJhbmNoKCkge1xyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5icmFuY2ggKyAnW2RhdGEtaWQ9XCInICsgY29uZmlnLmlkICsgJ1wiXScpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVJlcXVlc3QoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBjb25maWcucm91dGUsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUJyYW5jaCgpO1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldElkKGlkKSB7XHJcbiAgICAgICAgY29uZmlnWydpZCddID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Um91dGUocm91dGUpIHtcclxuICAgICAgICBjb25maWdbJ3JvdXRlJ10gPSByb3V0ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoYnRuKSB7XHJcbiAgICAgICAgc2V0SWQoYnRuLmF0dHIoJ2RhdGEtaWQnKSk7XHJcbiAgICAgICAgc2V0Um91dGUoYnRuLmF0dHIoJ2RhdGEtcm91dGUnKSk7XHJcblxyXG4gICAgICAgIG9wZW5Nb2RhbCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLm1vZGFsKS5tb2RhbCgnc2hvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLm1vZGFsKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vZGFsRGVsZXRlKCkge1xyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5tb2RhbCkuZmluZCgnLmJ0bi1kZWxldGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZVJlcXVlc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBoYW5kbGVDbGlja0V2ZW50KHJlbW92ZSk7XHJcbiAgICAgICAgICAgIGhhbmRsZU1vZGFsRGVsZXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBydW46IHJ1blxyXG4gICAgfTtcclxufSgkKSk7XHJcblxyXG5CcmFuY2hlcy5ydW4oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYnJhbmNoZXMuanMiXSwic291cmNlUm9vdCI6IiJ9