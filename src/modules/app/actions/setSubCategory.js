export default function setPages({ props, state }) {
  state.set(
    `articlesInCategory.${state.get("app.currentSubCategory")}`,
    props.value || {}
  );
}
