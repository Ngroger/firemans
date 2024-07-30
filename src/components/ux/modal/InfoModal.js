import React from 'react';
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function InfoModal({ onClose }) {
    const modalVariants = {
        hidden: { x: '200%' },
        visible: { x: 0, transition: { type: 'spring', stiffness: 100 } },
        exit: { x: '200%', transition: { type: 'spring', stiffness: 100 } }
    };

    return (
        <div className="fixed inset-0 z-50 flex mobile:items-center tablet:items-end tablet:justify-end mobile:justify-center">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <motion.div 
                className="relative bg-white mobile:h-[600px] mobile:w-10/12 tablet:w-6/12 laptop:w-4/12 tablet:h-full shadow-lg p-6 flex flex-col overflow-y-auto overflow-x-auto"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
            >
                <div className='flex w-full flex-row items-center justify-between'>
                    <p className='uppercase text-3xl text-[#171717] font-inter'>карточка товара</p>
                    <button className='bg-[#171717] justify-center items-center flex w-10 h-10 hover:opacity-50' onClick={onClose}>
                        <IoMdClose className='text-white text-xl'/>
                    </button>
                </div>
                {/* <div className='relative'>
                    <img loading="eager" className='h-96 w-full object-cover my-2' src={require("../../../images/shop/shop1.png")} alt='info_image'/>
                    <div className="bg-[#171717] p-2 absolute z-10 mobile:block laptop:hidden">
                        <p className="text-xs text-[#FFF] font-light font-inter">20 000 тг / час</p>
                    </div>
                </div> */}
                <div className="relative h-72">
                    <img loading="eager" src={require(`../../../images/shop/shop1.png`)} className="w-full h-72 object-cover" alt="info_image" />
                    <div className="bg-[#171717] p-2 absolute z-10 bottom-0 left-0 mobile:block laptop:hidden">
                        <p className="text-xs text-[#FFF] font-light font-inter">20 000 тг / час</p>
                    </div>
                </div>
                <div className='flex w-full flex-row items-center justify-between'>
                    <p className='text-xl text-[#171717] font-inter'>карточка товара</p>
                    <p className='text-xl text-[#171717] font-inter mobile:hidden laptop:block'>20 000 / час</p>
                </div>
                <p className='text-lg mt-2 text-[#171717] font-inter flex-grow'>Автоцистерна пожарная объемом 6 м3 на шасси Уал-5557 предназначена для доставки к месту пожара боевого расчета, пожарно-технического вооружения, запаса воды и пенообразователя. Применяется как самостоятельная боевая единица или как насосная установка при работе в «перекачку» с одной или несколькими автоцистернами при тушении пожаров водой, воздушно- механической пеной в населенных пунктах и на промышленных объектах.</p>
                <button className='w-full bg-[#171717] p-4 hover:opacity-50'>
                    <p className='text-xl text-white text-inter'>Заказать</p>
                </button>
            </motion.div>
        </div>
    );
}

export default InfoModal;
