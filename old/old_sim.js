String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.toCamelCase = function(){
    return this.replace(/(\_[a-z])/g, function($1){return $1.toUpperCase().replace('_','');});
};

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

var DIRECT_EXCHANGE_COLOR = "red";
var FANOUT_EXCHANGE_COLOR = "green";
var ANON_EXCHANGE_COLOR = "none";
var QUEUE_COLOR = "blue";
var CONSUMER_COLOR = "grey";
var PRODUCER_COLOR = "orange";

var fill_colors = {
    "queue": QUEUE_COLOR,
    "direct_exchange": DIRECT_EXCHANGE_COLOR,
    "fanout_exchange": FANOUT_EXCHANGE_COLOR,
    "anon_exchange": ANON_EXCHANGE_COLOR,
    "consumer": CONSUMER_COLOR,
    "producer": PRODUCER_COLOR
};

var paths = {
    "queue": "M4.082,4.083v2.999h22.835V4.083H4.082zM4.082,20.306h22.835v-2.999H4.082V20.306zM4.082,13.694h22.835v-2.999H4.082V13.694zM4.082,26.917h22.835v-2.999H4.082V26.917z",
    "direct_exchange": "M21.786,20.698c-1.792-0.237-2.912-1.331-4.358-2.886c-0.697-0.751-1.428-1.577-2.324-2.319c1.396-1.165,2.411-2.519,3.483-3.503c1.01-0.92,1.901-1.519,3.199-1.688v2.574l7.556-4.363L21.786,4.15v2.652c-3.34,0.266-5.45,2.378-6.934,4.013c-0.819,0.896-1.537,1.692-2.212,2.192c-0.685,0.501-1.227,0.731-2.013,0.742c-0.001,0-0.002,0-0.003,0H2.812v3.5h0.001v0.001c0,0,0.046-0.001,0.136-0.001h7.677c0.786,0.011,1.33,0.241,2.017,0.743c1.021,0.743,2.095,2.181,3.552,3.568c1.312,1.258,3.162,2.46,5.592,2.649v2.664l7.556-4.36l-7.556-4.361V20.698z",
    "fanout_exchange": "M21.786,20.698c-1.792-0.237-2.912-1.331-4.358-2.886c-0.697-0.751-1.428-1.577-2.324-2.319c1.396-1.165,2.411-2.519,3.483-3.503c1.01-0.92,1.901-1.519,3.199-1.688v2.574l7.556-4.363L21.786,4.15v2.652c-3.34,0.266-5.45,2.378-6.934,4.013c-0.819,0.896-1.537,1.692-2.212,2.192c-0.685,0.501-1.227,0.731-2.013,0.742c-0.001,0-0.002,0-0.003,0H2.812v3.5h0.001v0.001c0,0,0.046-0.001,0.136-0.001h7.677c0.786,0.011,1.33,0.241,2.017,0.743c1.021,0.743,2.095,2.181,3.552,3.568c1.312,1.258,3.162,2.46,5.592,2.649v2.664l7.556-4.36l-7.556-4.361V20.698z",
    "anon_exchange": "M21.786,20.698c-1.792-0.237-2.912-1.331-4.358-2.886c-0.697-0.751-1.428-1.577-2.324-2.319c1.396-1.165,2.411-2.519,3.483-3.503c1.01-0.92,1.901-1.519,3.199-1.688v2.574l7.556-4.363L21.786,4.15v2.652c-3.34,0.266-5.45,2.378-6.934,4.013c-0.819,0.896-1.537,1.692-2.212,2.192c-0.685,0.501-1.227,0.731-2.013,0.742c-0.001,0-0.002,0-0.003,0H2.812v3.5h0.001v0.001c0,0,0.046-0.001,0.136-0.001h7.677c0.786,0.011,1.33,0.241,2.017,0.743c1.021,0.743,2.095,2.181,3.552,3.568c1.312,1.258,3.162,2.46,5.592,2.649v2.664l7.556-4.36l-7.556-4.361V20.698z",
    "consumer": "M15.067,2.25c-5.979,0-11.035,3.91-12.778,9.309h3.213c1.602-3.705,5.271-6.301,9.565-6.309c5.764,0.01,10.428,4.674,10.437,10.437c-0.009,5.764-4.673,10.428-10.437,10.438c-4.294-0.007-7.964-2.605-9.566-6.311H2.289c1.744,5.399,6.799,9.31,12.779,9.312c7.419-0.002,13.437-6.016,13.438-13.438C28.504,8.265,22.486,2.252,15.067,2.25zM10.918,19.813l7.15-4.126l-7.15-4.129v2.297H-0.057v3.661h10.975V19.813z",
    "producer": "M24.086,20.904c-1.805,3.113-5.163,5.212-9.023,5.219c-5.766-0.01-10.427-4.672-10.438-10.435C4.636,9.922,9.297,5.261,15.063,5.25c3.859,0.007,7.216,2.105,9.022,5.218l3.962,2.284l0.143,0.082C26.879,6.784,21.504,2.25,15.063,2.248C7.64,2.25,1.625,8.265,1.624,15.688c0.002,7.42,6.017,13.435,13.439,13.437c6.442-0.002,11.819-4.538,13.127-10.589l-0.141,0.081L24.086,20.904zM28.4,15.688l-7.15-4.129v2.297H10.275v3.661H21.25v2.297L28.4,15.688z"
};

var starting_pos = {
    "direct_exchange": {x: 10, y: 10},
    "fanout_exchange": {x: 10, y: 40},
    "anon_exchange": {x: 70, y: 10},
    "queue": {x: 10, y: 75},
    "consumer": {x: 10, y: 110},
    "producer": {x: 10, y: 145}
};

toolbar_tools = {
    "direct_exchange": null,
    "fanout_exchange": null,
    "queue": null,
    "consumer": null,
    "producer": null
};

var LINE_START = 0;
var LINE_END = 1;

var paper = Raphael("sim", 800, 410);
var toolbar, sim_area;

var exchanges = {};
var queues = {};
var consumers = {};
var producers = {};

var elements = {};

// which kind of bindings a target accept
var valid_bindings = {
    consumer: [],
    queue: ['consumer'],
    direct_exchange: ['queue', 'producer'],
    fanout_exchange: ['queue', 'producer'],
    anon_exchange: ['queue', 'producer'],
    producer: []
};

function new_elem() {
    var paper = arguments[0];
    var kind = arguments[1];
    var x = arguments[2] || starting_pos[kind].x;
    var y = arguments[3] || starting_pos[kind].y;

    var el = new window[kind.toCamelCase().capitalize()](paper, x, y);
    
    elements[el.uuid] = el;

    show_tooltip(el.uuid);

    return el;
}

/**
 * Checks if the object can initiate a connection
 */
function check_connection_limit(origin) {
    switch (origin.amqp_type) {
        case 'queue': 
            return true;
            break;
        case 'direct_exchange': 
        case 'fanout_exchange':
        case 'anon_exchange':
            return false;
            break;
        case 'consumer': 
            return origin.connections.length == 0;
            break;
        case 'producer': 
            return origin.connections.length == 0;
            break;
        default:
            return false;
    }
}

function legal_connection(origin, target) {
    return target.amqp_type && valid_bindings[target.amqp_type].indexOf(origin.amqp_type) != -1 &&
        check_connection_limit(origin);
}

paper.customAttributes.along = function (v) {
    var p = this.alongPath;
    var len = this.alongPathLen;
    var point = p.getPointAtLength(v * len);
    return {
        transform: "t" + [point.x, point.y]
    };
};

function AmqpObject(paper) {
    this.paper = paper;
    this.obj.drag(this.move, this.start, this.up, this, this, this);

    this.obj.connections = [];
    this.obj.amqp_object = this;
    this.hidden = false;

    this.obj.hover(function(evt) {
        evt.target.style.cursor = 'pointer';
    }, function(evt) {
        evt.target.style.cursor = 'default';
    });
}

AmqpObject.prototype.init_object = function(amqp_object, paper, amqp_type, x, y) {
    var icon = paper.path(paths[amqp_type]).attr({fill: this.fill_color, stroke: '#000'});
    icon.transform("...T" + [x, y]);

    var clip = get_surround(paper, icon);
    
    amqp_object.obj = paper.set();
    amqp_object.obj.push(clip, icon);
    amqp_object.uuid = amqp_object.obj.uuid = icon.uuid = clip.uuid = Raphael.createUUID();

    clip.amqp_type = icon.amqp_type = amqp_object.obj.amqp_type = amqp_object.amqp_type = amqp_type;
    clip.amqp_object = icon.amqp_object = amqp_object;
    amqp_object.description = amqp_type.capitalize();
}

AmqpObject.prototype.clone_obj = function() {
    toolbar_tools[this.amqp_type] = new_elem(this.paper, this.amqp_type);
};

AmqpObject.prototype.connect_to = function(to) {
    var conn = this.paper.connection(get_clip_from_set(this.obj), get_clip_from_set(to.obj), "#000");

    this.obj.connections.push(conn);
    to.obj.connections.push(conn);

    conn.line.click(function () {
        if (conn.from.amqp_type == 'queue' && conn.to.amqp_object != anon_exchange) {
            jQuery('#binding_id').val(conn.from.uuid + '_' + conn.line.id);
            enable_form('#bindings_form');
        } else {
            reset_form('#bindings_form');
            disable_form('#bindings_form');
        }
    });

    conn.line.hover(function(evt) {
        evt.target.style.cursor = 'pointer';
    }, function(evt) {
        evt.target.style.cursor = 'default';
    });
    
    // for queues we display the binding key
    // and we change the mouse pointer
    if (this.amqp_type == 'queue') {
        conn.bk_caption = this.paper.text(0, 0, '');
        conn.bk_caption.node.style.pointerEvents = "none";
        transport_connection_caption(conn);
    }
    
    // if the target is a queue then we need to start 
    // delivering messages when a new consumer arrives
    if (to.obj.amqp_type == 'queue') {
        eve('new.consumer.' + to.obj.uuid, to.obj, this.obj);
    }

    return conn;
};

AmqpObject.prototype.remove_connection = function(line_id) {
    for (var i = this.obj.connections.length; i--;) {
        if (this.obj.connections[i].line.id == line_id) {
            this.obj.connections.remove(i);
            break;
        }
    }
};

function get_clip_from_set(aSet) {
    return aSet[0];
}

function get_icon_from_set(aSet) {
    return aSet[1];    
}

function get_initial_position(aSet) {
    var clip = get_clip_from_set(aSet);
    var ox, oy;

    if (typeof clip.attr("x2") === "undefined") {
        ox = clip.attr("x") + clip.attr("width") / 2;
    } else {
        ox = clip.attr("x2") - clip.attr("width") / 2;
    }

    if (typeof clip.attr("y2") === "undefined") {
        oy = clip.attr("y") + clip.attr("height") / 2;
    } else {
        oy = clip.attr("y2") - clip.attr("height") / 2;
    }

    return {
        ox: ox,
        oy: oy
    };
}

function transport_element(el, dx, dy) {
    var deltaX = dx - el.ox;
    var deltaY = dy - el.oy;
    el.obj.transform("...T" + [deltaX, deltaY]);
    
    if (el.caption) {
        el.caption.transform("...T" + [deltaX, deltaY]);
    }

    update_connections(el.obj.connections);

    el.ox = dx;
    el.oy = dy;
}

AmqpObject.prototype.start = function(x, y, evt) {
    var clip = get_clip_from_set(this.obj);
    this.ox = clip.attr("x2") - clip.attr("width") / 2;
    this.oy = clip.attr("y2") - clip.attr("height") / 2;

    // instead of dragging we draw the connection band
    if (evt.altKey && check_connection_limit(this.obj)) {
        if (!inside_box(sim_area, this.obj.getBBox())) return;

        this.band = this.paper.path("M 0 0").attr({"stroke-width": 1});
        this.band.node.style.pointerEvents = "none";
    } else {
        this.obj.attr("opacity", 0.5);
        
        //draw rectangle to replace the dragged one.
        if (!inside_box(sim_area, this.obj.getBBox())) {
            this.clone_obj();
        }
    }
};

function init_queue_caption(paper, widget) {
    if (widget.amqp_type == 'queue' && typeof widget.caption == 'undefined') {
        widget.caption = get_caption(paper, widget.obj, '0');
    }
}

function update_anon_binding_caption(widget) {
    for (var i = widget.obj.connections.length; i--;) {
        if (widget.obj.connections[i].to.amqp_object == anon_exchange) {
            widget.update_binding_key(widget.obj.connections[i].line.id, widget.get_name());
        }
    }
}

AmqpObject.prototype.up = function(evt) {
    if (this.band) {   
        var band_end = get_band_end(this.band);
        var target_el = this.paper.getElementByPoint(evt.pageX, evt.pageY);
        // band was not dropped inside origin object:
        if (target_el && target_el != this.obj && legal_connection(this.obj, target_el)) {
            this.connect_to(target_el.amqp_object);
        }

        if (this.faded_el) {
            this.faded_el.attr("opacity", 1);
            delete this.faded_el;
        }
    } else {
        this.obj.attr("opacity", 1);
        if (!inside_box(sim_area, this.obj.getBBox())) {
            this.obj.remove();
            // TODO remove connections.
            // TODO remove caption
            delete elements[this.uuid];
        }

        // TODO move this to the queue specific implementation
        init_queue_caption(this.paper, this);

        // TODO move this to the queue specific implementation
        if (this.amqp_type == 'queue' && typeof this.anon_binding == 'undefined') {
            var conn = this.connect_to(anon_exchange);
            update_anon_binding_caption(this);
            this.anon_binding = true;

            if (anon_exchange.hidden) {
                conn.line.hide();
                conn.bk_caption.hide();
            }
        }
    }

    // clean up connector band;
    if (this.band) {
        this.band.remove();
        delete this.band;
    }
};

function get_band_coordinates(ob, x, y) {
    var bx, by, bx2 = x, by2 = y;
    
    if (y < ob.y) {
        // upper side
        bx = ob.x + ob.width / 2;
        by = ob.y;
    } else if (y > ob.y2) {
        // lower side
        bx = ob.x + ob.width / 2;
        by = ob.y2;
    } else if (y > ob.y && y < ob.y2 && x > ob.x2) {
        // right side
        bx = ob.x2;
        by = ob.y + ob.height / 2;
    } else if (y > ob.y && y < ob.y2 && x < ob.x) {
        // left side
        bx = ob.x;
        by = ob.y + ob.height / 2;                
    } else {
        // inside this.obj no line.
        bx = by = bx2 = by2 = 0;
    }

    return {
        bx: bx,
        by: by,
        bx2: bx2,
        by2: by2
    };
}

function maybe_fadeout_object(current_obj, target_el) {
    if (target_el && target_el != current_obj.obj && legal_connection(current_obj.obj, target_el)) {
        target_el.attr("opacity", 0.5);
        current_obj.faded_el = target_el;
    }
}

function maybe_fadein_object(current_obj, target_el) {
    if (!target_el && current_obj.faded_el) {
        current_obj.faded_el.attr("opacity", 1);
        delete current_obj.faded_el;
    }
}

function get_connection_middle(conn) {
    return conn.line.getPointAtLength(0.5 * conn.line.getTotalLength());
}

function transport_connection_caption(conn) {
    var middle = get_connection_middle(conn);
    conn.bk_caption.transform("t" + [middle.x, middle.y]);
}

function update_connections(conns) {
    for (var i = conns.length; i--;) {
        this.paper.connection(conns[i]);

        if (conns[i].bk_caption) {
            transport_connection_caption(conns[i]);
        }
    }
    this.paper.safari();
}

AmqpObject.prototype.move = function(dx, dy, x, y, evt) {
    if (this.band) {
        var coord = get_band_coordinates(this.obj.getBBox(), evt.offsetX, evt.offsetY);
        this.band.attr({path: "M " + coord.bx + " " + coord.by + 
                        "L " + coord.bx2 + " " + coord.by2});
        var target_el = this.paper.getElementByPoint(x, y);
        maybe_fadeout_object(this, target_el);
        maybe_fadein_object(this, target_el);
    } else {
        transport_element(this, dx, dy);
    }
};

function new_message_animation(conn, start, end, next, msg) {
    // add small white circle to screen.
    // animate circle along connection.
    var path = conn.line;
    var c = paper.circle(0, 0, 5).attr({fill: "#fff", stroke: "#000"});
    c.alongPath = path;
    c.alongPathLen = path.getTotalLength();
    c.attr({along: start});
    c.animate({along: end}, 1000, function () {
        // for exchanges show routing animations or something.
        // for queues glow or make queue bump, maybe have some collumns next to the queue to represent messages.
        // for consumers make them glow or bump.
        c.remove();
        conn[next].amqp_object.handle_message(msg);
    });
}

function get_surround(paper, icon) {
    var bb = icon.getBBox();
    return paper.rect(bb.x2 - bb.width, bb.y2 - bb.height, bb.width, bb.height)
        .attr({fill: 'rgba(0, 0, 0, 0)', stroke: 'none'})
        .toBack();
}

function get_caption(paper, clip, text) {
    var bb = clip.getBBox();
    var caption = paper.text(bb.x2 + bb.width, bb.y, text)
        .toBack();
    caption.node.style.pointerEvents = "none";
    return caption;
}

function DirectExchange(paper, x, y) {
    // add object representation on screen.
    this.fill_color = DIRECT_EXCHANGE_COLOR;
    this.init_object(this, paper, "direct_exchange", x, y);

    Object.getPrototypeOf(DirectExchange.prototype).constructor.call(this, paper);
}

DirectExchange.prototype = Object.create(AmqpObject.prototype);
DirectExchange.prototype.constructor = DirectExchange;

DirectExchange.prototype.handle_message = function(msg) {
    for (var i = this.obj.connections.length; i--;) {
        if (this.obj.connections[i].from.amqp_type == 'queue' && 
            msg.routing_key == this.obj.connections[i].bk_caption.attr('text')) {
            new_message_animation(this.obj.connections[i], LINE_END, LINE_START, 'from', msg);
        }
    }
};

function FanoutExchange(paper, x, y) {
    // add object representation on screen.
    this.fill_color = FANOUT_EXCHANGE_COLOR;
    this.init_object(this, paper, "fanout_exchange", x, y);

    Object.getPrototypeOf(FanoutExchange.prototype).constructor.call(this, paper);
}

FanoutExchange.prototype = Object.create(AmqpObject.prototype);
FanoutExchange.prototype.constructor = FanoutExchange;

FanoutExchange.prototype.handle_message = function(msg) {
    for (var i = this.obj.connections.length; i--;) {
        if (this.obj.connections[i].from.amqp_type == 'queue') {
            new_message_animation(this.obj.connections[i], LINE_END, LINE_START, 'from', msg);
        }
    }
};

function AnonExchange(paper, x, y) {
    // add object representation on screen.
    this.fill_color = ANON_EXCHANGE_COLOR;
    this.init_object(this, paper, "anon_exchange", x, y);

    Object.getPrototypeOf(AnonExchange.prototype).constructor.call(this, paper);

    this.obj.undrag();
}

AnonExchange.prototype = Object.create(AmqpObject.prototype);
AnonExchange.prototype.constructor = AnonExchange;

AnonExchange.prototype.handle_message = function(msg) {
    // TODO only route by queue name
    for (var i = this.obj.connections.length; i--;) {
        if (this.obj.connections[i].from.amqp_type == 'queue' && 
            msg.routing_key == this.obj.connections[i].from.amqp_object.get_name()) {
            new_message_animation(this.obj.connections[i], LINE_END, LINE_START, 'from', msg);
        }
    }
};

AnonExchange.prototype.toggle_visiblity = function() {
    var fn = this.hidden ? 'show' : 'hide';

    for (var i = this.obj.connections.length; i--;) {
        this.obj.connections[i].line[fn]();
        this.obj.connections[i].bk_caption[fn]();
    }

    this.obj[fn]();

    this.hidden = !this.hidden;
};

function generate_guid_name() {
    return 'sim.' + Raphael.createUUID().replace(/-/g, '').substring(0, 16);
}

/**
 * state = {
 *   messages: array, 
 *   name: string,
 *   consumers_ready: array
 * }
 */

function Queue(paper, x, y) {
    this.fill_color = QUEUE_COLOR;
    this.init_object(this, paper, "queue", x, y);
    var that = this;

    that.obj.state = {
        name: generate_guid_name(),
        consumers_ready: [],
        messages: []
    };

    Object.getPrototypeOf(Queue.prototype).constructor.call(that, paper);

    eve.on('new.consumer.' + that.obj.uuid, function (consumer) {
        that.obj.state.consumers_ready.push(consumer);
        that.maybe_deliver_message();
    });

    this.obj.click(function () {
        reset_form('#queue_form');
        jQuery('#queue_id').val(this.uuid);
        jQuery('#queue_name').val(that.obj.state.name);
        enable_form('#queue_form');
    });
}

Queue.prototype = Object.create(AmqpObject.prototype);
Queue.prototype.constructor = Queue;

Queue.prototype.get_name = function() {
    return this.obj.state.name;
};

Queue.prototype.update_caption = function() {
    this.caption.attr("text", this.obj.state.messages.length);    
};

Queue.prototype.update_inspector = function() {

};

Queue.prototype.enqueue = function (msg) {
    this.obj.state.messages.push(msg);
    this.obj.amqp_object.update_caption();
};

Queue.prototype.dequeue = function () {
    var msg = this.obj.state.messages.shift();
    this.obj.amqp_object.update_caption();
    return msg;
};

Queue.prototype.handle_message = function(msg) {
    this.enqueue(msg);
    this.maybe_deliver_message();
};

Queue.prototype.maybe_deliver_message = function () {
    if (this.obj.state.messages.length > 0) {
        var consumer = this.obj.state.consumers_ready.shift();
        if (consumer) {
            var msg = this.dequeue();
            for (var i = consumer.connections.length; i--;) {
                new_message_animation(consumer.connections[i], LINE_END, LINE_START, 'from', msg);
            }
        }
    }
};

Queue.prototype.update_binding_key = function(line_id, binding_key) {
    for (var i = this.obj.connections.length; i--;) {
        if (this.obj.connections[i].line.id == line_id) {
            this.obj.connections[i].bk_caption.attr('text', binding_key);
        }
    }
};

Queue.prototype.unbind = function(line_id) {
    for (var i = this.obj.connections.length; i--;) {
        if (this.obj.connections[i].line.id == line_id) {
            var line = this.obj.connections[i].line;
            var bk_caption = this.obj.connections[i].bk_caption;
            this.obj.connections[i].to.amqp_object.remove_connection(line_id);
            this.obj.connections[i].from.amqp_object.remove_connection(line_id);
            bk_caption.remove();
            line.remove();
            break;
        }
    }
};

Queue.prototype.change_name = function(name) {
    this.obj.state.name = name;
    update_anon_binding_caption(this);
};



function Consumer(paper, x, y) {
    this.fill_color = CONSUMER_COLOR;
    this.init_object(this, paper, "consumer", x, y);

    Object.getPrototypeOf(Consumer.prototype).constructor.call(this, paper);
}

Consumer.prototype = Object.create(AmqpObject.prototype);
Consumer.prototype.constructor = Consumer;

Consumer.prototype.handle_message = function(msg) {
    // TODO maybe glow or show that it processed the message
    console.log('received msg:', msg);
    if (this.obj.connections[0]) {
        eve('new.consumer.' + 
            this.obj.connections[0].to.uuid, 
            this.obj.connections[0].to.amqp_object.obj, 
            this.obj.connections[0].from.amqp_object.obj);
    }
};

function Producer(paper, x, y) {
    this.fill_color = PRODUCER_COLOR;
    this.init_object(this, paper, "producer", x, y);

    Object.getPrototypeOf(Producer.prototype).constructor.call(this, paper);

    // eve.on('publish.message.' + this.obj.uuid, function () {
    //     this.amqp_object.handle_message(this.msg);
    // });

    this.obj.click(function(){
        // this.amqp_object.handle_message(this.amqp_object.msg);
        // display the new message form
        // producer_id is the hidden input field
        // set current producer based on the uuid as the one that 
        // fires the event
        reset_form('#new_message_form');
        jQuery('#new_message_producer_id').val(this.uuid);
        enable_form('#new_message_form');
    });
}

Producer.prototype = Object.create(AmqpObject.prototype);
Producer.prototype.constructor = Producer;

Producer.prototype.handle_message = function(msg) {
    //publish message to exchange.
    for (var i = this.obj.connections.length; i--;) {
        new_message_animation(this.obj.connections[i], LINE_START, LINE_END, 'to', msg);
    }
};

Producer.prototype.publish_message = function(payload, routing_key) {
    this.handle_message({payload: payload, routing_key: routing_key});
};

function build_stage(paper) {
    toolbar = paper.rect(5, 5, 50, 400, 5);
    sim_area = paper.rect(60, 5, 730, 400, 5);   
}

// starts to build the toolbar
function build_toolbar(paper) {
    toolbar_tools["direct_exchange"] = new_elem(paper, "direct_exchange");
    toolbar_tools["fanout_exchange"] = new_elem(paper, "fanout_exchange");
    toolbar_tools["queue"] = new_elem(paper, "queue");
    toolbar_tools["consumer"] = new_elem(paper, "consumer");
    toolbar_tools["producer"] = new_elem(paper, "producer");
}

paper.customAttributes.along2 = function (v) {
    var p = this.alongPath;
    var len = this.alongPathLen;
    var point = p.getPointAtLength(v * len);

    move_element(this.amqp_object.uuid, point.x, point.y);

    return true;
};

function new_elem_to(paper, kind, x2, y2, next) {
    var path = paper.path("M" + [starting_pos[kind].x, starting_pos[kind].y] + "L" + [x2, y2])
        .attr({stroke: "none"});;
    var el = new_elem(paper, kind);

    el.obj.forEach(function (e) {
        e.alongPath = path;
        e.alongPathLen = path.getTotalLength();
    });
    el.obj.attr({along2: 0});
    el.obj.animate({along2: 1}, 500, function () {
        path.remove();
        this.forEach(function (el) {
            delete el.alongPath;
            delete el.alongPathLen;
        });
        if (next) {
            next();
        }
    });

    return el;
}

function example_one(paper) {
    var p1, ex1, q1, c1, c2, c3;
    var int_id;
    var max_msgs = 5;
    var times = 0;

    p1 = new_elem_to(paper, "producer", 100, 100, function () {
        ex1 = new_elem_to(paper, "direct_exchange", 200, 100, function () {
            q1 = new_elem_to(paper, "queue", 300, 75, function() {
                c1 = new_elem_to(paper, "consumer", 400, 50);
                c2 = new_elem_to(paper, "consumer", 400, 100);
                c3 = new_elem_to(paper, "consumer", 400, 150, function () {
                    p1.connect_to(ex1);
                    q1.connect_to(ex1);
                    c1.connect_to(q1);
                    c2.connect_to(q1);
                    c3.connect_to(q1);
                    int_id = setInterval(function () {
                        p1.handle_message();
                        times++;
                        if (times == max_msgs) {
                            clearInterval(int_id);
                        }
                    }, 1000);
                });
            });
        });
    });
}

function move_element(uuid, x, y) {
    var el = typeof uuid === "string" 
        ? elements[uuid] : uuid;

    var coords = get_initial_position(el.obj);

    if (isNaN(el.ox)) {
        el.ox = coords.ox;
    }

    if (isNaN(el.oy)) {
        el.oy = coords.oy;
    }
    transport_element(el, x, y);
}

build_stage(paper);
build_toolbar(paper);
var anon_exchange = new_elem(paper, "anon_exchange");
anon_exchange.toggle_visiblity();

var definitions_url = "http://guest:guest@localhost:15672/api/definitions";

function load_from_rabbit(url) {
    var parts = 5;
    var bbox = sim_area.getBBox();
    var r_exchanges = {}, r_queues = {}, r_bindings = {};

    jQuery.getJSON(url, function(data) {

        jQuery.each(data['exchanges'], function(k, v) {
            var x = (bbox.width/parts) * 2 + bbox.x;
            var y = bbox.y + (bbox.height/(data['exchanges'].length+1) * (k+1) );
            // TODO check Exchange type
            r_exchanges[v.name] = new_elem(paper, 'direct_exchange', x, y);
        });

        jQuery.each(data['queues'], function(k, v) {
            var x = (bbox.width/parts) * 3 + bbox.x;
            var y = bbox.y + (bbox.height/(data['queues'].length+1) * (k+1) );
            r_queues[v.name] = new_elem(paper, 'queue', x, y);
        });

        jQuery.each(data['bindings'], function(k, v) {
            // TODO check for destination type
            r_queues[v.destination].connect_to(r_exchanges[v.source]);
        });

        console.log(data);
    });
}