/** a promise or direct value of type T */
export type PromiseOrValue<T> = T | Promise<T>;

/** forEach that awaits items prior to calling lambda and awaits async lambdas */
export function asyncForEach<T>(
	items: T[],
	lambda: (item: T, index: number) => void
): Promise<T[]> {
	const aggrigator = async (items: T[], item: T, index: number) => {
		await lambda(item, index);

		return items;
	};

	return asyncReduce(items, aggrigator, [] as T[]);
}

/** map that awaits items prior to calling lambda and awaits async lambdas */
export function asyncMap<T, R>(
	items: T[],
	lambda: (item: T, index: number) => PromiseOrValue<R>
): Promise<R[]> {
	const aggrigator = async (items: R[], item: T, index: number) => {
		items[index] = await lambda(item, index);

		return items;
	};

	return asyncReduce(items, aggrigator, [] as R[]);
}

/** reduce that awaits items prior to calling lambda and awaits async lambdas */
export function asyncReduce<T>(
	items: T[],
	lambda: (previousValue: T, item: T, index: number) => PromiseOrValue<T>
): Promise<T>;
export function asyncReduce<T, R>(
	items: T[],
	lambda: (previousValue: R, item: T, index: number) => PromiseOrValue<R>,
	initialValue: R
): Promise<R>;
export function asyncReduce<T, R>(
	items: T[],
	lambda: (previousValue: R, item: T, index: number) => PromiseOrValue<R>,
	initialValue?: R
): Promise<R> {
	return asyncReduceInner(items, lambda, initialValue, arguments.length > 2);
}

/** used in @see asyncReduce since the 'arguments' object cannot be referenced in an async function */
async function asyncReduceInner<T, R>(
	items: T[],
	lambda: (previousValue: R, item: T, index: number) => PromiseOrValue<R>,
	initialValue: R,
	initialValueProvided: boolean
): Promise<R> {
	items = items || [];

	for (let i = 0; i < items.length; ++i) {
		const item = await items[i];

		if (!initialValueProvided && i === 0) {
			initialValue = item as any;
		} else {
			initialValue = await lambda(initialValue, item, i);
		}
	}

	return initialValue;
}
