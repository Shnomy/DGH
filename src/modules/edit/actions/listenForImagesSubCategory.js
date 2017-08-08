export default function listenForImagesSubCategory({ firebase, props, state }) {
  return firebase.onChildAdded(
    `images.subCategories.${props.subCategory}`,
    "edit.imageAdded"
  );
}
