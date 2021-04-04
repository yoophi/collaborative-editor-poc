import Quill from "quill";

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
