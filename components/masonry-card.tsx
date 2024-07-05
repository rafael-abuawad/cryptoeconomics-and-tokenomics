"use client";

/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";

export function MasonryCard({
  badge,
  image,
  imageAltText,
  className,
}: Readonly<{ badge: string; image: string; imageAltText: string; className?: string }>) {
  return (
    <div className={className}>
      <div className="group relative block rounded-xl overflow-hidden">
        <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
          <img
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
            src={image}
            alt={imageAltText}
          />
        </div>
        <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
          <Badge variant="secondary">{badge}</Badge>
        </div>
      </div>
    </div>
  );
}
