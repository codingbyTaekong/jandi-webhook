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
        const response = await fetch(url, {
            headers : {
                'Accept': 'application/vnd.tosslab.jandi-v2+json',
                'Content-Type': 'application/json',
            },
            method : "POST",
            body : JSON.stringify({
                ...data,
                connectColor : color,
            })
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
export default JandiHook