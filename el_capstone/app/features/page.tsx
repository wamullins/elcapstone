import axios from 'axios'
import ElCapitan from "@/components/ElCapitan"

export default () => {
    const getCollection = async () => {
        const response = await axios.get(`http://localhost:3000/api/features`)
        return response.data
    }

    const collection = getCollection()
    console.log("THIS PART HERE ")
    console.log(collection)

    if (!collection) {return <ElCapitan data={null} />}

    return (
        <>
            <ElCapitan data={collection} />
        </>
    )
}