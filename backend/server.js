import app from "./app.js";
import { connectDB } from "./db/db.js";

app.listen(5000, async () => {
  await connectDB();
  console.log("server started on port 5000");
});
