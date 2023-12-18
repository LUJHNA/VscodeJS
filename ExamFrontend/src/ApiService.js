const API_URL = 'http://localhost:7071'; // Replace with your actual backend port

const apiService = {
  getAllStationsForYourRoute: () => fetch(`${API_URL}/`).then(res => res.json()),
  getPrice: () => fetch(`${API_URL}/price`).then(res => res.json()),
  findPrice: (data) => fetch(`${API_URL}/findPrice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  }).then(res => res.json()),
  findRoute: (data) => fetch(`${API_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  }).then(res => res.json()),
};

export default apiService;