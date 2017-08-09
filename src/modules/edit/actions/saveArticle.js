export default function saveArticle({ firebase, state }) {
  const articleID = state.get("edit.article");

  const articlePromise = firebase.transaction(
    `articles.${articleID}`,
    article => {
      if (article === null) {
        return false;
      }
      return {
        content: state.get("edit.content"),
        datetimeCreated: article.datetimeCreated,
        author: article.author,
        title: state.get("edit.title"),
        datetimeUpdated: Date.now()
      };
    }
  );

  const partOfPromise = firebase.transaction(`articlesInCategory`, cats => {
    if (cats === null) {
      return false;
    }

    const articleID = state.get("edit.article");

    Object.keys(cats).forEach(catKey => {
      if (cats[catKey][articleID]) {
        cats[catKey][articleID].title = state.get("edit.title");
      }
    });
    return cats;
  });

  return Promise.all([articlePromise, partOfPromise]);
}
