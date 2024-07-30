import Navbar from "../ux/Navbar";
import Form from "../ux/Form";
import Footer from "../ux/Footer";
import InfoModal from "../ux/modal/InfoModal";
import { useState, useEffect } from "react";

function RentPage() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();

    useEffect(() => {
        // Прокручивает страницу к началу при монтировании компонента
        window.scrollTo(0, 0);
    }, []);

    const rent = [
        {
            title: "Самосвал 34G",
            price: "20 000",
            image: "shop1"
        },
        {
            title: "Платформа для подъема C3",
            price: "30 000",
            image: "shop2",
        },
        {
            title: "Самосвал 34G",
            price: "20 000",
            image: "shop3",
        }
    ]

    const openModal = (info) => {
        setSelectedProduct(info);
        setIsOpenModal(true);
    };

    return (
        <div>
            <Navbar/>
            <div className="h-[100vh] relative w-full items-center flex bg-rent-image bg-center bg-fixed bg-no-repeat">
                <div className="flex flex-col absolute z-1 mobile:p-6 laptop:p-12 mobile:space-y-12 tablet:space-y-32 laptop:space-y-64">
                    <p className="uppercase mobile:text-3xl tablet:text-3xl laptop:text-7xl font-bold text-white font-neutral">Аренда транспорта:<br/>решения для<br/>любых задач</p>
                    <div className="w-full flex justify-center items-center">
                        <p className="mobile:text-md tablet:text-lg laptop:text-xl text-white text-inter font-light font-inter mobile:w-full laptop:w-4/12 mobile:ml-0 laptop:ml-64">Предлагаем широкий выбор специализированного транспорта для выполнения любых задач — от строительных проектов до перевозки грузов. Надежные и современные машины в вашем распоряжении на удобных условиях аренды.</p>
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mt-4 mobile:p-6 laptop:p-12">
                {rent.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="relative">
                            <img loading="eager" src={require(`../../images/shop/${item.image}.png`)} className="w-full h-auto" alt={item.title} />
                            <div className="bg-[#171717] p-2 absolute z-10 bottom-0 left-0 mobile:block laptop:hidden">
                                <p className="text-xs text-[#FFF] font-light">{item.price} тг / час</p>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <div className="w-full flex flex-row items-center justify-between py-2">
                                <p className="mobile:text-md laptop:text-xl text-[#171717] font-inter font-semibold">{item.title}</p>
                                <p className="text-xl text-[#171717] font-inter font-semibold mobile:hidden laptop:block">{item.price} тг / час</p>
                            </div>
                            <div className="flex mobile:flex-col mobile:space-y-2 laptop:space-y-0 mobile:space-x-0 laptop:space-x-6 mt-auto laptop:flex-row">
                                <button onClick={() => openModal(item)} className="border-[1px] border-[#171717] justify-center items-center p-2 w-full hover:opacity-50">
                                    <p>Подробнее</p>
                                </button>
                                <button className="border-[1px] bg-[#171717] border-[#171717] justify-center items-center p-2 w-full hover:opacity-50">
                                    <p className="text-white">Заказать</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Form/>
            <Footer/>
            { isOpenModal && <InfoModal onClose={() => setIsOpenModal(false)} data={selectedProduct}/> }
        </div>

    )
};

export default RentPage;