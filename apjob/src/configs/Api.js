import axios from "axios";

const SERVER_CONTEXT = "/apjob_javaBTL";

export const endpoints = {
    "tags": `${SERVER_CONTEXT}/api/tags/`,
    "recruiment-news": `${SERVER_CONTEXT}/api/recruiment-news/`
}

export default axios.create({
    baseURL: "http://localhost:8080"
})