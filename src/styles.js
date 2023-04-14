const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading1: "font-sans font-bold xs:text-[40px] text-[35px] text-pastelOrange xs:leading-[60px] leading-[66px] w-full",
    heading2: "font-sans font-semibold xs:text-[48px] text-[40px] text-blue xs:leading-[76px] leading-[66px] w-full",
    heading3: "font-sans text-pastelOrange font-bold text-blue text-[18px]",
    heading4: "font-helvetica font-normal text-cream text-[16px] leading-[26px]",
    
    bigParagraph: "font-sans font-normal text-cream ss:text-[18px] text-[18px] text-cream ss:leading-[30px] leading-[27px]",
    paragraph: "font-sans font-normal text-cream text-[18px] leading-[30px]",


    hoverOrange: "cursor-pointer hover:rounded-[10px] hover:bg-brightOrange p-4",

   
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    iconSizing: "w-[76px] h-[76px] hover:bg-brightOrange rounded-[10px] color:blue px-2",
    iconWrap:"flex flex-col items-center pr-3",
    contactIcons:"w-[76px] h-[76px] color-cream hover:bg-brightOrange rounded-[15px]"
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;