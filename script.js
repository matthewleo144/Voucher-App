function addRow() {
    $("tbody").append(`
        <tr>
            <td class="width-300">
                <input type="text" class="form-control text-capitalize product-name">
            </td>
            <td class="width-150">
                <input type="number" class="form-control text-right cost" value="0" min="0">
            </td>
            <td class="width-150">
                <input type="number" class="form-control text-right quantity"  value="0" min=0">
            </td>
            <td class="text-right">
                <h4 class="mb-0 price">0</h4>
            </td>
            <td class="width-50">
                <button class="btn btn-outline-primary del-btn">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
        `);
}
addRow();
function total(){
    $("#total").html($(".price").toArray().map(el=>el.innerHTML).reduce((x,y)=>Number(x)+Number(y)));
}
$(".add-row-btn").click(function(){
    addRow();
})


$("tbody").delegate(".del-btn","click",function(){
    // $(this).parent().parent().remove();
    if($("tbody tr").toArray().length === 1){
        addRow();
    }
    $(this).parentsUntil("tbody").remove();
    total();
   
})


$("tbody").delegate("input","keyup change",function(){
    let cost = $(this).parentsUntil("tbody").find(".cost").val();
    let quantity = $(this).parentsUntil("tbody").find(".quantity").val();
    $(this).parentsUntil("tbody").find(".price").html(cost*quantity);
    total();
})
