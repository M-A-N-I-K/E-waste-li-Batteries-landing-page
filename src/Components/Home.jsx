import React from "react";
import img from "../assets/img4.jpg";
import { motion } from "framer-motion";
const Home = () => {
	const boxVariant = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0 },
	};
	return (
		<div className="relative h-screen overflow-hidden bg-indigo-900">
			<img
				src={img}
				className="absolute object-cover opacity-50  w-full h-full"
			/>
			<div className="absolute inset-0 bg-black opacity-25"></div>
			<div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
				<motion.div
					className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5"
					variants={boxVariant}
					initial="hidden"
					animate="visible"
				>
					<span className="font-bold text-4xl text-yellow-400 uppercase">
						E-Waste
					</span>
					<h1 className="mt-4 text-5xl font-bold leading-tight text-white sm:text-2xl">
						Don't let your electronics go to waste -
						<br />
						recycle them properly with us.
					</h1>
					<a
						href="#"
						className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100"
					>
						Discover
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
