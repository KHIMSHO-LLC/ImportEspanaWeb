import NextLink from "next/link";
import type { ComponentProps } from "react";

// next/link with prefetching off by default. Next 16 prefetches every link in
// the viewport as several segment files (/page.segments/...), each one a
// billed Vercel CDN request. On a content site that cost outweighs the gain,
// so links load on click. Pass prefetch={true} where it is worth it.
export default function Link({ prefetch = false, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={prefetch} {...props} />;
}
