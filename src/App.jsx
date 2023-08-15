import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import uploadFile from "./services/api";

function App() {
  const [file, setFile] = useState();
  const [result, setResult] = useState();

  const fileinput = useRef();

  useEffect(() => {
    async function getImage() {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file]);

  function uploadClick() {
    fileinput.current.click();
  }

  return (
    <>
      <div className="container">
        <h1>Upload your file</h1>
        <p>Upload and share the download link.</p>

        <button className="btn" onClick={() => uploadClick()}>
          <AiOutlineCloudUpload className="icon" />
        </button>
        <input
          type="file"
          ref={fileinput}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target="_blank" rel="noreferrer">
          {result}
        </a>
      </div>
    </>
  );
}

export default App;
