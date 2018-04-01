
let currentList = 1;

function viewList(ListID){
    console.log("List Called for Viewing");
    let listsAvailable = $(".listMenuContent > div").length;
    for(let i=1; i <= listsAvailable; i++){
        if(("#List" + i + "Container") !== ListID){
            $("#List" + i + "Container").addClass("hidden");
        }
        else{
            currentList = i;
            $("#List" + currentList + "Container").removeClass("hidden");
        }
    }

}

function createList(){
    let children = $(".listMenuContent > div").length;
        currentList = children + 1;
        console.log("List Added");
        if (currentList > 1){
            $(".listMenuContent").append(
                '<div id="list' + currentList + '" class="list" onclick=\'viewList("#List' + currentList +'Container")\'>\n' +
                '                    <div class="listTitle" contenteditable="true">\n' +
                '                        (New List) \n' +
                '                    </div>\n' +
                '                    <div id="trashList'+currentList+'" class="trashListBtn fa fa-trash" onclick="trashItList(\'#list' + currentList + '\',\'#List'+currentList+'Container\', \'#List'+(currentList - 1)+'Container\')">\n' +
                '\n' +
                '                    </div>\n' +
                '                </div>'
            );
        }
        else {
            $(".listMenuContent").append(
                '<div id="list' + currentList + '" class="list" onclick=\'viewList("#List' + currentList +'Container")\'>\n' +
                '                    <div class="listTitle" contenteditable="true">\n' +
                '                        (New List) \n' +
                '                    </div>\n' +
                '                    <div id="trashList'+currentList+'" class="trashListBtn fa fa-trash" onclick="trashItList(\'#list' + currentList + '\',\'#List'+currentList+'Container\', \'#List'+(currentList)+'Container\')">\n' +
                '\n' +
                '                    </div>\n' +
                '                </div>'
            );
        }
        $(".container").addClass("hidden");
        $("#pageContent").append(
            '<div id="List'+currentList+'Container" class="container">\n' +
            '            <div class="addItemContainer">\n' +
            '                <div id="addItemBtn'+currentList+'" class="addItemBtn" onclick=\'taskAdd("#List'+currentList+'Container")\'>\n' +
            '                    Add Task\n' +
            '                </div>\n' +
            '            </div>\n' +
            '\n' +
            '            <div id="box1" class="itemBox">\n' +
            '                <div class="leftArea">\n' +
            '                    <div id="check1" class="checkBox" onclick="markComplete(\'#check1\', \'#box1\')">\n' +
            '\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div id="taskName'+currentList+'-1" class="rightArea" contenteditable="true">\n' +
            '                    (Task Name)\n' +
            '                </div>\n' +
            '                <div id="taskNotes'+currentList+'-1" class="itemInfo" contenteditable="true">\n' +
            '                    (Task Notes)\n' +
            '                </div>\n' +
            '                <div class="fa fa-trash" onclick="trashItTasks(\'#box1\')">\n' +
            '\n' +
            '                </div>\n' +
            '            </div>\n' +
            '\n' +
            '            <div id="box2" class="itemBox">\n' +
            '                <div class="leftArea">\n' +
            '                    <div id="check2" class="checkBox" onclick="markComplete(\'#check2\', \'#box2\')">\n' +
            '\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div id="taskName'+currentList+'-2" class="rightArea" contenteditable="true">\n' +
            '                    (Task Name)\n' +
            '                </div>\n' +
            '                <div id="taskNotes'+currentList+'-2" class="itemInfo" contenteditable="true">\n' +
            '                    (Task Notes)\n' +
            '                </div>\n' +
            '                <div class="fa fa-trash" onclick="trashItTasks(\'#box2\')">\n' +
            '\n' +
            '                </div>\n' +
            '            </div>\n' +
            '\n' +
            '            <div id="box3" class="itemBox">\n' +
            '                <div class="leftArea">\n' +
            '                    <div id="check3" class="checkBox" onclick="markComplete(\'#check3\', \'#box3\')">\n' +
            '\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div id="taskName'+currentList+'-3" class="rightArea" contenteditable="true">\n' +
            '                    (Task Name)\n' +
            '                </div>\n' +
            '                <div id="taskNotes'+currentList+'-3" class="itemInfo" contenteditable="true">\n' +
            '                    (Task Notes)\n' +
            '                </div>\n' +
            '                <div class="fa fa-trash" onclick="trashItTasks(\'#box3\')">\n' +
            '\n' +
            '                </div>\n' +
            '            </div>\n' +
            '\n' +
            '        </div>'
        );

        if (children > 11){
            $(".container").css("height",""+(640+((children - 11) * 55))+"px");
            $(".listMenu").css("height",""+(640+((children - 11) * 55))+"px");
        }

}

function taskAdd(ListID) {
    console.log("Task Added");
    let boxNum = $(ListID + "> div").length;
    console.log("Task Item Added");
    $(ListID).append(
        '<div id="box'+boxNum+'" class="itemBox">\n' +
        '                <div class="leftArea">\n' +
        '                    <div id="check'+boxNum+'" class="checkBox" onclick="markComplete(\'#check'+boxNum+'\',\'#box'+boxNum+'\')">\n' +
        '\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div id="taskName'+currentList+'-'+boxNum+'" class="rightArea" contenteditable="true">\n' +
        '                    (Task Name)\n' +
        '                </div>\n' +
        '                <div id="taskNotes'+currentList+'-'+boxNum+'" class="itemInfo" contenteditable="true">\n' +
        '                    (Task Notes)\n' +
        '                </div>\n' +
        '                <div class="fa fa-trash" onclick="trashItList(\'#box'+boxNum+'\')">\n' +
        '\n' +
        '                </div>\n' +
        '            </div>'
    );

    if(boxNum>9){
        $(".container").css("height",""+(635+((boxNum-9)*60))+"px");
        $(".listMenu").css("height",""+(635+((boxNum-9)*60))+"px");
    }
}


function markComplete(paraCheck, paraBox){
    console.log("Item Marked Complete");
    $(paraCheck).toggleClass("fa fa-check");
    $(paraBox).toggleClass("highlight");
}



function trashItList(toTrash, toTrashInsides, nextView){
    console.log("List Deleted");
    $(toTrash).remove();
    $(toTrashInsides).remove();
    viewList(nextView);
    let listNum = $(".listMenuContent > div").length;

    if (listNum <= 11){
        $(".container").css("height", "635px");
        $(".listMenu").css("height", "635px");
    }

    if (listNum > 11){
        $(".container").css("height",""+(640+((listNum - 11) * 55))+"px");
        $(".listMenu").css("height",""+(640+((listNum - 11) * 55))+"px");
    }
}


function trashItTasks(toTrash) {
    console.log("Task Deleted");
    $(toTrash).remove();
    let boxNum = $("#List" + currentList + "Container > div").length;

    if(boxNum <= 9) {
        $(".container").css("height", "635px");
        $(".listMenu").css("height", "635px");
    }

    if(boxNum > 9) {
        $(".container").css("height",""+(635+((boxNum-9)*60))+"px");
        $(".listMenu").css("height",""+(635+((boxNum-9)*60))+"px");
    }
}



