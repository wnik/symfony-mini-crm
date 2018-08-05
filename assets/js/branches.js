var Branches = (function ($) {

    var config = {
        id: null,
        route: null,
        selectors: {
            btn: '.btn-branch-remove',
            branch: '.list-row',
            modal: '#deleteModal'
        }
    };

    function handleClickEvent(callback = null) {
        $(config.selectors.btn).click(function (e) {
            e.preventDefault();

            if (typeof callback === 'function')
                callback($(this));
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
            } else {

            }
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
}($));

Branches.run();