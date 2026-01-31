import type { Metadata } from 'next';
import VoiceAgentsContent from './VoiceAgentsContent';

export const metadata: Metadata = {
  title: 'Voice Agents - ElevenLabs Specialization',
  description: 'Building voice-first AI experiences with ElevenLabs. Conversational AI agents, voice synthesis, and audio generation. Give your business a voice.',
  keywords: 'voice agents, ElevenLabs, conversational AI, voice synthesis, text to speech, AI voice, Singapore',
  openGraph: {
    title: 'Voice Agents - Give Your Business a Voice',
    description: 'Voice-first AI experiences with ElevenLabs conversational agents.',
  },
};

export default function VoiceAgentsPage() {
  return <VoiceAgentsContent />;
}
