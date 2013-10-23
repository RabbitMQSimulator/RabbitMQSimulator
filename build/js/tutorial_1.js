jQuery(document).ready(function() {
    var t1_data = '{"exchanges":[{"name":"images","type":0,"x":268,"y":186}],"queues":[{"name":"resize","x":415,"y":249}],"bindings":[{"source":"images","vhost":"/","destination":"resize","destination_type":"queue","routing_key":"png","arguments":[]}],"producers":[{"name":"sim.gen-MTQ3NzAwMzkw","x":214,"y":71,"interval":2,"publish":{"to":"images","payload":"image_data","routing_key":"png"}}],"consumers":[{"name":"sim.gen-MTk0MTcxNDc5","x":509,"y":325,"consume":"resize"}],"advanced_mode":false}';

    initSimulator("t1_s1");
    withProcessing('t1_s1', function (pjs, data) {
        pjs.togglePlayerMode(true);
        loadIntoPlayer(pjs, data);
    }, t1_data);

    var t2_data = '{"exchanges":[{"name":"sim.gen-MTQ2NDAzMjM2","type":0,"x":298,"y":152}],"queues":[{"name":"sim.gen-MTc0MjI3ODE2","x":464,"y":74},{"name":"sim.gen-OTgwMDQ3ODUs","x":511,"y":199},{"name":"sim.gen-MjA1NzY2NzU5","x":397,"y":304}],"bindings":[{"source":"sim.gen-MTQ2NDAzMjM2","vhost":"/","destination":"sim.gen-MjA1NzY2NzU5","destination_type":"queue","routing_key":"","arguments":[]},{"source":"sim.gen-MTQ2NDAzMjM2","vhost":"/","destination":"sim.gen-OTgwMDQ3ODUs","destination_type":"queue","routing_key":"","arguments":[]},{"source":"sim.gen-MTQ2NDAzMjM2","vhost":"/","destination":"sim.gen-MTc0MjI3ODE2","destination_type":"queue","routing_key":"","arguments":[]}],"producers":[{"name":"sim.gen-LTkxOTE2Nzcw","x":138,"y":148,"interval":2,"publish":{"to":"sim.gen-MTQ2NDAzMjM2","payload":"","routing_key":""}}],"consumers":[{"name":"sim.gen-LTE1OTQ4OTM5","x":664,"y":128,"consume":"sim.gen-OTgwMDQ3ODUs"},{"name":"sim.gen-LTgzNzU3MjY1","x":694,"y":261,"consume":"sim.gen-OTgwMDQ3ODUs"}],"advanced_mode":false}';

    initSimulator("t1_s2");
    withProcessing('t1_s2', function (pjs, data) {
        pjs.togglePlayerMode(true);
        loadIntoPlayer(pjs, data);
    }, t2_data);
});