import React from 'react'
import { MdPersonSearch } from "react-icons/md";

type Props = {
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function Search(props: Props) {
  return (
    <form onSubmit={props.onSubmit} className='flex items-center gap-2 shadow-md focus-within:ring-1 dark:focus-within:ring-gray-200 focus-within:ring-slate-800 p-2 rounded-lg'>
        <section className='flex items-center w-full h-full gap-2'>
        <MdPersonSearch className='text-2xl text-blue-500' />
            <input value={props.value} onChange={props.onChange} className= "w-full h-[30px] rounded bg-inherit outline-none px-1 text-sm" type="text" placeholder="Search Github username..." />
        </section>
        <button className='rounded-lg bg-blue-400 px-4 py-2 text-white hover:opacity-80 transition-all'>Search</button>
    </form>
  )
}