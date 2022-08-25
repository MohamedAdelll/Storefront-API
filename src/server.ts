import cors from "cors";
import express, { Request, Response } from "express";
import routes from "./main/routes";

const app: express.Application = express();
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
const address: string = "127.0.0.1:3000";
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());

app.get("/", function (_req: Request, res: Response) {
  res.send("Hello World!");
});

app.use("/api/v1", routes);
////////////////////////////////////////////////////////////
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    message:
      "Oh ohh you are lost, read the API documentation to find your way back.",
  });
});

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
