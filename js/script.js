const darkModeButton = document.querySelector(".header__darkModeButton");

const container = document.querySelector(".container");

const h1 = document.querySelector(".h1"); 
const sectionHeader1 = document.querySelector(".sectionHeader1"); 
const sectionHeader2 = document.querySelector(".sectionHeader2"); 
const articleHeader1 = document.querySelector(".articleHeader1"); 
const articleHeader2 = document.querySelector(".articleHeader2"); 
const articleHeader3 = document.querySelector(".articleHeader3"); 

const minorText = document.querySelector(".header__minorText");

const navLink1 = document.querySelector(".header__navLink1");
const navLink2 = document.querySelector(".header__navLink2");
const navLink3 = document.querySelector(".header__navLink3");
const navLink4 = document.querySelector(".header__navLink4");

const introduction = document.querySelector(".introduction");
const introductionText1 = document.querySelector(".introductionText1");
const introductionText2 = document.querySelector(".introductionText2");

const linkButton1 = document.querySelector(".linkButton1");
const linkButton2 = document.querySelector(".linkButton2");
const linkButton3 = document.querySelector(".linkButton3");

const tableCaption = document.querySelector(".tableCaption");

const tableUITools = document.querySelector(".tableUITools");

const tableCell = document.querySelector(".tableCell");

const tableHeaderRow = document.querySelector(".tableHeaderRow");

const tableRow1 = document.querySelector(".tableRow1");
const tableRow2 = document.querySelector(".tableRow2");
const tableRow3 = document.querySelector(".tableRow3");
const tableRow4 = document.querySelector(".tableRow4");
const tableRow5 = document.querySelector(".tableRow5");
const tableRow6 = document.querySelector(".tableRow6");

const tableSymbolPositive1 = document.querySelector(".tableSymbolPositive1");
const tableSymbolPositive2 = document.querySelector(".tableSymbolPositive2");
const tableSymbolPositive3 = document.querySelector(".tableSymbolPositive3");

const tableSymbolNegative1 = document.querySelector(".tableSymbolNegative1");
const tableSymbolNegative2 = document.querySelector(".tableSymbolNegative2");
const tableSymbolNegative3 = document.querySelector(".tableSymbolNegative3");

const category1 = document.querySelector(".category1");
const category2 = document.querySelector(".category2");
const category3 = document.querySelector(".category3");

const blogPostPeak1 = document.querySelector(".blogPostPeak1");
const blogPostPeak2 = document.querySelector(".blogPostPeak2");
const blogPostPeak3 = document.querySelector(".blogPostPeak3");

const footerIcon1 = document.querySelector(".footerIcon1");
const footerIcon2 = document.querySelector(".footerIcon2");
const footerIcon3 = document.querySelector(".footerIcon3");
const footerIcon4 = document.querySelector(".footerIcon4");

const footerMinorText = document.querySelector(".footerMinorText");


// Dark Mode 

{
    const onChangeModeClick = () => {

        if(darkModeButton.innerText === "Dark Mode") {
            darkModeButton.innerText = "Light Mode";
        } else {
            darkModeButton.innerText = "Dark Mode";
        }
    
        darkModeButton.classList.toggle("darkModeButtonDark");
    
        container.classList.toggle("containerDark");
    
        h1.classList.toggle("h1Dark");
        sectionHeader1.classList.toggle("h2Dark");
        sectionHeader2.classList.toggle("h2Dark");
        articleHeader1.classList.toggle("h3Dark");
        articleHeader2.classList.toggle("h3Dark");
        articleHeader3.classList.toggle("h3Dark");
    
        minorText.classList.toggle("minorTextDark");
    
        navLink1.classList.toggle("navLinkDark");
        navLink2.classList.toggle("navLinkDark");
        navLink3.classList.toggle("navLinkDark");
        navLink4.classList.toggle("navLinkDark");
    
        introduction.classList.toggle("introductionDark");
        introductionText1.classList.toggle("introductionTextDark");
        introductionText2.classList.toggle("introductionTextDark");
        introductionText2.classList.toggle("questionTextDark")
    
        linkButton1.classList.toggle("linkButtonDark");
        linkButton2.classList.toggle("linkButtonDark");
        linkButton3.classList.toggle("linkButtonDark");
    
        category1.classList.toggle("categoryDark");
        category2.classList.toggle("categoryDark");
        category3.classList.toggle("categoryDark");
    
        blogPostPeak1.classList.toggle("blogPostPeakDark");
        blogPostPeak2.classList.toggle("blogPostPeakDark");
        blogPostPeak3.classList.toggle("blogPostPeakDark");
    
        tableCaption.classList.toggle("tableCaptionDark")
    
        tableUITools.classList.toggle("tableUIToolsDark")
    
        tableCell.classList.toggle("tableCellDark")
    
        tableHeaderRow.classList.toggle("tableHeaderRowDark")
    
        tableSymbolPositive1.classList.toggle("tableSymbolPositiveDark")
        tableSymbolPositive2.classList.toggle("tableSymbolPositiveDark")
        tableSymbolPositive3.classList.toggle("tableSymbolPositiveDark")
    
        tableSymbolNegative1.classList.toggle("tableSymbolNegativeDark")
        tableSymbolNegative2.classList.toggle("tableSymbolNegativeDark")
        tableSymbolNegative3.classList.toggle("tableSymbolNegativeDark")
    
        tableRow1.classList.toggle("tableRowDark");
        tableRow2.classList.toggle("tableRowDark");
        tableRow3.classList.toggle("tableRowDark");
        tableRow4.classList.toggle("tableRowDark");
        tableRow5.classList.toggle("tableRowDark");
        tableRow6.classList.toggle("tableRowDark");
        
        footerIcon1.classList.toggle("footerIconDark");
        footerIcon2.classList.toggle("footerIconDark");
        footerIcon3.classList.toggle("footerIconDark");
        footerIcon4.classList.toggle("footerIconDark");
    
        footerMinorText.classList.toggle("footerMinorTextDark");
    
    };
    
    darkModeButton.addEventListener("click", onChangeModeClick);
}
