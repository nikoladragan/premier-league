import clubs from './clubs';

const getTeamBadge = (teamName) => {
	switch (teamName) {
		case clubs.Arsenal:
			return '/badges/arsenal.png';
		case clubs.AstonVilla:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/uyNNelfnFvCEnsLrUL-j2Q_24x24.png';
		case clubs.Bournemouth:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/IcOt-hrK04B-RlRwI3R0yA_24x24.png';
		case clubs.BrightonHoveAlbion:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/EKIe0e-ZIphOcfQAwsuEEQ_24x24.png';
		case clubs.Burnley:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/teLLSaMXim_8BA1d93sMng_24x24.png';
		case clubs.Chelsea:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/fhBITrIlbQxhVB6IjxUO6Q_24x24.png';
		case clubs.CrystalPalace:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/8piQOzndGmApKYTcvyN9vA_24x24.png';
		case clubs.Everton:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_24x24.png';
		case clubs.LeicesterCity:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/UDYY4FSlty6fXFBzvFfcyw_24x24.png';
		case clubs.Liverpool:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/0iShHhASp5q1SL4JhtwJiw_24x24.png';
		case clubs.ManchesterCity:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/z44l-a0W1v5FmgPnemV6Xw_24x24.png';
		case clubs.ManchesterUnited:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_24x24.png';
		case clubs.NewcastleUnited:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/96CcNNQ0AYDAbssP0V9LuQ_24x24.png';
		case clubs.NorwichCity:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/y-we_-8ySOubta5psWzDoA_24x24.png';
		case clubs.SheffieldUnited:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/wF8AgQsssfy3_GLyVR3dSg_24x24.png';
		case clubs.Southampton:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/y1V4sm2SEBiWUPRIYl5rfg_24x24.png';
		case clubs.TottenhamHotspur:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/k3Q_mKE98Dnohrcea0JFgQ_24x24.png';
		case clubs.Watford:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/lHr1L31i7aJS-O8tUdHOIQ_24x24.png';
		case clubs.WestHamUnited:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/bXkiyIzsbDip3x2FFcUU3A_24x24.png';
		case clubs.WolverhamptonWanderers:
			return 'https://ssl.gstatic.com/onebox/media/sports/logos/-WjHLbBIQO9xE2e2MW3OPQ_24x24.png';
		default:
			return '';
	}
};

export default getTeamBadge;