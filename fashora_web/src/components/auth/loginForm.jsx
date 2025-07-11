import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginUser } from '../../hooks/useLoginUser';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const LoginForm = () => {
  const { mutate, isPending } = useLoginUser();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email or phone is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      mutate(values, {
        onSuccess: () => {
          toast.success('Login successful! Redirecting...');
          setTimeout(() => {
            navigate('/home', { state: { showLoginToast: true } }); // pass state
          }, 1500);
        },
        onError: () => {
          toast.error('Login failed. Please try again.');
        },
      });
    },
  });

  return (
    <>
      <Toaster position="top-center" />
      <form onSubmit={formik.handleSubmit} className="w-full max-w-sm space-y-4 mx-auto mt-10" noValidate>
        <img src="fashoraa.png" alt="Fashora Logo" className="w-30 h-30 mx-auto mb-4" />
        <h2 className="text-lg font-semibold mb-2 text-center">Welcome Back!</h2>

        <input
          type="text"
          name="email"
          placeholder="Phone / Email"
          className="w-full border rounded px-3 py-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-sm text-red-500">{formik.errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-sm text-red-500">{formik.errors.password}</p>
        )}

        <div className="flex items-center gap-2 text-sm">
          <input type="checkbox" id="remember" className="accent-[#744f28]" />
          <label htmlFor="remember" className="text-gray-600">Remember Me</label>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className={`w-full bg-[#a27c4b] text-white font-semibold py-2 rounded shadow hover:bg-[#906938] transition ${
            isPending ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isPending ? 'Signing In...' : 'Sign In'}
        </button>

        <div className="my-4 text-sm text-[#888] flex items-center gap-2">
          <div className="flex-grow h-px bg-gray-300" />
          OR
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <p className="text-sm text-center">
          Don’t have an account?{' '}
          <a href="/signup" className="text-[#744f28] font-semibold">
            Sign Up
          </a>
        </p>
      </form>
    </>
  );
};




export default LoginForm;
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { useLoginUser } from '../../hooks/useLoginUser';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const { mutate, data, error, isPending } = useLoginUser();
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().required('Email or phone is required'),
//       password: Yup.string().required('Password is required'),
//     }),
//     onSubmit: (values) => {
//       console.log('Login form submitted:', values);
//       mutate(values, {
//         onSuccess: () => {
//           navigate('/homepage'); // 🔁 Navigate after successful login
//         },
//       });
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit} className="w-full max-w-sm space-y-4 mx-auto mt-10" noValidate>
//       <img src="fashoraa.png" alt="Fashora Logo" className="w-30 h-30 mx-auto mb-4" />

//       <h2 className="text-lg font-semibold mb-2 text-center">Welcome Back!</h2>

//       <input
//         type="text"
//         name="email"
//         placeholder="Phone / Email"
//         className="w-full border rounded px-3 py-2"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//       />
//       {formik.touched.email && formik.errors.email && (
//         <p className="text-sm text-red-500">{formik.errors.email}</p>
//       )}

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         className="w-full border rounded px-3 py-2"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.password}
//       />
//       {formik.touched.password && formik.errors.password && (
//         <p className="text-sm text-red-500">{formik.errors.password}</p>
//       )}

//       <div className="flex items-center gap-2 text-sm">
//         <input type="checkbox" id="remember" className="accent-[#744f28]" />
//         <label htmlFor="remember" className="text-gray-600">Remember Me</label>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-[#a27c4b] text-white font-semibold py-2 rounded shadow hover:bg-[#906938]"
//       >
//         Sign In
//       </button>

//       <div className="my-4 text-sm text-[#888] flex items-center gap-2">
//         <div className="flex-grow h-px bg-gray-300" />
//         OR
//         <div className="flex-grow h-px bg-gray-300" />
//       </div>

//       <p className="text-sm text-center">
//         Don’t have an account?{' '}
//         <a href="/signup" className="text-[#744f28] font-semibold">
//           Sign Up
//         </a>
//       </p>
//     </form>
//   );
// };

// export default LoginForm;


// // import React from 'react';
// // import { useFormik } from 'formik';
// // import * as Yup from 'yup';
// // import { useLoginUser } from '../../hooks/useLoginUser';
// // import { useNavigate } from 'react-router-dom';
// // import toast, { Toaster } from 'react-hot-toast';

// // const LoginForm = () => {
// //   const { mutate, data, error, isPending } = useLoginUser();
// //   const navigate = useNavigate();

// //   const formik = useFormik({
// //     initialValues: {
// //       email: '',
// //       password: '',
// //     },
// //     validationSchema: Yup.object({
// //       email: Yup.string().required('Email or phone is required'),
// //       password: Yup.string().required('Password is required'),
// //     }),
// //     onSubmit: (values) => {
// //       mutate(values, {
// //         onSuccess: () => {
// //           toast.success('Login successful! Redirecting...');
// //           setTimeout(() => {
// //             navigate('/home');
// //           }, 1500); // wait 1.5 seconds to let user see the toast
// //         },
// //         onError: () => {
// //           toast.error('Login failed. Please try again.');
// //         },
// //       });
// //     },
// //   });

// //   return (
// //     <>
// //       <Toaster position="top-center" />
// //       <form onSubmit={formik.handleSubmit} className="w-full max-w-sm space-y-4 mx-auto mt-10" noValidate>
// //         <img src="fashoraa.png" alt="Fashora Logo" className="w-30 h-30 mx-auto mb-4" />

// //         <h2 className="text-lg font-semibold mb-2 text-center">Welcome Back!</h2>

// //         <input
// //           type="text"
// //           name="email"
// //           placeholder="Phone / Email"
// //           className="w-full border rounded px-3 py-2"
// //           onChange={formik.handleChange}
// //           onBlur={formik.handleBlur}
// //           value={formik.values.email}
// //         />
// //         {formik.touched.email && formik.errors.email && (
// //           <p className="text-sm text-red-500">{formik.errors.email}</p>
// //         )}

// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           className="w-full border rounded px-3 py-2"
// //           onChange={formik.handleChange}
// //           onBlur={formik.handleBlur}
// //           value={formik.values.password}
// //         />
// //         {formik.touched.password && formik.errors.password && (
// //           <p className="text-sm text-red-500">{formik.errors.password}</p>
// //         )}

// //         <div className="flex items-center gap-2 text-sm">
// //           <input type="checkbox" id="remember" className="accent-[#744f28]" />
// //           <label htmlFor="remember" className="text-gray-600">Remember Me</label>
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={isPending}
// //           className={`w-full bg-[#a27c4b] text-white font-semibold py-2 rounded shadow hover:bg-[#906938] transition ${
// //             isPending ? 'opacity-50 cursor-not-allowed' : ''
// //           }`}
// //         >
// //           {isPending ? 'Signing In...' : 'Sign In'}
// //         </button>

// //         <div className="my-4 text-sm text-[#888] flex items-center gap-2">
// //           <div className="flex-grow h-px bg-gray-300" />
// //           OR
// //           <div className="flex-grow h-px bg-gray-300" />
// //         </div>

// //         <p className="text-sm text-center">
// //           Don’t have an account?{' '}
// //           <a href="/signup" className="text-[#744f28] font-semibold">
// //             Sign Up
// //           </a>
// //         </p>
// //       </form>
// //     </>
// //   );
// // };

// // export default LoginForm;
