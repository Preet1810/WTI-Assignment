import React, { useDebugValue, useEffect, useState } from 'react'
import { getAllClients } from '../services/clients'
import { deleteClient } from '../services/clients';
import CreateClient from './CreateClient';
import EditClient from './EditClient';

const Clients=() => {
    const [clients, setClients]=useState();
    const [editClient, setEditClient]=useState(false);
    const [clientId, setClientId]=useState("");

    const deleteaClient=async (id) => {
        try {
            const { data }=await deleteClient(id);
            if (data.error) {
                alert(data.error)
            }
        } catch (error) {
            alert(error)
        }
    }

    const gettingClients=async () => {
        try {
            const { data }=await getAllClients();
            if (data.error) {
                alert(data.error)
            } else {
                setClients(data.result)
            }
        } catch (error) {
            alert(error);
        }
    }

    useEffect(() => {
        gettingClients()
    }, [])
    useEffect(() => {
        console.log(clients);
    }, [clients])


    return (
        <>
            <div className='w-full flex'>
                <div className='w-[900px]'>
                    <table className="table-auto w-full">
                        <thead className='bg-gray-200 h-[60px]'>
                            <tr className=''>
                                <th className='text-left'>Name</th>
                                <th className='text-left'>Last Name</th>
                                <th className='text-left'>Email</th>
                                <th className='text-left'>Mobile No</th>
                                <th className='text-left'>Project</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients?.map((client, index) => (
                                <tr key={index}>
                                    <td>{client.name}</td>
                                    <td>{client.lastName}</td>
                                    <td>{client.email}</td>
                                    <td>{client.mobile}</td>
                                    <td>{client.project}</td>
                                    <td className='flex gap-x-4'>
                                        <span
                                            onClick={() => {
                                                setEditClient(true);
                                                setClientId(client._id);
                                            }}
                                            className='cursor-pointer'>Edit</span>
                                        <span
                                            onClick={async () => {
                                                await deleteaClient(client._id)
                                                gettingClients();
                                            }}
                                            className='cursor-pointer'>Delete</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className='w-1/3'>
                    <CreateClient getClients={gettingClients} />
                </div>
            </div>
            {editClient&&(
                <EditClient getClients={gettingClients} clientId={clientId} />
            )}
        </>
    )
}

export default Clients