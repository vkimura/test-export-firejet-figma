export default function Hero(props: HeroProps) {
  return (
    <div className="top-0 absolute w-[560px] h-[900px] left-[697px]">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 560 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_117_156"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="560"
          height="900"
        >
          <path
            d="M 0 40 C 0 17.909 17.909 0 40 0 H 560 V 900 H 40 C 17.909 900 0 882.091 0 860 V 40 Z"
            fill="#E3EBD6"
           />
        </mask>
        <g mask="url(#mask0_117_156)">
          <g filter="url(#filter0_f_117_156)">
            <rect
              x="174"
              y="351"
              width="213"
              height="369"
              rx="20"
              fill="#505646"
             />
          </g>
          <rect
            x="-145"
            y="208"
            width="240"
            height="484"
            fill="url(#pattern-I117:100;8:773-0)"
           />
          <rect
            x="130"
            y="148"
            width="300"
            height="605"
            fill="url(#pattern-I117:100;8:773-1)"
           />
          <circle cx="256" cy="787" r="4" fill="#FAF8F4" />
          <circle cx="304" cy="787" r="4" fill="#FAF8F4" />
          <rect
            x="265"
            y="783"
            width="30"
            height="8"
            rx="4"
            fill="#FF6525"
           />
          <rect
            x="465"
            y="208"
            width="240"
            height="484"
            fill="url(#pattern-I117:100;8:773-2)"
           />
        </g>
        <defs>
          <filter
            id="filter0_f_117_156"
            x="54"
            y="231"
            width="453"
            height="609"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
             />
            <feGaussianBlur
              stdDeviation="60"
              result="effect1_foregroundBlur_117_156"
             />
          </filter>
          <pattern
            id="pattern-I117:100;8:773-0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_117_156"
              transform="scale(0.00111111 0.000550964)"
             />
          </pattern>
          <pattern
            id="pattern-I117:100;8:773-1"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_117_156"
              transform="scale(0.00111111 0.000550964)"
             />
          </pattern>
          <pattern
            id="pattern-I117:100;8:773-2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_117_156"
              transform="scale(0.00111111 0.000550964)"
             />
          </pattern>
          <image
            id="image0_117_156"
            width="900"
            height="1815"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/8d9851f4-4bb7-4806-a9ae-93791878687b.webp"
           />
          <image
            id="image1_117_156"
            width="900"
            height="1815"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/2dea0ca1-02a4-4deb-8d08-d920f537c7ff.webp"
           />
          <image
            id="image2_117_156"
            width="900"
            height="1815"
            xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/a3b51326-3ff4-458e-8586-824f1cfbbf7f.webp"
           />
        </defs>
      </svg>
    </div>
  );
}

Hero.defaultProps = {};

interface HeroProps {}

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
