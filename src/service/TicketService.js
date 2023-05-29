import axios from "axios";

export const findByIdSeat=async (id)=>{
    const result=await axios.get(`http://localhost:8080/seat/find-by-id/`+id);
    return result.data;
}

export const checkDiscount=async (nameDiscount)=>{
    const result=await axios.get(`http://localhost:8080/api/ticket/check-discount?nameDiscount=${nameDiscount}`)
    return result.data;
}