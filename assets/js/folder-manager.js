var FolderManager = (function ($) {

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

        return $('<tr class="new-folder">' +
            '<td><i class="' + config.icon + '"></i><span contenteditable="true">New folder</span></td>' +
            '<td>0</td>' +
            '<td>' + date + '</td>' +
            '<td></td>' +
            '</tr>');
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

}($));

var folderManager = new FolderManager();
folderManager.run();
