import { makeRequest } from "@/lib/axios";

export const getProperty = async(id) => {
    const { data } = await makeRequest('/properties/detail',{
        params: {
           externalID: id
          }
    })

    return data;
}