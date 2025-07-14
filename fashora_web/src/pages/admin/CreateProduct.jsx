

// import React, { useState } from 'react';
// import { useCreateProduct } from '../../hooks/admin/userAdminProduct';
// import { useAdminCategory } from '../../hooks/admin/userAdminCategory';

// export default function CreateProduct() {
//   const { categories } = useAdminCategory();
//   const createProduct = useCreateProduct();

//   const [form, setForm] = useState({
//     name: '',
//     price: '',
//     categoryId: '',
//     image: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate all required fields before submitting
//     if (!form.name || !form.price || !form.categoryId || !form.image) {
//       alert('Please fill all fields and select an image.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', form.name);
//     formData.append('price', form.price);
//     formData.append('categoryId', form.categoryId);
//     formData.append('image', form.image);

//     // IMPORTANT: Replace this with a valid ObjectId string from your DB or auth
//     formData.append('userId', '64a7a8d20e0a5b1234567890'); 

//     createProduct.mutate(formData);
//   };

//   return (
//     <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-xl">
//       <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Product Name"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//         />
//         <select
//           name="categoryId"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           required
//           defaultValue=""
//         >
//           <option value="" disabled>Select Category</option>
//           {categories.map(cat => (
//             <option key={cat._id} value={cat._id}>{cat.name}</option>
//           ))}
//         </select>
//         <input
//           type="file"
//           name="image"
//           className="w-full border p-2 rounded"
//           onChange={handleChange}
//           accept="image/*"
//           required
//         />
//         <button
//           type="submit"
//           className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600"
//         >
//           Create Product
//         </button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useCreateProduct } from '../../hooks/admin/userAdminProduct';
import { useAdminCategory } from '../../hooks/admin/userAdminCategory';

export default function CreateProduct() {
  const { categories } = useAdminCategory();
  const createProduct = useCreateProduct();

  const [form, setForm] = useState({
    name: '',
    price: '',
    categoryId: '',
    image: null,
    description: '',   // Added description here
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all required fields before submitting
    if (!form.name || !form.price || !form.categoryId || !form.image) {
      alert('Please fill all required fields and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('price', form.price);
    formData.append('categoryId', form.categoryId);
    formData.append('image', form.image);
    formData.append('description', form.description);  // Append description

    // IMPORTANT: Replace this with a valid ObjectId string from your DB or auth
    formData.append('userId', '64a7a8d20e0a5b1234567890');

    createProduct.mutate(formData);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />
        <select
          name="categoryId"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
          defaultValue=""
        >
          <option value="" disabled>Select Category</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Product Description"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          value={form.description}
          rows={4}
        />

        <input
          type="file"
          name="image"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          accept="image/*"
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600"
        >
          Create Product
        </button>
      </form>
    </div>
  );
}
