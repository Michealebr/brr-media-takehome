import React, { useState } from 'react';
import DropdownComponent from '../components/DropdownComponent';
import FileInput from '../components/FileInput';
import Logo from '../assets/BRRmedia-logo-grey.png';

const CreateTicket = () => {
  const [issueType, setIssueType] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const issueTypeData = [
    { id: 1, value: 'Wi-Fi Connectivity' },
    { id: 2, value: 'Software Installation' },
    { id: 3, value: 'System Crash' },
    { id: 4, value: 'Email Access' },
    { id: 5, value: 'Printer Not Working' },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('issueType', issueType);
    formData.append('message', message);
    if (file) formData.append('file', file);

    // log results
    console.log('Issue Type:', issueType);
    console.log('Message:', message);
    console.log('File:', file);

    console.log('Form data submitted:', formData);

    // clear after submission
    setIssueType('');
    setMessage('');
    setFile(null);

    alert('Ticket submitted successfully!');
  };

  return (
    <>
      <div className="flex h-full items-center justify-center ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl  mx-auto p-4 shadow rounded text-sm bg-[var(--secondary-color)]"
        >
          <div className="flex justify-center mb-10">
            <img className="" src={Logo} alt="BRR media logo" />
          </div>
          <DropdownComponent
            name="Issue type dropdown"
            placeholder="-- Select issue -- "
            values={issueTypeData}
            selectedValue={issueType}
            setSelectedValue={setIssueType}
          />
          <textarea
            name="message"
            placeholder="Please describe your issue or request in as much detail as possible."
            className=" mt-5 w-full  p-2 border rounded border-gray-300 focus:outline-none"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <FileInput file={file} setFile={setFile} />
          <button
            type="submit"
            className="w-full mt-5 bg-[var(--accent-color)] cursor-pointer text-white p-2 rounded "
          >
            Submit Ticket
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTicket;
