use("crudDb")
console.log(db)

db.createCollection("Courses")

// db.Courses.insertMany([
//   { "name": "Mayukh", "college": "Vellore Institute of Technology" },
//   { "name": "Ananya", "college": "Delhi University" },
//   { "name": "Rohan", "college": "IIT Bombay" },
//   { "name": "Sneha", "college": "Anna University" },
//   { "name": "Arjun", "college": "IIT Kharagpur" },
//   { "name": "Priya", "college": "Jadavpur University" },
//   { "name": "Rahul", "college": "NIT Trichy" },
//   { "name": "Ishita", "college": "BITS Pilani" },
//   { "name": "Sarthak", "college": "IISc Bangalore" },
//   { "name": "Neha", "college": "Manipal Institute of Technology" },
//   { "name": "Yash", "college": "SRM Institute of Science and Technology" },
//   { "name": "Diya", "college": "Christ University" },
//   { "name": "Vikram", "college": "Amity University" },
//   { "name": "Tanvi", "college": "Lovely Professional University" },
//   { "name": "Aditya", "college": "Shiv Nadar University" },
//   { "name": "Kriti", "college": "Ashoka University" },
//   { "name": "Karan", "college": "Jamia Millia Islamia" },
//   { "name": "Megha", "college": "St. Xavier's College" },
//   { "name": "Nikhil", "college": "IIT Delhi" },
//   { "name": "Riya", "college": "Presidency University" },
//   { "name": "Varun", "college": "IIT Kanpur" },
//   { "name": "Simran", "college": "BHU Varanasi" },
//   { "name": "Aman", "college": "Aligarh Muslim University" },
//   { "name": "Preeti", "college": "Punjab University" },
//   { "name": "Deepak", "college": "Osmania University" },
//   { "name": "Ira", "college": "Mumbai University" },
//   { "name": "Raghav", "college": "Chandigarh University" },
//   { "name": "Tanya", "college": "Guru Gobind Singh Indraprastha University" },
//   { "name": "Siddharth", "college": "IIT Madras" },
//   { "name": "Esha", "college": "Symbiosis International University" },
//   { "name": "Harsh", "college": "Sharda University" },
//   { "name": "Avni", "college": "Kalinga Institute of Industrial Technology" },
//   { "name": "Manav", "college": "SASTRA University" },
//   { "name": "Pooja", "college": "MIT World Peace University" },
//   { "name": "Nitin", "college": "IIIT Hyderabad" },
//   { "name": "Lavanya", "college": "Graphic Era University" },
//   { "name": "Ajay", "college": "VIT Vellore" },
//   { "name": "Bhavya", "college": "University of Hyderabad" },
//   { "name": "Ritika", "college": "Lovely Professional University" },
//   { "name": "Kabir", "college": "IIT Guwahati" },
//   { "name": "Tushar", "college": "MS Ramaiah Institute of Technology" },
//   { "name": "Jatin", "college": "PES University" },
//   { "name": "Snehal", "college": "Indira Gandhi Delhi Technical University for Women" },
//   { "name": "Devansh", "college": "BITS Goa" },
//   { "name": "Mitali", "college": "Delhi Technological University" },
//   { "name": "Rohit", "college": "IIT Roorkee" },
//   { "name": "Pallavi", "college": "Thapar Institute of Engineering and Technology" },
//   { "name": "Utkarsh", "college": "Jaypee Institute of Information Technology" },
//   { "name": "Shreya", "college": "Hindustan Institute of Technology and Science" },
//   { "name": "Aarav", "college": "Amrita Vishwa Vidyapeetham" }
// ]
// )

let a=db.Courses.find({"college":"VIT Vellore"
})

console.log(a.toArray())

db.Courses.updateMany({'college':"VIT Vellore"
},{$set:{"college":"Vellore Institute Of Technology"}})

db.Courses.deleteMany({'college':"Vellore Institute of Technology"})