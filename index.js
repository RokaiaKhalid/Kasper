let start = false;

// Select Skills Selector
let ourStats = document.querySelector('.stats');
let ourSkills = document.querySelector('.skills');
window.onscroll = function () {
  
  // Skills Offset Top
  let statsOffsetTop = ourStats.offsetTop;

  // Skills Outer Height
  let statsOuterHeight = ourStats.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  // let windowScrollTop = this.pageYOffset;
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > (statsOffsetTop + statsOuterHeight - windowHeight)) {

    let allStats = document.querySelectorAll('.stats .stat div');

      if (!start) {
        allStats.forEach(s => {
            let stat = s.dataset.stat;
            let count = setInterval(() => {
                s.textContent = +s.textContent + 1;
                if (s.textContent == stat) {
                    clearInterval(count);
                }
    
            }, 1000 / stat);
        })

          start = true;
      }
    


    }
    
     // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;
  // console.log(skillsOffsetTop)

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // console.log(skillsOuterHeight);

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    console.log('Reach');
    let allSkills = document.querySelectorAll('.prog-holder .prog span');

    allSkills.forEach(skill => {

        skill.style.width = skill.dataset.progress;

    })

  }

}

// Select Skills Selector

