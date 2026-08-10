import Image from "next/image";
import Link from "next/link";

export default function AboutContent() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 md:py-16">
      <header className="mb-10 flex items-center gap-6">
        <Image
          src="/images/headshot.jpg"
          alt="Dave Liew"
          width={96}
          height={96}
          className="rounded-full"
          priority
        />
        <h1 className="text-3xl md:text-4xl font-bold">About</h1>
      </header>

      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          I&apos;m Dave Liew, in Singapore. Since April 2026 I&apos;ve been a
          Product Deployment Engineer at Google gTech Ads, working on Search+ —
          product adoption, deployment, and measurement integrity.
        </p>

        <p>
          Before Google I was at Meta (2022–2024) as a Technical Solutions
          Consultant: two years in the weeds of signal loss through SKAN 4.0 and
          the Conversions API, troubleshooting attribution at scale. Between
          Meta and Google I built with AI: shipped my wife&apos;s clinic
          website, ran a small prototyping practice, took 2nd place at the
          ElevenLabs Voice AI Hackathon, and entered the Gemini API Developer
          Competition solo.
        </p>

        <p>
          I&apos;m a mid-career tech pivoter: I started my coding journey
          teaching kids to code at SG Code Campus, then went through General
          Assembly&apos;s software engineering bootcamp.
        </p>

        <p>
          Outside work I&apos;m raising kids through the AI shift — which is
          half of what the log is about.
        </p>

        <p>
          This site is a <Link href="/log">field log of the AI era</Link>: dated
          notes written for future me first. This page exists so the log has a
          name attached.
        </p>

        <p className="text-gray-400">
          Elsewhere:{" "}
          <a
            href="https://github.com/daveliew"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          ,{" "}
          <a
            href="https://linkedin.com/in/daveliew"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
