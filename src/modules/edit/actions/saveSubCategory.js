export default function savePage({ firebase, state }) {
  const pageID = state.get("edit.page");
  const subID = state.get("edit.subCategory");

  return firebase.transaction(`pages.${pageID}.subCategories.${subID}`, sub => {
    if (sub === null) {
      return false;
    }

    return {
      title: state.get("edit.title"),
      content: state.get("edit.content")
    };
  });
}
