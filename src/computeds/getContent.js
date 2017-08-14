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
      const text = articles[currentArticle]
        ? articles[currentArticle].content
        : false;
      const menu = categories
        ? Object.keys(categories).map(id => {
            return {
              id: id,
              title: categories[id].title,
              url: `/${currentPage}/${currentSubCategory}/${id}`,
              current: id === currentArticle
            };
          })
        : false;
      const menuTitle = pages
        ? pages.subCategories[currentSubCategory].title
        : false;
      return { text, menu, menuTitle };
    } else if (currentSubCategory) {
      const text = pages
        ? pages.subCategories[currentSubCategory].content
        : false;
      const menu = categories
        ? Object.keys(categories).map(id => {
            return {
              id: id,
              title: categories[id].title,
              url: `/${currentPage}/${currentSubCategory}/${id}`
            };
          })
        : false;
      const menuTitle = pages
        ? pages.subCategories[currentSubCategory].title
        : false;
      return { text, menu, menuTitle };
    } else {
      const text = pages ? pages.content : false;
      const menu = pages
        ? pages.subCategories
          ? Object.keys(pages.subCategories).map(id => {
              return {
                id: id,
                title: pages.subCategories[id].title,
                url: `/${currentPage}/${id}`
              };
            })
          : false
        : false;
      const menuTitle = pages ? pages.title : false;
      return { text, menu, menuTitle };
    }
  }
);
