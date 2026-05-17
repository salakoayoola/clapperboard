const fs = require('fs');
const sampleRate = 44100;
const duration = 0.05; // 50ms tone
const frequency = 1000; // 1kHz
const numSamples = Math.floor(sampleRate * duration);
const buffer = Buffer.alloc(44 + numSamples * 2);

// WAV Header
buffer.write('RIFF', 0);
buffer.writeUInt32LE(36 + numSamples * 2, 4);
buffer.write('WAVE', 8);
buffer.write('fmt ', 12);
buffer.writeUInt32LE(16, 16);
buffer.writeUInt16LE(1, 20); // PCM
buffer.writeUInt16LE(1, 22); // Mono
buffer.writeUInt32LE(sampleRate, 24);
buffer.writeUInt32LE(sampleRate * 2, 28); // Byte rate
buffer.writeUInt16LE(2, 32); // Block align
buffer.writeUInt16LE(16, 34); // Bits per sample
buffer.write('data', 36);
buffer.writeUInt32LE(numSamples * 2, 40);

// Data
for (let i = 0; i < numSamples; i++) {
  const t = i / sampleRate;
  // Apply a simple envelope to prevent clicking
  const envelope = i < 100 ? i / 100 : (i > numSamples - 100 ? (numSamples - i) / 100 : 1);
  const sample = Math.sin(2 * Math.PI * frequency * t) * 32767 * envelope;
  buffer.writeInt16LE(Math.max(-32768, Math.min(32767, Math.round(sample))), 44 + i * 2);
}

fs.writeFileSync('assets/clap.wav', buffer);
console.log('Created clap.wav');
