var Table = (function ($) {

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
    }

}($));

Table.run();