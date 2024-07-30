import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Parallax } from 'react-parallax';

function SlideTwo({ next, prev }) {
    const navigate = useNavigate();

    return (
        <div className="h-[100vh] w-full relative">
            <Parallax
                bgImage={require("../../../images/sliders/slide2.png")}
                strength={500}
                className="w-full h-full absolute"
                bgImageStyle={{ objectFit: 'cover' }}
            >
                <div className='absolute z-10 w-full h-full flex mobile:flex-col laptop:flex-row justify-between mobile:p-6 laptop:px-16'>
                    <p className='mobile:text-4xl tablet:text-5xl desktop:text-7xl font-neutral text-white font-bold mt-40'>АРЕНДА ТРАНСПОРТА:<br/> РЕШЕНИЯ ДЛЯ ЛЮБЫХ ЗАДАЧ</p>
                    <div className='space-y-4 mobile:w-full tablet:w-6/12 mobile:mt-12 tablet:mt-[300px] laptop:mt-[500px]'>
                        <div className="w-full flex flex-row items-center justify-between">
                            <p className='text-xl text-white text-inter font-light font-inter'>02/03</p>
                            <div className="flex flex-row space-x-2">
                                <button onClick={prev} className="w-10 h-10 justify-center items-center flex bg-[#fff] hover:opacity-50">
                                    <IoIosArrowBack className="text-xl text-[#171717] font-inter"/>
                                </button>
                                <button onClick={next} className="w-10 h-10 justify-center items-center flex bg-[#fff] hover:opacity-50">
                                    <IoIosArrowForward className="text-xl text-[#171717] font-inter"/>
                                </button>
                            </div>
                        </div>
                        <p className='mobile:text-lg laptop:text-xl text-white text-inter font-light font-inter mobile:w-full desktop:w-96'>Предлагаем широкий выбор специализированного транспорта для выполнения любых задач — от строительных проектов до перевозки грузов. Надежные и современные машины в вашем распоряжении на удобных условиях аренды.</p>
                        <button onClick={() => navigate("/rent")} className='bg-white p-2 px-4 flex flex-row space-x-4 items-center hover:opacity-50'>
                            <p className='text-[#171717] font-inter text-xl'>Узнать больше</p>
                            <div className='w-10 h-10 bg-[#171717] flex justify-center items-center'>
                                <IoIosArrowForward className="text-xl text-white text-inter"/>
                            </div>
                        </button>
                    </div>
                </div>
            </Parallax>
        </div>
    )
};

export default SlideTwo