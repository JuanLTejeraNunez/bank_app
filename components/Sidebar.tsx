
import link from 'next/link'
import Image from 'next/image'


const Sidebar = ({user}: SiderbarProps) => {
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

            </link>
            <h1 className="sidebar-logo">Horizon</h1>
        </nav>

    </section>
  )
}

export default Sidebar