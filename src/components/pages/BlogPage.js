import Navbar from "../ux/Navbar";
import Footer from "../ux/Footer";
import { useNavigate } from "react-router-dom";

function BlogPage() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar/>
            <div className="h-[100vh] relative w-full items-center flex bg-blog-image bg-fixed bg-center bg-no-repeat">
                <div className="flex flex-col absolute z-1 mobile:p-6 laptop:p-12 mobile:space-y-12 tablet:space-y-32 laptop:space-y-64">
                    <p className="uppercase mobile:text-3xl tablet:text-3xl laptop:text-6xl font-bold text-white font-neutral">Последние новости<br/> и советы: наш блог</p>
                    <div className="w-full flex justify-center items-center">
                        <p className="mobile:text-md tablet:text-lg laptop:text-xl text-white text-inter font-light font-inter mobile:w-full laptop:w-4/12 mobile:ml-0 laptop:ml-64">Здесь вы найдете свежие новости, полезные советы и экспертные мнения по различным темам. Следите за обновлениями, чтобы быть в курсе последних трендов и получать практические рекомендации для улучшения своих знаний и навыков.</p>
                    </div>
                </div>
            </div>
            <div className="p-12 mobile:hidden laptop:flex flex-row justify-between">
                <button className="flex flex-col space-y-1 items-center justify-center mobile:w-[300px] desktop:w-[400px] desktop2:w-[800px] hover:opacity-50">
                    <img loading="eager" src={require("../../images/blog/blog1.png")} className="mobile:h-[300px] desktop:h-[400px] desktop2:h-[800px] w-full" alt="blog_1"/>
                    <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter/50">Полезное / 01.30.2024</p>
                    <p className="mobile:text-md laptop:text-xl desktop:text-2xl text-semibold text-center w-full">Советы и экспертиза: откройте новые возможности</p>
                    <p className="mobile:text-xs laptop:text-md desktop:text-lg text-semibold text-left">Lorem ipsum dolor sit amet consectetur. Viverra massa tortor non dignissim in imperdiet integer id duis. Suscipit malesuada aliquam tristique dolor proin sed neque tristique risus.</p>
                </button>
                <div className="flex-col flex">
                    <div className="space-x-16 flex flex-row">
                        <button onClick={() => navigate("/blog/info")} className="hover:opacity-50 flex flex-col justify-between mobile:w-64 desktop:w-96">
                            <img loading="eager" src={require("../../images/blog/blog2.png")} alt="blog_2" className="mobile:h-32 desktop:h-64"/>
                            <div className="flex flex-row items-center justify-between">
                                <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter/50">Полезное</p>
                                <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter/50">01.30.2024</p>
                            </div>
                            <p className="mobile:text-md laptop:text-xl uppercase text-[#171717] font-inter">ваш гид по миру знаний</p>
                            <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter w-full">Lorem ipsum dolor sit amet consectetur. Viverra massa tortor non dignissim in imperdiet integer id duis. Suscipit malesuada aliquam tristique dolor proin sed...</p>
                        </button>
                        <button onClick={() => navigate("/blog/info")} className="hover:opacity-50 flex flex-col justify-between mobile:w-64 desktop:w-96">
                            <img loading="eager" src={require("../../images/blog/blog3.png")} alt="blog_2" className="mobile:h-32 desktop:h-64"/>
                            <div className="flex flex-row items-center justify-between">
                                <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter/50">Полезное</p>
                                <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter/50">01.30.2024</p>
                            </div>
                            <p className="mobile:text-md laptop:text-xl uppercase text-[#171717] font-inter">ваш гид по миру знаний</p>
                            <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter w-full">Lorem ipsum dolor sit amet consectetur. Viverra massa tortor non dignissim in imperdiet integer id duis. Suscipit malesuada aliquam tristique dolor proin sed...</p>
                        </button>
                    </div>
                    <div className="space-x-16 flex flex-row">
                        <button onClick={() => navigate("/blog/info")} className="hover:opacity-50 flex flex-col justify-between mobile:w-64 desktop:w-96">
                            <img loading="eager" src={require("../../images/blog/blog4.png")} alt="blog_2" className="mobile:h-32 desktop:h-64"/>
                            <div className="flex flex-row items-center justify-between">
                                <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter/50">Полезное</p>
                                <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter/50">01.30.2024</p>
                            </div>
                            <p className="mobile:text-md laptop:text-xl uppercase text-[#171717] font-inter">ваш гид по миру знаний</p>
                            <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter w-full">Lorem ipsum dolor sit amet consectetur. Viverra massa tortor non dignissim in imperdiet integer id duis. Suscipit malesuada aliquam tristique dolor proin sed...</p>
                        </button>
                        <button onClick={() => navigate("/blog/info")} className="hover:opacity-50 flex flex-col justify-between mobile:w-64 desktop:w-96">
                            <img loading="eager" src={require("../../images/blog/blog5.png")} alt="blog_2" className="mobile:h-32 desktop:h-64"/>
                            <div className="flex flex-row items-center justify-between">
                                <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter/50">Полезное</p>
                                <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter/50">01.30.2024</p>
                            </div>
                            <p className="mobile:text-md laptop:text-xl uppercase text-[#171717] font-inter">ваш гид по миру знаний</p>
                            <p className="mobile:text-xs laptop:text-lg text-[#171717] font-inter w-full">Lorem ipsum dolor sit amet consectetur. Viverra massa tortor non dignissim in imperdiet integer id duis. Suscipit malesuada aliquam tristique dolor proin sed...</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="p-6 mobile:flex laptop:hidden flex-col space-y-6">
                <button onClick={() => navigate("/blog/info")} className="w-full space-y-2 hover:opacity-50">
                    <img loading="eager" src={require("../../images/blog/blog2.png")} alt="blog_2" className="w-full object-cover h-64"/>
                    <p className="text-lg text-[#171717] font-inter/50 text-center">Полезное / 01.30.2024</p>
                    <p className="text-xl text-semibold text-center w-full uppercase">Советы и экспертиза: откройте новые возможности</p>
                    <p className="mobile:text-xs laptop:text-md desktop:text-lg text-semibold text-left">Lorem ipsum dolor sit amet consectetur. Viverra massa tortor non dignissim in imperdiet integer id duis. Suscipit malesuada aliquam tristique dolor proin sed neque tristique risus.</p>
                </button>
                <button onClick={() => navigate("/blog/info")} className="w-full space-y-2 hover:opacity-50">
                    <img loading="eager" src={require("../../images/blog/blog3.png")} alt="blog_3" className="w-full object-cover h-64"/>
                    <p className="text-lg text-[#171717] font-inter/50 text-center">Полезное / 01.30.2024</p>
                    <p className="text-xl text-semibold text-center w-full uppercase">Советы и экспертиза: откройте новые возможности</p>
                    <p className="mobile:text-xs laptop:text-md desktop:text-lg text-semibold text-left">Lorem ipsum dolor sit amet consectetur. Viverra massa tortor non dignissim in imperdiet integer id duis. Suscipit malesuada aliquam tristique dolor proin sed neque tristique risus.</p>
                </button>
                <button onClick={() => navigate("/blog/info")} className="w-full space-y-2 hover:opacity-50">
                    <img loading="eager" src={require("../../images/blog/blog4.png")} alt="blog_3" className="w-full object-cover h-64"/>
                    <p className="text-lg text-[#171717] font-inter/50 text-center">Полезное / 01.30.2024</p>
                    <p className="text-xl text-semibold text-center w-full uppercase">Советы и экспертиза: откройте новые возможности</p>
                    <p className="mobile:text-xs laptop:text-md desktop:text-lg text-semibold text-left">Lorem ipsum dolor sit amet consectetur. Viverra massa tortor non dignissim in imperdiet integer id duis. Suscipit malesuada aliquam tristique dolor proin sed neque tristique risus.</p>
                </button>
            </div>
            <Footer/>
        </div>

    )
};

export default BlogPage;