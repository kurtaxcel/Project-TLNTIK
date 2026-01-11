import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Mountain } from 'lucide-react';
import { useMountains } from '../hooks/useMountains';
import MountainForm from '../components/admin/MountainForm';

const Admin = () => {
  const { data: mountains, loading, error, createMountain, updateMountain, deleteMountain } = useMountains();
  const [showForm, setShowForm] = useState(false);
  const [editingMountain, setEditingMountain] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddNew = () => {
    setEditingMountain(null);
    setShowForm(true);
  };

  const handleEdit = (mountain) => {
    setEditingMountain(mountain);
    setShowForm(true);
  };

  const handleDelete = async (mountain) => {
    if (window.confirm(`Are you sure you want to delete ${mountain.name}?`)) {
      try {
        await deleteMountain(mountain.id);
      } catch (error) {
        alert('Failed to delete mountain: ' + error.message);
      }
    }
  };

  const handleSave = async (formData) => {
    setIsSubmitting(true);
    try {
      if (editingMountain) {
        await updateMountain(editingMountain.id, formData);
      } else {
        await createMountain(formData);
      }
      setShowForm(false);
      setEditingMountain(null);
    } catch (error) {
      alert('Failed to save mountain: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingMountain(null);
  };

  if (loading) {
    return (
      <main className="bg-mist-500 dark:bg-nature-900 min-h-screen pt-24 pb-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sun-500 mx-auto"></div>
            <p className="mt-4 text-nature-900 dark:text-white">Loading mountains...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-mist-500 dark:bg-nature-900 min-h-screen pt-24 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-serif text-nature-900 dark:text-white mb-2">
              Mountain Administration
            </h1>
            <p className="text-nature-600 dark:text-nature-300">
              Manage the mountain data for the TLNTIK trilogy
            </p>
          </div>
          
          {!showForm && (
            <button
              onClick={handleAddNew}
              className="flex items-center px-6 py-3 bg-sun-500 hover:bg-sun-600 text-white rounded-lg font-medium transition-colors"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Mountain
            </button>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg mb-6">
            <p>{error}</p>
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="mb-8">
            <MountainForm
              mountain={editingMountain}
              onSave={handleSave}
              onCancel={handleCancel}
              isLoading={isSubmitting}
            />
          </div>
        )}

        {/* Mountains List */}
        {!showForm && (
          <div className="space-y-6">
            {mountains && mountains.length > 0 ? (
              mountains.map((mountain) => (
                <motion.div
                  key={mountain.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-nature-800 rounded-2xl p-6 shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      {/* Mountain Image */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-nature-100 dark:bg-nature-700 flex-shrink-0">
                        {mountain.image ? (
                          <img
                            src={mountain.image}
                            alt={mountain.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Mountain className="w-8 h-8 text-nature-400" />
                          </div>
                        )}
                      </div>

                      {/* Mountain Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-serif text-nature-900 dark:text-white">
                            {mountain.name}
                          </h3>
                          <span className="text-sm text-sun-500 font-medium">
                            {mountain.height}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-nature-600 dark:text-nature-300 mb-3">
                          <span>Slug: {mountain.slug}</span>
                          <span>Difficulty: {mountain.difficulty}</span>
                          <span>Duration: {mountain.duration}</span>
                        </div>

                        <p className="text-nature-700 dark:text-nature-200 text-sm line-clamp-2">
                          {mountain.desc}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(mountain)}
                        className="p-2 text-nature-600 hover:text-sun-500 dark:text-nature-300 dark:hover:text-sun-400 transition-colors"
                        title="Edit Mountain"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(mountain)}
                        className="p-2 text-nature-600 hover:text-red-500 dark:text-nature-300 dark:hover:text-red-400 transition-colors"
                        title="Delete Mountain"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <Mountain className="w-16 h-16 text-nature-400 mx-auto mb-4" />
                <h3 className="text-xl font-serif text-nature-900 dark:text-white mb-2">
                  No Mountains Found
                </h3>
                <p className="text-nature-600 dark:text-nature-300 mb-6">
                  Get started by adding your first mountain to the trilogy.
                </p>
                <button
                  onClick={handleAddNew}
                  className="flex items-center px-6 py-3 bg-sun-500 hover:bg-sun-600 text-white rounded-lg font-medium transition-colors mx-auto"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add First Mountain
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Admin;