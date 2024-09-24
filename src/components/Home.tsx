import { CertificateUpload } from "./certificateupload";
import { PostApproval } from "./postapproval";
import { PostGeneration } from "./postgeneration";

const  Home: React.FC=()=> {
  return (

    <div className="border-spacing-2 border-cyan-300">
       <div className="bg-gray-900 p-3 bg-opacity-50 backdrop-filter backdrop-blur-lg border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.5)] elevation-5">
         <h1 className="text-white text-xl animate-in">Hello, World!</h1>
          <p className="text-white text-xl">Busy Schedule We got you Covered upload your certificates</p>
         <p className="text-white text-xl">Generate your all linked in twitter post in one click check and post directly from here...!</p>
       </div>
        <br />
       <div className="bg-gray-900 space-y-2 p-2 bg-opacity-50 backdrop-filter backdrop-blur-lg border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.5)] elevation-10">
         <div className="mt-2 border-0"><CertificateUpload /></div>
         <div className="mt-1"><PostGeneration /></div>
          <div className="mt-1"><PostApproval /></div>
        </div>
      </div>




    
  );
}

export default Home
