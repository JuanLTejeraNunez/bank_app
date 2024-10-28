'use client'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn} from '@/lib/utils'
import { userPathname} from 'next/navegation'

const Sidebar = ({user}: SiderbarProps) => {
  const pathname  = userPathname();
  return (
    <section className="sidebar">
        <nav className="flex flex-col gap-4">
            <link href="/"
            className="mb-12 cursor-pointer items-center gap-2"       
            >
                 <image
                 src="/icons/logo.svg"
                 width={34}
                 height={34} 
                 alt="Horizon logo"
                 className="size-[24px] max-xl:size-14"
                 />

               <h1 className="sidebar-logo">Horizon</h1>
            </link>
           {sidebarLinks.map((item)=>{
                   const isActive = pathname===item.route || pathnamestr.startsWith(`${item.route}/`)
            return{
                <Link
                 href={item.route}
                key={item.label}
                className={cn ('siderbar-link', {'bg-bank-gradient': isActive})}
                >
                <div className='relative size-6'>
                <Image
                src={item.IMGurl}
                alt={item.label}
                fill
                className={cn({'brightness=[3] invert- 0': isActive})}
                />
                </div>
               {item.label}
</Link>
              
            }
           })}

        </nav>

    </section>
  )
}

export default Sidebar