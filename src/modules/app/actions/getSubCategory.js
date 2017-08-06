export default function getPages({ firebase, state, path }) {
  return firebase.value(
    `articleInCategory.${state.get("app.currentSubCategory")}`
  );
}
