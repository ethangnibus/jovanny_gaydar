import "./App.css";
import Navbar from "@/pages/navbar/Navbar";
import Bottombar from "@/pages/bottombar/Bottombar";
import { Camera, CameraType } from "react-camera-pro";
import { useRef, useState } from "react";
import GayScanner from "@/pages/gayscanner/GayScanner";
import { Camera as CameraIcon } from "lucide-react"; // Import the Camera icon

// Define the ref type
function App() {
  const camera = useRef<CameraType | null>(null);  // Correctly type the ref for Camera
  const [scanningGayness, setScanningGayness] = useState<boolean>(false);

  function scanGayness(): void {
    setScanningGayness(true);
  }

  function switchCamera(): void {
    if (camera.current) {
      camera.current?.switchCamera(); // Switch between 'front' and 'back' cameras
    }
  }

  return (
    <div className="fixed w-full h-dvh">
      <Camera
        ref={camera}
        errorMessages={{
          noCameraAccessible: undefined,
          permissionDenied: undefined,
          switchCamera: undefined,
          canvas: undefined
        }}
      />

      <div className="flex flex-col h-dvh w-full align-center justify-between bg-black select-none">
        <Navbar />
        
        {scanningGayness && <GayScanner setScanningGayness={setScanningGayness} />}
        
        <Bottombar scanGayness={scanGayness}/>

        {/* Button to switch camera */}
        <button 
          onClick={switchCamera} 
          className="absolute top-4 right-4 bg-white p-4 rounded-full shadow-lg z-30">
          <CameraIcon size={24} color="black" />
        </button>
      </div>
    </div>
  );
}

export default App;
