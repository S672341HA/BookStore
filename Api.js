// api.js
 
const API_URL = 'mongodb+srv://shashank25041999:Shas1234@cluster0.hcbrmks.mongodb.net/';

export const getAllDocuments = async () => {
  try {
    const response = await fetch(`${API_URL}/documents`);
    return response.json();
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw error;
  }
};

export const addDocument = async (document) => {
  try {
    const response = await fetch(`${API_URL}/documents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
    return response.json();
  } catch (error) {
    console.error('Error adding document:', error);
    throw error;
  }
};

export const updateDocument = async (id, updatedDocument) => {
  try {
    const response = await fetch(`${API_URL}/documents/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDocument),
    });
    return response.json();
  } catch (error) {
    console.error('Error updating document:', error);
    throw error;
  }
};

export const deleteDocument = async (id) => {
  try {
    const response = await fetch(`${API_URL}/documents/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};
