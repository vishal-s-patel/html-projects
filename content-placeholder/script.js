const header = document.getElementById('card_header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const author_name = document.getElementById('author_name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(setData, 2000);

function setData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="">';
    title.innerText = 'Lorem ipsum dolor sit amet';
    excerpt.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, provident.';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/17.jpg" alt="">';
    author_name.innerText = 'Vishal Patel';
    date.innerText = 'July 08, 2023';

    animated_bgs.forEach(element => element.classList.remove('animated-bg'));
    animated_bg_texts.forEach(element => element.classList.remove('animated-bg-text'));
}
