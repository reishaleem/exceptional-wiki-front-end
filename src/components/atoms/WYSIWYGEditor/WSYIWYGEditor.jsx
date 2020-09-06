import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./WYSIWYG.css";
import {
    EditorState,
    ContentState,
    convertToRaw,
    convertFromHTML,
} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import { useEffect } from "react";
import draftToHtml from "draftjs-to-html";

export default (props) => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createWithContent(
            ContentState.createFromBlockArray(
                htmlToDraft(props.initValue).contentBlocks
            )
        )
    );

    useEffect(() => {
        console.log(props.initValue);
        const contentBlock = htmlToDraft(props.initValue);
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(
                contentBlock.contentBlocks
            );
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState);
        }
    }, []);

    function onEditorStateChange(newState) {
        setEditorState(newState);
        return props.onChange(
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
        );
    }
    // see if possible to put the basic options we want first, then add an 'additional options' toolbar underneath with stuff like strikethrough
    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
            wrapperClassName="wrapper"
            editorClassName="editor"
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
