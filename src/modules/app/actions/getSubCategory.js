export default function getPages({ firebase, state, path }) {
  return firebase.value(
    `articlesInCategory.${state.get("app.currentSubCategory")}`
  );
}
