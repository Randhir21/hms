import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faUserPlus,faFileInvoiceDollar,faFlask,faBuildingColumns,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../firebase';

const auth=getAuth(app);
const NavDrawer = ({ isOpen }) => {
    const navigate=useNavigate()
    const logOut = async () => {
      try {
        await signOut(auth);
        console.log("User signed out successfully");
        
        // You can perform additional actions after signing out if needed
      } catch (error) {
        console.error("Error signing out:", error.message);
      }
    };
  return (
    <>
      <div className='navDrawer' style={{ display: isOpen ? 'block' : 'none',}}>
        <ul>
            <li onClick={()=>navigate("/")}><FontAwesomeIcon icon={faHouse} className='navIcon'/> Dashboard</li>
            <li onClick={()=>navigate("/opdAddmision")}><FontAwesomeIcon icon={faUserPlus} className='navIcon'/> OPD Addmision</li>
            <li onClick={()=>navigate("/ipdAddmision")}><FontAwesomeIcon icon={faUserPlus} className='navIcon' /> IPD Addmision</li>
            <li onClick={()=>navigate("/ipdBilling")}> <FontAwesomeIcon icon={faFileInvoiceDollar} className='navIcon' /> IPD Billing</li>
            <li onClick={()=>navigate("/labEntry")}><FontAwesomeIcon icon={faFlask} className='navIcon' /> Lab Entry</li>
            <li onClick={()=>navigate("/mis")}><FontAwesomeIcon icon={faBuildingColumns} className='navIcon' /> MIS</li>
            <div className="divider"></div>
            <li onClick={logOut}><FontAwesomeIcon icon={faRightFromBracket} className='navIcon' /> Logout</li>
        </ul>
      </div>
    </>
  )
}

export default NavDrawer
