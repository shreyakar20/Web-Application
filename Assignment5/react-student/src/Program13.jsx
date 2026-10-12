
import { useState, useEffect } from 'react';

function Program13() {
    const [products, setProducts] = useState([
        'Laptop',
        'Mobile',
        'Headphones'
    ]);

    const [message, setMessage] = useState(
        'No changes yet'
    );

    const [productName, setProductName] = useState('');

    useEffect(() => {
        if (products.length > 3 || products.length < 3) {
            setMessage('Product list modified!');
        }
    }, [products]);

    function addProduct() {
        if (productName.trim() === '') {
            setMessage('Please enter a product name');
            return;
        }

        setProducts([...products, productName.trim()]);
        setProductName('');
    }

    return (
        <div>
            <h2>Product Management</h2>

            <input
                type="text"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />

            {' '}

            <button onClick={addProduct}>
                Add Product
            </button>

            <h3>Product List</h3>

            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>

            <p>{message}</p>
        </div>
    );
}

export default Program13;
