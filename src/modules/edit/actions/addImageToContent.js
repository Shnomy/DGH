export default function addImageToContent({forms, state}) {
  const form = forms.get('edit.addImageForm');
  const url = state.get('edit.chosenImage');

  const urlString = `url={"${url}"}`;
  const widthString = `width={"${form.width.value}%"}`;
  const floatString = form.position.value ? `float={"${form.position.value}"}` : "";
  const borderRadiusString = `borderRadius={"${form.corners.value}px"}`;
  const borderString = `border={"${form.border.value}px solid ${form.color.value}"}`;
  const altTextString = form.altText.value.length > 0 ? `altText={"${form.altText.value}"}` : "";

  const result = `<Image ${urlString} ${widthString} ${floatString} ${borderString} ${borderRadiusString} ${altTextString}/>`;

  state.set('edit.content', state.get('edit.content') + result);
};
