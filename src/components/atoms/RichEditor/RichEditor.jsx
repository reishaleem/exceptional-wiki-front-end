import React from "react";
//import ReactDOM from "react-dom";
import {
    Editor,
    EditorState,
    RichUtils,
    getDefaultKeyBinding,
    KeyBindingUtil,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { Button } from "react-bootstrap";

export default () => {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );

    // we can add more custom styles later, even updating already existing styles.
    const styleMap = {
        HIGHLIGHT: {
            backgroundColor: "#faed27",
        },
    };

    function toggleInlineStyle(event) {
        event.preventDefault();
        let style = event.target.getAttribute("data-style");
        onChange(RichUtils.toggleInlineStyle(editorState, style));
    }

    function toggleBlockType(event) {
        event.preventDefault();

        let block = event.currentTarget.getAttribute("data-block");
        onChange(RichUtils.toggleBlockType(editorState, block));
    }

    function handleKeyCommand(command, editorState) {
        let newState = RichUtils.handleKeyCommand(editorState, command);

        // If RichUtils.handleKeyCommand didn't find anything, check for our custom strikethrough command and call `RichUtils.toggleInlineStyle` if we find it.
        if (!newState && command === "strikethrough") {
            newState = RichUtils.toggleInlineStyle(
                editorState,
                "STRIKETHROUGH"
            );
        }

        if (newState) {
            onChange(newState);
            return "handled";
        }

        return "not-handled";
    }

    function handleTab(event) {
        onChange(RichUtils.onTab(event, editorState, 4));
    }

    // should we add something for 'tab' so that it will insert a tab or continue in an unordered list?
    function keyBindingFunction(event) {
        if (
            KeyBindingUtil.hasCommandModifier(event) &&
            event.shiftKey &&
            event.key === "_" // the command is ctrl+shift+-, but since shift+- is an underscore, we use an underscore
        ) {
            return "strikethrough";
        }

        // can add shortcuts for stuff like h1 and whatnot later
        // add shortcuts for highlighting and stuff if we keep that.

        return getDefaultKeyBinding(event);
    }

    function onChange(newState) {
        setEditorState(newState);
    }

    return (
        <>
            <div>
                <Button
                    type="primary"
                    data-style="BOLD"
                    key="BOLD"
                    className={
                        editorState.getCurrentInlineStyle().has("BOLD")
                            ? "active"
                            : ""
                    }
                    onMouseDown={toggleInlineStyle}
                    onClick={(event) => event.preventDefault()}
                >
                    Bold
                </Button>
                <Button
                    type="primary"
                    data-style="ITALIC"
                    key="ITALIC"
                    onMouseDown={toggleInlineStyle}
                    onClick={(event) => event.preventDefault()}
                >
                    Italic
                </Button>
                <Button
                    type="primary"
                    data-style="UNDERLINE"
                    key="UNDERLINE"
                    onMouseDown={toggleInlineStyle}
                    onClick={(event) => event.preventDefault()}
                >
                    Underline
                </Button>
                <Button
                    type="primary"
                    data-style="STRIKETHROUGH"
                    key="STRIKETHROUGH"
                    onMouseDown={toggleInlineStyle}
                    onClick={(event) => event.preventDefault()}
                >
                    Strikethrough
                </Button>
                <Button
                    type="primary"
                    data-style="CODE"
                    key="CODE"
                    onMouseDown={toggleInlineStyle}
                    onClick={(event) => event.preventDefault()}
                >
                    Code
                </Button>
                <Button
                    type="primary"
                    data-style="HIGHLIGHT"
                    key="HIGHLIGHT"
                    onMouseDown={toggleInlineStyle}
                    onClick={(event) => event.preventDefault()}
                >
                    Highlight
                </Button>
            </div>
            <div>
                <Button
                    type="primary"
                    data-block="header-one"
                    key="header-one"
                    onMouseDown={toggleBlockType}
                    onClick={(event) => event.preventDefault()}
                >
                    H1
                </Button>
                <Button
                    type="primary"
                    data-block="header-two"
                    key="header-two"
                    onMouseDown={toggleBlockType}
                    onClick={(event) => event.preventDefault()}
                >
                    H2
                </Button>
                <Button
                    type="primary"
                    data-block="header-three"
                    key="header-three"
                    onMouseDown={toggleBlockType}
                    onClick={(event) => event.preventDefault()}
                >
                    H3
                </Button>
                <Button
                    type="primary"
                    data-block="header-four"
                    key="header-four"
                    onMouseDown={toggleBlockType}
                    onClick={(event) => event.preventDefault()}
                >
                    H4
                </Button>
                <Button
                    type="primary"
                    data-block="header-five"
                    key="header-five"
                    onMouseDown={toggleBlockType}
                    onClick={(event) => event.preventDefault()}
                >
                    H5
                </Button>
                <Button
                    type="primary"
                    data-block="header-six"
                    key="header-six"
                    onMouseDown={toggleBlockType}
                    onClick={(event) => event.preventDefault()}
                >
                    H6
                </Button>
                <Button
                    type="primary"
                    data-block="blockquote"
                    key="blockquote"
                    onMouseDown={toggleBlockType}
                    onClick={(event) => event.preventDefault()}
                >
                    Blockquote
                </Button>
                <Button
                    type="primary"
                    data-block="unordered-list-item"
                    key="unordered-list-item"
                    onMouseDown={toggleBlockType}
                    onClick={(event) => event.preventDefault()}
                >
                    UL
                </Button>
                <Button
                    type="primary"
                    data-block="ordered-list-item"
                    key="ordered-list-item"
                    onMouseDown={toggleBlockType}
                    onClick={(event) => event.preventDefault()}
                >
                    OL
                </Button>
            </div>
            <div className="draft-editor-wrapper">
                <Editor
                    onTab={handleTab}
                    customStyleMap={styleMap}
                    editorState={editorState}
                    onChange={onChange}
                    handleKeyCommand={handleKeyCommand}
                    keyBindingFn={keyBindingFunction}
                />
            </div>
        </>
    );
};
