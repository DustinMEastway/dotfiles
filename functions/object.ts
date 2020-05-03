/** deep clone the provided object to remove any of its refrences */
export function clone<T>(object: T): T {
	if (object == null || typeof object !== 'object') {
		return object;
	} else if (object instanceof Array) {
		return object.map(item => clone(item)) as any;
	}

	return Object.assign(
		Object.create(Object.getPrototypeOf(object)),
		JSON.parse(JSON.stringify(object))
	);
}
