import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, X, AlertCircle } from 'lucide-react';

const MountainForm = ({ mountain = null, onSave, onCancel, isLoading = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    height: '',
    desc: '',
    image: '',
    difficulty: '',
    duration: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (mountain) {
      setFormData({
        name: mountain.name || '',
        slug: mountain.slug || '',
        height: mountain.height || '',
        desc: mountain.desc || '',
        image: mountain.image || '',
        difficulty: mountain.difficulty || '',
        duration: mountain.duration || ''
      });
    }
  }, [mountain]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Mountain name is required';
    }

    if (!formData.slug.trim()) {
      newErrors.slug = 'Slug is required';
    } else if (!/^[a-z0-9-]+$/.test(formData.slug)) {
      newErrors.slug = 'Slug must be lowercase alphanumeric with hyphens only';
    }

    if (!formData.height.trim()) {
      newErrors.height = 'Height is required';
    }

    if (!formData.desc.trim()) {
      newErrors.desc = 'Description is required';
    }

    if (!formData.difficulty.trim()) {
      newErrors.difficulty = 'Difficulty is required';
    }

    if (!formData.duration.trim()) {
      newErrors.duration = 'Duration is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await onSave(formData);
    } catch (error) {
      console.error('Failed to save mountain:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generate slug from name
    if (name === 'name') {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setFormData(prev => ({
        ...prev,
        slug
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-strong dark:glass-strong-dark rounded-2xl p-8 backdrop-blur-xl border border-white/20 shadow-glass-xl"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif text-nature-900 dark:text-white">
          {mountain ? 'Edit Mountain' : 'Add New Mountain'}
        </h2>
        <button
          onClick={onCancel}
          className="p-2 text-nature-600 hover:text-nature-900 dark:text-nature-300 dark:hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mountain Name */}
          <div>
            <label className="block text-sm font-medium text-nature-900 dark:text-white mb-2">
              Mountain Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-white/20 dark:border-white/10 focus:border-sun-500'
              } glass-subtle dark:glass-subtle-dark backdrop-blur-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sun-500/20 transition-all`}
              placeholder="e.g., Mt. Talamitam"
            />
            {errors.name && (
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.name}
              </div>
            )}
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-nature-900 dark:text-white mb-2">
              Slug *
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.slug 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-nature-200 dark:border-nature-600 focus:border-sun-500'
              } bg-white dark:bg-nature-700 text-nature-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sun-500/20 transition-colors`}
              placeholder="e.g., talamitam"
            />
            {errors.slug && (
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.slug}
              </div>
            )}
          </div>

          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-nature-900 dark:text-white mb-2">
              Height *
            </label>
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.height 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-nature-200 dark:border-nature-600 focus:border-sun-500'
              } bg-white dark:bg-nature-700 text-nature-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sun-500/20 transition-colors`}
              placeholder="e.g., 630 MASL"
            />
            {errors.height && (
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.height}
              </div>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-nature-900 dark:text-white mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-nature-200 dark:border-nature-600 focus:border-sun-500 bg-white dark:bg-nature-700 text-nature-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sun-500/20 transition-colors"
              placeholder="e.g., /images/mt-talamitam.jpg"
            />
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-sm font-medium text-nature-900 dark:text-white mb-2">
              Difficulty *
            </label>
            <input
              type="text"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.difficulty 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-nature-200 dark:border-nature-600 focus:border-sun-500'
              } bg-white dark:bg-nature-700 text-nature-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sun-500/20 transition-colors`}
              placeholder="e.g., 3/9"
            />
            {errors.difficulty && (
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.difficulty}
              </div>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-nature-900 dark:text-white mb-2">
              Duration *
            </label>
            <input
              type="text"
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.duration 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-nature-200 dark:border-nature-600 focus:border-sun-500'
              } bg-white dark:bg-nature-700 text-nature-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sun-500/20 transition-colors`}
              placeholder="e.g., 2-3 Hrs"
            />
            {errors.duration && (
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.duration}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-nature-900 dark:text-white mb-2">
            Description *
          </label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleInputChange}
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.desc 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-nature-200 dark:border-nature-600 focus:border-sun-500'
            } bg-white dark:bg-nature-700 text-nature-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sun-500/20 transition-colors resize-vertical`}
            placeholder="Describe the mountain, its features, and hiking experience..."
          />
          {errors.desc && (
            <div className="flex items-center mt-2 text-red-500 text-sm">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.desc}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4 pt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 text-nature-600 dark:text-nature-300 hover:text-nature-900 dark:hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center px-6 py-3 bg-sun-500 hover:bg-sun-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5 mr-2" />
            {isLoading ? 'Saving...' : 'Save Mountain'}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default MountainForm;