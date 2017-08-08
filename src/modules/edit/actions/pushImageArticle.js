export default function pushImageArticle({ props, firebase, state }) {
  const articleID = state.get("edit.article");

  return firebase.push(`images.articles.${articleID}`, {
    url: props.filename
  });
}
