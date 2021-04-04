import * as Y from "yjs";
import * as monaco from "monaco-editor";

import { MonacoBinding } from "y-monaco";
import { WebrtcProvider } from "y-webrtc";

window.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === "json") {
      return "/monaco/dist/json.worker.bundle.js";
    }
    if (label === "css") {
      return "/monaco/dist/css.worker.bundle.js";
    }
    if (label === "html") {
      return "/monaco/dist/html.worker.bundle.js";
    }
    if (label === "typescript" || label === "javascript") {
      return "/monaco/dist/ts.worker.bundle.js";
    }
    return "/monaco/dist/editor.worker.bundle.js";
  },
};

window.addEventListener("load", () => {
  const ydoc = new Y.Doc();
  const provider = new WebrtcProvider("monaco-demo-room", ydoc);
  const type = ydoc.getText("monaco");
  const editor = monaco.editor.create(
    document.getElementById("monaco-editor"),
    {
      value: "",
      language: "javascript",
      theme: "vs-dark",
    }
  );
  const monacoBinding = new MonacoBinding(
    type,
    editor.getModel(),
    new Set([editor]),
    provider.awareness
  );
  window.example = { provider, ydoc, ytext, monacoBinding };
});
