---
title: WebSocket
---

The PHP site for Submitty is mostly used through regular HTTP calls which return a rendered HTML page
for the user to interact with in a static fashion. Updating content happens through a page refresh for
the user. While this works well in a lot of instances, it does not work well in environments were we
expect a lot of people simultaneously editing or interacting with a particular page. For example, on
the simple grading interface, we might expect multiple graders to be simultaneously entering information
for students during an in-person lab. We want the page to be automatically updating as new information is
inputted by the graders. To handle this sort of use-case, we rely on
[WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API). These WebSockets allow
a page to connect to the server on the user's open page, and it will receive data as it is incoming.

While WebSockets can only transmit strings, there is an expectation that JSON is used as the transport
encoding, and that anything sent can be safely run through `JSON.decode` / `json_decode`.

Submitty surfaces its WebSocket server on the localhost using `ws://localhost:41983` and then through
apache / externally through `ws://<submitty_url>/ws` (e.g. `ws://localhost:1511/ws` on Vagrant).

__Note__: Ideally, a page should still be usable without WebSockets being available / active, to ensure
accessibility to all users.

## Setting up WebSockets

To utilize the WebSockets, there are two parts to this, the PHP code and the client-side JS code. The JS
code is responsible for receiving new data from the WebSocket and updating the rendering of the page
as appropriate, as well as receiving an update from a single user. The PHP code is responsible for handling
incoming input, and appropriately broadcasting it to all users.

## PHP Side

For communicating with the WebSocket server, you can utilize this snippet:

```php
use WebSocket;
try {
    $client = new Websocket\Client("ws://localhost:41983");
    $client->send('string data');
    $client->close();
}
catch(WebSocket\ConnectionException $e) {
    // handle exception
}
```

which will send the message to the central Server. To the modify how it a message get handles, you will want to modify
the [`\app\libraries\socket\Server`](https://github.com/Submitty/Submitty/blob/master/site/app/libraries/socket/Server.php#L175)`::onMessage`
function.

Finally, to allow a client page to use websockets, you should include the `site/public/js/websocket.js` file within your
view by using:

```php
$this->output->addInternalJs('websocket.js');
```

See below for more details on then how to utilize this file.

## JS Side

On the client-side, you can set-up a page to utilize the WebSocket by doing:

```js
const client = WebSocketClient();
client.onmessage = (msg) => {
  // do something with msg
}
client.onopen = () => {
  // do something on opening connection
};

client.open();
```

The `WebSocketClient` is an extension of the plain `WebSocket` implementation
which features automatic reconnection of a socket, as well as running `JSON.stringify` and
`JSON.parse` over incoming and outgoing messages. If you so desire, you could utilize
a `WebSocket`.

### Ensure WebSocket Server is running

To help validate that the WebSocket server is up and running, you can send a basic `ping`
message and get back a `pong` message. For example, using JavaScript:

```js
const ws = new WebSocket('ws://localhost:1511/ws');
ws.onmessage = (data) => console.log(data);
ws.send('ping');
```

### Debugging WebSocket in HTTPS

Note that most browsers do not trust WebSocket traffics with self-
signed certificates.  If you are dealing with WebSocket related features,
there are some workarounds:

- Copy the certificates from your VM and trust it on your host system;

- OR, Trust/Ignore the certificates on your browser;

- OR, Downgrade to HTTP/1.1 without TLS using `bash /usr/local/submitty/GIT_CHECKOUT/Submitty/.setup/dev-upgrade-h2.sh down`.

You could try following to trust/ignore certificates on your browser:

- For Chrome, start Chrome with `--ignore-certificate-errors`.

- For Firefox, trust the certificate when the warning pops up;
  And go to `https://localhost:8443/ws` and hit trust again.
