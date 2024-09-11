import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BaseURL } from '../../config/dataLink'


const App = () => {
    const [name, setName] = useState("")
    const [cost, setAge] = useState("")
    const [dataList, setDataList] = useState([]);
    const [newName, setNewName] = useState("")
    const [newCost, setNewAge] = useState("")


    useEffect(()=> {
        fetchData()
    })

    const fetchData = async () => {
        try {
            const response = await axios.get(BaseURL)
            setDataList(response.data)
        } catch (error) {
            console.log("Fetch data is NOT successfull", error)
        }
    }

    const handleSubmit = async (event)=> {
        event.preventDefault();
        try {
            const response = await axios.post(BaseURL, {name, cost})
            console.log(response.data)
            fetchData()
        } catch (error) {
            console.error("Submit the data is NOT successful", error)
        }
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleChangeAge = (e) => {
        setAge(e.target.value)
    }

    const handleEdit = async(oldName)=> {
        try {
            const response = await axios.put(`${BaseURL}/${oldName} `, {newName, newCost})
            console.log(response.data)
            setNewName("")
            setNewAge("")
            fetchData()
        } catch (error) {
            console.error(`Error to edit`, error)
        }
    }

    const handleDelete = async()=> {
        try {
            const response = await axios.delete(`${BaseURL}/${name} `)
            console.log(response.data)
        } catch (error) {
            console.error(`Error to delete`, error)
        }
    }


  return (
    <div>
        <h1>Send data</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name: </label>
            <input type="text" value={name} onChange={handleChange} placeholder='name'/>
            <label htmlFor="">Age: </label>
            <input type="number" value={cost} onChange={handleChangeAge} placeholder='cost'/>
            <button type='submit'>Submit</button>
        </form>
        <h1>Get data</h1>
        <ul>
            {dataList.map((value, index)=> {
                return (
                    <div key={index}>
                        <li>Name: {value.name} 
                        <input type="text" value={newName} onChange={(e)=> setNewName(e.target.value)} />,
                         Age: {value.cost}
                        <input type="number" value={newCost} onChange={(e)=> setNewAge(e.target.value)} />
                        <button type='submit' onClick={()=> handleEdit(value.name)}>Edit</button>
                        <button type='submit' onClick={()=> handleDelete(value.name)}>Delete</button>
                        </li>
                    </div>
                )
            })}
        </ul>
    </div>
  )
}

export default App