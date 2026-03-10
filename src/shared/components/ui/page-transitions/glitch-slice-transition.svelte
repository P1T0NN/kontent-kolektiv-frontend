<!-- glitch-slice-transition.svelte -->
<!-- WhyChooseUs (#0A0A1A) → Services (#0A0A1A) -->
<!-- Same bg color — uses a horizontal glitch scan-line burst as a visual separator -->
<!-- Gives a "corrupted signal" creator/content vibe without changing elevation -->
<div class="relative w-full overflow-hidden bg-[#0A0A1A] py-3">
	<!-- The 3-layer glitch line -->
	<div class="relative h-[3px] w-full">
		<!-- Offset stripe: pink, shifted up-left -->
		<div class="absolute inset-y-0 left-0 right-[15%] -translate-y-px bg-[#E94590] opacity-60 blur-[1px]"></div>
		<!-- Offset stripe: purple, shifted down-right -->
		<div class="absolute inset-y-0 left-[10%] right-0 translate-y-px bg-[#6C63FF] opacity-50 blur-[1px]"></div>
		<!-- Main gradient line -->
		<div class="absolute inset-0 bg-linear-to-r from-transparent via-[#E94590] to-transparent opacity-95"></div>
		<!-- Cyan sliver accent -->
		<div class="absolute inset-y-0 left-[30%] w-[20%] bg-[#00D4FF] opacity-30 blur-[2px]"></div>

		<!-- Animated glitch bands -->
		<div class="glitch-band-1 absolute left-0 right-0 h-px bg-[#E94590]"></div>
		<div class="glitch-band-2 absolute left-0 right-0 h-px bg-[#6C63FF]" style="top: 4px;"></div>
	</div>
</div>

<style>
	@keyframes glitchBand1 {
		0%   { opacity: 0.25; transform: scaleX(1); }
		20%  { opacity: 0; }
		21%  { opacity: 0.2; transform: scaleX(0.6) translateX(10%); }
		50%  { opacity: 0; }
		100% { opacity: 0; }
	}
	@keyframes glitchBand2 {
		0%,
		40%  { opacity: 0; }
		41%  { opacity: 0.3; transform: scaleX(0.4) translateX(-5%); }
		55%  { opacity: 0; }
		100% { opacity: 0; }
	}
	.glitch-band-1 {
		top: 0;
		opacity: 0.2;
		animation: glitchBand1 4s ease-in-out infinite;
	}
	.glitch-band-2 {
		opacity: 0.15;
		animation: glitchBand2 4s ease-in-out infinite 0.5s;
	}
</style>