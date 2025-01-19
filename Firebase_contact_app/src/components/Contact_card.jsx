import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import {RiEditCircleLine} from "react-icons/ri"
import {IoMdTrash} from 'react-icons/io'
import {db} from '../config/firebase'
import { deleteDoc,doc } from 'firebase/firestore'
import AddAndUpdateContact from './AddAndUpdateContact';
import { useState } from 'react';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';

function Contact_card({contacts}) {
  const {onOpen,onClose,open} = useDisclouse();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db,"Firebase-contacts",id))
      toast.success("Contact Deleted sucessfully")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div 
            key={contacts.id} 
            className="rounded-lg flex justify-between items-centre p-2 bg-yellow-100">
              <div className="flex gap-2">
              <HiOutlineUserCircle className="text-orange-500 text-4xl"/>
              <div className="">
                <h2 className='font-medium'>{contacts.name}</h2>
                <p className="text-sm">{contacts.email}</p>
              </div>
              </div>
              <div className="flex text-3xl items-center">
                <RiEditCircleLine onClick={onOpen} className='cursor-pointer' />
                <IoMdTrash onClick={() => {deleteContact(contacts.id)}} className="text-orange-500 cursor-pointer"/>
              </div>
              <AddAndUpdateContact contacts={contacts} isUpdate={true} onClose={onClose} isOpen={open} />
    </ div>
  )
}

export default Contact_card