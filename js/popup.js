/* eslint-disable no-unused-vars */
const works1 = {
  projectImage: './images/Snapshoot-Portfolio1.svg',
  Title: 'Multi-post Story',
  Skills: '&#124; html &#124; Ruby on Rails &#124; css &#124; Github &#124;',
  firstText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum has been the industrys standard dummy text ever since the 1500swhen an unknown printer took a galley of type and scrambled it 1960s with thereleaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,  when an unknown Lorem Ipsum is simply dummy text of the printing and',
  secondText: 'Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the.',
  liveDemo: 'See live',
  DemoSource: 'See Source ../images/git-icon.svg',
  nextProject: 'Next Project &#8594;',
  previousProject: '&#8592; Previous Project',
  exitButton: '&#x2716;',
};

const works2 = {
  projectImage: './images/Snapshoot-Portfolio1.svg',
  Title: 'Multi-post Story',
  Skills: '&#124; html &#124; Ruby on Rails &#124; css &#124; Github &#124;',
  firstText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scramble',
  secondText: 'Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the.',
  liveDemo: 'See live',
  DemoSource: 'See Source',
  nextProject: 'Next Project &#8594;',
  previousProject: '&#8592; Previous Project',
  exitButton: '&#x2716;',
};

const works3 = {
  projectImage: './images/Snapshoot-Portfolio1.svg',
  Title: 'Multi-post Story',
  Skills: '&#124; html &#124; Ruby on Rails &#124; css &#124; Github &#124;',
  firstText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum has been the industrys standard dummy text ever since the 1500swhen an unknown printer took a galley of type and scrambled it 1960s with thereleaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,  when an unknown Lorem Ipsum is simply dummy text of the printing and',
  secondText: 'Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the.',
  liveDemo: 'See live',
  DemoSource: 'See Source',
  nextProject: 'Next Project &#8594;',
  previousProject: '&#8592; Previous Project',
  exitButton: '&#x2716;',
};

const works4 = {
  projectImage: './images/Snapshoot-Portfolio1.svg',
  Title: 'Multi-post Story',
  Skills: '&#124; html &#124; Ruby on Rails &#124; css &#124; Github &#124;',
  firstText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr Lorem Ipsum has been the industrys standard dummy text ever since the 1500swhen an unknown printer took a galley of type and scrambled it 1960s with thereleaLorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,  when an unknown Lorem Ipsum is simply dummy text of the printing and',
  secondText: 'Lorem Ipsum is simply dummy text of the printingand typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the.',
  liveDemo: 'See live',
  DemoSource: 'See Source',
  nextProject: 'Next Project &#8594;',
  previousProject: '&#8592; Previous Project',
  exitButton: '&#x2716;',
};

const bigImage = {
  Image: './images/Snapshoot-Portfolio2.svg',
};
const worksArr = [works1, works2, works3, works4];
window.addEventListener('load', () => {
  const Projects = document.getElementById('Projects');

  Projects.innerHTML += `
<div id="work-intro">
  <h3 id="work-title">MY RECENT WORK</h3>
</div>
<section id="work-grid-one">
<div class="project-grid">
  <img class="project-img" alt="project pic" src="images/Snapshoot-Portfolio2.svg">
    <div class="img-text">
      <h3 class="project-title">${worksArr[i].Title}</h3>
       <p class="project-intro">A daily selection of privately personalized reads;
       no accounts or sign-ups required.
       has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a standard dummy text.</p>
     <ul class="tag-list">
       <li class="tag">css</li>
       <li><span class="divider"></span></li>
       <li class="tag">html</li>
       <li><span class="divider"></span></li>
       <li class="tag">Bootsrap</li>
       <li><span class="divider"></span></li>
       <li class="tag">Ruby</li>
    </ul>
    <button type="button" class="btn" onclick="">See project</button>
  </div>
</div>
</section>
<section id="work-grid-two">
<div class="project-grid">
    <div class="img-text">
      <h3 class="project-title">${worksArr[i].Title}</h3>
       <p class="project-intro">A daily selection of privately personalized reads;
       no accounts or sign-ups required.
       has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a standard dummy text.</p>
     <ul class="tag-list">
       <li class="tag">css</li>
       <li><span class="divider"></span></li>
       <li class="tag">html</li>
       <li><span class="divider"></span></li>
       <li class="tag">Bootsrap</li>
       <li><span class="divider"></span></li>
       <li class="tag">Ruby</li>
    </ul>
      <button type="button" class="btn" onclick="">See project</button>
   </div>
  <img class="project-img" alt="project pic" src="images/Snapshoot-Portfolio2.svg">
</div>
</section>
</section>
<section id="work-grid-three">
<div class="project-grid">
  <img class="project-img" alt="project pic" src="images/Snapshoot-Portfolio2.svg">
    <div class="img-text">
      <h3 class="project-title">${worksArr[i].Title}</h3>
       <p class="project-intro">A daily selection of privately personalized reads;
       no accounts or sign-ups required.
       has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a standard dummy text.</p>
     <ul class="tag-list">
       <li class="tag">css</li>
       <li><span class="divider"></span></li>
       <li class="tag">html</li>
       <li><span class="divider"></span></li>
       <li class="tag">Bootsrap</li>
       <li><span class="divider"></span></li>
       <li class="tag">Ruby</li>
    </ul>
    <button type="button" class="btn" onclick="">See project</button>
  </div>
</div>
</section>
<section id="work-grid-four">
<div class="project-grid">
    <div class="img-text">
      <h3 class="project-title">${worksArr[i].Title}</h3>
       <p class="project-intro">A daily selection of privately personalized reads;
       no accounts or sign-ups required.
       has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a standard dummy text.</p>
     <ul class="tag-list">
       <li class="tag">css</li>
       <li><span class="divider"></span></li>
       <li class="tag">html</li>
       <li><span class="divider"></span></li>
       <li class="tag">Bootsrap</li>
       <li><span class="divider"></span></li>
       <li class="tag">Ruby</li>
    </ul>
     <button type="button" class="btn" onclick="">See project</button>
   </div>
   <img class="project-img" alt="project pic" src="images/Snapshoot-Portfolio2.svg">
 </div>
</section>
`;
});

const modal = document.querySelector('#Work-card-popup');
for (let i = 0; i < worksArr.length; i += 1) {
  modal.innerHTML = `<div class="popup">
    <div class="first-block">
       <h2 class="work-card-title">${worksArr[i].Title}</h2>
       <p class="x-icon">${worksArr[i].exitButton}</p>
     </div>
     <div class="images-container">
    <div class="PI"></div>
    
    <span onclick="function next()" class=""><i class="bi bi-chevron-compact-right"></i></span>
    <span onclick="function prev()" class=""><i class="bi bi-chevron-compact-left"></i></span>
     <p class="workText">${worksArr[i].firstText}</p>
     <p class="workText2">${worksArr[i].secondText}</p>

          <ul class="project-tags">
             <li class="work-tag">${worksArr[i].Skills}</li>
           </ul>
       <div class="btns">
          <button type="button" onclick="" class="btn1">
            ${worksArr[i].liveDemo}
            <i class="bi bi-arrow-up-right-circle"></i>
          </button>
          <button type="button" onclick="" class="btn2">
            ${worksArr[i].DemoSource}
            <img src="images/git-icon.svg" class="icons">
          </button>
         </div>
         <div class="go-to">
            <span onclick="function prev()" class="previous">${worksArr[i].previousProject}</span>
            <span onclick="function next()" class="next">${worksArr[i].nextProject}</span>
         </div>
         </div>
         </div>
`;
}

const img1 = document.querySelectorAll('first-project')[1];
const img2 = document.querySelectorAll('first-project')[2];
const img3 = document.querySelectorAll('first-project')[3];
const img4 = document.querySelectorAll('first-project')[4];
const ImgArr = [img1, img2, img3, img4];
let i = 0;

function setImg() {
  ImgArr[i + 1].style.border = '1px black';
}

function prev() {
  if (i <= 0) i = ImgArr.length;
  i -= 1;
  return setImg();
}

function next() {
  if (i >= ImgArr.length) i = -1;
  i += 1;
}

const seeProject = document.querySelectorAll('.btn');
const exitModal = document.querySelector('.x-icon');

document.querySelector('#Projects').addEventListener('click', (e) => {
  const { target } = e;

  if (!target.classList.contains('btn')) {
    return;
  }
  document.getElementById('Work-card-popup').style.display = 'block';
});

exitModal.addEventListener('click', () => {
  document.getElementById('Work-card-popup').style.display = 'none';
});
