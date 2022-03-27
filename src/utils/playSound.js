export const playSound = sound => {
    sound.load();
    const soundClone = sound.cloneNode()
    soundClone.volume = .4;
    soundClone.play().then();
}