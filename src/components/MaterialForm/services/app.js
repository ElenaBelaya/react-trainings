import axios from "axios";

axios.defaults.baseURL = "https://62cd2effa43bf780085313e1.mockapi.io";

export const addMaterials = async values => {
    const responce = await axios.post('/material', values);
    return responce.data;
};

export const gerMaterials = async () => {
    const responce = await axios.get('/material');
    return responce.data;
} 

export const deleteMaterial = async (id) => {
    const responce = await axios.delete(`/material/${id}`)
    return responce;
}