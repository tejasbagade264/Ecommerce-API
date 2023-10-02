# Ecommerce-API

Host-Link :https://ecommerce-api-17n1.onrender.com

# E-commerce API

## Host Link
The E-commerce API is hosted at: https://ecommerce-api-17n1.onrender.com

## Overview
Welcome to the E-commerce API repository! This API serves as the backend for managing various aspects of an e-commerce platform. It provides a set of endpoints that allow you to interact with products, orders, users, and more.

## Routes
Below are the main routes and their descriptions for this API:

### Products
- **GET /products :** Retrieve a list of all products.
- **POST /products/create :** Create a new product.
- **PUT /products/:id/update_quantity/?number=10 :** Update an existing product.
- **DELETE /products/:id :** Delete a product.



## Project Structure
The project is organized as follows:

- `src/`: Contains the source code of the API.
- `models/`: Defines the data models used by the API.
- `routes/`: Contains route handlers for various endpoints.
- `controllers/`: Implements the logic for handling requests.
- `middlewares/`: Includes middleware functions for authentication and error handling.
- `config/`: Stores configuration files, such as database settings and environment variables.
- `tests/`: Contains unit and integration tests for the API.

## Getting Started
To set up and run the API on your local machine, follow the instructions in the [Installation](#installation) section of this README.


## Contributing
We welcome contributions to this project. If you'd like to contribute, please follow our [contribution guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it as needed for your e-commerce platform.



