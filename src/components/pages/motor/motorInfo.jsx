import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BaseURL } from '../../config/dataLink'

const MotorInfo = () => {
    const [data, setData] = useState(null)
    const {id} = useParams()

    useEffect(()=> {
        const fetchData = async()=> {
           try {
            const response = await axios(BaseURL + `/motor/${id}`)
            setData(response.data)
            console.log(response.data)
           } catch (error) {
            console.log(`Error to fetch Data!`, error)
           }
        }
        fetchData()
    },[id])
    if(!data){
        return <div>Loading...</div>
    }
  return (
    <div>
        <h1>{data.name}</h1>
    </div>
  )
}

export default MotorInfo