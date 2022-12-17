import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { GA_MEASUREMENT_ID } from '../config';

function useGA() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!window.gtag) {
        console.warn("gtag not detected");
        return;
      }

      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}

export default useGA;
