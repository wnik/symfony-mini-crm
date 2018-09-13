webpackJsonp([3],{

/***/ "./assets/js/meeting.js":
/*!******************************!*\
  !*** ./assets/js/meeting.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var Meeting = function ($) {

    var config = {
        deleteBtn: '.btn-delete',
        deleteId: '#delete-id',
        deleteRoute: '#delete-route'
    };

    function Meeting() {
        this.onDelete = onDeleteHandler;
    }

    function onDeleteHandler() {
        $(document).ready(function () {
            var id = $(config.deleteId).val();

            $(config.deleteBtn).click(function (e) {
                e.preventDefault();

                $.ajax({
                    url: $(config.deleteRoute).val(),
                    method: 'DELETE',
                    data: {
                        id: id
                    }
                }).done(function (response) {
                    if (response.success) {
                        window.location.href = response.payload['redirect-url'];
                    }
                });
            });
        });
    }

    return Meeting;
}($);

var meeting = new Meeting();
meeting.onDelete();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/meeting.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVldGluZy5qcyJdLCJuYW1lcyI6WyJNZWV0aW5nIiwiJCIsImNvbmZpZyIsImRlbGV0ZUJ0biIsImRlbGV0ZUlkIiwiZGVsZXRlUm91dGUiLCJvbkRlbGV0ZSIsIm9uRGVsZXRlSGFuZGxlciIsImRvY3VtZW50IiwicmVhZHkiLCJpZCIsInZhbCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJkb25lIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicGF5bG9hZCIsIm1lZXRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2Q0FBSUEsVUFBVyxVQUFVQyxDQUFWLEVBQWE7O0FBRXhCLFFBQUlDLFNBQVM7QUFDVEMsbUJBQVcsYUFERjtBQUVUQyxrQkFBVSxZQUZEO0FBR1RDLHFCQUFhO0FBSEosS0FBYjs7QUFNQSxhQUFTTCxPQUFULEdBQW1CO0FBQ2YsYUFBS00sUUFBTCxHQUFnQkMsZUFBaEI7QUFDSDs7QUFFRCxhQUFTQSxlQUFULEdBQTJCO0FBQ3ZCTixVQUFFTyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBWTtBQUMxQixnQkFBSUMsS0FBS1QsRUFBRUMsT0FBT0UsUUFBVCxFQUFtQk8sR0FBbkIsRUFBVDs7QUFFQVYsY0FBRUMsT0FBT0MsU0FBVCxFQUFvQlMsS0FBcEIsQ0FBMEIsVUFBVUMsQ0FBVixFQUFhO0FBQ25DQSxrQkFBRUMsY0FBRjs7QUFFQWIsa0JBQUVjLElBQUYsQ0FBTztBQUNKQyx5QkFBS2YsRUFBRUMsT0FBT0csV0FBVCxFQUFzQk0sR0FBdEIsRUFERDtBQUVKTSw0QkFBUSxRQUZKO0FBR0pDLDBCQUFNO0FBQ0ZSLDRCQUFJQTtBQURGO0FBSEYsaUJBQVAsRUFNR1MsSUFOSCxDQU1RLFVBQVVDLFFBQVYsRUFBb0I7QUFDekIsd0JBQUlBLFNBQVNDLE9BQWIsRUFBc0I7QUFDbEJDLCtCQUFPQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QkosU0FBU0ssT0FBVCxDQUFpQixjQUFqQixDQUF2QjtBQUNIO0FBQ0gsaUJBVkQ7QUFXSCxhQWREO0FBZUgsU0FsQkQ7QUFtQkg7O0FBRUQsV0FBT3pCLE9BQVA7QUFFSCxDQXBDYyxDQW9DYkMsQ0FwQ2EsQ0FBZjs7QUFzQ0EsSUFBSXlCLFVBQVUsSUFBSTFCLE9BQUosRUFBZDtBQUNBMEIsUUFBUXBCLFFBQVIsRyIsImZpbGUiOiJtZWV0aW5nLjQ0YjM0ZTBhLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1lZXRpbmcgPSAoZnVuY3Rpb24gKCQpIHtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgIGRlbGV0ZUJ0bjogJy5idG4tZGVsZXRlJyxcclxuICAgICAgICBkZWxldGVJZDogJyNkZWxldGUtaWQnLFxyXG4gICAgICAgIGRlbGV0ZVJvdXRlOiAnI2RlbGV0ZS1yb3V0ZSdcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gTWVldGluZygpIHtcclxuICAgICAgICB0aGlzLm9uRGVsZXRlID0gb25EZWxldGVIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uRGVsZXRlSGFuZGxlcigpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBpZCA9ICQoY29uZmlnLmRlbGV0ZUlkKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICQoY29uZmlnLmRlbGV0ZUJ0bikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgdXJsOiAkKGNvbmZpZy5kZWxldGVSb3V0ZSkudmFsKCksXHJcbiAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5wYXlsb2FkWydyZWRpcmVjdC11cmwnXTtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTWVldGluZztcclxuXHJcbn0oJCkpO1xyXG5cclxudmFyIG1lZXRpbmcgPSBuZXcgTWVldGluZztcclxubWVldGluZy5vbkRlbGV0ZSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9tZWV0aW5nLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==