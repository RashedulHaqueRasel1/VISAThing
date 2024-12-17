
const featureIcon = [
    { logo: "https://i.postimg.cc/h468W23B/SVG.png" },
    {  logo: "https://i.postimg.cc/RVt7Mwjn/SVG-1.png" },
    {  logo: "https://i.postimg.cc/g0gRMs61/SVG-5.png" },
    {  logo: "https://i.postimg.cc/fRhxkJNq/SVG-2.png" },
    {  logo: "https://i.postimg.cc/bwH1npYy/SVG-3.png" },
    {  logo: "https://i.postimg.cc/rpVxC3zS/SVG-4.png" },
 
]


const Feature = () => {
    return (
        <div className="mx-auto container p-4 md:p-2">
            <div className="flex items-center">
                <h1 className="text-[#7D89B0]">Feature in Trusted by</h1>
                <img src={'https://i.postimg.cc/WpWWDmWW/arrow-right-02.png'} alt="" className="ml-2" />
            </div>

            <div className="flex justify-between mt-4">
                    {featureIcon.map((skill, index) => (
                        <div
                            key={index}
                            className=""
                        >
                            <img src={skill.logo} alt={'not Found'}  />
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Feature;