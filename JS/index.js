let todo = [];

let req = prompt("Enter your Choice : ");
while(true){
    if(req == "Quit"){
        console.log("Quitting app...");
        break;
    }
    
    if(req == "List"){
        console.log("----------")
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("----------");
    }

    else if(req == "Add"){
        let add = prompt("Enter your task :");
        todo.push(add);
        console.log("Task Added...");
    }

    else if(req == "Delete"){
        let del = prompt("Enter index of task you want to remove : ");
        todo.splice(del, 1);
        console.log("Task Deleted...");
    }

    else{
        console.log("Wrong Request...");
    }
    
    req = prompt("Enter your Choice : ");
}