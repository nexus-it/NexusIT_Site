import Image4 from "../assets/images/imagen-4.svg";
import { Button } from "@nextui-org/react";

export const Blog = () => {
    return (
        <section id="blog-section">
            <div className="container mx-auto px-4 pb-12">
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                        <h2 className="block text-4xl font-bold text-gray-800">Explora nuestro trabajo </h2>
                        <p className="mt-3 text-lg text-gray-800">Te ayudamos a idear, diseñar estrategias, iterar y lanzar sus aplicaciones web y móviles.</p>

                        <div className="my-4">
                            <Button size="lg" className="bg-thirdColor text-secondaryColor font-semibold">Explorar</Button>
                        </div>
                    </div>

                    <div className="lg:col-span-4 mt-10 lg:mt-0">
                        <img data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-delay="500"
                            className="w-full rounded-xl"
                            src={Image4}
                            alt="Image Description" />
                    </div>
                </div>
            </div>
        </section>
    )
}