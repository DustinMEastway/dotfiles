/** convert the provided value to a boolean */
export function toBoolean(value: any): boolean {
	if (typeof value === 'boolean') {
		return value;
	} else if (typeof value === 'string') {
		return value && value !== 'false';
	}

	return !!value;
}