const CAPSULE_COUNT = 100;

function init() {
    const capsuleContainer = document.getElementById("capsules");
    let html = "";
    for (let i = 0; i < CAPSULE_COUNT; i++) {
        html += `<div>
            <span id="capsuleLabel${i + 1}" class="badge badge-pill badge-success">Capsule #${i + 1}</span>
            &nbsp;<span id="guest${i + 1}">Unoccupied</span>
        </div>`
    }
    capsuleContainer.innerHTML = html;
}

init();

function handleBook(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    //grab capsule # 
    let capsuleNo = document.getElementById("bookingCapsule").value;

    //grab guest name
    let guestName = document.getElementById("guest").value;

    if(capsuleNo < 0 || capsuleNo > 100) {
        document.getElementById("messages").innerText = "Give capsule number is out of range";
    }
    //update capsule #
    else if(document.getElementById("guest" + capsuleNo).innerText !== "Unoccupied") {
        document.getElementById("messages").innerText = `Capsule ${capsuleNo} is occupied.`;
        document.getElementById("messages").classList.remove("alert-danger");
        document.getElementById("messages").classList.remove("alert-info");
        document.getElementById("messages").classList.add("alert-danger");
    } else {
        document.getElementById("guest" + capsuleNo).innerText = guestName;
        document.getElementById("capsuleLabel" + capsuleNo).classList.remove("badge-success");
        document.getElementById("capsuleLabel" + capsuleNo).classList.add("badge-danger");
        document.getElementById("messages").classList.remove("alert-danger");
        document.getElementById("messages").classList.remove("alert-info");
        document.getElementById("messages").classList.add("alert-info");
        document.getElementById("messages").innerText = `Guest: ${guestName} booked in capsule #${capsuleNo}.`;
    }

}

function handleCheckout(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    //grab capsule # 
    let capsuleNo = document.getElementById("checkOutCapsule").value;

    //grab guest name
    let guestName = document.getElementById("guest" + capsuleNo).innerText;

    if(document.getElementById("guest" + capsuleNo).innerText === "Unoccupied"){
        document.getElementById("messages").classList.remove("alert-danger");
        document.getElementById("messages").classList.remove("alert-info");
        document.getElementById("messages").classList.add("alert-danger");
        document.getElementById("messages").innerText = `Capsule ${capsuleNo} is already unoccupied.`;
    }
    else {
        //update capsule #
        document.getElementById("guest" + capsuleNo).innerText = "Unoccupied";
        document.getElementById("capsuleLabel" + capsuleNo).classList.remove("badge-danger");
        document.getElementById("capsuleLabel" + capsuleNo).classList.add("badge-success");
        document.getElementById("messages").classList.remove("alert-danger");
        document.getElementById("messages").classList.remove("alert-info");
        document.getElementById("messages").classList.add("alert-info");
        document.getElementById("messages").innerText = `Guest: ${guestName} checked out of capsule #${capsuleNo}`;
    }
}

