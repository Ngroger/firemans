import { TbCurrencyTenge } from "react-icons/tb";

function Education() {
    const educations = [
        {
            title: "Безопасность и охрана труда",
            price: "250 000",
            description: [
                "Наша команда состоит из опытных специалистов, готовых оперативно и квалифицированно решать любые вопросы, связанные с поставками и обслуживанием оборудования.",
                "Соблюдение стандартов: Освоение методов и требований для соблюдения нормативов и законодательства.",
                "Практический опыт: Обучение на реальных кейсах и сценариях для применения знаний на практике.",
                "Индивидуальный подход: Адаптация программы к специфике вашей организации и профессиональным потребностям."
            ]
        },
        {
            title: "Пожарно-технический минимум",
            price: "150 000",
            description: [
                "Фундаментальные знания: Освоение ключевых аспектов предотвращения пожаров и действий в чрезвычайных ситуациях.",
                "Практические навыки: Тренировка практических действий при пожаре с использованием современного оборудования.",
                "Индивидуальный подход: Персонализированное обучение, учитывающее специфику рабочей среды и потребности слушателей."
            ]
        },
        {
            title: "Промышленная безопасность",
            price: "300 000",
            description: [
                "Глубокое понимание рисков: Обучение основам оценки и управления рисками на производстве.",
                "Практические рекомендации: Разработка и внедрение эффективных мер по предотвращению несчастных случаев и профессиональных заболеваний.",
                "Соблюдение нормативов: Обучение в соответствии с требованиями законодательства и стандартов в области промышленной безопасности."
            ]
        },
        {
            title: "Первая медицинская помощь",
            price: "500 000",
            description: [
                "Освоение основ: Приобретение фундаментальных знаний и навыков по оказанию первой медицинской помощи.",
                "Практические упражнения: Тренировка на реалистичных сценариях, включая симуляционные упражнения с использованием современных медицинских оборудований.",
                "Эффективные стратегии: Изучение проверенных методов и стратегий для быстрой реакции и оказания помощи при несчастных случаях.",
                "Индивидуальное обучение: Адаптация курса под нужды участников, учет их профессионального фона и специфики рабочей среды."
            ]
        }
    ]
    return (
        <div>
            <p className="mobile:text-3xl desktop:text-6xl desktop2:text-[165px] leading-none text-center font-bold text-[#D01D32] font-neutral mb-12 whitespace-nowrap">ЦЕНЫ НА ОБУЧЕНИЕ<br/>В 2024 году</p>
            <div className="w-full mobile:px-6 laptop:px-12">
                <div className="mobile:space-y-6 mobile:space-x-0 laptop:space-x-6 laptop:space-y-0 flex mobile:flex-col laptop:flex-row justify-center mt-6">
                {educations.map((item, index) => (
                    <div key={index} className="border-[1px] border-[#171717] p-4 mobile:w-full laptop:w-80 flex flex-col">
                        <p className="text-2xl text-[#171717] font-inter font-medium text-center">{item.title}</p>
                        <div className="flex flex-row items-center justify-center w-full space-x-1">
                            <p className="text-3xl text-[#171717] font-neutral font-bold text-center py-4">
                                {item.price}
                            </p>
                            <TbCurrencyTenge className="text-2xl text-[#D01D32]"/>
                        </div>
                        <div className="flex-grow">
                            {item.description.map((description, index) => (
                                <p key={index} className="text-lg leading-[24px] text-[#171717] font-inter mb-2">
                                {index + 1}. {description}
                                </p>
                            ))}
                        </div>
                        <button className="hover:opacity-50 p-3 bg-[#171717] w-full mt-6">
                            <p className="text-center text-lg text-white font-inter">Написать</p>
                        </button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
};

export default Education;