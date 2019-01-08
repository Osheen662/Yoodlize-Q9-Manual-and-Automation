module.exports = (employeeList, value) => {
    let contains = false
    employeeList.forEach(employee=>{
        Object.keys(employee).forEach(key=>{
            if(employee[key]===value)
                contains = true
        })
    })
    return contains
}