import React from 'react';
import {connect} from 'cerebral/react';
import {ImageListWrapper, StyledImage} from './elements';
import {state, signal} from 'cerebral/tags';

export default connect({
  images: state`edit.images`,
  imageClicked: signal`edit.imageClicked`,
}, function ImageList({images, imageClicked}) {
  const imageComponents = Object.keys(images || {}).map((imageID) => {
    return (
      <StyledImage
        key={imageID}
        url={images[imageID].url}
        onClick={() => imageClicked({imageID})}
      />
    );
  });

  return (
    <ImageListWrapper>
      {imageComponents}
    </ImageListWrapper>
  );
});
