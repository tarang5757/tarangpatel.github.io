import CardWrapper from "./CardWrapper";

interface AboutSectionProps {}

const AboutSection = ({}: AboutSectionProps) => {
  return (
    <section className="mt-12 min-h-[100dvh] px-4 pt-32" id="about">
      <div className="mx-auto h-3 w-32 bg-[#310000] text-center text-[#FFD5C8] md:w-44">
        <span className="block -translate-y-2 max-md:text-sm md:-translate-y-2.5">
          dive into the
        </span>
      </div>
      <div className="my-2 flex items-center justify-center">
        <HackerSphereSvg />
      </div>

      <p className="text-center text-white md:text-lg">
        Let&apos;s take hackathons to the next level.
      </p>
      <div className="relative mx-auto mt-8 flex h-full w-full max-w-screen-xl flex-col items-center gap-6 md:gap-12">
        <CardWrapper className="w-full max-w-screen-md py-10 text-center">
          <h3 className="text-balance font-pixelate text-xl font-bold text-white [text-shadow:0_2px__8px_#333] sm:text-2xl md:text-3xl">
            {">"} What is CTRL+HACK+DEL?
          </h3>
          <p className="pt-4 font-bold text-neutral-100 md:px-12 md:text-lg">
            A 36-hour innovation marathon where you&apos;re not just
            participating in a hackathon—you&apos;re elevating it. Aimed at
            setting new standards and pushing the envelope, Ctrl+Hack+Del
            invites you to join forces with fellow hackers in transforming ideas
            into reality. Let&apos;s hack new heights and take the hackathon
            experience to the next level.
          </p>
        </CardWrapper>

        <CardWrapper className="w-full max-w-screen-md py-10 text-center">
          <h3 className="font-pixelate text-xl font-bold text-white [text-shadow:0_2px__8px_#333] sm:text-2xl md:text-3xl">
            {">"} What is a hackathon?
          </h3>
          <p className="pt-4 font-bold text-neutral-100 md:px-12 md:text-lg">
            A hackathon is a fast-paced event where programmers, designers, and
            tech enthusiasts collaborate to turn ideas into software solutions
            in just a few days. It&apos;s a mix of creativity, technology
            exploration, and competition, as teams work against the clock to
            innovate and address set challenges.
          </p>
        </CardWrapper>

        <h2 className="text-center font-pixelate text-2xl font-bold text-white [text-shadow:0_2px__8px_#333] md:text-3xl">
          Check back for more info <br className="max-sm:hidden" />
          on May 31st
        </h2>
      </div>
    </section>
  );
};

const HackerSphereSvg = () => {
  return (
    <svg
      className="w-full max-w-[400px]"
      height="auto"
      viewBox="0 0 404 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_668_183)">
        <mask
          id="path-1-outside-1_668_183"
          maskUnits="userSpaceOnUse"
          x="8"
          y="8"
          width="388"
          height="40"
          fill="black"
        >
          <rect fill="white" x="8" y="8" width="388" height="40" />
          <path d="M12 40V12H20V24H32V12H40V40H32V28H20V40H12ZM48 40V36H44V32H48V28H64V24H48V20H68V24H72V40H48ZM52 36H64V32H52V36ZM80 40V36H76V24H80V20H104V24H84V36H104V40H80ZM108 40V12H116V28H124V24H128V20H136V24H132V28H128V32H132V36H136V40H128V36H124V32H116V40H108ZM144 40V36H140V24H144V20H164V24H168V32H148V36H164V40H144ZM148 28H160V24H148V28ZM184 24H188V28H184V40H176V20H184V24ZM200 20V24H188V20H200ZM204 40V36H224V32H208V28H204V24H208V20H228V24H212V28H228V32H232V36H228V40H204ZM236 44V20H260V24H264V32H260V36H244V44H236ZM244 32H256V24H244V32ZM268 40V12H276V20H292V24H296V40H288V24H276V40H268ZM304 40V36H300V24H304V20H324V24H328V32H308V36H324V40H304ZM308 28H320V24H308V28ZM344 24H348V28H344V40H336V20H344V24ZM360 20V24H348V20H360ZM368 40V36H364V24H368V20H388V24H392V32H372V36H388V40H368ZM372 28H384V24H372V28Z" />
        </mask>
        <path
          d="M12 40V12H20V24H32V12H40V40H32V28H20V40H12ZM48 40V36H44V32H48V28H64V24H48V20H68V24H72V40H48ZM52 36H64V32H52V36ZM80 40V36H76V24H80V20H104V24H84V36H104V40H80ZM108 40V12H116V28H124V24H128V20H136V24H132V28H128V32H132V36H136V40H128V36H124V32H116V40H108ZM144 40V36H140V24H144V20H164V24H168V32H148V36H164V40H144ZM148 28H160V24H148V28ZM184 24H188V28H184V40H176V20H184V24ZM200 20V24H188V20H200ZM204 40V36H224V32H208V28H204V24H208V20H228V24H212V28H228V32H232V36H228V40H204ZM236 44V20H260V24H264V32H260V36H244V44H236ZM244 32H256V24H244V32ZM268 40V12H276V20H292V24H296V40H288V24H276V40H268ZM304 40V36H300V24H304V20H324V24H328V32H308V36H324V40H304ZM308 28H320V24H308V28ZM344 24H348V28H344V40H336V20H344V24ZM360 20V24H348V20H360ZM368 40V36H364V24H368V20H388V24H392V32H372V36H388V40H368ZM372 28H384V24H372V28Z"
          fill="black"
        />
        <path
          d="M12 40H8V44H12V40ZM12 12V8H8V12H12ZM20 12H24V8H20V12ZM20 24H16V28H20V24ZM32 24V28H36V24H32ZM32 12V8H28V12H32ZM40 12H44V8H40V12ZM40 40V44H44V40H40ZM32 40H28V44H32V40ZM32 28H36V24H32V28ZM20 28V24H16V28H20ZM20 40V44H24V40H20ZM16 40V12H8V40H16ZM12 16H20V8H12V16ZM16 12V24H24V12H16ZM20 28H32V20H20V28ZM36 24V12H28V24H36ZM32 16H40V8H32V16ZM36 12V40H44V12H36ZM40 36H32V44H40V36ZM36 40V28H28V40H36ZM32 24H20V32H32V24ZM16 28V40H24V28H16ZM20 36H12V44H20V36ZM48 40H44V44H48V40ZM48 36H52V32H48V36ZM44 36H40V40H44V36ZM44 32V28H40V32H44ZM48 32V36H52V32H48ZM48 28V24H44V28H48ZM64 28V32H68V28H64ZM64 24H68V20H64V24ZM48 24H44V28H48V24ZM48 20V16H44V20H48ZM68 20H72V16H68V20ZM68 24H64V28H68V24ZM72 24H76V20H72V24ZM72 40V44H76V40H72ZM52 36H48V40H52V36ZM64 36V40H68V36H64ZM64 32H68V28H64V32ZM52 32V28H48V32H52ZM52 40V36H44V40H52ZM48 32H44V40H48V32ZM48 36V32H40V36H48ZM44 36H48V28H44V36ZM52 32V28H44V32H52ZM48 32H64V24H48V32ZM68 28V24H60V28H68ZM64 20H48V28H64V20ZM52 24V20H44V24H52ZM48 24H68V16H48V24ZM64 20V24H72V20H64ZM68 28H72V20H68V28ZM68 24V40H76V24H68ZM72 36H48V44H72V36ZM52 40H64V32H52V40ZM68 36V32H60V36H68ZM64 28H52V36H64V28ZM48 32V36H56V32H48ZM80 40H76V44H80V40ZM80 36H84V32H80V36ZM76 36H72V40H76V36ZM76 24V20H72V24H76ZM80 24V28H84V24H80ZM80 20V16H76V20H80ZM104 20H108V16H104V20ZM104 24V28H108V24H104ZM84 24V20H80V24H84ZM84 36H80V40H84V36ZM104 36H108V32H104V36ZM104 40V44H108V40H104ZM84 40V36H76V40H84ZM80 32H76V40H80V32ZM80 36V24H72V36H80ZM76 28H80V20H76V28ZM84 24V20H76V24H84ZM80 24H104V16H80V24ZM100 20V24H108V20H100ZM104 20H84V28H104V20ZM80 24V36H88V24H80ZM84 40H104V32H84V40ZM100 36V40H108V36H100ZM104 36H80V44H104V36ZM108 40H104V44H108V40ZM108 12V8H104V12H108ZM116 12H120V8H116V12ZM116 28H112V32H116V28ZM124 28V32H128V28H124ZM124 24V20H120V24H124ZM128 24V28H132V24H128ZM128 20V16H124V20H128ZM136 20H140V16H136V20ZM136 24V28H140V24H136ZM132 24V20H128V24H132ZM132 28V32H136V28H132ZM128 28V24H124V28H128ZM128 32H124V36H128V32ZM132 32H136V28H132V32ZM132 36H128V40H132V36ZM136 36H140V32H136V36ZM136 40V44H140V40H136ZM128 40H124V44H128V40ZM128 36H132V32H128V36ZM124 36H120V40H124V36ZM124 32H128V28H124V32ZM116 32V28H112V32H116ZM116 40V44H120V40H116ZM112 40V12H104V40H112ZM108 16H116V8H108V16ZM112 12V28H120V12H112ZM116 32H124V24H116V32ZM128 28V24H120V28H128ZM124 28H128V20H124V28ZM132 24V20H124V24H132ZM128 24H136V16H128V24ZM132 20V24H140V20H132ZM136 20H132V28H136V20ZM128 24V28H136V24H128ZM132 24H128V32H132V24ZM124 28V32H132V28H124ZM128 36H132V28H128V36ZM128 32V36H136V32H128ZM132 40H136V32H132V40ZM132 36V40H140V36H132ZM136 36H128V44H136V36ZM132 40V36H124V40H132ZM128 32H124V40H128V32ZM128 36V32H120V36H128ZM124 28H116V36H124V28ZM112 32V40H120V32H112ZM116 36H108V44H116V36ZM144 40H140V44H144V40ZM144 36H148V32H144V36ZM140 36H136V40H140V36ZM140 24V20H136V24H140ZM144 24V28H148V24H144ZM144 20V16H140V20H144ZM164 20H168V16H164V20ZM164 24H160V28H164V24ZM168 24H172V20H168V24ZM168 32V36H172V32H168ZM148 32V28H144V32H148ZM148 36H144V40H148V36ZM164 36H168V32H164V36ZM164 40V44H168V40H164ZM148 28H144V32H148V28ZM160 28V32H164V28H160ZM160 24H164V20H160V24ZM148 24V20H144V24H148ZM148 40V36H140V40H148ZM144 32H140V40H144V32ZM144 36V24H136V36H144ZM140 28H144V20H140V28ZM148 24V20H140V24H148ZM144 24H164V16H144V24ZM160 20V24H168V20H160ZM164 28H168V20H164V28ZM164 24V32H172V24H164ZM168 28H148V36H168V28ZM144 32V36H152V32H144ZM148 40H164V32H148V40ZM160 36V40H168V36H160ZM164 36H144V44H164V36ZM148 32H160V24H148V32ZM164 28V24H156V28H164ZM160 20H148V28H160V20ZM144 24V28H152V24H144ZM184 24H180V28H184V24ZM188 24H192V20H188V24ZM188 28V32H192V28H188ZM184 28V24H180V28H184ZM184 40V44H188V40H184ZM176 40H172V44H176V40ZM176 20V16H172V20H176ZM184 20H188V16H184V20ZM200 20H204V16H200V20ZM200 24V28H204V24H200ZM188 24H184V28H188V24ZM188 20V16H184V20H188ZM184 28H188V20H184V28ZM184 24V28H192V24H184ZM188 24H184V32H188V24ZM180 28V40H188V28H180ZM184 36H176V44H184V36ZM180 40V20H172V40H180ZM176 24H184V16H176V24ZM180 20V24H188V20H180ZM196 20V24H204V20H196ZM200 20H188V28H200V20ZM192 24V20H184V24H192ZM188 24H200V16H188V24ZM204 40H200V44H204V40ZM204 36V32H200V36H204ZM224 36V40H228V36H224ZM224 32H228V28H224V32ZM208 32H204V36H208V32ZM208 28H212V24H208V28ZM204 28H200V32H204V28ZM204 24V20H200V24H204ZM208 24V28H212V24H208ZM208 20V16H204V20H208ZM228 20H232V16H228V20ZM228 24V28H232V24H228ZM212 24V20H208V24H212ZM212 28H208V32H212V28ZM228 28H232V24H228V28ZM228 32H224V36H228V32ZM232 32H236V28H232V32ZM232 36V40H236V36H232ZM228 36V32H224V36H228ZM228 40V44H232V40H228ZM208 40V36H200V40H208ZM204 40H224V32H204V40ZM228 36V32H220V36H228ZM224 28H208V36H224V28ZM212 32V28H204V32H212ZM208 24H204V32H208V24ZM208 28V24H200V28H208ZM204 28H208V20H204V28ZM212 24V20H204V24H212ZM208 24H228V16H208V24ZM224 20V24H232V20H224ZM228 20H212V28H228V20ZM208 24V28H216V24H208ZM212 32H228V24H212V32ZM224 28V32H232V28H224ZM228 36H232V28H228V36ZM228 32V36H236V32H228ZM232 32H228V40H232V32ZM224 36V40H232V36H224ZM228 36H204V44H228V36ZM236 44H232V48H236V44ZM236 20V16H232V20H236ZM260 20H264V16H260V20ZM260 24H256V28H260V24ZM264 24H268V20H264V24ZM264 32V36H268V32H264ZM260 32V28H256V32H260ZM260 36V40H264V36H260ZM244 36V32H240V36H244ZM244 44V48H248V44H244ZM244 32H240V36H244V32ZM256 32V36H260V32H256ZM256 24H260V20H256V24ZM244 24V20H240V24H244ZM240 44V20H232V44H240ZM236 24H260V16H236V24ZM256 20V24H264V20H256ZM260 28H264V20H260V28ZM260 24V32H268V24H260ZM264 28H260V36H264V28ZM256 32V36H264V32H256ZM260 32H244V40H260V32ZM240 36V44H248V36H240ZM244 40H236V48H244V40ZM244 36H256V28H244V36ZM260 32V24H252V32H260ZM256 20H244V28H256V20ZM240 24V32H248V24H240ZM268 40H264V44H268V40ZM268 12V8H264V12H268ZM276 12H280V8H276V12ZM276 20H272V24H276V20ZM292 20H296V16H292V20ZM292 24H288V28H292V24ZM296 24H300V20H296V24ZM296 40V44H300V40H296ZM288 40H284V44H288V40ZM288 24H292V20H288V24ZM276 24V20H272V24H276ZM276 40V44H280V40H276ZM272 40V12H264V40H272ZM268 16H276V8H268V16ZM272 12V20H280V12H272ZM276 24H292V16H276V24ZM288 20V24H296V20H288ZM292 28H296V20H292V28ZM292 24V40H300V24H292ZM296 36H288V44H296V36ZM292 40V24H284V40H292ZM288 20H276V28H288V20ZM272 24V40H280V24H272ZM276 36H268V44H276V36ZM304 40H300V44H304V40ZM304 36H308V32H304V36ZM300 36H296V40H300V36ZM300 24V20H296V24H300ZM304 24V28H308V24H304ZM304 20V16H300V20H304ZM324 20H328V16H324V20ZM324 24H320V28H324V24ZM328 24H332V20H328V24ZM328 32V36H332V32H328ZM308 32V28H304V32H308ZM308 36H304V40H308V36ZM324 36H328V32H324V36ZM324 40V44H328V40H324ZM308 28H304V32H308V28ZM320 28V32H324V28H320ZM320 24H324V20H320V24ZM308 24V20H304V24H308ZM308 40V36H300V40H308ZM304 32H300V40H304V32ZM304 36V24H296V36H304ZM300 28H304V20H300V28ZM308 24V20H300V24H308ZM304 24H324V16H304V24ZM320 20V24H328V20H320ZM324 28H328V20H324V28ZM324 24V32H332V24H324ZM328 28H308V36H328V28ZM304 32V36H312V32H304ZM308 40H324V32H308V40ZM320 36V40H328V36H320ZM324 36H304V44H324V36ZM308 32H320V24H308V32ZM324 28V24H316V28H324ZM320 20H308V28H320V20ZM304 24V28H312V24H304ZM344 24H340V28H344V24ZM348 24H352V20H348V24ZM348 28V32H352V28H348ZM344 28V24H340V28H344ZM344 40V44H348V40H344ZM336 40H332V44H336V40ZM336 20V16H332V20H336ZM344 20H348V16H344V20ZM360 20H364V16H360V20ZM360 24V28H364V24H360ZM348 24H344V28H348V24ZM348 20V16H344V20H348ZM344 28H348V20H344V28ZM344 24V28H352V24H344ZM348 24H344V32H348V24ZM340 28V40H348V28H340ZM344 36H336V44H344V36ZM340 40V20H332V40H340ZM336 24H344V16H336V24ZM340 20V24H348V20H340ZM356 20V24H364V20H356ZM360 20H348V28H360V20ZM352 24V20H344V24H352ZM348 24H360V16H348V24ZM368 40H364V44H368V40ZM368 36H372V32H368V36ZM364 36H360V40H364V36ZM364 24V20H360V24H364ZM368 24V28H372V24H368ZM368 20V16H364V20H368ZM388 20H392V16H388V20ZM388 24H384V28H388V24ZM392 24H396V20H392V24ZM392 32V36H396V32H392ZM372 32V28H368V32H372ZM372 36H368V40H372V36ZM388 36H392V32H388V36ZM388 40V44H392V40H388ZM372 28H368V32H372V28ZM384 28V32H388V28H384ZM384 24H388V20H384V24ZM372 24V20H368V24H372ZM372 40V36H364V40H372ZM368 32H364V40H368V32ZM368 36V24H360V36H368ZM364 28H368V20H364V28ZM372 24V20H364V24H372ZM368 24H388V16H368V24ZM384 20V24H392V20H384ZM388 28H392V20H388V28ZM388 24V32H396V24H388ZM392 28H372V36H392V28ZM368 32V36H376V32H368ZM372 40H388V32H372V40ZM384 36V40H392V36H384ZM388 36H368V44H388V36ZM372 32H384V24H372V32ZM388 28V24H380V28H388ZM384 20H372V28H384V20ZM368 24V28H376V24H368Z"
          fill="url(#paint0_linear_668_183)"
          mask="url(#path-1-outside-1_668_183)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_668_183"
          x="0"
          y="0"
          width="404"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.36 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_668_183"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_668_183"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_668_183"
          x1="12"
          y1="28"
          x2="396"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C5642E" />
          <stop offset="1" stopColor="#F51724" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default AboutSection;