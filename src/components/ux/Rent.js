import { IoIosArrowForward } from "react-icons/io";
import InfoModal from "./modal/InfoModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Rent() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();
    const navigate = useNavigate();
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
    ];

    const openModal = (info) => {
        setSelectedProduct(info);
        setIsOpenModal(true);
    };

    return (
        <div className="mobile:px-6 laptop:px-12 mt-12">
            <div className="w-full flex flex-row justify-between items-center">
                <p className="mobile:text-xl laptop:text-4xl text-[#171717] font-inter">АРЕНДА ТРАНСПОРТНЫХ СРЕДСТВ</p>
                <button onClick={() => navigate("/rent")} className="bg-white border-[1px] border-[#171717] p-2 px-4 flex flex-row space-x-4 items-center hover:opacity-50 laptop:flex mobile:hidden">
                    <p className="text-[#171717] font-inter text-xl">Смотреть больше</p>
                    <div className="w-10 h-10 bg-[#171717] flex justify-center items-center flex-shrink-0">
                        <IoIosArrowForward className="text-xl text-white text-inter"/>
                    </div>
                </button>
            </div>
            <div className="w-full grid grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-6 mt-4">
                {rent.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="relative">
                            <img loading="eager" src={require(`../../images/shop/${item.image}.png`)} className="w-full h-auto" alt={item.title} />
                            <div className="bg-[#171717] p-2 absolute z-10 bottom-0 left-0 mobile:block laptop:hidden">
                                <p className="text-xs text-[#FFF] font-light font-inter">{item.price} тг / час</p>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <div className="w-full flex flex-row items-center justify-between py-2">
                                <p className="mobile:text-md laptop:text-xl text-[#171717] font-inter font-semibold">{item.title}</p>
                                <p className="text-xl text-[#171717] font-inter font-semibold mobile:hidden laptop:block">{item.price} тг / час</p>
                            </div>
                            <div className="flex mobile:flex-col mobile:space-y-2 laptop:space-y-0 mobile:space-x-0 laptop:space-x-6 mt-auto laptop:flex-row">
                                <button onClick={() => openModal(item)} className="border-[1px] border-[#171717] justify-center items-center p-2 w-full group hover:bg-[#171717] ease-out duration-300">
                                    <p className="text-xl font-inter group-hover:text-white">Подробнее</p>
                                </button>
                                <button className="border-[1px] bg-[#171717] border-[#171717] justify-center items-center p-2 w-full hover:bg-[#D01D32] hover:border-[#D01D32] ease-out duration-300">
                                    <p className="text-white text-xl font-inter">Заказать</p>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate("/rent")} className="bg-white border-[1px] border-[#171717] p-2 mt-4 px-4 flex flex-row space-x-4 items-center hover:opacity-50 laptop:hidden mobile:flex">
                <p className="text-[#171717] font-inter text-xl">Смотреть больше</p>
                <div className="w-10 h-10 bg-[#171717] flex justify-center items-center flex-shrink-0">
                    <IoIosArrowForward className="text-xl text-white text-inter"/>
                </div>
            </button>
            {isOpenModal && <InfoModal onClose={() => setIsOpenModal(false)} data={selectedProduct} />}
        </div>
    );
}

export default Rent;
