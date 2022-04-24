const studentInformation = [
    ['akramul', '1', '8', 'six', 'mele', 'chuadanga', 2000],
    ['akash', '2', '12', 'seven', 'mele', 'bagerhat', 3000],
    ['sajol', '3', '15', 'seven', 'mele', 'kulna', 4000],
    ['rex', '4', '37', 'six', 'mele', 'joypurhat', 5000],
    ['sume', '5', '20', 'nine', 'female', 'jessore', 6000],
    ['salma', '6', '15', 'seven', 'female', 'Boresal', 2200],
    ['kolpona', '7', '12', 'six', 'female', 'rajshahi', 3300],
    ['habib', '8', '13', 'nine', 'mele', 'fane', 4000],
    ['sabbir', '9', '14', 'seven', 'mele', 'bugura', 4400],
    ['mou', '10', '19', 'seven', 'female', 'josor', 5500],
    ['mito', '11', '18', 'six', 'female', 'satkera', 600],
    ['mohona', '12', '20', 'six', 'male', 'gazipur', 2000],
    ['mohona', '13', '20', 'fore', 'female', 'tangail', 1500],
    ['pole', '14', '11', 'nine', 'female', 'narsingdi', 3030],
    ['raja', '15', '12', 'five', 'male', 'faridpur', 2300],
    ['misho', '16', '13', 'five', 'male', 'madaripur', 1250],
    ['santa', '17', '14', 'six', 'female', 'manikganj', 2300],
    ['orthe', '18', '15', 'seven', 'female', 'rajabari', 6000],
    ['badsha', '16', '16', 'six', 'male', 'rajabar', 2150],
    ['shakil', '20', '17', 'nine', 'male', 'kishoreganj', 2500],
    ['rocky', '21', '15', 'six', 'male', 'comila', 4500],
    ['mina', '22', '19', 'five', 'female', 'chandpur', 800],
    ['khokon', '23', '20', 'nine', 'male', 'noakhali', 1200],
    ['habiba', '24', '25', 'seven', 'female', 'feni', 1400],
    ['moisome', '25', '21', 'seven', 'female', 'rangamati', 180],
    ['mimi', '26', '22', 'five', 'female', 'bandarban', 1650],
    ['soniya', '27', '23', 'fore', 'female', 'chittagong', 1700],
    ['priya', '28', '24', 'fore', 'female', 'nator', 1800],
    ['bappy', '29', '20', 'fore', 'male', 'pabna', 2200],
    ['hasan', '30', '18', 'five', 'male', 'sirajganj', 2150],
  
];

// Total Admnission fees
let total_free =0;
studentInformation.forEach((data , index) => {

    // console.log(`
    // index number            :${index +1}

    // student Name            :${data[0]}
    // student Role            :${data[1]}
    // student Age             :${data[2]}
    // student Class           :${data[3]}
    // student Gender          :${data[4]}
    // student Location        :${data[5]}
    // student fees            :${data[6]}
   
    // `);

    total_free +=data[6]


    // Female Students

    // if (data[4] == 'female'){
    //     console.log(`
    //     index number            :${index +1}
    //     student Name            :${data[0]}
    //     student Role            :${data[1]}
    //     student Age             :${data[2]}
    //     student Class           :${data[3]}
    //     student Gender          :${data[4]}
    //     student Location        :${data[5]}
    //     student fees            :${data[6]}
        
        
    //     `);
     
    //  }
    // //  class wise student result
    // if (data[3] =='six'){
    //     console.log(`
    //     index number            :${index +1}
    //     student Name            :${data[0]}
    //     student Role            :${data[1]}
    //     student Age             :${data[2]}
    //     student Class           :${data[3]}
    //     student Gender          :${data[4]}
    //     student Location        :${data[5]}
    //     student fees            :${data[6]}
        
        
    //     `);

    // }


    // Location wise student result

    // if (data[5] == 'bagerhat'){
    //     console.log(`
    //     index number            :${index +1}
    //     student Name            :${data[0]}
    //     student Role            :${data[1]}
    //     student Age             :${data[2]}
    //     student Class           :${data[3]}
    //     student Gender          :${data[4]}
    //     student Location        :${data[5]}
    //     student fees            :${data[6]}
        
        
    //     `);
    // }

    if (data[2] >=10 && data[2] <=25){
        console.log(`
        index number            :${index +1}
        student Name            :${data[0]}
        student Role            :${data[1]}
        student Age             :${data[2]}
        student Class           :${data[3]}
        student Gender          :${data[4]}
        student Location        :${data[5]}
        student fees            :${data[6]}
        
        
        `);
    }

})


console.log(`
      total admision fress           :${total_free}
    
    `);

    





    


