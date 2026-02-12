// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { Doc } from '@/convex/_generated/dataModel';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: Doc<'users'> | null;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
