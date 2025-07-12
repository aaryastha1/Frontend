// import React, { useState } from 'react'
// import { useAdminProduct, useDeleteOneProduct } from '../../hooks/admin/userAdminProduct'
// import { getBackendImageUrl } from '../../utilis/backendImage'
// import { FaBox, FaEye, FaEdit, FaTrash, FaPlus } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
// import DeleteModal from '../auth/deleteModal'


// export default function ProductTable() {
//   const {
//     products, error, pagination,
//     pageNumber, setPageNumber, pageSize, setPageSize,
//     search, setSearch, canNextPage, canPreviousPage
//   } = useAdminProduct()

//   if (error) return <>{error.message}</>

//   const handlePrev = () => {
//     if (canPreviousPage) setPageNumber(prev => prev - 1)
//   }

//   const handleNext = () => {
//     if (canNextPage) setPageNumber(prev => prev + 1)
//   }

//   const handleSearch = (e) => {
//     setPageNumber(1)
//     setSearch(e.target.value)
//   }
//    const deleteProductHook = useDeleteOneProduct()
//       const [deleteId, setDeleteId] = useState(null)
  
//       const handleDelete = () => {
//           deleteProductHook.mutate(
//               deleteId,
//               {
//                   onSuccess: () => {
//                       setDeleteId(null)
//                   }
//               }
//           )
//       }


// return (
//   <div className="w-full h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col overflow-hidden">
//     <DeleteModal
//       isOpen={deleteId}
//       onClose={() => setDeleteId(null)}
//       onConfirm={handleDelete}
//       title="Delete Confirmation"
//       description="Are you sure you want to delete"
//     />

//     <div className="w-full h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col overflow-hidden">
//       <div className="flex-1 overflow-auto p-8">
//         <div className="bg-white shadow-2xl rounded-3xl p-8 transition-transform hover:scale-[1.01] duration-300 min-h-full">
          
//           {/* Heading with Add Button */}
//           <div className="flex items-center justify-between gap-3 mb-6">
//             <div className="flex items-center gap-3">
//               <FaBox className="text-red-500 text-3xl" />
//               <h2 className="text-3xl font-extrabold text-gray-800">Product Table</h2>
//             </div>
//             <Link to="/admins/productss/create">
//               <button
//                 className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-md"
//                 title="Add Product"
//               >
//                 <FaPlus className="text-white" /> Add
//               </button>
//             </Link>
//           </div>

//           {/* Controls */}
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//             <div className="flex items-center gap-2">
//               <label className="text-sm text-gray-600">Show</label>
//               <select
//                 value={pageSize}
//                 onChange={(e) => setPageSize(Number(e.target.value))}
//                 className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value={5}>5</option>
//                 <option value={10}>10</option>
//                 <option value={20}>20</option>
//               </select>
//             </div>

//             <div className="flex items-center gap-2">
//               <label className="text-sm text-gray-600">Search:</label>
//               <input
//                 onChange={handleSearch}
//                 value={search}
//                 type="text"
//                 placeholder="Search products..."
//                 className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-inner max-h-[calc(100vh-250px)]">
//             <table className="min-w-full table-auto rounded-xl overflow-hidden">
//               <thead className="bg-red-500 text-white text-sm uppercase">
//                 <tr>
//                   <th className="py-4 px-6 text-left">Name</th>
//                   <th className="py-4 px-6 text-left">Price</th>
//                   <th className="py-4 px-6 text-left">Image</th>
//                   <th className="py-4 px-6 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100 text-gray-700 bg-white">
//                 {products.map((row) => (
//                   <tr key={row._id} className="hover:bg-indigo-50 transition duration-200">
//                     <td className="py-4 px-6 font-medium">{row.name}</td>
//                     <td className="py-4 px-6">Rs {row.price}</td>
//                     <td className="py-4 px-6">
//                       <img
//                         className="w-16 h-16 rounded-xl border shadow-sm object-cover"
//                         src={getBackendImageUrl(row.productImage)}
//                         alt={row.name}
//                       />
//                     </td>
//                     <td className="py-4 px-6">
//                       <div className="flex gap-3">
//                         <Link to={`/admins/products/${row._id}`}>
//                           <button
//                             title="View"
//                             className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 text-sm shadow-md"
//                           >
//                             <FaEye /> View
//                           </button>
//                         </Link>
//                         <Link to={`/admins/products/${row._id}/edit`}>
//                           <button
//                             title="Edit"
//                             className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 text-sm shadow-md"
//                           >
//                             <FaEdit /> Edit
//                           </button>
//                         </Link>
//                         <button
//                           title="Delete"
//                           className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg flex items-center gap-1 text-sm shadow-md"
//                           onClick={() => setDeleteId(row._id)}
//                         >
//                           <FaTrash /> Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Pagination */}
//           <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//             <button
//               onClick={handlePrev}
//               disabled={!canPreviousPage}
//               className={`px-4 py-2 rounded-md text-sm font-medium shadow ${
//                 canPreviousPage
//                   ? "bg-indigo-500 text-white hover:bg-indigo-600"
//                   : "bg-gray-300 text-gray-600 cursor-not-allowed"
//               }`}
//             >
//               ← Previous
//             </button>

//             <span className="text-sm text-gray-700">
//               Page {pagination.page} of {pagination.totalPages}
//             </span>

//             <button
//               onClick={handleNext}
//               disabled={!canNextPage}
//               className={`px-4 py-2 rounded-md text-sm font-medium shadow ${
//                 canNextPage
//                   ? "bg-indigo-500 text-white hover:bg-indigo-600"
//                   : "bg-gray-300 text-gray-600 cursor-not-allowed"
//               }`}
//             >
//               Next →
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }


import React, { useState } from 'react'
import { useAdminProduct } from '../../hooks/admin/userAdminProduct'
import { useNavigate, Link } from 'react-router-dom'
import { getBackendImageUrl } from '../../utilis/backendImage'
import DeleteModal from '../auth/deleteModal'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'

export default function ProductTable() {
  const navigate = useNavigate()
  const {
    error,
    products,
    pageNumber,
    setPageNumber,
    pagination,
    canNextPage,
    canPreviousPage,
    search,
    setSearch,
    refetch, // If your hook supports refetching after delete
  } = useAdminProduct()

  const [deleteId, setDeleteId] = useState(null)

  if (error) return <div className="p-6 text-red-500">{error.message}</div>

  const handlePrev = () => canPreviousPage && setPageNumber((prev) => prev - 1)
  const handleNext = () => canNextPage && setPageNumber((prev) => prev + 1)
  const handleSearch = (e) => {
    setPageNumber(1)
    setSearch(e.target.value)
  }

  // Delete confirmed handler
  const handleDelete = async () => {
    if (!deleteId) return
    try {
      await fetch(`/admin/products/${deleteId}`, { method: 'DELETE' })
      alert('Deleted successfully.')
      setDeleteId(null)
      refetch?.() // refetch the product list if your hook supports it
    } catch (err) {
      alert('Failed to delete product.')
    }
  }

  return (
    <div className="p-4">
      {/* Delete confirmation modal */}
      <DeleteModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDelete}
        title="Delete Confirmation"
        description="Are you sure you want to delete this product?"
      />

      {/* Search */}
      <div className="flex justify-end mb-6">
        <label className="text-sm text-gray-700 mr-2">Search:</label>
        <input
          className="border border-gray-300 rounded px-2 py-1 text-sm"
          onChange={handleSearch}
          value={search}
          placeholder="Search products..."
        />
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-[1.01] relative"
          >
            <img
              src={getBackendImageUrl(product.image)}
              alt={product.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">Price: Rs {product.price}</p>
              {product?.categoryId?.name && (
                <p className="text-gray-500 text-sm mb-2">Category: {product.categoryId.name}</p>
              )}

              <div className="flex gap-2 mt-4">
                <Link to={`/admins/product/${product._id}`}>
                  <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm">
                    <FaEye /> View
                  </button>
                </Link>
                <Link to={`/admins/product/${product._id}/edit`}>
                  <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm">
                    <FaEdit /> Edit
                  </button>
                </Link>
                <button
                  onClick={() => setDeleteId(product._id)}
                  className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={!canPreviousPage}
          className={`px-4 py-2 rounded text-white text-sm ${
            canPreviousPage ? 'bg-[#222740]' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Back
        </button>
        <span className="text-[#222740] font-medium">
          Page {pagination.page} of {pagination.totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={!canNextPage}
          className={`px-4 py-2 rounded text-white text-sm ${
            canNextPage ? 'bg-[#222740]' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}


