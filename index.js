function showAllSmartphone() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/smartphones",
        success: function (data) {
            if (data != null && data.length > 0) {
                let content = "";
                for (let i = 0; i < data.length; i++) {
                    let smartphone = data[i];
                    content += `<tr>
                        <td>${smartphone.producer}</td>
                        <td>${smartphone.model}</td>
                        <td>${smartphone.price}</td>
                        <td class="btn"><button class="deleteSmartphone" onclick="deleteSmartphone(${smartphone.id})">Delete</button></td>
                    </tr>`;
                }
                document.getElementById("content").innerHTML = content;
            } else {
                document.getElementById("content").innerHTML = "không có dữ liệu";
            }
        }
    });

}
function createNewSmartphone(){
    let producer=document.getElementById("producer").value
    let model=document.getElementById("model").value
    let price=+document.getElementById("price").value
    let smartphone ={
        "producer": producer,
        "model":model,
        "price":price
    }
    $.ajax({
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type:"POST",
        url: "http://localhost:8080/api/smartphones",
        data:JSON.stringify(smartphone),
        success:function (){
            showAllSmartphone()
        }

    })

}
function deleteSmartphone(id){
    $.ajax({
        type:"DELETE",
        url: `http://localhost:8080/api/smartphones/${id}`,
        success: function (){
            showAllSmartphone()
        }
    })
}
