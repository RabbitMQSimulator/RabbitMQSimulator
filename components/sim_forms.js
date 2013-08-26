function reset_form(id) {
    jQuery(id).each(function () {
        this.reset();
    });
}

function disable_form(id) {
    jQuery(id).find(':input:not(:disabled)').prop('disabled', true);
}

function enable_form(id){
    jQuery(id).find(':input:disabled').prop('disabled', false);
}

function init_form(id, submit_callback) {
    disable_form(id);
    jQuery(id).submit(submit_callback);
}

function show_form() {
    if (arguments.length == 0) return;

    ids = Array.prototype.slice.call(arguments);

    jQuery("#inspector-msg").addClass("hidden");
    jQuery('form').each(function (i, el) {
        var el =  jQuery(el);
        if (ids.indexOf('#' + el.attr('id')) != -1) {
            el.removeClass('hidden');
        } else {
            if (!el.hasClass('hidden')) {
                el.addClass('hidden');
            }
        }
    });
}

function disable_button(selector) {
    jQuery(selector).attr('disabled', 'disabled');
    jQuery(selector).addClass('disabled');
}

function enable_button(selector) {
    jQuery(selector).removeAttr('disabled');
    jQuery(selector).removeClass('disabled');
}

function handle_edit_producer_form() {
    console.log('handle_edit_producer_form');
    var uuid = jQuery('#edit_producer_id').val();
    var name = jQuery('#edit_producer_name').val();    
    var pjs = getProcessing();
    pjs.editProducer(uuid, name);
    return false;
}

function handle_edit_consumer_form() {
    console.log('handle_edit_consumer_form');
    var uuid = jQuery('#edit_consumer_id').val();
    var name = jQuery('#edit_consumer_name').val();
    var pjs = getProcessing();
    pjs.editConsumer(uuid, name);
    return false;
}

function handle_new_message_form() {
    console.log('handle_new_message_form');
    var uuid = jQuery('#new_message_producer_id').val();
    var payload = jQuery('#new_message_producer_payload').val();
    var routing_key = jQuery('#new_message_producer_routing_key').val();
    var seconds = parseInt(jQuery('#new_message_producer_seconds').val(), 10);
    var pjs = getProcessing();

    var interval = null;
        
    if (seconds > 0) {
        pjs.stopPublisher(uuid);
        publishMsgWithInterval(pjs, seconds, uuid, payload, routing_key, !PLAYER);
        enable_button('#new_message_stop');
    } else {
        disable_button('#new_message_stop');
    }
        
    pjs.publishMessage(uuid, payload, routing_key);

    return false;
}

function handle_binding_form() {
    console.log('handle_binding_form');
    var binding_id = jQuery('#binding_id').val();
    var bk = jQuery.trim(jQuery('#binding_key').val());
    var pjs = getProcessing();
    pjs.updateBindingKey(binding_id, bk);
    return false;
}

function handle_queue_form() {
    console.log('handle_queue_form');
    var uuid = jQuery('#queue_id').val();
    var name = jQuery.trim(jQuery('#queue_name').val());
    var pjs = getProcessing();
    pjs.editQueue(uuid, name);
    jQuery('#queue_id').val(name);
    return false;
}

function handle_queue_unbind() {
    console.log('handle_queue_unbind');
    var binding_id = jQuery('#binding_id').val();
    var pjs = getProcessing();
    pjs.removeBinding(binding_id);
    reset_form("#bindings_form");
    disable_form("#bindings_form");
    return false;
}

function handle_exchange_form() {
    console.log('handle_exchange_form');
    var uuid = jQuery('#exchange_id').val();
    var name = jQuery.trim(jQuery('#exchange_name').val());
    var type = jQuery('#exchange_type').val();
    var pjs = getProcessing();
    pjs.editExchange(uuid, name, type);
    jQuery('#exchange_id').val(name);
    return false; 
}

function handle_stop_publisher_btn() {
    var uuid = jQuery('#new_message_producer_id').val();
    var pjs = getProcessing();
    pjs.stopPublisher(uuid);
    disable_button('#new_message_stop');
    jQuery('#new_message_producer_seconds').val(null);
}

function handle_advanced_mode_btn() {
    jQuery('#advanced_mode').toggleClass('btn-inverse');
    var current = jQuery('#advanced_mode').text();
    var text = current  == 'Advanced Mode' ? 'Basic Mode' : 'Advanced Mode';
    jQuery('#advanced_mode').text(text);

    var pjs = getProcessing();
    pjs.toggleAdvancedMode(current == 'Advanced Mode');

    return false;
}

function handle_import_btn() {
    getDefinitions();
    return false;
}

function handle_export_btn() {
    postDefinitions();
    return false;
}

function display_export_json() {
    var exp = exportToPlayer(),
        json_string; 

    if (jQuery('#pretty-print').is(':checked')) {
        json_string = JSON.stringify(exp, null, 2);
    } else {
        json_string = JSON.stringify(exp);
    }

    jQuery('#player-modal-code').html('<pre>' + json_string + '</pre>');
}

function handle_pretty_print_checkbox() {
    display_export_json();
}

function handle_export_player_btn() {
    display_export_json();
    jQuery('#player-modal').modal('show');
    return false;
}

jQuery(document).ready(function() {
    init_form('#edit_producer_form', handle_edit_producer_form);
    init_form('#edit_consumer_form', handle_edit_consumer_form);
    init_form('#new_message_form', handle_new_message_form);
    init_form('#bindings_form', handle_binding_form);
    init_form('#queue_form', handle_queue_form);
    init_form('#exchange_form', handle_exchange_form);

    jQuery("#new_message_stop").click(handle_stop_publisher_btn);

    jQuery("#advanced_mode").click(handle_advanced_mode_btn);
    jQuery('#import').click(handle_import_btn);
    jQuery('#export').click(handle_export_btn);
    jQuery('#export-player').click(handle_export_player_btn);
    jQuery('#pretty-print').change(handle_pretty_print_checkbox);

    jQuery('#binding_delete').click(handle_queue_unbind);
});