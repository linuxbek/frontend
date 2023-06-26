import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full bg-white h-24 flex items-center justify-start pl-16">
      <Image 
        src='/Logo.svg'
        width={140}
        height={42}
        alt="Logo"
      />
    </div>
  )
}

export default Header