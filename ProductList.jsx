import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plants = [
  { id: 1, name: 'Aloe Vera', price: 200, category: 'Indoor' },
  { id: 2, name: 'Money Plant', price: 150, category: 'Indoor' },
  { id: 3, name: 'Cactus', price: 100, category: 'Indoor' },
  { id: 4, name: 'Rose', price: 120, category: 'Outdoor' },
  { id: 5, name: 'Tulip', price: 180, category: 'Outdoor' },
  { id: 6, name: 'Orchid', price: 250, category: 'Outdoor' }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
    setAdded([...added, plant.id]);
  };

  return (
    <div>
      <h2>Plant List</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {plants.map(plant => (
          <div key={plant.id} style={{ border: '1px solid gray', padding: '10px' }}>
            <h3>{plant.name}</h3>
            <p>Price: ₹{plant.price}</p>
            <button onClick={() => handleAdd(plant)} disabled={added.includes(plant.id)}>
              {added.includes(plant.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
