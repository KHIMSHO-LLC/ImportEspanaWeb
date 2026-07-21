"use client";

import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";

/**
 * Isolates `useSearchParams()` into the smallest possible subtree.
 *
 * Calling `useSearchParams()` inside a component makes Next.js skip server
 * rendering for that component's whole Suspense boundary. When the homepage
 * read params directly, the boundary covered the entire page and crawlers
 * received a skeleton with no content — which cost us AdSense approval.
 *
 * Renders nothing; it only pushes deep-link params up to the calculator.
 */
export function SearchParamsPrefill({
  onParams,
}: {
  onParams: (params: URLSearchParams) => void;
}) {
  const searchParams = useSearchParams();

  // Keep the latest callback without making it an effect dependency, so a new
  // inline function on each parent render can't retrigger the prefill.
  const onParamsRef = useRef(onParams);
  onParamsRef.current = onParams;

  useEffect(() => {
    if (searchParams.size > 0) {
      onParamsRef.current(new URLSearchParams(searchParams.toString()));
    }
  }, [searchParams]);

  return null;
}
