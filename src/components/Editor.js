import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "./Editor.css";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

const Editor = ({ editorBody, onEditorChange }) => {
  async function handleFileUpload(image) {
    // create a new form data object that will hold the image
    let formData = new FormData();
    formData.append("file_upload", image, image.name);

    // send the form data object to the server (uploads file)
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });
    const json = await response.json();
    return json.imageUrl;
  }

  return (
    <div className="editor">
      <MdEditor
        value={editorBody}
        onChange={(e) => onEditorChange(e.text)}
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onImageUpload={(image) => handleFileUpload(image)}
      ></MdEditor>
    </div>
  );
};

export default Editor;
