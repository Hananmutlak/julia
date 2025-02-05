document.addEventListener('DOMContentLoaded', function () {
    console.log('Webbplatsen har laddats!');
    

    

    const images = document.querySelectorAll('img');
  
    images.forEach(img => {
    
      img.src = img.src.replace('.jpg', '.webp');  // استبدل الصيغة إلى WebP
      img.src = img.src.replace('.png', '.avif');  // استبدل الصيغة إلى AVIF
    });
  
    console.log('Optimized images applied!');
  });
  