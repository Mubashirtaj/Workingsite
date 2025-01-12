export function generateWaveform(length: number): number[] {
    return Array.from({ length }, () => Math.random() * 0.5 + 0.25);
}

