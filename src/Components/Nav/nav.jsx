
import Navstyle from "./Nav.module.css"

export default function nav() { 
return (

    <div className={Navstyle.body}>
        <div className={Navstyle.container}>
            <div className={Navstyle.image}>
                <img src="/logo/download.png" alt="Creamimg" />
            </div>

            <div className={Navstyle.container1}> 
                <h1>Services</h1>
                <h1>Partners</h1>
                <h1>Careem plus</h1>
                <h1>About Us</h1>
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


