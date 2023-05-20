import React from "react";

function Note() {
  return (
    // We should not put react properties or attribute
    //inside the custom component like in App.jsx ->> <Note className="note"/> (don't do that)
    //below syntex is right (line - 8)
    <div className="note">
      <h1>This is the title</h1>
      <p>This is the content</p>
    </div>
  );
}

export default Note;
