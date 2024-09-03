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

### Update Product Stock

**Description:** After an order is placed, the stock of the ordered products is updated accordingly.



