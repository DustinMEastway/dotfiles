/** escape codes that can be used to style log statements */
export const logStyles = {
	// attributes: 00-08
	normalize: '\x1b[00m',
	bold: '\x1b[01m',
	faint: '\x1b[02m',
	underline: '\x1b[04m',
	blink: '\x1b[05m',
	negVid: '\x1b[07m',
	noDisplay: '\x1b[08m',
	// dark forground colors: 30-37
	darkTextBlack: '\x1b[30m',
	darkTextRed: '\x1b[31m',
	darkTextGreen: '\x1b[32m',
	darkTextYellow: '\x1b[33m',
	darkTextBlue: '\x1b[34m',
	darkTextMagenta: '\x1b[35m',
	darkTextCyan: '\x1b[36m',
	darkTextWhite: '\x1b[37m',
	// dark background colors: 40-47
	darkBackgroundBlack: '\x1b[40m',
	darkBackgroundRed: '\x1b[41m',
	darkBackgroundGreen: '\x1b[42m',
	darkBackgroundYellow: '\x1b[43m',
	darkBackgroundBlue: '\x1b[44m',
	darkBackgroundMagenta: '\x1b[45m',
	darkBackgroundCyan: '\x1b[46m',
	darkBackgroundWhite: '\x1b[47m',
	// light text colors: 90-97
	lightTextBlack: '\x1b[90m',
	lightTextRed: '\x1b[91m',
	lightTextGreen: '\x1b[92m',
	lightTextYellow: '\x1b[93m',
	lightTextBlue: '\x1b[94m',
	lightTextMagenta: '\x1b[95m',
	lightTextCyan: '\x1b[96m',
	lightTextWhite: '\x1b[97m',
	// light background colors: 100-107
	lightBackgroundBlack: '\x1b[100m',
	lightBackgroundRed: '\x1b[101m',
	lightBackgroundGreen: '\x1b[102m',
	lightBackgroundYellow: '\x1b[103m',
	lightBackgroundBlue: '\x1b[104m',
	lightBackgroundMagenta: '\x1b[105m',
	lightBackgroundCyan: '\x1b[106m',
	lightBackgroundWhite: '\x1b[107m'
};

export function input(message?: string): Promise<string> {
	if (message) {
		logQuestion(message);
	}

	const stdin = process.stdin;
	stdin.resume();
	return new Promise(resolve => {
		const dataListener = data => {
			resolve(data.toString().trim());
			stdin.pause();
		};

		stdin.once('data', dataListener);
	});
}

export function logFail(message: string) {
	logMessage(message, 'FAIL', `${logStyles.darkTextRed}${logStyles.blink}`);
	process.exit(1);
}

export function logInfo(message: string) {
	logMessage(message, ' .. ', logStyles.darkTextBlue);
}

export function logMessage(message: string, inner: string, color: string) {
	console.log(`\r  [${color}${inner}${logStyles.normalize}] ${message}`);
}

export function logQuestion(message: string) {
	logMessage(message, ' ?? ', logStyles.darkTextYellow)
}

export function logSuccess(message: string) {
	logMessage(message, ' OK ', logStyles.darkTextGreen);
}
