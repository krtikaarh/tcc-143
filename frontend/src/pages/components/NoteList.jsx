import React from 'react';
import ItemCatatan from './NoteItem';

const NoteList = ({ catatan, onSelect, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-primary mb-2">My Notes</h2>
      </div>
      
      {catatan.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          <p>Belum ada catatan. Klik "New Notes" untuk membuat catatan baru.</p>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h3 className="text-sm text-gray-500 mb-4">Terakhir dilihat</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {catatan.slice(0, 4).map(item => (
                <ItemCatatan
                  key={item.id}
                  catatan={item}
                  onClick={() => onSelect(item)}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              ))}
            </div>
          </div>
          
          {catatan.length > 4 && (
            <div>
              <h3 className="text-sm text-gray-500 mb-4">Semua catatan</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {catatan.slice(4).map(item => (
                  <ItemCatatan
                    key={item.id}
                    catatan={item}
                    onClick={() => onSelect(item)}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NoteList;