export default function saveArticle({ firebase, state }) {
  const articleID = state.get("edit.article");

  return firebase.transaction(`articles.${articleID}`, article => {
    if (article === null) {
      return false;
    }
    return {
      content: state.get("edit.content"),
      datetimeCreated: article.datetimeCreated,
      author: article.author,
      title: article.title,
      datetimeUpdated: Date.now()
    };
  });
}
