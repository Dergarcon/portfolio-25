import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function WhatImLookingFor() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            What I&apos;m Looking For
          </h2>

          <Card className="p-8">
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                I&apos;m selective about opportunities that align with my
                expertise and work style. I thrive in results-oriented
                environments where technical excellence matters more than
                meeting attendance. I particularly excel in complex smart
                contract development or sophisticated backend architecture that
                requires deep focus.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div>
                  <h3 className="flex items-center gap-2 text-green-600 dark:text-green-400 mb-4">
                    <CheckCircle2 className="h-6 w-6" />I Excel In
                  </h3>
                  <ul className="space-y-2 text-base">
                    <li>
                      Autonomous work environments with minimal meeting overhead
                    </li>
                    <li>Async-first communication</li>
                    <li>Flexible hours</li>
                    <li>
                      Companies that protect deep work time for complex
                      technical problems
                    </li>
                    <li>
                      Remote-first cultures where results speak louder than
                      presence
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-4">
                    <XCircle className="h-6 w-6" />
                    Red Flags
                  </h3>
                  <ul className="space-y-2 text-base">
                    <li>Daily standups</li>
                    <li>Camera-on policies</li>
                    <li>Excessive check-ins</li>
                    <li>
                      Micromanagement approaches that interrupt deep technical
                      work
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg leading-relaxed mt-6 font-semibold">
                If you&apos;re building serious blockchain infrastructure and
                value engineers who deliver exceptional results with minimal
                oversight, let&apos;s discuss how my expertise can improve your
                team&apos;s productivity and help you reach your goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
