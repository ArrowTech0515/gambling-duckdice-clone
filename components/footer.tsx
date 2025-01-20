export const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Sport Section */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Sport</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Sport Bets</a></li>
                <li><a href="#" className="hover:text-white">Sport Regulations</a></li>
                <li><a href="#" className="hover:text-white">Sport Stats</a></li>
              </ul>
            </div>
  
            {/* Decoy Token Section */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Decoy Token</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Decoy</a></li>
                <li><a href="#" className="hover:text-white">Staking</a></li>
                <li><a href="#" className="hover:text-white">Airdrop</a></li>
              </ul>
            </div>
  
            {/* Support Section */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">API Documentation</a></li>
                <li><a href="#" className="hover:text-white">Forum</a></li>
              </ul>
            </div>
  
            {/* Legal Section */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Terms Of Use</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Fair</a></li>
                <li><a href="#" className="hover:text-white">Bitcoin Gambling</a></li>
                <li><a href="#" className="hover:text-white">Gamble Aware</a></li>
              </ul>
            </div>
          </div>
  
          {/* Logos and Socials */}
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logos */}
            <div className="flex space-x-4">
              <img src="/path-to-logo1.png" alt="Logo 1" className="h-8" />
              <img src="/path-to-logo2.png" alt="Logo 2" className="h-8" />
              <img src="/path-to-logo3.png" alt="Logo 3" className="h-8" />
            </div>
  
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
  
          {/* Bottom Text */}
          <div className="mt-4 text-center text-sm">
            <p>© 2025 Your Betting Site. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  