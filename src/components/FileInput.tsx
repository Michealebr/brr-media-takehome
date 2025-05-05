import React from 'react';
import FileUploadThin from '../assets/paperclip.svg';
import { toast } from 'react-hot-toast';

interface FileInputProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}
const FileInput: React.FC<FileInputProps> = ({ file, setFile }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    // if no selected file exit
    if (!selectedFile) return;

    const allowedFileTypes = ['image/png', 'image/jpeg', 'application/pdf'];
    // if selected file doesnt include one of these files exit and alert what we accept
    if (!allowedFileTypes.includes(selectedFile.type)) {
      setFile(null);
      alert('Only PNG, JPEG, or PDF files are allowed');
      return;
    }
    setTimeout(() => {
      setFile(selectedFile);
      toast.success('upload successful', {
        className: 'text-sm px-4 py-2',
        duration: 3000,
      });
    }, 1000);
  };
  return (
    <div className="flex items-center">
      <label htmlFor="file-upload" className="cursor-pointer p-2 rounded ">
        <span className="sr-only">upload file</span>
        <img className="w-6" src={FileUploadThin} alt="file upload" />
      </label>
      <input
        type="file"
        id="file-upload"
        onChange={handleFileChange}
        accept=".png,.jpg,.jpeg,.pdf"
        className="hidden"
      />
      {file && <p className="text-gray-600">{file.name}</p>}
    </div>
  );
};

export default FileInput;
