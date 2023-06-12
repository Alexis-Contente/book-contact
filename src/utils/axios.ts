import axios from "axios"

// CREATE FUNCTION GET
export async function axiosGet() {
    try {
        const response = await axios.get('http://localhost:8000/db');
        console.log(response.data.db);
        return response
    }
    catch (error) {
        console.error(error);
    }
}
