const wrongAccountDetail = document.getElementById('wrong');
const wrongCaption = `<p class="text-red-500 mb-2 font-jost font-medium">ⓘ Wrong email or password!</p>`;

const authenticate = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    

    if (email === 'name@gmail.com' && password === '1') {

        loginSuccess();
    } else {
        event.preventDefault();
        displayWrongCaption();
    }
};


const displayWrongCaption = () => {
    wrongAccountDetail.innerHTML = wrongCaption;
};




const loginSuccess = () => {

    event.preventDefault();
    const container = document.getElementById('container');
    const container2 = document.getElementById('container2');

    container.innerHTML = '';
    container2.style.display = 'flex';

 


};
