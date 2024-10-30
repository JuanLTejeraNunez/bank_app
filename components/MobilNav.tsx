'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
  

const MobilNav = ({user}: MobileNavProps) => {
    const pathname  = userPathname();
  return (
    <section className="w-fulll max-w-[264px]">
        <Sheet>
  <SheetTrigger>
    <Image
    src="/icons/hamburger.svg"
    width={30}
    height={30}
    alt="menu"
    className="cursor-pointer"
    />
    </SheetTrigger>
  <SheetContent  side="left" className="border-none bg-white">
  <Link href="/"
            className="flex cursor-pointer items-center gap-1 px-4"       
            >
                 <image
                 src="/icons/logo.svg"
                 width={34}
                 height={34} 
                 alt="Horizon logo"
                 
                 />

               <h1 className="text-26 font-ibm-plex-serif font-bold text-tblack-1">Horizon</h1>
            </Link>

            <div className="mobilnav-sheet">
                <SheetClose asChild>
                    <nav className="flex h-full flex-col gap-6 pt-16 text-white">



                    {sidebarLinks.map((item)=>{
                   const isActive = pathname===item.route || pathnamestr.startsWith(`${item.route}/`)
            return{
<SheetClose asChild key={item.route}>
<Link
                 href={item.route}
                key={item.label}
                className={cn ('mobilnav-sheet_close w-full ', {'bg-bank-gradient': isActive})}
                >
               
                <Image
                src={item.IMGurl}
                alt={item.label}
               height={20}
               width={20}
                className={cn({'brightness=[3] invert- 0': isActive})}
                />
              
               <p className={cn{("text-16 font-semibold text-black-2" ,{"text-white": isActive})}}>{item.label}</p>
</Link>

          )
              
</SheetClose>

                
           




                    </nav>
                </SheetClose>
            </div>


  </SheetContent>
</Sheet>

    </section>
  )
}

export default MobilNav{user}: MobileNavProps