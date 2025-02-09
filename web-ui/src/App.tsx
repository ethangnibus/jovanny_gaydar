import "./App.css";
import Navbar from "@/pages/navbar/Navbar";
import Bottombar from "@/pages/bottombar/Bottombar";
import { Camera, CameraType } from "react-camera-pro";
import { useRef, useState } from "react";
import GayScanner from "@/pages/gayscanner/GayScanner";

// Define the ref type
function App() {
  const camera = useRef<CameraType | null>(null);  // Correctly type the ref for Camera
  const [scanningGayness, setScanningGayness] = useState<boolean>(false);

  function scanGayness(): void {
    setScanningGayness(true);
    console.log("you're gay")
  }

  return (
    <div className="fixed w-full h-screen">
    <Camera 
        ref={camera} 
        errorMessages={{
          noCameraAccessible: undefined,
          permissionDenied: undefined,
          switchCamera: undefined,
          canvas: undefined
        }} 
      />

      <div className="flex flex-col h-screen w-full align-center justify-between bg-black select-none">
        <Navbar />
        
        {scanningGayness && <GayScanner setScanningGayness={setScanningGayness} />}
        
        <Bottombar scanGayness={scanGayness}/>
      </div>
    </div>
  );
}

export default App;
