export default function addArticleToSubCategory({ firebase, state, props }) {
  const subCategory = state.get("app.currentSubCategory");
  const title = state.get("edit.addForm.text.value");

  return firebase.set(`articlesInCategory.${subCategory}.${props.key}`, {
    title: title
  });
}
