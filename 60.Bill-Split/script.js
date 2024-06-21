document.addEventListener('DOMContentLoaded', (event) => {
    const billInput = document.getElementById('billInput');
    const tipElements = document.querySelectorAll('.tip');
    const customTipInput = document.getElementById('customTip');
    const noOfPeopleInput = document.getElementById('noOfPeople');
    const generateBtn = document.getElementById('generateBtn');
    const tipAmountSpan = document.getElementById('tipAmount');
    const totalAmountSpan = document.getElementById('totalAmount');
    const eachPersonBillSpan = document.getElementById('eachPersonBill');
    const resetBtn = document.getElementById('resetBtn');

    let tipPercentage = 0; 

    tipElements.forEach((tipElement) => {
        tipElement.addEventListener('click', () => {
            tipPercentage = parseFloat(tipElement.textContent) / 100;
            highlightSelectedTip(tipElement);
        });
    });

    customTipInput.addEventListener('input', () => {
        tipPercentage = parseFloat(customTipInput.value) / 100;
        removeHighlightFromTips();
    });
    // Function to highlight the selected tip
    function highlightSelectedTip(selectedTipElement) {
        tipElements.forEach((tipElement) => {
            tipElement.classList.remove('selected');
        });
        selectedTipElement.classList.add('selected');
    }

    function removeHighlightFromTips() {
        tipElements.forEach((tipElement) => {
            tipElement.classList.remove('selected');
        });
    }

    generateBtn.addEventListener('click', () => {
        const billAmount = parseFloat(billInput.value);
        const numberOfPeople = parseInt(noOfPeopleInput.value);

        if (isNaN(billAmount) || billAmount <= 0 || isNaN(numberOfPeople) || numberOfPeople <= 0) {
            alert('Please enter valid bill amount and number of people.');
            return;
        }

        const tipAmount = billAmount * tipPercentage;
        const totalAmount = billAmount + tipAmount;
        const eachPersonBill = totalAmount / numberOfPeople;

        tipAmountSpan.textContent = `$${tipAmount.toFixed(2)}`;
        totalAmountSpan.textContent = `$${totalAmount.toFixed(2)}`;
        eachPersonBillSpan.textContent = `$${eachPersonBill.toFixed(2)}`;
    });

    resetBtn.addEventListener('click', () => {
        billInput.value = '';
        noOfPeopleInput.value = '';
        customTipInput.value = '';
        tipAmountSpan.textContent = '';
        totalAmountSpan.textContent = '';
        eachPersonBillSpan.textContent = '';
        removeHighlightFromTips();
        tipPercentage = 0;
    });




});

