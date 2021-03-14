export function upload(data) {
    return request({
        url: data.url,
        method: data.type,
        data: data.data,
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
}