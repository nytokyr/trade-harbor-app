export const submitContactForm = (formData) => {
    return new Promise((resolve, reject) => {    
      const supportId = Math.floor(Math.random() * 1000000);
  
      setTimeout(() => {
        resolve({
          message: `Thank you ${formData.name}. Your message has been received! We will get back to you shortly.`,
          supportId: supportId, 
        });
      }, 200); 
    });
  };