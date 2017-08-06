import { parallel } from "cerebral";
import getPages from "./getPages";
import getSubcategory from "./getSubCategory";
import getArticle from "./getArticle";

export default parallel("getData", [getPages, getSubcategory, getArticle]);
