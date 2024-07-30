import { useNavigate } from "react-router-dom";
import Footer from "../ux/Footer";
import Navbar from "../ux/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";

function BlogInfoPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Прокручивает страницу к началу при монтировании компонента
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full">
            <Navbar background="#171717"/>
            <div className="mobile:px-6 laptop:px-12 pt-32"> {/* Заменил margin-top на padding-top */}
                <div className="flex flex-row items-center space-x-4">
                    <button onClick={() => navigate("/blog")} className="bg-[#171717] w-10 h-10 flex justify-center items-center hover:opacity-50">
                        <IoIosArrowBack className="text-xl text-white text-inter"/>
                    </button>
                    <p className="text-xl text-[#171717] font-inter">Назад</p>
                </div>
                <div className="mt-6">
                    <p className="text-3xl uppercase font-light text-[#171717] font-inter">Советы и экспертиза: откройте новые возможности</p>
                    <p className="text-xl text-[#171717] font-inter/50 my-4">Сентябрь 30.2024</p>
                    <img loading="eager" src={require("../../images/blog/blog1.png")} className="w-full mobile:h-[300px] tablet:h-[500px] laptop:h-[720px] object-cover" alt="blog_info_image"/>
                    <p className="text-4xl text-[#171717] font-inter font-bold my-4">Lorem ipsum dolor sit amet consectetur.</p>
                    <p className="text-2xl text-[#171717] font-inter">Lorem ipsum dolor sit amet consectetur. Et posuere lorem nunc aliquet ut. A sed nisl eu amet a venenatis. Quam et amet aliquam nunc mauris magna. Elit proin platea enim semper magna porta a. Turpis malesuada justo eget amet integer ultrices commodo senectus. Feugiat aliquet lobortis commodo sed volutpat fermentum enim. Diam non nunc magna vitae in gravida quis diam maecenas. Ipsum mauris pharetra semper scelerisque id lectus. Auctor vitae feugiat turpis ornare sem at eu lectus facilisis. Arcu ut pellentesque donec sed sit sociis. Duis vitae molestie egestas amet tincidunt. Cursus ullamcorper sit proin purus sit tincidunt sit nisi ornare. Laoreet pulvinar adipiscing egestas ipsum magna venenatis sagittis semper enim. Suspendisse purus ornare purus mauris. Urna rhoncus lorem eu tortor phasellus at est. Lectus nec vel vitae duis scelerisque dolor nisl blandit. Faucibus interdum ultricies sed quis sed. Ac fusce id nec aliquam maecenas interdum. Ultrices pellentesque ipsum quisque amet.</p>
                </div>
                <div className="mt-6 mb-12">
                    <p className="text-[#171717] font-inter text-4xl font-bold uppercase">Больше статей</p>
                    <div className="flex flex-row w-full overflow-x-auto mobile:space-x-6 tablet:space-x-10 laptop:space-x-16 mt-4">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="mobile:min-w-[250px] tablet:w-[500px] laptop:min-w-[800px]">
                                <img loading="eager" 
                                    src={require("../../images/blog/blog3.png")} 
                                    alt="blog_image" 
                                    className="w-full mobile:h-[200px] tablet:h-[400px] laptop:h-[560px] object-cover"
                                />
                                <p className="text-xl text-center py-2 text-[#171717] font-inter/50">Полезное / 01.30.2024</p>
                                <p className="uppercase mobile:text-xl tablet:text-2xl laptop:text-3xl text-[#171717] font-inter text-center font-light">новости и советы: наш блог</p>
                                <p className="text-[#171717] font-inter mobile:text-md tablet:text-lg laptop:text-xl text-left font-semibold mt-2">
                                    Lorem ipsum dolor sit amet consectetur. Viverra massa tortor non dignissim in imperdiet integer id duis. Suscipit malesuada aliquam tristique dolor proin sed neque tristique risus.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default BlogInfoPage;
