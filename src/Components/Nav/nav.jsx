
import Navstyle from "./Nav.module.css"
import { Link, useNavigate } from "react-router-dom"

export default function nav() { 

const navigate = useNavigate();

const Names = [
    {title:"About Us" ,path:"/aboutus"},
    {title:"Careem plus" ,path:"/careemplus"},
    {title:"Partners" ,path:"/partners"},
    {title:"Services",path:"/services"},
]


return (

    <div className={Navstyle.body}>
        <div className={Navstyle.container}>
            <div className={Navstyle.image}>
                <img src="/logo/download.png" alt="Creamimg" 
                    onClick={()=>navigate("/")}
                />
            </div>

        <div className="transition-all ease-in-out duration-200 overflow-hidden" >
            <div className={Navstyle.container1} > 
                {Names.map((items, index) => (
                    <Link 
                    key={index} 
                    to={items.path}
                    onClick={()=>window.scrollTo( { top:0 , behavoiur:"smooth"})}
                    >
                        <div >
                        <h1>{items.title}</h1>
                        </div>
                    </Link>
                 ))}   
            </div>
        </div>    

            <div className={Navstyle.secondcontainer}>
                <div className={Navstyle.secondcontainer1}>
                <button>Sign In</button> 
                    <select> 
                        <option value="English">English</option>
                        <option value="Urdu">Urdu</option>
                    </select>

                </div>
            </div>

            <div className={Navstyle.thirdcon}>
                <button>Download the App</button>
                <i className="fa-solid fa-bars"></i>
            </div>

        </div>    
    </div>

)
}


