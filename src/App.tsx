import React from 'react';
import { ChefHat, Phone, ShoppingBag, Instagram } from 'lucide-react';

function App() {
  const menuItems = [
    {
      name: "Almond Orange Cake",
      description: "Our signature dessert - Flourless Almond cake with notes of fresh citrusy Orange",
      price: "₹450",
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80",
      tags: ["Gluten-free"]
    },
    {
      name: "Basque Cheesecake",
      description: "A cheesecake that boasts a rich, creamy center and a caramelized \"burnt\" top",
      price: "₹650",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
      tags: ["Gluten-free", "Nut-free"]
    },
    {
      name: "Chocolat Intense",
      description: "Decadent flourless Chocolate cake with a crispy base - chocolate coma guaranteed!",
      price: "₹550",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&q=80",
      tags: ["Can be made Nut-free"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Hero Section */}
      <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1600&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/40" />
        <nav className="relative z-10 flex justify-between items-center p-4 md:p-6 text-white">
          <div className="text-2xl md:text-3xl font-serif">Gât'oh</div>
          <div className="flex gap-4 md:gap-8 text-sm md:text-base">
            <a href="#menu" className="hover:text-gold-400 transition">Menu</a>
            <a href="#about" className="hover:text-gold-400 transition">About</a>
            <a href="#contact" className="hover:text-gold-400 transition">Contact</a>
          </div>
        </nav>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Artisanal French Pastries</h1>
          <p className="text-lg md:text-xl mb-8">Handcrafted with love in small batches</p>
          <a href="#menu" className="bg-[#c8a97e] text-white px-6 md:px-8 py-3 rounded hover:bg-[#b69162] transition">
            View Our Menu
          </a>
        </div>
      </header>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-20 px-4 md:px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 md:mb-16">Our Signature Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src={item.image} alt={item.name} className="w-full h-48 md:h-64 object-cover" />
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#c8a97e] font-semibold">{item.price}</span>
                  <div className="flex gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 px-4 md:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Story</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Founded in 2020, Gât'oh brings the authentic taste of French pastries to your doorstep. 
            Our master pastry chef combines traditional French techniques with local flavors to create 
            unique desserts that cater to various dietary preferences while maintaining the highest 
            quality standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <ChefHat size={32} className="mb-4 text-[#c8a97e]" />
              <h3 className="text-xl mb-2">Artisanal Quality</h3>
              <p className="text-gray-600 text-sm">Made fresh daily with premium ingredients</p>
            </div>
            <div className="flex flex-col items-center">
              <ShoppingBag size={32} className="mb-4 text-[#c8a97e]" />
              <h3 className="text-xl mb-2">Special Orders</h3>
              <p className="text-gray-600 text-sm">Custom cakes for special occasions</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone size={32} className="mb-4 text-[#c8a97e]" />
              <h3 className="text-xl mb-2">Easy Ordering</h3>
              <p className="text-gray-600 text-sm">Call or WhatsApp to place your order</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 px-4 md:px-6 bg-[#2c1810] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 font-serif">Visit Us</h3>
              <p className="text-gray-300 mb-2">123 Baker Street</p>
              <p className="text-gray-300 mb-6">Mumbai, Maharashtra 400001</p>
              <h3 className="text-xl mb-4 font-serif">Contact</h3>
              <p className="text-gray-300 mb-2">Phone: +91 865 752 0055</p>
              <p className="text-gray-300 mb-4">Email: hello@gatoh.in</p>
              <div className="flex gap-4">
                <Instagram size={24} className="text-[#c8a97e] hover:text-white transition cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4 font-serif">Hours</h3>
              <div className="text-gray-300">
                <p className="mb-2">Tuesday - Friday</p>
                <p className="mb-4">10:00 AM - 7:00 PM</p>
                <p className="mb-2">Saturday - Sunday</p>
                <p className="mb-4">9:00 AM - 8:00 PM</p>
                <p className="mb-2">Monday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0f0a] text-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Gât'oh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;