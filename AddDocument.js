// AddDocument.js
import React, { useState } from 'react';
import { addDocument } from './Api';

function AddDocument({ onAdd }) {
  const [newDocument, setNewDocument] = useState({ title: '', content: '' });

  const handleAdd = async () => {
    try {
      const addedDocument = await addDocument(newDocument);
      onAdd(addedDocument);
      setNewDocument({ title: '', content: '' });
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  return (
    <div>
      <h2>Add Document</h2>
      <input
        type="text"
        placeholder="Title"
        value={newDocument.title}
        onChange={(e) => setNewDocument({ ...newDocument, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Content"
        value={newDocument.content}
        onChange={(e) => setNewDocument({ ...newDocument, content: e.target.value })}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddDocument;
