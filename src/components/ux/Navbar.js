import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from "react";
import Menu from "./modal/Menu";

function Navbar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [bgColor, setBgColor] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBgColor("rgba(16, 16, 16, 0.5)");
            } else {
                setBgColor("transparent");
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className={`fixed z-10 mobile:p-2 laptop:p-6 mobile:px-6 laptop:px-12 flex flex-row justify-between w-full items-center transition-colors duration-300`} 
            style={{ backgroundColor: bgColor }}
        >
            <img loading="eager" className="h-8" src={require("../../images/logo_firemans.png")} alt="logo"/>
            <p className="desktop:text-lg tablet:text-xs text-white font-semibold hover:opacity-50 mobile:hidden laptop:block font-inter">
                <a 
                    href="https://wa.me/77777777777" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline"
                >
                    +7 (777) 777-77-77
                </a>
            </p>
            <div className="flex flex-row items-center space-x-8 mobile:hidden laptop:block">
                <button onClick={() => navigate("/rent")} className="hover:opacity-50">
                    <p className="desktop:text-lg tablet:text-xs text-white font-semibold font-inter">Аренда транспорта</p>
                </button>
                <button onClick={() => navigate('/shop')} className="hover:opacity-50">
                    <p className="desktop:text-lg tablet:text-xs text-white font-semibold font-inter">Поставка запчастей и оборудования</p>
                </button>
                <button onClick={() => navigate("/education")} className="hover:opacity-50">
                    <p className="desktop:text-lg tablet:text-xs text-white font-semibold font-inter">Обучение</p>
                </button>
            </div>
            <div className="flex flex-row items-center space-x-8 mobile:hidden laptop:block">
                <button onClick={() => navigate('/')} className="hover:opacity-50">
                    <p className="desktop:text-lg tablet:text-xs text-white font-semibold font-inter">О нас</p>
                </button>
                <button onClick={() => navigate("/blog")} className="hover:opacity-50">
                    <p className="desktop:text-lg tablet:text-xs text-white font-semibold font-inter">Блог</p>
                </button>
            </div>
            <button onClick={() => navigate('/contacts')} className="hover:opacity-50 mobile:hidden laptop:block">
                <p className="desktop:text-lg tablet:text-xs text-white font-semibold font-inter">Контакты</p>
            </button>
            <button onClick={() => setIsOpen(true)} className="hover:opacity-50 mobile:block laptop:hidden">
                <FiMenu className="text-3xl text-white"/>
            </button>
            { isOpen && <Menu onClose={() => setIsOpen(false)}/> }
        </div>
    );
}

export default Navbar;
