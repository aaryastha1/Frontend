import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from '../../api/api'
import { getBackendImageUrl } from '../../utilis/backendImage'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/admins/product/${id}`) // ✅ FIXED HERE
        setProduct(res.data.data)
      } catch (err) {
        setError(err?.response?.data?.message || 'Error fetching product')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`/admins/product/${id}`)
        alert('Deleted successfully')
        navigate('/admins/product') // ✅ FIXED HERE
      } catch (err) {
        alert('Failed to delete the product.')
      }
    }
  }

  const handleEdit = () => navigate(`/admins/product/${id}/edit`)

  if (loading) return <div className="p-6">Loading...</div>
  if (error) return <div className="p-6 text-red-500">{error}</div>

  return product ? (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded-lg">
      <img
        src={getBackendImageUrl(product.image)}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2 text-[#222740]">{product.name}</h1>
      <p className="text-gray-600 mb-2"><strong>Price:</strong> Rs {product.price}</p>
      <p className="text-gray-600 mb-2"><strong>Stock:</strong> {product.stock}</p>
      <p className="text-gray-600 mb-2"><strong>Category:</strong> {product.categoryId?.name || 'N/A'}</p>
      <p className="text-gray-600 mb-4"><strong>Description:</strong> {product.description || 'No description'}</p>

      <div className="flex gap-4">
        <button
          onClick={handleEdit}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
        >
          Back
        </button>
      </div>
    </div>
  ) : (
    <div className="p-6 text-gray-600">Product not found.</div>
  )
}
