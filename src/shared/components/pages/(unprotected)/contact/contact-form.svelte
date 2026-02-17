<script lang="ts">
	// CLASS
	import { contactPageClass } from '@/routes/(unprotected)/contact/index.svelte';

	// COMPONENTS
	import { Field, FieldLabel, FieldError } from '@/shared/components/ui/field/index.js';
	import { Label } from '@/shared/components/ui/label/index.js';
	import { Input } from '@/shared/components/ui/input/index.js';
	import * as Select from '@/shared/components/ui/select/index.js';
	import { Textarea } from '@/shared/components/ui/textarea/index.js';
	import ContactButton from './contact-button.svelte';

	// UTILS
	import { toFieldErrors } from '@/shared/utils/validationUtils';

	const inputs = contactPageClass.contactFormInputs;
	const fieldErrors = $derived(contactPageClass.fieldErrors);

	const services = [
		'UGC Production',
		'Performance Creative',
		'Creator Partnership',
		'Full Campaign Management',
		'Other'
	];

	const budgets = [
		'Under €1k',
		'€1k - €5k',
		'€5k - €10k',
		'€10k+',
		'Not sure yet'
	];

	const serviceLabel = $derived(inputs.service ? inputs.service : 'Select a service...');
	const budgetLabel = $derived(inputs.budget ? inputs.budget : 'Select a range...');
</script>

<div class="flex flex-col gap-6">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		<Field>
			<FieldLabel>
				<Label for="name" class="text-light">Name</Label>
			</FieldLabel>
			<Input
				id="name"
				type="text"
				bind:value={inputs.name}
				placeholder="Jane Doe"
				class="w-full h-11 rounded-xl bg-dark border-dark-border"
				aria-invalid={!!fieldErrors.name?.length}
				oninput={() => contactPageClass.clearFieldError('name')}
			/>
			<FieldError errors={toFieldErrors(fieldErrors.name)} />
		</Field>
		<Field>
			<FieldLabel>
				<Label for="email" class="text-light">Work Email</Label>
			</FieldLabel>
			<Input
				id="email"
				type="email"
				bind:value={inputs.email}
				placeholder="jane@company.com"
				class="w-full h-11 rounded-xl bg-dark border-dark-border"
				aria-invalid={!!fieldErrors.email?.length}
				oninput={() => contactPageClass.clearFieldError('email')}
			/>
			<FieldError errors={toFieldErrors(fieldErrors.email)} />
		</Field>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		<Field>
			<FieldLabel>
				<Label for="service" class="text-light">Service Needed</Label>
			</FieldLabel>
			<Select.Root type="single" bind:value={inputs.service} onValueChange={() => contactPageClass.clearFieldError('service')}>
				<Select.Trigger class="w-full h-11 rounded-xl bg-dark border-dark-border justify-between" id="service" aria-invalid={!!fieldErrors.service?.length}>
					<span class="truncate" data-slot="select-value">{serviceLabel}</span>
				</Select.Trigger>
				<Select.Content>
					{#each services as s}
						<Select.Item value={s} label={s} />
					{/each}
				</Select.Content>
			</Select.Root>
			<FieldError errors={toFieldErrors(fieldErrors.service)} />
		</Field>
		<Field>
			<FieldLabel>
				<Label for="budget" class="text-light">Monthly Budget</Label>
			</FieldLabel>
			<Select.Root type="single" bind:value={inputs.budget} onValueChange={() => contactPageClass.clearFieldError('budget')}>
				<Select.Trigger class="w-full h-11 rounded-xl bg-dark border-dark-border justify-between" id="budget" aria-invalid={!!fieldErrors.budget?.length}>
					<span class="truncate" data-slot="select-value">{budgetLabel}</span>
				</Select.Trigger>
				<Select.Content>
					{#each budgets as b}
						<Select.Item value={b} label={b} />
					{/each}
				</Select.Content>
			</Select.Root>
			<FieldError errors={toFieldErrors(fieldErrors.budget)} />
		</Field>
	</div>

	<Field>
		<FieldLabel>
			<Label for="message" class="text-light">Project Details</Label>
		</FieldLabel>
		<Textarea
			id="message"
			bind:value={inputs.message}
			rows={4}
			placeholder="Tell us a bit about your campaign goals..."
			class="w-full rounded-xl bg-dark border-dark-border resize-none min-h-24"
			aria-invalid={!!fieldErrors.message?.length}
			oninput={() => contactPageClass.clearFieldError('message')}
		/>
		<FieldError errors={toFieldErrors(fieldErrors.message)} />
	</Field>

	<ContactButton />

	<p class="text-xs text-center text-light-dim/60 mt-2">
		By submitting this form, you agree to our privacy policy. We respect your data.
	</p>
</div>
