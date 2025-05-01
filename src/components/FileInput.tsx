import React from "react";
import FileUploadThin from "../assets/paperclip.svg";

interface FileInputProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}
const FileInput: React.FC<FileInputProps> = ({ file, setFile }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  return (
    <div className="flex items-center">
      <label htmlFor="file-upload" className="cursor-pointer p-2 rounded">
        <img className="w-6" src={FileUploadThin} alt="file upload" />
      </label>
      <input
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        className="hidden"
      />
      {file && <p className="text-gray-600">{file.name}</p>}
    </div>
  );
};

export default FileInput;
