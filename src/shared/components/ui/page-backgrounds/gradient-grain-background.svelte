<div class="absolute inset-0 bg-[#0a0810] overflow-hidden">
	<div class="absolute inset-0" style="background: radial-gradient(ellipse 120% 80% at 60% 20%, #1a0d2e 0%, #0a0810 55%, #060409 100%);"></div>

	<div class="absolute" style="
		top: -18%; right: -8%; width: 780px; height: 520px;
		background: radial-gradient(ellipse 60% 100% at 65% 30%, rgba(108,99,255,0.18) 0%, rgba(233,69,144,0.09) 45%, transparent 70%);
		filter: blur(72px); transform: rotate(-22deg) skewX(-8deg);
		border-radius: 40% 60% 55% 45% / 35% 45% 55% 65%;
	"></div>

	<div class="absolute" style="
		bottom: -12%; left: -6%; width: 620px; height: 480px;
		background: radial-gradient(ellipse 70% 90% at 35% 70%, rgba(233,69,144,0.13) 0%, rgba(108,99,255,0.07) 50%, transparent 70%);
		filter: blur(80px); transform: rotate(15deg) skewY(5deg);
		border-radius: 55% 45% 40% 60% / 60% 40% 65% 35%;
	"></div>

	<div class="absolute" style="
		top: 35%; left: 20%; width: 400px; height: 280px;
		background: radial-gradient(ellipse at 50% 50%, rgba(255,160,80,0.04) 0%, transparent 70%);
		filter: blur(60px); transform: rotate(-10deg);
		border-radius: 50% 50% 60% 40% / 40% 60% 40% 60%;
	"></div>

	<div class="absolute" style="
		top: -5%; left: -10%; right: 20%; height: 60%;
		background: linear-gradient(115deg, transparent 0%, transparent 40%, rgba(108,99,255,0.035) 48%, rgba(255,255,255,0.018) 52%, rgba(108,99,255,0.025) 56%, transparent 65%, transparent 100%);
		transform: skewY(-5deg);
	"></div>

	<svg class="absolute inset-0 w-full h-full opacity-[0.55]" xmlns="http://www.w3.org/2000/svg">
		<filter id="grain-gradient-bg" x="0%" y="0%" width="100%" height="100%" color-interpolation-filters="sRGB">
			<feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch" result="noise"/>
			<feColorMatrix type="saturate" values="0" in="noise" result="grayNoise"/>
			<feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blend"/>
			<feComposite in="blend" in2="SourceGraphic" operator="in"/>
		</filter>
		<rect width="100%" height="100%" filter="url(#grain-gradient-bg)"/>
	</svg>

	<div class="absolute inset-0" style="background: radial-gradient(ellipse 85% 85% at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%);"></div>
</div>
