import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    {/* Navbar */}
    <Navbar title="TextUtils" aboutTab="About Text Utils" />

    {/* TextArea */}
    <div className="container my-3">
    <TextForm heading="Enter your text here!" />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
