{
    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencySelectionElement = document.querySelector(".js-currencySelection");
        const currency = currencySelectionElement.value;

        let currencyValue;

        switch (currency) {

            case "AUD":
                currencyValue = 3.02;
                break;

            case "EUR":
                currencyValue = 4.70;
                break;

            case "NOK":
                currencyValue = 0.44;
                break;
        }

        const resultElement = document.querySelector(".js-result");
        const amountElement = document.querySelector(".js-amount");
        const amount = amountElement.value;
        const result = amount / currencyValue;

        resultElement.innerText = `${result.toFixed(2)} ${currency} ${" "}`;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}

