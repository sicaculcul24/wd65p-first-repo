//Information
const breadQuantity = 10;
const breadPrice = 749;

//first function: Calculate the total amount of purchased bread.
const multiplyTotalAmount = (breadQuantity, breadPrice) => breadQuantity * breadPrice 

    console.log('Bread Quantity: ' + breadQuantity)
    console.log('Bread Price: ' + breadPrice)
    const totalAmount = multiplyTotalAmount(10, 749)
    
multiplyTotalAmount()

//2nd function: Divide the total amount parameter into two equal amounts
const totalDividedAmount = () => {
    console.log('Total Amount: ' + totalAmount)
    const dividedAmount = totalAmount / 2;
    console.log(`Juan and Pedro have to contribute ${dividedAmount} each.`)
}

totalDividedAmount()



