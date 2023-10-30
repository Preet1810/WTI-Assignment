import { baseUrl, httpservice } from "./httpservice";

export async function getAllClients() {
    return await httpservice.get(baseUrl)
}

export async function getClient(id) {
    return await httpservice.get(baseUrl+`${id}`)
}

export async function createClient(body) {
    return await httpservice.post(baseUrl, body)
}

export async function editClient(id, body) {
    return await httpservice.put(baseUrl+`${id}`, body)
}

export async function deleteClient(id) {
    return await httpservice.delete(baseUrl+`${id}`)
}


