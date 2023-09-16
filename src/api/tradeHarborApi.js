// Sample data for actions
const mostActiveByShareVolume = [
    {
      symbol: "AAL",
      name: "American Airlines Group, Inc.",
      lastSalePrice: "$13.26",
      lastSaleChange: "-0.04",
      change: "20277806",
      deltaIndicator: "down",
    },
    {
      symbol: "TSLA",
      name: "Tesla, Inc.",
      lastSalePrice: "$275.02",
      lastSaleChange: "+3.72",
      change: "76045374",
      deltaIndicator: "up",
    },
    {
      symbol: "AMZN",
      name: "Amazon.com, Inc.",
      lastSalePrice: "$145.47",
      lastSaleChange: "+0.62",
      change: "35004218",
      deltaIndicator: "up",
    },
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      lastSalePrice: "$175.94",
      lastSaleChange: "+1.73",
      change: "34455229",
      deltaIndicator: "up",
    },
    {
      symbol: "ARM",
      name: "Arm Holdings plc",
      lastSalePrice: "$60.30",
      lastSaleChange: "+0.21",
      change: "80599581",
      deltaIndicator: "up",
    },
    {
      symbol: "AMD",
      name: "Advanced Micro Devices, Inc.",
      lastSalePrice: "$107.32",
      lastSaleChange: "-0.38",
      change: "30114734",
      deltaIndicator: "down",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      lastSalePrice: "$138.52",
      lastSaleChange: "+1.81",
      change: "12814155",
      deltaIndicator: "up",
    },
    {
      symbol: "INTC",
      name: "Intel Corporation",
      lastSalePrice: "$38.84",
      lastSaleChange: "+0.13",
      change: "15507692",
      deltaIndicator: "up",
    },
    {
      symbol: "IOVA",
      name: "Iovance Biotherapeutics, Inc.",
      lastSalePrice: "$4.79",
      lastSaleChange: "-0.64",
      change: "14029782",
      deltaIndicator: "down",
    },
    {
      symbol: "RIVN",
      name: "Rivian Automotive, Inc.",
      lastSalePrice: "$23.96",
      lastSaleChange: "+0.71",
      change: "13343719",
      deltaIndicator: "up",
    },
  ];

export const getMostActiveByShareVolume = () => {
    return new Promise((resolve) => {
      // Simulate a delay to mimic an API call
      setTimeout(() => {
        resolve(mostActiveByShareVolume); 
      }, 200); // Simulated delay of 1 second
    });
  };

 
// Define sample action details data
const actionDetailsData = {
  AAL: {
    symbol: 'AAL',
    name: 'American Airlines Group, Inc.',
    price: 13.26,
    description: 'American Airlines Group, Inc. is a major American airline headquartered in Fort Worth, Texas.',
    analysis: 'Hold',
  },
  TSLA: {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 275.02,
    description: 'Tesla, Inc. is an American electric vehicle and clean energy company.',
    analysis: 'Buy',
  },
  AMZN: {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    price: 145.47,
    description: 'Amazon.com, Inc. is an American multinational technology and e-commerce company.',
    analysis: 'Strong Buy',
  },
  AAPL: {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 175.94,
    description: 'Apple Inc. is an American multinational technology company known for its consumer electronics, software, and services.',
    analysis: 'Strong Buy',
  },
  ARM: {
    symbol: 'ARM',
    name: 'Arm Holdings plc',
    price: 60.30,
    description: 'Arm Holdings plc is a British multinational semiconductor and software design company.',
    analysis: 'Hold',
  },
  AMD: {
    symbol: 'AMD',
    name: 'Advanced Micro Devices, Inc.',
    price: 107.32,
    description: 'Advanced Micro Devices, Inc. is an American multinational semiconductor company.',
    analysis: 'Buy',
  },
  GOOGL: {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 138.52,
    description: 'Alphabet Inc. is an American multinational conglomerate.',
    analysis: 'Strong Buy',
  },
  INTC: {
    symbol: 'INTC',
    name: 'Intel Corporation',
    price: 38.84,
    description: 'Intel Corporation is an American multinational corporation and technology company.',
    analysis: 'Hold',
  },
  IOVA: {
    symbol: 'IOVA',
    name: 'Iovance Biotherapeutics, Inc.',
    price: 4.79,
    description: 'Iovance Biotherapeutics, Inc. is a biotechnology company focused on developing cancer immunotherapies.',
    analysis: 'Sell',
  },
  RIVN: {
    symbol: 'RIVN',
    name: 'Rivian Automotive, Inc.',
    price: 23.96,
    description: 'Rivian Automotive, Inc. is an American electric vehicle manufacturer.',
    analysis: 'Buy',
  },
};

// Simulate fetching action details by symbol from the data
export const fetchActionDetails = async (symbol) => {
  // Simulate an API delay with setTimeout (you can remove this in a real API)
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Check if the symbol exists in the data
  if (actionDetailsData[symbol]) {
    return actionDetailsData[symbol];
  } else {
    // Return an error or null if the symbol is not found
    throw new Error('Action not found');
  }
};

