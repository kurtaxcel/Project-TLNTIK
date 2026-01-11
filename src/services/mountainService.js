import ApiService from './api.js';

class MountainService {
  constructor() {
    this.endpoint = '/mountains';
  }

  // Get all mountains
  async getAllMountains() {
    try {
      const response = await ApiService.get(this.endpoint);
      
      // Handle different response structures from insforge.dev
      if (response.data && Array.isArray(response.data)) {
        return response.data;
      } else if (Array.isArray(response)) {
        return response;
      } else if (response.mountains && Array.isArray(response.mountains)) {
        return response.mountains;
      } else {
        console.warn('Unexpected API response structure:', response);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch mountains:', error);
      throw error;
    }
  }

  // Get mountain by ID
  async getMountainById(id) {
    try {
      const response = await ApiService.get(`${this.endpoint}/${id}`);
      return response.data || response;
    } catch (error) {
      console.error(`Failed to fetch mountain with ID ${id}:`, error);
      throw error;
    }
  }

  // Get mountain by slug
  async getMountainBySlug(slug) {
    try {
      const response = await ApiService.get(`${this.endpoint}?slug=${slug}`);
      const mountains = response.data || response;
      return Array.isArray(mountains) ? mountains[0] : mountains;
    } catch (error) {
      console.error(`Failed to fetch mountain with slug ${slug}:`, error);
      throw error;
    }
  }

  // Create new mountain
  async createMountain(mountainData) {
    try {
      const response = await ApiService.post(this.endpoint, mountainData);
      return response.data || response;
    } catch (error) {
      console.error('Failed to create mountain:', error);
      throw error;
    }
  }

  // Update mountain
  async updateMountain(id, mountainData) {
    try {
      const response = await ApiService.put(`${this.endpoint}/${id}`, mountainData);
      return response.data || response;
    } catch (error) {
      console.error(`Failed to update mountain with ID ${id}:`, error);
      throw error;
    }
  }

  // Delete mountain
  async deleteMountain(id) {
    try {
      const response = await ApiService.delete(`${this.endpoint}/${id}`);
      return response;
    } catch (error) {
      console.error(`Failed to delete mountain with ID ${id}:`, error);
      throw error;
    }
  }

  // Validate mountain data structure
  validateMountainData(data) {
    const requiredFields = ['name', 'slug', 'height', 'desc', 'difficulty', 'duration'];
    const missingFields = requiredFields.filter(field => !data[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Validate slug format (lowercase, no spaces, alphanumeric with hyphens)
    const slugRegex = /^[a-z0-9-]+$/;
    if (!slugRegex.test(data.slug)) {
      throw new Error('Slug must be lowercase alphanumeric with hyphens only');
    }

    return true;
  }
}

export default new MountainService();