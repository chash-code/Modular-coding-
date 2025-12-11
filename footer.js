// footer.js - Exports a function that returns a Footer UI

export function createFooter() {
    const currentYear = new Date().getFullYear();
    
    return `
        <div style="text-align: center;">
            <p style="margin-bottom: 0.5rem; font-size: 1.1rem;">
                &copy; ${currentYear} TodoApp. All rights reserved.
            </p>
            <p style="opacity: 0.8; font-size: 0.9rem;">
                Built with ❤️ using Modular JavaScript
            </p>
            <div style="margin-top: 1rem; display: flex; gap: 1.5rem; justify-content: center;">
                <a href="#" style="color: white; text-decoration: none;">Privacy Policy</a>
                <a href="#" style="color: white; text-decoration: none;">Terms of Service</a>
                <a href="#" style="color: white; text-decoration: none;">Contact</a>
            </div>
        </div>
    `;
}

export default createFooter;
