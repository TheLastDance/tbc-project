"use client"
import "./TextEditor.css"
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { Loader } from "../Loaders/Loader/Loader";

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

interface IProps {
  content: string,
  setContent: React.Dispatch<React.SetStateAction<string>>,
}

export function TextEditor({ content, setContent }: IProps) {

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      [{ align: [] }],
      [{ color: [] }],
      ['code-block'],
      ['clean'],
    ],
  };

  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'align',
    'color',
    'code-block',
  ];


  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <div className="textEditor">
      <div className="placeholder">
        <Loader />
      </div>
      <QuillEditor
        value={content}
        onChange={handleEditorChange}
        modules={quillModules}
        formats={quillFormats}
      />
    </div>
  );
}
