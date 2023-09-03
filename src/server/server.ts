import ViteExpress from "vite-express"
import app from "./main";
import "dotenv/config";

const PORT: number = parseInt(<string>process.env.PORT, 10);
ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`)
);