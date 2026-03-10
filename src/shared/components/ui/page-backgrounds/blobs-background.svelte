<div class="blob-1 pointer-events-none absolute -left-36 -top-24 z-0 h-[500px] w-[500px] rounded-full bg-[#E9459022] blur-[90px]" aria-hidden="true"></div>
<div class="blob-2 pointer-events-none absolute -right-24 bottom-0 z-0 h-[400px] w-[400px] rounded-full bg-[#6C63FF18] blur-[90px]" aria-hidden="true"></div>
<div class="blob-3 pointer-events-none absolute left-[42%] top-[42%] z-0 h-[280px] w-[280px] rounded-full bg-[#00D4FF0E] blur-[80px]" aria-hidden="true"></div>

<style>
	@keyframes blobDrift {
		0%   { transform: translate(0, 0) scale(1); }
		100% { transform: translate(40px, 30px) scale(1.08); }
	}
	.blob-1 { animation: blobDrift 12s ease-in-out infinite alternate; }
	.blob-2 { animation: blobDrift 9s ease-in-out infinite alternate-reverse; }
	.blob-3 { animation: blobDrift 15s ease-in-out infinite alternate; }
</style>