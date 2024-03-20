import "./Navbar.css"
import { useRef,useState, useEffect } from 'react';

const Navbar = () => {
    const [text, setText] = useState('W'); // Start with 'W' as the initial character
    const [index, setIndex] = useState(1); // Start index from 1
    const [catText, setCatText] = useState('');
    const [initialMessage] = useState("welcome to our website"); // Adjust the initial message

    const message = useRef(initialMessage);
    const catMessage = "I love cat";
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index < message.current.length) {
          setText(prevText => prevText + message.current[index]);
          setIndex(prevIndex => prevIndex + 1);
        } else if (catText.length < catMessage.length) {
          setCatText(prevCatText => prevCatText + catMessage[catText.length]);
        } else {
          // Reset index and catText when both animations are complete after a delay
          setTimeout(() => {
            setCatText('');
            setIndex(0);
            setText('');
          }, 1000); // 2000 milliseconds delay (2 seconds)
        }
      }, 200);
  
      return () => clearInterval(interval);
    }, [index, catText]);
    
  return (
    <div>
        <div className="Nav-con flex justify-between items-center bg-[#AD88C6] px-[2rem]">
            <div className="logo-con">
                <div className="logo text-white p-4 text-xl">MyAnv</div>
            </div>
            <ul className="ul-con flex gap-2">
                <li className="navlink font-semibold p-4 text-white">ImageUs</li>
                <li className="navlink font-semibold p-4 text-white">About Us</li>
                <li className="navlink font-semibold p-4 text-white">My story</li>
            </ul>
        </div>
        <header>
            <div className="containers">
                <div className="header-con bg-Pri">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="#fff" d="M0,128L34.3,133.3C68.6,139,137,149,206,170.7C274.3,192,343,224,411,240C480,256,549,256,617,250.7C685.7,245,754,235,823,197.3C891.4,160,960,96,1029,101.3C1097.1,107,1166,181,1234,176C1302.9,171,1371,85,1406,42.7L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
                <div className="img-con w-[400px] h-[400px]">
                    <img className="cat" src="cat.png" alt="" />
                </div>
                <div className="font-semibold text-con top-[20%] right-[10%] text-Third absolute ">
                    <h1 className="text-5xl animate-slide-in-from-left">{text}</h1>
                    <h1 className="text-5xl animate-slide-in-from-left">{catText}</h1>
                </div>
                </div>
            </div>            
        </header>
    </div>
  )
}

export default Navbar