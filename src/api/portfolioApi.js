// Clear localStorage when the application launches
localStorage.clear();

// Initialize the portfolio and funds
let portfolio = {
  AAPL: { quantity: 100, averagePrice: 150.45 },
  TSLA: { quantity: 50, averagePrice: 275.02 },
  AMZN: { quantity: 30, averagePrice: 145.47 },
};

let funds = 10000;

// Save the initial portfolio and funds to localStorage
localStorage.setItem('portfolio', JSON.stringify(portfolio));
localStorage.setItem('funds', funds.toString());

// Endpoint for getting the user's fund value
export const getUserFunds = () => {
  return new Promise((resolve) => {
    resolve(funds);
  });
};

// Endpoint for getting the current portfolio
export const getPortfolio = () => {
  return new Promise((resolve) => {
    resolve(portfolio);
  });
};

// Endpoint for buying actions
export const buyAction = (symbol, quantity, price) => {
  return new Promise((resolve, reject) => {
    const totalCost = quantity * price;
    if (funds >= totalCost) {
      if (portfolio[symbol]) {
        // If the action already exists in the portfolio, update the quantity and average price
        portfolio[symbol].quantity += quantity;
        portfolio[symbol].averagePrice =
          ((portfolio[symbol].averagePrice * (portfolio[symbol].quantity - quantity)) + (quantity * price)) / portfolio[symbol].quantity;
      } else {
        // If the action doesn't exist in the portfolio yet, add it
        portfolio[symbol] = { quantity, averagePrice: price };
      }
      funds -= totalCost;
      // Update localStorage
      localStorage.setItem('portfolio', JSON.stringify(portfolio));
      localStorage.setItem('funds', funds.toString());
      resolve({ success: true });
    } else {
      reject({ success: false, message: 'Insufficient funds' });
    }
  });
};

// Endpoint for selling actions
export const sellAction = (symbol, quantity, price) => {
  return new Promise((resolve, reject) => {
    if (portfolio[symbol] && portfolio[symbol].quantity >= quantity) {
      const saleValue = quantity * price;
      funds += saleValue;
      portfolio[symbol].quantity -= quantity;
      if (portfolio[symbol].quantity === 0) {
        delete portfolio[symbol]; // Remove the action from the portfolio if the quantity reaches 0
      }
      // Update localStorage
      localStorage.setItem('portfolio', JSON.stringify(portfolio));
      localStorage.setItem('funds', funds.toString());
      resolve({ success: true });
    } else {
      reject({ success: false, message: 'Action not found or insufficient quantity' });
    }
  });
};

export const checkIfActionExistsInPortfolio = async (symbol) => {
  try {
    // Get the current portfolio data
    const portfolio = await getPortfolio();

    // Check if the action (symbol) exists in the portfolio
    return !!portfolio[symbol]; // Returns true if the action exists, otherwise false
  } catch (error) {
    console.error('Error checking if action exists in portfolio:', error);
    throw error; // You can handle or rethrow the error as needed
  }
};