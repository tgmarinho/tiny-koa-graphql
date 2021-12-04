import { createServer } from "http";
import app from "./app";
import { config } from "./config";

(async () => {
  const server = createServer(app.callback());
  server.listen(config.PORT, () => {
    console.log(`🚀 server running at http://localhost:${config.PORT} 💻`);
  });
})();
