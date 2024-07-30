import Navbar from "../ux/Navbar";
import Footer from "../ux/Footer";
import { useEffect } from "react";

function EducationPage() {

    useEffect(() => {
        // Прокручивает страницу к началу при монтировании компонента
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div>
            <Navbar/>
            <div className="h-[100vh] relative w-full items-center flex bg-education-image bg-fixed bg-no-repeat bg-center">
                <div className="flex flex-col absolute z-1 mobile:p-6 laptop:p-12 mobile:space-y-12 tablet:space-y-32 laptop:space-y-64">
                    <p className="uppercase mobile:text-3xl tablet:text-3xl laptop:text-6xl font-bold text-white font-neutral">Обучающие курсы:<br/>путь к успеху</p>
                    <div className="w-full flex justify-center items-center">
                        <p className="mobile:text-md tablet:text-lg laptop:text-xl text-white text-inter font-light font-inter mobile:w-full laptop:w-4/12 mobile:ml-0 laptop:ml-64">Наши курсы предлагают глубокие знания и практические навыки в различных областях. Повышайте свою квалификацию и развивайтесь профессионально с нашими экспертными программами обучения.</p>
                    </div>
                </div>
            </div>
            <div className="mobile:p-6 laptop:p-12">
                <div className="w-full mobile:hidden laptop:flex flex-row justify-between laptop:h-[400px] desktop2:h-[550px]">
                    <div className="flex flex-col items-start space-y-6">
                        <p className="uppercase text-4xl font-bold text-[#171717] font-inter">Безопасность и <br/>охрана труда <span className="text-2xl text-[#D01D32]">250 000тг</span></p>
                        <p className="text-2xl text-[#171717] font-inter w-10/12">Курс "Безопасность и охрана труда" предназначен для специалистов, стремящихся повысить свою компетентность в области обеспечения безопасных условий труда и соблюдения законодательных норм. Обучение охватывает ключевые аспекты охраны труда, включая выявление и оценку профессиональных рисков, разработку и внедрение мер по их предотвращению, а также обучение сотрудников безопасным методам работы.</p>
                        <button className="p-2 px-4 bg-[#171717] hover:opacity-50">
                            <p className="text-lg text-white font-inter">Написать</p>
                        </button>
                    </div>
                    <img loading="eager" src={require("../../images/education/education1.png")} alt="education_1" className="h-full"/>
                </div>
                <div className="mobile:flex laptop:hidden flex-col space-y-4">
                    <p className="uppercase mobile:text-xl laptop:text-3xl font-bold text-[#171717] font-inter">Безопасность и охрана<br/> труда <span className="text-lg text-[#D01D32] lowercase">250 000тг</span></p>
                    <img loading="eager" src={require("../../images/education/education1.png")} alt="education_1" className="h-full"/>
                    <p className="text-xl text-[#171717] font-inter w-full">Курс "Безопасность и охрана труда" предназначен для специалистов, стремящихся повысить свою компетентность в области обеспечения безопасных условий труда и соблюдения законодательных норм. Обучение охватывает ключевые аспекты охраны труда, включая выявление и оценку профессиональных рисков, разработку и внедрение мер по их предотвращению, а также обучение сотрудников безопасным методам работы.</p>
                    <button className="p-2 px-4 bg-[#171717] hover:opacity-50">
                        <p className="text-lg text-white font-inter">Написать</p>
                    </button>
                </div>
                <div className="flex mobile:flex-col laptop:flex-row w-full mobile:mt-12 laptop:mt-24 desktop2:mt-6">
                    <div className="flex flex-col items-start space-y-2 flex-1 w-full">
                        <p className="mobile:text-2xl laptop:text-5xl font-light uppercase text-[#171717] font-inter">Что вы получите<br className="laptop:block mobile:hidden"/> от курса:</p>
                        <p className="text-2xl text-[#171717] font-inter/50 mobile:w-full laptop:w-8/12">Курс включает в себя лекции, практические занятия, кейс-стадии и тестирование для закрепления полученных знаний. Мы предлагаем индивидуальный подход и гибкий график обучения, чтобы вы могли учиться в удобное для вас время. Присоединяйтесь к нашему курсу и создайте безопасное рабочее пространство для себя и своих коллег!</p>
                    </div>
                    <div className="mobile:space-y-6 laptop:space-y-16 flex-1 mobile:mt-6 laptop:mt-0 mobile:border-r-[1px] laptop:border-l-[1px] mobile:border-r-black laptop:border-l-black mobile:pl-0 laptop:pl-6">
                        <div className="flex flex-col items-start">
                            <p className="text-2xl font-light uppercase text-[#171717] font-inter">Глубокие знания</p>
                            <p className="text-lg text-[#171717] font-inter/50 mobile:w-full laptop:w-96">Изучение актуальных стандартов и требований по охране труда, включая новые законодательные нормы и правила.</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-2xl font-light uppercase text-[#171717] font-inter">Практические навыки</p>
                            <p className="text-lg text-[#171717] font-inter/50 mobile:w-full laptop:w-96">Овладение методами оценки и минимизации профессиональных рисков, проведение аудитов и контрольных проверок.</p>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="text-2xl font-light uppercase text-[#171717] font-inter">Профессиональное развитие</p>
                            <p className="text-lg text-[#171717] font-inter/50 mobile:w-full laptop:w-96">Возможность повысить свою квалификацию и стать экспертом в области охраны труда, что откроет новые карьерные перспективы.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
};

export default EducationPage;