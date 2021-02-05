import { PromiseOrValue } from './types';

/** filter that awaits async lambdas for async filtering */
export async function asyncFilter<T>(
	items: T[],
	predicate: (item: T, index: number) => PromiseOrValue<boolean>
): Promise<T[]> {
	const predicateValues = await asyncMap(items, predicate);

	return items.filter((_, index) => predicateValues[index]);
}

/**
 * forEach that awaits async lambdas
 *
 * @note promises are ran in series, waiting for one to finish before starting the next
 */
export function asyncForEach<T>(
	items: T[],
	lambda: (item: T, index: number) => PromiseOrValue<void>
): Promise<T[]> {
	const aggrigator = (_, item: T, index: number) => lambda(item, index);

	return asyncReduce(items, aggrigator, undefined);
}

/**
 * map that awaits async lambdas
 *
 * @note promises are ran in parallel, but output is ordered the same as the array
 */
export function asyncMap<T, R>(
	items: T[],
	lambda: (item: T, index: number) => PromiseOrValue<R>
): Promise<R[]> {
	const promises = mapToPromises(items.map((item, index) => lambda(item, index)));

	return Promise.all(promises);
}

/** reduce that awaits async lambdas */
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
		const item = items[i];

		if (!initialValueProvided && i === 0) {
			initialValue = item as any;
		} else {
			initialValue = await lambda(initialValue, item, i);
		}
	}

	return initialValue;
}

/**
 * maps each item in an array into being a promise
 *
 * @note leaves items that are already promises as is
 */
export function mapToPromises<T>(items: PromiseOrValue<T>[]): Promise<T>[] {
	return (items instanceof Array ? items : []).map(item => Promise.resolve(item));
}
