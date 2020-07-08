// (function() {
//     // Add event listener
//     document.addEventListener("mousemove", parallax);
//     const elem = document.querySelector("#parallax");
//     // Magic happens here
//     function parallax(e) {
//         let _w = window.innerWidth/2;
//         let _h = window.innerHeight/2;
//         let _mouseX = e.clientX;
//         let _mouseY = e.clientY;
//         let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
//         let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
//         let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
//         let x = `${_depth3}, ${_depth2}, ${_depth1}`;
//         console.log(x);
//         elem.style.backgroundPosition = x;
//     }

// })();

// var title= [
//     'Lorem Ipsum 1', 'Lorem Ipsum 2', 'Lorem Ipsum 3', 'Lorem Ipsum 4', 'Lorem Ipsum 5', 'Lorem Ipsum 6', 'Lorem Ipsum 7', 'Lorem Ipsum 8'
// ]
text = [
    'lorrem 1', 'lorrem 2', 'lorrem 3', 'lorrem 4', 'lorrem 5', 'lorrem 6', 'lorrem 7', 'lorrem 8'
]
// // var main = document.getElementById('main-content')
// var act = document.getElementsByClassName('main-li')
var txtContent = document.getElementsByClassName('text-content')
// // var ulLeft = document.getElementsByClassName('left-ul')
// // console.log(act)
txtContent[0].innerHTML = text[0]
// // console.log(ulLeft.find('li.active'))
// // for (var i = 0; i < act.length; i++) {
// //     var dd = i
// //     act[i].onclick = function () {
// //         var current = document.getElementsByClassName("active");
// //         current[0].className = current[0].className.replace(" active", "");
// //         this.className += " active";
// //         if(this.className == 'main-li active') {
// //             for(let j = 0; j < text.length; j++) {
// //                 console.log(text[j])
// //             }
// //         }
// //         // this.innerHTML = 
// //     };
// // }

// function myFunction(n) {
//     console.log(n)
//     txtContent[0].innerHTML = text[n]
//     act[n].find('.active').removeClass('active');
//     this.parent().addClass('active');
// }
var topScroll = document.getElementsByClassName('top-abs')
var sliderBlock = document.getElementsByClassName('slider-main-li')
// console.log(sliderBlock)
window.onscroll = function() {scrollFunction()};
console.log(topScroll)

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    topScroll[0].style.display = "block";
  } else {
    topScroll[0].style.display = "none";
  }
}

function topFunction() {    
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function (e) {
          console.log(e)
            var current = this;
            console.log(current)
            for (var i = 0; i < elem.length; i++) {
                if (current != elem[i]) {
                  console.log(elem)
                    elem[i].classList.remove('active');
                    console.log(sliderBlock)
                    sliderBlock[0].click()
                } else if (current.classList.contains('active') === true) {
                  console.log(sliderBlock)
                    current.classList.remove('active');
                } else {
                    current.classList.add('active')
                    txtContent[0].innerHTML = text[i]
                }
            }
            e.preventDefault();
        });
    };
}

toggleItem(document.querySelectorAll('.main-li'));
toggleItem(document.querySelectorAll('.slider-main-li'));