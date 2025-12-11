// navbar.js - Exports a function that returns a Navbar UI

export function createNavbar() {
    // Check if user is logged in
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    
    const navStyle = `
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;
    
    const logoStyle = `
        font-size: 1.5rem;
        font-weight: bold;
        color: #667eea;
        text-decoration: none;
    `;
    
    const navLinksStyle = `
        display: flex;
        gap: 2rem;
        align-items: center;
    `;
    
    const linkStyle = `
        color: #333;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s;
    `;
    
    const logoutBtnStyle = `
        background: #ff4757;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 500;
    `;

    let navLinks = '';
    
    if (user) {
        // Logged in user
        navLinks = `
            <a href="index.html" style="${linkStyle}">Home</a>
            <a href="todos.html" style="${linkStyle}">My Todos</a>
            <span style="color: #667eea;">Welcome, ${user.name}!</span>
            <button onclick="handleLogout()" style="${logoutBtnStyle}">Logout</button>
        `;
    } else {
        // Not logged in
        navLinks = `
            <a href="index.html" style="${linkStyle}">Home</a>
            <a href="signup.html" style="${linkStyle}">Sign Up</a>
            <a href="login.html" style="${linkStyle}">Login</a>
        `;
    }
    
    return `
        <div style="${navStyle}">
            <a href="index.html" style="${logoStyle}">📝 TodoApp</a>
            <div style="${navLinksStyle}">
                ${navLinks}
            </div>
        </div>
        <script>
            function handleLogout() {
                localStorage.removeItem('user');
                window.location.href = 'index.html';
            }
        </script>
    `;
}

export default createNavbar;
