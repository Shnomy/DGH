export default function savePage({ firebase, state }) {
  const pageID = state.get("edit.page");
  const subCategoryID = state.get("edit.subCategory");

  return firebase.transaction(
    `pages.${pageID}.subCategories.${subCategoryID}.content`,
    content => {
      if (content === null) {
        return false;
      }
      return state.get("edit.content");
    }
  );
}
