import uuid from 'uuid/v4';

export default function uploadImage({ firebase, props }) {
  return firebase.put('images', props.file, {
    filename: `${uuid()}.${props.file.name.split('.').pop()}`
  });
};
