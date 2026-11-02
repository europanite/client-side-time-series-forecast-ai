/** Keep all interaction feedback local to the browser. */
let audioContext: AudioContext | null = null;

export function shouldPlayClickFor(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;

  const control = target.closest('button, [role="button"], [role="link"]');
  return !!control &&
    !!control.closest("#app") &&
    !control.matches(':disabled, [aria-disabled="true"]');
}

export function playClickSound(): void {
  if (typeof window === "undefined" || !window.AudioContext) return;

  try {
    const context = audioContext ?? (audioContext = new window.AudioContext());
    if (context.state === "suspended") {
      void context.resume().catch(() => { /* Sound is optional. */ });
    }

    // Two short falling tones make a bright, unmistakable arcade-style "pop".
    // The high note supplies a crisp attack; the round lower note adds bounce.
    const now = context.currentTime;
    const notes = [
      { type: "triangle" as OscillatorType, from: 1650, to: 850,
        peak: 0.075, attack: 0.001, duration: 0.027 },
      { type: "sine" as OscillatorType, from: 740, to: 280,
        peak: 0.18, attack: 0.004, duration: 0.095 },
    ];

    for (const note of notes) {
      const oscillator = context.createOscillator();
      const volume = context.createGain();
      oscillator.type = note.type;
      oscillator.frequency.setValueAtTime(note.from, now);
      oscillator.frequency.exponentialRampToValueAtTime(note.to, now + note.duration);
      volume.gain.setValueAtTime(0.0001, now);
      volume.gain.exponentialRampToValueAtTime(note.peak, now + note.attack);
      volume.gain.exponentialRampToValueAtTime(0.0001, now + note.duration);
      oscillator.connect(volume);
      volume.connect(context.destination);
      oscillator.onended = () => {
        oscillator.disconnect();
        volume.disconnect();
      };
      oscillator.start(now);
      oscillator.stop(now + note.duration + 0.005);
    }
  } catch {
    // A blocked or unavailable audio device must never interrupt a button action.
  }
}
