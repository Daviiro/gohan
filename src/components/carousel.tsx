const Carousel: React.FC = () => {
	return (
		<div
			id="carouselExampleCaptions"
			className="relative"
			data-te-carousel-init
			data-te-carousel-slide
		>
			<div className="relative w-full overflow-hidden after:clear-both after:block after:content-[''] ">
				<div
					className="relative -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
					data-te-carousel-active
					data-te-carousel-item
					style={{ backfaceVisibility: "hidden" }}
				>
					<img
						src="https://www.sushifork.com/wp-content/uploads/2018/06/SushiFork-Dallas-Texas-Tulsa-Oklahoma-Sushi-Restaurant053A3356-1800x750.jpg"
						className="block w-full h-auto max-h-[38rem]"
						alt="..."
					/>
					<div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
						<h5 className="text-xl">Gohan Restaurante</h5>
						<p>Leve, Equilibrado e Saboroso!</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
