import { App } from "./app";

/**
 * Start Express server.
 */
async function main() {
  const app = new App();
  await app.listen();
}
main();
