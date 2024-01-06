// Preload function
function preload() {
    // Preload code
  } 
  
  // Setup function
  function setup() {
  
    // Create canvas
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    
    // Center canvas
    canvas.style.position = 'absolute';
    canvas.style.top = '50%';
    canvas.style.left = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
  
    // Set dimensions
    canvas.width = 500;
    canvas.height = 500;
    
    // Get context
    const ctx = canvas.getContext('2d');
  }
  
  // Draw function
  function draw() {
    // Draw code 
  }
  
  // Save image function
  function saveImage() {
  
    // Get canvas data URL
    let imageURL = canvas.toDataURL();
    
    // Code to save image
  }
  
  // Click handler
  document.getElementById('saveBtn').addEventListener('click', saveImage);
  