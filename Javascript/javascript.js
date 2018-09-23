const coursedata = [
    {
           "auther_name": "Buky",
           "course_title": "Django for Beginners",
           "course_description": "A webframework for advance web development",
       
      "course_created_timestamp": "2018-09-21T14:23:43.051884Z"
       }
      ,{
           "auther_name": "Hardik Patel",
           "course_title": "Python",
           "course_description": "A webframework for advance web development",
           "course_created_timestamp": "2018-09-23T04:37:17.365554Z"
       }
       ,{
        "auther_name": "Hardik Patel",
        "course_title": "Python",
        "course_description": "A webframework for advance web development",
        "course_created_timestamp": "2018-09-23T04:37:17.365554Z"
    }
    ,{
        "auther_name": "Hardik Patel",
        "course_title": "Python",
        "course_description": "A webframework for advance web development",
        "course_created_timestamp": "2018-09-23T04:37:17.365554Z"
    }
    ,{
        "auther_name": "Hardik Patel",
        "course_title": "Python",
        "course_description": "A webframework for advance web development",
        "course_created_timestamp": "2018-09-23T04:37:17.365554Z"
    }
    ,{
        "auther_name": "Hardik Patel",
        "course_title": "Python",
        "course_description": "A webframework for advance web development",
        "course_created_timestamp": "2018-09-23T04:37:17.365554Z"
    }
   ];
     
   function courseTemplate(course) {

   var myphoto="https://learnwebcode.github.io/json-example/images/cat-1.jpg";
     return `
       <a  href="course.html" class="col-md-4 col-sm-6 col-xs-12 course">
          <video  sound fullscreen loop controls >
       <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
        </video>
       <h2 class="course-name">${course.course_title} <span class="auther">(${course.auther_name})</span></h2>
         <p><strong>Auther:</strong> ${(course.auther_name)}</p>
         <p><strong>Description:</strong> ${(course.course_description)}</p>
       
         ${course.favFoods ? (course.course_description) : ""}        </a>
  `;
   }
   
   document.getElementById("app").innerHTML = `
    
     ${coursedata.map(courseTemplate).join("")}
    
   `;
   