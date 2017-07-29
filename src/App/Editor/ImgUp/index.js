import React from 'react';
import {connect} from 'cerebral/react';
import {ImgUpImage, ImputStyle} from './elements';
import {signal} from 'cerebral/tags';

export default connect({
  imageSelected: signal`edit.imageSelected`,
}, function ImgUp({imageSelected}) {
  return (
    <ImgUpImage>
      <ImputStyle
        type={"file"}
        accept={"image/*"}
        onChange={(e) => imageSelected({file: e.target.files[0]})}
      />
    </ImgUpImage>
  );
});
