import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import '../styles/ckeditor.module.scss';

class Ckeditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        postbody: ''
    };
  }

 

  render() {
    return (
      <CKEditor
        editor={ClassicEditor}
        data=""
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            this.props.editordata(data);
        } }
       
      />
    );
  }
}

export default Ckeditor;


