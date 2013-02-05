function getExchangeView(exchange) {

  var formatBindings = function(bindings){
      var result = [];
      $.each(bindings, function(key, val) {
          var queues = [];
          $.each(val, function(i, val) {
              queues.push(val.getName().substring(2));
          });
          result.push({rkey: key.substring(2) || "empty", queues: queues});
      });
      return result;
  };

  var detail = $("#exchange-details").mustache({
      Name: exchange.getName().substring(2),
      Bindings: formatBindings(exchange.getBindings()),
      showBindings: function() {
          return this.Bindings.length > 0;
      }
  });

  return detail;
}

function getQueueView(queue) {
  var tmpBindings = [];

  $.each(queue.getBindings(), function(key, val) {
    tmpBindings.push({
      exchange: val.exchange.substring(2) || "anon",
      rkey: val.rkey || "empty",
      bindingsAsLink: function() {
        return this.exchange != "anon";
      },

      bindingsAsText: function() {
        return !this.bindingsAsLink();
      }
    });
  });

  var detail = $('#queue-details').mustache({
    Name: queue.getName().substring(2),
    Messages: queue.getLength(),
    Consumers: queue.getConsumerNum(),
    Bindings: tmpBindings
  });

  return detail;
}

function addQueueBindingButtons() {
  $("a.queue-binding").click(function(event){
    $(this).next("span.option-buttons").show();
    event.preventDefault();
  });

  $("div#inspected-queue a.delete-button").click(function(event){
    var parts = this.href.split('#')[1].split(':');
    try{
      var rkey = parts[2] == 'empty' ? "" : parts[2];
      unbindQueue(parts[1], parts[0], rkey);
    } catch(err){
      console.log(err);
    }
    event.preventDefault();
  });

  $("div#inspected-queue a.cancel-button").click(function(event){
    $(this).parent().hide();
    event.preventDefault();
  });
}

function addExchangeBindingButtons() {
  $("a.exchange-binding").click(function(event){
    $(this).next("span.option-buttons").show();
    event.preventDefault();
  });

  $("div#inspected-exchange a.delete-button").click(function(event){
    var parts = this.href.split('#')[1].split(':');
    try{
        var rkey = parts[2] == 'empty' ? "" : parts[2];
      unbindQueue(parts[1], parts[0], rkey);
    } catch(err){
      console.log(err);
    }
    event.preventDefault();
  });

  $("div#inspected-exchange a.cancel-button").click(function(event){
    $(this).parent().hide();
    event.preventDefault();
  });
}

function getConsumerView(consumer) {
  var detail = $('#consumer-details').mustache({
      Queue: consumer.getQueueName(),
      CTag: consumer.getConsumerTag()
  });
  $("#inspected-item").html(detail);
}

function addStopConsumerButtons() {
  $("a.queue-link").click(function(event){
      $(this).next("span.option-buttons").show();
      event.preventDefault();
  });

  $("div#inspected-consumer a.delete-button").click(function(event){
      console.log('stopConsumer', this.href);
      var parts = this.href.split('#')[1].split('|');
      try{
          stopConsumer(parts[0], parts[1]);
      } catch(err){
          console.log(err);
      }
      event.preventDefault();
  });

  $("div#inspected-consumer a.cancel-button").click(function(event){
      $(this).parent().hide();
      event.preventDefault();
  });
}

function updateInspector(inspector, data) {
    switch(data.type) {
        case 'queue':
            inspector.ui.html(getQueueView(data.item));
            addQueueBindingButtons();
            break;
        case 'exchange':
            inspector.ui.html(getExchangeView(data.item));
            addExchangeBindingButtons();
            break;
        case 'consumer':
            inspector.ui.html(getConsumerView(data.item));
            addStopConsumerButtons();
            break;
        default:
          console.log("Unknown type: ", data.type);
    }
    inspector.currentItem = data.item.getName();
}