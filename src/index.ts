import axios from 'axios';

interface JANDI_MESSAGE {
    body : string,
    connectInfo ?: MSG[]
}
interface MSG {
    title ?: string,
    description ?: string,
    imageUrl ?: string
}
/**
 * 
 * @param url 
 * @param data 
 * @param type 
 * @returns 
 */
const JandiHook = async (url : string, data : JANDI_MESSAGE, type ?: "error"|"success"|"warning") => {
    try {
        const API = axios.create({
            baseURL : url,
            headers : {
                'Accept': 'application/vnd.tosslab.jandi-v2+json',
                'Content-Type': 'application/json',
            }
        })
        let color = ""
        switch (type) {
            case "error":
                color = "#f92100"
                break;
            case "success":
                color = "#339af0"
            case "warning":
                color = "#fcc419"
            default:
                break;
        }
        await API.post(url, {
            ...data,
            connectColor : color,
        })
        return true
    } catch (error) {
        return false
    }
}
export default JandiHook