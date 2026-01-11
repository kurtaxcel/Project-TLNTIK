import { useState, useEffect } from 'react';
import MountainService from '../services/mountainService.js';

// Hook for fetching a single mountain by ID or slug
export const useMountain = (identifier, type = 'id') => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMountain = async () => {
    if (!identifier) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      let mountain;
      if (type === 'slug') {
        mountain = await MountainService.getMountainBySlug(identifier);
      } else {
        mountain = await MountainService.getMountainById(identifier);
      }
      setData(mountain);
    } catch (err) {
      console.error(`Failed to fetch mountain by ${type}:`, err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMountain();
  }, [identifier, type]);

  return { 
    data, 
    loading, 
    error, 
    refetch: fetchMountain 
  };
};