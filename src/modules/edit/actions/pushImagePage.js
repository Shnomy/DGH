export default function pushImagePage({ props, firebase, state }) {
  const pageID = state.get("edit.page");

  return firebase.push(`images.pages.${pageID}`, {
    url: props.filename
  });
}
