export default function listenForImages({firebase, props, state}) {
  return firebase.onChildAdded(`images.${props.page}`, "edit.imageAdded");
};
