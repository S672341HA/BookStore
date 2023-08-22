// ListDocuments.js
import React, { useEffect, useState } from 'react';
import { getAllDocuments } from './Api';

function ListDocuments({ onUpdate, onDelete }) {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    async function fetchDocuments() {
      try {
        const data = await getAllDocuments();
        setDocuments(data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    }

    fetchDocuments();
  }, [onUpdate, onDelete]);

  return (
    <div>
      <h2>List Documents</h2>
      <ul>
        {documents.map((document) => (
          <li key={document._id}>
            <span>{document.title}</span>
            <span>{document.content}</span>
            <button onClick={() => onUpdate(document)}>Update</button>
            <button onClick={() => onDelete(document._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListDocuments;
