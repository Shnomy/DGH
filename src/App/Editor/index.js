import React from 'react';
import {connect} from 'cerebral/react';
import {state} from 'cerebral/tags';
import {Wrapper, Faded} from './elements';
import EditorBar from './EditorBar';
import Preview from './Preview';
import EditArea from './EditArea';
import ImgUp from './ImgUp';
import ImageList from './ImageList';
import AddImageModal from './AddImageModal';

export default connect({
  showAddImageModal: state`edit.showAddImageModal`
}, function Editor({showAddImageModal}) {
  return (
    <div>
      {showAddImageModal ? <AddImageModal/> : null}
      {showAddImageModal ? <Faded/> : null}
      <Wrapper>
        <EditorBar/>
        <Preview/>
        <EditArea/>
        <ImgUp/>
        <ImageList/>
      </Wrapper>
    </div>
  );
});
