$(document).ready(function () {
    SetupTabulator();
});

function SetupTabulator() {
    var tableData = [
        { id: 1, name: "Billy Bob", age: "12", gender: "male", height: 1, col: "red", dob: "14/05/1981", cheese: 1 },
        { id: 2, name: "Mary May", age: "1", gender: "female", height: 2, col: "blue", dob: "14/05/1982", cheese: true },
        { id: 3, name: "Jane Smith", age: "11", gender: "female", height: 2, col: "blue", dob: "14/05/1983", cheese: true },
        { id: 4, name: "Sharon May", age: "12", gender: "female", height: 2, col: "blue", dob: "14/05/1984", cheese: true },
        { id: 5, name: "John Smith", age: "13", gender: "male", height: 2, col: "blue", dob: "14/05/1985", cheese: true },
        { id: 6, name: "Maybeline Betty", age: "14", gender: "female", height: 2, col: "blue", dob: "14/05/1986", cheese: true },
        { id: 7, name: "Steven May", age: "15", gender: "male", height: 2, col: "blue", dob: "14/05/1987", cheese: true },
        { id: 8, name: "Betty Johns", age: "16", gender: "female", height: 2, col: "blue", dob: "14/05/1988", cheese: true },
        { id: 9, name: "Shirley Preston", age: "17", gender: "female", height: 2, col: "blue", dob: "14/05/1989", cheese: true },
        { id: 10, name: "Justin Wilson", age: "18", gender: "male", height: 2, col: "blue", dob: "14/05/1990", cheese: true },
        { id: 11, name: "Jordana White", age: "19", gender: "female", height: 2, col: "blue", dob: "14/05/1991", cheese: true },
        { id: 12, name: "P!nk", age: "20", gender: "female", height: 2, col: "blue", dob: "14/05/1992", cheese: true },
        { id: 13, name: "Eminem", age: "21", gender: "male", height: 2, col: "blue", dob: "14/05/1993", cheese: true },
        { id: 14, name: "Katy Perry", age: "22", gender: "female", height: 2, col: "blue", dob: "14/05/1994", cheese: true },
        { id: 15, name: "John White", age: "23", gender: "male", height: 2, col: "blue", dob: "14/05/1995", cheese: true }
    ];

    var table = new Tabulator("#example-table", {
        layout: "fitColumns",
        tooltips: true,
        addRowPos: "top",
        history: true,
        pagination: "local",
        paginationSize: 7,
        movableColumns: true,
        resizableRows: true,
        initialSort: [
            { column: "name", dir: "asc" },
        ],
        columns: [
            { title: "Name", field: "name" },
            { title: "Age", field: "age" },
            { title: "Gender", field: "gender" },
            { title: "Height", field: "height" },
            { title: "Favourite Color", field: "col" },
            { title: "Date Of Birth", field: "dob" },
            { title: "Cheese Preference", field: "cheese" }
        ]
    });

    table.setData(tableData);
} //end SetupTabulator
