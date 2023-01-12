{
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");

        const currencySelectionElement = document.querySelector(".js-currencySelection");
        const currency = currencySelectionElement.value;

        let currencyValue;

        const amount = +amountElement.value;
        const result = amount / currencyValue;
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `${result.toFixed(2)} ${" "}  ${currency}`;
    }

    const init = () => {

        const formElement = document.querySelector(".js-form");

        const currencySelectionElement = document.querySelector(".js-currencySelection");
        const currency = currencySelectionElement.value;

        let currencyValue;
        formElement.addEventListener("submit", onFormSubmit);

        switch (currency) {
            case "EUR":
                currencyValue = 4.70;
                break;

            case "AUD":
                currencyValue = 3.02;
                break;

            case "NOK":
                currencyValue = 0.44;
                break;
        }
    };

    init();
}

