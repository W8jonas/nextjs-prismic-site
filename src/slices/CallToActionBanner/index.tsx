import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
    <Heading
      as="h2"
      size="sm"
      className="font-semibold text-center mb-4"
    >
      {children}
    </Heading>
  ),
  paragraph: ({children}) => (
    <p className="text-center text-slate-600 mb-8">{children}</p>
  )
}


/**
 * Props for `CtaBanner`.
 */
export type CtaBannerProps = SliceComponentProps<Content.CtaBannerSlice>;

/**
 * Component for "CtaBanner" Slices.
 */
const CtaBanner = ({ slice }: CtaBannerProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-xl md:px12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50 ">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.body} components={components} />
        
        <Button field={slice.primary.buttonlink}>
          {slice.primary.buttonlabel}
        </Button>
      </div>
    </Bounded>
  );
};

export default CtaBanner;
