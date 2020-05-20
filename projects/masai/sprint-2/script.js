
function calc_bill() {
    
    //Getting the elements that are given input in HTML Page  
    var dosa = document.getElementById('Dosa')
    var idly = document.getElementById('Idly')
    var puri = document.getElementById('Puri')
    var pongal = document.getElementById('Pongal')
    var oldgst = document.getElementById('old_gst')
    var newgst = document.getElementById('new_gst')
    var frifun = document.getElementById('fri_fun')
    var suncheer = document.getElementById('sun_cheer')
    var gstval
    var discval

    //Getting the values of those elements which are selected and given input in the index page 
    if( dosa.checked ) {
        var dosaval = document.getElementById('Dosa_Quan').value
    }
    else {
        dosaval = 0
    }

    if( idly.checked ) {
        var idlyval = document.getElementById('Idly_Quan').value
    }
    else {
        idlyval = 0
    }

    if( puri.checked ) {
        var purival = document.getElementById('Puri_Quan').value
    }
    else {
        purival = 0
    }

    if( pongal.checked ) {
        var pongalval = document.getElementById('Pongal_Quan').value
    }
    else {
        pongalval = 0
    }

    if( oldgst.checked ) {
        gstval = 0.15
    }
    else if( newgst.value ) {
        gstval = 0.18
    }
    else {
        gstval = 0
    }

    if( frifun.checked ) {
        discval = 5
    }
    else if( suncheer.checked ) {
        discval = 10
    }
    else {
        discval = 0
    }

    //Calculation steps for Total Bill
    var tot_item = ( dosaval*50 + idlyval*35 + purival*40 + pongalval*45 )
    var tot_gst = tot_item * gstval
    var tot_bill = ( tot_item + tot_gst ) - discval

    //Displaying Total Bill
    var item_cost = document.getElementById('costitem')
    item_cost.textContent = "Items cost is: Rs." + tot_item + "/-"
    
    var disp_tax = document.getElementById('disptax')
    disp_tax.textContent = "Tax Calculated is: Rs." + Math.round(tot_gst) + "/-"

    var disc_given = document.getElementById('discgiven')
    disc_given.textContent = "Discount is: Rs." + Math.round(discval) + "/-"

    var disp_bill = document.getElementById('disbill')
    disp_bill.textContent = "The Final Bill is: Rs. "  + Math.round(tot_bill) + "/-"
    
}

//Adding Event Listener to button and giving callback function calc_bill.The most important step
var btn = document.getElementById("get_bill")
btn.addEventListener('click', calc_bill)
