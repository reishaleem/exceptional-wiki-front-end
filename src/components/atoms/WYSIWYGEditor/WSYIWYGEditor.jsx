import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertFromHTML } from "draft-js";

export default ({ initValue }) => {
  const [editorState, setEditorState] = useState(() =>
    // EditorState.createWithContent(
    //   ContentState.createFromText(initValue) // is this right, though? Don't think it is. If someone saved text that has styles and stuff, we'd need to save that, but ignoring for now.
    // )
    EditorState.createEmpty()
  );

  function onChange(newState) {
    setEditorState(newState);
  }
  // see if possible to put the basic options we want first, then add an 'additional options' toolbar underneath with stuff like strikethrough
  return (
    <Editor
      editorState={editorState}
      onEditorStateChange={onChange}
      wrapperClassName="draft-editor-wrapper"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      toolbar={{
        options: [
          "inline",
          "link",
          "colorPicker",
          "textAlign",
          "blockType",
          "image",
          "list",
          "embedded",
        ],
        inline: { options: ["bold", "italic", "underline"] },
        blockType: {
          inDropdown: false,
          options: ["H1", "H2", "H3"],
        },
        fontSize: { options: [16] },
        link: { options: ["link"] },
        list: { options: ["unordered", "ordered"] },
      }}
    />
  );
};
