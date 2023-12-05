import { Client } from "pg";

export const client = new Client({
    host: 'localhost',
    port: '5432',
    user: 'cleverson',
    password: '1234',
    database: 'academicnews'
})

client.connect()