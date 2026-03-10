<span class="deco-float pointer-events-none absolute left-[6%] top-[12%] z-2 text-2xl text-[#E9459055]" aria-hidden="true">✦</span>
<span class="deco-float pointer-events-none absolute right-[5%] top-[30%] z-2 text-2xl text-[#6C63FF55] [animation-delay:2.1s]" aria-hidden="true">✷</span>
<span class="deco-float pointer-events-none absolute bottom-[20%] left-[10%] z-2 text-2xl text-[#00D4FF55] [animation-delay:4.2s]" aria-hidden="true">◈</span>

<style>
	@keyframes floatSpin {
		0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
		50%      { transform: translateY(-12px) rotate(20deg); opacity: 0.9; }
	}
	.deco-float { animation: floatSpin 6s ease-in-out infinite; }
</style>