const users = [
    { username: 'user1', password: 'password1', id: 1 },
    { username: 'user2', password: 'password2', id: 2 },
    // Add more users as needed
  ];
  
  // Simulated login function
  export const login = (username, password) => {
    return new Promise((resolve, reject) => {
      // Simulate a delay to mimic an API call
      setTimeout(() => {
        const user = users.find((u) => u.username === username && u.password === password);
        if (user) {
          resolve(user); // Successfully logged in
        } else {
          reject(new Error('Invalid username or password')); // Login failed
        }
      }, 200); 
    });
  };
 
