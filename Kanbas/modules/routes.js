import db from "../Database/index.js";
import * as dao from "./dao.js";
function ModuleRoutes(app) {
  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.updateModule(mid, req.body);
    res.sendStatus(204);
  });

  app.delete("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    await dao.deleteModule(mid);
    res.sendStatus(200);
  });

  app.post("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
    };
    const createdModule = await dao.createModule(cid, newModule);
    res.send(createdModule);
  });

  app.get("/api/courses/:cid/modules", async (req, res) => {
    const { cid } = req.params;
    console.log(cid)
    res.send(await dao.findAllModules(cid));
    // res.send(modules);
  });

}
export default ModuleRoutes;