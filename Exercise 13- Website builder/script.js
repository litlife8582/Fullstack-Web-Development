function createCard(title, cName, views, monthsOld, duration, thumbnail){

    const container=document.getElementById("card-container");
    const card=document.createElement("div");
    card.className="card";

    card.innerHTML=`
    <img src="${thumbnail}" alt="${title}">
    <div class="card-content">
        <div class="card-title">${title}</div>
        <div class="card-meta">${cName} • ${views} • ${monthsOld} months ago</div>
        <div class="card-meta">${duration}</div>
    `;

    container.appendChild(card);
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

