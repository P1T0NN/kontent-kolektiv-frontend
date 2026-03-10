<script lang="ts">
	// CLASS
	import { contactPageClass } from '@/routes/(unprotected)/contact/index.svelte';
	import { contactServices, contactBudgets } from '@/shared/data/contactFormData';
	import { m } from '@/shared/lib/paraglide/messages';

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

	const serviceLabel = $derived(
		inputs.service ? (contactServices.find((s) => s.value === inputs.service)?.label() ?? inputs.service) : m['ContactPage.Form.selectService']()
	);
	const budgetLabel = $derived(
		inputs.budget ? (contactBudgets.find((b) => b.value === inputs.budget)?.label() ?? inputs.budget) : m['ContactPage.Form.selectBudget']()
	);
</script>

<div class="flex flex-col gap-6">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		<Field>
			<FieldLabel>
				<Label for="name" class="text-light">{m['ContactPage.Form.name']()}</Label>
			</FieldLabel>
			<Input
				id="name"
				type="text"
				bind:value={inputs.name}
				placeholder={m['ContactPage.Form.namePlaceholder']()}
				class="w-full h-11 rounded-xl bg-dark border-dark-border"
				aria-invalid={!!fieldErrors.name?.length}
				oninput={() => contactPageClass.clearFieldError('name')}
			/>
			<FieldError errors={toFieldErrors(fieldErrors.name)} />
		</Field>
		<Field>
			<FieldLabel>
				<Label for="email" class="text-light">{m['ContactPage.Form.workEmail']()}</Label>
			</FieldLabel>
			<Input
				id="email"
				type="email"
				bind:value={inputs.email}
				placeholder={m['ContactPage.Form.emailPlaceholder']()}
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
				<Label for="service" class="text-light">{m['ContactPage.Form.serviceNeeded']()}</Label>
			</FieldLabel>
			<Select.Root type="single" bind:value={inputs.service} onValueChange={() => contactPageClass.clearFieldError('service')}>
				<Select.Trigger class="w-full h-11 rounded-xl bg-dark border-dark-border justify-between" id="service" aria-invalid={!!fieldErrors.service?.length}>
					<span class="truncate" data-slot="select-value">{serviceLabel}</span>
				</Select.Trigger>
				<Select.Content>
					{#each contactServices as item}
						<Select.Item value={item.value} label={item.label()} />
					{/each}
				</Select.Content>
			</Select.Root>
			<FieldError errors={toFieldErrors(fieldErrors.service)} />
		</Field>
		<Field>
			<FieldLabel>
				<Label for="budget" class="text-light">{m['ContactPage.Form.monthlyBudget']()}</Label>
			</FieldLabel>
			<Select.Root type="single" bind:value={inputs.budget} onValueChange={() => contactPageClass.clearFieldError('budget')}>
				<Select.Trigger class="w-full h-11 rounded-xl bg-dark border-dark-border justify-between" id="budget" aria-invalid={!!fieldErrors.budget?.length}>
					<span class="truncate" data-slot="select-value">{budgetLabel}</span>
				</Select.Trigger>
				<Select.Content>
					{#each contactBudgets as item}
						<Select.Item value={item.value} label={item.label()} />
					{/each}
				</Select.Content>
			</Select.Root>
			<FieldError errors={toFieldErrors(fieldErrors.budget)} />
		</Field>
	</div>

	<Field>
		<FieldLabel>
			<Label for="message" class="text-light">{m['ContactPage.Form.projectDetails']()}</Label>
		</FieldLabel>
		<Textarea
			id="message"
			bind:value={inputs.message}
			rows={4}
			placeholder={m['ContactPage.Form.messagePlaceholder']()}
			class="w-full rounded-xl bg-dark border-dark-border resize-none min-h-24"
			aria-invalid={!!fieldErrors.message?.length}
			oninput={() => contactPageClass.clearFieldError('message')}
		/>
		<FieldError errors={toFieldErrors(fieldErrors.message)} />
	</Field>

	<ContactButton />

	<p class="text-xs text-center text-light-dim/60 mt-2">
		{m['ContactPage.Form.privacyNote']()}
	</p>
</div>
