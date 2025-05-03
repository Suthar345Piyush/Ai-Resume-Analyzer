import { useEffect , useState }  from "react";
import Header from "./components/Header";


function App(){
  const [darkMode , setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || 
    window.matchMedia("(prefers-color-scheme: dark)").matches 
  );



  useEffect(() => {
      if(darkMode){
         document.documentElement.classList.add("dark");
      }
      else {
         document.documentElement.classList.remove("dark");
      }
  } , [darkMode]);



  const toggleTheme = () => {
     setDarkMode(!darkMode);
     document.documentElement.classList.toggle("dark");
     localStorage.setItem("theme" , darkMode ? "light" : "dark");
  };

  return (
     <div className="flex flex-col min-h-screen bg-white dark:bg-gray-600">
      <Header darkMode={darkMode} toggleTheme={toggleTheme}/>
      

     </div>
  );
}



export default App;


