import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { editClient } from '../services/clients';
import { getClient } from '../services/clients';
const EditClient=({ clientId, getClients }) => {
    const [loading, setLoading]=useState(false);
    const [user, serUser]=useState();

    const getParticularClient=async (id) => {
        try {
            const { data }=await getClient(id);
            if (data.error) {
                alert(data.message)
            } else {
                serUser(data.result);
            }
        } catch (error) {
            alert(error)
        }
    }

    const initialValues={
        name: "",
        lastName: "",
        email: "",
        mobile: null,
        project: ""
    }

    const formik=useFormik({
        initialValues,
        onSubmit: async (values, action) => {
            console.log("Form Submitted Values: ", values)
            try {
                setLoading(true);
                const { data }=await editClient(clientId, values);
                if (data.error) {
                    setLoading(false);
                    alert(data.message);
                } else {
                    setLoading(false);
                    action.resetForm();
                    getClients();
                }
            } catch (error) {
                setLoading(false)
                alert(error)
            }
        }
    })


    const setFormikValues=() => {
        formik.setValues({
            ...formik.values,
            name: user?.name||"",
            lastName: user?.lastName||"",
            email: user?.email||"",
            mobile: user?.mobile||null,
            project: user?.project||""
        })
    }



    useEffect(() => {
        setFormikValues();
    }, [user])

    useEffect(() => {
        getParticularClient(clientId);
    }, [clientId])

    return (
        <div className='flex flex-col gap-y-4 px-10'>
            <h1 className='text-[30px] font-[600]'>Edit Client</h1>
            <form
                onSubmit={formik.handleSubmit}
                className='flex flex-col gap-y-5'>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="name">Name</label>
                    <input
                        className='border border-gray-200'
                        id='name'
                        type="text"
                        name='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="lname">Last Name</label>
                    <input
                        className='border border-gray-200'
                        id='lname'
                        type="text"
                        name='lastName'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="email">Email</label>
                    <input
                        className='border border-gray-200'
                        id='email'
                        type="email"
                        name='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="Mobile">Mobile No</label>
                    <input
                        className='border border-gray-200'
                        id='Mobile'
                        type="number"
                        name='mobile'
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label htmlFor="Project">Project</label>
                    <input
                        className='border border-gray-200'
                        id='Project'
                        type="text"
                        name='project'
                        value={formik.values.project}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <button
                        type='submit'
                        className='bg-blue-400 px-6 py-3 rounded-xl text-white font-[600]'>
                        Edit Client
                    </button>
                </div>
            </form>

        </div>
    )
}

export default EditClient