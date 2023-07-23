export function getTapCodeFromUser() {
    
    let tapCount = 0;
  
    return new Promise((resolve, reject) => {
    
      const tapArea = document.getElementById('tapArea');
  
      tapArea.addEventListener('click', () => {
        tapCount++; 
      });
      const submitBtn = document.getElementById('submitBtn');

      submitBtn.addEventListener('click', () => {
        resolve(tapCount);
      });
  
    });
  
  }