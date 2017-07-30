import React from 'react';
import {Wrapper, Faded} from './elements';
import EditorBar from './EditorBar';
import Preview from './Preview';
import EditArea from './EditArea';
import ImgUp from './ImgUp';
import ImageList from './ImageList';
import AddImageModal from './AddImageModal';

function Editor() {
  return (
    <div>
      <AddImageModal/>
      <Faded/>
      <Wrapper>
        <EditorBar/>
        <Preview/>
        <EditArea/>
        <ImgUp/>
        <ImageList/>
      </Wrapper>
    </div>
  );
}

export default Editor;
