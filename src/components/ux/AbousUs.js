function AboutUs() {
    return (
        <div className="bg-white mobile:p-6 laptop:p-12">
            <div className="flex flex-row items-end space-x-4 mb-2">
                <img loading="eager" className="mobile:h-64 tablet:h-96" src={require("../../images/fireman.png")} alt="fireman"/>
                <p className="mobile:text-2xl laptop:text-5xl text-[#171717] font-inter font-light mobile:hidden tablet:block">НАША ЦЕЛЬ – НЕ ПРОСТО ПРЕДОСТАВЛЯТЬ УСЛУГИ,</p>
            </div>
            <p className="mobile:text-2xl tablet:hidden mobile:block laptop:text-5xl text-[#171717] font-inter font-light mt-4">НАША ЦЕЛЬ – НЕ ПРОСТО ПРЕДОСТАВЛЯТЬ УСЛУГИ,</p>
            <p className="mobile:text-2xl laptop:text-5xl text-[#171717] font-inter font-light">А СОЗДАВАТЬ УСЛОВИЯ ДЛЯ БЕЗОПАСНОСТИ И ПРОФЕССИОНАЛЬНОГО РОСТА НАШИХ ЗАКАЗЧИКОВ. МЫ СТРЕМИМСЯ ОБЕСПЕЧИВАТЬ НАШИХ КЛИЕНТОВ НАДЕЖНЫМИ И КОМПЛЕКСНЫМИ РЕШЕНИЯМИ ДЛЯ ЭФФЕКТИВНОГО РЕАГИРОВАНИЯ НА ЧРЕЗВЫЧАЙНЫЕ СИТУАЦИИ.</p>
        </div>
    )
};

export default AboutUs;