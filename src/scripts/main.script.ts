// Debugging support
import * as lldebugger from "lldebugger.debug";
lldebugger.start();

export function init(this: unknown): void {
	if (webmonetization !== undefined) {
		const monetized = webmonetization.is_monetized();

		if (monetized) {
			print("The user has an active payment stream");
		}

		webmonetization.set_listener(function(this: unknown, event: webmonetization.Event, details?: webmonetization.EventDetails) {
			if (event === webmonetization.EVENT_PENDING) {
				print("The user is trying to make a first payment");
			} else if (event === webmonetization.EVENT_START) {
				print("The user has started paying");
			} else if (event === webmonetization.EVENT_PROGRESS) {
				print("The user is still paying");
			} else if (event === webmonetization.EVENT_STOP) {
				print("The user has stopped paying");
			}
			print(details?.requestId);
		});
	}
}

export function final(this: unknown): void {
	// Add finalization code here
	// Learn more: https://defold.com/manuals/script/
	// Remove this function if not needed
}

export function update(this: unknown, _dt: number): void {
	// Add update code here
	// Learn more: https://defold.com/manuals/script/
	// Remove this function if not needed
}

export function on_message(this: unknown, _message_id: hash, _message: string, _sender: url): void {
	// Add message-handling code here
	// Learn more: https://defold.com/manuals/message-passing/
	// Remove this function if not needed
}

export function on_input(this: unknown, _action_id: hash, _action: hash): void {
	// Add input-handling code here. The game object this script is attached to
	// must have acquired input focus:
	//
	//    msg.post(".", "acquire_input_focus")
	//
	// All mapped input bindings will be received. Mouse and touch input will
	// be received regardless of where on the screen it happened.
	// Learn more: https://defold.com/manuals/input/
	// Remove this function if not needed
}

export function on_reload(this: unknown): void {
	// Add reload-handling code here
	// Learn more: https://defold.com/manuals/hot-reload/
	// Remove this function if not needed
}
