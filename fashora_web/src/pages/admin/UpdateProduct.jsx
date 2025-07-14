import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useGetOneProduct, useUpdateOneProduct } from '../../hooks/admin/userAdminProduct';
import { useAdminCategory } from '../../hooks/admin/userAdminCategory';
import { getBackendImageUrl } from '../../utilis/backendImage';

export default function UpdateProduct() {
  const { id } = useParams();

  const { product } = useGetOneProduct(id);
  const { categories } = useAdminCategory(); // To populate dropdown
  const updateProduct = useUpdateOneProduct();

  const validationSchema = Yup.object({
    name: Yup.string().required("Product name is required"),
    price: Yup.number().required("Price is required").positive(),
    categoryId: Yup.string().required("Category is required"),
    description: Yup.string(),
    image: Yup.mixed()
      .nullable()
      .test("fileSize", "Image too large", value => !value || value.size <= 5 * 1024 * 1024),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: product?.name || '',
      price: product?.price || '',
      categoryId: product?.categoryId?._id || '',
      description: product?.description || '',
      image: null
    },
    validationSchema,
    onSubmit: values => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("price", values.price);
      formData.append("categoryId", values.categoryId);
      formData.append("description", values.description || '');
      if (values.image) {
        formData.append("image", values.image);
      }

      updateProduct.mutate({ id, data: formData }, {
        onSuccess: () => {
          alert("Product updated!");
        }
      });
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Update Product</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Name</label>
            <input
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Price (Rs)</label>
            <input
              name="price"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.price}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            {formik.touched.price && formik.errors.price && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.price}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Category</label>
            <select
              name="categoryId"
              onChange={formik.handleChange}
              value={formik.values.categoryId}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            >
              <option value="">Select category</option>
              {categories.map(c => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>
            {formik.touched.categoryId && formik.errors.categoryId && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.categoryId}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows={3}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Product Image</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={(e) => formik.setFieldValue('image', e.currentTarget.files[0])}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
            {formik.touched.image && formik.errors.image && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.image}</p>
            )}
          </div>

          {/* Image Preview */}
          <div className="mt-4">
            <p className="text-gray-600 mb-2 font-medium">Image Preview:</p>
            <img
              src={
                formik.values.image
                  ? URL.createObjectURL(formik.values.image)
                  : getBackendImageUrl(product?.image)
              }
              alt="Preview"
              className="w-32 h-32 object-cover rounded-xl border shadow"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
