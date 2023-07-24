import { Social } from '@/types/Social'
import SocialIcon from './SocialIcon'

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
				<SocialIcon key={social.alt} social={social} />
			))}
		</div>
	)
}
