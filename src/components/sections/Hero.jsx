import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono">
          <TypeAnimation
            sequence={[
              'Technical Documentation Engineer ✍🏾',
              2000,
              'Building Developer Experiences ✍🏾',
              2000,
              'Creating API Documentation ✍🏾',
              2000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-5xl font-bold mb-6"
            repeat={Infinity}
            cursor={true}
          />
        </div>
        <br />
        <br />
        <p className="text-2xl text-gray-200 max-w-2xl">
          Hello, World! 👋 I'm Prince ⚡️
        </p>
        <br />
        <br />
        <p className="text-xl text-gray-300 max-w-2xl">
          I'm experienced in creating API and developer documentation. Passionate about mentoring, open-source,
          and explaining complex problems into simple, actionable steps and procedures.
        </p>
      </div>
    </section>
  );
}