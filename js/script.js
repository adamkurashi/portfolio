let darkModeButton = document.querySelector(".header__darkModeButton");

let container = document.querySelector(".container");

let h1 = document.querySelector(".h1"); 
let sectionHeader1 = document.querySelector(".sectionHeader1"); 
let sectionHeader2 = document.querySelector(".sectionHeader2"); 
let articleHeader1 = document.querySelector(".articleHeader1"); 
let articleHeader2 = document.querySelector(".articleHeader2"); 
let articleHeader3 = document.querySelector(".articleHeader3"); 

let minorText = document.querySelector(".header__minorText");

let navLink1 = document.querySelector(".header__navLink1");
let navLink2 = document.querySelector(".header__navLink2");
let navLink3 = document.querySelector(".header__navLink3");
let navLink4 = document.querySelector(".header__navLink4");

let introduction = document.querySelector(".introduction");
let introductionText1 = document.querySelector(".introductionText1");
let introductionText2 = document.querySelector(".introductionText2");

let linkButton1 = document.querySelector(".linkButton1");
let linkButton2 = document.querySelector(".linkButton2");
let linkButton3 = document.querySelector(".linkButton3");

let tableCaption = document.querySelector(".tableCaption");

let tableUITools = document.querySelector(".tableUITools");

let tableCell = document.querySelector(".tableCell");

let tableHeaderRow = document.querySelector(".tableHeaderRow");

let tableRow1 = document.querySelector(".tableRow1");
let tableRow2 = document.querySelector(".tableRow2");
let tableRow3 = document.querySelector(".tableRow3");
let tableRow4 = document.querySelector(".tableRow4");
let tableRow5 = document.querySelector(".tableRow5");
let tableRow6 = document.querySelector(".tableRow6");

let tableSymbolPositive1 = document.querySelector(".tableSymbolPositive1");
let tableSymbolPositive2 = document.querySelector(".tableSymbolPositive2");
let tableSymbolPositive3 = document.querySelector(".tableSymbolPositive3");

let tableSymbolNegative1 = document.querySelector(".tableSymbolNegative1");
let tableSymbolNegative2 = document.querySelector(".tableSymbolNegative2");
let tableSymbolNegative3 = document.querySelector(".tableSymbolNegative3");

let category1 = document.querySelector(".category1");
let category2 = document.querySelector(".category2");
let category3 = document.querySelector(".category3");

let blogPostPeak1 = document.querySelector(".blogPostPeak1");
let blogPostPeak2 = document.querySelector(".blogPostPeak2");
let blogPostPeak3 = document.querySelector(".blogPostPeak3");

let footerIcon1 = document.querySelector(".footerIcon1");
let footerIcon2 = document.querySelector(".footerIcon2");
let footerIcon3 = document.querySelector(".footerIcon3");
let footerIcon4 = document.querySelector(".footerIcon4");

let footerMinorText = document.querySelector(".footerMinorText");

// Dark Mode 

let onChangeModeClick = () => {

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