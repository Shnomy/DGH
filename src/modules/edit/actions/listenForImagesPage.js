export default function listenForImagesPage({ firebase, props, state }) {
  return firebase.onChildAdded(`images.pages.${props.page}`, "edit.imageAdded");
}
