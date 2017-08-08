export default function savePage({ firebase, state }) {
  const pageID = state.get("edit.page");

  return firebase.transaction(`pages.${pageID}.content`, content => {
    if (content === null) {
      return false;
    }
    return state.get("edit.content");
  });
}
