
// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const LoginForm = () => {
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
//       // TODO: Add your login API call / authentication logic here
//     },
//   });

//   return (
//     <div className="flex min-h-screen">
//       {/* Left side image */}
//       <div className="w-1/2 hidden md:block">
      
//       </div>

//       {/* Right side form */}
//      <div className="text-center">
//         <img src="fashoraa.png" alt="Fashora Logo" className="mx-auto w-28 h-28 mb-2" />

//         <form onSubmit={formik.handleSubmit} className="w-full max-w-sm space-y-4" noValidate>
//           <h2 className="text-lg font-semibold mb-2">Welcome Back!</h2>

//           <input
//             type="text"
//             name="email"
//             placeholder="Phone / Email"
//             className={`w-full border rounded px-3 py-2 ${
//               formik.touched.email && formik.errors.email ? 'border-red-500' : ''
//             }`}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />
//           {formik.touched.email && formik.errors.email && (
//             <p className="text-sm text-red-500">{formik.errors.email}</p>
//           )}

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className={`w-full border rounded px-3 py-2 ${
//               formik.touched.password && formik.errors.password ? 'border-red-500' : ''
//             }`}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.password}
//           />
//           {formik.touched.password && formik.errors.password && (
//             <p className="text-sm text-red-500">{formik.errors.password}</p>
//           )}

//           <div className="flex items-center gap-2 text-sm">
//             <input type="checkbox" id="remember" className="accent-[#744f28]" />
//             <label htmlFor="remember" className="text-gray-600">Remember Me</label>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#a27c4b] text-white font-semibold py-2 rounded shadow hover:bg-[#906938] transition"
//           >
//             Sign In
//           </button>
//         </form>

//         {/* OR divider */}
//         <div className="my-4 text-sm text-[#888] flex items-center gap-2">
//           <div className="flex-grow h-px bg-gray-300" />
//           OR
//           <div className="flex-grow h-px bg-gray-300" />
//         </div>

//         {/* Social icons */}
//         {/* <div className="flex gap-4 mb-4">
//           <button className="border p-2 rounded-full">
//             <img src="/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
//           </button>
//           <button className="border p-2 rounded-full">
//             <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
//           </button>
//         </div> */}

//         <p className="text-sm">
//           Don’t have an account?{' '}
//           <a href="/signup" className="text-[#744f28] font-semibold">Sign Up</a>

          
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;


import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useLoginUser } from '../../hooks/useLoginUser';

const LoginForm = () => {
  const { mutate, data, error, isPending} = useLoginUser()
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
      console.log('Login form submitted:', values);
      mutate(values, {
        onSuccess: () => {

        }
      })
      // TODO: Add your login API call / authentication logic here
    },
  });

  return (
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
        className="w-full bg-[#a27c4b] text-white font-semibold py-2 rounded shadow hover:bg-[#906938]"
      >
        Sign In
      </button>

      <div className="my-4 text-sm text-[#888] flex items-center gap-2">
        <div className="flex-grow h-px bg-gray-300" />
        OR
        <div className="flex-grow h-px bg-gray-300" />
      </div>

      {/* Social buttons can go here */}

      <p className="text-sm text-center">
        Don’t have an account?{' '}
        <a href="/signup" className="text-[#744f28] font-semibold">
          Sign Up
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
