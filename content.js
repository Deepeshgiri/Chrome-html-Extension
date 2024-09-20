document.addEventListener('DOMContentLoaded', function() {
   
    console.log('DOM loaded ');
    
    // Add style file
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css'; 
    document.head.appendChild(link);
    

  
});

