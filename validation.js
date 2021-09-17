const Validation = {
    isValidCreditCard(number) {

        const str = number.toString()

        let sum = 0;
        let isEven = false;

        for (let i = str.length - 1; i >= 0; i--) {
            let checkDigit = str.charAt(i);
            let nDigit = parseInt(checkDigit, 10);

            if (isEven && (nDigit *= 2) > 9) {
                nDigit -= 9;
            }

            sum += nDigit;
            isEven = !isEven;
        }

        return (sum % 10) === 0;

    },

    isbn10(str) {

        let sum10 = 0
        const s = (acc, val) => acc + val

        const arr = []

        for (let i = 10; i > 0; i--) {
            arr.push(i)
        }

        sum10 = str.split("")
            .map((el, i) => el * arr[i])
            .reduce(s)

        if (sum10 % 11 === 0) {
            return true

        }

        return false

    },

    isbn13(str) {
        let isEven = false
        let sum = 0

        for (let i = 0; i < str.length; i++) {
            let d = str.charAt(i)
            let nDigit = parseInt(d, 10)
            if (isEven) {
                nDigit *= 3

            }
            sum += nDigit;
            isEven = !isEven;

        }
        if (sum % 10 === 0 && str.length === 13) {
            return true
        }

        return false

    }
}