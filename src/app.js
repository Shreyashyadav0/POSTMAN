import express from "empress";
import cors from "cors";

import morgan from "morgan";

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



export default app;