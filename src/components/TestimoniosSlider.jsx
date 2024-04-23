import Slider from 'react-slick';
import Image from "../assets/images/testimonial.jpg"; // Ajusta la importación según el componente de imagen que estés utilizando

const TestimoniosSlider = ({ testimonios }) => {
    
    const settingsTestimonios = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Intervalo de cambio en milisegundos (en este caso, 3 segundos)
        speed: 500, // Velocidad de transición en milisegundos
        cssEase: 'linear', // Tipo de easing
        // Otras configuraciones...
    };

    return (
        <div className="flex">
            <Slider {...settingsTestimonios}>
                {testimonios.map((testimonio, index) => (
                    <div key={index} className="w-96 relative items-start border-gray-200 rounded bg-white">
                        <div className="text-center px-4 py-8 pt-20 bg-red-500 bg-opacity-90 rounded-xl">
                            <div className="absolute flex top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                                <svg className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-primaryColor" viewBox="0 0 64 64"
                                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.
            135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648
            -5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.
            583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
                                </svg>
                                <Image aria-label={`imagen testimonio ${index}`} className="relative rounded-full" src={testimonio}
                                    width={96} height={96} alt={`imagen testimonial${index}`} />
                            </div>
                            <blockquote className="text-lg mb-4 text-white">
                                “Me encanta este producto y lo recomendaría a cualquiera. No podría ser más fácil de usar, y nuestros múltiples sitios web son maravillosos. Recibimos comentarios positivos todo el tiempo. “
                            </blockquote>
                            <cite className="block font-bold text-lg not-italic mb-1 text-primaryColor">Brigitte Baptiste</cite>
                            <div className="text-white">
                                <span>CEO & Co-Founder</span> <a className="text-primaryColor font-semibold" href="#0">@Dropbox</a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimoniosSlider;
