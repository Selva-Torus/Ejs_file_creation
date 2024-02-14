"use client"
import DynamicTable from '@/components/Table'
import React, { useEffect } from 'react'
import { executeDynamicFunction } from '@/utils/utilsFunctions'

const Page = () => {
    const [data, setData] = React.useState([])
    const getDatafromDynamicFunction = async () => {
        const res = await executeDynamicFunction();
        setData(res);
    }

    useEffect(() => {
        getDatafromDynamicFunction();
    }, [])

    return (
        <div>
            <DynamicTable data={data} />
        </div>
    )
}

export default Page
