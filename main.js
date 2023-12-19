let array = [
    "Россия", "США", "Китай", "Индия", "Бразилия", 
    "Германия", "Франция", "Япония", "Великобритания", "Италия", 
    "Канада", "Австралия", "Испания", "Мексика", "Южная Корея", 
    "Индонезия", "Турция", "Саудовская Аравия", "Швеция", "Нидерланды",
    "Швейцария", "Аргентина", "Польша", "Бельгия", "Норвегия", 
    "Австрия", "Дания", "Сингапур", "Южная Африка", "Новая Зеландия"
]


$(document).ready(function() {
    $("#container").hide();
    $("#fruits > p").hide();
    $("#modal").hide();

    $("#text").keyup(function() {
        let fromHtml = $("#text").val();
        $("#placeholder").text(fromHtml);

        if(fromHtml) {
            $("#container").show();
        }
        else {
            $("#container").hide();
        }
    });

    $("#show").click(function() {
        let fromHtml = $("#text").val();
        $("#placeholder").text(fromHtml);


        if(fromHtml) {
            $("#container").show();
        }
        else {
            $("#container").hide();
        }
    });

    $(".headline > button").click(function() {
        $("#fruits > p").hide();
        let cl = $(this).attr("class");
        $(`p.${cl}`).show();
    });

    $("#modalButton").click(function() {
        $("#modal").show();
    });
    $(".modal-content > button").click(function() {
        $("#modal").hide();
    });

    $("#country").keyup(function() {
        for(let i = 0; i < 5; i++) {
            $("#variants > p").remove();
        }
        let fromHtml = $("#country").val();
        let result = [];
        array.forEach(el => {
            if (el.toLocaleLowerCase().includes(fromHtml.toLocaleLowerCase()) && fromHtml) {
                result.push(el);
            }
        });
        for(let i = 0; i < 5; i++) {
            if (result[i]) {
                $("#variants").append(`<p>${result[i]}</p>`);
            }
        }
        $("#variants > p").click(function() {
            $("#country").val($(this).text());
        });
        
    });
});

/*
let find = "до";
array.forEach(el => {
    if (el.toLocaleLowerCase().includes(find.toLocaleLowerCase())) {
        result.push(el);
    }
});
*/