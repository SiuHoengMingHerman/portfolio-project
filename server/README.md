# Portfolio Website Server

This is the server-side of the Portfolio Website project built with Node.js and Express. It handles API requests from the client-side React application.

## Getting Started

To get started with the server, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd portfolio-website/server
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the server:**
   ```
   npm start
   ```

   The server will start on `http://localhost:5000` by default.

## Folder Structure

- **controllers/**: Contains the logic for handling requests.
- **routes/**: Defines the API endpoints.
- **app.js**: The main entry point for the server application.
- **package.json**: Lists the server dependencies and scripts.

## API Endpoints

- **GET /api/data**: Fetches data for the portfolio.
- **POST /api/contact**: Handles contact form submissions.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.