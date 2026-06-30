"use client";

import { SectionTitle } from "@/components/SectionTitle";
import { Timeline } from "@/components/Timeline";
import { EXPERIENCE } from "@/constants";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-custom">
        <SectionTitle
          subtitle="Experience"
          title="Professional Journey"
          description="Building expertise through hands-on ML engineering and data science roles."
        />

        <Timeline items={EXPERIENCE} />
      </div>
    </section>
  );
}
