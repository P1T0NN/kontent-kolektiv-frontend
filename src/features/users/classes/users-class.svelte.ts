// TYPES
import type { Doc } from '@/convex/_generated/dataModel';

class UsersClass {
	currentUser = $state<Doc<'users'> | null | undefined>(undefined);

	setUser(user: Doc<'users'> | null | undefined) {
		this.currentUser = user;
	}
}

export const usersClass = new UsersClass();
