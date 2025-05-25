import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { layananCatatan } from '../services/api';

function Dashboard() {
  const [view, setView] = useState('list'); 
  const [catatan, setCatatan] = useState([]);
  const [activeCatatan, setActiveCatatan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    ambilSemuaCatatan();
  }, []);

  const ambilSemuaCatatan = async () => {
    try {
      setLoading(true);
      const data = await layananCatatan.ambilSemuaCatatan();
      setCatatan(data);
      setError(null);
    } catch (err) {
      setError('Gagal memuat catatan');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewNote = () => {
    setActiveCatatan(null);
    setView('new');
  };

  const handleViewNotes = () => {
    setView('list');
  };

  const handleSelectCatatan = (selectedCatatan) => {
    setActiveCatatan(selectedCatatan);
    setView('edit');
  };

  const handleSaveCatatan = async (dataCatatan) => {
    try {
      setLoading(true);
      if (dataCatatan.id) {
        // Update catatan
        await layananCatatan.updateCatatan(dataCatatan.id, dataCatatan);
      } else {
        // Buat catatan baru
        await layananCatatan.buatCatatan(dataCatatan);
      }
      await ambilSemuaCatatan();
      setView('list');
    } catch (err) {
      setError('Gagal menyimpan catatan');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCatatan = async (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus catatan ini?')) {
      try {
        setLoading(true);
        await layananCatatan.hapusCatatan(id);
        await ambilSemuaCatatan();
      } catch (err) {
        setError('Gagal menghapus catatan');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEditCatatan = (selectedCatatan) => {
    setActiveCatatan(selectedCatatan);
    setView('edit');
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-red-500">{error}</div>
        </div>
      );
    }

    switch (view) {
      case 'new':
        return <NoteForm onSave={handleSaveCatatan} onCancel={handleViewNotes} />;
      case 'edit':
        return <NoteForm initialCatatan={activeCatatan} onSave={handleSaveCatatan} onCancel={handleViewNotes} />;
      case 'list':
      default:
        return (
          <NoteList 
            catatan={catatan} 
            onSelect={handleSelectCatatan} 
            onEdit={handleEditCatatan} 
            onDelete={handleDeleteCatatan} 
          />
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar 
        onNewNote={handleNewNote} 
        onViewNotes={handleViewNotes} 
        activeView={view === 'new' ? 'new' : 'list'} 
      />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default Dashboard;