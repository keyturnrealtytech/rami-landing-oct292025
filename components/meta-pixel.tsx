"use client"

import Script from "next/script"
import { useInteraction } from "@/lib/use-interaction"

export const PIXEL_ID = "1541113180463878"

/**
 * Meta (Facebook/Instagram) Pixel. Loads the base code and tracks PageView on
 * every page. The contact form fires a separate `Lead` event on submit.
 * Loaded on first interaction (~55 KiB) so it stays off the initial load — by
 * the time a visitor opens the contact form they've already interacted, so fbq
 * is ready for the Lead event.
 */
export function MetaPixel() {
  const interacted = useInteraction()
  return (
    <>
      {interacted && (
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      )}
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
