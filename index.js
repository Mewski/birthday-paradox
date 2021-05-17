const babies = 50 //Aprox 50%

const count = 100 //Sample Size | Higher More precise

var prob = 0

var matches = 0

for (cnt = 0; cnt < count; cnt++) {

    const birthdays = new Array()
    let a = false

    for (i = 0; i < babies; i++) {
        const month = Math.floor(Math.random() * (12 - 1) + 1)
        var maxdays
        if (Math.floor(month / 2) == month / 2 && month !== 2) {
            maxdays = 30
        } else if (month == 2) {
            maxdays = 28
        } else {
            maxdays = 31
        }

        const day = Math.floor(Math.random() * (maxdays - 1) + 1)
        birthdays.push(`${day}/${month}`)
    }

    for (var i = 0; i < birthdays.length; i++) {
        for (var j = 0; j < birthdays.length; j++) {
            if (i != j) {
                if (birthdays[i] == birthdays[j]) {
                    a = true
                    matches++
                }
            }
        }
    }

    if (a) {
        prob++
    }
}

console.log(`Babies per Iteration: ${babies}
Average Chance: ${(prob / count) * 100}%
Iterations: ${count}
Total Matches: ${matches} matches of ${babies*count} babies`)