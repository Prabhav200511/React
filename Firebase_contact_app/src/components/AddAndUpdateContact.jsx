import React from 'react'
import Modal from './Modal'
import {Field,Formik,Form, ErrorMessage} from 'formik'
import {db} from '../config/firebase'
import { collection } from 'firebase/firestore'
import { addDoc,doc,updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

const contactSchemaValidation = Yup.object().shape({
    name:Yup.string().required("Name is required"),
    email:Yup.string().required("Email is required")
})

const AddAndUpdateContact = ({contacts,isUpdate,isOpen,onClose}) => {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db,"Firebase-contacts")
            await addDoc(contactRef,contact);
            onClose();
            toast.success("Contact Added sucessfully")
        } catch (error) {
            console.log(error);
        }
        
    }

    const updateContact = async (contact,id) => {
        try {
            const contactRef = doc(db,"Firebase-contacts",id)
            await updateDoc(contactRef,contact);
            onClose();
            toast.success("Contact Updated sucessfully")
        } catch (error) {
            console.log(error);
        }
    }


  return (
    
    <div>
        <Modal 
        isOpen={isOpen}
        onClose={onClose}
    >
        <Formik
            validationSchema={contactSchemaValidation}
            initialValues={ isUpdate
                ? {
                    name:contacts.name,
                    email:contacts.email,
                }
                :{
                    name:"",
                    email:"",
                }
            }
            onSubmit={
                (values)=>{
                    isUpdate?updateContact(values,contacts.id):addContact(values)
                }
            }
        >
            <Form className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                <Field name = "name" className="border-black border-2 p-2" />
                <div className='text-red-600 text-xs'>
                    <ErrorMessage name="name" />
                </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                <Field  name = "email" className="border-black border-2 p-2" />
                <div className='text-red-600 text-xs'>
                    <ErrorMessage name="email" />
                </div>
                </div>

                <button type = "submit" className='border bg-orange-600 px-3 py-1 self-end'>
                    {isUpdate ? "Update" : "Add"} Contact
                </button>
            </Form>
        </Formik>
    </Modal>
  </div>
  )
}

export default AddAndUpdateContact