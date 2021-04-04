import * as Y from "yjs";

import Quill from "quill";
import { QuillBinding } from "y-quill";
import QuillCursors from "quill-cursors";
import { WebrtcProvider } from "y-webrtc";

Quill.register("modules/cursors", QuillCursors);
const quill = new Quill(document.querySelector("#editor"), {
  modules: {
    cursors: true,
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["image", "code-block"],
    ],
    history: {
      userOnly: true,
    },
  },
  placeholder: "Start collaborating...",
  theme: "snow",
});

const ydoc = new Y.Doc();
const provider = new WebrtcProvider("quill-demo-room", ydoc);
const ytext = ydoc.getText("quill");
const binding = new QuillBinding(ytext, quill, provider.awareness);

window.addEventListener("blur", () => {
  quill.blur();
});
