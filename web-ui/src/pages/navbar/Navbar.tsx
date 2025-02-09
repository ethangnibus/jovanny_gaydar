
interface NavbarProps {
    className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
    className
}) => {
    return (
        <div className={`${className} flex h-28 justify-center items-center pointer-events-none z-10`}>
            <div className="flex space-x-4 bg-white/30 pt-4 px-4 rounded-full border-2">
                <h1 className="font-luckiest-guy text-6xl bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
                    Jovanny's
                </h1>
                <h1 className="font-luckiest-guy text-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    Gaydar
                </h1>
            </div>
         </div>
    );
}

export default Navbar;