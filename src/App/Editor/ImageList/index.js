import React from 'react';
import {connect} from 'cerebral/react';
import {ImageListWrapper, StyledImage} from './elements';
import {state} from 'cerebral/tags';

export default connect({
  images: state`edit.images`
}, function ImageList({images}) {
  const imageComponents = Object.keys(images || {}).map((imageID) => {
    return (
      <StyledImage key={imageID} url={images[imageID].url}/>
    );
  });

  return (
    <ImageListWrapper>
      {imageComponents}
    </ImageListWrapper>
  );
});
