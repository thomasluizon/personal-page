import Image from 'next/image'
import Link from 'next/link'

const iconSize = 48

type Social = {
	src: string
	alt: string
	href: string
}

const socials: Social[] = [
	{
		src: '/black-white-icon.png',
		alt: 'Portfolio',
		href: 'https://thomas-portfolio.vercel.app/',
	},
	{
		src: '/github.png',
		alt: 'Github',
		href: 'https://github.com/thomasluizon',
	},
	{
		src: '/instagram.png',
		alt: 'Instagram',
		href: 'https://www.instagram.com/thomasluizon/',
	},
	{
		src: '/linkedin.png',
		alt: 'LinkedIn',
		href: 'https://www.linkedin.com/in/thomas-luizon/',
	},
	{
		src: '/twitter.png',
		alt: 'Twitter',
		href: 'https://twitter.com/thomas_luizon',
	},
]

export default function Socials() {
	return (
		<div className="flex gap-2">
			{socials.map(social => (
				<Link
					key={social.alt}
					href={social.href}
					target="_blank"
					className="mini:scale-75 mini:hover:scale-90 hover:scale-110 transition-transform duration-600"
				>
					<Image
						alt={social.alt}
						src={social.src}
						width={iconSize}
						height={iconSize}
						className="rounded-3xl"
					/>
				</Link>
			))}
		</div>
	)
}
