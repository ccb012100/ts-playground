type RomanNumeral = "I" | "V" | "X" | "L" | "C" | "D" | "M";

type RomanNumeralIntMap = Record<RomanNumeral, number>;

const numeralMap: RomanNumeralIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

const specialCases: `${RomanNumeral}${RomanNumeral}`[] = [
    "IV",
    "IX",
    "XL",
    "XC",
    "CD",
    "CM",
];

function romanToInt(s: string): number {
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i] as RomanNumeral;

        switch (char) {
            case "I":
            case "X":
            case "C":
                if (i + 1 < s.length) {
                    const nextChar = s[i + 1] as RomanNumeral;

                    if (specialCases.includes(`${char}${nextChar}`)) {
                        total += numeralMap[nextChar] - numeralMap[char];
                        i++;
                        continue;
                    }
                }
                break;

            default:
                break;
        }

        total += numeralMap[<RomanNumeral>char];
    }

    return total;
}

["III", "LVIII", "MCMXCIV"].forEach((rn) => {
    const result = romanToInt(rn);

    console.log({ result });
});
