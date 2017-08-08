export default function listenForImagesArticle({ firebase, props, state }) {
  return firebase.onChildAdded(
    `images.articles.${props.article}`,
    "edit.imageAdded"
  );
}
