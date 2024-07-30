import Navbar from "../ux/Navbar";
import Form from "../ux/Form";
import Footer from "../ux/Footer";
import { useEffect } from "react";

function ContactsPage() {

    useEffect(() => {
        // Прокручивает страницу к началу при монтировании компонента
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="h-[100vh] relative w-full items-center flex bg-contact-image bg-fixed bg-no-repeat bg-center">
                <div className="flex flex-col absolute -z-1 mobile:p-6 laptop:p-12 space-y-64">
                    <p className="uppercase text-5xl font-bold text-white font-neutral">Контакты</p>
                    <div className="flex flex-row space-x-24">
                        <div className="flex flex-col items-start space-y-4">
                            <p className="text-3xl text-white font-light font-inter uppercase">Головной офис</p>
                            <div className="space-y-2">
                                <p className="text-xl text-white text-inter">+77025111511</p>
                                <p className="text-xl text-white text-inter">hello@loftpineapple.com</p>
                                <p className="text-xl text-white text-inter">Казахстан, г. Караганда, ул.<br/> Ермекова, д. 28, офис 411</p>
                            </div>
                        </div>
                        <div className="mobile:hidden laptop:flex flex-col items-start space-y-4">
                            <p className="text-3xl text-white font-light font-inter uppercase">Аренда автотранспорта</p>
                            <div className="space-y-2">
                                <p className="text-xl text-white text-inter">+77025111511</p>
                                <p className="text-xl text-white text-inter">hello@loftpineapple.com</p>
                                <p className="text-xl text-white text-inter">Казахстан, г. Караганда, ул.<br/> Ермекова, д. 28, офис 411</p>
                            </div>
                        </div>
                        <div className="mobile:hidden laptop:flex flex-col items-start space-y-4">
                            <p className="text-3xl text-white font-light font-inter uppercase">Поставка товаров</p>
                            <div className="space-y-2">
                                <p className="text-xl text-white text-inter">+77025111511</p>
                                <p className="text-xl text-white text-inter">hello@loftpineapple.com</p>
                                <p className="text-xl text-white text-inter">Казахстан, г. Караганда, ул.<br/> Ермекова, д. 28, офис 411</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile:flex laptop:hidden mobile:p-6 flex-col items-start space-y-4">
                <p className="text-3xl text-[#171717] font-inter font-light uppercase">Аренда автотранспорта</p>
                <div className="space-y-2">
                    <p className="text-xl text-[#171717] font-inter">+77025111511</p>
                    <p className="text-xl text-[#171717] font-inter">hello@loftpineapple.com</p>
                    <p className="text-xl text-[#171717] font-inter">Казахстан, г. Караганда, ул.<br/> Ермекова, д. 28, офис 411</p>
                </div>
            </div>
            <div className="mobile:flex laptop:hidden mobile:p-6 flex-col items-start space-y-4">
                <p className="text-3xl text-[#171717] font-inter font-light uppercase">Поставка товаров</p>
                <div className="space-y-2">
                    <p className="text-xl text-[#171717] font-inter">+77025111511</p>
                    <p className="text-xl text-[#171717] font-inter">hello@loftpineapple.com</p>
                    <p className="text-xl text-[#171717] font-inter">Казахстан, г. Караганда, ул.<br/> Ермекова, д. 28, офис 411</p>
                </div>
            </div>
            <Form/>
            <Footer/>
        </div>

    )
};

export default ContactsPage;