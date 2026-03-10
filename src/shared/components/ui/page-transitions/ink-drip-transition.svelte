<!-- ink-drip-transition.svelte -->
<!-- VideoShowcase (bg-dark-surface #12122A) → WhyChooseUs (#0A0A1A) -->
<!-- Organic paint/ink drips falling down into the next section -->
<div class="relative -mb-px h-[90px] w-full overflow-hidden bg-[#12122A]">
	<svg
		class="absolute bottom-0 left-0 h-full w-full"
		viewBox="0 0 1440 90"
		preserveAspectRatio="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient id="dripAccent" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color="#E94590" stop-opacity="0.12" />
				<stop offset="50%" stop-color="#6C63FF" stop-opacity="0.12" />
				<stop offset="100%" stop-color="#00D4FF" stop-opacity="0.12" />
			</linearGradient>
		</defs>

		<!-- Base curved fill — destination color -->
		<path
			d="M0,40 C120,40 120,20 240,30 C360,40 360,25 480,32 C600,39 600,22 720,28 C840,34 840,20 960,26 C1080,32 1080,18 1200,24 C1320,30 1380,22 1440,26 L1440,90 L0,90 Z"
			fill="#0A0A1A"
		/>

		<!-- Drip 1 -->
		<path d="M180,28 C178,28 174,32 174,44 C174,58 178,70 180,76 C180,80 182,82 184,80 C186,78 188,72 188,66 C188,54 184,42 184,32 C184,28 182,26 180,28 Z" fill="#0A0A1A" />
		<!-- Drip 2 -->
		<path d="M420,24 C418,24 414,28 413,42 C412,56 415,68 417,74 C417,78 419,80 421,78 C423,76 425,70 425,64 C425,52 422,40 422,30 C422,24 420,22 420,24 Z" fill="#0A0A1A" />
		<!-- Drip 3 (longest, center) -->
		<path d="M680,18 C678,18 674,24 673,38 C672,54 675,67 677,72 C677,76 679,78 681,76 C683,74 685,68 685,60 C685,48 682,34 682,26 C682,18 680,16 680,18 Z" fill="#0A0A1A" />
		<!-- Drip 4 -->
		<path d="M920,22 C918,22 915,28 914,40 C913,52 916,62 918,66 C918,70 920,72 922,70 C924,68 925,62 925,56 C925,46 922,34 922,28 C922,22 920,20 920,22 Z" fill="#0A0A1A" />
		<!-- Drip 5 -->
		<path d="M1220,26 C1218,26 1214,30 1213,44 C1212,58 1215,68 1217,74 C1217,78 1219,80 1221,78 C1223,76 1225,70 1225,64 C1225,52 1222,40 1222,30 C1222,26 1220,24 1220,26 Z" fill="#0A0A1A" />

		<!-- Brand color glow wash over the base curve -->
		<path
			d="M0,40 C120,40 120,20 240,30 C360,40 360,25 480,32 C600,39 600,22 720,28 C840,34 840,20 960,26 C1080,32 1080,18 1200,24 C1320,30 1380,22 1440,26 L1440,90 L0,90 Z"
			fill="url(#dripAccent)"
		/>
	</svg>
</div>