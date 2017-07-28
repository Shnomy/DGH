import React from 'react';
import {Wrapper} from './elements';
import EditorBar from './EditorBar';
import Preview from './Preview';
import EditArea from './EditArea';
import ImgUp from './ImgUp';
import ImageList from './ImageList';

function Editor() {
  return (
    <Wrapper>
      <EditorBar/>
      <Preview/>
      <EditArea/>
      <ImgUp/>
      <ImageList/>
    </Wrapper>
  );
}

export default Editor;
