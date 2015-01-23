# RabbitMQ Simulator #

The RabbitMQ Simulator is a web based tool that can be used to represent messaging topologies on a blank canvas.

The idea is to be able to drag & drop components like _Exchanges_, _Queues_, _Producers_ and _Consumers_ and be able to interconnect them by drawing lines to represent bindings and so on.

Here's how a messaging topology represented with the simulator looks like:

![Overview](https://raw.github.com/RabbitMQSimulator/RabbitMQSimulator/master/docs/overview.png "Overview")

And you can see it in action in this video: [https://vimeo.com/56986242](https://vimeo.com/56986242)

## Possible Uses ##

- Teaching RabbitMQ concepts at conferences for example
- Topology Design that can be imported into RabbitMQ
- Debugging. By importing a topology from RabbitMQ the Simulator can be used as a message flow visualizer

## Features ##

The simulator currently implements the following features:

- Three exchange types: direct, fanout and topic:
- Queue Bindings and Exchange to Exchange bindings
- Publishers that can specify payload, routing key and publish interval, like "publish 1 message every 2 seconds"
- Message queueing
- Round-robin message delivery
- Default "Anon" exchange representation
- Export topology for a "play only" mode (useful for tutorials)

# Running the Simulator #

There are many ways to run the Simulator: you can do it either as a bunch of static HTML/JS/CSS files, or with a node.js server. The node.js server way will allow you to import/export data from RabbitMQ.

## Running as static HTML/JS/CSS files ##

Just open the file `build/index.html` in your browser and you will have access to the simulator.

## Running from node.js ##

This project depends on _node.js_ and various node libraries for building the source files, therefore you will need to install node on your machine if you want to run it.

```bash
git clone https://github.com/RabbitMQSimulator/RabbitMQSimulator.git
cd RabbitMQSimulator
npm install
```

Once you have everything in place you can run the `node.js` app by calling:

```bash
node app.js
```

Then open [http:localhost:3000](http:localhost:3000).

If you want to be able to **import/export** from RabbitMQ then a broker needs to be running on _localhost_, with the management plugin enabled. At the moment the simulator uses the default `guest:guest` credentials but that will be fixed in the future.

To have the **import/export** feature enabled you need to create the following environment variable:

```bash
export SIM_ENABLE_EXPORT=true
```

# Using the Simulator #

Once you accessed the simulator from [http:localhost:3000](http:localhost:3000) you can drag elements into the white canvas. To interconnect them simply hold _alt_ or _shift_ while dragging from the connection source to the target.

You can click on the different elements in order to change names, routing keys and so on.

Each element has its own functionality when clicked. For example a producer will open the _New Message Form_ while an exchange will allow you to change its name and type.

The _Advanced Mode_ button will let you see bindings to the _Default_ or _Anon Exchange_.

The _Export_ and _Import_ buttons are used to save/load configuration from RabbitMQ.

The _To Player_ functionality is currently in development and therefore not documented.

# Developing the Simulator #

The file `web/js/Simulator.pde` and the file `web/js/scripts.js` are built using Grunt. To build them type the following command inside the Simulator folder:

```bash
grunt
```

If you don't have Grunt installed as a CLI tool then follow the instructions here: [http://gruntjs.com/getting-started](http://gruntjs.com/getting-started).

# TODO #

- Improve form usability for the different components.
- Fix login credentials for the RabbitMQ Management API.
- Better placement algorithm when importing data from RabbitMQ.
- Better label placement algorithm when importing data from RabbitMQ.
- …

# Contributions #

Thank you for your interest in making a contribution of code to the RabbitMQ Simulator Project. If you are interested in contributing to this project please contact us at <mailto:contribute@tryrabbitmq.com>. Before making a contribution, whether it be via a pull request on Github or a code fragment or patch submitted by email or a public discussion group, we ask that you agree to the terms of the RabbitMQ Simulator Contributor Agreement. This Contributor Agreement provides that any code you contribute to the RabbitMQ Simulator project, will be jointly owned by VMware and the contributor.