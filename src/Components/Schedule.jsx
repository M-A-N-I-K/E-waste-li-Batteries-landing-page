import React from "react";
import img from "../assets/img3.jpg";
import { motion } from "framer-motion";
const Schedule = () => {
	const boxVariant = {
		visible: { opacity: 1, scale: 1 },
		hidden: { opacity: 0, scale: 0 },
	};
	return (
		<div className="relative h-screen overflow-hidden z-20 bg-indigo-900">
			<img
				src={img}
				className="absolute object-cover w-full h-full opacity-50"
			/>
			<div className="absolute inset-0 bg-black opacity-25"></div>
			<div className="container relative z-10 flex items-center w-4/5 py-16 mx-auto my-24 border-4 border-white rounded-lg md:my-32">
				<motion.div
					className="relative z-10 flex flex-col items-center justify-between w-full"
					variants={boxVariant}
					initial="hidden"
					animate="visible"
				>
					<p className="flex flex-col items-center text-2xl font-extrabold text-center text-white md:text-4xl sm:text-2xl lg:text-4xl">
						Dispose of Your Li Batteries Responsibly
					</p>
					<p className="flex flex-col items-center max-w-lg mt-6 text-lg md:text-lg sm:text-sm lg:text-xl font-extrabold text-center text-white">
						Lithium-ion batteries are commonly found in electronic devices
						such as laptops, smartphones, and electric cars. While they
						are convenient and long-lasting, they can also be hazardous if
						not disposed of properly. Our battery recycling program
						ensures that your Li batteries are safely and responsibly
						recycled, reducing the risk of environmental pollution and
						conserving valuable resources. Let's work together to keep our
						planet healthy and sustainable by disposing of your Li
						batteries in an eco-friendly way.
					</p>
					<a
						href="#"
						className="block px-4 py-3 mt-10 text-md rounded-lg font-bold text-black uppercase bg-white hover:bg-slate-200 sm:text-sm sm:py-2 "
					>
						Schedule a pickup for your Li batteries.
					</a>
				</motion.div>
			</div>
		</div>
	);
};

export default Schedule;
