import svgPaths from "./svg-y2wat2vlpu";
import imgTransparent1 from "figma:asset/5ef74198ad67c718c91b9a78597a8cedd15a1624.png";
import imgCircle1 from "figma:asset/550f01c01b948715ed86fa120eec8e3fa0a24635.png";
import imgProject11 from "figma:asset/c9815fbb26995539afc0f3dffe0d2bc422b2ed75.png";
import imgProject21 from "figma:asset/c20a2f2025a53659d40441aebdada181f84c7899.png";
import imgProject31 from "figma:asset/68bc0dd25e4b9857b037d33b4c2f6f10587c0938.png";

function CibMailRu() {
  return <div className="absolute left-[322px] size-[37px] top-[737.2px]" data-name="cib:mail-ru" />;
}

function Frame1() {
  return <div className="absolute h-[1612px] left-[2px] top-[1019px] w-[1918px]" />;
}

function DesignerDeveloperEntrepreneurEtc() {
  return (
    <div className="absolute bg-[#d7d7d7] h-[1022px] left-[-2px] overflow-clip top-0 w-[1922px]" data-name="Designer/developer/entrepreneur etc">
      <div className="absolute flex flex-col font-['Raleway:Bold',sans-serif] font-bold h-[58px] justify-end leading-[0] left-[341.5px] text-[40px] text-black text-center top-[409px] translate-x-[-50%] translate-y-[-100%] w-[171px]">
        <p className="leading-[normal]">Hi, I am</p>
      </div>
      <p className="absolute font-['Raleway:Bold',sans-serif] font-bold h-[188px] leading-[normal] left-[301px] text-[80px] text-black top-[428px] w-[532px]">Matheesha Pathirana</p>
      <p className="absolute font-['Raleway:ExtraBold',sans-serif] font-extrabold h-[40px] leading-[normal] left-[429.5px] text-[#909090] text-[25px] text-center top-[617px] translate-x-[-50%] w-[281px]">Back-end Developer</p>
      <CibMailRu />
      <div className="absolute flex h-[1657.13px] items-center justify-center left-[752.77px] top-[-192px] w-[2007.43px]" style={{ "--transform-inner-width": "1802.28125", "--transform-inner-height": "1373.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.667deg]">
          <div className="h-[1373.99px] relative w-[1802.3px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1803 1374">
              <path d="M0 0H1802.3V1373.99H0L0 0Z" fill="var(--fill-0, #FBAD86)" id="Rectangle 67" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[860px] size-[856px] top-[380px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 856 856">
          <circle cx="428" cy="428" fill="var(--fill-0, #FFBB9A)" id="Ellipse 1" r="428" />
        </svg>
      </div>
      <div className="absolute h-[931px] left-[899px] top-[97px] w-[857px]" data-name="Transparent 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgTransparent1} />
      </div>
      <Frame1 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute contents left-[1082px] top-[65px]" data-name="Navbar">
      <div className="absolute bg-white border-4 border-solid border-white h-[46px] left-[1572px] rounded-[30px] top-[65px] w-[147px]" />
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[46px] justify-center leading-[0] left-[1645.5px] not-italic text-[15px] text-black text-center top-[88px] translate-x-[-50%] translate-y-[-50%] w-[147px]">
        <p className="leading-[normal]">CONTACT ME</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[46px] justify-center leading-[0] left-[1465.5px] not-italic text-[17px] text-black text-center top-[88px] translate-x-[-50%] translate-y-[-50%] w-[147px]">
        <p className="leading-[normal]">Portfolio</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[46px] justify-center leading-[0] left-[1155.5px] not-italic text-[17px] text-black text-center top-[88px] translate-x-[-50%] translate-y-[-50%] w-[147px]">
        <p className="leading-[normal]">About me</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[46px] justify-center leading-[0] left-[1310.5px] not-italic text-[17px] text-black text-center top-[88px] translate-x-[-50%] translate-y-[-50%] w-[147px]">
        <p className="leading-[normal]">Skills</p>
      </div>
    </div>
  );
}

function SocialIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_1630)" id="Social icon">
          <path d={svgPaths.p24dd3180} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1630">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 size-[56px]" data-name="Button">
      <SocialIcon />
    </div>
  );
}

function SocialIcon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social icon">
          <path d={svgPaths.p19fb8dc0} fill="var(--fill-0, black)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <SocialIcon1 />
    </div>
  );
}

function SocialIcon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_804)" id="Social icon">
          <path d={svgPaths.p208c440} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_804">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <SocialIcon2 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 left-[-15%] right-[-15%] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 20">
        <g id="Group 1">
          <path d={svgPaths.p1dc26480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <Group />
    </div>
  );
}

function Button3() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <SocialIcon3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-start left-[201px] top-[818px]" data-name="Button">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute bg-black h-[1022px] left-0 overflow-clip top-[66px] w-[1920px]" data-name="Hero">
      <Button4 />
      <DesignerDeveloperEntrepreneurEtc />
      <Navbar />
    </div>
  );
}

function IcBaselineDoubleArrow() {
  return (
    <div className="relative size-[15px]" data-name="ic:baseline-double-arrow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="ic:baseline-double-arrow">
          <path d={svgPaths.p56cf9b0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p206fc480} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-white h-[183px] left-0 overflow-clip top-[5087px] w-[1920px]" data-name="Footer">
      <div className="absolute bg-black h-[326px] left-0 top-0 w-[1920px]" />
      <p className="absolute bottom-[70px] font-['Nunito:Bold',sans-serif] font-bold h-[22px] leading-[normal] left-[calc(50%-209px)] text-[18px] text-white translate-y-[100%] w-[418px]">
        <span>{`© 2025 Matheesha Pathirana. `}</span>
        <span className="font-['Nunito:Regular',sans-serif] font-normal">All rights reserved.</span>
      </p>
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[26px] justify-center leading-[0] left-[960px] not-italic text-[15px] text-center text-white top-[76px] tracking-[2.7807px] translate-x-[-50%] translate-y-[-50%] w-[188px]">
        <p className="leading-[normal]">BACK TO TOP</p>
      </div>
      <div className="absolute flex items-center justify-center left-[952px] size-[15px] top-[41px]" style={{ "--transform-inner-width": "15", "--transform-inner-height": "15" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <IcBaselineDoubleArrow />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[56px] place-items-start relative shrink-0 text-[48px] text-nowrap text-white tracking-[-0.96px] whitespace-pre">
      <p className="[grid-area:1_/_1] font-['Sora:Regular',sans-serif] font-normal ml-0 mt-0 relative">My</p>
      <p className="[grid-area:1_/_1] font-['Sora:ExtraBold',sans-serif] font-extrabold ml-[86px] mt-0 relative">Skills</p>
    </div>
  );
}

function Row() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] items-center justify-center left-[calc(50%+0.5px)] overflow-clip px-0 py-[20px] top-[46px] translate-x-[-50%] w-[1513px]" data-name="Row">
      <Group1 />
    </div>
  );
}

function IconGit() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="icon-git">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="icon-git">
          <path d={svgPaths.p22f18480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Skills() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[24px] relative rounded-[4px] shrink-0 size-[186px]" data-name="Skills">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconGit />
      <p className="capitalize font-['Sora:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[20px] text-black text-center tracking-[-0.4px] w-[min-content]">Git</p>
    </div>
  );
}

function Skills1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[24px] relative rounded-[4px] shrink-0 size-[186px]" data-name="Skills">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="relative shrink-0 size-[56px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <path d={svgPaths.p1e87680} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="capitalize font-['Sora:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[20px] text-black text-center tracking-[-0.4px] w-[min-content]">JavaScript</p>
    </div>
  );
}

function Skills2() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[24px] relative rounded-[4px] shrink-0 size-[186px]" data-name="Skills">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="h-[58px] relative shrink-0 w-[59px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 58">
          <path d={svgPaths.p3be0de00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="capitalize font-['Sora:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[20px] text-black text-center tracking-[-0.4px] w-[min-content]">Python</p>
    </div>
  );
}

function Skills3() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[24px] relative rounded-[4px] shrink-0 size-[186px]" data-name="Skills">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="h-[69px] relative shrink-0 w-[51px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 69">
          <path d={svgPaths.p25e5ddc0} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="capitalize font-['Sora:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[20px] text-black text-center tracking-[-0.4px] w-[min-content]">Java</p>
    </div>
  );
}

function Column() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-[387px] overflow-clip px-0 py-[20px] top-[182px] w-[1216px]" data-name="column">
      <Skills />
      <Skills1 />
      <Skills2 />
      <Skills3 />
    </div>
  );
}

function Skills4() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[24px] relative rounded-[4px] shrink-0 size-[186px]" data-name="Skills">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="h-[53.2px] relative shrink-0 w-[45.6px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 54">
          <path d={svgPaths.p1566cd80} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="capitalize font-['Sora:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[20px] text-black text-center tracking-[-0.4px] w-[min-content]">HTML</p>
    </div>
  );
}

function Skills5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[24px] relative rounded-[4px] shrink-0 size-[186px]" data-name="Skills">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="h-[50.4px] relative shrink-0 w-[49.7px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 51">
          <path d={svgPaths.p17b57b00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="capitalize font-['Sora:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[20px] text-black text-center tracking-[-0.4px] w-[min-content]">CSS</p>
    </div>
  );
}

function Skills6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[24px] relative rounded-[4px] shrink-0 size-[186px]" data-name="Skills">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="h-[64px] relative shrink-0 w-[57px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 64">
          <path d={svgPaths.p29b29580} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="capitalize font-['Sora:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[20px] text-black text-center tracking-[-0.4px] w-[min-content]">MySQL</p>
    </div>
  );
}

function Skills7() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] items-center justify-center p-[24px] relative rounded-[4px] shrink-0 size-[186px]" data-name="Skills">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="h-[60px] relative shrink-0 w-[52px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 60">
          <path d={svgPaths.p1cd680} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="capitalize font-['Sora:Bold',sans-serif] font-bold leading-[24px] min-w-full relative shrink-0 text-[20px] text-black text-center tracking-[-0.4px] w-[min-content]">C</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="absolute box-border content-stretch flex items-center justify-between left-[387px] overflow-clip px-0 py-[20px] top-[408px] w-[1216px]" data-name="column">
      <Skills4 />
      <Skills5 />
      <Skills6 />
      <Skills7 />
    </div>
  );
}

function Frame3() {
  return <div className="absolute h-[1196px] left-0 top-[7px] w-[1920px]" />;
}

function Frame4() {
  return (
    <div className="absolute h-[1247px] left-0 overflow-clip top-[734px] w-[1920px]">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-black h-[741px] left-0 overflow-clip top-[1088px] w-[1920px]">
      <Row />
      <Column />
      <Column1 />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[96px] leading-[56px] left-[calc(50%+168px)] text-[48px] text-black text-nowrap top-[42px] tracking-[-0.96px] translate-x-[-50%] w-[432px] whitespace-pre">
      <p className="absolute font-['Sora:Regular',sans-serif] font-normal left-[95px] top-[20px]">About</p>
      <p className="absolute font-['Sora:ExtraBold',sans-serif] font-extrabold left-[260px] top-[20px]">Me</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute box-border content-stretch flex flex-col font-['Sora:Regular',sans-serif] font-normal gap-[20px] items-center justify-center left-[765px] px-[248px] py-0 text-[16px] text-zinc-500 top-[138px] tracking-[0.32px] w-[768px]">
      <p className="leading-[24px] relative shrink-0 w-[611px]">I’m an undergraduate with a strong interest in backend development, AI, and cloud technologies. I work with Python, Java, JavaScript, HTML, CSS, and MySQL, and I have a solid foundation in data structures and Java OOP.</p>
      <div className="leading-[24px] relative shrink-0 w-[610px]">
        <p className="mb-0">I’m currently building my skills in backend engineering while learning Python-based AI development and exploring how cloud platforms can support scalable applications.</p>
        <p>I aim to become a capable software engineer who can build efficient, well-structured systems. I’m also looking for an internship where I can apply what I’ve learned, gain real-world experience, and continue growing as a developer.</p>
      </div>
    </div>
  );
}

function Downlaod() {
  return (
    <div className="absolute inset-[14.15%_10.95%_15.12%_11.97%]" data-name="Downlaod">
      <div className="absolute inset-[-4.42%_-4.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <g id="Downlaod">
            <path d="M10.0002 12.791L10.0002 0.75" id="Stroke-1" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p31fcc480} id="Stroke-3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgPaths.p21aeb580} id="Stroke-4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconlyLightDownload() {
  return (
    <div className="absolute contents inset-[14.15%_10.95%_15.12%_11.97%]" data-name="Iconly/Light/Download">
      <Downlaod />
    </div>
  );
}

function Download() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Download">
      <IconlyLightDownload />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-black box-border content-stretch flex gap-[10px] items-center justify-center left-[844px] px-[30px] py-[12px] rounded-[8px] top-[467px]">
      <Download />
      <p className="font-['Lato:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-justify text-nowrap text-white tracking-[0.6px] whitespace-pre" dir="auto">
        Download CV
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[875px] left-[160px] overflow-clip top-[24px] w-[1602px]" data-name="Container">
      <Frame6 />
      <Frame17 />
      <div className="absolute left-[203px] rounded-[241px] size-[482px] top-[33px]" data-name="Circle 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[241px] size-full" src={imgCircle1} />
      </div>
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute bg-[#d7d7d7] h-[589px] left-0 overflow-clip top-[1829px] w-[1920px]">
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute box-border content-stretch flex gap-[16px] h-[96px] items-center justify-center leading-[56px] left-[32px] overflow-clip px-0 py-[20px] text-[48px] text-nowrap text-white top-0 tracking-[-0.96px] w-[1216px] whitespace-pre" data-name="Heading">
      <p className="font-['Sora:Regular',sans-serif] font-normal relative shrink-0">My</p>
      <p className="font-['Sora:ExtraBold',sans-serif] font-extrabold relative shrink-0">Projects</p>
    </div>
  );
}

function VuesaxLinearExport() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/export">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="export">
          <path d={svgPaths.p2cc25780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p5027180} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pac8ca00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_4" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ReadMore() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Read More">
      <VuesaxLinearExport />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <p className="font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[56px] min-w-full relative shrink-0 text-[48px] text-white tracking-[-0.96px] w-[min-content]">01</p>
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[40px] min-w-full relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-[min-content]">Track n Go (Logistics Management System)</p>
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-zinc-500 tracking-[0.32px] w-[min-content] whitespace-pre-wrap">{`A Java Swing application developed to automate logistics operations, including shipment management, delivery  scheduling, personnel tracking, real-time updates, and generating  performance reports.`}</p>
      <ReadMore />
    </div>
  );
}

function Details() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Details">
      <Frame7 />
    </div>
  );
}

function Project1() {
  return (
    <div className="absolute box-border content-stretch flex gap-[40px] h-[516px] items-center left-[32px] overflow-clip px-0 py-[20px] top-[116px] w-[1216px]" data-name="Project 1">
      <div className="h-[416px] relative shrink-0 w-[556px]" data-name="project1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProject11} />
      </div>
      <Details />
    </div>
  );
}

function VuesaxLinearExport1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/export">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="export">
          <path d={svgPaths.p2cc25780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p5027180} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pac8ca00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_4" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ReadMore1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Read More">
      <VuesaxLinearExport1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full">
      <p className="font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[56px] min-w-full relative shrink-0 text-[48px] text-white tracking-[-0.96px] w-[min-content]">02</p>
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[40px] min-w-full relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-[min-content]">Flixer (Java Android App)</p>
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-zinc-500 tracking-[0.32px] w-[min-content]">Flixer is a Java-based Android application that lets users add movies and series to a personalized watchlist. It allows users to track what they’re watching, manage their list, and quickly access details in a clean and simple interface.</p>
      <ReadMore1 />
    </div>
  );
}

function Details1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Details">
      <Frame8 />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex h-[476px] items-center justify-end overflow-clip relative shrink-0 w-[594px]" data-name="image">
      <div className="h-[416px] relative shrink-0 w-[556px]" data-name="project2 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProject21} />
      </div>
    </div>
  );
}

function Project2() {
  return (
    <div className="absolute box-border content-stretch flex gap-[40px] h-[516px] items-center left-[32px] overflow-clip px-0 py-[20px] top-[652px] w-[1216px]" data-name="Project 2">
      <Details1 />
      <Image />
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex h-[476px] items-center overflow-clip relative shrink-0 w-[594px]" data-name="image">
      <div className="h-[416px] relative shrink-0 w-[556px]" data-name="project3 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgProject31} />
      </div>
    </div>
  );
}

function VuesaxLinearExport2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/export">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="export">
          <path d={svgPaths.p2cc25780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p5027180} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pac8ca00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <g id="Vector_4" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function ReadMore2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Read More">
      <VuesaxLinearExport2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full">
      <p className="font-['Sora:ExtraBold',sans-serif] font-extrabold leading-[56px] min-w-full relative shrink-0 text-[48px] text-white tracking-[-0.96px] w-[min-content]">03</p>
      <p className="font-['Sora:Bold',sans-serif] font-bold leading-[40px] min-w-full relative shrink-0 text-[32px] text-white tracking-[-0.64px] w-[min-content]">Deskshop (E-Commerce Website)</p>
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[16px] text-zinc-500 tracking-[0.32px] w-[min-content]">Deskshop is an e-commerce website built with web technologies. It includes product listings, cart functionality, user-friendly navigation, and basic backend logic to simulate real online shopping workflows.</p>
      <ReadMore2 />
    </div>
  );
}

function Details2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Details">
      <Frame9 />
    </div>
  );
}

function Project3() {
  return (
    <div className="absolute box-border content-stretch flex gap-[40px] h-[516px] items-center left-[32px] overflow-clip px-0 py-[20px] top-[1188px] w-[1216px]" data-name="Project 3">
      <Image1 />
      <Details2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[1704px] left-1/2 overflow-clip top-[17px] translate-x-[-50%] w-[1280px]" data-name="Container">
      <Heading />
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
  );
}

function Project() {
  return (
    <div className="absolute bg-black h-[1988px] left-0 overflow-clip top-[2418px] w-[1920px]" data-name="Project">
      <Container1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative rounded-[4px] shrink-0 w-[500px]">
      <div aria-hidden="true" className="absolute border-[1.4px] border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-zinc-500 tracking-[-0.32px] w-[452px]">Your name</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Component 1">
      <Frame10 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex h-[56px] items-center px-[24px] py-[16px] relative rounded-[4px] shrink-0 w-[500px]">
      <div aria-hidden="true" className="absolute border-[1.4px] border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[16px] text-zinc-500 tracking-[-0.32px] w-[452px]">Email</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Component 2">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex h-[140px] items-start px-[24px] py-[16px] relative rounded-[4px] shrink-0 w-[500px]">
      <div aria-hidden="true" className="absolute border-[1.4px] border-black border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="basis-0 font-['Sora:Regular',sans-serif] font-normal grow h-full leading-[20px] min-h-px min-w-px relative shrink-0 text-[16px] text-zinc-500 tracking-[-0.32px]">How can I help?*</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Component 4">
      <Frame15 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] h-[56px] items-center justify-center px-[20px] py-[16px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[20px] text-nowrap text-white tracking-[0.4px] whitespace-pre">Get In Touch</p>
    </div>
  );
}

function SocialIcon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_3_1630)" id="Social icon">
          <path d={svgPaths.p24dd3180} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1630">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-black box-border content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 size-[56px]" data-name="Button">
      <SocialIcon4 />
    </div>
  );
}

function SocialIcon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Social icon">
          <path d={svgPaths.p19fb8dc0} fill="var(--fill-0, black)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <SocialIcon5 />
    </div>
  );
}

function SocialIcon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_804)" id="Social icon">
          <path d={svgPaths.p208c440} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_804">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <SocialIcon6 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-0 left-[-15%] right-[-15%] top-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 20">
        <g id="Group 1">
          <path d={svgPaths.p1dc26480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SocialIcon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Social icon">
      <Group2 />
    </div>
  );
}

function Button9() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[4px] shrink-0 size-[56px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-[-1px] pointer-events-none rounded-[5px]" />
      <SocialIcon7 />
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Button">
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function InputArea() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Input area">
      <Component />
      <Component1 />
      <Component2 />
      <Button10 />
    </div>
  );
}

function Column2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[484px] items-start justify-center left-[32px] overflow-clip px-0 py-[20px] top-0 w-[608px]" data-name="column">
      <InputArea />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 text-nowrap w-full whitespace-pre">
      <p className="relative shrink-0 text-black">Let’s</p>
      <p className="relative shrink-0">talk</p>
      <p className="relative shrink-0 text-black">for</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col font-['Sora:ExtraBold',sans-serif] font-extrabold gap-[12px] items-start leading-[56px] relative shrink-0 text-[48px] tracking-[-0.96px] w-full">
      <Frame11 />
      <p className="relative shrink-0 text-black w-full">Something special</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame16 />
      <p className="font-['Sora:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-zinc-500 tracking-[0.32px] w-full">I’m focused on developing strong backend solutions and exploring AI and cloud technologies, always challenging myself to think beyond the basics and deliver meaningful results.</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Sora:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[28px] text-black tracking-[-0.56px] w-full">pathiranamatheesha@gmail.com</p>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[40px] grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="Text">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Column3() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[484px] items-start justify-center left-[640px] overflow-clip px-0 py-[20px] top-0 w-[608px]" data-name="Column">
      <Text />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[484px] left-[137px] overflow-clip top-[60px] w-[1280px]" data-name="Container">
      <Column2 />
      <Column3 />
    </div>
  );
}

function ContactForm() {
  return (
    <div className="absolute bg-white h-[604px] left-1/2 overflow-clip top-[4430px] translate-x-[-50%] w-[1520px]" data-name="Contact Form">
      <Container2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[calc(58.33%-37px)] top-[10px]">
      <div className="absolute bg-white border-4 border-solid border-white h-[46px] left-[calc(83.33%-27px)] rounded-[30px] top-[10px] w-[147px]" />
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[46px] justify-center leading-[0] left-[calc(83.33%+46.5px)] not-italic text-[15px] text-black text-center top-[33px] translate-x-[-50%] translate-y-[-50%] w-[147px]">
        <p className="leading-[normal]">CONTACT ME</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[46px] justify-center leading-[0] left-[calc(75%+26.5px)] not-italic text-[17px] text-center text-white top-[33px] translate-x-[-50%] translate-y-[-50%] w-[147px]">
        <p className="leading-[normal]">Portfolio</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[46px] justify-center leading-[0] left-[calc(58.33%+36.5px)] not-italic text-[17px] text-center text-white top-[33px] translate-x-[-50%] translate-y-[-50%] w-[147px]">
        <p className="leading-[normal]">About me</p>
      </div>
      <div className="absolute flex flex-col font-['Montserrat:Bold',sans-serif] h-[46px] justify-center leading-[0] left-[calc(66.67%+31.5px)] not-italic text-[17px] text-center text-white top-[33px] translate-x-[-50%] translate-y-[-50%] w-[147px]">
        <p className="leading-[normal]">Skills</p>
      </div>
    </div>
  );
}

function NavbarAfterScroll() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Navbar after scroll">
      <div className="absolute bg-[#0b0b0b] h-[66px] left-0 top-0 w-[1920px]" />
      <Group3 />
    </div>
  );
}

export default function Main() {
  return (
    <div className="bg-white relative size-full" data-name="Main">
      <NavbarAfterScroll />
      <Hero />
      <Footer />
      <Frame2 />
      <Frame5 />
      <Project />
      <ContactForm />
    </div>
  );
}