'use client'

import React from 'react'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Seach() {
    const [search, setSeach] = useState('')
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSeach('')
        router.push(`/${search}/`)
    }
  return (
    <form className='w-50 felx justify-center md:justify-between' onSubmit={handleSubmit}>
        <input
        type="text"
        value={search} 
        onChange={(e) => setSeach(e.target.value)}
        className='bg-white p-2 w-80 text-xl rounded-xl'
        placeholder='Search'
         />
         <button className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'>🚀</button>
    </form>
  )
}
