import { PopUpType } from "./pop-up-type.enum";

export class PopUpMessage {
    text: string;
    type: PopUpType;
    error?: Error;
    animation: string;
    durationMs: number;

    constructor(text: string, type: PopUpType, durationMs: number, error?: Error) {
        this.text = text;
        this.type = type;
        this.error = error;
        this.durationMs = durationMs;
        this.animation = `slide-in 50ms ease-in, fade-out ${durationMs / 1000 + 0.2}s ease-out`;
    }
}