import baseUrl from "../api/baseURL";


const useInsertDataWithImage = async (url, params) => {
    const config = {
        headers: { "content-type": "multipart/from-data" }
    }
    const res = await baseUrl.post(url, params, config)

    return res
}


const useInsertData = async (url, params) => {
    const res = await baseUrl.post(url, params)
    return res
}

export { useInsertDataWithImage, useInsertData };