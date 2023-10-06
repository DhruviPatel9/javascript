let familytree = {
    name: "Mohanbhai",
    age: 75,
    child: [
      {
        id: 1,
        name: "Jayeshbhai",
        age: 55,
        ocuupation: "Techer",
        vehicle: [
          {
            name: "Passion",
            number: 8737,
          },
          {
            name: "swift",
            number: 8737,
          },
        ],
        son: [
          {
            name: "Dhruvi",
            age: 28,
          },
          {
            name: "Aviraj",
            age: 23,
          },
        ],
      },
      {
        id: 2,
        name: "Dilpbhai",
        age: 42,
        ocuupation: "Techer",
        vehicle: [
          {
            name: "Shine",
            number: 8737,
          },
          {
            name: "swift",
            number: 8737,
          },
        ],
        son: [
          {
            name: "Het",
            age: 15,
          },
          {
            name: "Ridhham",
            age: 8,
          },
        ],
      },
      {
       
        
        ],
      },
    ],
  };
  // for (let key in familytree) {
  //   console.log("=------->", familytree[key]);
  // }
  
  // first
  
  // let x = "age";
  // console.log("=------->", familytree.child[0]);
  
  // second
  // console.log(familytree.name);
  // console.log(familytree.child[1].name);
  // console.log(familytree.child[1].son[0].name);
  // console.log(familytree.child[2].vehicle[0].name);
  // console.log(familytree.child[0].vehicle[0].number);
  // console.log(familytree.child[1].son[1].age);
  
  //Third
  
  // find all child name by family id like -["jigar ", "kavya"]
  // function fun(user) {
  //   let fil = familytree.child.find((e) => {
  //     return e.id === user;
  //   });
  
  //   let fill = fil.son.map((e) => {
  
  //     return e["name"] ;
  //   });
  
  //   return fill;
  // }
  
  // let fill = fun(1);
  // console.log("fill", fill);
