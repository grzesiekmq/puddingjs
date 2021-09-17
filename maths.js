const Maths = {
    combinations(k, n) {

        const fact = num => {
            if (num === 0) {
                return 1;
            }
            return num * fact(num - 1);
        }
        return Number((fact(n) / (fact(k) * fact(n - k))).toFixed());
    },

    dividesEvenly(a, b) {
        if (a % b === 0) {
            return true;
        }
        return false;
    },

    triangularNumberSeq(n) {
        if (n === 1) {
            return 1
        }
        return n + triangularNumberSeq(n - 1)
    },

    getDistance(a, b) {
        const xDiffSquared = (b.x - a.x) ** 2
        const yDiffSquared = (b.y - a.y) ** 2
        return Number(Math.sqrt(xDiffSquared + yDiffSquared).toFixed(3))
    },

    fib(n) {
        if (n === 0) {
            return 0
        } else if (n === 1) {
            return 1
        }
        return fib(n - 2) + fib(n - 1)

    },

    calcDet2x2(matrix) {

        const arr = matrix.flat()
        const [a, b, c, d] = arr

        return a * d - b * c
    },

    sumOfCubes(nums) {
        if (nums.length === 0) {
            return 0
        }
        return nums.map(el => el ** 3)
            .reduce((acc, val) => acc + val)
    },

    isDivisible(num, divisor) {
        return num % divisor === 0
    },

    missingAngle(angle1, angle2) {
        const result = 180 - (angle1 + angle2)
        return result
    },

    diagonalDifference(arr) {

        let primarySum = 0
        let secondarySum = 0

        for (let i = 0, j = 0; i < arr.length; i++, j++) {

            primarySum += arr[i][j]
        }

        for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
            secondarySum += arr[i][j]

        }

        return Math.abs(primarySum - secondarySum)

    },

    doubleFactorial(num) {

        if (num === -1 || num === 0) {
            return 1
        }

        if (num % 2 === 0) {
            return num * doubleFactorial(num - 2)
        }
        return num * doubleFactorial(num - 2)
    }

}