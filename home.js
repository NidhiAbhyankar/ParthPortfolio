const resume=document.querySelector('#first');
resume.addEventListener('click',function(){
  console.log('working');
  window.open("Nidhiabhyankar.pdf", "_blank");
});


const projects=document.querySelector('#second');
projects.addEventListener('click',function(){
  console.log('working trial');
  window.location.assign("projects.html");
});
