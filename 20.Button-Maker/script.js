
document.body.style.padding="0"
document.body.style.margin="0"
document.body.style.boxSizing="border-box";
document.body.style.fontFamily="sans-serif";

// background

let backGround=document.createElement('div');
backGround.style.height="115vh";
backGround.style.backgroundImage="linear-gradient(to bottom, #080808, #281f41, #512e79, #8a34ad, #cf28dc)";
backGround.style.display="flex";
backGround.style.flexDirection="column";
backGround.style.alignItems="center";
document.body.appendChild(backGround);

// heading
let headingButtonMaker=document.createElement('h1');
headingButtonMaker.textContent="Button Maker";
headingButtonMaker.style.color="#fff";
headingButtonMaker.style.fontSize="50px";
backGround.appendChild(headingButtonMaker);

// card-container
let cardContainer=document.createElement('div');
cardContainer.style.background="#DF91DF";
cardContainer.style.height="";
cardContainer.style.minWidth="20%";
cardContainer.style.borderRadius="12px";
cardContainer.style.padding="40px";
cardContainer.style.paddingBottom="60px";
cardContainer.style.color="black";
backGround.appendChild(cardContainer);


// label-container
let labelContainer=document.createElement('div');
labelContainer.style.display="flex";
labelContainer.style.flexDirection="column";
cardContainer.appendChild(labelContainer);

// label1   
let backgroundLabel=document.createElement('label');
backgroundLabel.textContent="BACKGROUND COLOR: ";
backgroundLabel.style.paddingBottom="10px";
backgroundLabel.style.fontWeight="600";
backgroundLabel.id="input1";
labelContainer.appendChild(backgroundLabel);


let backgroundOfButton=document.createElement('input');
backgroundOfButton.style.height="40px";
backgroundOfButton.style.borderRadius="10px";
backgroundOfButton.style.fontWeight="600";
backgroundOfButton.style.fontSize="18px";
backgroundOfButton.style.paddingLeft="10px";
backgroundOfButton.style.marginBottom="10px";
backgroundOfButton.id="input1";
labelContainer.appendChild(backgroundOfButton);


// label2
let fontColorLabel=document.createElement('label');
fontColorLabel.textContent="FONT COLOR: ";
fontColorLabel.style.fontWeight="600";
fontColorLabel.style.paddingBottom="10px";
fontColorLabel.id="input2";
labelContainer.appendChild(fontColorLabel);


let fontColorOfButton=document.createElement('input');
fontColorOfButton.id="input2";
fontColorOfButton.style.height="40px";
fontColorOfButton.style.fontWeight="600";
fontColorOfButton.style.fontSize="18px";
fontColorOfButton.style.paddingLeft="10px";
fontColorOfButton.style.borderRadius="10px";
fontColorOfButton.style.marginBottom="10px";
labelContainer.appendChild(fontColorOfButton);



// label3
let fontSizeLabel=document.createElement('label');
fontSizeLabel.textContent="FONT SIZE (in px): ";
fontSizeLabel.id="input3";
fontSizeLabel.style.fontWeight="600";
fontSizeLabel.style.paddingBottom="10px";
labelContainer.appendChild(fontSizeLabel);

let fontSizeOfButton=document.createElement('input');
fontSizeOfButton.id="input3";
fontSizeOfButton.style.borderRadius="10px";
fontSizeOfButton.style.fontWeight="600";
fontSizeOfButton.style.fontSize="18px";
fontSizeOfButton.style.paddingLeft="10px";
fontSizeOfButton.style.marginBottom="10px";
fontSizeOfButton.style.height="40px";
labelContainer.appendChild(fontSizeOfButton);


// label4
let fontWeightLabel=document.createElement('label');
fontWeightLabel.textContent="FONT WEIGHT: ";
fontWeightLabel.style.fontWeight="600";
fontWeightLabel.style.paddingBottom="10px";
fontWeightLabel.id="input4";
labelContainer.appendChild(fontWeightLabel);


let fontWeightOfButton=document.createElement('input');
fontWeightOfButton.id="input4";
fontWeightOfButton.style.height="40px";
fontWeightOfButton.style.fontWeight="600";
fontWeightOfButton.style.fontSize="18px";
fontWeightOfButton.style.paddingLeft="10px";
fontWeightOfButton.style.borderRadius="10px";
fontWeightOfButton.style.marginBottom="10px";
labelContainer.appendChild(fontWeightOfButton);

// label5
let paddingLabel=document.createElement('label');
paddingLabel.textContent="PADDING (in px): ";
paddingLabel.style.fontWeight="600";
paddingLabel.style.paddingBottom="10px";
paddingLabel.id="input5";
labelContainer.appendChild(paddingLabel);


let paddingOfButton=document.createElement('input');
paddingOfButton.id="input5";
paddingOfButton.style.height="40px";
paddingOfButton.style.borderRadius="8px";
paddingOfButton.style.fontWeight="600";
paddingOfButton.style.fontSize="18px";
paddingOfButton.style.paddingLeft="10px";
paddingOfButton.style.marginBottom="8px";
labelContainer.appendChild(paddingOfButton);


// label6    
let borderRadiusLabel=document.createElement('label');
borderRadiusLabel.textContent="BORDER RADIUS: ";
borderRadiusLabel.style.paddingBottom="10px";
borderRadiusLabel.style.fontWeight="600";
borderRadiusLabel.id="input6";
labelContainer.appendChild(borderRadiusLabel);


let borderRadiusOfButton=document.createElement('input');
borderRadiusOfButton.style.borderRadius="8px";
borderRadiusOfButton.style.marginBottom="8px";
borderRadiusOfButton.style.fontWeight="600";
borderRadiusOfButton.style.fontSize="18px";
borderRadiusOfButton.style.paddingLeft="10px";
borderRadiusOfButton.style.height="40px";
borderRadiusOfButton.id="input6";
labelContainer.appendChild(borderRadiusOfButton);


// apply-button-container
let applyBtnContainer=document.createElement('div');
applyBtnContainer.style.textAlign="right";
cardContainer.appendChild(applyBtnContainer);   

// custom-button-container
let customBtnContainer=document.createElement('div');
customBtnContainer.style.textAlign="center";
cardContainer.appendChild(customBtnContainer);

// custom-button
let customButton=document.createElement('button');
customButton.textContent="Custom Button"
customBtnContainer.appendChild(customButton);


// apply-button
let applyBtn=document.createElement('button');
applyBtn.textContent="Apply";
applyBtn.style.height="40px";
applyBtn.style.width="120px";
applyBtn.style.margin="10px 0px";
applyBtn.style.borderRadius="10px";
applyBtn.style.outline="none";
applyBtn.style.fontWeight="600";
applyBtn.style.color="white";
applyBtn.style.background="black";
applyBtn.style.fontSize="16px";
applyBtn.style.borderWidth="0";
applyBtnContainer.appendChild(applyBtn);

// Event->click

applyBtn.addEventListener('click',function(){
customButton.style.background=backgroundOfButton.value;
customButton.style.color=fontColorOfButton.value;
customButton.style.fontSize=fontSizeOfButton.value;
customButton.style.fontWeight=fontWeightOfButton.value;
customButton.style.padding=paddingOfButton.value;
customButton.style.borderRadius=borderRadiusOfButton.value;

});
