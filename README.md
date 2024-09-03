# Order and Product API

![api](https://github.com/user-attachments/assets/cda85b51-79a0-410e-a380-d57a5712b04d)

**This API allows you to manage orders and products in a MongoDB LocalHost environment (Campus). The API provides functionalities to retrieve all products, retrieve a single product by ID, create orders, and update product stock after an order is placed**

## Endpoints

### 1. Get All Products
**Endpoint:** `GET /api/products`

Retrieves all products stored in the MongoDB database.

```javascript
exports.getProducts = async (req, res, next) => {
    const products = await ProductModel.find({});
    res.json({
        success: true,
        products
    });
};
```

### 2. Get Single Product

**Endpoint:** `GET /api/products/:id`

**Description:** Retrieves a single product by its ID.

```javascript
exports.getSingleProduct = async (req, res, next) => {
    console.log(req.params.id, 'ID');
    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            success: true,
            product
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: "Unable to get Product with the ID"
        });
    }
};
```

### 3. Create Order

**Endpoint:** `POST /api/orders`

**Description:** Creates a new order with the provided cart items. It calculates the total amount and sets the order status to "pending."

```javascript
const cartItems = req.body;
const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)).toFixed(2);
const status = 'pending';

const order = await orderModel.create({ cartItems, amount, status });
```

### 4. Update Product Stock

**Description:** After an order is placed, the stock of the ordered products is updated accordingly.

```javascript
cartItems.forEach(async (item) => {
    const product = await productModel.findById(item.product._id);
    console.log(product);
    product.stock = product.stock - item.qty;
    await product.save();
});
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js:** [Download and Install Node.js](https://nodejs.org/)
- **MongoDB:** Make sure MongoDB is running on localhost. You can [download MongoDB](https://www.mongodb.com/try/download/community) and follow the installation instructions.

## Installation

### 1. Clone the Repository:

```bash
git clone https://github.com/sabarirajpazhani/API_order_product.git
```
### 2. Install Dependencies:
```bash
cd your-repo-name
npm install
```

### 3. Start the Server:
```bash
npm start
```

## API Testing Visuals

### 1. Get Products

![image](https://github.com/user-attachments/assets/d7f11a99-0d60-42e6-980d-0baf8fc50df3)

### 2. Get Single Products

![image](https://github.com/user-attachments/assets/e190a582-04f7-4d02-b87c-3989948266c6)

### 3. Create Order

![image](https://github.com/user-attachments/assets/9852d9db-ead8-4f91-97d0-9575b2e1595f)


# API Testing Tools

When developing and testing APIs, it's crucial to use reliable tools to ensure that your endpoints function as expected. Here are some popular API testing tools that you can use:

## 1. Thunder Client

**Thunder Client** is a lightweight REST API client extension for Visual Studio Code. It provides a clean and user-friendly interface for sending HTTP requests and analyzing responses.

- **Installation**: Available as a Visual Studio Code extension.
- **Website**: [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

<div align="center">
  <img src="https://github.com/user-attachments/assets/a4ae7be2-6284-4898-83ac-313dc85ee238" alt="insomnia-logo" width="200"/>
</div>

## 2. Postman API

**Postman** is one of the most widely used API testing tools. It offers a comprehensive suite of features for designing, testing, and managing APIs.

- **Installation**: Available as a standalone application for Windows, macOS, and Linux.
- **Website**: [Postman](https://www.postman.com/)

<div align="center">
  <img src="https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png" alt="insomnia-logo" width="200"/>
</div>

## 3. Insomnia

**Insomnia** is another powerful REST API client that allows you to test and debug APIs with ease. It provides a simple interface and features for creating and managing requests.

- **Installation**: Available as a standalone application for Windows, macOS, and Linux.
- **Website**: [Insomnia](https://insomnia.rest/)

<div align="center">
  <img src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png" alt="insomnia-logo" width="200"/>
</div>
