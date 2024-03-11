'use client'
import React from 'react'
import { LuLightbulb, LuLightbulbOff } from "react-icons/lu";
import { useTheme } from 'next-themes'

type Props = {}

export const LightAndDarkBtn = (props: Props) => {
    const { resolvedTheme, setTheme } = useTheme()

    function toggleTheme() {
        if (resolvedTheme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

  return (
    <div className='flex items-center gap-2'>
        <button onClick={toggleTheme} className='text-2xl'>
            {resolvedTheme === 'dark' ? <LuLightbulbOff /> : <LuLightbulb />}
        </button>
    </div>
  )
}