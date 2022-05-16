const prevBtn=document.querySelector("#prev-button");
const nextBtn=document.querySelector("#next-button");
const book=document.querySelector("#book");

const page1=document.querySelector("#p1");
const page2=document.querySelector("#p2");
const page3=document.querySelector("#p3");

nextBtn.addEventListener("click",goNextPage);
prevBtn.addEventListener("click",goPrevPage);

let currentLocation=1;
let numOpapers=3;
let maxLocation=numOpapers+1;

function openBook()
{
    prevBtn.style.transform="translateX(-350px)";
    nextBtn.style.transform="translateX(350px)";
    book.style.transform="translateX(50%)";
}

function closeBook(isAtBeginning)
{
    if(isAtBeginning)
    {
        book.style.transform="translateX(0%)";
    }

    else
    {
        book.style.transform="translateX(100%)";
    }
    prevBtn.style.transform="translateX(0px)";
    nextBtn.style.transform="translateX(0px)";
}


function goPrevPage()
{
    if(currentLocation > 1)
    {
        switch(currentLocation)
        {
            case 2:
                closeBook(true);
                page1.classList.remove("flipped");
                page1.style.zIndex=3;
                break;
            case 3:
                page2.classList.remove("flipped");
                page2.style.zIndex=2;
                break;
            case 4:
                openBook();
                page3.classList.remove("flipped");
                page3.style.zIndex=1;
                break;
            default:
                throw new Error("Unkown State");
        }
        currentLocation--;
    }
}

function goNextPage()
{
    if(currentLocation < maxLocation)
    {
        switch(currentLocation)
        {
            case 1:
                openBook();
                page1.classList.add("flipped");
                page1.style.zIndex=1;   //becuse at the end instead of back 3 back 1 was visible so we need to change the z-index
                break;
            case 2:
                page2.classList.add("flipped");
                page2.style.zIndex=2;
                break;
            case 3:
                page3.classList.add("flipped");
                page3.style.zIndex=3;
                closeBook(false);
                break;
            default:
                throw new Error("Unkown State");
        }
        currentLocation++;
    }
}