const XSvg = (props) => (
	// <svg aria-hidden='true' viewBox='0 0 24 24' {...props}>
	// 	<path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
	// </svg>

	<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" {...props}>
		<defs>
			<linearGradient id="lc-bg" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#7C1CFF" /><stop offset=".48" stopColor="#2927E8" /><stop offset="1" stopColor="#00BDFB" /></linearGradient>
			<linearGradient id="lc-purple" x1="5" y1="8" x2="11.5" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#FF9CFF" /><stop offset=".45" stopColor="#D52BFF" /><stop offset="1" stopColor="#6924FF" /></linearGradient>
			<linearGradient id="lc-cyan" x1="12" y1="8" x2="19.5" y2="18" gradientUnits="userSpaceOnUse"><stop stopColor="#A5FFFF" /><stop offset=".42" stopColor="#17E6FF" /><stop offset="1" stopColor="#0878FF" /></linearGradient>
			<linearGradient id="lc-gloss" x1="4" y1="2.5" x2="20" y2="10" gradientUnits="userSpaceOnUse"><stop stopColor="#FFFFFF" stopOpacity=".55" /><stop offset="1" stopColor="#FFFFFF" stopOpacity="0" /></linearGradient>
			<linearGradient id="lc-head-p" x1="8" y1="5.8" x2="10.2" y2="9.3" gradientUnits="userSpaceOnUse"><stop stopColor="#FFD9FF" /><stop offset=".55" stopColor="#E33AFF" /><stop offset="1" stopColor="#6A28FF" /></linearGradient>
			<linearGradient id="lc-head-c" x1="15" y1="5.8" x2="17.2" y2="9.3" gradientUnits="userSpaceOnUse"><stop stopColor="#D4FFFF" /><stop offset=".55" stopColor="#13DFFF" /><stop offset="1" stopColor="#0878FF" /></linearGradient>
			<filter id="lc-shadow" x="-30%" y="-30%" width="160%" height="170%"><feGaussianBlur in="SourceAlpha" stdDeviation=".28" result="blur" /><feOffset dy=".35" result="offset" /><feComponentTransfer><feFuncA type="linear" slope=".48" /></feComponentTransfer><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>
			<filter id="lc-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation=".22" /></filter>
		</defs>
		<g filter="url(#lc-shadow)">
			<rect x="1.15" y="1.15" width="21.7" height="21.7" rx="5.1" fill="#100B52" />
			<rect x="1.15" y="1.15" width="21.7" height="21.7" rx="5.1" fill="url(#lc-bg)" stroke="#8BEAFF" strokeOpacity=".75" strokeWidth=".35" />
			<path d="M3.2 5.4C3.2 3.4 4.8 2.1 7 2.1H17C19.6 2.1 21.8 4.1 21.8 6.7V8.2C17.1 5.6 9.1 5.2 2.2 9.1V6.3Z" fill="url(#lc-gloss)" />
			<path d="M1.55 7.2V6.25C1.55 3.75 3.65 1.55 6.35 1.55H16.8" stroke="#FFFFFF" strokeOpacity=".62" strokeWidth=".3" strokeLinecap="round" />
			<path d="M4.2 21.65C8.6 22.4 16.5 22.2 19.5 20.8" stroke="#FFFFFF" strokeOpacity=".13" strokeWidth=".45" strokeLinecap="round" />
		</g>
		<g filter="url(#lc-shadow)">
			<path d="M5.05 10.25C5.05 8.45 6.5 7.15 8.25 7.15H9.35C11.15 7.15 12.55 8.55 12.55 10.25V12.05C12.55 13.8 11.15 15.15 9.35 15.15H7.45L5.95 16.45L6.2 14.7C5.48 14.15 5.05 13.2 5.05 12.15Z" fill="url(#lc-purple)" stroke="#FFB5FF" strokeOpacity=".85" strokeWidth=".28" strokeLinejoin="round" />
			<path d="M5.55 10.1C5.65 8.55 6.65 7.65 8.1 7.55" stroke="#FFFFFF" strokeOpacity=".7" strokeWidth=".38" strokeLinecap="round" />
		</g>
		<g filter="url(#lc-shadow)">
			<path d="M11.45 10.3C11.45 8.55 12.85 7.15 14.65 7.15H15.75C17.5 7.15 18.95 8.5 18.95 10.3V12.15C18.95 13.9 17.5 15.25 15.75 15.25H14.2L12.25 16.55L12.55 14.55C11.85 13.95 11.45 13.15 11.45 12.15Z" fill="url(#lc-cyan)" stroke="#B9FFFF" strokeOpacity=".95" strokeWidth=".28" strokeLinejoin="round" />
			<path d="M12.05 10.05C12.15 8.55 13.25 7.65 14.55 7.55" stroke="#FFFFFF" strokeOpacity=".8" strokeWidth=".38" strokeLinecap="round" />
		</g>
		<circle cx="8.65" cy="5.75" r="1.75" fill="#4A13A9" opacity=".55" filter="url(#lc-glow)" />
		<circle cx="8.55" cy="5.55" r="1.55" fill="url(#lc-head-p)" stroke="#FFCBFF" strokeWidth=".22" />
		<ellipse cx="8.05" cy="4.95" rx=".52" ry=".28" transform="rotate(-35 8.05 4.95)" fill="#FFFFFF" fillOpacity=".72" />
		<circle cx="15.45" cy="5.55" r="1.55" fill="url(#lc-head-c)" stroke="#C6FFFF" strokeWidth=".22" />
		<ellipse cx="14.95" cy="4.95" rx=".52" ry=".28" transform="rotate(-35 14.95 4.95)" fill="#FFFFFF" fillOpacity=".78" />
		<g fill="#FFFFFF"><circle cx="7.05" cy="11.15" r=".36" fillOpacity=".95" /><circle cx="8.35" cy="11.15" r=".36" fillOpacity=".95" /><circle cx="9.65" cy="11.15" r=".36" fillOpacity=".95" /><circle cx="13.35" cy="11.15" r=".36" fillOpacity=".98" /><circle cx="14.65" cy="11.15" r=".36" fillOpacity=".98" /><circle cx="15.95" cy="11.15" r=".36" fillOpacity=".98" /></g>
	</svg>
);
export default XSvg;

// import { useId } from 'react';

// const XSvg = (props) => {
// 	const uid = useId().replace(/:/g, '');
// 	const bg = `bg-${uid}`;
// 	const badge = `badge-${uid}`;
// 	const gloss = `gloss-${uid}`;

// 	return (
// 		<svg
// 			aria-hidden='true'
// 			viewBox='0 0 100 100'
// 			width={40}
// 			height={40}
// 			{...props}
// 		>
// 			<defs>
// 				<linearGradient id={bg} x1='90%' y1='5%' x2='10%' y2='95%'>
// 					<stop offset='0%' stopColor='#38BDF8' />
// 					<stop offset='35%' stopColor='#2563EB' />
// 					<stop offset='75%' stopColor='#4338CA' />
// 					<stop offset='100%' stopColor='#1E1B4B' />
// 				</linearGradient>

// 				<linearGradient id={badge} x1='20%' y1='10%' x2='80%' y2='90%'>
// 					<stop offset='0%' stopColor='#FB7185' />
// 					<stop offset='55%' stopColor='#E11D48' />
// 					<stop offset='100%' stopColor='#9F1239' />
// 				</linearGradient>

// 				<linearGradient id={gloss} x1='50%' y1='0%' x2='50%' y2='100%'>
// 					<stop offset='0%' stopColor='#FFFFFF' stopOpacity='0.3' />
// 					<stop offset='50%' stopColor='#FFFFFF' stopOpacity='0' />
// 				</linearGradient>
// 			</defs>


// 			<rect width='100' height='100' rx='26' fill={`url(#${bg})`} />
// 			<rect width='100' height='100' rx='26' fill={`url(#${gloss})`} />

// 			<circle cx='50' cy='55' r='33' fill='#0B1030' fillOpacity='0.3' />

// 			<circle
// 				cx='50'
// 				cy='50'
// 				r='30'
// 				fill={`url(#${badge})`}
// 				stroke='#FFFFFF'
// 				strokeWidth='6'
// 			/>

// 			<path
// 				d='M36 51 L46 61 L65 40'
// 				fill='none'
// 				stroke='#FFFFFF'
// 				strokeWidth='8'
// 				strokeLinecap='round'
// 				strokeLinejoin='round'
// 			/>
// 		</svg>
// 	);
// };

// export default XSvg;