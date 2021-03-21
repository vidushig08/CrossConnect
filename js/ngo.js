n = 10;
person_name = "ABCD";
members = "4";
phone = "+91 XXXXXXXXXX";
date = "3rd April 2021";

function createCard(person_name, members, phone, date){
    document.write(
        '<div class="card" style="width: 18rem;">',
                '<div class="card-body">',
                  '<h5 class="card-title">Name: ', person_name, '</h5>',
                  '<h6 class="card-subtitle mb-2 text-muted">Number of Family Members: ', members,'</h6>',
                  '<p class="card-text">Phone Number: ', phone,'</p>',
                  '<p class="card-text">Date: ', date,'</p>',
                  '<button class = "btn btn-primary">Interested</button>',
                '</div>',
              '</div>'
    );
}

for (i = 0; i < n; i++) {
    createCard(person_name, members, phone, date);
}

  var userref=firebase.database().ref("Workers");
  userref.orderByChild("destination").equalTo("Mumbai").on('value',function(snapshot){
  console.log(snapshot.val())
  });




