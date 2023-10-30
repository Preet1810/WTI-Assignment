import React, { useState } from 'react'
import { useFormik } from 'formik';
import { createClient } from '../services/clients';
const CreateClient=({ getClients }) => {
    const [loading, setLoading]=useState(false);

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
                const { data }=await createClient(values);
                if (data.error) {
                    setLoading(false);
                    alert(data.message);
                } else {
                    setLoading(false)
                    action.resetForm();
                    getClients();
                }
            } catch (error) {
                setLoading(false)
                alert(error)
            }
        }
    })


    return (
        <div className='flex flex-col gap-y-4 px-10'>
            <h1 className='text-[30px] font-[600]'>Create Client</h1>
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <button
                        type='submit'
                        className='bg-blue-400 px-6 py-3 rounded-xl text-white font-[600]'>
                        Create Client
                    </button>
                </div>
            </form>

        </div>
    )
}

export default CreateClient