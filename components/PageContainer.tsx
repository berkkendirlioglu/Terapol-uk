import React, { ReactNode } from 'react'

export default function PageContainer({className, children}:{className?:string, children:ReactNode}) {
  return (
    <div className={`w-[99%] max-w-[99%] xl:w-[1170px] xl:max-w-[1170px] lg:px-0 px-4 ${className}`}>
      {children}
    </div>
  )
}
