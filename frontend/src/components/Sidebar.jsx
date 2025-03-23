import React from 'react';

const Sidebar = ({ onNewNote, onViewNotes, activeView }) => {
  return (
    <div className="bg-sidebar h-screen w-64 p-6 flex flex-col">
      <h1 className="text-2xl font-bold text-primary mb-8">Notes App</h1>
      
      <button 
        onClick={onNewNote}
        className={`flex items-center text-primary py-2 px-4 mb-2 rounded-md ${activeView === 'new' ? 'bg-button text-white' : 'bg-white'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        New Notes
      </button>
      
      <button 
        onClick={onViewNotes}
        className={`flex items-center text-primary py-2 px-4 rounded-md ${activeView === 'list' ? 'bg-button text-white' : 'bg-white'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
        My Notes
      </button>
    </div>
  );
};

export default Sidebar;