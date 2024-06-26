/** @noSelf **/
declare namespace webmonetization {
	export type Event = number & {};

	export interface EventDetails {
		paymentPointer: string;
		assetScale: number;
		amount: string;
		requestId: string;
		assetCode: string;
	}

	export const EVENT_PENDING: Event;
	export const EVENT_START: Event;
	export const EVENT_PROGRESS: Event;
	export const EVENT_STOP: Event;

	export interface Listener {
		(this: unknown, event: Event, details?: EventDetails): void;
	}

	export function is_monetized(): boolean;

	export function set_listener(callback: Listener): void;
}
