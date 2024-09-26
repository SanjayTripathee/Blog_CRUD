//define table name

import { model } from "mongoose";
import blogSchema from "./blogSchema.js";


export let Blog = model("Blog", blogSchema);



