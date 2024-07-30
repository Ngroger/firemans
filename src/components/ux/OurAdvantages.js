function OurAdvantages() {
    return (
        <div className="w-full mobile:p-6 laptop:p-12">
            <div className="w-full flex flex-col justify-end items-end">
                <div className="mobile:w-full laptop:w-5/12 space-y-2">
                    <p className="mobile:text-2xl laptop:text-4xl text-[#171717] font-inter laptop:text-left mobile:text-right">ПРЕИМУЩЕСТВА НАШЕГО<br/> СОТРУДНИЧЕСТВА</p>
                    <p className="mobile:text-xl laptop:text-2xl font-light text-[#171717] font-inter laptop:text-left mobile:text-right">Надежность, качество и опыт — ключевые составляющие нашего успешного сотрудничества.</p>
                </div>
            </div>
            <div className="flex-col items-start w-full mobile:hidden laptop:flex mt-6">
                <div className="flex flex-col items-center">
                    <div className="bg-[#171717] p-6 mobile:w-64 laptop:w-96 h-[580px] flex flex-col justify-between">
                        <p className="text-2xl text-white font-inter">Высокое качество продукции</p>
                        <p className="text-md text-white font-inter text-light">Мы предлагаем только проверенное временем и сертифицированное оборудование и автозапчасти, гарантирующие надежность и долговечность.</p>
                    </div>
                    <div className="flex flex-row">
                        <div className="bg-[#171717] p-6 mobile:w-64 laptop:w-96 h-[580px] justify-between flex flex-col">
                            <p className="text-2xl text-white font-inter">Широкий ассортимент</p>
                            <p className="text-md text-white font-inter text-light">Наш ассортимент включает разнообразные модели и бренды, что позволяет выбрать оптимальное решение для каждой потребности клиента.</p>
                        </div>
                        <div className="bg-[#fff] p-6 mobile:w-64 laptop:w-96 h-[580px]"/>
                        <div className="bg-[#171717] p-6 mobile:w-64 laptop:w-96 h-[580px] justify-between flex flex-col">
                            <p className="text-2xl text-white font-inter">Комплексный подход</p>
                            <p className="text-md text-white font-inter text-light">Мы предлагаем не только продукцию, но и консультации по выбору, техническую поддержку и обучение сотрудников, чтобы обеспечить эффективное использование приобретенного оборудования.</p>
                        </div>
                    </div>
                    <div className="bg-[#171717] p-6 mobile:w-64 laptop:w-96 h-[580px] justify-between flex flex-col">
                        <p className="text-2xl text-white font-inter">Профессионализм и опыт</p>
                        <p className="text-md text-white font-inter text-light">Наша команда состоит из опытных специалистов, готовых оперативно и квалифицированно решать любые вопросы, связанные с поставками и обслуживанием оборудования.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center mt-6 relative mobile:flex laptop:hidden space-y-6">
                <div className="bg-[#171717] w-full p-6 h-96 flex flex-col justify-between">
                    <p className="text-2xl text-white font-inter">Высокое качество продукции</p>
                    <p className="text-lg text-white font-inter text-light">Мы предлагаем только проверенное временем и сертифицированное оборудование и автозапчасти, гарантирующие надежность и долговечность.</p>
                </div>
                <div className="bg-[#171717] w-full p-6 h-96 flex flex-col justify-between">
                    <p className="text-2xl text-white font-inter">Широкий ассортимент</p>
                    <p className="text-lg text-white font-inter text-light">Наш ассортимент включает разнообразные модели и бренды, что позволяет выбрать оптимальное решение для каждой потребности клиента.</p>
                </div>
                <div className="bg-[#171717] w-full p-6 h-96 flex flex-col justify-between">
                    <p className="text-2xl text-white font-inter">Комплексный подход</p>
                    <p className="text-lg text-white font-inter text-light">Мы предлагаем не только продукцию, но и консультации по выбору, техническую поддержку и обучение сотрудников, чтобы обеспечить эффективное использование приобретенного оборудования.</p>
                </div>
                <div className="bg-[#171717] w-full p-6 h-96 flex flex-col justify-between">
                    <p className="text-2xl text-white font-inter">Профессионализм и опыт</p>
                    <p className="text-lg text-white font-inter text-light">Наша команда состоит из опытных специалистов, готовых оперативно и квалифицированно решать любые вопросы, связанные с поставками и обслуживанием оборудования.</p>
                </div>
            </div>

        </div>
    )
};

export default OurAdvantages;