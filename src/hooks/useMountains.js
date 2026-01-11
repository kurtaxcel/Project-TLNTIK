import { useState, useEffect } from 'react';
import MountainService from '../services/mountainService.js';
import { mountainsData } from '../data/mountains';

export const useMountains = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMountains = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const mountains = await MountainService.getAllMountains();
      setData(mountains);
    } catch (err) {
      console.error("API Fetch Error:", err);
      console.log("Falling back to mock data");
      // Fallback to mock data when API fails
      setData(mountainsData);
      setError(null); // Clear error since we have fallback data
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMountains();
  }, []);

  // Return additional methods for CRUD operations
  return { 
    data, 
    loading, 
    error, 
    refetch: fetchMountains,
    // CRUD operations
    createMountain: async (mountainData) => {
      try {
        const newMountain = await MountainService.createMountain(mountainData);
        await fetchMountains(); // Refresh the list
        return newMountain;
      } catch (err) {
        setError(err.message);
        throw err;
      }
    },
    updateMountain: async (id, mountainData) => {
      try {
        const updatedMountain = await MountainService.updateMountain(id, mountainData);
        await fetchMountains(); // Refresh the list
        return updatedMountain;
      } catch (err) {
        setError(err.message);
        throw err;
      }
    },
    deleteMountain: async (id) => {
      try {
        await MountainService.deleteMountain(id);
        await fetchMountains(); // Refresh the list
      } catch (err) {
        setError(err.message);
        throw err;
      }
    }
  };
};