import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Menu({ onClose }) {
    const navigate = useNavigate();

    // Используем useEffect для управления классом no-scroll на body
    useEffect(() => {
        document.body.classList.add('no-scroll');
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[10000] flex items-end justify-end">
            <div className="fixed inset-0 bg-[#171717] flex flex-col justify-between" onClick={onClose}>
                <div className="p-10 w-full flex flex-row justify-between items-center">
                    <img loading="eager" className="h-8" src={require("../../../images/logo_firemans.png")} alt="logo"/>
                    <button onClick={onClose} className="w-8 h-8 bg-[#FFF] justify-center flex items-center hover:opacity-50">
                        <IoMdClose className="text-xl text-[#171717] font-inter"/>
                    </button>
                </div>
                <div className="flex flex-col space-y-6">
                    <button onClick={() => navigate("/rent")} className="hover:opacity-50">
                        <p className="text-white text-2xl uppercase font-bold">Аренда транспорта</p>
                    </button>
                    <button onClick={() => navigate("/shop")} className="hover:opacity-50">
                        <p className="text-white text-2xl uppercase font-bold">Поставка запчастей и оборудования</p>
                    </button>
                    <button onClick={() => navigate("/education")} className="hover:opacity-50">
                        <p className="text-white text-2xl uppercase font-bold">Обучение</p>
                    </button>
                    <button onClick={() => navigate("/")} className="hover:opacity-50">
                        <p className="text-white text-2xl uppercase font-bold">О нас</p>
                    </button>
                    <button onClick={() => navigate("/blog")} className="hover:opacity-50">
                        <p className="text-white text-2xl uppercase font-bold">Блог</p>
                    </button>
                    <button onClick={() => navigate("/contacts")} className="hover:opacity-50">
                        <p className="text-white text-2xl uppercase font-bold">Контакты</p>
                    </button>
                </div>
                <button className="hover:opacity-50 py-6">
                    <p className="text-white text-2xl uppercase font-bold">+7 (777) 777-77-77</p>
                </button>
            </div>
        </div>
    )
};

export default Menu;