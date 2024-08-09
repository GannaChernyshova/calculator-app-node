# Calculator App Node

A simple calculator application built with Node.js.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Simple and easy-to-use interface.
- Docker support for containerized deployment.
- Unit tests + Testcontainers-based integration tests 

## Prerequisites

- Node.js (v14 or higher)
- Docker 

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/GannaChernyshova/calculator-app-node.git
    cd calculator-app-node
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the application:
    ```sh
    npm start
    ```

2. Access the application at `http://localhost:3000`

## Running Tests

To run tests, use the following command:
```sh
npm test

## Docker

To run the application using Docker:

1. Build the Docker image:
    ```sh
    docker build -t calculator-app .
    ```

2. Run the Docker container:
    ```sh
    docker run -p 3000:3000 calculator-app
    ```
