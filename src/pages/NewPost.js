import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";

import "./NewPost.css";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

const NewPost = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [body, setBody] = useState();
  const history = useHistory();

  async function handleSubmit() {
    // save state to database and redirect
    await fetch("/api/post", {
      method: "post",
      body: JSON.stringify({ title, description, body }),
    });

    history.push("/");
  }

  return (
    <div className="section">
      <div className="columns">
        <div className="column is-half">
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                name="title"
                type="text"
                placeholder="Post Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="column is-half">
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                name="description"
                className="textarea"
                placeholder="e.g. Hello world"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="field">
        <label className="label">Post</label>
        <div className="editor">
          <MdEditor
            onChange={(e) => setBody(e.html)}
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
          ></MdEditor>
        </div>
      </div>
      <button
        className="button is-primary is-pulled-right"
        onClick={handleSubmit}
      >
        Publish
      </button>
    </div>
  );
};

export default NewPost;

// class Admin extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { title: "", description: "", body: "" };

//     this.handleEditorChange = this.handleEditorChange.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleInputChange(event) {
//     const value = event.target.value;
//     const name = event.target.name;

//     this.setState({ [name]: value });
//   }

//   handleEditorChange({ html, text }) {
//     this.setState({ body: html });
//   }

//   async handleSubmit() {
//     // save state to database and redirect
//     const response = await fetch("/api/post", {
//       method: "post",
//       body: JSON.stringify(this.state),
//     });
//     const json = await response.json();
//     console.log(json);
//   }

//   render() {
//     return (
//       <div className="section">
//         <div className="columns">
//           <div className="column is-half">
//             <div className="field">
//               <label className="label">Title</label>
//               <div className="control">
//                 <input
//                   className="input"
//                   name="title"
//                   type="text"
//                   placeholder="Post Title"
//                   onChange={this.handleInputChange}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="column is-half">
//             <div className="field">
//               <label className="label">Description</label>
//               <div className="control">
//                 <textarea
//                   name="description"
//                   className="textarea"
//                   placeholder="e.g. Hello world"
//                   onChange={this.handleInputChange}
//                 ></textarea>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="field">
//           <label className="label">Post</label>
//           <div className="editor">
//             <MdEditor
//               onChange={this.handleEditorChange}
//               style={{ height: "500px" }}
//               renderHTML={(text) => mdParser.render(text)}
//             ></MdEditor>
//           </div>
//         </div>
//         <button
//           className="button is-primary is-pulled-right"
//           onClick={this.handleSubmit}
//         >
//           Publish
//         </button>
//       </div>
//     );
//   }
// }

// export default Admin;
