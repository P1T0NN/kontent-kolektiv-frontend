<script lang="ts">
	// LIBRARIES
	import { m } from '@/shared/lib/paraglide/messages';

	// CONFIG
	import { COMPANY_DATA, UNPROTECTED_PAGE_ENDPOINTS } from '@/shared/constants';

	// LUCIDE ICONS
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
</script>

<section id="contact" class="py-[120px] bg-dark">
	<div class="max-w-[1100px] mx-auto px-6">
		<div class="relative px-8 sm:px-12 md:px-16 py-16 sm:py-20 rounded-2xl text-center overflow-hidden border border-white/8 bg-linear-to-br from-[#14112a] to-[#0d0b1e]">
			<!-- Glows -->
			<div class="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-brand blur-[130px] opacity-20 pointer-events-none"></div>
			<div class="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/20 blur-[100px] opacity-30 pointer-events-none rounded-full"></div>

			<div class="relative max-w-[640px] mx-auto">
				<h2 class="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-light mb-4 leading-tight">
					{m['HomePage.CtaSection.title']()}
				</h2>

				<p class="text-[1.05rem] text-light-muted leading-relaxed mb-9">
					{m['HomePage.CtaSection.subtitle']()}
				</p>

				<div class="flex items-center justify-center gap-4 flex-wrap mb-6">
					<a
						href={UNPROTECTED_PAGE_ENDPOINTS.HIRE_CREATORS}
						class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-brand rounded-full text-light font-semibold text-base hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(233,69,144,0.4)] transition-all duration-200 shadow-[0_4px_20px_rgba(233,69,144,0.25)]"
					>
						{m['HomePage.CtaSection.cta']()}
						<ArrowRightIcon class="w-5 h-5" />
					</a>
					
					<a
						href={"mailto:" + COMPANY_DATA.EMAIL}
						class="inline-flex items-center px-8 py-4 bg-white/4 border border-white/12 rounded-full text-light-muted font-medium text-[0.95rem] hover:bg-white/8 hover:border-white/20 hover:text-light transition-all duration-200 backdrop-blur-sm"
					>
						{COMPANY_DATA.EMAIL}
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
