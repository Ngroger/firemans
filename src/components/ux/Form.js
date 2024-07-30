    import { useState } from "react";

    function Form() {
        const [name, onChangeName] = useState();
        const [phone, onChangePhone] = useState();
        const [message, onChangeMessage] = useState();
        const [isFocusName, setIsFocusName] = useState(false);
        const [isFocusPhone, setIsFocusPhone] = useState(false);
        const [isFocusMessage, setIsFocusMessage] = useState(false);       

        return (
            <div className="w-full mobile:px-6 laptop:px-12 flex mobile:flex-col laptop:flex-row justify-between mt-12 mb-24">
                <div className="space-y-4">
                    <p className="mobile:text-xl laptop:text-4xl desktop:text-5xl desktop2:text-6xl font-bold text-[#171717] font-neutral">+7 (777) 777-77-77</p>
                    <p className="mobile:text-xl laptop:text-4xl desktop:text-5xl desktop2:text-6xl font-bold text-[#D01D32] font-neutral">+7 (777) 777-77-77</p>
                    <p className="mobile:text-xl laptop:text-4xl desktop:text-5xl desktop2:text-6xl font-bold text-[#171717] font-neutral">hello@loftpineapple.com</p>
                    <p className="mobile:text-xl tablet:text-2xl laptop:text-3xl font-light text-[#171717] font-inter">г. Караганда, ул. Ермекова 28, офис 411</p>
                </div>
                <div className="space-y-2 mobile:w-full laptop:w-4/12 mobile:mt-6 laptop:mt-0">
                    <p className="mobile:text-xl tablet:text-2xl laptop:text-4xl text-[#171717] font-inter uppercase">Заполните ниже<br/> Форму для связи</p>
                    <p className="text-xl font-light text-[#171717] font-inter">И мы оперативно с вами свяжемся</p>
                    <input 
                        name="name" 
                        value={name} 
                        onChange={(e) => onChangeName(e.target.value)} 
                        placeholder="Имя"
                        className={
                            isFocusName ? 
                            "py-2 border-b-[1px] border-b-[#D01D32] w-full text-xl font-light outline-none" :
                            "py-2 border-b-[1px] border-b-[#171717] w-full text-xl font-light outline-none"
                        }
                        onFocus={() => setIsFocusName(true)}
                        onBlur={() => setIsFocusName(false)}
                    />
                    <input 
                        name="phone"
                        value={phone}
                        onChange={(e) => onChangePhone(e.target.value)}
                        placeholder="Телефон" 
                        className={
                            isFocusPhone ? 
                            "py-2 border-b-[1px] border-b-[#D01D32] w-full text-xl font-light outline-none" :
                            "py-2 border-b-[1px] border-b-[#171717] w-full text-xl font-light outline-none"
                        }
                        onFocus={() => setIsFocusPhone(true)}
                        onBlur={() => setIsFocusPhone(false)}
                    />
                    
                    <textarea 
                        name="message"
                        value={message}
                        onChange={(e) => onChangeMessage(e.target.value)}
                        placeholder="Описание товара/артикул, кол-во для заказа и сроки поставки" 
                        className={
                            isFocusMessage ? 
                            "py-2 border-b-[1px] border-b-[#D01D32] w-full text-xl font-light outline-none" :
                            "py-2 border-b-[1px] border-b-[#171717] w-full text-xl font-light outline-none"
                        }
                        onFocus={() => setIsFocusMessage(true)}
                        onBlur={() => setIsFocusMessage(false)}
                    />
                    <button 
                        disabled={!message || !name || !phone} 
                        onClick={() => console.log(name, phone, message)}
                        className={`w-full p-2 justify-center items-center flex ${ (!message || !name || !phone ? 'bg-[#171717]' : 'bg-[#D01D32] hover:opacity-50') }`}                      
                    >
                        <p className="text-xl text-white text-inter">Отправить</p>
                    </button>
                    <p className="text-md text-[#171717] font-inter">Нажимая на кнопку, вы даете согласие на обработку персональных данных</p>
                </div>
            </div>
        )
    };

    export default Form;