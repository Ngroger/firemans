import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#171717] mobile:p-6 laptop:p-12">
            <div className="flex mobile:flex-col mobile:space-y-2 laptop:space-y-0 laptop:flex-row justify-between mobile:items-start laptop:items-center">
                <p className="mobile:text-3xl desktop:text-4xl desktop2:text-6xl font-light text-white">+7 (777) 777-77-77</p>
                <p className="text-xl text-white text-inter block">
                    <a 
                        href="tel:+77777777777" 
                        className="hover:underline"
                    >
                        Позвонить нам
                    </a>
                </p>
            </div>
            <div className="flex mobile:flex-col mobile:space-y-2 laptop:space-y-0 laptop:flex-row justify-between mobile:items-start laptop:items-center mt-4">
                <p className="mobile:text-3xl desktop:text-4xl desktop2:text-6xl font-light text-white">hello@loftpineapple.com</p>
                <p className="text-xl text-white text-inter">
                    <a 
                        href="https://wa.me/77777777777" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline"
                    >
                        Написать нам
                    </a>
                </p>
            </div>
            <div className="mobile:space-y-6 laptop:space-y-0 flex mobile:flex-col laptop:flex-row justify-between mobile:items-start laptop:items-center py-12">
                <img loading="eager" src={require("../../images/logo_firemans.png")} alt="logo" className="h-12"/>
                <div className="flex mobile:flex-col laptop:flex-row mobile:space-x-0 mobile:space-y-8 laptop:space-y-0 laptop:space-x-16 mobile:px-0 laptop:px-48">
                    <div className="flex flex-col space-y-2 items-start">
                        <button onClick={() => navigate("/rent")} className="hover:opacity-50">
                            <p className="mobile:text-md laptop:text-xl text-white text-inter font-light font-inter">Аренда транспорта</p>
                        </button>
                        <button onClick={() => navigate("/shop")} className="hover:opacity-50">
                            <p className="mobile:text-md laptop:text-xl text-white text-inter font-light font-inter">Поставка запчастей и оборудования</p>
                        </button>
                        <button onClick={() => navigate("/education")} className="hover:opacity-50">
                            <p className="mobile:text-md laptop:text-xl text-white text-inter font-light font-inter">Обучение</p>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-2 items-start">
                        <button onClick={() => navigate("/blog")} className="hover:opacity-50">
                            <p className="mobile:text-md laptop:text-xl text-white text-inter font-light font-inter">Блог</p>
                        </button>
                        <button onClick={() => navigate("/")} className="hover:opacity-50">
                            <p className="mobile:text-md laptop:text-xl text-white text-inter font-light font-inter">О нас</p>
                        </button>
                        <button onClick={() => navigate("/contacts")} className="hover:opacity-50">
                            <p className="mobile:text-md laptop:text-xl text-white text-inter font-light font-inter">Контакты</p>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-2 items-start">
                        <button className="hover:opacity-50">
                            <p className="mobile:text-md laptop:text-xl text-white text-inter font-light font-inter">Instagram</p>
                        </button>
                        <button className="hover:opacity-50">
                            <p className="mobile:text-md laptop:text-xl text-white text-inter font-light font-inter">Telegram</p>
                        </button>
                        <button className="hover:opacity-50">
                            <p className="mobile:text-md laptop:text-xl text-white text-inter font-light font-inter">WhatsApp</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-10">
                <p className="text-lg text-white font-inter/50">© 2024 Batys service pro</p>
                <p className="text-lg text-white font-inter/50">Политика конфиденциальности</p>
            </div>
        </div>
    )
};

export default Footer;