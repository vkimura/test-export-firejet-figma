import Rectangle31 from "assets/Rectangle31";
import Hero from "assets/Hero";
import Subtract from "assets/Subtract";
import GooglePlay52 from "assets/GooglePlay52";
import Vector from "assets/Vector";

export default function FinancialHeader(props: FinancialHeaderProps) {
  return (
    <div
      className="inset-y-0 absolute left-0 text-left right-[50.2%] bg-[rgba(250,248,244,1)]"
    >
      <Rectangle31 />
      <Hero />
      <div
        className={`absolute font-bold w-[141px] h-[45px] left-[90px] top-[41px] font-['Poppins'] text-[rgba(28,28,28,1)]`}
      >
        <p
          className="inset-y-0 right-0 absolute text-3xl inline m-0 left-[28.37%] tracking-[0.16px] leading-[normal]"
        >
          Ellipse
        </p>
        <Subtract />
      </div>
      <div
        className={`absolute inline-flex items-start font-normal left-[281px] top-[52px] overflow-clip gap-[30px] font-['Poppins'] text-[rgba(33,40,56,1)]`}
      >
        <p className="text-base m-0 tracking-[0.16px] leading-[normal]">
          Featured
        </p>
        <p className="text-base m-0 tracking-[0.16px] leading-[normal]">
          How It Work
        </p>
        <p className="text-base m-0 tracking-[0.16px] leading-[normal]">
          Pricing
        </p>
      </div>
      <div
        className={`absolute top-10 inline-flex items-start font-medium right-[90px] font-['Poppins']`}
      >
        <div
          className="px-8 py-3 gap-2.5 flex justify-center items-center w-[155px] text-[rgba(33,40,56,1)]"
        >
          <p className="text-base m-0 tracking-[0.16px] leading-[normal]">
            Contact Us
          </p>
        </div>
        <div
          className="px-8 py-3 gap-2.5 flex justify-center items-center rounded-md text-white w-[123px] bg-[rgba(255,101,37,1)]"
        >
          <p className="text-base m-0 tracking-[0.16px] leading-[normal]">
            Join Us
          </p>
        </div>
      </div>
      <div
        className={`absolute gap-1.5 inline-flex justify-center items-center font-medium left-[90px] top-[218px] font-['Poppins'] text-[rgba(255,101,37,1)]`}
      >
        <div
          className="w-5 h-0 rounded-full outline outline-2 outline-[rgba(255,101,37,1)]"
         />
        <p className="text-lg m-0 tracking-[0.16px] leading-[normal]">
          Future Investment
        </p>
      </div>
      <div
        className={`absolute leading-none inline-block font-extrabold left-[90px] top-[257px] font-['Montserrat']`}
      >
        <p
          className="inline m-0 text-[60px] tracking-[0.16px] leading-[70px] text-[rgba(33,40,56,1)]"
        >
          Manage Your
          <br />
        </p>
        <p
          className="inline m-0 text-[60px] tracking-[0.16px] leading-[70px] text-[rgba(33,40,56,1)]"
        >
          Finances Every
          <br />
        </p>
        <p
          className="inline m-0 text-[60px] tracking-[0.16px] leading-[70px] text-[rgba(33,40,56,1)]"
        >
          Day
        </p>
        <p
          className="inline m-0 text-[60px] tracking-[0.16px] leading-[70px] text-[rgba(255,101,37,1)]"
        >
          Very Easily
        </p>
      </div>
      <p
        className={`absolute text-lg font-normal inline m-0 left-[90px] top-[501px] font-['Poppins'] tracking-[0.16px] leading-[normal] text-[rgba(55,55,55,1)]`}
      >
        Manage & develop your finances well for the future
        <br />
        to come. Download now on your smartphone
      </p>
      <div
        className="absolute bg-black w-[165px] h-[60px] left-[285px] top-[622px] rounded-[6.32px]"
       />
      <GooglePlay52 />
      <div
        className={`absolute w-[96.74px] h-[42.95px] left-[338.43px] top-[629.89px] font-['Poppins']`}
      >
        <div className="font-normal text-[rgba(148,148,148,1)]">
          <p
            className="left-0 top-0 absolute m-0 w-[80.02px] right-[17.28%] bottom-[55.76%] text-[12.63px] tracking-[0.16px] leading-[normal]"
          >
            Available on
          </p>
        </div>
        <div className="text-white font-medium">
          <p
            className="inset-x-0 bottom-0 absolute m-0 h-6 w-[96.74px] top-[44.12%] text-[15.79px] tracking-[0.16px] leading-[normal]"
          >
            Google Play
          </p>
        </div>
      </div>
      <div
        className="absolute bg-black w-[165px] h-[60px] left-[90px] top-[622px] rounded-[6.32px]"
       />
      <Vector />
      <div
        className={`absolute w-[80.02px] h-[42.95px] left-[143.43px] top-[629.89px] font-['Poppins']`}
      >
        <p
          className="inset-x-0 top-0 absolute font-normal inline m-0 w-[80.02px] bottom-[55.76%] text-[12.63px] tracking-[0.16px] leading-[normal] text-[rgba(148,148,148,1)]"
        >
          Available on
        </p>
        <p
          className="left-0 bottom-0 absolute font-medium text-white inline m-0 right-[0.02%] top-[44.12%] text-[15.79px] tracking-[0.16px] leading-[normal]"
        >
          App Store
        </p>
      </div>
    </div>
  );
}

FinancialHeader.defaultProps = {};

interface FinancialHeaderProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
