
import { useState } from 'react';
import './App.css';
import ReactQuil, {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);
function App() {
  const [body , setBody] = useState()
  const handlebody = (value) => {
    setBody(value)
    console.log(body)
  }
  return (

<div>
  <ReactQuil
  modules={App.module}
  formats={App.formats}
  onChange={handlebody}
  value={body}
  />
</div>

  );
}


App.module = {
  toolbar: [
    [{header: "1"}, {header: "2"}, {header: [3,4,5,6]},{font: []} ],
    [{size: []}],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{list: "ordered"}, {list:"bullet"}],
    ["link", "image", "video"],
    ["clear"],
    ["code-block"]
   ],
    imageResize:{
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize', 'Toolbar'],
      displaySize: true,
      handleStyles: {
        backgroundColor: 'black',
        border: 'none',
        color: "white"
        // other camelCase styles for size display
    }
    },
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false
    },
 
};

App.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "stike",
  "blockquote",
  "list",
  "billet",
  "link",
  "image",
  "video",
  "code-block"
]
export default App;
