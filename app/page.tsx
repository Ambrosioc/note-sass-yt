"use client";

import LogoMdc from "@/public/next.svg";
import Image from "next/image";
import { Cursor, Typewriter } from "react-simple-typewriter";
import ButtonProvider from "./components/ButtonProvider";

export default function Home() {
	return (
		<section className="w-full h-screen flex items-center justify-center flex-col gap-2">
			<Image src={LogoMdc} alt="MDC Logo" width={200} height={200} />
			<h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center">
				<Typewriter
					typeSpeed={70}
					words={["Bienvenu", "sur", "mon Saas"]}
					loop
				/>
				<span>
					<Cursor />
				</span>
			</h1>
			<p className="my-2 text-center">
				Rejoignez une aventure de codeur avec La minute de code
			</p>

			<ButtonProvider />
		</section>
	);
}
