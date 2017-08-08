export default function pushImageSubCategory({ props, firebase, state }) {
  const subCategoryID = state.get("edit.subCategory");

  return firebase.push(`images.subCategories.${subCategoryID}`, {
    url: props.filename
  });
}
