var tutorialTemplate = '<div> id="{{step}}"';

var nextButtonFn = function () {
    return function(nextStep, render) {
        return '<button class="next" href="#" data-next="'
            + render(nextStep)
            + '">next</button>';
    };
}

function disable_showme() {
    jQuery("button.showme").attr('disable', 'disable');
    jQuery("button.showme").unbind('click');
}

var tutorials = {
    tutorial1: {
      elements: {}  
    },
    "tutorial1-a": {
        currentStepName: "tutorial1-a",
        nextStepName: "tutorial1-b",
        nextStep: nextButtonFn,
        showMeFun: function () {
            disable_showme();
            tutorials.tutorial1.elements['direct_exchange'] = new_elem_to(paper, "direct_exchange", 200, 100);
        },
        content: ["In this tutorial we are going to see how to implement task queues with RabbitMQ",
                  'First we need an <a class="tooltip-trigger" data-tooltip="direct_exchange">exchange</a> to have an address where to publish our messages',
                  '<strong>1.</strong> Drag an <a class="tooltip-trigger" data-tooltip="direct_exchange">exchange</a> into the drawing area.'
                 ]
    },
    "tutorial1-b": {
        currentStepName: "tutorial1-b",
        nextStepName: "tutorial1-c",
        nextStep: nextButtonFn,
        content: ['With just an exchange we can\'t do much. We need to add a <a class="tooltip-trigger" data-tooltip="queue">queue</a> to hold our messages.',
                  '<strong>2.</strong> Add a <a class="tooltip-trigger" data-tooltip="queue">queue</a> to the drawing area by dragging it from the toolbar.',
                  "Now we need to bind the queue to our exchange.", 
                  "<strong>3.</strong> Hold <strong>alt</strong> key while dragging from the queue to the exchange to create the binding."
                 ],
        showMeFun: function () {
            disable_showme();
            tutorials.tutorial1.elements['queue'] = new_elem_to(paper, "queue", 300, 100, function () {
                tutorials.tutorial1.elements['queue']
                    .connect_to(tutorials.tutorial1.elements['direct_exchange']);
            });
        }
    },
    "tutorial1-c": {
        currentStepName: "tutorial1-c",
        nextStepName: "tutorial1-d",
        nextStep: nextButtonFn,
        content: ['Now you probably want to have more than one <a class="tooltip-trigger" data-tooltip="consumer">consumer</a> to pick up jobs from the queue.',
                  '<strong>4.</strong>Drag a couple of <a class="tooltip-trigger" data-tooltip="consumer">consumers</a> into the drawing area.', 
                  "<strong>5.</strong>Then connect them to the queue by dragging from the consumer while pressing the <strong>alt</strong> key just like what you did to create the queue binding"
                 ],
        showMeFun: function () {
            disable_showme();
            tutorials.tutorial1.elements['c1'] = new_elem_to(paper, "consumer", 400, 75);
            tutorials.tutorial1.elements['c2'] = new_elem_to(paper, "consumer", 400, 125);
            tutorials.tutorial1.elements['c3'] = new_elem_to(paper, "consumer", 400, 175, function () {
                tutorials.tutorial1.elements['c1'].connect_to(tutorials.tutorial1.elements['queue']);
                tutorials.tutorial1.elements['c2'].connect_to(tutorials.tutorial1.elements['queue']);
                tutorials.tutorial1.elements['c3'].connect_to(tutorials.tutorial1.elements['queue']);
            });
            jQuery("button.showme").attr('disable', 'disable');
            jQuery("button.showme").unbind('click');
        }
    },
    "tutorial1-d": {
        currentStepName: "tutorial1-c",
        nextStepName: "",
        nextStep: null,
        content: ["Now we are ready to start publishing messages.",
                  '<strong>6.</strong> Drag a <a class="tooltip-trigger" data-tooltip="producer">producer</a> into the drawing area.', 
                  '<strong>7.</strong> Then connect them to the exchange by dragging from the <a class="tooltip-trigger" data-tooltip="producer">producer</a> while pressing the <strong>alt</strong> key just like what you did to create the queue binding.',
                  "<strong>8.</strong> Publish messages by clicking on the producer.",
                  "<strong>You're done!</strong>"
                 ],
        showMeFun: function () {
            var int_id;
            var max_msgs = 5;
            var times = 0;
            disable_showme();
            tutorials.tutorial1.elements['p1'] = new_elem_to(paper, "producer", 100, 100, function () {
                tutorials.tutorial1.elements['p1'].connect_to(tutorials.tutorial1.elements['direct_exchange']);
                int_id = setInterval(function () {
                    tutorials.tutorial1.elements['p1'].handle_message();
                    times++;
                    if (times == max_msgs) {
                        clearInterval(int_id);
                    }
                }, 1000);
            });
        }
    }
};

function show_step(step) {
    var tpl = jQuery("#tutorialTpl").html();
    var output = Mustache.render(tpl, tutorials[step]);
    $("#tutorial").html(output);

    jQuery("button.next").click(function (event) {
        event.preventDefault();
        var next = jQuery(event.target).attr('data-next');
        show_step(next);
    });

    jQuery("button.showme").removeAttr('disable');

    jQuery("button.showme").click(function (event) {
        event.preventDefault();
        tutorials[step].showMeFun();
    });

    jQuery("a.tooltip-trigger").each(function () {
        var what = jQuery(this).attr("data-tooltip");

        if (what) {
            var el = toolbar_tools[what];
            var uuid = el.uuid;
            var node = paper.getById(el.obj[0].id).node;
            var event_name = 'tooltip.' + uuid;

            jQuery(node).qtip({
                content: el.description,
                position: {
                    my: 'left center',
                    at: 'center right'
                },
                show: {
                    target: jQuery("a.tooltip-trigger")
                },
                hide: {
                    target: jQuery("a.tooltip-trigger")
                },
                events: {
                    render: function (event, api) {
                        console.log('render');
                    }
                }
            });   
        }
    });
}

function show_tooltip(uuid) {
    return;
    var el = elements[uuid];
    var node = paper.getById(el.obj[0].id).node;
    var event_name = 'tooltip.' + uuid;

    jQuery(node).qtip({
        content: el.description,
        position: {
            my: 'left center',
            at: 'center right',
            target: jQuery(node)
        },
        show: {
            event: event_name
        }
    });

    jQuery(node).trigger(event_name);
}

jQuery(document).ready(function() {
    show_step('tutorial1-a');

});