import { compute } from "cerebral";
import { state } from "cerebral/tags";

export default compute(
  state`app.currentPage`,
  state`app.currentSubCategory`,
  state`app.currentArticle`,
  state`pages.${state`app.currentPage`}`,
  state`articlesInCategory.${state`app.currentSubCategory`}`,
  state`articles`,
  (
    currentPage,
    currentSubCategory,
    currentArticle,
    pages,
    categories,
    articles
  ) => {
    if (currentArticle) {
      const text = articles ? articles[currentArticle].content : false;
      const menu = categories ? categories : false;
      return { text, menu };
    } else if (currentSubCategory) {
      const text = pages
        ? pages.subCategories[currentSubCategory].content
        : false;
      const menu = categories ? categories : false;
      return { text, menu };
    } else {
      const text = pages ? pages.content : false;
      const menu = pages
        ? pages.subCategories ? pages.subCategories : false
        : false;
      return { text, menu };
    }
  }
);
