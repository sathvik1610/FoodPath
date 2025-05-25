import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import brainImage from '../assets/brain21new.jpg';
import liverImage from '../assets/liver1new.jpg';
import heartImage from '../assets/heart2new.jpg';
import lungsImage from '../assets/lungs1new.jpg';

const Tomodel = () => {
    const navigate = useNavigate('');

    const handle2dclick = () => {
        console.log("Here baby")
        navigate('/model2dpage');
    }

    const handle3dclick = () => {
        navigate('/model3dpage');
    }

    return (
        <div className="container mx-auto flex flex-col ml-12 lg:flex-row items-start relative">
            <div className='mt-80 pt-40 ml-12'>
                <div className="linex w-[321px] h-[1px] bg-black my-[92px]  mb-[25px]"></div>
                <div className="right-div w-full lg:w-1/2 pr-4 font-worksans">
                    <motion.h2
                        className="twodmodel text-5xl font-extralight mb-2"
                        style={{lineHeight: "1.3"}}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "easeInOut"}}
                    >
                        New <br/>Feature
                    </motion.h2>
                    <motion.p
                        className="threedmodel text-xl font-helvetica mt-6 mb-10"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, ease: "easeInOut", delay: 0.2}}
                    >
                        Checkout our latest<br/> feature!
                    </motion.p>
                    <button onClick={handle3dclick}
                            className="px-6 py-3 border text-sm border-black text-black font-worksans font-light w-[174px] h-[61px] hover:bg-custom-blue hover:text-white transition duration-300">
                        3D MODEL
                    </button>
                </div>
            </div>

            <div className="twodcontainer left-di mt-20 ml-40 mr-0 font-worksans  font-extralight">
                <motion.h2
                    className="text-5xl line mb-2"
                    style={{lineHeight: "1.3"}}
                    initial={{opacity: 0, x: 270}}
                    whileInView={{opacity: 1, x: 300}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                >
                    Visualize<br/> with Model
                </motion.h2>
                <motion.p
                    className=" font-helvetica text-xl max-w-sm mt-8 mb-10"
                    initial={{opacity: 0, x: 300, y: -30}}
                    whileInView={{opacity: 1, x: 300, y: 0}}
                    transition={{duration: 0.8, ease: "easeInOut", delay: 0.2}}
                >
                    Explore our 2D model and discover the intricate relationship between food and your internal
                    well-being
                </motion.p>
                <button onClick={handle2dclick}
                        className="but3d px-6 py-3 border text-sm border-black text-black font-worksans font-light w-[174px] h-[61px] hover:bg-custom-blue hover:text-white hover:font-light transition duration-300">
                    2D MODEL
                </button>
            </div>

            {/* Add images in a new div and assign a classname */}
            <div className="image-container absolute bottom-0 right-0 mr-10 mb-20 flex space-x-4">
                <motion.img
                    src={liverImage}
                    alt="Liver Image"
                    className="w-[298px] h-[248px] relative top-20"
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
                <motion.img
                    src={brainImage}
                    alt="Brain Image"
                    className="w-[400px] h-[340px]"
                    initial={{ opacity: 0,x : 80 ,y: 0 }}
                    whileInView={{ opacity: 1,x: 0, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
            </div>
            <div className="image-container absolute top-0 left-0 ml-8 mt-20 flex space-x-4">
                <motion.img
                    src={lungsImage}
                    alt="Lungs Image"
                    className="w-[400px] h-[340px]"
                    initial={{ opacity: 0, x: -90 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
                <motion.img
                    src={heartImage}
                    alt="Heart Image"
                    className="w-[298px] h-[248px]"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
            </div>
        </div>
    );
};

export default Tomodel;
