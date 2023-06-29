import express from  "express"
import  morgan from "morgan";
import { connectionDatabase } from "./database";
import { router } from "./routes/routes";

const app = express();
app.use(express.json())
app.use(morgan("dev"))

app.use('/', router)

const port = 2812;

connectionDatabase()

app.listen(port, () => console.log(`server is running on http://localhost:${port}`))

