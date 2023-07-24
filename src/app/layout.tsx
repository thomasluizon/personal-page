import type { Metadata } from 'next'
import Image from 'next/image'
import bgSource from '../../public/video.gif'
import './globals.css'

export const metadata: Metadata = {
	title: 'Thomas Luizon - Personal Page',
	description: 'My personal page',
}

type IProps = {
	children: React.ReactNode
}

export default function RootLayout({ children }: IProps) {
	return (
		<html lang="en">
			<body className="overflow-hidden flex items-center justify-center relative h-screen text-white text-center">
				<Image
					alt="Video background"
					src={bgSource}
					fill
					className="object-cover absolute -z-10"
				/>
				<div>{children}</div>
			</body>
		</html>
	)
}
