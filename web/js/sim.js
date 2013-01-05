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

var bound = false;

function bindJavascript() {
    var pjs = getProcessing();
    if(pjs!=null) {
        pjs.bindJavascript(this);
        bound = true;
    }

    if(!bound) setTimeout(bindJavascript, 250);
}

bindJavascript();

var EXCHANGE = 0;
var QUEUE = 1;

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
                toExport["bindings"] = processBindings(pjs, nodeName, nodes[i].getAllBindings());
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

function exportNodes() {
    var toExport = buildExport();
    console.log(JSON.stringify(toExport));
}

jQuery(document).ready(function() {
    
});