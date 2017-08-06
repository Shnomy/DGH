import { parallel } from "cerebral";
import getPages from "./getPages";
import getSubcategory from "./getSubCategory";

export default parallel("getData", [getPages, getSubcategory]);
