import http from "../http/http";

export const verifyContact = async (data: any, message: string) => {
    if (data.mobile || data.email) {
        const res = await http('/partners/validateInput?source=preRegister', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

        const resdata = await res.json()

        return !resdata.data.isExists || message;
    }

    return false
}