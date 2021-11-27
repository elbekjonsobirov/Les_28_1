let n = prompt('N sonini kiriting :')
let m = prompt('M sonini kiriting :')

n = parseInt(n)
m = parseInt(m)

if (n > m) {
    console.log(n - m)
} else if (m > n) {
    console.log(m - n)
} else if (n = m) {
    console.log(Math.pow(n, m))
}