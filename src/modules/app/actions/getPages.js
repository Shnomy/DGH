export default function getPages({firebase}) {
  return firebase.value("pages");
}
