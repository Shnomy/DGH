export default function pushImage({props, firebase, state}) {
  return firebase.push(`images.${state.get("edit.page")}`, {
    url: props.filename
  });
};
