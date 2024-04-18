import Database from "../Database/index.js";
import * as dao from './dao.js';

export default function CourseRoutes(app){

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    try{
      const course = await dao.findCourseById(id);
      res.send(course);
    } catch(e) {
      res.status(404).send("Course not found");
      return;
    }
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    console.log(id , course);
    await dao.updateCourse(id, course);
    res.sendStatus(204);
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    await dao.deleteCourse(id);
    res.sendStatus(204);
  });

  app.post("/api/courses", async (req, res) => {
    const course = {
      ...req.body,
      id : Date.now().toString()
    };
    console.log(course);
    await dao.createCourse(course);
    res.send(course);
  });

  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses)
  })


}