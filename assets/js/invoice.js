var Invoice = (function ($) {

    var config = {
      selectors: {
          header: '.invoice-items .header',
          collection: '.table-items',
          btn: '.add-item',
          btnRemove: '.btn-remove'
      },
      btn: '<button class="add-item" type="button"><i class="fa fa-plus"></i>Add item</button>',
      btnRemove: '<a class="btn btn-danger btn-remove" href="#" data-toggle="tooltip" data-placement="right" title="Delete">' +
          '<i class="fa fa-trash"></i>' +
          '</a>'
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
        newForm = $(newForm).html().replace(/<div>/g, '<td>').replace(/<\/div>/g, '</td>');

        Invoice.$collectionHolder.data('index', index + 1);

        var $newRow = $('<tr class="item-row"></tr>').append(newForm);

        $newRow.append('<td width="7%">' + config.btnRemove + '</td>');

        Invoice.$collectionHolder.append($newRow);

    }

    function onAddItemClick() {
        $('body').on('click', config.selectors.btn, function (e) {
            e.preventDefault();

            addItemForm();
        });
    }

    function onRemoveItemClick() {
        $('body').on('click', config.selectors.btnRemove, function (e) {
            e.preventDefault();

            $(this).parents('.item-row').remove();
        });
    }

    function run() {
        $(document).ready(function () {

            setCollectionHolder($(config.selectors.collection));

            var index = Invoice.$collectionHolder.find('tr').length;

            setCollectionIndex(index);

            addItemButton();
            onAddItemClick();
            onRemoveItemClick();
        });
    }

    return Invoice;

}($));

var invoice = new Invoice();
invoice.run();