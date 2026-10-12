const express = require('express');
const app = express();
const PORT = 5007;
app.use(express.json());
let products = [
    { id: 1, name: 'Laptop', price: 50000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Headphones', price: 1500 }
];
app.get('/products', (req, res) => {
    res.status(200).json(products);
});
app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }
    res.status(200).json(product);
});
app.post('/products', (req, res) => {
    const { id, name, price } = req.body;

    if (id == null || !name || price == null ||
        !Number.isFinite(Number(id)) ||
        !Number.isFinite(Number(price)) ||
        Number(id) <= 0 || Number(price) < 0) {
        return res.status(400).json({
            message: 'Please provide a valid id, name, and price'
        });
    }
    if (products.some(p => p.id === Number(id))) {
        return res.status(409).json({
            message: 'Product ID already exists'
        });
    }
    const newProduct = {
        id: Number(id),
        name,
        price: Number(price)
    };
    products.push(newProduct);
    res.status(201).json({
        message: 'Product added successfully',
        product: newProduct
    });
});
// PUT /products/:id - Update a product
app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }
    const { name, price } = req.body;
    if (!name || price == null ||
        !Number.isFinite(Number(price)) ||
        Number(price) < 0) {
        return res.status(400).json({
            message: 'Please provide a valid name and price'
        });
    }
    product.name = name;
    product.price = Number(price);
    res.status(200).json({
        message: 'Product updated successfully',
        product
    });
});
// DELETE /products/:id - Delete a product
app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Product not found'
        });
    }

    const deletedProduct = products.splice(index, 1)[0];

    res.status(200).json({
        message: 'Product deleted successfully',
        product: deletedProduct
    });
});

// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
