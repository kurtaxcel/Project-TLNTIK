// Test utility to verify API integration
import MountainService from '../services/mountainService.js';

export const testApiIntegration = async () => {
  console.log('🧪 Testing API Integration...');
  
  try {
    // Test 1: Fetch all mountains
    console.log('📡 Testing GET /mountains...');
    const mountains = await MountainService.getAllMountains();
    console.log('✅ Successfully fetched mountains:', mountains.length, 'items');
    
    if (mountains.length > 0) {
      console.log('📄 Sample mountain data:', mountains[0]);
      
      // Test 2: Fetch mountain by ID (if available)
      if (mountains[0].id) {
        console.log('📡 Testing GET /mountains/:id...');
        const mountain = await MountainService.getMountainById(mountains[0].id);
        console.log('✅ Successfully fetched mountain by ID:', mountain.name);
      }
      
      // Test 3: Fetch mountain by slug (if available)
      if (mountains[0].slug) {
        console.log('📡 Testing GET /mountains?slug=...');
        const mountain = await MountainService.getMountainBySlug(mountains[0].slug);
        console.log('✅ Successfully fetched mountain by slug:', mountain?.name || 'Not found');
      }
    }
    
    console.log('🎉 API Integration Test Complete!');
    return { success: true, mountains };
    
  } catch (error) {
    console.error('❌ API Integration Test Failed:', error);
    return { success: false, error: error.message };
  }
};

// Test CRUD operations (use with caution in production)
export const testCrudOperations = async () => {
  console.log('🧪 Testing CRUD Operations...');
  
  try {
    // Test data
    const testMountain = {
      name: 'Test Mountain',
      slug: 'test-mountain',
      height: '500 MASL',
      desc: 'This is a test mountain created by the API integration test.',
      image: '/images/test-mountain.jpg',
      difficulty: '2/9',
      duration: '1-2 Hrs'
    };
    
    // Test CREATE
    console.log('📡 Testing POST /mountains...');
    const created = await MountainService.createMountain(testMountain);
    console.log('✅ Successfully created mountain:', created.name);
    
    // Test UPDATE
    if (created.id) {
      console.log('📡 Testing PUT /mountains/:id...');
      const updated = await MountainService.updateMountain(created.id, {
        ...testMountain,
        name: 'Updated Test Mountain'
      });
      console.log('✅ Successfully updated mountain:', updated.name);
      
      // Test DELETE
      console.log('📡 Testing DELETE /mountains/:id...');
      await MountainService.deleteMountain(created.id);
      console.log('✅ Successfully deleted test mountain');
    }
    
    console.log('🎉 CRUD Operations Test Complete!');
    return { success: true };
    
  } catch (error) {
    console.error('❌ CRUD Operations Test Failed:', error);
    return { success: false, error: error.message };
  }
};

// Run basic API test on import (for development)
if (import.meta.env.DEV) {
  // Uncomment the line below to run API test on page load
  // testApiIntegration();
}