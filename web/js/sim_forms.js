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

function handle_new_message_form() {
    console.log('handle_new_message_form');
    var uuid = jQuery('#new_message_producer_id').val();
    var payload = jQuery('#new_message_producer_payload').val();
    var routing_key = jQuery('#new_message_producer_routing_key').val();
    var pjs = getProcessing();
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

function handle_advanced_mode_form() {
    jQuery('#advanced_mode').toggleClass('btn-inverse');
    var current = jQuery('#advanced_mode').text();
    var text = current  == 'Advanced Mode' ? 'Basic Mode' : 'Advanced Mode';
    jQuery('#advanced_mode').text(text);

    var pjs = getProcessing();
    pjs.toggleAdvancedMode(current  == 'Advanced Mode');

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

jQuery(document).ready(function() {
    init_form('#new_message_form', handle_new_message_form);
    init_form('#bindings_form', handle_binding_form);
    init_form('#queue_form', handle_queue_form);
    init_form('#exchange_form', handle_exchange_form);

    jQuery('#advanced_mode_form').submit(handle_advanced_mode_form);

    jQuery('#binding_delete').click(handle_queue_unbind);
});