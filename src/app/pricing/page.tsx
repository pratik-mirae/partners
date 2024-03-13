import PricingBannerSec from "./PricingBannerSec/PricingBannerSec";
import PricePayoutStructureSec from "./PricePayoutStructureSec/PricePayoutStructureSec";
import ViewDetailedPricesSec from "./ViewDetailedPricesSec/ViewDetailedPricesSec";
import RegOnboardChargesSec from "./RegOnboardChargesSec/RegOnboardChargesSec";
import { getMetaData } from "../layout";

export async function generateMetadata() {
  const commonMetadata = getMetaData({
    title: 'Sub Broker Commission Structure - Sub Brokers Income',
    description: 'Interested in becoming a sub-broker or authorized partner? Explore the commission structure for sub-brokers at Mirae Asset Partners.',
    keywords: ['sub broker income', ' sub broker commission structure', 'sub broker earnings']
  });
  commonMetadata.openGraph.url = "https://www.miraeassetpartners.com/pricing"
  commonMetadata.alternates.canonical = "https://www.miraeassetpartners.com/pricing"

  return commonMetadata;
}

export default function PricingPage() {
  return (
    <>
      <PricingBannerSec />
      <PricePayoutStructureSec />
      <ViewDetailedPricesSec />
      <RegOnboardChargesSec />
    </>
  );
}
