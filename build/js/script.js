const wrongAccountDetail = document.getElementById('wrong');
const wrongCaption = '<p class="text-red-500 mb-2 font-jost font-medium">ⓘ Wrong email or password!</p>';

const authenticate = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'name@gmail.com' && password === '123456') {
        
        loginSuccess();
    } else {
        displayWrongCaption();
    }
};

const displayWrongCaption = () => {
    wrongAccountDetail.innerHTML = wrongCaption;
};

const loginSuccess = () => {
    const container = document.getElementById('container');

    container.removeChild();

    const successMessage = document.createElement('div');
    successMessage.id = 'login-success';
    successMessage.className = 'p-5 lg:absolute lg:bg-white lg:p-12 lg:right-1 lg:translate-x-[-25%] lg:top-1 lg:translate-y-[25%]';
    successMessage.innerHTML = `
        <img src="build/img/success.png" alt="" class="w-24 h-24 m-auto">
        <p class="font-jost text-lg mb-24 m-auto">Your login successful!</p>`;

    container.appendChild(successMessage);
};
