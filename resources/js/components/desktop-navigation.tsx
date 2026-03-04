export default function DesktopNavigation() {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-blue-300">Home</a></li>
                    <li><a href="/about" className="hover:text-blue-300">About</a></li>
                    <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}