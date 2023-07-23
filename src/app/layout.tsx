import type { Metadata } from 'next'
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
			<body className="bg-videoImage bg-cover bg-center bg-repeat h-screen text-white text-center">
				{children}
			</body>
		</html>
	)
}
