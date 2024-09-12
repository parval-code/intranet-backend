import { createServer } from 'http';
import { buildApp } from './app';
import config from './../config/loader';

const port = config.port;

buildApp(config)
  .then((app: any) => {
    /**
     * Get port from environment and store in Express.
     */
    app.set('port', port);

    // Create HTTP server.
    // Workaround: Using any as the Express and createServer types are not compatible.
    const server = createServer(app as any);

    /**
     * Listen on provided port, on all network interfaces.
     */
    server.on('error', onError);
    server.on('listening', onListening);
    server.listen(port);

    /**
     * Event listener for HTTP server "error" event.
     */

    function onError(error: NodeJS.ErrnoException) {
      if (error.syscall !== 'listen') {
        throw error;
      }

      const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

      // handle specific listen errors with friendly messages
      switch (error.code) {
        case 'EACCES':
          console.log(`${bind} requires elevated privileges`);
          process.exit(1);
          break;
        case 'EADDRINUSE':
          console.log(`${bind} is already in use`);
          process.exit(1);
          break;
        default:
          throw error;
      }
    }

    /**
     * Event listener for HTTP server "listening" event.
     */

    function onListening() {
      const addr = server.address();

      const bind =
        typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
      console.log(`Listening on ${bind}`);
    }
  })
  .catch(err => {
    console.log('An error ocurred while building the app:');
    console.log(err);
  });
