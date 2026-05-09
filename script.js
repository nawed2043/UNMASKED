// Protection Logic
(function checkSession() {
    const isLoginPage = window.location.pathname.includes('login.html');
    const hasSession = sessionStorage.getItem('active_session');

    if (!hasSession && !isLoginPage) {
        window.location.href = 'login.html';
    }
})();

function logout() {
    sessionStorage.removeItem('active_session');
    window.location.href = 'login.html';
}