<script lang="ts">
	// LUCIDE ICONS
	import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
</script>

<section id="contact" class="py-[120px] bg-dark">
	<div class="max-w-[1200px] mx-auto px-6">
		<div class="relative px-12 md:px-16 py-20 bg-dark-surface border border-dark-border rounded-xl text-center overflow-hidden">
			<div class="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-brand blur-[150px] opacity-15 pointer-events-none"></div>
			<div class="relative max-w-[640px] mx-auto">
				<h2 class="text-[clamp(1.8rem,3.5vw,2.8rem)] font-extrabold text-light mb-4 leading-tight">
					Ready to scale your UGC across Southeast Europe?
				</h2>
				<p class="text-[1.05rem] text-light-muted leading-relaxed mb-9">
					Let's discuss how KontentKolektiv can help your brand create authentic, high-performing content across 12+ markets. Book a call with our team today.
				</p>
				<div class="flex items-center justify-center gap-4 flex-wrap">
					<a
						href="mailto:hello@kontentkolektiv.com"
						class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-brand rounded-full text-light font-semibold text-base hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(233,69,144,0.3)] transition-all duration-200"
					>
						Book a Call
						<ArrowRightIcon class="w-5 h-5" />
					</a>
					<a
						href="mailto:hello@kontentkolektiv.com"
						class="inline-flex items-center px-8 py-4 bg-transparent border border-dark-border rounded-full text-light-muted font-medium text-[0.95rem] hover:border-light-dim hover:text-light transition-all duration-200"
					>
						hello@kontentkolektiv.com
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
