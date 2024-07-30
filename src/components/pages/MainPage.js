import Navbar from "../ux/Navbar";
import Slider from "../ux/Slider";
import AboutUs from "../ux/AbousUs";
import { IoIosArrowForward } from "react-icons/io";
import OurAdvantages from "../ux/OurAdvantages";
import Education from "../ux/Education";
import Rent from "../ux/Rent";
import Form from "../ux/Form";
import Footer from "../ux/Footer";
import { useNavigate } from "react-router-dom";
import ParallaxSection from "../ux/ParallaxEffect";
import { useEffect } from "react";

function MainPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Прокручивает страницу к началу при монтировании компонента
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Navbar/>
            <Slider/>
            <AboutUs/>
            <p className="mobile:text-4xl desktop:text-6xl desktop2:text-[220px] leading-none text-center font-bold text-[#D01D32] font-neutral mb-12 whitespace-nowrap">ШИРОКИЙ<br/>СПЕКТР УСЛУГ</p>
            <ParallaxSection>
                <div className="flex flex-col border-b-2 border-t-2 py-12 mx-12 mobile:hidden laptop:block">
                    <div className="flex flex-row w-full items-end justify-between laptop:h-[400px] desktop:h-[500px] desktop2:h-[600px]">
                        <div className="flex flex-col justify-between h-full first">
                            <p className="text-2xl w-[800px] text-[#171717] font-inter font-light">Аренда специализированного транспорта – это не просто услуга, а ключевое звено, обеспечивающее оперативность и эффективность выполнения самых сложных задач.</p>
                            <div>
                                <p className="font-bold text-[#D01D32] font-neutral mobile:text-2xl laptop:text-6xl my-4">ТРАНСПОРТ ПО<br/>МЕРЕ ВАШЕГО<br/>СПЕЦИФИЧЕСКОГО<br/>ЗАПРОСА</p>
                                <button onClick={() => navigate("/rent")} className="bg-white border-[1px] border-[#171717] p-2 px-4 flex flex-row space-x-4 items-center group hover:bg-[#171717] ease-out duration-500">
                                    <p className="text-[#171717] font-inter text-xl group-hover:text-white">Узнать больше</p>
                                    <div className="w-10 h-10 bg-[#171717] flex justify-center items-center group-hover:bg-[#D01D32]">
                                        <IoIosArrowForward className="text-xl text-white text-inter"/>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="second">
                            <img loading="eager" src={require("../../images/fire_engine.png")} className="h-full" alt="fire_engine"/>
                        </div>
                    </div>
                    <p className="mobile:text-2xl laptop:text-3xl text-[#171717] font-inter font-normal text-right mt-4">Предлагаем широкий спектр специализированного</p>
                    <p className="mobile:text-2xl laptop:text-3xl text-[#171717] font-inter ">транспорта для любых ваших нужд. Наша компания предоставляет современные и надежные машины для выполнения разнообразных задач, будь то строительство, логистика, аварийно-спасательные работы или сельское хозяйство. Весь наш транспорт находится в отличном техническом состоянии и полностью готов к эксплуатации.</p>
                </div>
            </ParallaxSection>
            <ParallaxSection>
                <div className="py-12 border-b-2 border-t-2 mx-6 mobile:block laptop:hidden">
                    <p className="font-bold text-[#D01D32] font-neutral w-full text-3xl">ТРАНСПОРТ ПО МЕРЕ<br/> ВАШЕГО СПЕЦИФИЧЕСКОГО<br/> ЗАПРОСА</p>
                    <img loading="eager" src={require("../../images/fire_engine.png")} className="h-[300px] my-4 w-full object-cover" alt="fire_engine"/>
                    <p className="text-xl text-[#171717] font-inter font-light">Аренда специализированного транспорта – это не просто услуга, а ключевое звено, обеспечивающее оперативность и эффективность выполнения самых сложных задач.</p>
                    <p className="text-2xl text-[#171717] font-inter mt-4">Предлагаем широкий спектр специализированного транспорта для любых ваших нужд. Наша компания предоставляет современные и надежные машины для выполнения разнообразных задач, будь то строительство, логистика, аварийно-спасательные работы или сельское хозяйство. Весь наш транспорт находится в отличном техническом состоянии и полностью готов к эксплуатации.</p>
                    <button onClick={() => navigate("/rent")} className="bg-white border-[1px] border-[#171717] p-2 px-4 flex flex-row space-x-4 items-center group hover:bg-[#171717] ease-out duration-500">
                        <p className="text-[#171717] font-inter text-xl group-hover:text-white">Узнать больше</p>
                        <div className="w-10 h-10 bg-[#171717] flex justify-center items-center group-hover:bg-[#D01D32]">
                            <IoIosArrowForward className="text-xl text-white text-inter"/>
                        </div>
                    </button>
                </div>
            </ParallaxSection>
            <ParallaxSection>
                <div className="desktop:h-[500px] desktop2:h-[650px] flex flex-row space-x-6 border-b-2 py-12 mx-12 mobile:hidden laptop:flex">
                    <div>
                        <img loading="eager" src={require("../../images/image2.png")} className="h-full" alt="fire_engine"/>
                    </div>
                    <div className="flex flex-col justify-between h-full flex-1">
                        <p className="font-bold text-[#D01D32] font-neutral text-5xl">ГЛУБОКОЕ ПОГРУЖЕНИЕ:<br/>СПЕЦИАЛИЗИРОВАННЫЕ<br/> КУРСЫ ДЛЯ ПРОФЕССИОНАЛОВ</p>
                        <div className="space-y-4">
                            <p className="text-2xl w-full text-[#171717] font-inter">Наши специализированные курсы предлагают глубокое погружение в ключевые аспекты вашей профессиональной сферы, обеспечивая практические навыки и экспертное знание для достижения высоких результатов.</p>
                            <button onClick={() => navigate("/rent")} className="bg-white border-[1px] border-[#171717] p-2 px-4 flex flex-row space-x-4 items-center group hover:bg-[#171717] ease-out duration-500">
                                <p className="text-[#171717] font-inter text-xl group-hover:text-white">Узнать больше</p>
                                <div className="w-10 h-10 bg-[#171717] flex justify-center items-center group-hover:bg-[#D01D32]">
                                    <IoIosArrowForward className="text-xl text-white text-inter"/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </ParallaxSection>
            <ParallaxSection>
                <div className="py-12 border-b-2 mx-6 mobile:block laptop:hidden">
                    <p className="font-bold text-[#D01D32] font-neutral w-full text-2xl uppercase">Глубокое погружение: Специализированные курсы для профессионалов</p>
                    <img loading="eager" src={require("../../images/image2.png")} className="h-[300px] my-4 w-full object-cover" alt="fire_engine"/>
                    <p className="text-2xl text-[#171717] font-inter mt-4">Наши специализированные курсы предлагают глубокое погружение в ключевые аспекты вашей профессиональной сферы, обеспечивая практические навыки и экспертное знание для достижения высоких результатов.</p>
                    <button onClick={() => navigate("/rent")} className="bg-white border-[1px] border-[#171717] p-2 px-4 flex flex-row space-x-4 items-center group hover:bg-[#171717] ease-out duration-500">
                        <p className="text-[#171717] font-inter text-xl group-hover:text-white">Узнать больше</p>
                        <div className="w-10 h-10 bg-[#171717] flex justify-center items-center group-hover:bg-[#D01D32]">
                            <IoIosArrowForward className="text-xl text-white text-inter"/>
                        </div>
                    </button>
                </div>
            </ParallaxSection>
            <ParallaxSection>
                <div className="flex flex-col border-b-2 py-12 mx-12 mobile:hidden laptop:block">
                    <div className="flex flex-row w-full items-end justify-between laptop:h-[400px] desktop:h-[450px] desktop2:h-[600px]">
                        <div className="flex flex-col justify-between h-full first">
                            <p className="text-2xl w-[800px] text-[#171717] font-inter font-light">Обеспечьте безопасность с нами — качественные<br/>поставки для надёжной защиты.</p>
                            <div>
                                <p className="font-bold text-[#D01D32] font-neutral mobile:text-2xl laptop:text-6xl my-4 uppercase">Надёжные поставки<br/>для безопасности и<br/>эффективности</p>
                                <button onClick={() => navigate("/rent")} className="bg-white border-[1px] border-[#171717] p-2 px-4 flex flex-row space-x-4 items-center group hover:bg-[#171717] ease-out duration-500">
                                    <p className="text-[#171717] font-inter text-xl group-hover:text-white">Узнать больше</p>
                                    <div className="w-10 h-10 bg-[#171717] flex justify-center items-center group-hover:bg-[#D01D32]">
                                        <IoIosArrowForward className="text-xl text-white text-inter"/>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="second">
                            <img loading="eager" src={require("../../images/image3.png")} className="h-full" alt="fire_engine"/>
                        </div>
                    </div>
                    <p className="mobile:text-2xl laptop:text-3xl text-[#171717] font-inter text-right mt-4">Мы специализируемся на поставке высококачественного</p>
                    <p className="mobile:text-2xl laptop:text-3xl text-[#171717] font-inter ">аварийно-спасательного и противопожарного оборудования, средств для создания пены и автозапчастей, обеспечивая надежную защиту и безопасность в критических ситуациях.</p>
                </div>
            </ParallaxSection>
            <ParallaxSection>
                <div className="py-12 border-b-2 mx-6 mobile:block laptop:hidden">
                    <p className="font-bold text-[#D01D32] font-neutral w-full text-3xl uppercase">Надёжные поставки<br/>для безопасности и<br/>эффективности</p>
                    <img loading="eager" src={require("../../images/image3.png")} className="h-[300px] my-4 w-full object-cover" alt="fire_engine"/>
                    <p className="text-xl text-[#171717] font-inter font-light">Обеспечьте безопасность с нами — качественные поставки для надёжной защиты.</p>
                    <p className="text-2xl text-[#171717] font-inter mt-4">Мы специализируемся на поставке высококачественного аварийно-спасательного и противопожарного оборудования, средств для создания пены и автозапчастей, обеспечивая надежную защиту и безопасность в критических ситуациях.</p>
                    <button onClick={() => navigate("/rent")} className="bg-white border-[1px] border-[#171717] p-2 px-4 flex flex-row space-x-4 items-center group hover:bg-[#171717] ease-out duration-500">
                        <p className="text-[#171717] font-inter text-xl group-hover:text-white">Узнать больше</p>
                        <div className="w-10 h-10 bg-[#171717] flex justify-center items-center group-hover:bg-[#D01D32]">
                            <IoIosArrowForward className="text-xl text-white text-inter"/>
                        </div>
                    </button>
                </div>
            </ParallaxSection>
            <ParallaxSection>
                <OurAdvantages/>
            </ParallaxSection>
            <ParallaxSection>
                <Education/>
            </ParallaxSection>
            <ParallaxSection>
                <Rent/>
            </ParallaxSection>
            <ParallaxSection>
                <Form/>
            </ParallaxSection>
            <Footer/>
        </div>
    )
};

export default MainPage;