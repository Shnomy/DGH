export default function getArticle({ firebase, state }) {
  return firebase.value(`articles.${state.get("app.currentArticle")}`);
}
