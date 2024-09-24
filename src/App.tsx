// import React from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Analytics from "./components/Analytics";
// import { CertificateUpload } from "./components/certificateupload";
// import Dashboard from "./components/Dashboard";
// import Layout from "./components/Layout";
// import Loader from "./components/loader";
// import { PastUploads } from "./components/pastuploads";
// import { PostApproval } from "./components/postapproval";
// import { PostGeneration } from "./components/postgeneration";

// const Home: React.FC = () => (
//   <div className="border-spacing-2 border-cyan-300">
//     <div className="bg-gray-900 p-3 bg-opacity-50 backdrop-filter backdrop-blur-lg border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.5)] elevation-5">
//       <h1 className="text-white text-xl animate-in">Hello, World!</h1>
//       <p className="text-white text-xl">Busy Schedule We got you Covered upload your certificates</p>
//       <p className="text-white text-xl">Generate your all linked in twitter post in one click check and post directly from here...!</p>
//     </div>
//     <br />
//     <div className="bg-gray-900 space-y-2 p-2 bg-opacity-50 backdrop-filter backdrop-blur-lg border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.5)] elevation-10">
//       <div className="mt-2 border-0"><CertificateUpload /></div>
//       <div className="mt-1"><PostGeneration /></div>
//       <div className="mt-1"><PostApproval /></div>
//     </div>
//   </div>
// );

// const App: React.FC = () => {
//   const isLoading = false; // Changed to false for demonstration

//   if (isLoading) {
//     return <div className="text-center"><Loader /></div>;
//   }

//   return (
//     <Router>
//     <Routes>
//     <Route path="/" element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path="dashboard" element={<Dashboard />} />
//       <Route path="analytics" element={<Analytics />} />
//       <Route path="upload" element={<PastUploads />} />
//       <Route path="*" element={<NotFound />} />
//     </Route>
//   </Routes>
// </Router>
//   );
// };

// export default App;



import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AdminProfile } from './components/adminprofile';
import Analytics from './components/Analytics';
import Home from './components/Home';
import Layout from './components/Layout';
import PastUploads from './components/pastuploads';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route  path="dashboard"  element={<AdminProfile/>}/>
          <Route path="pastuploads" element={<PastUploads />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;