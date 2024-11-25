import { Hono } from "hono";
import { AiResumeReqDto } from "./core/AiResumeDto";
import { getCvByInput } from "./services/typeChatService";

const app = new Hono();

app.post("/ai/resume", async (c) => {
  const body = await c.req.json<AiResumeReqDto>();
  const data = await getCvByInput(body.text);

  if (typeof data === "string") {
    return c.text(data);
  }

  return c.json(data);
});

export default app;
