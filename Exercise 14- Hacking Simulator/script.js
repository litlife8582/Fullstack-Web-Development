function time(){
    const t=Math.random()*7000;
    return t;
}


async function getData1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Initializing Hacking...")
        },time()
        )      
    }
    )   
}

async function getData2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Reading your Files...")
        },time()
        )      
    }
    )
}

async function getData3(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Password files Detected...")
        },time()
        )      
    }
    )
}

async function getData4(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Sending all passwords and personal files to server...")
        },time()
        )      
    }
    )
}

async function getData5(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve("Cleaning up...")
        },time()
        )      
    }
    )
}

async function main() {

    const con=document.querySelector(".container")

    await getData1().then(() => {
      con.innerHTML+=`Initializing Hacking...   `+"<br>"
    })

    await getData1().then(() => {
      con.innerHTML+=`Reading your Files...`+"<br>"
    })

    await getData1().then(() => {
      con.innerHTML+=`Password files Detected...`+"<br>"
    })

    await getData1().then(() => {
      con.innerHTML+=`Sending all passwords and personal files to server...`+"<br>"
    })

    await getData1().then(() => {
      con.innerHTML+=`Cleaning up...`+"<br>"
    })
    
    
    
}

main()