import React from 'react'
import { FaRegLightbulb } from "react-icons/fa6";

type Props = {}

export const LightAndDarkBtn = (props: Props) => {
  return (
    <div className='flex items-center gap-2'>
        <FaRegLightbulb className='text-2xl' />
    </div>
  )
}