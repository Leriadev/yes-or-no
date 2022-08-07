import * as axios from "axios"

export const yesOrNoAPI = {
    getAnswer: () => {
        return axios.get('https://yesno.wtf/api')
    }
 }