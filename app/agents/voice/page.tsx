import type { Metadata } from "next";
import VoiceAgentsContent from "./VoiceAgentsContent";

export const metadata: Metadata = {
  title: "Voice Agents - Notes from ElevenLabs",
  description:
    "Notes on voice-first AI: conversational agents, voice synthesis, and what I learned from the ElevenLabs Worldwide Hackathon (2nd place).",
  keywords:
    "voice agents, ElevenLabs, conversational AI, voice synthesis, text to speech",
  openGraph: {
    title: "Voice Agents - David Liew",
    description: "Notes on voice-first AI from ElevenLabs hackathon work.",
  },
};

export default function VoiceAgentsPage() {
  return <VoiceAgentsContent />;
}
