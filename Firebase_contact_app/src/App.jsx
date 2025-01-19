import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {collection,getDocs, onSnapshot} from 'firebase/firestore'
import {db} from "./config/firebase"
import Contact_card from "./components/Contact_card";
import Modal from "./components/Modal";
import { IoSearchOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import { ToastContainer, toast } from 'react-toastify';
import ContactNotFound from "./components/ContactNotFound";


function App() {

  const [contacts, setContacts] = useState([]);

  const [open,setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  }
  const onClose = () => {
    setOpen(false);
  }

  useEffect(()=>{
    const getContacts = async () => {
      try{
        const contactRef = collection(db, 'Firebase-contacts');
        
        onSnapshot(contactRef, (snapshot) => {
          const contactList = snapshot.docs.map(doc => {
            return {...doc.data(), id: doc.id}
          })
          setContacts(contactList);
          return contactList;
        });
        
      }
      catch(error){
        console.log(error)
      }
    }

    getContacts();
  },[])

  const filtered_contacts = (e) => {
     const value = e.target.value;

     const contactRef = collection(db,"Firebase-contacts");

     onSnapshot(contactRef, (snapshot) => {
      const contactList = snapshot.docs.map(doc => {
        return {...doc.data(), id: doc.id}
      })

      const filtered_contacts = contactList.filter((contacts)=>{
        return contacts.name.toLowerCase().includes(value.toLowerCase())
      })

      setContacts(filtered_contacts);
      return filtered_contacts;
    });


  }

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex justify-center">
        <div className="relative flex items-center">
          <IoSearchOutline className="absolute text-white text-3xl ml-2" />
          <input
            onChange={filtered_contacts}
            placeholder="Search Contact"
            type="text"
            className="text-lg text-white pl-10 h-10 flex-grow rounded-lg border-white border-2 bg-transparent"
          />
        </div>
        <div>
          <FaCirclePlus onClick={onOpen} className="text-4xl cursor-pointer text-white m-2" />
        </div>
      </div>
        <div className="mt-4 flex flex-col gap-4">
          {
            contacts.length <= 0 ? (<ContactNotFound />): contacts.map((contacts)=>(
              <Contact_card key={contacts.id} contacts={contacts} />
            ))
          }
        </div>
        
      </div> 
      <AddAndUpdateContact isOpen={open} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
