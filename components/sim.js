var PLAYER = true;

// from http://stackoverflow.com/a/105074/342013
function GUID () {
    var S4 = function () {        
        return Math.floor(
                Math.random() * 0x10000 /* 65536 */
            ).toString(16);
    };

    return (
            S4() + S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + "-" +
            S4() + S4() + S4()
        );
}

function randomQueueName() {
    return "sim.gen-" + jQuery.base64.encode(CryptoJS.MD5(GUID()).words.join()).substr(0, 12);
}

function getProcessing() {
    return Processing.getInstanceById("Simulator");
}

function bindJavascript(pjs) {
    pjs.bindJavascript(this);
}

function newExchange(name, type) {
    return {
        name: name,
        vhost: "/",
        type: type,
        durable: true,
        auto_delete: false,
        internal: false,
        arguments: []
    };
}

function newQueue(name) {
    return {
        name: name,
        vhost: "/",
        durable: true,
        auto_delete: false,
        arguments: []
    };
}

function newBinding(source, destination, destination_type, routing_key) {
    return {
        source: source,
        vhost: "/",
        destination: destination,
        destination_type: destination_type,
        routing_key: routing_key,
        arguments: []
    };
}


function processBindings(pjs, source, bindings) {
    var ret = [];
    var es = bindings.entrySet().iterator();
    while (es.hasNext()) {
        var me = es.next();
        var destinations = me.getValue();
        for (var i = 0; i < destinations.size(); i++) {
            var dest = destinations.get(i);
            ret.push(newBinding(
                source, 
                dest.getLabel(), 
                pjs.nodeTypeToString(dest.getType()),
                me.getKey()
            ));
        }
    }
    return ret;
}

function buildExport() {
    var pjs = getProcessing();
    var nodes = pjs.getNodes();
    var toExport = {
        exchanges: [],
        queues: [],
        bindings: []
    };

    for (var i = 0; i < nodes.length; i++) {        
        if (nodes[i] != null && (nodes[i].getType() == EXCHANGE || nodes[i].getType() == QUEUE)) {
            var nodeName = nodes[i].getLabel();
            var nodeType = pjs.nodeTypeToString(nodes[i].getType());
            switch(nodes[i].getType()) {
                case EXCHANGE:
                toExport["exchanges"].push(newExchange(nodeName, nodes[i].getExchangeTypeString()));
                toExport["bindings"] = toExport["bindings"].concat(processBindings(pjs, nodeName, nodes[i].getAllBindings()));
                break;
                case QUEUE:
                toExport["queues"].push(newQueue(nodeName));
                break;
                default:
                console.log("ignoring: ", pjs.nodeTypeToString(nodes[i].getType()));
            }
        }
    }

    return toExport;
}

function importNodes(nodes) {
    var sections = 5;
    var pjs = getProcessing();
    var imp_exchanges = {};
    var imp_queues = {};

    jQuery.each(nodes["exchanges"], function(k, v) {
        var x = (pjs.width/sections) * 2; // 2 is the exchange section;
        var y = ((pjs.height-50)/nodes["exchanges"].length+1) * (k+1);
        imp_exchanges[v["name"]] = pjs.addNodeByType(EXCHANGE, v["name"], x, y);
        imp_exchanges[v["name"]].setExchangeType(exchange_types[v["type"]]);
    });

    jQuery.each(nodes["queues"], function(k, v) {
        var x = (pjs.width/sections) * 3; // 3 is the queue section;
        var y = ((pjs.height-50)/nodes["queues"].length+1) * (k+1);
        imp_queues[v["name"]] = pjs.addNodeByType(QUEUE, v["name"], x, y);
        pjs.bindToAnonExchange(imp_queues[v["name"]]);
    });

    jQuery.each(nodes["bindings"], function(k, v) {        
        var destination = v.destination_type == "queue" ? imp_queues[v.destination] : imp_exchanges[v.destination];
        var source = imp_exchanges[v.source];
        var routing_key = v.routing_key;
        var binding = pjs.addConnection(destination, source);
        binding.updateBindingKey(routing_key);
    });

    return nodes["exchanges"].length + nodes["queues"].length + nodes["bindings"].length;
}

function getResultMessage(msg) {
    return '<span id="result-msg" class="label label-success" style="float: right;">' + msg +'</span>';
}

function displayResultMessage(msg) {
    jQuery("#btn-toolbar").append(getResultMessage(msg));
    setTimeout(function () {
        jQuery("#result-msg").remove();
    }, 5000);
}

function getDefinitions() {
    jQuery.getJSON('/definitions', function (data) {
        var nb = importNodes(data);

        if (nb > 0) {
            displayResultMessage("Success");
        } else {
            displayResultMessage("Nothing to import");
        }
    });
}

function postDefinitions() {
    var definitions = buildExport();
    jQuery.ajax('/definitions', {
        data: JSON.stringify(definitions),
        contentType: 'application/json',
        type: 'POST',
        success: function (data) {
            displayResultMessage("Success");
        }
    });
}

function processPublish(node) {
    if (node.outgoing.size() > 0) {
        var payload = node.msg ? node.msg.payload : null;
        var routingKey = node.msg ? node.msg.routingKey : null;
        return {
            to: node.outgoing.get(0).getLabel(), 
            payload: payload,
            routing_key: routingKey
        };
    } else {
        return null;
    }    
}

function processConsume(node) {
    if (node.outgoing.size() > 0) {
        return node.outgoing.get(0).getLabel();   
    } else {
        return null;
    }
}

function exportToPlayer() {
    var pjs = getProcessing();
    var nodes = pjs.getNodes();
    var toExport = {
        exchanges: [],
        queues: [],
        bindings: [],
        producers: [],
        consumers: []
    };

    for (var i = 0; i < nodes.length; i++) {        
        if (nodes[i] != null) {
            var nodeName = nodes[i].getLabel();
            var nodeType = pjs.nodeTypeToString(nodes[i].getType());
            var nodeX = nodes[i].x;
            var nodeY = nodes[i].y;            
            switch(nodes[i].getType()) {
                case EXCHANGE:
                toExport["exchanges"].push({name: nodeName, type: nodes[i].getExchangeType(), x: nodeX, y: nodeY});
                toExport["bindings"] = toExport["bindings"].concat(processBindings(pjs, nodeName, nodes[i].getAllBindings()));
                break;
                case QUEUE:
                toExport["queues"].push({name: nodeName, x: nodeX, y: nodeY});
                break;
                case PRODUCER:
                toExport["producers"].push({name: nodeName, x: nodeX, y: nodeY, interval: nodes[i].intervalSeconds, publish: processPublish(nodes[i])});
                break;
                case CONSUMER:
                toExport["consumers"].push({name: nodeName, x: nodeX, y: nodeY, consume: processConsume(nodes[i])});
                break;
                default:
                console.log("ignoring: ", pjs.nodeTypeToString(nodes[i].getType()));
            }
        }
    }

    toExport.advanced_mode = pjs.getAdvancedMode();

    return toExport;
}

var withPTimeouts = {};

function withProcessing() {
    var id = arguments[0];
    var callback = arguments[1];
    var args = Array.prototype.slice.call(arguments, 2);        
    var pjs = Processing.getInstanceById(id);

    if (typeof withPTimeouts[id] != 'undefined') {
        clearTimeout(withPTimeouts[id]);
    }

    if(pjs != null) {
        args.unshift(pjs);
        callback.apply(null, args);
        return;
    }

    if (typeof withPTimeouts[id] == 'undefined') {
        var the_args = Array.prototype.slice.call(arguments);
        withPTimeouts[id] = setTimeout(function () {
            withProcessing.apply(null, the_args);
        }, 250);
    }
}

function publishMsgWithInterval(pjs, seconds, uuid, payload, routingKey, isPlayer) {
    var interval = setInterval(function () {
        pjs.publishMessage(uuid, payload, routingKey);
    }, seconds * 1000);
    if (isPlayer) {
        pjs.publishMessage(uuid, payload, routingKey);
    }
    pjs.setProducerInterval(uuid, interval, seconds);
}

function loadIntoPlayer(pjs, data) {
    var nodes = JSON.parse(data);
    var imp_exchanges = {};
    var imp_queues = {};
    var imp_producers = {};
    var imp_consumers = {};

    jQuery.each(nodes["exchanges"], function(k, v) {
        imp_exchanges[v["name"]] = pjs.addNodeByType(EXCHANGE, v["name"], v['x'], v['y']);
        imp_exchanges[v["name"]].setExchangeType(v["type"]);
    });

    jQuery.each(nodes["queues"], function(k, v) {
        imp_queues[v["name"]] = pjs.addNodeByType(QUEUE, v["name"], v['x'], v['y']);
        pjs.bindToAnonExchange(imp_queues[v["name"]]);
    });

    jQuery.each(nodes["bindings"], function(k, v) {        
        var destination = v.destination_type == "queue" ? imp_queues[v.destination] : imp_exchanges[v.destination];
        var source = imp_exchanges[v.source];
        var routing_key = v.routing_key;
        var binding = pjs.addConnection(destination, source);
        binding.updateBindingKey(routing_key);
    });

    jQuery.each(nodes['producers'], function(k, v) {
        imp_producers[v["name"]] = pjs.addNodeByType(PRODUCER, v["name"], v['x'], v['y']);
        if (v['publish']) {
            var from = imp_producers[v['name']];
            var to = imp_exchanges[v['publish']['to']];
            pjs.addConnection(from, to);
        }

        if (v['interval'] > 0) {
            publishMsgWithInterval(pjs, v['interval'], v['name'], v['publish']['payload'], v['publish']['routing_key'], PLAYER);
        }
    });

    jQuery.each(nodes['consumers'], function(k, v) {
        imp_consumers[v["name"]] = pjs.addNodeByType(CONSUMER, v["name"], v['x'], v['y']);
        if (v['consume']) {
            var from = imp_consumers[v['name']];
            var to = imp_queues[v['consume']];
            pjs.addConnection(from, to);
        }
    });

    pjs.toggleAdvancedMode(nodes.advanced_mode);
}

function show_message(consumer_id, msg) {
    jQuery("#msg-log").append('<pre>Consumer: ' + consumer_id + ' got msg:  ' + msg  + '</pre>');
    jQuery("#msg-log").scrollTop($("#msg-log")[0].scrollHeight);
}

function stopRendering(pjs) {
    console.log("stopRendering");
    pjs.stopRendering();    
}

function startRendering(pjs, pId) {
    console.log("startRendering");
    pjs.startRendering(pId);
}

function initSimulator(id) {
    jQuery(window).focus(function() {
        withProcessing(id, startRendering, id);
    });
    
    jQuery(window).blur(function() {
        withProcessing(id, stopRendering);
    });

    // withProcessing(id, bindJavascript);
}