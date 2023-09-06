import axios from 'axios'
import ElCapitan from "@/components/ElCapitan"

export default () => {
    const getCollection = async () => {
        const response = await axios.get(`http://localhost:3000/api/climbs`)
        return response.data
    }

    const collection = getCollection()
    console.log(collection)

    return (
        <>
            <ElCapitan data={collection} />
        </>
    )  
}