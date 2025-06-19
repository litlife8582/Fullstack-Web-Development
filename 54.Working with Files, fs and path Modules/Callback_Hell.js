const fs=require("fs")

fs.writeFile("Mayukh2.txt","Mayukh is a good boy2",()=>{
    console.log("Done")
    fs.readFile("Mayukh2.txt",(error,data)=>{
        console.log(error,data.toString())

        fs.writeFile("Mayukh2.txt","Mayukh is a good boy2",()=>{
            console.log("Done")
            fs.readFile("Mayukh2.txt",(error,data)=>{
                console.log(error,data.toString())

                fs.writeFile("Mayukh2.txt","Mayukh is a good boy2",()=>{
                    console.log("Done")
                    fs.readFile("Mayukh2.txt",(error,data)=>{
                        console.log(error,data.toString())

                        fs.writeFile("Mayukh2.txt","Mayukh is a good boy2",()=>{
                            console.log("Done")
                            fs.readFile("Mayukh2.txt",(error,data)=>{
                                console.log(error,data.toString())

                                fs.writeFile("Mayukh2.txt","Mayukh is a good boy2",()=>{
                                    console.log("Done")
                                    fs.readFile("Mayukh2.txt",(error,data)=>{
                                        console.log(error,data.toString())
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })

    })
})