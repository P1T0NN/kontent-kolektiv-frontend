<!-- jagged-tear-transition.svelte -->
<!-- Hero (dark gradient) → VideoShowcase (bg-dark-surface #12122A) -->
<!-- Like a film strip rip or torn paper edge -->
<div class="relative -mb-px h-[70px] w-full overflow-hidden">
	<svg
		class="absolute bottom-0 left-0 h-full w-full"
		viewBox="0 0 1440 70"
		preserveAspectRatio="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient id="tearGlow" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color="#E94590" stop-opacity="0" />
				<stop offset="30%" stop-color="#E94590" />
				<stop offset="60%" stop-color="#6C63FF" />
				<stop offset="100%" stop-color="#6C63FF" stop-opacity="0" />
			</linearGradient>
		</defs>

		<!-- Torn fill — destination bg color -->
		<path
			d="M0,70 L0,38 L18,52 L36,28 L52,44 L68,18 L82,36 L100,14 L116,32 L130,10 L148,30 L162,8 L178,26 L196,6 L210,24 L228,4 L244,22 L258,8 L274,28 L292,6 L308,24 L322,10 L340,30 L356,8 L372,28 L388,12 L402,34 L420,6 L436,26 L452,10 L468,32 L482,8 L500,28 L516,12 L530,34 L548,8 L562,26 L580,6 L596,24 L610,10 L628,30 L644,8 L660,28 L676,12 L692,34 L708,10 L724,30 L738,8 L756,28 L772,12 L786,34 L804,8 L820,28 L836,10 L852,32 L868,8 L882,26 L900,6 L916,24 L930,10 L948,32 L964,8 L980,26 L996,6 L1012,28 L1028,10 L1044,32 L1058,8 L1076,30 L1092,10 L1108,28 L1122,8 L1140,28 L1156,10 L1172,32 L1188,8 L1204,28 L1220,10 L1236,30 L1252,8 L1268,26 L1284,8 L1300,28 L1318,10 L1334,30 L1350,8 L1366,28 L1382,10 L1400,32 L1420,8 L1440,28 L1440,70 Z"
			fill="#12122A"
		/>

		<!-- Brand gradient glow traced along the tear edge -->
		<path
			d="M0,38 L18,52 L36,28 L52,44 L68,18 L82,36 L100,14 L116,32 L130,10 L148,30 L162,8 L178,26 L196,6 L210,24 L228,4 L244,22 L258,8 L274,28 L292,6 L308,24 L322,10 L340,30 L356,8 L372,28 L388,12 L402,34 L420,6 L436,26 L452,10 L468,32 L482,8 L500,28 L516,12 L530,34 L548,8 L562,26 L580,6 L596,24 L610,10 L628,30 L644,8 L660,28 L676,12 L692,34 L708,10 L724,30 L738,8 L756,28 L772,12 L786,34 L804,8 L820,28 L836,10 L852,32 L868,8 L882,26 L900,6 L916,24 L930,10 L948,32 L964,8 L980,26 L996,6 L1012,28 L1028,10 L1044,32 L1058,8 L1076,30 L1092,10 L1108,28 L1122,8 L1140,28 L1156,10 L1172,32 L1188,8 L1204,28 L1220,10 L1236,30 L1252,8 L1268,26 L1284,8 L1300,28 L1318,10 L1334,30 L1350,8 L1366,28 L1382,10 L1400,32 L1420,8 L1440,28"
			fill="none"
			stroke="url(#tearGlow)"
			stroke-width="1.5"
			opacity="0.55"
		/>
	</svg>
</div>