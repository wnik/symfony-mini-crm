var Meeting = (function ($) {

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

}($));

var meeting = new Meeting;
meeting.onDelete();