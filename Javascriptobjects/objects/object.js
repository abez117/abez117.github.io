//define objects 
function printObject()
{
    var name_line = "<td>" + this.name + "</td>";
    var manufactured_line = "<td>" + this.manufactured + "</td>";
    var cost_line = "<td>" + this.cost + "</td>";

    var row = "<tr>" + name_line + manufactured_line + cost_line + "</tr>";
    document.write(row);

}

//define objects with function
function Object(name, manufactured, cost)
{
    //list of objects
    this.name = name;
    this.manufactured = manufactured;
    this.cost = cost;

    this.printObject = printObject;
}

//create objects
var major = new Object("Major Chip Hazard", "1997", "$57");
var colorado = new Object("Chevy Colorado", "2020", "$24,364");
var steve = new Object("Picture with Steve Downes", "2022", "Priceless");
var msi = new Object("MSI Stealth GS66", "2019", "1,700");
var smallville = new Object("Smallville: The Complete Series", "2011", "$117");
//display information
major.printObject();
colorado.printObject();
steve.printObject();
msi.printObject();
smallville.printObject();


