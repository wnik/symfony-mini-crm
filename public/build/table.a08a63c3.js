webpackJsonp([2],{

/***/ "./assets/js/table.js":
/*!****************************!*\
  !*** ./assets/js/table.js ***!
  \****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var Table = function ($) {

    var config = {
        route: null,
        selectors: {
            token: '#token',
            deleteRoute: '#delete-route',
            modal: '#deleteModal',
            deleteBtn: '.btn-delete',
            bulkActions: '#bulk-actions',
            headerCheckbox: '#checkbox-all',
            checkbox: '.checkbox-row'
        }
    };

    function handleHeaderCheckbox() {
        $(config.selectors.headerCheckbox).change(function () {
            $(config.selectors.checkbox).attr('checked', $(this).is(':checked'));
        });
    }

    function toggleModal() {
        $(config.selectors.modal).modal('toggle');
    }

    function isCheckboxesChecked() {
        return $(config.selectors.checkbox).is(':checked');
    }

    function getRoute() {
        var element = $(config.selectors.deleteRoute);

        return element.length ? element.val() : false;
    }

    function getIds() {
        var ids = $(config.selectors.checkbox + ':checked').map(function () {
            return this.value;
        }).get();

        return ids;
    }

    function getToken() {
        return $(config.selectors.token).length ? $(config.selectors.token).val() : false;
    }

    function isSetRoute() {
        return config.route !== null;
    }

    function setRoute(route) {
        config['route'] = route;
    }

    function getConfigRoute() {
        return config.route;
    }

    function deleteRows(ids) {
        for (id in ids) {
            var row = $('tr[data-id="' + ids[id] + '"]');

            if (row.length) {
                $(row).remove();
            }
        }
    }

    function handleDelete() {
        var btn = $(config.selectors.modal).find(config.selectors.deleteBtn);

        btn.click(function (e) {
            e.preventDefault();

            if (!isSetRoute()) {
                setRoute(getRoute());
            }

            var ids = getIds();
            var token = getToken();

            if (!isSetRoute() || !ids.length || !token) {
                return false;
            }

            $.ajax({
                url: getConfigRoute(),
                method: 'DELETE',
                data: {
                    token: token,
                    ids: ids
                }
            }).done(function (response) {
                if (response.success) {
                    deleteRows(ids);
                    toggleModal();
                }
            });
        });
    }

    function handleBulkAction() {
        $(config.selectors.bulkActions).change(function () {

            if (!isCheckboxesChecked()) {
                return true;
            }

            var value = $(this).val();

            if (value === 'delete') {
                toggleModal();
            }
        });
    }

    function run() {
        $(document).ready(function () {
            handleHeaderCheckbox();
            handleBulkAction();
            handleDelete();
        });
    }

    return {
        run: run
    };
}($);

Table.run();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/table.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGFibGUuanMiXSwibmFtZXMiOlsiVGFibGUiLCIkIiwiY29uZmlnIiwicm91dGUiLCJzZWxlY3RvcnMiLCJ0b2tlbiIsImRlbGV0ZVJvdXRlIiwibW9kYWwiLCJkZWxldGVCdG4iLCJidWxrQWN0aW9ucyIsImhlYWRlckNoZWNrYm94IiwiY2hlY2tib3giLCJoYW5kbGVIZWFkZXJDaGVja2JveCIsImNoYW5nZSIsImF0dHIiLCJpcyIsInRvZ2dsZU1vZGFsIiwiaXNDaGVja2JveGVzQ2hlY2tlZCIsImdldFJvdXRlIiwiZWxlbWVudCIsImxlbmd0aCIsInZhbCIsImdldElkcyIsImlkcyIsIm1hcCIsInZhbHVlIiwiZ2V0IiwiZ2V0VG9rZW4iLCJpc1NldFJvdXRlIiwic2V0Um91dGUiLCJnZXRDb25maWdSb3V0ZSIsImRlbGV0ZVJvd3MiLCJpZCIsInJvdyIsInJlbW92ZSIsImhhbmRsZURlbGV0ZSIsImJ0biIsImZpbmQiLCJjbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiZG9uZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsImhhbmRsZUJ1bGtBY3Rpb24iLCJydW4iLCJkb2N1bWVudCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkNBQUlBLFFBQVMsVUFBVUMsQ0FBVixFQUFhOztBQUV0QixRQUFJQyxTQUFTO0FBQ1RDLGVBQU8sSUFERTtBQUVUQyxtQkFBVztBQUNQQyxtQkFBTyxRQURBO0FBRVBDLHlCQUFhLGVBRk47QUFHUEMsbUJBQU8sY0FIQTtBQUlQQyx1QkFBVyxhQUpKO0FBS1BDLHlCQUFhLGVBTE47QUFNUEMsNEJBQWdCLGVBTlQ7QUFPUEMsc0JBQVU7QUFQSDtBQUZGLEtBQWI7O0FBYUEsYUFBU0Msb0JBQVQsR0FBZ0M7QUFDNUJYLFVBQUVDLE9BQU9FLFNBQVAsQ0FBaUJNLGNBQW5CLEVBQW1DRyxNQUFuQyxDQUEwQyxZ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QTVCRDtBQTZCSDs7QUFFRCxhQUFTZ0MsZ0JBQVQsR0FBNEI7QUFDeEIvQyxVQUFFQyxPQUFPRSxTQUFQLENBQWlCSyxXQUFuQixFQUFnQ0ksTUFBaEMsQ0FBdUMsWUFBWTs7QUFFL0MsZ0JBQUksQ0FBQ0kscUJBQUwsRUFBNEI7QUFDeEIsdUJBQU8sSUFBUDtBQUNIOztBQUVELGdCQUFJUSxRQUFReEIsRUFBRSxJQUFGLEVBQVFvQixHQUFSLEVBQVo7O0FBRUEsZ0JBQUlJLFVBQVUsUUFBZCxFQUF3QjtBQUNwQlQ7QUFDSDtBQUNKLFNBWEQ7QUFZSDs7QUFFRCxhQUFTaUMsR0FBVCxHQUFlO0FBQ1hoRCxVQUFFaUQsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVk7QUFDMUJ2QztBQUNBb0M7QUFDQWI7QUFDSCxTQUpEO0FBS0g7O0FBRUQsV0FBTztBQUNIYyxhQUFLQTtBQURGLEtBQVA7QUFJSCxDQWxJWSxDQWtJWGhELENBbElXLENBQWI7O0FBb0lBRCxNQUFNaUQsR0FBTixHIiwiZmlsZSI6InRhYmxlLmEwOGE2M2MzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRhYmxlID0gKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICByb3V0ZTogbnVsbCxcclxuICAgICAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICAgICAgdG9rZW46ICcjdG9rZW4nLFxyXG4gICAgICAgICAgICBkZWxldGVSb3V0ZTogJyNkZWxldGUtcm91dGUnLFxyXG4gICAgICAgICAgICBtb2RhbDogJyNkZWxldGVNb2RhbCcsXHJcbiAgICAgICAgICAgIGRlbGV0ZUJ0bjogJy5idG4tZGVsZXRlJyxcclxuICAgICAgICAgICAgYnVsa0FjdGlvbnM6ICcjYnVsay1hY3Rpb25zJyxcclxuICAgICAgICAgICAgaGVhZGVyQ2hlY2tib3g6ICcjY2hlY2tib3gtYWxsJyxcclxuICAgICAgICAgICAgY2hlY2tib3g6ICcuY2hlY2tib3gtcm93J1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSGVhZGVyQ2hlY2tib3goKSB7XHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLmhlYWRlckNoZWNrYm94KS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMuY2hlY2tib3gpLmF0dHIoJ2NoZWNrZWQnLCAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMubW9kYWwpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0NoZWNrYm94ZXNDaGVja2VkKCkge1xyXG4gICAgICAgIHJldHVybiAkKGNvbmZpZy5zZWxlY3RvcnMuY2hlY2tib3gpLmlzKCc6Y2hlY2tlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJvdXRlKCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gJChjb25maWcuc2VsZWN0b3JzLmRlbGV0ZVJvdXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQubGVuZ3RoID8gZWxlbWVudC52YWwoKSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldElkcygpIHtcclxuICAgICAgICB2YXIgaWRzID0gJChjb25maWcuc2VsZWN0b3JzLmNoZWNrYm94ICsgJzpjaGVja2VkJykubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAgICAgfSkuZ2V0KCk7XHJcblxyXG4gICAgICAgIHJldHVybiBpZHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VG9rZW4oKSB7XHJcbiAgICAgICAgcmV0dXJuICQoY29uZmlnLnNlbGVjdG9ycy50b2tlbikubGVuZ3RoID8gJChjb25maWcuc2VsZWN0b3JzLnRva2VuKS52YWwoKSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBpc1NldFJvdXRlKCkge1xyXG4gICAgICAgIHJldHVybiBjb25maWcucm91dGUgIT09IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Um91dGUocm91dGUpIHtcclxuICAgICAgICBjb25maWdbJ3JvdXRlJ10gPSByb3V0ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb25maWdSb3V0ZSgpIHtcclxuICAgICAgICByZXR1cm4gY29uZmlnLnJvdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVJvd3MoaWRzKSB7XHJcbiAgICAgICAgZm9yIChpZCBpbiBpZHMpIHtcclxuICAgICAgICAgICAgdmFyIHJvdyA9ICQoJ3RyW2RhdGEtaWQ9XCInICsgaWRzW2lkXSArICdcIl0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3cubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAkKHJvdykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlKCkge1xyXG4gICAgICAgIHZhciBidG4gPSAkKGNvbmZpZy5zZWxlY3RvcnMubW9kYWwpLmZpbmQoY29uZmlnLnNlbGVjdG9ycy5kZWxldGVCdG4pO1xyXG5cclxuICAgICAgICBidG4uY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFpc1NldFJvdXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHNldFJvdXRlKGdldFJvdXRlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaWRzID0gZ2V0SWRzKCk7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IGdldFRva2VuKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzU2V0Um91dGUoKSB8fCAhaWRzLmxlbmd0aCB8fCAhdG9rZW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogZ2V0Q29uZmlnUm91dGUoKSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IHRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkczogaWRzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZVJvd3MoaWRzKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQnVsa0FjdGlvbigpIHtcclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMuYnVsa0FjdGlvbnMpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzQ2hlY2tib3hlc0NoZWNrZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdkZWxldGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVNb2RhbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcnVuKCkge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaGFuZGxlSGVhZGVyQ2hlY2tib3goKTtcclxuICAgICAgICAgICAgaGFuZGxlQnVsa0FjdGlvbigpO1xyXG4gICAgICAgICAgICBoYW5kbGVEZWxldGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJ1bjogcnVuXHJcbiAgICB9XHJcblxyXG59KCQpKTtcclxuXHJcblRhYmxlLnJ1bigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy90YWJsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=