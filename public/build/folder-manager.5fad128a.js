webpackJsonp([5],{

/***/ "./assets/js/folder-manager.js":
/*!*************************************!*\
  !*** ./assets/js/folder-manager.js ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var FolderManager = function ($) {

    function FolderManager() {
        this.run = run;
    }

    var config = {
        selectors: {
            addBtn: '.add-folder',
            tableBody: '.table-list tbody',
            newFolderRow: '.new-folder',
            newFolder: '.new-folder span',
            delete: '.delete-hidden',
            modalDelete: '.btn-delete',
            modal: '#deleteModal',
            routes: {
                add: '#route-add',
                delete: '#route-delete'
            }
        },
        icon: 'fa fa-folder'
    };

    var state = {
        isFolderAdded: false,
        routes: {
            add: '',
            delete: ''
        },
        path: false
    };

    function isFolderAdded() {
        return state.isFolderAdded === true;
    }

    function setState(data) {
        $.extend(state, data);
    }

    function handleAddEvent() {
        if (!$(config.selectors.addBtn).length) {
            return;
        }

        $(config.selectors.addBtn).click(function (e) {
            e.preventDefault();

            if (isFolderAdded()) {
                $(config.selectors.newFolder).focus();

                return;
            }

            var folder = create();

            append(folder);

            folder.find('span').focus();

            setState({
                isFolderAdded: true
            });
        });
    }

    function handleEnterKey() {
        $(document).on('keydown', config.selectors.newFolder, function (e) {
            if (e.which == 13) {
                $(this).blur();
            }
        });
    }

    function deleteFolder() {
        $(config.selectors.newFolderRow).remove();
    }

    function removeAttributes() {
        $(config.selectors.newFolder).removeAttr('contenteditable');
        $(config.selectors.newFolderRow).removeAttr('class');
    }

    function isFolderExists(name) {
        var isExists = false;

        $(config.selectors.tableBody + ' tr').not(config.selectors.newFolderRow).each(function (key, tr) {
            if ($(tr).find('span').text() === name) {
                isExists = true;
            }
        });

        return isExists;
    }

    function sendAddRequest(name) {
        $.ajax({
            url: state.routes.add + '/' + name,
            method: 'POST',
            data: {
                name: name
            }
        }).done(function (response) {
            console.log(response);
        });
    }

    function sendDeleteRequest() {

        var that = this;

        $.ajax({
            url: state.routes.delete,
            method: 'DELETE',
            data: {
                path: state.path
            }
        }).done(function (response) {

            if (response.success) {
                $(that).parents('tr').remove();
            }
        });
    }

    function handleModalDeleteEvent() {

        $(document).on('click', config.selectors.modalDelete, function (e) {
            e.preventDefault();

            $(config.selectors.modal).modal('hide');

            sendDeleteRequest();
        });
    }

    function handleDeleteEvent() {
        $(document).on('click', config.selectors.delete, function (e) {
            e.preventDefault();

            $(config.selectors.modal).modal('show');

            var path = $(this).attr('href');

            setState({
                path: path
            });

            sendDeleteRequest = sendDeleteRequest.bind(this);
        });
    }

    function handleChangeEvent() {
        $(document).on('focusout', config.selectors.newFolder, function () {
            var name = $(this).text().trim();

            if (!name) {
                deleteFolder();

                setState({
                    isFolderAdded: false
                });

                return;
            }

            if (isFolderExists(name)) {

                setTimeout(function () {
                    $(config.selectors.newFolderRow).find('span').focus();
                }, 10);

                return;
            }

            removeAttributes();

            sendAddRequest(name);

            setState({
                isFolderAdded: false
            });
        });
    }

    function append(elements) {
        $(config.selectors.tableBody).append(elements);
    }

    function createDateNow() {

        var date = new Date();

        var day = date.getDate();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        if (month < 10) {
            month = '0' + month;
        }

        return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes + ':' + seconds;
    }

    function create() {
        var date = createDateNow();

        return $('<tr class="new-folder">' + '<td><i class="' + config.icon + '"></i><span contenteditable="true">New folder</span></td>' + '<td>0</td>' + '<td>' + date + '</td>' + '<td></td>' + '</tr>');
    }

    function setupRoutes() {
        if ($(config.selectors.routes.add).length && $(config.selectors.routes.delete)) {
            setState({
                routes: {
                    add: $(config.selectors.routes.add).val(),
                    delete: $(config.selectors.routes.delete).val()
                }
            });

            return true;
        }

        return false;
    }

    function run() {
        $(document).ready(function () {
            if (setupRoutes()) {
                handleAddEvent();
                handleChangeEvent();
                handleEnterKey();
                handleDeleteEvent();
                handleModalDeleteEvent();
            }
        });
    }

    return FolderManager;
}($);

var folderManager = new FolderManager();
folderManager.run();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},["./assets/js/folder-manager.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9sZGVyLW1hbmFnZXIuanMiXSwibmFtZXMiOlsiRm9sZGVyTWFuYWdlciIsIiQiLCJydW4iLCJjb25maWciLCJzZWxlY3RvcnMiLCJhZGRCdG4iLCJ0YWJsZUJvZHkiLCJuZXdGb2xkZXJSb3ciLCJuZXdGb2xkZXIiLCJkZWxldGUiLCJtb2RhbERlbGV0ZSIsIm1vZGFsIiwicm91dGVzIiwiYWRkIiwiaWNvbiIsInN0YXRlIiwiaXNGb2xkZXJBZGRlZCIsInBhdGgiLCJzZXRTdGF0ZSIsImRhdGEiLCJleHRlbmQiLCJoYW5kbGVBZGRFdmVudCIsImxlbmd0aCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9jdXMiLCJmb2xkZXIiLCJjcmVhdGUiLCJhcHBlbmQiLCJmaW5kIiwiaGFuZGxlRW50ZXJLZXkiLCJkb2N1bWVudCIsIm9uIiwid2hpY2giLCJibHVyIiwiZGVsZXRlRm9sZGVyIiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlcyIsInJlbW92ZUF0dHIiLCJpc0ZvbGRlckV4aXN0cyIsIm5hbWUiLCJpc0V4aXN0cyIsIm5vdCIsImVhY2giLCJrZXkiLCJ0ciIsInRleHQiLCJzZW5kQWRkUmVxdWVzdCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkb25lIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwic2VuZERlbGV0ZVJlcXVlc3QiLCJ0aGF0Iiwic3VjY2VzcyIsInBhcmVudHMiLCJoYW5kbGVNb2RhbERlbGV0ZUV2ZW50IiwiaGFuZGxlRGVsZXRlRXZlbnQiLCJhdHRyIiwiYmluZCIsImhhbmRsZUNoYW5nZUV2ZW50IiwidHJpbSIsInNldFRpbWVvdXQiLCJlbGVtZW50cyIsImNyZWF0ZURhdGVOb3ciLCJkYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJzZXR1cFJvdXRlcyIsInZhbCIsInJlYWR5IiwiZm9sZGVyTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDZDQUFJQSxnQkFBaUIsVUFBVUMsQ0FBVixFQUFhOztBQUU5QixhQUFTRCxhQUFULEdBQXlCO0FBQ3JCLGFBQUtFLEdBQUwsR0FBV0EsR0FBWDtBQUNIOztBQUVELFFBQUlDLFNBQVM7QUFDVEMsbUJBQVc7QUFDUEMsb0JBQVEsYUFERDtBQUVQQyx1QkFBVyxtQkFGSjtBQUdQQywwQkFBYyxhQUhQO0FBSVBDLHVCQUFXLGtCQUpKO0FBS1BDLG9CQUFRLGdCQUxEO0FBTVBDLHlCQUFhLGFBTk47QUFPUEMsbUJBQU8sY0FQQTtBQVFQQyxvQkFBUTtBQUNKQyxxQkFBSyxZQUREO0FBRUpKLHdCQUFRO0FBRko7QUFSRCxTQURGO0FBY1RLLGNBQU07QUFkRyxLQUFiOztBQWlCQSxRQUFJQyxRQUFRO0FBQ1JDLHVCQUFlLEtBRFA7QUFFUkosZ0JBQVE7QUFDSkMsaUJBQUssRUFERDtBQUVKSixvQkFBUTtBQUZKLFNBRkE7QUFNUlEsY0FBTTtBQU5FLEtBQVo7O0FBU0EsYUFBU0QsYUFBVCxHQUF5QjtBQUNyQixlQUFPRCxNQUFNQyxhQUFOLEtBQXdCLElBQS9CO0FBQ0g7O0FBRUQsYUFBU0UsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDcEJsQixVQUFFbUIsTUFBRixDQUFTTCxLQUFULEVBQWdCSSxJQUFoQjtBQUNIOztBQUVELGFBQVNFLGNBQVQsR0FBMEI7QUFDdEIsWUFBSSxDQUFDcEIsRUFBRUUsT0FBT0MsU0FBUCxDQUFpQkMsTUFBbkIsRUFBMkJpQixNQUFoQyxFQUF3QztBQUNwQztBQUNIOztBQUVEckIsVUFBRUUsT0FBT0MsU0FBUCxDQUFpQkMsTUFBbkIsRUFBMkJrQixLQUEzQixDQUFpQyxVQUFVQyxDQUFWLEVBQWE7QUFDMUNBLGNBQUVDLGNBQUY7O0FBRUEsZ0JBQUlULGVBQUosRUFBcUI7QUFDakJmLGtC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d0JDLEdBQTFCLEVBQStCdUUsR0FBL0IsRUFERDtBQUVKM0UsNEJBQVFSLEVBQUVFLE9BQU9DLFNBQVAsQ0FBaUJRLE1BQWpCLENBQXdCSCxNQUExQixFQUFrQzJFLEdBQWxDO0FBRko7QUFERixhQUFUOztBQU9BLG1CQUFPLElBQVA7QUFDSDs7QUFFRCxlQUFPLEtBQVA7QUFDSDs7QUFFRCxhQUFTbEYsR0FBVCxHQUFlO0FBQ1hELFVBQUUrQixRQUFGLEVBQVlxRCxLQUFaLENBQWtCLFlBQVk7QUFDMUIsZ0JBQUlGLGFBQUosRUFBbUI7QUFDZjlEO0FBQ0EyQztBQUNBakM7QUFDQThCO0FBQ0FEO0FBQ0g7QUFDSixTQVJEO0FBU0g7O0FBRUQsV0FBTzVELGFBQVA7QUFFSCxDQTNQb0IsQ0EyUG5CQyxDQTNQbUIsQ0FBckI7O0FBNlBBLElBQUlxRixnQkFBZ0IsSUFBSXRGLGFBQUosRUFBcEI7QUFDQXNGLGNBQWNwRixHQUFkLEciLCJmaWxlIjoiZm9sZGVyLW1hbmFnZXIuNWZhZDEyOGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgRm9sZGVyTWFuYWdlciA9IChmdW5jdGlvbiAoJCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIEZvbGRlck1hbmFnZXIoKSB7XHJcbiAgICAgICAgdGhpcy5ydW4gPSBydW47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuICAgICAgICBzZWxlY3RvcnM6IHtcclxuICAgICAgICAgICAgYWRkQnRuOiAnLmFkZC1mb2xkZXInLFxyXG4gICAgICAgICAgICB0YWJsZUJvZHk6ICcudGFibGUtbGlzdCB0Ym9keScsXHJcbiAgICAgICAgICAgIG5ld0ZvbGRlclJvdzogJy5uZXctZm9sZGVyJyxcclxuICAgICAgICAgICAgbmV3Rm9sZGVyOiAnLm5ldy1mb2xkZXIgc3BhbicsXHJcbiAgICAgICAgICAgIGRlbGV0ZTogJy5kZWxldGUtaGlkZGVuJyxcclxuICAgICAgICAgICAgbW9kYWxEZWxldGU6ICcuYnRuLWRlbGV0ZScsXHJcbiAgICAgICAgICAgIG1vZGFsOiAnI2RlbGV0ZU1vZGFsJyxcclxuICAgICAgICAgICAgcm91dGVzOiB7XHJcbiAgICAgICAgICAgICAgICBhZGQ6ICcjcm91dGUtYWRkJyxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZTogJyNyb3V0ZS1kZWxldGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246ICdmYSBmYS1mb2xkZXInXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdGF0ZSA9IHtcclxuICAgICAgICBpc0ZvbGRlckFkZGVkOiBmYWxzZSxcclxuICAgICAgICByb3V0ZXM6IHtcclxuICAgICAgICAgICAgYWRkOiAnJyxcclxuICAgICAgICAgICAgZGVsZXRlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGF0aDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaXNGb2xkZXJBZGRlZCgpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGUuaXNGb2xkZXJBZGRlZCA9PT0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdGF0ZShkYXRhKSB7XHJcbiAgICAgICAgJC5leHRlbmQoc3RhdGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZEV2ZW50KCkge1xyXG4gICAgICAgIGlmICghJChjb25maWcuc2VsZWN0b3JzLmFkZEJ0bikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5hZGRCdG4pLmNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZvbGRlckFkZGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5uZXdGb2xkZXIpLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZm9sZGVyID0gY3JlYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBhcHBlbmQoZm9sZGVyKTtcclxuXHJcbiAgICAgICAgICAgIGZvbGRlci5maW5kKCdzcGFuJykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgaXNGb2xkZXJBZGRlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVFbnRlcktleSgpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIGNvbmZpZy5zZWxlY3RvcnMubmV3Rm9sZGVyLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAxMykge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5ibHVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVGb2xkZXIoKSB7XHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLm5ld0ZvbGRlclJvdykucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlcygpIHtcclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMubmV3Rm9sZGVyKS5yZW1vdmVBdHRyKCdjb250ZW50ZWRpdGFibGUnKTtcclxuICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMubmV3Rm9sZGVyUm93KS5yZW1vdmVBdHRyKCdjbGFzcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzRm9sZGVyRXhpc3RzKG5hbWUpIHtcclxuICAgICAgICB2YXIgaXNFeGlzdHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLnRhYmxlQm9keSArICcgdHInKS5ub3QoY29uZmlnLnNlbGVjdG9ycy5uZXdGb2xkZXJSb3cpLmVhY2goZnVuY3Rpb24gKGtleSwgdHIpIHtcclxuICAgICAgICAgICAgaWYgKCQodHIpLmZpbmQoJ3NwYW4nKS50ZXh0KCkgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlzRXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNFeGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZEFkZFJlcXVlc3QobmFtZSkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogc3RhdGUucm91dGVzLmFkZCArICcvJyArIG5hbWUsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2VuZERlbGV0ZVJlcXVlc3QoKSB7XHJcblxyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBzdGF0ZS5yb3V0ZXMuZGVsZXRlLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBwYXRoOiBzdGF0ZS5wYXRoXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICQodGhhdCkucGFyZW50cygndHInKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVNb2RhbERlbGV0ZUV2ZW50KCkge1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBjb25maWcuc2VsZWN0b3JzLm1vZGFsRGVsZXRlLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMubW9kYWwpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICBzZW5kRGVsZXRlUmVxdWVzdCgpO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEZWxldGVFdmVudCgpIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBjb25maWcuc2VsZWN0b3JzLmRlbGV0ZSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICQoY29uZmlnLnNlbGVjdG9ycy5tb2RhbCkubW9kYWwoJ3Nob3cnKTtcclxuXHJcbiAgICAgICAgICAgdmFyIHBhdGggPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgIHBhdGg6IHBhdGhcclxuICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNlbmREZWxldGVSZXF1ZXN0ID0gc2VuZERlbGV0ZVJlcXVlc3QuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlRXZlbnQoKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2ZvY3Vzb3V0JywgY29uZmlnLnNlbGVjdG9ycy5uZXdGb2xkZXIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSAkKHRoaXMpLnRleHQoKS50cmltKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZUZvbGRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZvbGRlckFkZGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGb2xkZXJFeGlzdHMobmFtZSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKGNvbmZpZy5zZWxlY3RvcnMubmV3Rm9sZGVyUm93KS5maW5kKCdzcGFuJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZXMoKTtcclxuXHJcbiAgICAgICAgICAgIHNlbmRBZGRSZXF1ZXN0KG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNGb2xkZXJBZGRlZDogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZW5kKGVsZW1lbnRzKSB7XHJcbiAgICAgICAgJChjb25maWcuc2VsZWN0b3JzLnRhYmxlQm9keSkuYXBwZW5kKGVsZW1lbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEYXRlTm93KCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgICB2YXIgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHZhciBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gICAgICAgIGlmIChtb250aCA8IDEwKSB7XHJcbiAgICAgICAgICAgIG1vbnRoID0gJzAnICsgbW9udGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF5ICsgJy4nICsgbW9udGggKyAnLicgKyB5ZWFyICsgJyAnICsgaG91cnMgKyAnOicgKyBtaW51dGVzICsgJzonICsgc2Vjb25kcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlKCkge1xyXG4gICAgICAgIHZhciBkYXRlID0gY3JlYXRlRGF0ZU5vdygpO1xyXG5cclxuICAgICAgICByZXR1cm4gJCgnPHRyIGNsYXNzPVwibmV3LWZvbGRlclwiPicgK1xyXG4gICAgICAgICAgICAnPHRkPjxpIGNsYXNzPVwiJyArIGNvbmZpZy5pY29uICsgJ1wiPjwvaT48c3BhbiBjb250ZW50ZWRpdGFibGU9XCJ0cnVlXCI+TmV3IGZvbGRlcjwvc3Bhbj48L3RkPicgK1xyXG4gICAgICAgICAgICAnPHRkPjA8L3RkPicgK1xyXG4gICAgICAgICAgICAnPHRkPicgKyBkYXRlICsgJzwvdGQ+JyArXHJcbiAgICAgICAgICAgICc8dGQ+PC90ZD4nICtcclxuICAgICAgICAgICAgJzwvdHI+Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXBSb3V0ZXMoKSB7XHJcbiAgICAgICAgaWYgKCQoY29uZmlnLnNlbGVjdG9ycy5yb3V0ZXMuYWRkKS5sZW5ndGggJiYgJChjb25maWcuc2VsZWN0b3JzLnJvdXRlcy5kZWxldGUpKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgcm91dGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBhZGQ6ICQoY29uZmlnLnNlbGVjdG9ycy5yb3V0ZXMuYWRkKS52YWwoKSxcclxuICAgICAgICAgICAgICAgICAgIGRlbGV0ZTogJChjb25maWcuc2VsZWN0b3JzLnJvdXRlcy5kZWxldGUpLnZhbCgpXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBydW4oKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoc2V0dXBSb3V0ZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlQWRkRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUV2ZW50KCk7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVFbnRlcktleSgpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZU1vZGFsRGVsZXRlRXZlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBGb2xkZXJNYW5hZ2VyO1xyXG5cclxufSgkKSk7XHJcblxyXG52YXIgZm9sZGVyTWFuYWdlciA9IG5ldyBGb2xkZXJNYW5hZ2VyKCk7XHJcbmZvbGRlck1hbmFnZXIucnVuKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9mb2xkZXItbWFuYWdlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=