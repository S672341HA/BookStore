// UpdateDocument.js
import React, { useState } from 'react';
import { updateDocument } from './Api';

function UpdateDocument({ document, onUpdate }) {
  const [updatedDocument, setUpdatedDocument] = useState(document);

  const handleUpdate = async () => {
    try {
      const updated = await updateDocument(updatedDocument._id, updatedDocument);
      onUpdate(updated);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div>
      <h2>Update Document</h2>
      <input
        type="text"
        placeholder="Title"
        value={updatedDocument.title}
        onChange={(e) => setUpdatedDocument({ ...updatedDocument, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Content"
        value={updatedDocument.content}
        onChange={(e) => setUpdatedDocument({ ...updatedDocument, content: e.target.value })}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateDocument;
