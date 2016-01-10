//JS OOP to simulate a cash register at a store

// Creates new StaffMembers object with name and staff discount amount
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

// Staff members
var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create self as 'me' with a staff discount of 20%
var me = new StaffMember("Jaxson",20);

// Create the cash register object with properties (total, lastTransactionAmount)
// and methods (add, scan, voidLastTransaction, applyStaffDiscount)
var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    applyStaffDiscount: function(employee){
        this.total -= this.total * (employee.discountPercent/100);
        
    }
    
};

//Purchase one Eggs, one Milk, and three Magazines
cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply self staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
