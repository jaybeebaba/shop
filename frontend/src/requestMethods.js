import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"

const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWZiN2IyMDM3NDE4ZDJmZTE5MjI1MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzg1NzU0MSwiZXhwIjoxNjM4MTE2NzQxfQ.FhHRpv8F2wcj_lAZdJMq2P-JYWgOvaK2RNv8UHiGGco"


export const publicRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})
