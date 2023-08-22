// DeleteDocument.js
import React from 'react';
import { deleteDocument } from './Api';

function DeleteDocument({ documentId, onDelete }) {
  const handleDelete = async () => {
    try {
      await deleteDocument(documentId);
      onDelete(documentId);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div>
      <h2>Delete Document</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteDocument;
