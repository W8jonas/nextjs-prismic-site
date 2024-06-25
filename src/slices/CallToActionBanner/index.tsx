import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CtaBanner`.
 */
export type CtaBannerProps = SliceComponentProps<Content.CtaBannerSlice>;

/**
 * Component for "CtaBanner" Slices.
 */
const CtaBanner = ({ slice }: CtaBannerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_banner (variation: {slice.variation}) Slices
    </section>
  );
};

export default CtaBanner;
