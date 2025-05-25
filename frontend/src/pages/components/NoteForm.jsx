import React, { useState, useEffect } from 'react';

const NoteForm = ({ initialCatatan, onSave, onCancel }) => {
  const [catatan, setCatatan] = useState({ title: '', content: '' });

  useEffect(() => {
    if (initialCatatan) {
      setCatatan(initialCatatan);
    }
  }, [initialCatatan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCatatan(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(catatan);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white border border-blue-300 rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={catatan.title}
            onChange={handleChange}
            placeholder="Title"
            className="form-input text-xl font-semibold mb-4"
            required
          />
          
          <textarea
            name="content"
            value={catatan.content}
            onChange={handleChange}
            placeholder="Take a note..."
            className="form-input min-h-[200px] resize-none"
            required
          ></textarea>
          
          <div className="flex justify-center mt-6">
            <button type="submit" className="btn-simpan">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteForm;