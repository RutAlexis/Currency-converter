{
    const chooseCurrency = (currency) => {

        switch (currency) {

            case "AUD":
                return 3.02;

            case "EUR":
                return 4.70;

            case "NOK":
                return 0.44;
        };
    };

    const finishResult = (result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `${result.toFixed(2)} ${currency} ${" "}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const currencySelectionElement = document.querySelector(".js-currencySelection");
        const currency = currencySelectionElement.value;
        const amountElement = document.querySelector(".js-amount");
        const amount = amountElement.value;
        const chooseCurrencyElement = chooseCurrency(currency);
        const result = amount / chooseCurrencyElement;

        finishResult(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
