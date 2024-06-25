// Write your solution in this file!
let employee = {

}

function updateEmployeeWithKeyAndValue(employ, key, value) {

    return {
        ...employ, 
        [key]:value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue (employ, key, value) {
    employ[key] = value
    return employee
}

function deleteFromEmployeeByKey (employ, key) {
    const newEmploy = {...employ};
    delete newEmploy[key]
    return newEmploy
}

function destructivelyDeleteFromEmployeeByKey (employ, key) {
    delete employ[key]
    return employ
}
